import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'


const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/theory" activeClassName={s.active}>Быстрые подсказки</NavLink>
               <div> <NavLink to="/react" activeClassName={s.active}>- React</NavLink></div>
               <div> <NavLink to="/js" activeClassName={s.active}>- JS</NavLink></div>
            </div>
            <div className={s.item}>
                <NavLink to="/practice" activeClassName={s.active}>Задачи</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/cardsQuestion" activeClassName={s.active}>Самоподготовка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/test" activeClassName={s.active}>Пройти тест</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/resource" activeClassName={s.active}>Ресурсы</NavLink>
            </div>



        </nav>

    )
}

export default Navbar;