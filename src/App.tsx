import React from "react";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import "./App.css";
import { JobDescription } from "./components/JobDescription/JobDescription";
import { TodoList } from "./components/TodoList/TodoList";


function App() {

  const match = useRouteMatch();

  console.log('route path ---');
  console.log(match.path);

  return (
    <div className="App">
      <header className="App-header">
        This is the Plugin Project 04/05/2021 app component.
        <Router>
          <div>
            <Switch>
              <Route path={'/joblisting-page/job'}>
                <JobDescription />
              </Route>
              <Route path={'/joblisting-page'} exact={true}>
                <TodoList />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
