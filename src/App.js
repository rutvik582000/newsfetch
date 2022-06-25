import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import LoadingBar from "@weblif/react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(10);

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = "/" element ={<News key = 'general'  setProgress={setProgress} category="general" apiKey={apiKey}/>}/>
          <Route exact path = "/business" element ={<News key = 'business'  setProgress={setProgress} category="business" apiKey={apiKey}/>}/>
          <Route exact path = "/entertainment" element ={<News key = 'entertainment'  setProgress={setProgress} category="entertainment" apiKey={apiKey}/>}/>
          <Route exact path = "/health" element ={<News key = 'health'  setProgress={setProgress} category="health" apiKey={apiKey}/>}/>
          <Route exact path = "/science" element ={<News key = 'science'  setProgress={setProgress} category="science" apiKey={apiKey}/>}/>
          <Route exact path = "/sports" element ={<News key = 'sports'  setProgress={setProgress} category="sports" apiKey={apiKey}/>}/>
          <Route exact path = "/technology" element ={<News key = 'technology'  setProgress={setProgress} category="technology" apiKey={apiKey}/>}/>
        </Routes>
      </Router>
    </>
  );
}
