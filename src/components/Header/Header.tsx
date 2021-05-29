import React from 'react';
import s from './Header.module.css';

type HeaderPropsType = {


}

const Header = (props:HeaderPropsType) => {
    return (<header className={s.header}>
            <div>Training</div>

        </header>


    )
}

export default Header;