import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './style.module.css'
import { basketAddAction } from '../../store/reducer/basketReducer';

export default function ProductDescriptionPage() {
    const dispatch = useDispatch();
   
    const {id} = useParams();
   
    const {title, image, description, price} = useSelector(({products}) => products.find(item => item.id === +id));
 
    return (
    
    <div>
        <div className={s.container} >
           <img src={'http://localhost:3333/' + image} alt={title} />
            <div className={s.info}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={s.sale_block}>
                    <p>Price: {price}</p>
                    <button onClick={() => dispatch(basketAddAction(+id))}>Add product</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}


