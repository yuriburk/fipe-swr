import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  margin-bottom: 8px;

  svg {
    cursor: pointer;
  }
`;

export const ChildrenContainer = styled.div`
  padding: 14px;
  background-color: white;
  border-radius: 8px;
  z-index: 9999;
`;
