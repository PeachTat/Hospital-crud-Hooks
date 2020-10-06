import React from 'react';
import s from './ButtonAdd.module.scss';

const ButtonAdd = ({onClick}) => {
    return (
        <button className={s.button} onClick={onClick} type='button'>Добавить</button>
    )
}

export default ButtonAdd;
