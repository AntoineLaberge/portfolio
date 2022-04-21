import React from 'react';
import styled from '@emotion/styled';
import {Container} from '@mui/material';
import {useTranslation} from 'react-i18next';
import ResumePage1En from '../component/resume/en/page1.png';
import ResumePage2En from '../component/resume/en/page2.png';
import ResumePage1Fr from '../component/resume/fr/page1.png';
import ResumePage2Fr from '../component/resume/fr/page2.png';

const ResumeContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const Resume: React.FC = () => {
  const {i18n} = useTranslation();

  const resumePages =
    i18n.language === 'fr' ? [ResumePage1Fr, ResumePage2Fr] : [ResumePage1En, ResumePage2En];

  return (
    <Container>
      <ResumeContainer>
        {resumePages.map((page) => {
          return <StyledImage src={page} />;
        })}
      </ResumeContainer>
    </Container>
  );
};

export default Resume;
