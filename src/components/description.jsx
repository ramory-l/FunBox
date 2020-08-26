import React from "react";
import "./styles/description.css";

function Description(props) {
  let food = props.info;
  return (
    <div className="Description">
      <div className="Description-slogan">Сказочное заморское яство</div>
      <div className="Description-brandName">Нямушка</div>
      <div className="Description-taste">{food.taste}</div>
      <p className="Description-numberOfServings">
        {`${food.numberOfservings} порций`}
        <br />
        {`${food.bonus}`}
      </p>
    </div>
  );
}

export default Description;
