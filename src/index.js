import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App.js';
import About from './components/About';
import Repos from './components/Repos';
import Repo from './components/Repo';
import './main.css';

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
