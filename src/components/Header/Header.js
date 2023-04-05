import React, { useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import barcaffe from "../barcaffe.jpg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMenuClick = (category) => {
    navigate(`/${category}`);
    setActiveCategory(category);
  };

  const isCategoryActive = (category) => {
    return (
      category === activeCategory || location.pathname.includes(`/${category}`)
    );
  };

  return (
    <div className="header-main">
      <div className="header-logo">
        <img className="header-logo1" src={barcaffe} />
      </div>
      <div className="header-info1">
        <h2>Caffe Bar Rox</h2>
        <div className="header-info">
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="16"
                height="16"
                fill="currentColor"
              >
                {" "}
                <g>
                  <circle
                    cx="128"
                    cy="104"
                    r="32"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></circle>{" "}
                  <path
                    d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                </g>
              </svg>
            </span>
            <span>
              <a
                href="https://www.google.com/maps/place/Ban+Josip+Jela%C4%8Di%C4%87+Square,+10000,+Zagreb/@45.8130211,15.972904,17z/data=!3m1!4b1!4m6!3m5!1s0x4765d6fdc2523427:0x38ba0548d814fdc9!8m2!3d45.8131208!4d15.9773008!16zL20vMGNkcHJz"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Trg bana J.Jelačića 91
              </a>
              , Zagreb, Croatia{" "}
            </span>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="16"
                height="16"
                fill="currentColor"
              >
                {" "}
                <g>
                  <path
                    d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>{" "}
                  <path
                    d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>{" "}
                  <path
                    d="M25.06379,98.17952a146.68225,146.68225,0,0,1,205.8568,0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>{" "}
                  <circle cx="128" cy="200" r="12"></circle>
                </g>
              </svg>
            </span>

            <span>rox123</span>
          </div>
        </div>

        <div className="header-menu">
          <button
            className={`btn-menu ${isCategoryActive("foods") ? "active" : ""}`}
            onClick={() => handleMenuClick("foods")}
          >
            Pizza&Grill
          </button>
          <button
            className={`btn-menu ${isCategoryActive("drinks") ? "active" : ""}`}
            onClick={() => handleMenuClick("drinks")}
          >
            Bar
          </button>
        </div>
      </div>
    </div>
  );
}
