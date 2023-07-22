import React, { useState } from 'react'
import s from './style.module.css'
import descr from './media/descr.png'
import gn from './media/gn.png'
import { Link } from 'react-router-dom'
import CategoryCard from '../CategoryCard'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../store/asyncActions/products'

export default function HomePage() {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);
  
  const [new_product, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(new_product));
  }

  return (
    <div>
      <div className={s.descr}>
        <img src={descr} alt='logo' />
        <div className={s.descr_all}>
          <p className={s.descr_name_big}>Sale</p>
          <p className={s.descr_name_small}>in honor of the new season</p>
        </div>
        <div className={s.btn}>
          <button className={s.all}>All promotions</button>
          <button className={s.more}>More</button>
        </div>
        <div>
        </div>
      </div>
      <div className={s.catalog}>
        <div className={s.catalog_descr}>
          <p className={s.catalog_p}>Catalog</p>
         <Link to='/category' className={s.catalog_btn} button>All categories</Link>
        </div>
        <div className={s.catalog_category}>
              {
              categories.map((categories) => <CategoryCard key={categories.id} {...categories}/>)
              }
        </div>
      </div>

<div className={s.post}>
   <div className={s.form_post}>
   <div className={s.form}>
      <img src={gn} alt='gn' />
      <form onSubmit={handleSubmit} className={s.form_btn}>
      <p className={s.order}><span>5% off</span><br/>on the first order</p>
        <input className={s.input} type="number" placeholder='+49'onChange={handleChange}/>
        <button className={s.button}>Get a discount</button>
      </form>
    </div>
   </div>
</div>


 </div>

   
  )
}
