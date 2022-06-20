import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {addCart} from './redux/action/index'

function Product() {
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch();
    const addProduct=(product)=>{
        dispatch(addCart(product));
    }
    useEffect(()=>{
        const getProduct=async()=>{
            setLoading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct( await response.json());
            setLoading(false);
        }
        getProduct();
    },[]);
    const Loading=()=>{
        return(
        <>
        .... Loading
        </>
        )}
        const ShowProduct=()=>{
            return(
                <>
                <div className='col-md-6 pt-5'>
                    <img src={product.image} alt={product.title} height="350px" width='350px' />
                </div>
                <div className='col-md-6 pt-5'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h2 className='display-4 fw-bolder'>{product.title}</h2>
                    <p className='lead fw-bolder'> Rating :{product.rating && product.rating.rate}</p>
                    <h3 className='display-6 fw-bolder my-4'> ${product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>Add to Cart</button>
                    <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</Link>
                </div>
                </>
            )
        }
   
  return (
    <div>
        <div className='container'>
            <div className='row'>
                {
                    loading?<Loading />:<ShowProduct />
                }
            </div>
        </div>
    </div>
  )
}

export default Product