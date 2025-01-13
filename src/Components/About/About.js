import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import ScrollToTopButton from "../../ScrollToTopButton"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            {/* <h1>
              Our <span>Features</span>
            </h1> */}
            <p>Engagés envers l'excellence, nous participons activement aux marchés publics et aux appels d'offres, garantissant ainsi la qualité de nos produits et services. Forts de notre expertise diversifiée, nous sommes prêts à relever tous les défis et à saisir de nouvelles opportunités pour mieux servir nos clients et notre communauté.</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p> */}
            {/* <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button> */}
          </div>
          <div className='row image'>
            <img src='/images/t18.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  )
}

export default About
