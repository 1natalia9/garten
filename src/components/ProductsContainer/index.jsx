import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem';
import s from "./style.module.css"
import { filterProductsByPriceAction, getDiscountProductsAction, sortProductsAction } from '../../store/reducer/productsReducer';


export default function ProductsContainer() {

  const [ checked, setChecked ] = useState(false);

  const dispatch = useDispatch();

  const handleChange = () => setChecked(!checked);

  const handleClick = e => dispatch(getDiscountProductsAction(e.target.checked))

const products_state = useSelector((state) => state.products)
  
  const sort = event => dispatch(sortProductsAction(event.target.value));
  
  const filter_price = e => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(filterProductsByPriceAction({ min_value, max_value }))
  }
  

  return (
   
    <div className={s.container}>
      <div className={s.filter}>
       
        <label className={s.sortminmax}>
          <span>Price:</span>
          <form className={s.form} onSubmit={filter_price}>
            <input className={s.width} type="number" placeholder='min' name='min' min='0' />
            <input className={s.width} type="number" placeholder='max' name='max' min='0' />
            <button className={s.btn}>Filter</button>
          </form>
        </label>

        <label className={s.checkbox}>
          <p>Discounted items</p>
          <input type="checkbox" checked={checked} onChange={handleChange} onClick={handleClick} />
        </label>

        <label>
          <span>Sort by: </span>
          <select onInput={sort} defaultValue={{ value: 'default' }}>
            <option value='default' hidden>---</option>
            <option value='title'>by title</option>
            <option value='price_asc'>by price Asc</option>
            <option value='price_desc'>by price Desc</option>
          </select>
        </label>
      </div>

      <div className={s.item}>
        {
          products_state
            .filter(el => el.show_item)
            .map((item) => (<ProductItem key={item.id} {...item} />))
        }
      </div>
    </div>
   
  )
}

// products_state
//             .filter(el => el.show_item)
//             .map((item) => <ProductItem key={item.id} {...item}/>)