import React from 'react';
import s from './SearchPanel.module.scss';
import ButtonAdd from './../ButtonAdd/ButtonAdd';

const SearchPanel = ({onClick, value, getValueSearchPanel}) => {
    return (
        <div className={s.row}>
            <input type="text" className={s.inputRow} onChange={(event)=> getValueSearchPanel(event)} value={value}/>
            <ButtonAdd onClick={onClick}/>
        </div>
    )
}

export default SearchPanel;
