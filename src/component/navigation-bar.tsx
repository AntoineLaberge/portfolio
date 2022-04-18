import React, {useState} from 'react';
import styled from '@emotion/styled';
import {Button, Container, Drawer, useMediaQuery} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {Page} from '../App';
import {ReactComponent as CodeIcon} from './code.svg';
import {ReactComponent as MenuIcon} from './menu.svg';

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

const StyledMenuIcon = styled(MenuIcon)`
  width: 50px;
  height: auto;
`;

const StyledDrawer = styled(Drawer)`
  text-align: center;

  span {
    color: var(--portfolio-color-neutral);
    margin: 20px 0;
    font-size: 25px;
    font-weight: 700;
  }
`;

const NavigationBar: React.FC<{setPage: React.Dispatch<React.SetStateAction<Page>>}> = (props) => {
  const {t} = useTranslation(['common']);

  const isMobile = useMediaQuery('(max-width: 600px)');

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
                <Button disableRipple onClick={() => setOpenDrawer(true)}>
                  <StyledMenuIcon />
                </Button>
                <StyledDrawer
                  variant="temporary"
                  anchor="right"
                  open={openDrawer}
                  PaperProps={{
                    sx: {
                      width: '100%',
                      backgroundColor: 'var(--portfolio-color-accent)',
                    },
                  }}
                >
                  <span onClick={() => changePage(Page.Home)}>{t('common:navigation.home')}</span>

                  <span onClick={() => changePage(Page.Resume)}>
                    {t('common:navigation.resume')}
                  </span>

                  <span onClick={() => changePage(Page.Contact)}>
                    {t('common:navigation.contactMe')}
                  </span>
                </StyledDrawer>
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
              </>
            )}
          </ButtonsContainer>
        </Grid>
      </Container>
    </>
  );
};

export default NavigationBar;
