import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import user from "./components/user";
import SignUp from "./components/signup/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/test" component={user} />
      </Router>
    </div>
  );
}

export default App;
