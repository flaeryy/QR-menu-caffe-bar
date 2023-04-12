import React, { useState, useEffect } from "react";
import useApiSearch from "../useApiSearch";
import * as uuid from "uuid";
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

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const { data, error, loading } = useApiSearch(
    debouncedSearchTerm && debouncedSearchTerm.trim()
  );

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search"
        className="base-form-input"
      />

      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div key={uuid.v4()} className="details-item">
            {item.image && (
              <div className="details-images">
                <img
                  className="details-image"
                  src={require(`../../assets/${item.image}.jpeg`)}
                  alt="Product Image"
                />
              </div>
            )}
            <div className="description-item">
              <h1>{item.title}</h1>
              <h4>{item.description}</h4>

              <div className="details-price">
                <p className="details-price-euro">
                  {item.price} <span>€</span>
                </p>

                <p className="details-price-hrk">
                  {(item.price * 7.5).toFixed(2)} <span>HRK</span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </form>
  );
}

export default SearchBar;
