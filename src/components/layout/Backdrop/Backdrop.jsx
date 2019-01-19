import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({click}) => {
  return (
    // eslint-disable-next-line
    <div className='backdrop' onClick={click} />
  );
};

Backdrop.propTypes = {
  click: PropTypes.func.isRequired
};
export default Backdrop;
