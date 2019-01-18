import React from 'react';
import PropTypes from 'prop-types';

const ConfirmDialog = ({children}) => {
  return (
    <div className='orderdetails'>
      <div className='orderwidth' id='orderwidth'>
        {children}
      </div>
    </div>
  );
};

ConfirmDialog.propTypes = {
  children: PropTypes.any.isRequired
};

export default ConfirmDialog;
