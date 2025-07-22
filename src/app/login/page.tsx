"use client";
import Link from "next/link";   
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function LoginPage(){
    const [user,setUser]= React.useState({
        email:"",
        password:"",

    })
    const Login = async () =>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white">login</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
                className="p-1 border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600"
                type="text"
                id="email"
                value={user.email}
                onChange={(e)=> setUser({...user,email:e.target.value})}
                placeholder="email"
                />
                <label htmlFor="password">password</label>
            <input 
                className="p-1 border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600"
                type="text"
                id="password"
                value={user.password}
                onChange={(e)=> setUser({...user,password:e.target.value})}
                placeholder="password"
                />
                <button  className="p-1 border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600"
                onClick={Login}
                >Login here</button>
                 <a href="/signup">click to SignUp</a>
                
        </div>
    )
}