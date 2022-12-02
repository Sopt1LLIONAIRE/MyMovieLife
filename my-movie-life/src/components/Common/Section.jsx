import React from 'react';
import styled from 'styled-components';

export default function Section() {
  return (
    <StyledContent>
      <ImageWrapper />
      <InfoWrapper>
        <StyledTitle></StyledTitle>
      </InfoWrapper>
    </StyledContent>
  );
}

const StyledContent = styled.article`
  width: 100%;
  border-radius: 10px;
  background-color: orange;
`;

const ImageWrapper = styled.div`
  height: 250px;
  background-color: blue;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled.div`
  font-size : 24px;
  font-weight: 600px;
`
