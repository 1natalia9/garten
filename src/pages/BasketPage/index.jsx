import React from 'react'
import s from "./style.module.css"
import BasketCalculation from '../../components/BasketCalculation';
import { Link } from 'react-router-dom';
import BasketList from '../../components/BasketList';

export default function BasketPage() {
 
  return (
    <div className={s.container}>
      <p>Shopping cart</p>
    
      <Link to='/' className={s.str}>Back to the store <i class="las la-angle-right"></i></Link>
     
      <div className={s.content}>
        <BasketList />
        <BasketCalculation />
      </div>
    </div>
   
    
  )
}