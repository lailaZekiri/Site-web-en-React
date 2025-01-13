import React from "react"
import Card from "./Card"
import Tdata from "./Tdata"
import "./Testimonial.css"
import ScrollToTopButton from "../../ScrollToTopButton"

const AllItem = () => {
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container grid1'>
          {Tdata.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </section>
      <ScrollToTopButton />
    </>
  )
}

export default AllItem
