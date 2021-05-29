import React, {useState} from 'react';
import s from './Cards.module.css'

type CardsQuestions ={
    id:number;
    question: string,
    answer: string,
    level: string
}

type FilterValueType = "easy" | "hard" | "all"


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
    ,level: "easy"},
    { id:7,
        question: "Что такое WebWorker?",
        answer:"."
        ,level: "hard"},
    { id:8,
        question: "Что такое IndexedDB?",
        answer:"."
        ,level: "hard"},
    { id:9,
        question: "Отличие == от ===?",
        answer:"."
        ,level: "easy"},
    { id:10,
        question: "Расшифруй все буквы аббревиатуры SOLID?",
        answer:"."
        ,level: "easy"},
    { id:11,
        question: "Что такое SEO и почему SPA для SEO не очень?",
        answer:"."
        ,level: "hard"},
    { id:12,
        question: "Что такое cleanup для useEffect?",
        answer:"."
        ,level: "hard"},
    { id:13,
        question: "Что такое SPA и в чём суть?",
        answer:"."
        ,level: "easy"},
    { id:14,
        question: "Что такое HOC?",
        answer:"."
        ,level: "easy"},
    { id:15,
        question: "Что такое NodeJS?",
        answer:"."
        ,level: "easy"},
    { id:16,
        question: "Расшифруй аббревиатуру CRUD",
        answer:"."
        ,level: "easy"},
    { id:17,
        question: "Назовите любое отличие HTTP1 от HTTP2",
        answer:"."
        ,level: "hard"},
    { id:18,
        question: "Чем отличается localStorage от sessionStorage?",
        answer:"."
        ,level: "hard"},
    { id:19,
        question: "Чем оличается Agile от Waterfall?",
        answer:"."
        ,level: "easy"},
    { id:20,
        question: "Приведите минимум 2 примера Generic в TypeScript в React?",
        answer:"."
        ,level: "hard"},
    { id:21,
        question: "Что возвращает функция combineReducers? ",
        answer:"."
        ,level: "easy"},
    { id:22,
        question: "Перечислить методы жизненного цикла классового компонента в правильном порядке",
        answer:"."
        ,level: "hard"},
    { id:23,
        question: "Назовите любые 3 метода функции?",
        answer:"."
        ,level: "easy"},
    { id:23,
        question: "Кто такой Babel и что он делает?",
        answer:"."
        ,level: "hard"},
    { id:24,
        question: "Расшифруйте аббревиатуру БЭМ?",
        answer:"."
        ,level: "easy"},
    { id:25,
        question: "Что такое document.querySelector?",
        answer:"."
        ,level: "easy"},
    { id:26,
        question: "Во что Babel превращает JSX?",
        answer:"."
        ,level: "hard"},
    { id:27,
        question: "Отличие микротаски от макротаски?",
        answer:"."
        ,level: "hard"},

]

const Cards = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [filter, setFilter] = useState<FilterValueType>("all")

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
    let taskQuestion = cardsQuestions
    if (filter === "easy") {
        taskQuestion= cardsQuestions.filter(t => t.level ==="easy")}
        if (filter === "hard") {
            taskQuestion = cardsQuestions.filter(t => t.level ==="hard")}

        function changeFilter(value:FilterValueType){
            setFilter(value)
            setCurrentQuestion(0)
            setShowAnswer(false)
        }



    return (<div className={s.wrap}>
            <div className={s.description}>В данном разделе вы можете поучить теорию. Получаете вопрос, пытаетесь ответить самостоятельно, если не можете, смотрите ответ
            Вопросы разбиты на уровни easy, hard условно.</div>
            <div className={s.levelBlock}>
                <button onClick={() => {changeFilter("easy")}}>Easy</button>
                <button onClick={() => {changeFilter("hard")}}>Hard</button>
                <button onClick={() => {changeFilter("all")}}>All</button>
            </div>
            <div className={s.cardsBlock}>

        <div className={s.questionCount}>
            <span>Вопрос {currentQuestion+1} / {taskQuestion.length}</span>
        </div>
    <div className={s.questionText}>{taskQuestion[currentQuestion].question}</div>

        {showAnswer?
        <div className={s.showAnswer}>{taskQuestion[currentQuestion].answer}</div>: ''}
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