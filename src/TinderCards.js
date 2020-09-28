//rfce syntax to create component 
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase.js';
import './TinderCards.css';




function TinderCards() {

  const [people, setPeople] = useState([]);
  
  //onShapshot: takes a picture of database, returns a snapchot of all documents, always listening or updating
  //this will run ONCE when the component loads and never again. If brackets are left blank.
  useEffect(() => {
    const unsubscribe = database
    .collection("people")
    .onSnapshot((snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
    return () => {
      //clean up to listener
      unsubscribe();
    };
  },[]);


  return (
    <div>
     <div className="tinderCards__cardContainer">
        {people.map((person, key) => (  
          <TinderCard
            key={key} 
            //pass in parameters to disable
            preventSwipe={["up", "down"]}
            className="swipe" 
          >
          <div
              className="card"
              //line 34 use backticks - string interpolation  
              style={{ backgroundImage: `url("${person.url}")` }}>
          <h3>{person.name}</h3>
          </div>
          </TinderCard>
        ))}
     </div>     
    </div>
  );
}


export default TinderCards;

  //TRADTIONAL PATTERN 
  //const people = []
  // people.push('maria', 'alvarez')

  //REACT PATTERN: Push to Array 
 // set People([...people, 'maria', 'alvarez'])