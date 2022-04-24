import React from 'react';
import styled from '@emotion/styled';
import {ReactComponent as BrushIcon} from './brush.svg';

const MAX_WIDTH = 768;
const MIN_WIDTH = 769;

const FrontEndContainer = styled.div`
  @media (min-width: ${MIN_WIDTH}px) {
    grid-column: 1 / 1;
    padding: 0 20px;

    & + * {
      border-right: 1px solid rgba(0, 0, 0, 0.3);
      border-left: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: ${MAX_WIDTH}px) {
    grid-row: 1 / 1;
    padding: 10px 20px 20px;

    & + * {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

const StyledBrushIcon = styled(BrushIcon)`
  width: 60px;
  heigth: auto;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Quote = styled.p`
  font-size: 16px;
  font-style: italic;
  opacity: 0.66;
`;

const SectionTitle = styled.p`
  margin-top: 40px;
  font-size: 16px;
  color: var(--portfolio-color-accent);
`;

const LanguageSpan = styled.span`
  line-height: 25px;
`;

const FrontEndSection: React.FC = () => {
  const programmingLanguage = [
    'React / Native, ',
    'TypeScript, ',
    'CSS, ',
    'Swift, ',
    'JavaScript, ',
    'Next.js',
  ];

  const designTools = ['Figma', 'XCode'];

  const devTools = ['Visual Studio Code', 'IntelliJ IDEA', 'Bootstrap'];

  return (
    <FrontEndContainer>
      <StyledBrushIcon />
      <Title>{'Front-end'}</Title>
      <Quote>
        {'A user interface is like a joke. If you have to explain it, it’s not that good'}
      </Quote>

      <SectionTitle>{'Language I speak'}</SectionTitle>
      {programmingLanguage.map((language) => (
        <LanguageSpan key={language}>{language}</LanguageSpan>
      ))}

      <SectionTitle>{'Design tools I use'}</SectionTitle>
      {designTools.map((tool) => (
        <p key={tool}>{tool}</p>
      ))}

      <SectionTitle>{'Dev tools I use'}</SectionTitle>
      {devTools.map((tool) => (
        <p key={tool}>{tool}</p>
      ))}
    </FrontEndContainer>
  );
};

export default FrontEndSection;
