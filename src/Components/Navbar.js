import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }), () => {
      document.body.classList.toggle('dark-mode', this.state.darkMode);
    });
  };

  render() {
    const navbarClass = this.state.darkMode ? 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top' : 'navbar navbar-expand-lg navbar-dark bg-primary fixed-top';
    const linkClass = this.state.darkMode ? 'nav-link text-white' : 'nav-link';

    return (
      <div>
        <nav className={navbarClass}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">InfoToday</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={linkClass} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClass} to="/Business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClass} to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClass} to="/Science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClass} to="/Technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClass} to="/Entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClass} to="/Health">Health</Link>
                </li>
              </ul>
              <button className="btn btn-light" onClick={this.toggleDarkMode}>
                {this.state.darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
