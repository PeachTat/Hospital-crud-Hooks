import React from 'react';
import s from './HosList.module.scss';
import HosItem from '../HosItem/HosItem';

const HosList = ({hospitals, onDelete, editWindow, value}) => {

    const newArr = value !== ''
        ? hospitals.filter(({name}) => name.toLowerCase().includes(value.toLowerCase()))
        : hospitals

    return (
        <div className={s.wrap}>
            <div className={s.headers}>
                <div className={s.item}>
                    <h2>Наименование</h2>
                </div>
                <div className={s.item}>
                    <h2>Адрес</h2>
                </div>
                <div className={s.item}>
                    <h2> Телефон</h2>
                </div>
            </div>
            <div className={s.table}>
                {
                    newArr.map((el)=> {
                        return (
                            <HosItem 
                                key={el.id} 
                                name={el.name} 
                                address={el.address} 
                                phone={el.phone}
                                id={el.id} 
                                onDelete={onDelete} 
                                editWindow={editWindow}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HosList;
