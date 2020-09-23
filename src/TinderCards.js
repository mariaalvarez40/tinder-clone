//rfce syntax to create component 
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';


function TinderCards() {
  // eslint-disable-next-line
  const [people, setPeople] = useState([
    {
      name: "test",
      url: "https://www.fillmurray.com/640/360", 
    },
    {
      name: "alvarez",
      url: "https://www.fillmurray.com/640/360",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>
     <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            //pass in parameters to disable
            preventSwipe={["up", "down"]}
            className="swipe"
            //use keys, for lists, allows react to efficiently re-render a list, supports faster reload
            key={person.name}
          >
            <div
              className="card"
              //line 34 use backticks on string interpolation  
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