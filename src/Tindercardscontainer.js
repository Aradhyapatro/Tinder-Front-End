import React from "react";
import "./Tindercardscontainer.css";
import TinderCard from "react-tinder-card";

const Tindercardscontainer = ({ people }) => {
  return (
    <div className="CardContainer">
      {people.map((person, index) => {
        return (
          <TinderCard key={index} preventSwipe={["up", "down"]}>
            <div
              className="card"
              style={{ backgroundImage: `url(${person.img})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
};

export default Tindercardscontainer;
