import React from "react";
import style from "../card.module.css";

const Card = props => {
  return (
    <div className={style.card}>
      <p>{props.task}</p>
      <button onClick={props.onDeleteTask}>Borrar</button>
    </div>
  );
};

export default Card;
