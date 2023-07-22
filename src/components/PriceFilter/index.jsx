import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterProductsByPriceAction, getDiscountProductsAction, sortProductsAction } from '../../store/reducer/productsReducer';
import s from "./style.module.css"

export default function PriceFilter(){

  const [ checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleChange = () =>  setChecked(!checked);




  const filter_price = e => {
    const { min, max, discont} = e.target.parentElement.parentElement;
    
    const discount = discont.checked;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(filterProductsByPriceAction({min_value, max_value, discount}))
  }

  return (
    <div className={s.form_container}>
      <label className={s.form_container}>
           <span>Price</span>
            <form className={s.price_filter_container}>
            <div>
              <input
                name = "min"
                type="number"
                placeholder="from"
                onChange={filter_price}
                
              />
              <input
                name = "max"
                type="number"
                placeholder="to"
                onChange={filter_price}
              />
              
                <p>Discounted items</p>
                <input type='checkbox' name="discont" checked={checked} onClick={handleChange} onChange={filter_price}/> 
              </div>
              <button className={s.btn}>Filter</button>
          </form>
        
      </label>
    </div>
  );

  }