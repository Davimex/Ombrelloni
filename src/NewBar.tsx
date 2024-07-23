import React, { useEffect, useState } from 'react';
import sandbucket from './assets/sand-bucket-svgrepo-com.svg';
import './NewBar.scss'
import NavbarConfig from './core/model/NavbarConfig.model';
import { Link } from 'react-router-dom';
import RouteConfig from './core/model/RouteConfig.model';
import HamburgerButton from './HamburgerButton';

export const NewBar = (props: NavbarConfig) => {

    const [navOpen, setNavOpen] = useState(false);

    const { background, navLinks, logo, linkColor, zIndex } = props
    return (

        <div>
            <div className="navbar">
                <img src={sandbucket} className="" data-aos="fade-right" data-aos-delay="300" alt="Logo" />
                {navLinks?.map((link: RouteConfig, index) =>
                    <li key={index} >
                        <Link to={link.path}>
                            {link.text}
                        </Link>
                    </li>
                )}
            </div>
        </div>
    );

}