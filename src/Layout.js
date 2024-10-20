import { Outlet, Link } from 'react-router-dom';
import React from 'react';

function Layout() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-rr">
          Rajasthan Royals
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Squard">Squard</Link>
            </li>
            <li>
              <Link to="/Shopping">Shopping</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
