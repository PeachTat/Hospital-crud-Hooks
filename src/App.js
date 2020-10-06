import React, { useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import SearchPanel from './components/SearchPanel/SearchPanel';
import HosList from './components/HosList/HosList';
import ModalWindow from './components/ModalWindow/ModalWindow';


const App = () => {
    const [modal, setModal] = useState(false);
    const [hospitals, setHospitals] = useState([])

    const openWindow = () => {
        setModal(true)
    }

    const closeWindow = () => {
        setModal(false)
    }

    return (
        <>
            <Container>
                <SearchPanel onClick={openWindow}/>
                <HosList hospitals={hospitals}/>
            </Container>
            {
                modal && (
                    <ModalWindow onClose={closeWindow} setHospitals={setHospitals}/>
                )
            }
        </>
    )
}
export default App;
