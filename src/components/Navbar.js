import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import '../stylesheets/Navbar.css'
import logo from '../image/OPENLOGO.svg'
import logof from '../image/OPENLOGOF.svg'
import arrow from '../image/ARROW.svg'

function Navbar({setIsActive, isActive}){

    //const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };

    const closeNav = event => {
        setIsActive(false);
    };

    window.onscroll = function() {myFunction()};

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressbar").value = scrolled;
      }

  return (
    <div className={isActive ? 'navContainer opened' : 'navContainer'}>
        <div className='nav'>
            <NavLink className='anchorlogoNav' to='/' onClick={closeNav}> <img src={logof} draggable="false" className='logoNav'/> </ NavLink>
            <div className={isActive ? "icon nav-icon-5 open" : "icon nav-icon-5"} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={isActive ? 'navUl activated' : 'navUl'}>
                <li className='navLi' id='navLi'>
                    <NavLink to='/trabajos' className='navAnchor' activeclassname='navAnchor active' onClick={closeNav}>TRABAJOS</NavLink>
                </li>
                <a className='navSeparator'></a>

                <li className='navLi'>
                    <NavLink to='/faq' className='navAnchor' activeclassname='navAnchor active' onClick={closeNav}>FAQ</NavLink>
                </li>

                <a className='navSeparator'></a>

                <li className='navLi'>
                    <NavLink to='/todo' className='navAnchor' activeclassname='navAnchor active' onClick={closeNav}>TODO</NavLink>
                </li>
            </ul>
            <progress className="progressBar" id="progressbar" max="100" value="0"></progress>
        </div>
    </div>
  );
}

export default Navbar;