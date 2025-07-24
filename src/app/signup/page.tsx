"use client";
import Link from "next/link";   
import React,{useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function SignupPage(){
    const router = useRouter();
    const [user,setUser]= React.useState({
        email:"",
        password:"",
        username:"",
    })
    const [buttonDisabled,setButtonDisabled]=React.useState(true);
    const[loading,setLoading]= React.useState(false);

    const onSignUp = async () =>{
        try{
            setLoading(true);
             const response=   await axios.post('/api/users/signup',{
                email:user.email,
                password:user.password,
                username:user.username,
             });
            router.push('/login')
            console.log(response);
            

        } catch(error){
            console.log(error);
            
         } finally{
            setLoading(false);
         }

    }
    useEffect(()=>{
        if(user.email.length>0&&user.password.length>0&&user.username.length>0 ){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }

    },[user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white">{loading ?"Processing":"SignUp"}</h1>
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
                type="password"
                id="password"
                value={user.password}
                onChange={(e)=> setUser({...user,password:e.target.value})}
                placeholder="password"
                />
                <button  className="p-1 border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600"
                onClick={onSignUp}
                >{buttonDisabled?"NoSignUp":"SignUp"}</button>
            
                <Link href="/login">click to Login</Link>

        </div>
    )
    }