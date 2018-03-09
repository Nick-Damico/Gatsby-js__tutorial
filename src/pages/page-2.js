import React from 'react';
import Link from 'gatsby-link';

export default () => (
    <div className="header">
      <p className="header__text">Hello world, welcome to page 2 of Gatsby Page!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" className="header__img" />
      <Link to="/" className="header__link">Back Home</Link>
    </div>
  );
