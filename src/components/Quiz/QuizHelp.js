import { Button, Modal } from '@mantine/core'
import React, { useState, useEffect } from 'react'
import { questions } from '../../data/questions'
import { TypeAnimation } from 'react-type-animation'

import itHuman from '../../assets/images/coder-with-mac.svg'
import ikHuman from '../../assets/images/ik-character.svg'
import maleUser from '../../assets/images/user-character.svg'
import femaleUser from '../../assets/images/lady-character.svg'

const QuizHelp = (props) => {
  const { opened, modalClose, currentQuestion, bonusHelpCount, setBonusHelpCount, userInfo } = props

  const departments = [
    { id: "it", title: "Bilgi İşlem", image: itHuman },
    { id: "ik", title: "İnsan Kaynakları", image: ikHuman },
  ]

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const currentQuestionHelp = questions[currentQuestion]

  const selectedDepartmenHelp = (department) => {
    setSelectedDepartment(department)
    setBonusHelpCount((prev) => prev - 1)
  }

  return (
    <Modal opened={opened} onClose={modalClose} size="xl" title={`${selectedDepartment.title} departmanından yardım hakkımı kullanıyorum.`}>
      {!selectedDepartment ? (
        <>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold text-lime-600">Hangi departmandan yardım olmak istiyorsunuz?</h1>
            {bonusHelpCount > 0 ? <p>Toplamda kullanabileceğiniz {bonusHelpCount} yardım hakkınız var.</p> : <p>Yardım hakkınız kalmadı! :(</p>}
          </div>
          <div className="flex justify-center gap-5 mt-5">
            {departments.map((department, index) => {
              return (
                <div
                  onClick={() => bonusHelpCount > 0 && selectedDepartmenHelp(department)}
                  key={department.id}
                  className={`flex flex-col justify-center items-center rounded-md cursor-pointer p-2 hover:bg-gray-100 ${bonusHelpCount === 0 && "opacity-60"}`}
                >
                  <label className="text-lg font-semibold">{department.title}</label>
                  <img src={department.image} width={250} alt={department.title} className="rounded-md cursor-pointer hover:bg-gray-100" />
                </div>
              )
            })}
          </div>
        </>
      ) : <HelpAnswer selectedDepartment={selectedDepartment} setSelectedDepartment={setSelectedDepartment} currentQuestionHelp={currentQuestionHelp} modalClose={modalClose} userInfo={userInfo} />}
    </Modal>
  )
}

export default QuizHelp


const HelpAnswer = ({ selectedDepartment, setSelectedDepartment, currentQuestionHelp, modalClose, userInfo }) => {
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const questionMessage = `Senaryo: ${currentQuestionHelp.scenario} Soru: ${currentQuestionHelp.question}`
  const userImage = userInfo.gender === "male" ? maleUser : femaleUser

  useEffect(() => {
    const timer = setTimeout(() => {
      const answer = currentQuestionHelp?.options.find(opt => opt.isCorrect);
      setCorrectAnswer(answer);
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentQuestionHelp]);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full">
        <img src={userImage} width={100} alt={""} className="" />
        <div className="flex w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
            </span>
          </div>
          <p className="text-lg font-normal py-2.5 text-gray-900 dark:text-white">
            <TypeAnimation
              splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
              sequence={[
                'Merhaba, desteğine ihtiyacım var. Yardımcı olabilir misin?',
                1000,
                questionMessage,
                2000,
              ]}
              speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
              omitDeletionAnimation={false}
              repeat={false}
            />
          </p>
        </div>
      </div>

      {correctAnswer && (
        <div className="flex w-full flex-row-reverse">
          <img src={selectedDepartment.id === "it" ? itHuman : ikHuman} width={100} alt={""} className="" />
          <div className="flex w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-green-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
              </span>
            </div>
            <p className="text-lg font-normal py-2.5 text-gray-900 dark:text-white">
              <TypeAnimation
                splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                sequence={[
                  'Merhaba, tabi yardımcı olabilirim. soruyu inceledim, doğru cevabı buldum.',
                  3000,
                  correctAnswer.answer,
                  4000,
                ]}
                speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                omitDeletionAnimation={false}
                repeat={false}
              />
            </p>
          </div>
        </div>
      )}

      <Button
        type="submit"
        color='gray.6'
        size='md'
        onClick={() => {
          setSelectedDepartment("")
          modalClose()
        }
        }
      >
        Kapat
      </Button>
    </div >

  )
}
