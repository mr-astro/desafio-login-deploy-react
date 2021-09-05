import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { productsList } from '../../store/productsList/action'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'

const ProductsListItems = () => {
    
    const products = useSelector((state) => state.products.data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsList())
    },[dispatch])

    return (
        <div>
            {products.map((product) => {
                return (
                    <div className='list-group-item' key={product.id}>
                        <div className='row'>
                            <div className='col-4'>{product.name}</div>
                            <div className='col-4'>{product.price}</div>
                            <div className='col-4'><Link to={`/products/remove/${product.id}`} className='btn btn-danger'>Delete</Link></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsListItems