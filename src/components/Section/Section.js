import React from 'react'
import './Section.css'
function Section({h1, p, img}) {
  return (
    <section className='content'>
      <h1>{h1}</h1>
      <p>{p}</p>
      <img src={img}></img>
    </section>
  )
}

export default Section