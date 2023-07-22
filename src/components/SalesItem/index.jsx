import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { basketAddAction } from '../../store/reducer/basketReducer';
import { Link } from 'react-router-dom';

export default function SalesItem({ id, title, image, price, discont_price }) {

    const dispatch = useDispatch();
    
    

    return (
    
      
      <div className={s.container}>
            <Link to={`/product/${id}`}>
          <div className={s.item}>
                {
                discont_price !== null
                    ? <>
                        <img src={'http://localhost:3333/' + image} alt={title} />
                        <p className={s.title}>{title}</p>
                        <p>{(price - price / 100 * discont_price).toFixed(2)}€</p>
                        <p className={s.old_price}>{price}</p>
                        <p>-{discont_price}</p>
                        <button onClick={() => dispatch(basketAddAction(id))} className={s.btn}>Add product</button>
                    </>
                    : ''
                  }
                </div>
                </Link>
          </div>
    
     
    )
}
