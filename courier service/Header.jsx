import React from 'react';

function Header() {
  return (
    <header>
      <div id="container">
        <h1 className="mb-0">COURIER SERVICE</h1>
        <nav>
          <ul className="horizontal-list">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="login-career-links">
            <a href="login.html" className="btn-primary">Admin Login</a>
            <a href="career.html" className="btn-primary">Careers</a>
            <a href="blog.html" className="btn-primary">Blog/News</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
