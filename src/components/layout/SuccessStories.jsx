import React from 'react';
import user1 from '../../../images/icons/user-4.png';
import user2 from '../../../images/icons/user-6.png';
import user3 from '../../../images/icons/user-5.png';

const SuccessStories = () => (
  <div className="testimonial">
    <h1>Success Stories</h1>
    <hr />
    <div className="success-stories">
      <div className="story">
        <img src={user1} alt="first user" width="100px" height="100px" />
        <p>
          Menu is Perfect, Service was awsesome and timely,
          Will order again soon,
          Staff was awesome, its a place to try and eat good meal
        </p>
        <span className="name">- Daniel</span>
      </div>
      <div className="story">
        <img src={user2} alt="second user" width="100px" height="100px" />
        <p>
          Every meal has a variety of options and was flavourful,
          the price were so reasonable, Customer care service was great,
          Highly Recommended
        </p>
        <span className="name">- Samuel</span>
      </div>
      <div className="story">
        <img src={user3} alt="third user" width="100px" height="100px" />
        <p>
          The food was absolutely wonderful, from preparation to presentation,
          very pleasing. Also enjoy the timely service, Highly Recommended
        </p>
        <span className="name">- Esther</span>
      </div>
    </div>
  </div>
);

export default SuccessStories;
