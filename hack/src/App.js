import React from "react";
import Button from "react-bootstrap/Button";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Button variant="primary">Primary</Button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
