import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export default function Modal({ openModal, closeModal, index }) {
  console.log(closeModal);
  return (
    <StyledModal openModal={openModal}>
      {openModal && (
        <StyledContent>
          <StyledHeader>나의 {index}째 인생영화</StyledHeader>
          <StyledMain>메인</StyledMain>
          <StyledFooter>
            <StyledCloseBtn onClick={closeModal}>취소</StyledCloseBtn>
          </StyledFooter>
        </StyledContent>
      )}
    </StyledModal>
  );
}

const StyledModal = styled.div`
  ${(props) =>
    props.openModal
      ? css`
          display: flex;
          align-items: center;
          /* 팝업이 열릴때 스르륵 열리는 효과 */
          animation: ${ModalBgShow} 0.3s;
        `
      : css`
          display: none;
        `}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledContent = styled.section`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
`;

const StyledHeader = styled.header`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
`;

const StyledMain = styled.main`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const StyledFooter = styled.footer`
  padding: 12px 16px;
  text-align: right;
`;

const StyledCloseBtn = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
  outline: none;
  cursor: pointer;
  border: 0;
`;

const ModalBgShow = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
