import s from '../css/Header.module.css'

const Header = () => {
  return (
    <>
      <div className={s.header}>
        <a href='/home' className={s.link}>
          Home
        </a>
        <span> | </span>
        <a href='/login' className={s.link}>
          Login
        </a>
      </div>
    </>
  )
}

export default Header
