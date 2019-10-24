import React from 'react'
import './SplashPage.css'

const SplashPage = () => {
  return (
    <section className="SplashPage">
      <img alt="lotus-flower" id="load-img-lotus" src={require('../assets/lotus-flower.svg')}/>
      <h1 id="loading-text">SafeSpace</h1>
    </section>
  )
}

export default SplashPage
