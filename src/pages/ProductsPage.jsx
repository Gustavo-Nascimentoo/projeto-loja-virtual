import { useEffect, useState } from "react"

const ProductsPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch(`${API_URL}products/category/electronics`)
        .then((results)=> results.json())
        .then((data)=> setProducts(data))
    },[])

    return (
        <section>
        <h1>Eletrônicos</h1>
        {products.map((currentProduct)=> (
            <div>
                <h2>{currentProduct.title}</h2>
                <img src={currentProduct.image}/>
            </div>
        ))}
        </section>
    )
}

export default ProductsPage