import React from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";
import Articlelist from "./Articlelist";
import Articlepage from "./Articlepage";
import Menu from "./Menu"


function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
      <Route
          path="/articles/:id"
          render={(props) => {
            return <Articlepage {...props} />;
          }}
        />
        <Route path="/">
          <Articlelist />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
