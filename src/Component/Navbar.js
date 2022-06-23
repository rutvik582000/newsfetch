import React, { useState } from "react";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand mx-3" href="/">
        Newsfetch
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a className="nav-link" href="/">business<span className="sr-only"></span></a></li>
          <li className="nav-item"><a className="nav-link" href="/">entertainment<span className="sr-only"></span></a></li>
          <li className="nav-item"><a className="nav-link" href="/">general<span className="sr-only"></span></a></li>
          <li className="nav-item"><a className="nav-link" href="/">health<span className="sr-only"></span></a></li>
          <li className="nav-item"><a className="nav-link" href="/">science<span className="sr-only"></span></a></li>
          <li className="nav-item"><a className="nav-link" href="/">sports<span className="sr-only"></span></a></li>
          <li className="nav-item"><a className="nav-link" href="/">technology<span className="sr-only"></span></a></li>
        </ul>
      </div>
    </nav>
  );
}
