import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SignIn from '../signIn/signInContainer';
import SignUp from '../signUp/signUpContainer';
import history from '../../helpers/history';
import Navbar from '../layout/Navbar';
import '../../index.css';
import orderHistory from '../orderHistory/orderHisoryContainer';
import Order from '../orders/OrderContainer';
import Admin from '../admin/adminContainer';
import SideDrawer from '../layout/sidedrawer/SideDrawerSignout';
import SideDrawerSignIn from '../layout/sidedrawer/SideDrawerSignin';
import BackDrop from '../layout/Backdrop/Backdrop';

/**
 * This Class use various imported Components and display on the webpage
 * @returns {string} - returns jsx
 */
class App extends Component {
  state = {
    drawerOpen : false
  }
  sideDrawerEventClick = () => {
    this.setState((prev) => {
      return {drawerOpen: !prev.drawerOpen};
    });
  }

  backDropClick = () => {
    this.setState({
      drawerOpen: false
    });
  }
  /**
   * @function
   * @returns {JSX} - Html template
   */
  render() {
    const token = localStorage.getItem('token');
    let sideDrawer;
    !token || token==='null'?
      sideDrawer=<SideDrawerSignIn />:sideDrawer = <SideDrawer />;
    const { drawerOpen } = this.state;
    return (
      <Router history={history}>
        <div className="overallwrapper">
          <Navbar sideDrawerEventClick={this.sideDrawerEventClick} />
          {drawerOpen?
          <>{sideDrawer}<BackDrop click={this.backDropClick} /></>:''}
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path="/order" component={Order} />
          <Route path='/customer/order' component={orderHistory} />
          <Route path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
