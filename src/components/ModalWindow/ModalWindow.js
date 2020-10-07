import React, { useEffect, useState } from 'react';
import s from './ModalWindow.module.scss';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import uuid from 'uuid/dist/v4'

const ModalWindow = ({onClose, setHospitals, activeId, setActiveId, hospitals}) => {
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

    const editOrAddHospital = () => {
        if(activeId) {
            const newHospitals = hospitals.map((el) => {
                if(el.id === activeId) {
                    return {
                        ...el,
                        name:name,
                        address: address,
                        phone: phone
                    }
                } else {
                    return el
                }
            })
            setHospitals(newHospitals)
        } else {
            setHospitals((prev)=> prev.concat({
                name: name,
                address: address,
                phone: phone,
                id: uuid()
            }))

        }
        onClose()
    }

    
    useEffect(()=> {
        if(!activeId) {
            return
        }
        const hospital = hospitals.find((el) => el.id === activeId);
        console.log(hospital);
        setName(hospital.name);
        setPhone(hospital.phone);
        setAddress(hospital.address)
    }, [activeId, hospitals])

    return (
        <div className={s.modal}>
            <div className={s.modalWindow}>
                <form>
                    <input name='name' value={name} type="text" placeholder="Наименование учреждения" onChange={onInputChange}/>
                    <input name='address' value={address} type="text" placeholder='Адрес' onChange={onInputChange}/>
                    <input name='phone' value={phone}  type="text" placeholder="Телефон" onChange={onInputChange}/>
                    <div className={s.row}>
                       <ButtonAdd onClick={editOrAddHospital} />
                        <button className={s.close} type='button' onClick={onClose}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalWindow;
