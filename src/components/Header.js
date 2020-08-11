import React from 'react';
import imgURL from '../../src/assets/avatar.jpg';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={imgURL} alt="" />
        <h1>HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
        <div className="line"></div>
      </div>
    );
  }
}
