import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
function Nav() {
  return (
      <nav>
          <ul className="nav-links">
              <Link to="/">
              <li>Почетна</li>
              </Link>
              <Link to="About">
              <li>За нас</li>
              </Link>
              <Link to="Rent">
              <li>Изнајми</li>
              </Link>
              <Link to="Contact">
              <li>Контакт</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
