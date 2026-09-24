export default function ProductCard({id,image,title,category,rating,price}) {
    return (
        <div className="product-card" key={id}>
            <img src={image} alt={title} />
            <p className="product-category">
                {category}
            </p>
            <h3>{title}</h3>
            <p className="product-rating">
                ⭐⭐⭐⭐⭐ ({rating.rate})
            </p>
            <p className="product-price">
                R$ {price}
            </p>
            <button className="btn-secondary">
                Adicionar ao carrinho
            </button>
        </div>
    )
}

