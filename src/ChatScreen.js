import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';


function ChatScreen() {
  //keep track
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: 'https://www.fillmurray.com/g/200/300',
      message: "what's up :)"
    },
    {
      name: "Meiyt",
      image: 'https://www.fillmurray.com/g/200/300',
      message: "what's up :)"
    },
    {
      name: "yamal",
      image: 'https://www.fillmurray.com/g/200/300',
      message: "what's up :)"
    },
    //fake response
    {

      message: "Hello there!"
    },
  ]);

  const handleSend = e => {
    //need to do this line otherwise, going to refresh when you press enter on keyboard
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You MATCHED WITH ELLEN ON 10/01/20</p>
      {messages.map((message) => (
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">
              {message.message}
            </p>
          </div>

        ) : (
            <div className="chatScreen__message"> 
              <p className="chatScreen__textUser">
                {message.message}
              </p>
            </div>

        )  
      ))}
      
        <form className="chatScreen__input">
          <input 
            value={input}
            onChange={ (e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text" />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >SEND</button>  
        </form>
      
    </div>
  )
}

export default ChatScreen;
