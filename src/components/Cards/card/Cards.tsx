import React from 'react';
import s from './Card.module.css'

type CardPropsType = {
    question: string
    answer:string
}

const Next = () => {

}

const Card = (props: CardPropsType) => {
    return (  <div className={s.card}>
            <div className={s.front}><span>{props.question}</span>
            </div>
            <div className={s.back}><span>{props.answer}</span>
                <button onClick={Next}>Далее</button>
            </div>

        </div>

    )
}

export default Card;