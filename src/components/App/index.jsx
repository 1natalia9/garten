import React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import NotFoundPage from '../../pages/NotFoundPage'
import { loadCategoryAction } from '../../store/asyncActions/category'
import "./index.css";
import { useDispatch } from 'react-redux'
import { getProductsByCategory, loadProductsAction } from '../../store/asyncActions/products'
import ProductsPage from '../../pages/ProductsPage'
import CategoryPage from '../../pages/CategoryPage'
import Footer from '../Footer';
import HomePage from '../HomePage'
import Layout from '../Layout'
import BasketPage from '../../pages/BasketPage'

import ProductDescriptionPage from '../../pages/ProductDescriptionPage'
import SalesPage from '../../pages/SalesPage'

import ProductsByCategoryPage from '../../pages/ProductsByCategoryPage'



export default function App() {
   const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadCategoryAction)
    dispatch(loadProductsAction)
    dispatch(getProductsByCategory)
  }, [])
  return (
 <div>
   <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
         <Route path='/products' element={<ProductsPage />}/>
         <Route path='/sales' element={<SalesPage />}/>
         <Route path="/category" element={<CategoryPage />}/>
         <Route path="/categories/:category" element={<ProductsByCategoryPage />}/>
         <Route path='/product/:id' element={<ProductDescriptionPage />}/>
         <Route path="/basket" element={<BasketPage />}/>
         <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
 </div>
  )
}

