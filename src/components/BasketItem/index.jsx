import React from 'react'
import s from "./style.module.css";
import { useDispatch } from 'react-redux';
import { basketDecrAction, basketIncrAction } from '../../store/reducer/basketReducer';

export default function BasketItem({id, image, title, discont_price, price, count}) {
  const dispatch = useDispatch();

  return (
    <div className={s.item}>
        <img src={'http://localhost:3333/' + image} alt={title} />
        <div>
        <p>{title}</p>
        <button onClick={()=> dispatch(basketIncrAction(id))}>+</button>
        <button onClick={()=> dispatch(basketDecrAction(id))}>-</button>
        </div>
        <p> {(price * count).toFixed(2)}</p>
        <div>
        {
                discont_price
                ? <div className={s.discont_price}>
                <p className={s.new_price}>{price - price /100 * discont_price}€</p>
                <p className={s.last_price}>{price}€</p>
                </div>
                :<p className={s.price}>{price}</p>
            }
        </div>
        
    </div>
  )
}
