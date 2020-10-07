import React, { useState } from 'react';
import s from './HosItem.module.scss';
import ButtonDelete from './../ButtonDelete/BurronDelete';

const HosItem = ({ name, address, phone, id, onDelete, editWindow }) => {
    const [popUp, setPopUp] = useState(false);

    const openPopUp = () => {
        setPopUp(true)
    }

    const closePopUp = () => {
        setPopUp(false)
    }
    return (
        <div className={s.rowTableWrap}>
            <div className={s.rowTable} onMouseEnter={openPopUp} onMouseLeave={closePopUp}>
                <div className={s.rowTableItem}>{name}</div>
                <div className={s.rowTableItem}>{address}</div>
                <div className={s.rowTableItem}>{phone}</div>
                {
                    popUp && (
                        <div className={s.popUp}>
                            <h3>Редактировать запись?</h3>
                            <div className={s.rowTable}>
                                <button className={s.edit} onClick={()=>editWindow(id)}>Редактировать</button>
                                <ButtonDelete onClick={() => onDelete(id)}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HosItem;
