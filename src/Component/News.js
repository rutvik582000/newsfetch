import React from "react";
import NewsItems from "./NewsItems";
import sample from "./sample-response.json";

export default function News() {
  return (
    <div className="container my-3">
      <h1 className="text-center">Read news about world here</h1>
      <div className="row">
        {sample.articles.map((article) => {
          return (
            <div className="col-md-4">
              <NewsItems article={article} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
