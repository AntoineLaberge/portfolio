import React from 'react';
import styled from '@emotion/styled';
import {Button, Card, CardActions, CardContent, Container} from '@mui/material';
import {useTranslation} from 'react-i18next';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 16px 16px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 700;
  opacity: 0.66;
  margin: -10px 0 25px;
`;

const StyledButton = styled(Button)`
  color: var(--portfolio-color-accent);
  text-transform: none;

  &:hover {
    background-color: transparent;
  }
`;

const ButtonLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const ContactCard: React.FC = () => {
  const {t} = useTranslation(['contact']);

  return (
    <Container>
      <StyledCard>
        <CardContent>
          <Name>{'Antoine Laberge'}</Name>
          <Title>{t('contact:contactCard.title')}</Title>
          {t('contact:contactCard.text')}
        </CardContent>

        <CardActions>
          <StyledButton disableRipple size="small" href="mailto:antoinelaberge16@gmail.com">
            <ButtonLabel>{t('contact:contactCard.emailMe')}</ButtonLabel>
          </StyledButton>

          <StyledButton disableRipple size="small" href="tel:+15147963971">
            <ButtonLabel>{t('contact:contactCard.callMe')}</ButtonLabel>
          </StyledButton>
        </CardActions>
      </StyledCard>
    </Container>
  );
};

export default ContactCard;
