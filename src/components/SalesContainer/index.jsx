import React from 'react'
import SalesItem from '../SalesItem';
import { useSelector } from 'react-redux';
import s from './style.module.css'

export default function SalesContainer() {

    const products = useSelector(state => state.products); 

  return (
        <div className={s.container}>

            <div className={s.item}>
                {
                    //  <ProductItem products_state={products_state}/>
                    products.map((product) => <SalesItem key={product.id} {...product} />)

                }
            </div>
        </div>
    )
}
