import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import sample from "./sample-response.json";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {
  const [articles, setArticles] = useState(sample.articles);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0)

  
  const UpdateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let response = await fetch(url);
    props.setProgress(50);
    let parsedData = await response.json();
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
    console.log(parsedData);
  };
  
  useEffect(()=>{
    UpdateNews()
  },[])
  
  const FetchMoreNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div className="container my-3">
          <h1 className="text-center">Read news about world here</h1>
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={FetchMoreNews}
            hasMore={articles.length <= totalResults}
            loader={<Spinner/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="container row">
              {articles.map((article,index) => {
                return (
                  <div className="col-md-4" key = {index}><NewsItems article={article} /></div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}