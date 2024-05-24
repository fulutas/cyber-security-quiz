import React, { useEffect } from 'react'
import Lottie from 'react-lottie';
import surveyCompletedAnimation from "../../animations/survey-completed.json"
import Confetti from 'react-confetti'
import { Button } from '@mantine/core';
import { api } from '../../api/endpoints';

const QuizCompleted = ({ quizStatus, setQuizStatus, userAnswers, userInfo, form }) => {

  // Toplam puanı hesapla
  const totalPoints = userAnswers.reduce((total, answer) => total + answer.selectedOption.points, 0);

  // Puan bazlı mesaj ve stil belirle
  let resultMessage = '';
  let resultStyle = '';

  if (totalPoints >= 85) {
    resultMessage = 'Güzel bir başlangıç için kriterleri sağladın.';
    resultStyle = 'text-green-500';
  } else if (totalPoints >= 70) {
    resultMessage = 'İyisin fakat mevzuata biraz daha hakim olmalısın.';
    resultStyle = 'text-yellow-500';
  } else if (totalPoints >= 55) {
    resultMessage = 'Kendini hızlıca geliştirmelisin, aksi halde kurumda veri ihlallerini senden biliriz 😆';
    resultStyle = 'text-yellow-500';
  } else if (totalPoints >= 30) {
    resultMessage = 'Başka bir iş mi baksan? 😆';
    resultStyle = 'text-yellow-500';
  } else {
    resultMessage = 'İlişkimiz başlamadan bitmeli :(';
    resultStyle = 'text-yellow-300';
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: surveyCompletedAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const postData = {
    "Name": userInfo?.name,
    "Surname": userInfo?.surname,
    "Email": userInfo?.email,
    "Gender": userInfo?.gender === "male" ? "1" : "2",
    "Age": String(userInfo?.age),
    "Answers": userAnswers?.map(answer => ({
      "Question": String(answer?.questionId),
      "QuestionTitle": String(answer?.question),
      "Score": String(answer?.selectedOption.points)
    }))
  }

  async function handleSaveSurvey() {
    return fetch(api.SaveSurvey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    if (quizStatus === "completed") {
      handleSaveSurvey()
    }
  }, [quizStatus]);

  return (
    <>
      {totalPoints >= 85 && <Confetti />}
      <Lottie
        className="p-0"
        options={defaultOptions}
        height={300}
        width={300}
      />
      <div className="flex flex-col gap-4">
        <p className="text-2xl w-full text-white"> Test sonuçlarınıza göre size geri bildirimde bulunmak istiyoruz.</p>
        <div className='flex items-center justify-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <p className="text-2xl text-white">
            Oyun Toplam Puanınız <span className='text-2xl text-yellow-200'>{totalPoints}</span>
          </p>
        </div>
        <p className={`text-2xl font-bold ${resultStyle}`}>{resultMessage}</p>
        <Button
          type="submit"
          variant="gradient"
          size='md'
          className='mt-5'
          onClick={() => {
            setQuizStatus("intro")
            form.reset()
          }}
        >
          Anasayfaya Dön
        </Button>
      </div>
    </>
  )
}

export default QuizCompleted