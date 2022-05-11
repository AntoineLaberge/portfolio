import React, {ReactNode} from 'react';
import styled from '@emotion/styled';
import {Card, CardMedia} from '@mui/material';

const CornerButtons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > button {
    z-index: 2;
    opacity: 0;
    height: 25px !important;
    padding: 0 10px !important;
    transition: 0.5s opacity fade-in-out;

    &:hover,
    &:focus,
    &:active {
      opacity: 1;
    }
  }
`;

const StyledCard = styled(Card)`
  position: relative;
  border-radius: 10px;

  &:hover {
    &:before {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.5);
    }

    button {
      opacity: 1;
    }
  }
`;

const CardWithButton: React.FC<{button: ReactNode; backgroundPath: string}> = (props) => {
  return (
    <StyledCard {...props}>
      <CardMedia
        component="img"
        height="100%"
        image={props.backgroundPath}
        alt="card-background-image"
      />
      <CornerButtons>{props.button}</CornerButtons>
    </StyledCard>
  );
};

export default CardWithButton;
