import React from 'react';
import styled from '@emotion/styled';
import {Container} from '@mui/material';

const MAX_WIDTH = 768;
const MIN_WIDTH = 769;

const Card = styled.div`
  display: grid;
  padding: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: var(--portfolio-color-neutral);
  border-radius: 15px;
  height: 500px;

  @media (min-width: ${MIN_WIDTH}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${MAX_WIDTH}px) {
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const FrontEndContainer = styled.div`
  @media (min-width: ${MIN_WIDTH}px) {
    grid-column: 1 / 1;

    & + * {
      border-right: 1px solid rgba(0, 0, 0, 0.3);
      border-left: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: ${MAX_WIDTH}px) {
    grid-row: 1 / 1;

    & + * {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

const BackEndContainer = styled.div`
  @media (min-width: ${MIN_WIDTH}px) {
    grid-column: 2 / 2;
  }

  @media (max-width: ${MAX_WIDTH}px) {
    grid-row: 2 / 2;
    padding: 10px 0;
  }
`;

const OtherSkillsContainer = styled.div`
  @media (min-width: ${MIN_WIDTH}px) {
    grid-column: 3 / 3;
  }

  @media (max-width: ${MAX_WIDTH}px) {
    grid-row: 3 / 3;
    padding-top: 10px;
  }
`;

const SkillCard: React.FC = () => {
  return (
    <Container>
      <Card>
        <FrontEndContainer>Test</FrontEndContainer>
        <BackEndContainer>Test</BackEndContainer>
        <OtherSkillsContainer>Test</OtherSkillsContainer>
      </Card>
    </Container>
  );
};

export default SkillCard;
