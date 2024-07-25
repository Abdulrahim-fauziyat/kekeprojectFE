import React from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg  ps-5 bg-body-tertiary justify-between">
  <div className="container-fluid">
  <Link className="navbar-brand" href="#">
            <img
              src={Logo}
              alt="Logo"
              className="img-thumbnail pic border-0 "
              height={900}
              width={200}
            />
    </Link>
   
  
  </div>
</nav>
    
    </>
  )
}

export default Nav