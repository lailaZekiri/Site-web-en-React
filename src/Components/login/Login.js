import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"
import ScrollToTopButton from "../../ScrollToTopButton"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [recValue, setRecValue] = useState([])
  const submitForm = (e) => {
    e.preventDefault()
    const newValue = { email: email, password: password }

    setRecValue([...recValue, newValue])
    console.log(newValue)

    setEmail("")
    setPassword("")
  }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Entrez votre e-mail et votre mot de passe ci-dessous pour vous connecter à votre compte et profiter des avantages de notre site Web.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span style={{ color:'' }}>j'ai oublié mon mot de passe</span>
                </div>
              </div>

              <button type='submit' className='primary-btn' style={{ backgroundColor:'#fe8432' }}>
              Se connecter
              </button>
              <p>
              Vous n'avez pas de compte ? <Link to='/register'>S'inscrire!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Connectez-vous avec succès</h1>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Password : <p>{cureentValue.password}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
      <ScrollToTopButton />
    </>
  )
}

export default Login
