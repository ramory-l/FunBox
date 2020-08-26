import React from "react";
import { cn } from "@bem-react/classname";
import "./styles/catAndBall.css";

function CatAndBall(props) {
  let food = props.info;
  const ball = cn("CatAndBall-ball");
  return (
    <div className="CatAndBall">
      <img className="CatAndBall-cat" src="/images/Cat.png" alt="" />
      <div className={ball({ selected: props.isSelected })}>
        <div className="CatAndBall-weight">
          <span className="CatAndBall-weight_value">{food.weight}</span>
          <span className="CatAndBall-weight_measure">кг</span>
        </div>
      </div>
    </div>
  );
}

export default CatAndBall;
