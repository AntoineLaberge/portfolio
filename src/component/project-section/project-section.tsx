import React from 'react';
import styled from '@emotion/styled';
import {Button, Container, keyframes} from '@mui/material';
import {useTranslation} from 'react-i18next';
import CardWithButton from '../card-with-button';
import {ButtonLabel} from '../navigation-bar';
import CycleeLogo from './cyclee-logo.svg';
import HaieXpertLogo from './haie-xpert-logo.png';
import LabAutoDetailLogo from './labauto-detail-logo.png';
import {ReactComponent as NextIcon} from './next-icon.svg';

const SectionInProgress = styled.div`
  color: gray;
`;

const bouncingLoader = keyframes`
  to {
    opacity: 0.1;
    transform: translateY(-16px);
  }
`;

const BouncyLoader = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;

  & > div {
    width: 16px;
    height: 16px;
    margin: 3px 6px;
    border-radius: 50%;
    background-color: var(--portfolio-color-accent);
    opacity: 1;
    animation: ${bouncingLoader} 0.6s infinite alternate;
  }

  & > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  & > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Title = styled.p`
  margin: 90px 0 20px;
  font-size: 35px;
  font-weight: 700;
`;

const StyledCardWithButton = styled(CardWithButton)`
  width: 90%;
  height: 200px;
  margin: auto;
`;

const StyledGridContainer = styled.div`
  display: flex;
  margin: 50px 0;
  transition: transform 500ms;

  &:focus-within > div,
  &:hover > div {
    transform: translateX(-5%);
  }

  & > div:hover,
  & > div:focus {
    transform: scale(1.1);
    z-index: 1;
  }
`;

const StyledGridItem = styled.div`
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;

  &:hover ~ &,
  &:focus ~ & {
    transform: translateX(5%);
  }
`;

const StyledButton = styled(Button)`
  text-transform: none;
  box-shadow: none;
  background-color: var(--portfolio-color-accent);
  border-radius: 15px;
  padding: 4px 14px;
  color: #fff;

  &:hover {
    background-color: var(--portfolio-color-accent);
  }
`;

const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: auto;
    opacity: 0;
    transition: transform 200ms;
  }

  &:hover {
    svg {
      opacity: 1;
      transform: translateX(20%);
    }
  }
`;

const ProjectSection: React.FC = () => {
  const {t} = useTranslation(['home']);

  const sectionInProgress = true;

  return (
    <Container>
      <Title>{t('home:projectSection.title')}</Title>
      {sectionInProgress ? (
        <>
          <SectionInProgress>
            <p>{t('home:projectSection.sectionInProgress')}</p>
          </SectionInProgress>

          <BouncyLoader>
            <div></div>
            <div></div>
            <div></div>
          </BouncyLoader>
        </>
      ) : (
        <>
          <SeeMore>
            <span>{t('home:projectSection.seeMore')}</span>
            <NextIcon />
          </SeeMore>

          <StyledGridContainer>
            <StyledGridItem>
              <StyledCardWithButton
                backgroundPath={HaieXpertLogo}
                button={
                  <StyledButton onClick={() => true}>
                    <ButtonLabel>{t('home:projectSection.button.seeMore')}</ButtonLabel>
                  </StyledButton>
                }
              ></StyledCardWithButton>
            </StyledGridItem>

            <StyledGridItem>
              <StyledCardWithButton
                backgroundPath={CycleeLogo}
                button={
                  <StyledButton onClick={() => true}>
                    <ButtonLabel>{t('home:projectSection.button.seeMore')}</ButtonLabel>
                  </StyledButton>
                }
              ></StyledCardWithButton>
            </StyledGridItem>

            <StyledGridItem>
              <StyledCardWithButton
                backgroundPath={LabAutoDetailLogo}
                button={
                  <StyledButton onClick={() => true}>
                    <ButtonLabel>{t('home:projectSection.button.seeMore')}</ButtonLabel>
                  </StyledButton>
                }
              ></StyledCardWithButton>
            </StyledGridItem>
          </StyledGridContainer>
        </>
      )}
    </Container>
  );
};

export default ProjectSection;
