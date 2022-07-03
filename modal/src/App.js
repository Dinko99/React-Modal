import './App.css';
import { useState } from 'react';
import OpenButton from './OpenButton';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <OpenButton openModal={openModal} />
      <Modal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
}

export default App;
