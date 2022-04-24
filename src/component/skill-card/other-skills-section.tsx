import React from 'react';
import styled from '@emotion/styled';
import {ReactComponent as AppleIcon} from './apple.svg';
import {ReactComponent as BracketIcon} from './bracket.svg';
import {ReactComponent as LinuxIcon} from './linux.svg';
import {ReactComponent as WindowsIcon} from './windows.svg';

const MAX_WIDTH = 768;
const MIN_WIDTH = 769;

const OtherSkillsContainer = styled.div`
  @media (min-width: ${MIN_WIDTH}px) {
    grid-column: 3 / 3;
    padding: 0 20px;
  }

  @media (max-width: ${MAX_WIDTH}px) {
    grid-row: 3 / 3;
    padding: 20px 20px 10px;
  }
`;

const StyledBracketIcon = styled(BracketIcon)`
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

const StyledWindowsIcon = styled(WindowsIcon)`
  margin: 0 15px;
`;

const OtherSkillsSection: React.FC = () => {
  const os = [<AppleIcon />, <StyledWindowsIcon />, <LinuxIcon />];

  const managementTools = ['GitHub', 'Trello', 'Jira', 'Microsoft Teams'];

  const otherTools = ['Firebase', 'Firestore', 'Docker', 'Jest', 'Wix'];

  return (
    <OtherSkillsContainer>
      <StyledBracketIcon />
      <Title>{'Other skills'}</Title>
      <Quote>{'It’s not a bug. It’s an undocumented feature!'}</Quote>

      <SectionTitle>{`OS I'm familiar with`}</SectionTitle>
      {os.map((os, i) => (
        <span key={i}>{os}</span>
      ))}

      <SectionTitle>{'Management tools I use'}</SectionTitle>
      {managementTools.map((tool) => (
        <p key={tool}>{tool}</p>
      ))}

      <SectionTitle>{'Other tools I use'}</SectionTitle>
      {otherTools.map((tool) => (
        <p key={tool}>{tool}</p>
      ))}
    </OtherSkillsContainer>
  );
};

export default OtherSkillsSection;
