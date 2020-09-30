import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import SwipeButtons from "./SwipeButtons";

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
     <Router>
        <Switch>
          {/* //default root at the bottom  */}
          <Route path="/chat/:person">
            <Header backButton="/" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />  
              <Chats/>
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
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
