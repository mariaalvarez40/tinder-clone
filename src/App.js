import React from "react";
import Header from "./Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* //if you want header to appear on all pages place outside router  */}
      <Header />

     <Router>
        <Switch>
          {/* //default root at the bottom  */}
          <Route path="/chat">
            <h1>I am chat</h1>
          </Route>
          <Route path="/">
            <h1>I am homepage</h1>
          </Route>
         
        </Switch>
     </Router>
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}

      {/* Chat Screen  */}
      {/* Individual chat screen */}
    

    </div>
  );
}

export default App;
