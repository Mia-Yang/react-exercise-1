import React from 'react';
import imgURL from '../../src/assets/avatar.jpg'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={imgURL} alt="" />
        <div className="hello">
          <h1>HELLO,</h1>
          <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
        </div>
        <div className="line"></div>
      </div>
    );
  }
}
