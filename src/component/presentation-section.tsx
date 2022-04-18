import React from 'react';
import styled from '@emotion/styled';
import {Container} from '@mui/material';
import {useTranslation} from 'react-i18next';

const BlueSection = styled.div`
  width: 100%;
  background-color: var(--portfolio-color-accent);
  padding: 40px 0 20px;
  margin-top: -29px;
`;

const PresentationTitle = styled.p`
  padding-top: 50px;
  font-size: 35px;
  font-weight: 700;
  color: var(--portfolio-color-neutral);
`;

const PresentationText = styled.p`
  padding: 15px 0 100px;
  font-size: 16px;
  color: var(--portfolio-color-neutral);
`;

const PresentationSection: React.FC = () => {
  const {t} = useTranslation(['home']);

  return (
    <BlueSection>
      <Container>
        <PresentationTitle>{t('home:presentationSection.title')}</PresentationTitle>
        <PresentationText>{t('home:presentationSection.text')}</PresentationText>
      </Container>
    </BlueSection>
  );
};

export default PresentationSection;
