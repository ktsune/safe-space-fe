import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <section className="Header">
      <a href ="/">
        <img alt="lotus-flower" id="lotus-header" src={require('../assets/lotus-flower.svg')}/>
        <h1 id="text-header">SafeSpace</h1>
      </a>
    </section>
  )
}

export default Header;
