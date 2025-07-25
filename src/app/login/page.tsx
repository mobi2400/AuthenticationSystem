"use client";
import Link from "next/link";   
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function LoginPage(){
    const router = useRouter();
    const [user,setUser]= React.useState({
        email:"",
        password:"",

    })
    const[buttonDisabled,setButtonDisabled]=React.useState(false);
    const [loading,setLoading]=React.useState(false);


    const Login = async () =>{
        try{
            setLoading(true);
            const response = await axios.post('/api/users/login',{
                email:user.email,
                password:user.password,
            })
            router.push("/profile")
            console.log(response);
            
        }catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{
        if(user.email.length>0&&user.password.length>0 ){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    })

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