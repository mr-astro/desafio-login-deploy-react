import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDelete = () => {
    const {id} = useParams()
    const products = useSelector(state=>state.products.data)
    const [name,setName] = useState("")


    useEffect(()=>{
        //console.log(products)
        const name = products.filter(product=>product.id === parseInt(id))[0]
        //console.log(name, id)
        setName(name.name)
    },[id, products])

    return (
        <div>
            seguro deseas borrar a {name}
        </div>
    )
}

export default ProductDelete