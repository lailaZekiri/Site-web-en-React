import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}> Home</Link>
            </li>
            <li><Link to='/about' onClick={closeMobileMenu}>
                About us</Link>
            </li>
            
            <li><Link to='/Travaux' onClick={closeMobileMenu}>
              Travaux Divers</Link>
            </li>
            
            <li><Link to='/testimonial' onClick={closeMobileMenu}>
                Testimonial </Link>
            </li>
            <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>

          <div className='login-area flex'>
            <li>
              <Link to='/sign-in'><i class='far fa-chevron-right'></i>Sign in</Link>
            </li>
            <li>
              <Link to='/register'><i class='far fa-chevron-right'></i>Register</Link>
            </li>
            <li>
             
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
          <img style={{ width: '100px',height:'95px',marginLeft:'0px', backgroundColor:'yellow'}} src="images/t1-1.jpg" alt="" />
           
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space' style={{ width:'200px', }}>
              <div className='icons' style={{ width:'', }}>
                <i class='fal fa-clock' style={{ color: '#fe8432' }}></i>
              </div>
              <div className='text'>
                <h4>Heures d'ouverture</h4>
                <Link to='/contact' >Lundi - samedi : 9h00 à 18h00</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons' >
                <i class='fas fa-phone-volume' style={{ color: '#fe8432' }}></i>
              </div>
              <div className='text'>
                <h4>Appelez-nous</h4>
                <Link to='/contact'>06 24 15 29 13</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='far fa-envelope' style={{ color: '#fe8432' }}></i>
              </div>
              <div className='text'>
                <h4>Envoyez-nous un mail</h4>
                <Link to='/contact'>mohamedredabentaibi@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
