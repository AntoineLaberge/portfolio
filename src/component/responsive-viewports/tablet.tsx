import React from 'react';
import {useMediaQuery} from '@mui/material';

const MIN_WIDTH = 769;
const MAX_WIDTH = 992;

const Tablet: React.FC = ({children}) => {
  const isTablet =
    useMediaQuery(`(min-width: ${MIN_WIDTH}px)`) && useMediaQuery(`(max-width: ${MAX_WIDTH}px)`);
  return isTablet ? <>{children}</> : null;
};

export const useIsTablet = () => {
  return (
    useMediaQuery(`(min-width: ${MIN_WIDTH}px)`) && useMediaQuery(`(max-width: ${MAX_WIDTH}px)`)
  );
};

export default Tablet;
