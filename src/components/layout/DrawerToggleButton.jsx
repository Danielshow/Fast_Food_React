import React from 'react';
import PropTypes from 'prop-types';

const drawerToggleButton = ({sideDrawerEventClick}) => (
  <button
    type='submit'
    className="toggle-button"
    onClick={sideDrawerEventClick}
  >
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

drawerToggleButton.propTypes = {
  sideDrawerEventClick: PropTypes.func.isRequired
};
export default drawerToggleButton;
