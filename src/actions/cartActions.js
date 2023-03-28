import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (product_id, quantity) => async (dispatch, getState) => {
    // await axios
    //   .get(`/store/all-products/${product_id}`)
    //   .then((response) => {
    //     const data = response.data;
        
    //   });
        const {data} = await axios.get(`/store/all-products/${product_id}`)

      dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.product_id,
            name: data.name,
            image: data.image,
            price: data.price,
            quantity_in_stock: data.quantity_in_stock,
            quantity: Number(quantity)
        }
      })

      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}