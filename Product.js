import { Link } from "react-router-dom";
import Rating from "./Rating";
function Product (props) {
    const {product } = props;

    return (
        <div className="product">
          <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
          </Link>
          <div className="product-info">
             <Link to={`/product/${product.slug}`}>
                 <p>{product.name}</p>
                 </Link>
             
          <p className="product-name"><strong>Author: </strong>{product.author}</p>
          <p><strong>${product.price}</strong></p>
          <Rating rating={product.rating} Reviews></Rating>
          </div>
        </div>
    )
}

export default Product;