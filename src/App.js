import React, { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import SearchPanel from './components/SearchPanel/SearchPanel';
import HosList from './components/HosList/HosList';
import ModalWindow from './components/ModalWindow/ModalWindow';


const App = () => {
    const [modal, setModal] = useState(false);
    const [hospitals, setHospitals] = useState([]);
    const [activeId, setActiveId] = useState(null)

    //Сохранение данных в localStorage//

    useEffect(()=> {
        let storageHospitals = localStorage.getItem('hospitals');
        if(storageHospitals) {
            storageHospitals = JSON.parse(storageHospitals)
        } else {
            storageHospitals = []
        }
        setHospitals(storageHospitals)
    }, [])

    useEffect(()=> {
        const str = JSON.stringify(hospitals);
        localStorage.setItem('hospitals', str);
    }, [hospitals])

    const openWindow = () => {
        setModal(true)
    }

    const closeWindow = () => {
        setModal(false)
        setActiveId(null)
    }

    const onDelete = (id) => {
        setHospitals((prev) => prev.filter((el) => el.id !== id))
    }

    const editWindow = (id) => {
        setModal(true) 
        setActiveId(id)
    }


    return (
        <>
            <Container>
                <SearchPanel onClick={openWindow}/>
                <HosList hospitals={hospitals} onDelete={onDelete} editWindow={editWindow}/>
            </Container>
            {
                modal && (
                    <ModalWindow onClose={closeWindow} setHospitals={setHospitals} setActiveId={setActiveId} activeId={activeId} hospitals={hospitals}/>
                )
            }
        </>
    )
}
export default App;
