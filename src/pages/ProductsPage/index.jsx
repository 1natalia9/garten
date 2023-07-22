import React from 'react'
import ProductsContainer from '../../components/ProductsContainer';
import s from './style.module.css'
import {  useSelector } from 'react-redux';


export default function ProductsPage() {
 

  // const products_state = useSelector(state => state.products); 

  const products_state = useSelector((store) => store.products);

  
  
  return (
    <div className={s.container}>
      <p className={s.item}>All products</p>
      <ProductsContainer products_state={products_state}/>
    </div>
  )
}
