import React from 'react';
import styled from '@emotion/styled';
import {ReactComponent as CodeWindowIcon} from './code-window.svg';

const MAX_WIDTH = 768;
const MIN_WIDTH = 769;

const BackEndContainer = styled.div`
  @media (min-width: ${MIN_WIDTH}px) {
    padding: 0 20px;
  }

  @media (max-width: ${MAX_WIDTH}px) {
    grid-row: 2 / 2;
    padding: 20px 20px;
  }
`;

const StyledCodeWindowIcon = styled(CodeWindowIcon)`
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

const BackEndSection: React.FC = () => {
  const programmingLanguage = [
    'C, ',
    'C++, ',
    'Java, ',
    'GraphQL, ',
    'Python, ',
    'PostegreSQL, ',
    'MySQL, ',
    'Objective-C, ',
    'PowerShell',
  ];

  const devTools = ['Visual Studio', 'IntelliJ IDEA', 'Git', 'Hasura', 'Terminal'];

  return (
    <BackEndContainer>
      <StyledCodeWindowIcon />
      <Title>{'Back-end'}</Title>
      <Quote>{'If at first I don’t succeed; I call it version 1.0'}</Quote>

      <SectionTitle>{'Language I speak'}</SectionTitle>
      {programmingLanguage.map((language) => (
        <LanguageSpan key={language}>{language}</LanguageSpan>
      ))}

      <SectionTitle>{'Dev tools I use'}</SectionTitle>
      {devTools.map((tool) => (
        <p key={tool}>{tool}</p>
      ))}
    </BackEndContainer>
  );
};

export default BackEndSection;
