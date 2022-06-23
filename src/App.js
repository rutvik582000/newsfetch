import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import LoadingBar from "@weblif/react-top-loading-bar";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Component/Spinner";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(10);

  return (
    <>
      <div>
        <LoadingBar color="#f11946" progress={progress} />
      </div>
      <Navbar />
      <News setProgress={setProgress} apiKey={apiKey} />
    </>
  );
}
