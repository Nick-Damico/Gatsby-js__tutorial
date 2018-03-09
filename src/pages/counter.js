import React from 'react';
import Counter from '../components/counter';
import Link from 'gatsby-link';

export default () => (
  <div className="header">
    <h1 className="header__title">Welcome to Counter</h1>
    <Counter />
    <div className="header__link-container">
      <Link to="/" className="header__link">Back Home</Link>
    </div>
  </div>
)
