import axios from 'axios';
import { useEffect, useReducer } from "react";
import logger from 'use-reducer-logger';
import Loadingbox from '../Components/Loadingbox';
import Messagebox from '../Components/Messagebox';
import Product from '../Components/Product';
//import data from "../data";

const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_REQUEST' :
      return {...state, loading: true};
      case 'FETCH_SUCCESS' :
        return {...state, products: action.payload, loading: false};
        case 'FETCH_FAIL' :
          return {...state, loading: false, error: action.payload};
          default:
            return state;
        return {}
  }
}

function Homescreen() {
  //usereducer
  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  })
 // const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/api/products');  
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch (err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }
      
     // setProducts(result.data);
    };
    fetchData();
  }, []);
    return (
    <div>
  <h1>Best Sellers</h1>
    <div className="products">

    {loading ? (
      <Loadingbox/>
      ): error ? (
  <Messagebox variant="danger">{error}</Messagebox>   
    ): (
    products.map(product => (
      <div className="product-details" key={product.slug}>
        <Product product={product}></Product>
        </div>
    ))
    )}
      </div>
    </div>
    );
}

export default Homescreen;