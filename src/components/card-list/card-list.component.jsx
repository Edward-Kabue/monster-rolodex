import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";
export default function cardlist(props) {
  return (
    <React.StrictMode>
      <div className="card-list">
        {props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    </React.StrictMode>
  );
}
