"use client";
import Link from "next/link";   
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function SignupPage(){
    const [user,setUser]= React.useState({
        email:"",
        password:"",
        username:"",
    })
    const onSignUp = async () =>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white">SignUp</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
                className="p-1 border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600"
                type="text"
                id="username"
                value={user.username}
                onChange={(e)=> setUser({...user,username:e.target.value})}
                placeholder="username"
                />
                <label htmlFor="email">email</label>
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
                onClick={onSignUp}
                >SignUp here</button>
                 <a href="/login">login here</a>
                
        </div>
    )
}