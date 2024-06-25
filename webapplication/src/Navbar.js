import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import FullStack from './component/FullStack';
import Career from './component/Career';
import CyberSecurity from './component/CyberSecurity';
import DataScience from './component/DataScience';
import AllCourses from './component/AllCourses';

function Navbar() {
    const [value, setValue] = React.useState(0);

    return (
     <>
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
           
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item "><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">AllCourses</a></li>
                        <li className="nav-item "><a className="nav-link py-3 px-0 px-lg-3 rounded" href="./Career">Career</a></li>
                        <li className="nav-item 1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="./CyberSecurity">Cyber Security</a></li>
                        <li className="nav-item "><a className="nav-link py-3 px-0 px-lg-3 rounded" href="./DataScience">Data science</a></li>
                        <li className="nav-item "><a className="nav-link py-3 px-0 px-lg-3 rounded" href="./FullStack">Full Stacky</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
  
}

export default Navbar