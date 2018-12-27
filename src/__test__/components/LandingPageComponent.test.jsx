import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../components/LandingPage';
import SignInLink from '../../components/layout/SignInLink';
import SignOutLink from '../../components/layout/SignOutLink';
import AboutUs from '../../components/layout/AboutUs';
import RecentFood from '../../components/layout/RecentFood';
import SucessStories from '../../components/layout/SuccessStories';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

import '../setup/setupEnzyme';

describe('LandingPage renders successfully', () => {
  it('renders', () => {
    shallow(<LandingPage />);
  });

  it('Renders Navbar component', () => {
    const wrapper = shallow(<LandingPage />);
    const navbar = wrapper.find('Navbar');
    expect(navbar.length).toBe(1);
  });

  it('Renders SignInLink component', () => {
    const wrapper = shallow(<SignInLink />);
    const listWrapper = wrapper.find('ul');
    const list = wrapper.find('li');
    expect(listWrapper.length).toBe(1);
    expect(list.length).toBe(3);
  });

  it('Renders SignOutLink component', () => {
    const wrapper = shallow(<SignOutLink />);
    const listWrapper = wrapper.find('ul');
    const list = wrapper.find('li');
    expect(listWrapper.length).toBe(1);
    expect(list.length).toBe(4);
  });

  it('Renders AboutUs component', () => {
    const wrapper = shallow(<AboutUs />);
    const header3 = wrapper.find('h3');
    const header1 = wrapper.find('h1');
    expect(header3.length).toBe(3);
    expect(header1).toBeCalled;
    expect(header1.length).toBe(1);
  });

  it('Renders RecentFood component', () => {
    const wrapper = shallow(<RecentFood />);
    const state = wrapper.state();
    const header3 = wrapper.find('h3');
    const header1 = wrapper.find('h1');
    expect(header3.length).toBe(1);
    expect(header1).toBeCalled;
    expect(header1.length).toBe(1);
    expect(state).toMatchObject;
    expect(state).toHaveProperty('foods');
  });

  it('Renders SucessStories component', () => {
    const wrapper = shallow(<SucessStories />);
    const paragraphCount = wrapper.find('p');
    const header1 = wrapper.find('h1');
    expect(header1).toBeCalled;
    expect(paragraphCount.length).toBe(3);
    expect(header1.length).toBe(1);
  });


  it('Renders Footer component', () => {
    const wrapper = shallow(<Footer />);
    const paragraphCount = wrapper.find('p');
    const aTag = wrapper.find('a');
    const imgTag = wrapper.find('img');
    expect(paragraphCount.length).toBe(2);
    expect(aTag.length).toBe(8);
    expect(imgTag.length).toBe(4);
  });


  it('Renders Navbar component', () => {
    const wrapper = shallow(<Navbar />);
    const header = wrapper.find('h3');
    expect(header).toBeCalled;
    expect(header.length).toBe(1);
  });
});
