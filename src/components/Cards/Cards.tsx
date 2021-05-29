import React, {useState} from 'react';
import s from './Cards.module.css'

type CardsQuestions ={
    id:number;
    question: string,
    answer: string,
    level: string
}


const cardsQuestions:CardsQuestions[]  = [
    { id:1,
        question: "Что такое TDD?",
    answer:"test-driven development - техника разработки ПО, при котором сначала пишем тесты, а потом их удовлетворяем. Затем можем спокойно рефакторить и изменять код как угодно, т.к. у нас есть тесты, которые точно скажут, что мы где-то ошиблись ",
        level: "easy"}
    ,
    { id:2,
        question: "Что такое Redux? Для чего он нужен?",
        answer:"Redux – это библиотека для работы с состоянием приложения. (некоторое хранилище данных)",
        level: "easy"},
    { id:3,
        question: "Что такое чистая ф-ия?",
        answer:"Чистая ф-ия, это ф-ия, которая должна быть имьютабельная и идемпотентная",
        level: "easy"},
    { id:4,
        question: "Что такое Reducer?",
        answer:"Reducer - это функция, которая получает на входе стейт, и экшн (объект), который имеет как минимум свойство type,(инструкция), как нужно преобразовать стейт , возвращает измененный стейт",
        level: "easy"},
    { id:5,
        question: "Что такое компонент?",
        answer:"Компонент(-а) - функция, возвращающая JSX-разметку. Название функции должно быть с Большой буквы.Функция может принимать props (пропсы) - объект, который компонента может использовать внутри себя для отрисовки конкретных переданных в неё данных",
        level: "easy"},
    { id:6,
        question: "Что возвращается из useState?",
        answer:"Вызов useState вернёт пару значений: текущее состояние и функцию, обновляющую состояние."
    ,level: "easy"}
]

const Cards = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)

    const nextQuestionClick =() => {
        const nextQuestion = currentQuestion +1
        if (nextQuestion < cardsQuestions.length){
            setCurrentQuestion(nextQuestion)
            setShowAnswer(false)
        }
    }

    const backQuestionClick =() => {
            if (currentQuestion !==0) {
            setCurrentQuestion(currentQuestion-1)
                setShowAnswer(false)
            }
    }

    const showAnswerClick =() => {
        setShowAnswer(true)
        setCurrentAnswer(currentAnswer+1)
    }



    return (<div className={s.wrap}>
            <div className={s.description}>В данном разделе вы можете поучить теорию. Получаете вопрос, пытаетесь ответить самостоятельно, если не можете, смотрите ответ</div>
            <div className={s.cardsBlock}>
        <div className={s.questionCount}>
            <span>Вопрос {currentQuestion+1} / {cardsQuestions.length}</span>
        </div>
    <div className={s.questionText}>{cardsQuestions[currentQuestion].question}</div>

        {showAnswer?
        <div className={s.showAnswer}>{cardsQuestions[currentQuestion].answer}</div>: ''}
                <div className={s.buttonSection}>
    <button onClick={showAnswerClick}>Показать ответ</button>
        <div className={s.navigationButton}>

        <button onClick={backQuestionClick}>Назад</button>
            <button onClick={nextQuestionClick}>Далее</button>
        </div>
    </div>
            </div>
</div>





    )
}

export default Cards;