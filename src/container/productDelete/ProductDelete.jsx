import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const ProductDelete = () => {
    const {id} = useParams()
    const products = useSelector(state=>state.products.data)
    const [name,setName] = useState("")


    useEffect(()=>{
        const name = products.filter(product=>product.id === id)
        setName(name)
    },[id, products])

    return (
        <div>
            seguro deseas borrar a {name}
        </div>
    )
}

export default ProductDelete