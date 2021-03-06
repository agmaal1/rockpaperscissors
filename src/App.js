import React from "react";
import Welcome from "./screens/Welcome";
import Choice from "./screens/Choice";
import { Switch, Route, } from "react-router-dom";

function App() {
  return (
    <section className="main">
      <div className="content">
        <div>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/choice' component={Choice} />
          </Switch>
        </div>
      </div>
    </section>
  );
}

export default App;
