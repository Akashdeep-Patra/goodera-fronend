import React from 'react';
import { Link } from 'react-router-dom';
import { Routetype } from '../../App';
import './NavBar.style.scss';
export interface NavProps {
  currentRoute: string;
  routes: Routetype[];
  handleLinkClick: (route: string) => void;
}
const Navbar: React.FC<NavProps> = ({
  routes,
  currentRoute,
  handleLinkClick,
}) => {
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
          <Link onClick={() => handleLinkClick(route.name)} to={route.name}>
            {route.title}
          </Link>
        </div>
      ))}
      <h1 className='heading'>Find Your Dream Job</h1>
      <p className='subhaeding'>
        Browse through thousands of full-time & part-time jobs around you.{' '}
      </p>
    </header>
  );
};

export default Navbar;
