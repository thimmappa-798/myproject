import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="shopping.jpg" class="card-img" alt="Background" height='450px' />
                <div class="card-img-overlay ">
                    <div className='container'>
                    <h5 class="card-title display-3 fw-bold">NEW SESSION ARRIVALS</h5>
                    <p class="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
                </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home