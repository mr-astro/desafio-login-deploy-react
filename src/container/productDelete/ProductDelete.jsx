import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDelete = () => {
    const {id} = useParams()
    const products = useSelector(state=>state.products.data)
    const [name,setName] = useState("")


    useEffect(()=>{
        console.log(products)
        const name = products.filter(product=>product.id === id)
        console.log(name)
        setName(name)
    },[id, products])

    return (
        <div>
            seguro deseas borrar a {name}
        </div>
    )
}

export default ProductDelete