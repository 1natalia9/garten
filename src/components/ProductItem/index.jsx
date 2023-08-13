import React from 'react'
import s from "./style.module.css"
import { useDispatch } from 'react-redux';
import { basketAddAction } from '../../store/reducer/basketReducer';
import { Link } from 'react-router-dom';

export default function ProductItem({id, title, image, price, discont_price, }) {

  const dispatch = useDispatch();

  return (
 <div>


  
     <div className={s.item}>
        <Link to={`/product/${id}`}>
    <div className={s.container}>
        <img src={'http://localhost:3333/' + image} alt={title} />
        <div className={s.price_descr}>
          <div className={s.price_item}>
            {
              discont_price
                ? <div className={s.price_discount}>
                  <p className={s.new_price}>{(price - price / 100 * discont_price).toFixed(2)}€</p>
                  <p className={s.last_price}>{price}€</p>
                </div>
                : <p className={s.price}>{price}€</p>
            }
            <p className={s.discount}>{discont_price}</p>
           
          </div>
        </div>
        <p className={s.title}>{title}</p>
       
      </div>
 </Link>
    </div>
    <button onClick={() => dispatch(basketAddAction(+id))} className={s.btn}>Add product</button>
 </div>
 
  )
}
