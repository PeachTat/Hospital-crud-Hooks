import React, { useEffect, useState } from 'react';
import s from './ModalWindow.module.scss';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import uuid from 'uuid/dist/v4';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'

const nameHospital = [
    { title: 'Казанская психиатрическая больница специализированного типа с интенсивным наблюдением' },
    { title: 'Казанский военный госпиталь' },
    { title: 'Государственная больница Нью-Амстердама' },
    { title: 'Государственная больница Дэнверса' },
    { title: 'Госпиталь Святой Марии (Лондон)' },
    { title: "Госпиталь святой Елизаветы" },
    { title: 'Госпиталь Святого Эгидия (Дарем)' },
    { title: 'Госпиталь Крайстчерча' },
    { title: 'Госпиталь Итальяно (Буэнос-Айрес)' },
    { title: 'Госпиталь Джонса Хопкинса' }
];

const phoneHospital = [
    { title: "+7 (999) 999-99-99" },
    { title: "+7 (999) 999-99-99" },
    { title: "+7 (999) 999-99-99" },
    { title: "+7 (999) 999-99-99" },
    { title: "+7 (999) 999-99-99" },
    { title: "+7 (999) 999-99-99" },
    { title: "+7 (999) 999-99-99" },
    { title: "+7 (999) 999-99-99" },
    { title: "+7 (999) 999-99-99" }
];

const addressHospital = [
    { title: 'ул.Пушкина' },
    { title: 'ул.Кошкина' },
    { title: 'ул.Мышкина' },
    { title: 'ул.Еще какя то' },
    { title: 'ул.Пушкина' },
    { title: 'ул.Пушкина' },
    { title: 'ул.Пушкина' },
    { title: 'ул.Пушкина' },
    { title: 'ул.Пушкина' },
]


const ModalWindow = ({ onClose, setHospitals, activeId, setActiveId, hospitals }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [errorInput, setErrorInput] = useState(false);


    const onInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'name') {
            setName(value);
        }
        if (name === 'address') {
            setAddress(value);
        }
        if (name === 'phone') {
            setPhone(value)
        }
        setErrorInput(false)
    }

    const checkEmpty = () => {
        if (name === '') {
            return true
        }
        if (address === '') {
            return true
        }
        if (phone === '') {
            return true
        } else {
            return false
        }
    }

    const editOrAddHospital = () => {
        const isEmty = checkEmpty()
        if (isEmty) {
            setErrorInput(true)
            return
        }

        if (activeId) {
            const newHospitals = hospitals.map((el) => {
                if (el.id === activeId) {
                    return {
                        ...el,
                        name: name,
                        address: address,
                        phone: phone
                    }
                } else {
                    return el
                }
            })
            setHospitals(newHospitals)
        } else {
            setHospitals((prev) => prev.concat({
                name: name,
                address: address,
                phone: phone,
                id: uuid()
            }))
        }
        onClose()
    }

    const stopAction = (event) => {
        event.stopPropagation()
    }


    useEffect(() => {
        if (!activeId) {
            return
        }
        const hospital = hospitals.find((el) => el.id === activeId);
        console.log(hospital);
        setName(hospital.name);
        setPhone(hospital.phone);
        setAddress(hospital.address)

    }, [activeId, hospitals])

    return (
        <>
            <div className={s.back} onClick={onClose}>
                <div className={s.modalWindow} onClick={stopAction}>
                    <form>
                        <Autocomplete
                            options={nameHospital}
                            getOptionLabel={(option) => option.title}
                            style={{ width: 400 }}
                            value={{ title: name }}
                            onChange={(event, value) => setName(value.title)}
                            renderInput={(params) =>
                                <TextField {...params}
                                    onChange={onInputChange}
                                    label="Наименование учреждения"
                                    variant="outlined"
                                    name='name'
                                    style={{ marginBottom: 30 }}
                                />
                            }
                        />
                        {
                            errorInput && (<div className={s.error}>
                                <p>Заполните поле!</p>
                            </div>
                            )}
                        <Autocomplete
                            options={addressHospital}
                            getOptionLabel={(option) => option.title}
                            style={{ width: 400 }}
                            value={{ title: address }}
                            onChange={(event, value) => setAddress(value.title)}
                            renderInput={(params) =>
                                <TextField {...params}
                                    label="Адрес"
                                    variant="outlined"
                                    name='address'
                                    style={{ marginBottom: 30 }}
                                    onChange={onInputChange}
                                />
                            }
                        />
                        {
                            errorInput && (<div className={s.error}>
                                <p>Заполните поле!</p>
                            </div>
                            )}
                        <Autocomplete
                            options={phoneHospital}
                            getOptionLabel={(option) => option.title}
                            style={{ width: 400 }}
                            value={{ title: phone }}
                            onChange={(event, value) => setPhone(value.title)}
                            renderInput={(params) =>
                                <TextField {...params}
                                    label="Телефон"
                                    variant="outlined"
                                    name='phone'
                                    onChange={onInputChange}
                                />
                            }
                        />
                        {
                            errorInput && (<div className={s.error}>
                                <p>Заполните поле!</p>
                            </div>
                            )}
                        <div className={s.row}>
                            <ButtonAdd onClick={editOrAddHospital} disabled={errorInput} />
                            <button className={s.close} type='button' onClick={onClose}>Отмена</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalWindow;
