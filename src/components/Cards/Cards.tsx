import React, {useEffect, useState} from 'react';
import s from './Cards.module.css'
import Card from "./card/Card";


/*const cardsQuestions  = [
    { id:1,
        question: "Что такое TDD?",
    answer:"test-driven development - техника разработки ПО, при котором сначала пишем тесты, а потом их удовлетворяем. Затем можем спокойно рефакторить и изменять код как угодно, т.к. у нас есть тесты, которые точно скажут, что мы где-то ошиблись ",
        level: "easy",
    }
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

]*/
/*const cardsQuestionsHtml  = [
    { id:1,
        question: "Что такое doctype? И для чего он используется?",
        answer:" Doctype используется для указания типа документа. (!DOCTYPE html). Служит для того, чтобы браузер понимал, как ему интерпретировать страницу, в соответствии с каким стандартом. Исходя из этого " +
            "браузер будет знать, какие теги считать валидными, а какие устаревшими",
        level: "easy"}
    ,
    { id:2,
        question: "Опишите базовую структуру HTML-страницы?",
        answer: "DOCTYPE -> HTML -> HEAD -> Title,Meta -> /HEAD -> BODY -> /BODY -> /HTML",
        level: "easy"},
    { id:3,
        question: "Что такое семантика? Какие семантичные тэги вы знаете?",
        answer:"",
        level: "easy"},
    { id:4,
        question: "Какая разница между тэгами strong, em и b, i?",
        answer:"",
        level: "easy"},
    { id:5,
        question: "Что такое валидация? И какие типы проверок HTML документа вы знаете?",
        answer:"",
        level: "hard"},
    { id:6,
        question: "Какой тэг использовать для того, что бы сверстать кнопку?",
        answer:""
        ,level: "easy"},
    { id:7,
        question: "Что такое инлайновый стиль? Можно ли его переопределить?",
        answer:"."
        ,level: "hard"},
    { id:8,
        question: "Есть ли у HTML элементов свои дефолтные специфичные стили?",
        answer:"."
        ,level: "hard"},
    { id:9,
        question: "Для какого тэга используется атрибут alt и зачем он нужен?",
        answer:"."
        ,level: "easy"},
    { id:10,
        question: "Типы списков в HTML?",
        answer:"."
        ,level: "easy"},
    { id:11,
        question: "Как семантически правильно сверстать картинку с подписью?",
        answer:"."
        ,level: "hard"},
    { id:12,
        question: "Что такое HTML и для чего он используется?",
        answer:"."
        ,level: "easy"},
    { id:13,
        question: "Типы input элементов в HTML?",
        answer:"."
        ,level: "easy"},
    { id:14,
        question: "Что такое элемент canvas? И для чего он используется?",
        answer:"."
        ,level: "easy"},
    { id:15,
        question: "Для чего используют data-атрибуты?",
        answer:"."
        ,level: "hard"},
    { id:16,
        question: "Разница между script, script async и script defer?",
        answer:"."
        ,level: "hard"},
    { id:17,
        question: "Для чего используется элемент datalist?",
        answer:"."
        ,level: "hard"},
    { id:18,
        question: "Что такое CSS? И для чего он используется?",
        answer:"."
        ,level: "easy"},
    { id:19,
        question: "Варианты добавление CSS стилей на страницу?",
        answer:"."
        ,level: "easy"},
    { id:20,
        question: "Типы позиционирования в CSS?",
        answer:"."
        ,level: "hard"},
    { id:21,
        question: "Блочная модель CSS? ",
        answer:"."
        ,level: "easy"},
    { id:22,
        question: "Что такое специфичность селектора? Как считать вес селектора?",
        answer:"."
        ,level: "hard"},
    { id:23,
        question: "Разница между Reset.css и Normalize.css?",
        answer:"."
        ,level: "hard"},
    { id:23,
        question: "Разница между margin и padding?",
        answer:"."
        ,level: "easy"},
    { id:24,
        question: "Разница между display: none и visibility: hidden?",
        answer:"."
        ,level: "hard"},
    { id:25,
        question: "Разница между блочным и строчным (инлайновым) элементами?",
        answer:"."
        ,level: "easy"},
    { id:26,
        question: "Разница между адаптивным (adaptive) и отзывчивым (responsive) дизайнами?",
        answer:"."
        ,level: "hard"},
    { id:27,
        question: "Что такое CSS-правило?",
        answer:"."
        ,level: "hard"},
    { id:28,
        question: "Разница между классом и идентификатором в CSS?",
        answer:"."
        ,level: "easy"},
    { id:29,
        question: "Что такое CSS спрайт? И для чего он используется?",
        answer:"."
        ,level: "hard"},
    { id:30,
        question: "Что такое вендорные префиксы? И для чего они используются?",
        answer:"."
        ,level: "hard"},
    { id:31,
        question: "Разница между Progressive Enhancement и Graceful Degradation?",
        answer:"."
        ,level: "hard"},
    { id:32,
        question: "Что такое псевдоэлементы? И для чего они используются?",
        answer:"."
        ,level: "hard"},
    { id:33,
        question: "Что такое схлопывание границ (margin collapsing)?",
        answer:"."
        ,level: "hard"},
    { id:34,
        question: "Что такое кроссбраузерность?",
        answer:"."
        ,level: "hard"},
    { id:35,
        question: "Что такое CSS препроцессор?",
        answer:"."
        ,level: "hard"},

]*/

const Cards = () => {

    const [cardsQuestions, setCardsQuestions] = useState([])
    const [cardsQuestionsHtml, setCardsQuestionsHtml] = useState([])
    console.log(cardsQuestions)
    useEffect( () => {

    fetch('https://my-json-server.typicode.com/MariStakhovskaya/workbook/db', {mode: 'cors'})
    .then(res => {
        return res.json()
    })
    .then( data => {
        setCardsQuestions(data)
        console.log(data)
    })
    }, [])

    return (<div className={s.wrap}>
        <h3>Вопросы для самопроверки React</h3>
         {cardsQuestions.length ===0 ? '' : <Card cardsQuestions={cardsQuestions}/> }


            {/*    <div className={s.nameCard}>
                <h3>Вопросы на собеседовании CSS + HTML</h3>

          <Card cardsQuestions={cardsQuestionsHtml}/>
            </div>
            <div className={s.nameCard}>
                <h3>Вопросы на собеседовании JS</h3>
                <Card cardsQuestions={cardsQuestions}/>
            </div>
            <div className={s.nameCard}>
                <h3>Задачи на собеседовании JS</h3>
                <Card cardsQuestions={cardsQuestions}/>
            </div>*/}
</div>

    )
}

export default Cards;