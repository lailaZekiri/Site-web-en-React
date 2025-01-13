import React, { useState } from "react"
import "./Contact.css"

const ContactFrom = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()

    const newValue = { fname, lname, phone, email, subject, company, message }
    setAllValue([...allValue, newValue])

    setFname("")
    setLname("")
    setPhone("")
    setEmail("")
    setSubject("")
    setCompany("")
    setMessage("")
  }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contacter depuis</h2>
            <p>Remplissez le formulaire ci-dessous, nous vous répondrons bientôt.</p>

            <form onSubmit={formSubmit}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                  Prénom <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                  Nom de famille <label>*</label>
                  </span>
                  <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                  Numéro de téléphone<label>*</label>
                  </span>
                  <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                  E-mail <label>*</label>
                  </span>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>Sujet</span>
                  <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='input'>
                  <span>Votre entreprise</span>
                  <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                Écrivez votre message<label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className='primary-btn' style={{ backgroundColor:'#1ea5d6' }}>Soumettre maintenant</button>
            </form>
          </div>

          <div className='side-content'>
            {/* <h3>Visitez notre emplacement</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
            <br /> */}

            <h3>Contactez-nous</h3>
            <span>mohamedredabentaibi@gmail.com</span>
            <br />
            <span>06 24 15 29 13</span>
            <br />

            <div className='icon'>
              <h3>Suivez-nous</h3>

              <div className='flex_space'>
  <a href='mailto:mohamedredabentaibi@gmail.com'><i className='fas fa-envelope'></i></a>
  <a href='tel:+212624152913'><i className='fas fa-phone'></i></a>
  <a href="https://www.linkedin.com/in/mohamed-reda-ben-taibi-592128201/?originalSubdomain=ma" target='_blank'><i className='fab fa-linkedin'></i></a>
  {/* <a href='lien_vers_twitter' target='_blank'><i className='fab fa-twitter'></i></a> 
  <a href='lien_vers_instagram' target='_blank'><i className='fab fa-instagram'></i></a>
  <a href='lien_vers_pinterest' target='_blank'><i className='fab fa-pinterest'></i></a>
  <a href='lien_vers_youtube' target='_blank'><i className='fab fa-youtube'></i></a>
  <a href='lien_vers_apple' target='_blank'><i className='fab fa-apple'></i></a> */}
</div>


            </div>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((cureentValue) => {
          const { fname, lname, phone, email, subject, company, message } = cureentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  First Name : <p>{fname}</p>
                </h3>
                <h3>
                  Last Name : <p>{lname}</p>
                </h3>
                <h3>
                  Contact Number : <p>{phone}</p>
                </h3>
                <h3>
                  Email : <p>{email}</p>
                </h3>
                <h3>
                  Subject : <p>{subject}</p>
                </h3>
                <h3>
                  Company Name: <p>{company}</p>
                </h3>
                <h3>
                  Your Message : <p>{message}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default ContactFrom
