import React, {useState} from 'react';
import s from './Test.module.css'
type AnswerOptionsType = {
    answer:string,
    isCorrect: boolean
}
type TestQuestionsType ={
    question: string,
    answerOptions: AnswerOptionsType[]
}

const Test = () => {
    const testQuestions:TestQuestionsType[]  = [
        {question: "Что такое TDD?",
            answerOptions: [
                {answer: 'fff', isCorrect: false},
                {answer: 'aaa', isCorrect: true},
                {answer: 'fbb', isCorrect: false},
                {answer: 'ccc', isCorrect: false},
            ]
           },
        {question: "Что такое djfnkjcnds?",
            answerOptions: [
                {answer: '111', isCorrect: false},
                {answer: '555', isCorrect: true},
                {answer: '44', isCorrect: false},
                {answer: 'ccc', isCorrect: false},
            ]
        },
        {question: "Что такое 1212312?",
            answerOptions: [
                {answer: 'fff', isCorrect: false},
                {answer: 'aaa', isCorrect: true},
                {answer: 'fbb', isCorrect: false},
                {answer: 'ccc', isCorrect: false},
            ]
        }
    ]


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)


    const handleAnswerOptionClick=(isCorrect: boolean) => {
    if(isCorrect){
        setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
        if (nextQuestion < testQuestions.length){
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const refresh =() =>{
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }

    return (<div className={s.wrap}>

            <div className={s.testBlock}>

                {
                    showScore ?
                        <div className={s.showScore}>
                            <div>Правильных ответов {score} из {testQuestions.length}</div>
                        <button onClick={refresh} className={s.refresh}>Пройти еще раз</button>
                        </div>
                        :
                        <div className={s.questionSection}>
                            <div className={s.questionCount}>
                                <span>Вопрос {currentQuestion+1}</span> / {testQuestions.length}
                            </div>
                            <div className={s.questionText}>{testQuestions[currentQuestion].question}</div>
                            <div className={s.answerSection}>
                                {testQuestions[currentQuestion].answerOptions.map(item => (
                                    <button onClick={()=>handleAnswerOptionClick(item.isCorrect)}>{item.answer}</button>
                                ))}

                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default Test;