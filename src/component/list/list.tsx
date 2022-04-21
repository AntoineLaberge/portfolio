import React from 'react';
import styled from '@emotion/styled';
import RadioButtonSelected from './radio-button-selected.svg';
import RadioButton from './radio-button.svg';

const StyledListElement = styled.li`
  & + & {
    border-top: 1px solid #dde5ed;
  }
`;

const StyledRadioButton = styled.button<{selected: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  background: url(${(props) => (props.selected ? RadioButtonSelected : RadioButton)}) no-repeat
    right 16px center;
  color: #0b2852 !important;
  cursor: ${(props) => (props.selected ? 'default' : 'pointer')};
  border-color: transparent;
`;

export const List = styled.ul`
  border: 1px solid #dde5ed;
  border-radius: 8px;
  list-style-type: none;
  padding: 0;
  margin: 15px 0 0;
`;

const ContentContainer = styled.div`
  text-align: left;

  span {
    display: block;
    font-size: 16px;
    line-height: 20px;
  }

  span + span {
    opacity: 0.6;
    font-size: 14px;
    line-height: 18px;
  }
`;

const ListElement: React.FC<{selected: boolean; onClick: () => void}> = (props) => {
  return (
    <StyledListElement>
      <StyledRadioButton type="button" selected={props.selected} onClick={props.onClick}>
        <ContentContainer>{props.children}</ContentContainer>
      </StyledRadioButton>
    </StyledListElement>
  );
};

export default ListElement;
