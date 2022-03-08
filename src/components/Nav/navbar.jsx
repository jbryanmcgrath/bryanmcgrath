
import React, { useState } from "react";
import "./nav.css";

function Nav({ setCurrentPage }) {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <a href="#" className="nav__brand" onClick={() => setCurrentPage("home")}>
                J. Bryan McGrath
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <a href="#" className="nav__link" onClick={() => setCurrentPage("home")}>
                        About Me
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link" onClick={() => setCurrentPage("projects")}>
                        Portfolio
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link" onClick={() => setCurrentPage("contact")}>
                        Contact
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link" >
                        Resume
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Nav;