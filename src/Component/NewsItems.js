import React from "react";



export default function NewsItems(props) {
  console.log(new Date(props.article.publishedAt).toGMTString());
  return (    
    <>
      <div className="card my-3" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {props.article.source.name} </span>
        <img src= {props.article.urlToImage}  className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.article.title}</h5>
          <p className="card-text">
            {props.article.description}            
          </p>
          <p className="text-muted m-0">author : {!props.article.author? 'unknown' : props.article.author}</p>
          <p className="text-muted mt-0">Published on {(new Date(props.article.publishedAt).toGMTString())} </p> 
          <a href={props.article.url} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Read more...</a>
        </div>
      </div>
    </>

  );
}
