import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitle>마이무라</StyledTitle>
        <StyledSearch placeholder="내 영화 기록 검색"></StyledSearch>
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
  justify-content: space-between;
  align-items: center;
  width: 960px;
  height: 100%;
`;

const StyledTitle = styled.div`
  width: 150px;
  font-size: 20px;
  font-weight: 700;
`;

const StyledSearch = styled.input`
  width: 524px;
  height: 52px;
  background-color: #e2e2e2;
  border-radius: 15px;
  border: 1px solid;
  text-indent: 10px;
`;
