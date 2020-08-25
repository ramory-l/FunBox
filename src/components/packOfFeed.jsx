import React, { useState } from "react";
import "./styles/packOfFeed.css";

function PackOfFeed(props) {
  let food = props.info;
  const [isSelected, setSelected] = useState(false);

  let packOfFeed = isSelected ? "packOfFeed__selected" : "packOfFeed";
  let packOfFeedBall = isSelected
    ? "packOfFeed__ball__selected"
    : "packOfFeed__ball";

  let description = isSelected ? (
    food.description
  ) : (
    <span>
      Чего сидишь? Порадуй котэ,{" "}
      <a className="packOfFeed__description__link" href="#">
        купи
      </a>
      <span className="packOfFeed__description__link_">.</span>
    </span>
  );

  const toogleSelect = () => {
    if (isSelected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  return (
    <figure onClick={toogleSelect} className={packOfFeed}>
      <div className="packOfFeed__slogan">Сказочное заморское яство</div>
      <div className="packOfFeed__brandName">Нямушка</div>
      <div className="packOfFeed__taste">{food.taste}</div>
      <p className="packOfFeed__numberOfServings">
        {`${food.numberOfservings} порций`}
        <br />
        {`${food.bonus}`}
      </p>
      <div className="packOfFeed_info">
        <img className="packOfFeed__cat" src="/images/Cat.png" alt="" />
        <div className={packOfFeedBall}>
          <div className="packOfFeed__weight">
            <span className="packOfFeed_weight_value">{food.weight}</span>
            <span className="packOfFeed_weight_measure">кг</span>
          </div>
        </div>
      </div>
      <figcaption className="packOfFeed__description">{description}</figcaption>
    </figure>
  );
}

export default PackOfFeed;
