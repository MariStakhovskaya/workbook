import React, {useState} from 'react';
import s from './Card.module.css'

type QuestionsType = {
    id:number;
    question: string,
    answer: string,
    level: string,

}

type CardType = {
    cardsQuestions: QuestionsType[]
}



type FilterValueType = "easy" | "hard" | "all"




const Card = (props:CardType ) => {


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [filter, setFilter] = useState<FilterValueType>("all")


    const nextQuestionClick =() => {

        const nextQuestion = currentQuestion +1
        if (nextQuestion < props.cardsQuestions.length){
            setCurrentQuestion(nextQuestion)
            setShowAnswer(false)
        } else {

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
    let taskQuestion = props.cardsQuestions
    if (filter === "easy") {
        taskQuestion = props.cardsQuestions.filter(t => t.level ==="easy")}
    if (filter === "hard") {
        taskQuestion = props.cardsQuestions.filter(t => t.level ==="hard")}

    function changeFilter(value:FilterValueType){
        setFilter(value)
        setCurrentQuestion(0)
        setShowAnswer(false)
    }



    return (<div className={s.wrap}>

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

export default Card;