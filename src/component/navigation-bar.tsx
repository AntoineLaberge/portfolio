import React, {useState} from 'react';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import {Button, Container} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {Page} from '../App';
import {ReactComponent as CodeIcon} from './code.svg';
import MobileDrawer from './mobile-drawer';
import {useIsMobile} from './responsive-viewports';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  margin: 30px 0;
`;

const LogoContainer = styled.div`
  grid-column: 1 / 1;
`;

const StyledCodeIcon = styled(CodeIcon)`
  width: 40px;
  height: auto;
`;

const ButtonsContainer = styled.div`
  grid-column: 2 / 2;
  justify-self: end;
`;

const StyledButton = styled(Button)`
  border-radius: 25px;
  border: 2px solid var(--portfolio-color-accent);
  padding: 4px 14px;
  color: var(--portfolio-color-accent);
  text-transform: none;

  &:hover {
    background-color: var(--portfolio-color-accent);
    color: var(--portfolio-color-neutral);
  }

  & + & {
    margin-left: 15px;
  }
`;

const ButtonLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const StyledMenuButton = styled(Button)`
  padding: 0;
  margin: 0;

  svg {
    width: 40px;
    height: auto;
    color: var(--portfolio-color-accent);
  }
`;

const NavigationBar: React.FC<{setPage: React.Dispatch<React.SetStateAction<Page>>}> = (props) => {
  const {t} = useTranslation(['common']);

  const isMobile = useIsMobile();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const changePage = (page: Page) => {
    props.setPage(page);
    isMobile && setOpenDrawer(false);
  };

  return (
    <>
      <Container>
        <Grid>
          <LogoContainer>
            <StyledCodeIcon />
          </LogoContainer>

          <ButtonsContainer>
            {isMobile ? (
              <>
                <StyledMenuButton disableRipple onClick={() => setOpenDrawer(true)}>
                  <MenuIcon />
                </StyledMenuButton>
                <MobileDrawer openDrawer={openDrawer} changePage={changePage} />
              </>
            ) : (
              <>
                <StyledButton onClick={() => changePage(Page.Home)}>
                  <ButtonLabel>{t('common:navigation.home')}</ButtonLabel>
                </StyledButton>
                <StyledButton onClick={() => changePage(Page.Resume)}>
                  <ButtonLabel>{t('common:navigation.resume')}</ButtonLabel>
                </StyledButton>
                <StyledButton onClick={() => changePage(Page.Contact)}>
                  <ButtonLabel>{t('common:navigation.contactMe')}</ButtonLabel>
                </StyledButton>
                <StyledButton onClick={() => changePage(Page.Settings)}>
                  <ButtonLabel>{t('common:navigation.settings')}</ButtonLabel>
                </StyledButton>
              </>
            )}
          </ButtonsContainer>
        </Grid>
      </Container>
    </>
  );
};

export default NavigationBar;
