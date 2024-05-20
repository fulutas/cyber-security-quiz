import React from 'react'
import maleUser from '../../assets/images/user-character.svg'
import femaleUser from '../../assets/images/lady-character.svg'

const QuizUserInfo = ({ data }) => {
  const userImage = data.gender === "male" ? maleUser : femaleUser

  return (
    <div className="flex">
      <img src={userImage} width={80} />
      <div className="flex flex-col mt-3 ml-5">
        <span className="font-bold text-lg text-white">Merhaba, {`${data?.name} ${data?.surname}`}</span>
        <span className="text-lg text-gray-100">{`${data?.email}`}</span>
      </div>
    </div>
  )
}

export default QuizUserInfo