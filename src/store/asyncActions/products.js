
import { loadProductsBycategory } from "../reducer/productsByCategory";
import { addAction, loadAction } from "../reducer/productsReducer";



export const loadProductsAction = async (dispatch) => {
   const resp = await fetch("http://localhost:3333/products/all");
   const data = await resp.json();
   dispatch(loadAction(data));
}

export const addProduct = body => {
   return dispatch => {
       fetch('http://localhost:3333/sale/send', {
           method: 'POST',
           body: JSON.stringify(body),
           headers: {
               'Content-Type': 'application/json;charset=utf-8'
           }
       })
       .then(res => res.json())
       .then(json => {
       console.log('POST-request send!')
       dispatch(addAction(json))
      })
   }
}



export const getProductsByCategory = async (dispatch) => {
    const resp = await fetch("http://localhost:3333/categories/1");
    const data = await resp.json();
    dispatch(loadProductsBycategory(data.data));
 }

// export const getProductsByCategory = (category) => {
//     return dispatch => {   
//     fetch(`http://localhost:3333/categories/1${category}`)
//     .then(res => res.json())
//     .then(json => dispatch(loadProductsBycategory(json.products)))
//     }
// }
// `http://localhost:3333/categories/1${category}`

