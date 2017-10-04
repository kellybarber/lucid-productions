import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav id='Navbar'>
          <div className='NavItem'>Projects</div>
          <div className='NavItem'>Logo</div>
          <div className='NavItem'>Team</div>
        </nav>
      </header>
    )
  }
}
export default Header
