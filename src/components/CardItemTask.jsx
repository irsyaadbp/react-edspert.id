import React from "react";

export default function CardItemTask({ title, onDone, onDelete }) {
  return (
    <div className="card">
      <h4 className="card--title">{title}</h4>
      <div>
        <button onClick={onDone}>&#10003;</button>
      </div>
    </div>
  );
}
