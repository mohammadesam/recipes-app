import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "../App.css";
export default function Recipe({ recipe }) {
  const [details, setDetails] = useState(false);

  return (
    <React.Fragment>
      <div
        className="card col-auto  ml-3 border bg-light mb-3"
        style={{ width: "18rem" }}
      >
        <img
          src={recipe.image}
          className="card-img-top border rounded-circle shadow-lg"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title text-danger">{recipe.label}</h4>
          <h5 className="card-text text-danger">
            Calories: {Math.round(recipe.calories)}
          </h5>
        </div>
        <ul className={detailsControler().class}>
          {recipe.ingredients.map((ingredient, index) => (
            <li className="list-group-item" key={index}>
              {ingredient.text}
            </li>
          ))}
        </ul>
        <div className="card-body">
          <button className="btn btn-danger " onClick={handleDetailsToggle}>
            {" "}
            {detailsControler().text}{" "}
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  function handleDetailsToggle() {
    setDetails(() => !details);
  }
  function detailsControler() {
    if (details)
      return {
        class: "details d-flex list-group list-group-flush shadow-lg",
        text: "show Less",
      };
    return {
      class: "details d-none list-group list-group-flush shadow-lg",
      text: "show More",
    };
  }
}
