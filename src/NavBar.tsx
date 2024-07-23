// Navbar.js

import React, { useEffect, useState } from 'react';
import './NavBar.scss'
import HamburgerButton from './HamburgerButton';
import { Link, Route, Routes } from 'react-router-dom';
import NavbarConfig from './core/model/NavbarConfig.model';
import RouteConfig from './core/model/RouteConfig.model';



const Navbar = (props: NavbarConfig) => {

    const { background, navLinks, logo, linkColor, zIndex } = props
      
    const [navOpen, setNavOpen] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 100) { // Cambia 100 con l'altezza dalla cima dello schermo dove vuoi applicare l'effetto
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        
            <>
        <nav className={/*scrolled ? "scrolled" : */"responsive-toolbar"}>
            <ul style={{ background: 'none', position:'static'}} className={navOpen ? 'active' : ''}>
            <figure onClick={() => { setNavOpen(!navOpen) }}>
                <HamburgerButton></HamburgerButton>
                </figure>
                {navLinks?.map((link:RouteConfig, index) =>
                    <li key={index} onMouseEnter={() => { setHoverIndex(index) }} onMouseLeave={() => { setHoverIndex(-1) }}>
                        <Link to={link.path} style={{ color: linkColor }}>
                        {link.text}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
        </>
        

    )
};

export default Navbar;
