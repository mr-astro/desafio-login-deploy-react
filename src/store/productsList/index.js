import { LIST_PRODUCTS_INIT, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_ERROR } from './types'

const initialStore = {
    data:[],
    error:null,
    success:null,
    loadingProducts:false
}

export const productsReducer = (prevState = initialStore, action) => {
    switch(action.type) {
        case LIST_PRODUCTS_INIT:
            return {
                ...prevState,
                loadingProducts: true
            }
        
        case LIST_PRODUCTS_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loadingProducts: false,
                success: true,
                error: false
            }

        case LIST_PRODUCTS_ERROR:
            return {
                ...prevState,
                loadingProducts: false,
                success: false,
                error: action.payload
            }
        
        default:
            return prevState
    }
}