import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={PhotoGrid} />
            <Route exact path="/view/:postId" component={Single} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
