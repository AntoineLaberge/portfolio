import React from 'react';
import styled from '@emotion/styled';
import {useTranslation} from 'react-i18next';
import {Page} from '../App';
import {ReactComponent as FeelingProudIcon} from '../component/feeling-proud.svg';
import Footer from '../component/footer';
import PresentationSection from '../component/presentation-section';
import ProjectSection from '../component/project-section/project-section';
import SkillCard from '../component/skill-card/skill-card';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.p`
  margin: 90px 0 -15px;
  font-size: 35px;
  font-weight: 700;
`;

const UniversityLabel = styled.p`
  font-size: 30px;
  font-weight: 400;
`;

const LocationLabel = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 100px;
`;

const StyledFeelingProudIcon = styled(FeelingProudIcon)`
  width: 350px;
  height: auto;
  z-index: 1;
`;

const SkillCardContainer = styled.div`
  margin-top: -50px;
`;

const Home: React.FC<{setPage: React.Dispatch<React.SetStateAction<Page>>}> = (props) => {
  const {t} = useTranslation(['home']);

  return (
    <Container>
      <Title>{t('home:degree')}</Title>

      <UniversityLabel>{t('home:university')}</UniversityLabel>

      <LocationLabel>{t('home:basedIn')}</LocationLabel>

      <StyledFeelingProudIcon />

      <PresentationSection />

      <SkillCardContainer>
        <SkillCard />
      </SkillCardContainer>

      <ProjectSection />

      <Footer setPage={props.setPage} />
    </Container>
  );
};

export default Home;
