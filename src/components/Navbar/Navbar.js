import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <a href='/'>
        <h3>Netflix</h3>
      </a>
      <div className='nav-left'>
        <ul>
          <li>
            <select name='languages'>
              <option>English</option>
              <option>Thai</option>
            </select>
          </li>
          <li></li>
        </ul>
        <button>Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar