import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import { RecipesPage } from './pages/RecipesPage';
import { HomePage } from './pages/HomePage';
import history from './history';

function App() {

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/recipes">
            <RecipesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
