import React from 'react';
import s from './HosList.module.scss';

const HosList = ({hospitals}) => {
    return (
        <div className={s.wrap}>
            <div className={s.headers}>
                <div className={s.item}>
                    <h2>Наименование</h2>
                </div>
                <div className={s.item}>
                    <h2>Телефон</h2>
                </div>
                <div className={s.item}>
                    <h2>Адрес</h2>
                </div>
            </div>
            <div className={s.table}>
                {
                    hospitals.map((el)=> {
                        return (
                            <div key={el.id} className={s.row}>
                                <div>{el.name}</div>
                                <div>{el.address}</div>
                                <div>{el.phone}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HosList;
