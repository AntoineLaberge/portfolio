import React from 'react';
import styled from '@emotion/styled';
import {Button} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {ReactComponent as FeelingProudIcon} from '../component/feeling-proud.svg';
import {useIsMobile} from '../component/responsive-viewports';
import Wave from '../component/wave.svg';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px;
  margin: auto;
  background-image: url(${Wave});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center bottom;
  background-attachment: fixed;
`;

const StyledFeelingProudIcon = styled(FeelingProudIcon)`
  width: 350px;
  height: 350px;
  margin: 50px 30px 0 0;
`;

const TextContainer = styled.div`
  display: block;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 700;
  color: var(--portfolio-color-accent);
`;

const Text = styled.p`
  max-width: 300px;
`;

const StyledButton = styled(Button)`
  color: var(--portfolio-color-accent);
  text-transform: none;
`;

const UnderConstruction: React.FC = () => {
  const {t} = useTranslation(['common']);

  const isMobile = useIsMobile();

  return (
    <Container>
      {!isMobile && <StyledFeelingProudIcon />}
      <TextContainer>
        <Title>{'Howdy!'}</Title>
        <Text>{t('common:underConstruction.text1')}</Text>
        <Text>{t('common:underConstruction.text2')}</Text>
        <Text>{t('common:underConstruction.text3')}</Text>
        <StyledButton size="small" href="mailto:antoinelaberge16@gmail.com">
          {'antoinelaberge16@gmail.com'}
        </StyledButton>
        <Text>{t('common:underConstruction.text4')}</Text>
      </TextContainer>
    </Container>
  );
};

export default UnderConstruction;
