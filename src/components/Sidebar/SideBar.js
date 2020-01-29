import React, { Component } from 'react';
import './Sidebar.scss';

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="appInfo">
       <h4><i class="fab fa-battle-net"></i></h4>{' '}
          <h4 className="appTitle">MPOWER</h4>
        </div>
    <a  href="#home"><i class="fas fa-search"></i>{' '}Search</a>
    <a href="#news"><i class="far fa-bell"></i>{' '}Notifications</a>
    <hr/>
    <a href="#contact"><i class="fas fa-home"></i>{' '}Home</a>
</div>
    )
  }
}
