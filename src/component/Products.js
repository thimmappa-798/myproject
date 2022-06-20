import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

function Products() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products')
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                componentMounted = false
            }

        }
        getProducts();
    }, [])
    const Loading = () => {
        return (
            <>
                .....Loading
            </>
        )
    }
    const filterProduct=(cat)=>{
        const updatedList=data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }
    const Showproduct = () => {

        return (
            <>
                <div className='buttons d-flex justify-content-center md-5 pb-5'>
                    <button className='btn btn-outline-dark me-2 ' onClick={()=>setFilter(data)}>ALL</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct(`men's clothing`)}>Men,s Clothing</button >
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button >
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct('jewelery')}>Jewellery</button >
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("electronics")}>Electronics</button >
                </div>
                {filter.map((thimmi) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div class="card h-100 text-center p-4" key={thimmi.id} >
                                    <img src={thimmi.image} class="card-img-top" alt={thimmi.title}  height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{thimmi.title.substring(0,12)}...</h5>
                                        <h5 class="card-title lead fw-bold"><i>Price</i>{thimmi.price}</h5>
                                        <Link to={`/products/${thimmi.id}`} href='' className='btn btn-outline-dark'>Buy Now</Link>
                                       
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })}
            </>
        )

    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h2 className='display-6 fw-bolder text-center'>LATESTE PRODUCTS</h2>

                        <hr />


                    </div>

                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <Showproduct />}
                </div>
            </div>
        </div>
    )
}

export default Products