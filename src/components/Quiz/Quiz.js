import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCountDown } from 'ahooks';
import { questions } from '../../data/questions';
import QuizCompleted from './QuizCompleted';
import { Button, LoadingOverlay } from '@mantine/core';
import QuizCountDown from './QuizCountDown';
import { useDisclosure } from '@mantine/hooks';

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const SECOND = 45000;

  const [visible, { close, open }] = useDisclosure(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [targetDate, setTargetDate] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);


  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      handleNextQuestion();
      if (currentQuestion < 10) {
        setTargetDate(Date.now() + SECOND);
      }
    },
  });

  useEffect(() => {
    if (!location?.state?.userInfo) navigate("/")
  }, [location?.state, navigate]);

  useEffect(() => {
    if (currentQuestion === 0) {
      setTargetDate(Date.now() + SECOND);
    }

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = 'Çıkmak istediğinizden emin misiniz? Tüm ilerlemeniz kaybolacak.';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentQuestion]);

  useEffect(() => {
    const correctIndex = questions[currentQuestion].options.findIndex(option => option.isCorrect);
    setCorrectOptionIndex(correctIndex);
  }, [currentQuestion]);

  const handleAnswerOptionClick = (option, optionIndex) => {
    const newAnswer = {
      questionId: questions[currentQuestion].questionId,
      scenario: questions[currentQuestion].scenario,
      question: questions[currentQuestion].question,
      selectedOption: {
        label: option.label,
        answer: option.answer,
        isCorrect: option.isCorrect,
        points: option.points
      },
    };
    setUserAnswers([...userAnswers, newAnswer]);
    setSelectedOption({ index: optionIndex, isCorrect: option.isCorrect });


    if (option.isCorrect) {
      setScore(score + option.points);
    }

    setTimeout(() => {
      open();
    }, 2000);

    setTimeout(() => {
      handleNextQuestion();
      close()
    }, 3000);

  };

  const handleNextQuestion = () => {
    close()
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTargetDate(Date.now() + SECOND);
      setSelectedOption(null);
    } else {
      setIsQuizCompleted(true);
      // Burada API isteği yapılacak.
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {isQuizCompleted ? (
        <div className="text-2xl font-bold text-center">
          <QuizCompleted />
        </div>
      ) : (
        <>
          <div className="mb-6">
            <div className="flex justify-between text-md text-gray-500 font-medium mb-2">
              <div className="flex flex-col">
                <span className="font-bold">Merhaba, {`${location?.state?.userInfo?.name} ${location?.state?.userInfo?.surname}`}</span>
                <span className="text-sm">{`${location?.state?.userInfo?.email}`}</span>
              </div>
              <span>Soru {currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className="text-left mb-4 mt-7">
              <p className="font-semibold text-xl">{questions[currentQuestion].scenario}</p>
              <p className="mt-2 text-lg text-gray-800">{questions[currentQuestion].question}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 relative">
            <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 0 }} />
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={option.label}
                className={`py-2 px-4 border bg-white shadow-sm text-gray-800 rounded transition duration-200
                ${selectedOption !== null && selectedOption.index === index ? (option.isCorrect ? 'bg-green-400' : 'bg-red-500') : ''}
                  ${selectedOption !== null && selectedOption.index !== index && index === correctOptionIndex ? 'bg-green-400' : ''}
                `}
                onClick={() => handleAnswerOptionClick(option, index)}
                disabled={selectedOption !== null}
              >
                <div className="flex">
                  <p className="text-left"> {option.answer}</p>
                </div>
              </button>
            ))}
          </div>
          <QuizCountDown countdown={countdown} />
          <div className="mt-10">
            <Link to="/">
              <Button
                type="submit"
                color='gray'
                size='md'
                fullWidth
              >
                Vazgeç
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;