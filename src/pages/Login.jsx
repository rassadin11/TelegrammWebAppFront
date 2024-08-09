import {useRef, useState} from 'react'
import s from '../css/Login.module.css'
import {useInView} from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'

const Login = () => {
  const usernameInput = useRef(null)
  const usernameInView = useInView(usernameInput)

  const passwordInput = useRef(null)
  const passwordInView = useInView(passwordInput)

  const buttonRef = useRef(null)
  const buttonInView = useInView(passwordInput)

  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const inputOnChange = e => {
    const target = e.target
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (form.username && form.password) {
      alert('data has been submitted')
    }
  }

  return (
    <>
      <h1 className={s.title}>Login now!</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <div
          className={`${s.showInput} ${
            usernameInView ? s.active : ''
          }`}
        >
          <input
            placeholder='Enter your username'
            name='username'
            value={form.username}
            onChange={inputOnChange}
            className={s.input}
            required
            ref={usernameInput}
          />
        </div>
        <div
          className={`${s.showInput} ${
            passwordInView ? s.active : ''
          } ${s.delay}`}
        >
          <input
            placeholder='Enter your password'
            name='password'
            value={form.password}
            onChange={inputOnChange}
            className={s.input}
            required
            ref={passwordInput}
          />
        </div>
        <div
          ref={buttonRef}
          className={`${s.showInput} ${
            buttonInView ? s.active : ''
          } ${s.delayBtn}`}
        >
          <button type='submit' className={s.button}>
            Send
          </button>
        </div>
      </form>
    </>
  )
}

export default SectionWrapper(Login)
