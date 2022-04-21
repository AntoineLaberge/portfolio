import React from 'react';
import styled from '@emotion/styled';
import {Container} from '@mui/material';
import {useTranslation} from 'react-i18next';
import ListElement, {List} from '../component/list';

enum Language {
  FR = 'fr',
  EN = 'en',
}

const MenuItemTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Settings: React.FC = () => {
  const {t, i18n} = useTranslation();

  return (
    <Container>
      <MenuItemTitle>{'Language'}</MenuItemTitle>
      <List>
        <ListElement
          selected={i18n.language === Language.EN}
          onClick={() => i18n.changeLanguage(Language.EN)}
        >
          {t('common:language.en')}
        </ListElement>
        <ListElement
          selected={i18n.language === Language.FR}
          onClick={() => i18n.changeLanguage(Language.FR)}
        >
          {t('common:language.fr')}
        </ListElement>
      </List>
    </Container>
  );
};

export default Settings;
