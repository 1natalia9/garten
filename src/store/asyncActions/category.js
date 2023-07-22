import { loadAction } from "../reducer/categoryReducer";


export const loadCategoryAction = async (dispatch) => {
   const resp = await fetch("http://localhost:3333/categories/all");
   const data = await resp.json();
   dispatch(loadAction(data));
}

