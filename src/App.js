import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import Loging from "./components/Loging";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/loging" component={Loging} />
      </Router>
    </div>
  );
}

export default App;
