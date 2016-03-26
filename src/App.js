import React from 'react';
import NavLink from './components/NavLink';

export default ({ children }) =>
  <div>
    <h1>React Router Tutorial</h1>
    <ul role="nav">
      <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/repos">Repos</NavLink></li>
    </ul>
    {children}
  </div>;
