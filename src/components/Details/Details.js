import React from "react";
import "./Details.css";
import useApi from "../useApi";
import { useParams, Navigate } from "react-router-dom";

import kc03 from "../../assets/kc03.jpeg";
import kc025 from "../../assets/kc025.jpeg";
import kc from "../../assets/kc.jpeg";
import kr033 from "../../assets/kr033.jpeg";
import kt from "../../assets/kt.jpeg";
import ktcn02 from "../../assets/ktcn02.jpeg";
import lava_cake from "../../assets/lava_cake.jpeg";
import profiteroli from "../../assets/profiteroli.jpeg";
import croissant from "../../assets/croissant.jpeg";
import toast_sandwich from "../../assets/toast_sandwich.jpeg";

function Details() {
  let params = useParams();

  const { error, data, loading } = useApi(params.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Navigate to={`/${params.category}`} />;
  }

  return (
    <div className="details-list">
      {data.map((item) => (
        <div key={item.id} className="details-item">
          {item.attributes.image && (
            <div className="details-images">
              <img
                className="details-image"
                src={require(`../../assets/${item.attributes.image}.jpeg`)}
                alt="Product Image"
              />
            </div>
          )}

          <div className="description-item">
            <h1>{item.attributes.title}</h1>
            <h4>{item.attributes.description}</h4>

            <div className="details-price">
              <p className="details-price-euro">
                {item.attributes.price} <span>€</span>
              </p>

              <p className="details-price-hrk">
                {(item.attributes.price * 7.5).toFixed(2)} <span>HRK</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
