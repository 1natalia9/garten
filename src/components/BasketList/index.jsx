import React from 'react'
import BasketItem from '../BasketItem'
import { useSelector } from 'react-redux'

export default function BasketList() {
    const {basket, products} = useSelector(state => state);
    const data = basket.map((item) => ({...item, ...products.find(({id}) => id === item.id)}));
  return (
    <div>
         {
          data.map(item => <BasketItem key={item.id} {...item} />)
        }
    </div>
  )
}
