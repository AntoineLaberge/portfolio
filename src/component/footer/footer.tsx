import React from 'react';
import styled from '@emotion/styled';
import {Container} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {Page} from '../../App';

const FooterContainer = styled.div`
  background-color: var(--portfolio-color-accent);
  color: #fff;
  height: 150px;
  padding: 15px;
  text-align: left;
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1f 1f;
  height: 100%;
`;

const LeftContent = styled.div`
  grid-column: 1/1;
  position: relative;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 0px;
`;

const Greetings = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const CopyRights = styled.p`
  position: absolute;
  font-size: 12px;
  bottom: 0;
`;

const RightContent = styled.div`
  grid-column: 2/2;
`;

const LinkTitle = styled.p`
  font-size: 14px;
`;
const LinkItem = styled.p`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin: 7px 0;
`;

const Footer: React.FC<{setPage: React.Dispatch<React.SetStateAction<Page>>}> = (props) => {
  const {t} = useTranslation(['common', 'home']);

  return (
    <FooterContainer>
      <StyledContainer>
        <LeftContent>
          <Name>{'Antoine Laberge'}</Name>
          <Greetings>{t('home:footer.greetings')}</Greetings>

          <CopyRights>{t('home:footer.copyRights')}</CopyRights>
        </LeftContent>

        <RightContent>
          <LinkTitle>{t('home:footer.linkTitle')}</LinkTitle>

          <LinkItem onClick={() => props.setPage(Page.Home)}>
            {t('common:navigation.home')}
          </LinkItem>
          <LinkItem onClick={() => props.setPage(Page.Resume)}>
            {t('common:navigation.resume')}
          </LinkItem>
          <LinkItem onClick={() => props.setPage(Page.Contact)}>
            {t('common:navigation.contactMe')}
          </LinkItem>
          <LinkItem onClick={() => props.setPage(Page.Settings)}>
            {t('common:navigation.settings')}
          </LinkItem>
        </RightContent>
      </StyledContainer>
    </FooterContainer>
  );
};

export default Footer;
