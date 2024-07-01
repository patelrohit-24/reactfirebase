import React from 'react'
import app from './config'
import { get, getDatabase, ref, onChange, onClick } from "firebase/database";
import img5 from './images/boy4.jpg'
import ReactDOM from 'react-dom/client';

// // let arr = [ ]
let obj = {}
export default function Form() {
    return (
        <>
            <div className="sec1">
                <h1>Registration </h1>

                <img src={img5} alt="" />

                <form action="">
                    <div>
                        <input onChange={(e) => {
                            console.log(e.target.value)
                            obj.name = e.target.value
                        }} type="text" name='name' placeholder='name' />
                    </div>
                    <div>
                        <input onChange={(e) => {
                            obj.email = e.target.value
                        }} name='email' placeholder='entar your email' type="text" />
                    </div>
                    <div>
                        <input onChange={(e) => {
                            obj.pass = e.target.value
                        }} name='phone' placeholder='entar your phonenumber' type="text" />
                    </div>
                    <div>
                        <input onChange={(e) => {
                            obj.cpass = e.target.value
                        }} name='pass' placeholder='password' type="text" />
                    </div>
                    <div>
                        <input onChange={(e) => {
                            e.preventDefault()

                        }}
                            name='cpass' placeholder='confirm password' type="text" />
                    </div>
                    <div>
                        <input onClick={(e) => {
                            e.preventDefault()

                            console.log(obj)
                        }}
                            type="submit" />

                        <input type="reset" />
                    </div>
                </form>
            </div>
        </>
    )
}


