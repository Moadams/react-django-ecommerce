import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from '../constants/productConstants'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
    try{
        dispatch({type: PRODUCT_LIST_REQUEST})
        await axios.get('https://cediapp.onrender.com/store/approved-producs/').then(response =>{
        const data = response.data
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    })
    }catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}