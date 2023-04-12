import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import useApi from "../useApi";
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar";
import beers from "../../assets/beers.jpeg";
import waters from "../../assets/waters.jpeg";
import wines from "../../assets/wines.jpeg";
import hot_drinks from "../../assets/hot_drinks.jpeg";
import rakijes from "../../assets/rakijes.jpeg";
import alcoholic_beverages from "../../assets/alcoholic_beverages.jpeg";
import bottle_services from "../../assets/bottle_services.jpeg";
import carbonated_alcoholic_beverages from "../../assets/carbonated_alcoholic_beverages.jpeg";
import natural_juices_and_freshly_squeezed_juices from "../../assets/natural_juices_and_freshly_squeezed_juices.jpeg";
import promotions from "../../assets/promotions.jpeg";
import non_carbonated_carbonated_beverages from "../../assets/non_carbonated_carbonated_beverages.jpeg";
import sparkling_wines from "../../assets/sparkling_wines.jpeg";
import toast_and_croissants from "../../assets/toast_and_croissants.jpeg";

import burgers from "../../assets/burgers.jpeg";
import deserts from "../../assets/deserts.jpeg";
import pizzas from "../../assets/pizzas.jpeg";
import rice_bowls from "../../assets/rice_bowls.jpeg";
import salads from "../../assets/salads.jpeg";

export default function Home() {
  const { category } = useParams();
  const { error, data, loading } = useApi(category);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Navigate to="/drinks" replace={true} />;
  }

  return (
    <div>
      <SearchBar />
      <div className="home-list">
        {data.map((item) => (
          <Link
            key={item.id}
            className="home-item"
            to={`/${category}/${item.attributes.api_desc}`}
            style={{
              backgroundImage: `url(${require(`../../assets/${item.attributes.image}.jpeg`)})`,
              backgroundSize: "cover",
            }}
          >
            <div className="overlay"> </div>
            <h2>{item.attributes.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
