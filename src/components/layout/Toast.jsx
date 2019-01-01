import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({warning}) => {
  return (
    <div className="toastContainer">
      <p>
        { warning }
      </p>
    </div>
  );
};

Toast.propTypes = {
  warning: PropTypes.string.isRequired
};

export default Toast;
