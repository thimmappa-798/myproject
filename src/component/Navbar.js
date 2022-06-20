import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'




function Navbar() {
    const state=useSelector((state)=>state.handleCart)
    return (
        <div className='container py-3'>
            <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold fs-4" href="#">LA COLLECTIONS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/products' class="nav-link" href="#">Products</Link>
                            </li>
                           
                            <li class="nav-item">
                                <Link to='/About' class="nav-link " href="#" tabindex="-1" >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Contact' class="nav-link " href="#" tabindex="-1" >Contact</Link>
                            </li>
                        </ul>
                       <div className='buttons'>
                           <Link to='/login' href='' className='btn btn-outline-dark me-2'>
                               <i className='fa fa-sign-in'>Login</i>
                           </Link>
                           <Link to='/register' href='' className='btn btn-outline-dark me-2'>
                               <i className='fa fa-sign-in'>Register</i>
                           </Link>
                           <Link to='/cart' href='' className='btn btn-outline-dark'>
                               <i className='fa fa-sign-in'>Cart ({state.length})</i>
                           </Link>
                       </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar