import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css'
import { filterProductsByPriceAction, getDiscountProductsAction, sortProductsAction } from '../../store/reducer/productsReducer';


export default function ProductsByCategoryPage() {



  const { category } = useParams();


  // useEffect(() => dispatch(getProductsByCategory(category)), []);

  const products_state = useSelector(state => state.productsByCategory);
  // const products_state = useSelector(({products}) => products.filter(item => item.category === category))

console.log(products_state);

  return (
    
   <div className={s.container}>
    <h1>Tools and equipment</h1>
    <h2>{category}</h2>
    
 

     <div className={s.item}>
    
       {
         
        //  <ProductItem products_state={products_state}/>
           products_state
           .map((item) => (<ProductItem key={item.id} {...item}/>))
          // <ProductsContainer products_state={products_state}/>
       
       }
       
     </div>
   </div>
  )
}
{/* <ProductsPage products_state={products_state}/> */}