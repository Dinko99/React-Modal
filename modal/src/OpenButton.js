import React from 'react';

const OpenButton = ({ openModal }) => {
  return (
    <button className='open-button' onClick={openModal}>
      Open Modal
    </button>
  );
};

export default OpenButton;
