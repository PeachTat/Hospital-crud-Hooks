import React from 'react';
import s from './ButtonDelete.module.scss';

const ButtonDelete = ({onClick}) => {
    return (
        <button className={s.button} onClick={onClick}>Удалить</button>
    )
}

export default ButtonDelete;
