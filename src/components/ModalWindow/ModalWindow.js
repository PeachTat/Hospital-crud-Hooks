import React, { useEffect, useState } from 'react';
import s from './ModalWindow.module.scss';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import uuid from 'uuid/dist/v4'

const ModalWindow = ({onClose, setHospitals}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    const onInputChange = (event) => {
        const {name, value} = event.target;
        
        if (name === 'name') {
            setName(value);
        }
        if (name === 'address') {
            setAddress(value);
        } 
        if(name === 'phone') {
            setPhone(value)
        }
    }

    const addHospital = () => {
        setHospitals((prev)=> prev.concat({
            name: name,
            address: address,
            phone: phone,
            id: uuid()
        }))
        onClose()
    }

    return (
        <div className={s.modal}>
            <div className={s.modalWindow}>
                <form>
                    <input name='name' type="text" placeholder="Наименование учреждения" onChange={onInputChange}/>
                    <input name='address' type="text" placeholder='Адрес' onChange={onInputChange}/>
                    <input name='phone'  type="text" placeholder="Телефон" onChange={onInputChange}/>
                    <div className={s.row}>
                       <ButtonAdd onClick={addHospital} />
                        <button className={s.close} type='button' onClick={onClose}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalWindow;
