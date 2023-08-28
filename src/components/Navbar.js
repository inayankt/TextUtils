import PropTypes from 'prop-types'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [page, setPage] = useState('home');

  if(page === 'home'){
    document.title = 'TextUtils | Home';
  } else {
    document.title = 'TextUtils | About';
  }

  return (
    <>
    <nav className={`navbar fixed-top navbar-expand-lg bg-body-tertiary border-bottom bg-${props.mode}`} data-bs-theme={props.mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{fontFamily: 'Poppins', letterSpacing: '2px'}} onClick={() => {setPage('home')}}>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${(page === 'home') ? 'active' : ''}`} aria-current="page" to="/" onClick={() => {setPage('home')}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${(page === 'about') ? 'active' : ''}`} to="/about" onClick={() => {setPage('about')}}>About</Link>
            </li>
          </ul>
          <div className="d-flex gap-3 align-items-center navbar-right">
            <div className="form-check form-switch">
              <input className="form-check-input mr-2" type="checkbox" role="switch" id="toggleMode" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="toggleMode">Dark Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2 ml-0" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-${(props.mode === 'light') ? 'primary' : 'warning'}`} type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

Navbar.propTypes = {
    mode: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    mode: 'light',
    title: 'Navbar',
};