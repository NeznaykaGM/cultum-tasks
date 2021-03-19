import React from 'react';
import { CheckedPoint, CheckPoint, Image, PaginationWrapper } from './views';

interface Props {
  inProjectsPageArea: boolean;
  positionPagination: string | undefined;
  initialPage: 'first' | 'second' | 'third';
}

const rotate = {
  first: '45deg',
  second: '90deg',
  third: '135deg'
};

const OrbitPagination: React.FC<Props> = ({ children, inProjectsPageArea, positionPagination, initialPage }) => {
  return (
    <>
      <PaginationWrapper position={inProjectsPageArea ? 'fixed' : 'absolute'} positionPagination={positionPagination}>
        <Image src='/static/images/earth.png' alt='earth' />

        <CheckPoint rotate='45deg' />
        <CheckPoint rotate='90deg' />
        <CheckPoint rotate='135deg' />
        <CheckedPoint rotate={rotate[initialPage]} src='/static/images/slider.png' alt='slider' />
      </PaginationWrapper>
      {children}
    </>
  );
};

export default OrbitPagination;
