import React from 'react';
import styled from 'styled-components';

import Poster from '../../assets/image/poster.jpeg';

export default function Section() {
  return (
    <StyledContent>
      <ImageWrapper>
        <PosterImage src={Poster} alt="" />
      </ImageWrapper>
      <InfoWrapper>
        <StyledTitle>기생충</StyledTitle>
        <StyledDetail>2019</StyledDetail>
      </InfoWrapper>
    </StyledContent>
  );
}

const StyledContent = styled.article`
  width: 220px;
  height: 300px;
  border-radius: 10px;
  background-color: orange;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 230px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 600px;
`;
const StyledDetail = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
