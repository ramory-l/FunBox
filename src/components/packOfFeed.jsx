import React, { useState } from "react";
import "./styles/packOfFeed.css";
import { cn } from "@bem-react/classname";
import Description from "./description";
import CatAndBall from "./catAndBall";

function PackOfFeed(props) {
  let food = props.info;
  const [isSelected, setSelected] = useState(false);
  const packOfFeed = cn("PackOfFeed");

  const toogleSelect = () => {
    if (isSelected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  let caption = isSelected ? (
    food.description
  ) : (
    <span>
      Чего сидишь? Порадуй котэ,{" "}
      <a onClick={toogleSelect} className="PackOfFeed-caption_link" href="#">
        купи
      </a>
      <span className="PackOfFeed-caption_link_">.</span>
    </span>
  );

  return (
    <figure>
      <div
        onClick={toogleSelect}
        className={packOfFeed({ selected: isSelected })}
      >
        <Description info={food} />
        <CatAndBall info={food} isSelected={isSelected} />
      </div>
      <figcaption className="PackOfFeed-caption">{caption}</figcaption>
    </figure>
  );
}

export default PackOfFeed;
