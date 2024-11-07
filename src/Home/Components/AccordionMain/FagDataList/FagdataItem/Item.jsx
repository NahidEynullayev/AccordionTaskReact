import React, { useState } from "react";
import "./Item.scss";
import Down from "./ItemImage/Down.png";
import setDown from "./ItemImage/Down (3).png";
const Item = ({ key, question, answer }) => {
  //  ?   useState

  const changeDown = () => {
    setDownImage(
      <li key={key}>
        <div className="question">
          <p>{question}</p>
          <button onClick={feedBack}>
            <img src={setDown} alt="" />
          </button>
        </div>
        <div className="answer">
          <p>{answer}</p>
          <button onClick={feedBack}>
            <p>Learn More</p>
          </button>
        </div>
      </li>
    );
  };
  const feedBack = () => {
    setDownImage(
      <li key={key}>
        <div className="questionFirst">
          <p>{question}</p>
          <button onClick={changeDown}>
            <img src={Down} alt="" />
          </button>
        </div>
        <div></div>
      </li>
    );
  };
  const [downImage, setDownImage] = useState(
    <li key={key}>
      <div className="questionFirst">
        <p>{question}</p>
        <button onClick={changeDown}>
          <img src={Down} alt="" />
        </button>
      </div>
      <div></div>
    </li>
  );

  // ! useState
  return (
    <React.Fragment>
      <ul>{downImage}</ul>
    </React.Fragment>
  );
};

export default Item;
