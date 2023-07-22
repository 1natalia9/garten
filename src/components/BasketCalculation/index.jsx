import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux';

export default function BasketCalculation() {

  const {basket, products} = useSelector(state => state);
  const productsInBasket = basket.map((item) => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product};
   })
   const totalSum = productsInBasket.reduce((acc, {count, price})=> acc + count * price, 0);

   

  return (

      <div className={s.container}>
        
         <p className={s.order}>Order details</p>
         
         <div className={s.calculation}>
         <p>Total {totalSum}</p>
         </div>
        <form className={s.form}>
         <input className={s.input}type="text" />
         <button className={s.buton}>Order</button>
        </form>
      </div>
      

  )
}
