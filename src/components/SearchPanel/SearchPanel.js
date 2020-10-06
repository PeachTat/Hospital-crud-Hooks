import React from 'react';
import s from './SearchPanel.module.scss';
import ButtonAdd from './../ButtonAdd/ButtonAdd';

const SearchPanel = ({onClick}) => {
    return (
        <div className={s.row}>
            <input type="text" className={s.inputRow}/>
            <ButtonAdd onClick={onClick}/>
        </div>
    )
}

export default SearchPanel;
