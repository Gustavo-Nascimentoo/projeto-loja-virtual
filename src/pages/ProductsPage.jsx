import { useEffect } from "react"

const ProductsPage = () => {

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() =>{
        fetch(`${API_URL}products/category/electronics`)
        .then((results)=> results.json())
        .then((data)=> console.log(data))
    },[])

    return (
        <h1>Página de Produtos</h1>
    )
}

export default ProductsPage