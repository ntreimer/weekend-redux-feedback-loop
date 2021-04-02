import React from "react";
import axios from "axios";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Feelings from "../Feelings/Feelings";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Support from "../Support/Support";
import Thanks from "../Thanks/Thanks";
import Understanding from "../Understanding/Understanding";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path="/feelings" exact>
          <Feelings />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/thanks" exact>
          <Thanks />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
      </Router>
    </div>
  );
}

export default App;
