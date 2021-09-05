import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Modal from 'react-modal';

Modal.setAppElement('#react-root');

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex: '1000',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '42%',
    right: '40px',
    bottom: '40px',
    border: '1px solid #fff',
    background: '#fff',
    boxShadow: '0 -2rem 6rem rgba(0, 0, 0, 0.3)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  }
};

const PresetModal = (props) => {
  const { modalIsOpen, afterOpenModal, closeModal } = props;

  return (
    <div>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Preset Modal"
          style={customStyles}
        >
        <div>
          <p>hello</p>
          <button className="btn btn-gray" onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default PresetModal;