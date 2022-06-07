import axios from "axios";
import './Productscreen.css';
import { useContext, useEffect, useReducer } from "react";
import { useNavigate ,useParams } from "react-router";
import Rating from "../Components/Rating";
import Loadingbox from '../Components/Loadingbox';
import Messagebox from '../Components/Messagebox';
import { Store } from "../Store";
const reducer = (state, action) => {
    switch(action.type){
      case 'FETCH_REQUEST' :
        return {...state, loading: true};
        case 'FETCH_SUCCESS' :
          return {...state, product: action.payload, loading: false};
          case 'FETCH_FAIL' :
            return {...state, loading: false, error: action.payload};
            default:
              return state;
    }
  };

function Productscreen () {
  const navigate = useNavigate();
const params = useParams();
const {slug} = params;

const [{loading, error, product}, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
   
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);  
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch (err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }
    };
    fetchData();
  }, [slug]);
const { state, dispatch: ctxDispatch } = useContext(Store); 
const {cart} = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1: 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if(data.counterInStock < quantity) {
      window.alert('Sorry. Product is Out Of Stock');
      return;
    }
ctxDispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity},
  });
  navigate('/cart');
  }

return loading ? (
<Loadingbox/>
) : error ? (
<Messagebox variant="danger">{error}</Messagebox>   
 ): (
    <div className="detail-product">
        <img className="pro-image" src={product.image} alt={product.name} />
        <div className="pro-detail">
        <h1 className="pro-name">{product.name}</h1>
        <h2 className="pro-name">Author: {product.author}</h2>
        <p className="pro-name"><strong>Category</strong>: {product.category}</p>
        <Rating rating={product.rating}></Rating>
        <p className="pro-name">{product.description}</p>
        <p className="pro-name">Price: ${product.price}/-</p>

        </div>
        <p className="status">Status:</p>
          {product.counterInStock > 0 ? (
         <p className="status-code">Avaliable</p>
             ) : (
              <p className="status-code">Unavaliable</p>
         ) }
     
      {product.counterInStock > 0 && (
        <button onClick={addToCartHandler} className="cart">Add to Cart</button>
      )}
        
       </div>
);
}
export default Productscreen;