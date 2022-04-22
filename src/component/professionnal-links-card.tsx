import React from 'react';
import styled from '@emotion/styled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {CardContent, Container} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {Name, StyledCard} from './contact-card';

const LinkCard = styled(StyledCard)`
  margin-top: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledLinkedinIcon = styled(LinkedInIcon)`
  color: var(--portfolio-color-accent);
`;

const ProfessionnalLinksCard: React.FC = () => {
  const {t} = useTranslation(['contact']);

  return (
    <Container>
      <LinkCard>
        <CardContent>
          <Name>{t('contact:linkCard.title')}</Name>
          <LinkContainer
            onClick={() => window.open('https://www.linkedin.com/in/antoinelaberge/', '_blank')}
          >
            <StyledLinkedinIcon />
            {'LinkedIn'}
          </LinkContainer>
        </CardContent>
      </LinkCard>
    </Container>
  );
};

export default ProfessionnalLinksCard;
