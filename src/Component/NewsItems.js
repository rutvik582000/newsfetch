import React from "react";


export default function NewsItems(props) {
  return (
    <div className="container my-3">
        <h1 className="text-center">Read news about wotld here</h1>
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src= {props.articles[0].urlToImage}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.articles[0].title}</h5>
          <p className="card-text">
            {props.articles[0].description}            
          </p>
          <a href={props.articles[0].url} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Read more...</a>
        </div>
      </div>
    </div>
  );
}
