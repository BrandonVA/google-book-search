import React from "react";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import HeadingNav from "./components/HeadingNav/HeadingNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BooksSaved from "./pages/BooksSaved";

const App = () => {
  return (
    <Router>
      <div>
        <HeadingNav />
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
};

export default App;
