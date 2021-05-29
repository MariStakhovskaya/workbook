import React from 'react';
import s from './Practice.module.css'
import pract from '../../assets/img/practice1.jpg'


const Practice = () => {
    return ( <div className={s.wrap}>
            <div className={s.description}>Здесь будут примеры для применения знаний на практике</div>
            <div className={s.practiceBlock}>
                <button>JS</button>
                <button>React,Redux</button>
                <button>HTML+CSS</button>
                <button>with API</button>

                <div className={s.practiceItem}>
                    <div className={s.imgItem}><img src={pract} /></div>
                    <div>Счетчик</div>
                    <div>Описание</div>
                    <div>Стек</div>
                </div>
            </div>

            1. Разделяем на технологии
            2. JS - countdown
            3. JS - Countdown Timer
            0:32:15 - Quiz App
            1:23:20 - Recipe App
            3:19:57 - Notes App
            4:10:35 - ToDo App
            4:46:14 - Movies App
            5:39:55 - GitHub Profiles
            6:33:30 - Drawing App
            7:19:40 - Password Generator
            8:10:05 - Weather App
        </div>

    )
}

export default Practice;