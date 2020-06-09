import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartContainer from "./containers/StartContainer";
import QuestionContainer from "./containers/QuestionContainer";
import ResultContainer from "./containers/ResultContainer";
import AppBar from "./components/AppBar/AppBar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <section className="App">
      <AppBar title="Risk Management Application" />
      <Router>
        <Switch>
          <Route exact path="/" component={StartContainer} />
          <Route exact path="/question/:id" component={QuestionContainer} />
          <Route exact path="/result" component={ResultContainer} />
          />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
