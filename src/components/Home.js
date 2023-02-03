import React, { useEffect, useState } from "react";
import { FetchNews } from "./FetchNews";
import axios from "axios";
import { NavBar } from "./NavBar";

export const Home = () => {
  const [news, setNews] = useState([]);
  const [isRefresh, setIsRefres] = useState(false);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
      <p onClick={() => setIsRefres(true)}></p>
      <div className="container mt-5">
        <div className="row">
          {news.length === 0 && <p>Loading....</p>}
          {news.length > 0 &&
            news.map((value) => {
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
                      <a href={value.url} className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
