import React, { useState } from 'react';
import styled from 'styled-components';
import Section from './Section';
import MovieModal from './MovieModal';
import Modal from './Modal';

export default function Content() {
  // class MovieData {
  //   constructor(index, title, image, grade, review) {
  //     this.index = index;
  //     this.title = title;
  //     this.image = image;
  //     this.grade = grade;
  //     this.review = review;
  //   }
  // }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // const [data, setData] = useState([]);
  // const handleClick = () => {
  //   const movie = new MovieData('1', '홍명헌', '이미지', '10점', '짱짱!!');
  //   setData((prev) => [...prev, movie]);
  // };
  // console.log(data);

  return (
    <StyledContent>
      <StyledWrapper>
        <Section />
        <Section />
        <button onClick={openModal}>클릭</button>
        <MovieModal open={modalOpen} close={closeModal} header="Modal heading"></MovieModal>
        <Modal openModal={modalOpen} closeModal={closeModal} index={2} />
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
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 20px;
  width: 960px;
  height: 100%;
`;
