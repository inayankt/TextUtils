import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar fixed-top navbar-expand-lg bg-body-tertiary border-bottom bg-${props.mode}`} data-bs-theme={props.mode}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{fontFamily: 'Poppins', letterSpacing: '2px'}}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
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