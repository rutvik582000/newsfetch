import React from "react";
import {Link} from 'react-router-dom';


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
          <li className="nav-item"><Link className="nav-link" to="/">general<span className="sr-only"></span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/business">business<span className="sr-only"></span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment<span className="sr-only"></span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/health">health<span className="sr-only"></span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/science">science<span className="sr-only"></span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sports">sports<span className="sr-only"></span></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/technology">technology<span className="sr-only"></span></Link></li>
        </ul>
      </div>
    </nav>
  );
}
