import React from 'react';
import styled from 'styled-components';
import Section from './Section';

export default function Content() {
  return (
    <StyledContent>
      <StyledWrapper>
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </StyledWrapper>
    </StyledContent>
  );
}

const StyledContent = styled.section`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 350px);
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 20px;
  width: 960px;
  height: 100%;
`;
