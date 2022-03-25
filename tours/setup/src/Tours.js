import React from 'react';
import Tour from './Tour';
const Tours = ({tour,removeTour}) => {
  return <>
    <Tour {...tour} removeTour={removeTour} />
  </>;
};

export default Tours;
