import React from "react"
import Link from 'gatsby-link';

export default () => {
  return (
    <div className="header" style={
      {
        'background': 'cornflowerblue',
        'textAlign': 'center'
      }
    }>
      <h1 className="header__title">Hello world!</h1>
      <p className="header__text">What a world!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" className="header__img" />
      <br />
      <div className="header__link-container">
        <Link to="/page-2/" className="header__link">Page 2</Link>
        <br />
        <Link to="/page-3/" className="header__link">Page 3</Link>
      </div>
      <div className="header__link-container">
        <Link to="/counter/">Counter</Link>
      </div>
    </div>
  )
}
