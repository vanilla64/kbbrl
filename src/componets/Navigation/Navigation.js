import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <ul className="tabs tabs-transparent">
        <li className="tab"><NavLink to={'/'} exact activeClassName="grey darken-4">Main</NavLink></li>
        <li className="tab"><NavLink to={'/products'} activeClassName="grey darken-4">Products</NavLink></li>
        <li className="tab"><NavLink to={'/contacts'} activeClassName="grey darken-4">Contacts</NavLink></li>
      </ul>
    </div>
  )
}

export default Navigation
