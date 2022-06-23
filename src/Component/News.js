import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import sample from "./sample-response.json";
import Spinner from './Spinner'
 
export default function News(props) {
  const [articles, setArticles] = useState(sample.articles);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [category , setCategory ] = useState('general');
  const [loading , setLoading] = useState(false);

  
  const UpdateNews = async () => {
    setLoading(true)    
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&langauge=en&page=${page}&pageSize=${pageSize}&from=2022-06-23&sortBy=popularity&apiKey=${props.apiKey}`;
    let response = await fetch(url);
    props.setProgress(50)
    let ParseData = await response.json();
    setLoading(false)
    setArticles(ParseData.articles);
    props.setProgress(100)
  };
  const FetchMoreNews = () =>{
    setPage(page+1)
    UpdateNews()
  }
  return (
    <>      
    {loading && <Spinner/>}
    {!loading && <div className="container my-3">
      <h1 className="text-center">Read news about world here</h1>
      <div className="row">
        {articles.map((article) => {
          return (
            <div className="col-md-4">
              <NewsItems article={article} />
            </div>
          );
        })}
      </div>
    </div>}
    {/* <Infinite article={article} /> */}
    </>
  );
}
