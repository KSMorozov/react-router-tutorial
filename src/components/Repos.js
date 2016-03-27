import React, { PropTypes } from 'react';
import NavLink from './NavLink';
import { browserHistory } from 'react-router';

const Repos = ({ children }) =>
  <div>
    <h2>Repos</h2>
    <ul>
      <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
      <li><NavLink to="/repos/facebook/react">React</NavLink></li>
      <li>
        <form onSubmit={Repos.handleSubmit}>
          <input type="text" placeholder="user" />
          <input type="text" placeholder="repo" />
          <button type="submit">Go</button>
        </form>
      </li>
    </ul>
    {children}
  </div>;

Repos.handleSubmit = (e) => {
  e.preventDefault();
  const [ user, repo ] = Object.keys(e.target.elements)
    .map(k => e.target.elements[k].value);
  browserHistory.push(`/repos/${user}/${repo}`);
}

export default Repos;
