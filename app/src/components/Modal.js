import React from 'react';
import ReactModal from 'react-modal';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import './Modal.css';

const Modal = ({ isOpen, onRequestClose }) => {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="modal-overlay">
            <div className="modal-content">
                <h2>Share</h2>
                <div className="social-icons">
                    <Facebook />
                    <Twitter />
                    <Instagram />
                </div>
            </div>
        </ReactModal>
    );
};

export default Modal;
