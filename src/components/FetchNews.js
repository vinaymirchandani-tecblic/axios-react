import React, { useState } from "react";
import axios from "axios";

import { NavBar } from "./NavBar";

export const FetchNews = () => {
  const [news, setNews] = useState([]);
  const fetchData = () => {
    axios
      .get(
        " https://newsapi.org/v2/top-headlines?country=in&apiKey=16f7c4b222aa4b498b6ecf4ca697426b"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };

  return (
    <>
      <NavBar />
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchData}>
              FetchNews
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="/" className="btn btn-primary">
                      {value.url}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
