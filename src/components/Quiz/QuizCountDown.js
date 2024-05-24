import React from 'react'

const QuizCountDown = ({ countdown }) => {
  return (
    <div className="text-center text-red-500 font-bold text-xl">
      Kalan Süre: {Math.floor(countdown / 1000)} saniye
    </div>
  )
}

export default QuizCountDown