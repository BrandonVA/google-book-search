import React from "react";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BooksSaved from "./pages/BooksSaved";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/saved">
            <BooksSaved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
