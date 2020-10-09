import React from 'react';
import s from './ButtonAdd.module.scss';

const ButtonAdd = ({onClick, disabled}) => {
    return (
        <button className={s.button} onClick={onClick} type='button' disabled={disabled}>Добавить</button>
    )
}

export default ButtonAdd;
