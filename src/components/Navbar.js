import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className='home-div'>
        <NavLink exact to='/' className='home-link' activeClassName='active-link'>
          The Random Site
        </NavLink>
      </div>
      <div className='apis'>
        <NavLink to='/advice' className={`api-link ${location.pathname === '/advice' ? 'active-link' : ''}`}>
          Advice
        </NavLink>
        <NavLink to='/trivia' className={`api-link ${location.pathname === '/trivia' ? 'active-link' : ''}`}>
          Trivia
        </NavLink>
        <NavLink to='/jokes' className={`api-link ${location.pathname === '/jokes' ? 'active-link' : ''}`}>
          Jokes
        </NavLink>
        <NavLink to='/poetry' className={`api-link ${location.pathname === '/poetry' ? 'active-link' : ''}`}>
          Poetry
        </NavLink>
        <NavLink to='/pun' className={`api-link ${location.pathname === '/pun' ? 'active-link' : ''}`}>
          Pun
        </NavLink>
        <NavLink to='/riddles' className={`api-link ${location.pathname === '/riddles' ? 'active-link' : ''}`}>
          Riddles
        </NavLink>
      </div>
    </nav>
  );
};
