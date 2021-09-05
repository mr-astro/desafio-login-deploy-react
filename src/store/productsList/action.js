import { LIST_PRODUCTS_INIT, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_ERROR } from './types'

export const productsList = () => {
    return (dispatch) => {
        dispatch({ type: LIST_PRODUCTS_INIT })

        const productsListSuccess = (products) => {
            dispatch({ type: LIST_PRODUCTS_SUCCESS, payload: products })
        }

        const productsListFail = (error) => {
            dispatch({ type: LIST_PRODUCTS_ERROR, payload: error })
        }

        try {
            fetch('https://api-mock-mia.herokuapp.com/products', {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        //console.log(data)
                        productsListSuccess(data)
                    } else {
                        productsListFail(data.error)
                    }
                })
        } catch (error) {
            productsListFail('Hay un error', error)
        }
    }
}