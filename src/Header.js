import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <section>
        <header className="header">
          <div className="logo">Gallery</div>
          <div className="title">
            <div>By Mohamed Jubair</div>
          </div>
        </header>
      </section>
      <section>
        <div class="hero">
          <img
            src="https://images.unsplash.com/photo-1606661247834-eb1f16814366?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="hero"
          ></img>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;
