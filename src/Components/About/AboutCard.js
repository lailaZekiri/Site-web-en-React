import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
           <span>Charradi Solutions</span>
          </h1>
          <p>" propose une large gamme de services allant du recyclage et de l'aménagement divers à l'import-export de produits, en passant par la vente d'extincteurs d'incendie et les travaux de construction et de maintenance. Nous offrons également des solutions de transport, de plomberie, d'électricité et de construction métallique, ainsi que des services de jardinage, de nettoyage et de réparation de matériel informatique. Nous nous engageons à fournir des produits et services de qualité tout en participant activement aux marchés publics et appels d'offres. Notre expertise diversifiée nous permet de répondre aux besoins spécifiques de nos clients et d'explorer de nouvelles opportunités dans des domaines connexes."</p>
           {/* <button className='secondary-btn' style={{ backgroundColor:'#1ea5d6' }}>
           <Link to='/about'>
           Explore plus 
              </Link>
          </button>  */}
        </div>
        <div className='row image'>
          <img src='Images/t5.jpg' alt='' />
          <div className='control-btn'>
            {/* <button className='prev'>
              <i className='fas fa-play'></i>
            </button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
