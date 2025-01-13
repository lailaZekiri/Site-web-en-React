import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid' >
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>
Nous offrons une gamme étendue de services, de la gestion des déchets à la construction, en passant par la vente d'extincteurs et la maintenance informatique. Engagés dans la qualité, nous participons aux marchés publics, adaptant nos solutions aux besoins de nos clients. Notre polyvalence nous permet d'explorer de nouvelles opportunités dans divers domaines.</p>
            <br />
            {/* <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p> */}
            {/* <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div> */}
            <div className='icon flex_space'>
            <a href='mailto:mohamedredabentaibi@gmail.com'><i className='fas fa-envelope'></i></a>
  <a href='tel:+212624152913'><i className='fas fa-phone'></i></a>
  <a href="https://www.linkedin.com/in/mohamed-reda-ben-taibi-592128201/?originalSubdomain=ma" target='_blank'><i className='fab fa-linkedin'></i></a>
  {/* <a href='lien_vers_pinterest' target='_blank'><i className='fab fa-pinterest'></i></a> */}
  
</div>

          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              {/* <li>
                <Link to='/gallery'>Gallery</Link>
              </li> */}
              <li>
                <Link to='/Travaux'>Travaux divers</Link>
              </li>
              {/* <li>
                <Link to='/blog'>Blog</Link>
              </li> */}
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            {/* <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
            </ul> */}
          </div>

          <div className='box' style={{ backgroundColor:'' , }}>
            {/* <h2>NEWSLETTER</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' /> */}
            <div >
      <h4 className="text-uppercase mb-4 text-white font-weight-bold col-6 justify-content-center" style={{ fontSize:'24px' }}>Localisation - Charradi solution</h4>
      <br/>
      <div id="map-container-google-1" className="z-depth-1-half map-container col-lg-3">
        <iframe src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
          style={{ border: '0' }} allowFullScreen></iframe>
      </div>
    </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2024 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
