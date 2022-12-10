import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitle>마이무라</StyledTitle>
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 91px;
  background-color: #fff;
  border-bottom: 1px solid #fb4357;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 960px;
  height: 100%;
`;

const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
