import React from 'react';

const Modal = ({ closeModal, isOpen }) => {
  if (!isOpen) {
    return null;
  } else {
    return (
      <>
        <div className='overlay' onClick={closeModal}></div>
        <section className='modal'>
          <div className='header'>
            <h1 className='title'>Test Modal</h1>
            <h1 className='close' onClick={closeModal}>
              X
            </h1>
          </div>
          <p className='info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            obcaecati dicta laborum. Omnis ipsam saepe nihil suscipit a
            consectetur officia maxime numquam voluptatum sequi voluptatem
            asperiores at aperiam eum perspiciatis, vel qui ab aut. Fugiat ab
            necessitatibus minus porro ullam perferendis ipsum ipsa nisi
            facilis, tempore, odio aspernatur! Placeat aliquam optio corrupti
            asperiores accusamus recusandae nisi officia. Ut laudantium laborum
            repudiandae soluta ipsam similique cum velit impedit suscipit
            pariatur modi expedita voluptatum ipsa fuga aperiam ad possimus
            quisquam, officiis quibusdam.
          </p>
        </section>
      </>
    );
  }
};

export default Modal;
