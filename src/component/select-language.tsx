import React from 'react';
import styled from '@emotion/styled';
import {useTranslation} from 'react-i18next';
import Select from 'react-select';

type LanguageOptions = {
  value: Language;
  label: string;
};

enum Language {
  FR = 'fr',
  EN = 'en',
}

const LanguageSelectContainer = styled.div`
  position: fixed;
  bottom: 0;
  padding: 16px;
`;

const StyledSelect = styled(Select)`
  width: 125px;
`;

const SelectLanguage: React.FC = () => {
  const {i18n} = useTranslation(['common']);

  const languageOptions: LanguageOptions[] = [
    {value: Language.EN, label: 'English'},
    {value: Language.FR, label: 'Français'},
  ];

  return (
    <LanguageSelectContainer>
      <StyledSelect
        options={languageOptions}
        onChange={async (selectedLanguage) => {
          const x = selectedLanguage as LanguageOptions;
          return await i18n.changeLanguage(x.value);
        }}
        menuPlacement="top"
        hideSelectedOptions
        isSearchable={false}
        backspaceRemovesValue={false}
        defaultValue={languageOptions[0]}
      />
    </LanguageSelectContainer>
  );
};

export default SelectLanguage;
