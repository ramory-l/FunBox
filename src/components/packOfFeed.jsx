import React, { useState } from "react";
import "./styles/packOfFeed.css";
import { cn } from "@bem-react/classname";
import Description from "./description";

function PackOfFeed(props) {
  let food = props.info;
  const [isSelected, setSelected] = useState(false);
  const [isHovered, setHover] = useState(false);
  const packOfFeed = cn("PackOfFeed");
  const packOfFeedBall = cn("PackOfFeed-ball");
  const packOfFeedCat = cn("PackOfFeed-cat");

  const toogleSelect = () => {
    if (isSelected && !food.isEnded) {
      setSelected(false);
    } else if (!food.isEnded) {
      setSelected(true);
    }
  };

  let caption = () => {
    if (isSelected) {
      return food.description;
    } else if (food.isEnded) {
      return (
        <span
          style={{ color: "#ffff66" }}
        >{`Печалька, ${food.taste} закончился.`}</span>
      );
    } else {
      return (
        <span>
          Чего сидишь? Порадуй котэ,{" "}
          <a
            onClick={toogleSelect}
            className="PackOfFeed-caption_link"
            href="#"
          >
            купи
          </a>
          <span className="PackOfFeed-caption_link_">.</span>
        </span>
      );
    }
  };

  const deleteHoverColor = () => {
    if (isSelected && !food.isEnded) {
      setHover(false);
    } else if (!food.isEnded) {
      setHover(false);
    }
  };

  const ref = React.createRef();

  const setHoverColor = () => {
    if (isSelected && !food.isEnded) {
      setHover(true);
    } else if (!food.isEnded) {
      setHover(true);
      console.log(
        packOfFeedBall({
          selected: isSelected,
          ended: food.isEnded,
          hover: isHovered,
        })
      );
    }
  };

  return (
    <figure>
      <div
        onMouseOver={setHoverColor}
        onMouseLeave={deleteHoverColor}
        onClick={toogleSelect}
        ref={ref}
        className={packOfFeed({
          selected: isSelected,
          ended: food.isEnded,
          hover: isHovered,
        })}
      >
        <Description
          info={food}
          isHovered={isHovered}
          isSelected={isSelected}
        />
        <img
          className={packOfFeedCat({ ended: food.isEnded })}
          src="/images/Cat.png"
          alt="Тут должен быть котик"
        />
        <div
          className={packOfFeedBall({
            selected: isSelected,
            ended: food.isEnded,
            hover: isHovered,
          })}
        >
          <div className="PackOfFeed-weight">
            <span className="PackOfFeed-weight_value">{food.weight}</span>
            <span className="PackOfFeed-weight_measure">кг</span>
          </div>
        </div>
      </div>
      <figcaption className="PackOfFeed-caption">{caption()}</figcaption>
    </figure>
  );
}

export default PackOfFeed;
