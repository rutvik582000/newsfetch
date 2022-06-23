import React from 'react'
import loading from './Loading_icon.gif'

export default function Spinner() {
  return (
    <div>
      <img className='image-centerrounded mx-auto d-block' src={loading} alt="loading..." />
    </div>
  )
}
