import React from 'react'
import './Flipkart.css'

import logo from "./images/flipkart/logo.svg";
export default function Flipkart() {
    return (
        <>
            <div className="container-fluid">
                <div className="row r1">
                    <div className="col-lg-12 c1">
                        <img src={logo} alt="logo" />
                        <div>
                            <form action="">
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <input className='form-control' type="search" placeholder='Search for Products, Brands and More' />
                            </form>
                        </div>
                        <div className='c2'>
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                            <span>Login</span>
                            <i class="fa fa-angle-down" aria-hidden="true"></i>

                            <div className="loginbox">
                                <div>
                                    <span>New customer?</span>
                                    <span>Sign Up</span>
                                </div>
                                <div>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <span>My Profile</span>
                                </div>
                                <div>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                    <span>Flipkart Plus Zone
                                    </span>
                                </div>
                                <div>
                                    <i class="fa fa-product-hunt" aria-hidden="true"></i>
                                    <span>Orders</span>
                                </div>
                                <div>
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <span>
                                        Wishlist</span>
                                </div>
                                <div>
                                    <i class="fa fa-gift" aria-hidden="true"></i>
                                    <span>
                                        Rewards</span>
                                </div>
                                <div>
                                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                                    <span>
                                        Gift Cards</span>

                                </div>
                            </div>
                        </div>
                        <div className='c3'>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span>Cart</span>
                        </div>
                        <div className='c4'>
                            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                            <span>Become a Seller</span>
                        </div>
                        <div className='c5'>
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
