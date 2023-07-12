import React from 'react'
import './NainSection.css'
function MainSection() {
  return (
    <section className='main-section'>
      <h1>Unlimited movies, TV shows, and more</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <span>
        <input type='text' placeholder='Email address' />
        <button>Get Start &gt;</button>
      </span>
    </section>
  )
}

export default MainSection