/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    import React, { Component } from "react";
    import { NavLink } from "react-router-dom";


/* -------------------------------------------------------------------------- */
/*                            Define App Component                            */
/* -------------------------------------------------------------------------- */
  
    function Navbar(props) {
        
        return (
            <nav className="navbar navbar-dark py-0 my-0">
                <div className="container-fluid text-center justify-content-center">
                    <ul className="navbar-nav list-group list-group-horizontal">
                        <li className="nav-item px-3 text-center">
                            <NavLink to="/ournames" exact={true} className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                                <div>
                                    OurNames
                                </div> 
                            </NavLink>           
                        </li>
                        <li className="nav-item px-3 text-center flex-fill">
                            <NavLink to="/mynames" exact={true} className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                <div>
                                    MyNames
                                </div>    
                            </NavLink>       
                        </li>
                        <li className="nav-item px-3 text-center" href="/build">
                            <NavLink to="/build" exact={true} className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                                </svg>
                                <div>
                                    Build
                                </div>   
                            </NavLink>         
                        </li>
                        <li className="nav-item px-3 text-center" href="/browse">
                            <NavLink to="/browse" exact={true} className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                <div>
                                    Browse
                                </div> 
                            </NavLink>           
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
  export default Navbar;