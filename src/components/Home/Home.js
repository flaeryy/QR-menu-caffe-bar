import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import useApi from "../useApi";
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar";

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
              backgroundImage: `url(http://localhost:1337${item.attributes.image.data.attributes.url})`,
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
