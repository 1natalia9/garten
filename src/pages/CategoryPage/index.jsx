import React from 'react'
import { useSelector } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import s from "./style.module.css"

export default function CategoriesPage() {
const categories = useSelector(state => state.categories);

  return (
    <div className={s.container}>
      <h1>Categories</h1>
    <div className={s.item}>
      {
        categories.map((categories) => <CategoryCard key={categories.id} {...categories}/>)
      }
    </div>
    </div>
  )
}

