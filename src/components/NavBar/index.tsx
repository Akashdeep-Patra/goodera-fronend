import React from 'react';
import { Routetype } from '../../App';
import './NavBar.style.scss';
export interface NavProps {
  currentRoute: string;
  routes: Routetype[];
}
const Navbar: React.FC<NavProps> = ({ routes, currentRoute }) => {
  return (
    <header className='nav'>
      {routes.map((route) => (
        <div
          key={route.name}
          className={`nav-route ${
            route.name === currentRoute ? 'current' : ''
          }`}
        >
          {route.logo && route.logo}
          <span>{route.title}</span>
        </div>
      ))}
    </header>
  );
};

export default Navbar;
