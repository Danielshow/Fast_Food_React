import React, { Component } from 'react';

/**
 * This Class use various imported Components and display on the webpage
 */
export default class App extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      name: 'Daniel'
    };
  }

  /**
    * @return {String} - (HTML Markup for the component)
    */
  render() {
    return (
      <div>
        <h1>Fast Food Fast {this.state.name} </h1>
      </div>
    );
  }
}
