import React from 'react';
import styled from '@emotion/styled';
import {Drawer} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {Page} from '../App';

const StyledMenuList = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: var(--portfolio-color-neutral);
    padding: 20px 0;
    margin: 0 40px;
    font-size: 25px;
    font-weight: 700;

    & + * {
      border-top: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
`;

const DrawerFooter = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;

  p {
    color: #fff;
  }
`;

const MobileDrawer: React.FC<{openDrawer: boolean; changePage: (page: Page) => void}> = (props) => {
  const {t} = useTranslation(['common']);

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={props.openDrawer}
      PaperProps={{
        sx: {
          width: '100%',
          backgroundColor: 'var(--portfolio-color-accent)',
          padding: '30px 0',
          textAlign: 'center',
        },
      }}
    >
      <StyledMenuList>
        <span onClick={() => props.changePage(Page.Home)}>{t('common:navigation.home')}</span>

        <span onClick={() => props.changePage(Page.Resume)}>{t('common:navigation.resume')}</span>

        <span onClick={() => props.changePage(Page.Contact)}>
          {t('common:navigation.contactMe')}
        </span>

        <span onClick={() => props.changePage(Page.Settings)}>
          {t('common:navigation.settings')}
        </span>
      </StyledMenuList>

      <DrawerFooter>
        <p>{'Antoine Laberge'}</p>
        <p>{'\u00A9 2022'}</p>
      </DrawerFooter>
    </Drawer>
  );
};

export default MobileDrawer;
