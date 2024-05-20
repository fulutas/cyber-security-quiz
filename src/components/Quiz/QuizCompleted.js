import React from 'react'
import Lottie from 'react-lottie';
import surveyCompletedAnimation from "../../animations/survey-completed.json"
import Confetti from 'react-confetti'
import { Button } from '@mantine/core';

const QuizCompleted = ({ setQuizStatus }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: surveyCompletedAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <Confetti />
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
      <div className="flex flex-col gap-5">
        <p className="text-2xl text-white">Anket başarıyla tamamlanmıştır. Teşekkürler!</p>
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