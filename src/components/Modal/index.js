import React from 'react';
import { FiX } from 'react-icons/fi';

import { ModalContainer, ButtonContainer, ChildrenContainer } from './styles';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <ModalContainer>
        <ChildrenContainer>
          <ButtonContainer onClick={onClose}>
            <FiX size={24} />
          </ButtonContainer>
          {children}
        </ChildrenContainer>
      </ModalContainer>
    )
  );
};

export default Modal;
