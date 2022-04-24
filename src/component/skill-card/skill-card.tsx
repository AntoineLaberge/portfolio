import React from 'react';
import styled from '@emotion/styled';
import {Container} from '@mui/material';
import BackEndSection from './back-end-section';
import FrontEndSection from './front-end-section';
import OtherSkillsSection from './other-skills-section';

const MAX_WIDTH = 768;
const MIN_WIDTH = 769;

const Card = styled.div`
  display: grid;
  padding: 40px 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: var(--portfolio-color-neutral);
  border-radius: 15px;

  @media (min-width: ${MIN_WIDTH}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${MAX_WIDTH}px) {
    grid-template-rows: auto 1fr;
  }
`;

const SkillCard: React.FC = () => {
  return (
    <Container>
      <Card>
        <FrontEndSection />
        <BackEndSection />
        <OtherSkillsSection />
      </Card>
    </Container>
  );
};

export default SkillCard;
