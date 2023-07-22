import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux';
import SalesContainer from '../../components/SalesContainer';
export default function SalesPage() {

  // const products_state = useSelector((store) => store.products);
  
  const products = useSelector(state => state.products); 
  return (
    <div className={s.container}>
       <h1>Products with sale</h1>
     <div className={s.item}>
      
          <SalesContainer />
      
      </div>
     </div>
  )
}

