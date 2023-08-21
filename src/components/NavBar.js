import React, { Component } from 'react'
 import  {Link} from "react-router-dom";


export default class NavBar extends Component {
  render() {
    return (
       
      <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        {/* fixed-top bootstrap ki property h jiss se navbar fixed rehta h */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/general">NewsNow</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{color:'green'}} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
         <li className="nav-item mx-2"><Link className="nav-Link" to="/general"> General</Link> </li>
         <li className="nav-item mx-2"><Link className="nav-Link" to="/business"> Business</Link> </li>
         <li className="nav-item mx-2"><Link className="nav-Link" to="/entertainment"> Entertainment</Link> </li>
         <li className="nav-item mx-2"><Link className="nav-Link" to="/health"> Health</Link> </li>
         <li className="nav-item mx-2"><Link className="nav-Link" to="/science"> Science</Link> </li>
         <li className="nav-item mx-2"><Link className="nav-Link" to="/sports"> Sports</Link> </li>
         <li className="nav-item mx-2"><Link className="nav-Link" to="/technology"> Technology</Link> </li>

      </ul>
      
    </div>
  </div>
</nav>
      </div>
   
    )
  }
}