import React from 'react'
import Lottie from 'react-lottie';
import surveyCompletedAnimation from "../animations/survey-completed.json"
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';

const QuizCompleted = () => {
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
        <p className="text-2xl text-gray-700">Anket başarıyla tamamlanmıştır. Teşekkürler!</p>
        <Link to="/">
          <Button
            type="submit"
            variant="gradient"
            size='md'
          >
            Anasayfaya Dön
          </Button>
        </Link>
      </div>
    </>
  )
}

export default QuizCompleted