/*import React from "react";
import { getImage } from "../../utils/imageLoader";
import "./SoapCards.css";

export default function SoapCards({ soaps }) {
  return (
    <div className="cards-container">
      {soaps.map((soap) => (
        <div className="card" key={soap.id}>
          <img
            src={getImage(soap.image)}
            alt={soap.name}
            className="card-img"
          />

          <h3>{soap.name}</h3>
          <p className="desc">{soap.description}</p>

          <div className="bottom">
            <span className="price">₹{soap.price}</span>
            <span className="rating">⭐ {soap.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
*/
import React from "react";
import { getImage } from "../../utils/imageLoader";
import "./SoapCards.css";

export default function SoapCards({ soaps }) {
  return (
    <div className="cards-container">
      {soaps.map((soap) => {
        const src = getImage(soap.image); // will be null if not found

        return (
          <div className="card" key={soap.id}>
            {src ? (
              <img src={src} alt={soap.name} className="card-img" />
            ) : (
              <div className="card-img placeholder">
                {/* accessible placeholder (optional) */}
                <span>No image</span>
              </div>
            )}

            <h3>{soap.name}</h3>
            <p className="desc">{soap.description}</p>

            <div className="bottom">
              <span className="price">₹{soap.price}</span>
              <span className="rating">⭐ {soap.rating}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
