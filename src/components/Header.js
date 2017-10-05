import React from 'react'
import Logo  from '../img/lucid-proto-logo.png'
import '../stylesheets/Header.css'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav id='Navbar'>
          <div className='NavItem'>
            <a href='/projects'>
              Projects
            </a>
          </div>
          <div className='NavItem'>
            <a href='/'>
              <img src={Logo} />
            </a>
          </div>
          <div className='NavItem'>
            <a href='/team'>
              Team
            </a>
          </div>
        </nav>
      </header>
    )
  }
}
export default Header
