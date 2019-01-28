import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not_found'>
      <div className='not_found_text'>
        <h3>OOOOOPPPPPPS SEEMS This is not what your are looking for???</h3>
        <Link to='/'>
          <button type="button" className='btn'>Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
