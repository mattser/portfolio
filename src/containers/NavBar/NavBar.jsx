import React from 'react'
import Icon from '../../components/Icon/Icon'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__page-sections'>
        <a href=""><h3>tech_stack</h3></a>
        <a href=""><h3>projects</h3></a>
        <a href=""><h3>contact</h3></a>
      </div>
      <div className='navbar__external-links'>
        <a href="https://www.linkedin.com/in/mateusz-seredyn/" target="_blank">
          <h3><Icon icon={["fab","linkedin"]} size={"2x"} /></h3>
        </a>
        <a href="https://github.com/mattser/" target="_blank">
          <h3><Icon icon={["fab","github-square"]} size={"2x"}/></h3>
        </a>
      </div>
    </nav>
  )
}

export default NavBar