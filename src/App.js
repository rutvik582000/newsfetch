import React from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News';

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API
  console.log(apiKey);
  return (
    <>
    <Navbar/>    
    <News/>
    </>
  )
}
