import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Logo, Telegram } from '../assets/img/svg/icons';
const setActive = ({ isActive }) => (isActive ? 'active-link' : '');
const Layout = () => {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <span className="logo__icon">
            <Logo />
          </span>
          <span className="logo__title">Currency</span>
        </Link>

        <nav className="navbar">
          <ul className="list">
            <li>
              <NavLink to={`/`} className={setActive}>
                <h1>Currency</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/convert`} className={setActive}>
                <h1>Convert</h1>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>
          © 2002–2022. Copyright © Currency Co.{' '}
          <span className="telegram">
            <Telegram />
          </span>
          : @enternaloptimist
        </h2>
      </footer>
    </>
  );
};

export { Layout };
