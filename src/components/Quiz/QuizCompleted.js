import React, { useEffect } from 'react'
import Lottie from 'react-lottie';
import surveyCompletedAnimation from "../../animations/survey-completed.json"
import Confetti from 'react-confetti'
import { Button } from '@mantine/core';
import { api } from '../../api/endpoints';

const QuizCompleted = ({ quizStatus, setQuizStatus, userAnswers, userInfo }) => {

  // Toplam puanı hesapla
  const totalPoints = userAnswers.reduce((total, answer) => total + answer.selectedOption.points, 0);

  // Puan bazlı mesaj ve stil belirle
  let resultMessage = '';
  let resultStyle = '';

  if (totalPoints >= 85) {
    resultMessage = 'Başarılı! 🥳';
    resultStyle = 'text-green-500';
  } else if (totalPoints >= 70) {
    resultMessage = 'İyisin fakat mevzuata biraz daha hakim olmalısın. 😇';
    resultStyle = 'text-yellow-500';
  } else if (totalPoints >= 55) {
    resultMessage = 'Kendini hızlıca geliştirmelisin, aksi halde kurumda veri ihlallerini senden biliriz 😆';
    resultStyle = 'text-orange-500';
  } else if (totalPoints >= 30) {
    resultMessage = 'Başka bir iş mi baksan? 🥸🤣';
    resultStyle = 'text-red-500';
  } else {
    resultMessage = 'İlişkimiz başlamadan bitmeli 🤭';
    resultStyle = 'text-red-300';
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
      .then(data => {
        console.log('Success:', data);
      })
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
        options={defaultOptions}
        height={400}
        width={400}
      />
      <div className="flex flex-col gap-5">
        <p className="text-2xl text-white"> Test sonuçlarınıza göre size geri bildirimde bulunmak istiyoruz. İşte aldığınız sonuç:</p>
        <p className={`text-2xl font-bold ${resultStyle}`}>{resultMessage}</p>
        <p className="text-xl text-white">Toplam Puanınız: {totalPoints}</p>
        <Button
          type="submit"
          variant="gradient"
          size='md'
          onClick={() => setQuizStatus("intro")}
        >
          Anasayfaya Dön
        </Button>
      </div>
    </>
  )
}

export default QuizCompleted