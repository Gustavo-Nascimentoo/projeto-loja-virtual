import ProductCard from "./ProductCard"

const Products = ({setCartCount}) => {

    const addToCart = () => {
        setCartCount(prev => prev + 1)
    }

    const produtos = [
    {
        id: 1,
            image: "https://placehold.co/240x240/aa3bff/ffffff?text=Tenis",
                alt: "Tênis esportivo",
                    title: "Tênis Esportivo",
                        category: "Calçados",
                            rating: "⭐⭐⭐⭐☆ (4.5)",
                                price: "R$ 299,90"
    },
    {
        id: 2,
            image: "https://placehold.co/240x240/3b82f6/ffffff?text=Fone",
                alt: "Fone de ouvido bluetooth",
                    title: "Fone de Ouvido Bluetooth",
                        category: "Eletrônicos",
                            rating: "⭐⭐⭐⭐⭐ (4.8)",
                                price: "R$ 149,90"
    },
    {
        id: 3,
            image: "https://placehold.co/240x240/22c55e/ffffff?text=Mochila",
                alt: "Mochila para notebook",
                    title: "Mochila para Notebook",
                        category: "Acessórios",
                            rating: "⭐⭐⭐⭐☆ (4.2)",
                                price: "R$ 189,90"
    },
    {
        id: 4,
            image: "https://placehold.co/240x240/f97316/ffffff?text=Relogio",
                alt: "Relógio smartwatch",
                    title: "Relógio Smartwatch",
                        category: "Eletrônicos",
                            rating: "⭐⭐⭐⭐⭐ (4.7)",
                                price: "R$ 349,90"
    }
        ]
    return (
        <div>
            <h1>Todos os produtos</h1>
            {produtos.map(produtoatual => (
                <ProductCard {...produtoatual}/>
            ))}
        </div>
    )
}

        

export default Products