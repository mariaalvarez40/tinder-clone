import React from 'react';
import "./Chats.css";
import Chat from "./Chat.js"

function Chats() {
  return (
    <div className="chats">
     <Chat
      name="Mark"
      message="Hello!"
      timestamp="40 seconds ago"
      profilePic="https://www.fillmurray.com/200/300"
     /> 
      <Chat
        name="Mia"
        message="Howdy"
        timestamp="34 minutes ago"
        profilePic="https://www.fillmurray.com/200/300"
      /> 
      <Chat
        name="Matt"
        message="Hello!"
        timestamp="1 hour ago"
        profilePic="https://www.fillmurray.com/200/300"
      /> 
      <Chat
        name="Maria"
        message="mamiiiii"
        timestamp="2 weeks ago"
        profilePic="https://www.fillmurray.com/200/300"
      /> 
    </div>
  )
}

export default Chats;
