

import React from 'react'
import s from './style.module.css'
import logo from './media/logo.png'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={s.nav}>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <div className={s.menu}>
        <Link to='/'>HomePage</Link>
        <Link to='/products'>All Products</Link>
        <Link to='/sales'>All sales</Link>
      </div>
      <Link className={s.icons} to='/basket'>
      <i class="las la-shopping-bag"></i>
      </Link>
    </nav>
  )
}