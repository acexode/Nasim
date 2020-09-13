import React from 'react'
import Nav from '../../components/Nav/Nav'
export const Home = () => {
    return (
        <div>
            <Nav/>
            <header class="masthead">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-uppercase text-white register-for-n-power">Register For N-POWER Batch C</h1>
                        
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 font-weight-light mb-5 registration-for-n-p">Registration for N-POWER Batch C Scheme is now ongoing. Get lifelong skills to become a solutions provide in your community</p>
                        <a class="btn btn--secondary apply-btn pt-2" href="apply">
                            <p class="apply-now ">Apply now</p>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Home
