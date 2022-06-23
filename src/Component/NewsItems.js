import React from "react";


export default function NewsItems(props) {

  return (    
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src= {props.article.urlToImage}  className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.article.title}</h5>
          <p className="card-text">
            {props.article.description}            
          </p>
          <a href={props.article.url} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Read more...</a>
        </div>
      </div>

  );
}
