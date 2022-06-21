import React from "react";
import NewsItems from "./NewsItems";
import sample from "./sample-response.json";


export default function News() {
  return (
    <div>      
      <NewsItems articles = {sample.articles} />
    </div>
  );
}
