import { useState } from 'react'
import './App.css';
import Modal from '../src/components/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <h1>Click on the button to open a modal.</h1>
      <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>Open</button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
