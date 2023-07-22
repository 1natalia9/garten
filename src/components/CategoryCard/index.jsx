import React from 'react'
import s from "./style.module.css"
import { Link } from 'react-router-dom'

export default function CategoryCard({id, title, image, category}) {

const category_route = `/categories/${title}`;

  return (
      <Link to={category_route} className={s.container}>
        <div className={s.item}>
        <img src= {'http://localhost:3333/' + image} alt={title} />
        <div className={s.item}>{title}</div>
        </div>
      </Link>

  // `/product/${id}`
  )
}
