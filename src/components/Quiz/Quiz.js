import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCountDown } from 'ahooks';
import { Button, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion'

import { questions } from '../../data/questions';

import QuizCompleted from './QuizCompleted';
import QuizCountDown from './QuizCountDown';
import QuizUserInfo from './QuizUserInfo';
import QuizHelp from './QuizHelp';

const itemAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { y: 5, opacity: 0 },
}

const Quiz = (props) => {
  const { quizStatus, setQuizStatus, userInfo, form } = props

  const navigate = useNavigate();
  const SECOND = 45000;
  const BONUS_HELP_COUNT = 2;

  const [visible, { close, open }] = useDisclosure(false);
  const [opened, { close: modalClose, open: modalOpen }] = useDisclosure(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [targetDate, setTargetDate] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);
  const [bonusHelpCount, setBonusHelpCount] = useState(BONUS_HELP_COUNT);

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
    if (!userInfo) navigate("/")
  }, [userInfo, navigate]);

  useEffect(() => {
    if (currentQuestion === 0) {
      setTargetDate(Date.now() + SECOND);
    }

    const handleBeforeUnload = (event) => {
      const message = 'Çıkmak istediğinizden emin misiniz? Tüm ilerlemeniz kaybolacak.';
      event.preventDefault();
      event.returnValue = message;
      return message;
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
      setQuizStatus("completed");
    }
  };

  const handleQuit = () => {
    const confirmQuit = window.confirm('Çıkmak istediğinizden emin misiniz? Tüm ilerlemeniz kaybolacak.');
    if (confirmQuit) {
      setQuizStatus("intro");
      form.reset()
    }
  };


  return (
    <div className="max-w-2xl mx-auto p-6">
      {quizStatus === "completed" && (
        <div className="text-2xl font-bold text-center">
          <QuizCompleted form={form} quizStatus={quizStatus} setQuizStatus={setQuizStatus} userAnswers={userAnswers} userInfo={userInfo} />
        </div>
      )}
      {quizStatus === "started" && (
        <>
          <div className="mb-6">
            <div className="flex justify-between text-md text-gray-500 font-medium mb-2 flex-col md:flex-row">
              <QuizUserInfo data={userInfo} />
              <div className="flex flex-col self-center md:self-auto">
                <span className='text-lg text-gray-200 mt-3 self-center md:self-end'>Soru {currentQuestion + 1}/{questions.length}</span>
                <div className="flex gap-1">
                  {bonusHelpCount > 0 ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500 animate-pulse">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg><span
                        onClick={() => bonusHelpCount > 0 && modalOpen()}
                        className={`text-lg text-yellow-400 font-semibold hover:underline cursor-pointer`}
                      >
                        {bonusHelpCount} joker hakkınız var.
                      </span>
                    </>
                  ) : <span className={`text-lg text-gray-200 font-semibold`}>Joker hakkınız kalmadı :(</span>}
                </div>
              </div>
            </div>
            <QuizCountDown countdown={countdown} />
            <div className="flex flex-col gap-5 text-left mb-4 mt-7">
              {questions[currentQuestion].scenario.length > 0 && (
                <div>
                  <label className='text-orange-500 text-lg font-semibold'>Senaryo</label>
                  <p className="font-semibold text-xl text-white">{questions[currentQuestion].scenario}</p>
                </div>
              )}
              <div>
                <p className="font-semibold text-xl text-gray-100">{questions[currentQuestion].question}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 relative">
            <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 0 }} />
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                id={index}
                key={option.label}
                variants={itemAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`text-lg py-2 px-4 border bg-white shadow-sm text-gray-800 rounded transition duration-200 hover:bg-indigo-100
                ${selectedOption !== null && selectedOption.index === index ? (option.isCorrect ? '!bg-green-400' : '!bg-red-500') : ''}
                  ${selectedOption !== null && selectedOption.index !== index && index === correctOptionIndex ? '!bg-green-400' : ''}
                `}
                onClick={() => handleAnswerOptionClick(option, index)}
                disabled={selectedOption !== null}
              >
                <div className="flex">
                  <p className="text-left"> {option.answer}</p>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              color='gray.6'
              size='md'
              onClick={handleQuit}
              fullWidth
            >
              Vazgeç
            </Button>
          </div>
          <QuizHelp
            opened={opened}
            modalClose={modalClose}
            currentQuestion={currentQuestion}
            bonusHelpCount={bonusHelpCount}
            setBonusHelpCount={setBonusHelpCount}
            userInfo={userInfo}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;