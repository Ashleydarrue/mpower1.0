import React, { Component } from 'react';
import './Nav.scss'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="navLeft">
          <a><i class="fas fa-layer-group"></i>{' '}Customers</a>
        </div>

        <div className="navRight">
        <a  href="#Search"><i class="fas fa-search"></i>{' '}Search</a>{' '}
        <a  href="#Filter"><i class="fas fa-sort-amount-up-alt"></i>{' '}Filter</a>{' '}
        <a  href="#AddMem"><i class="fas fa-user-plus"></i>{' '}Add Member</a>{' '}
        </div>

      </nav>
    )
  }
}
