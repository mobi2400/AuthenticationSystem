"use client";

import { useRouter } from "next/navigation";

export default function UserProfile({ params }: any) {
    
    const router = useRouter();

    const onLogout = () => {
        try{
            localStorage.removeItem("token");
            router.push("/login");
        }catch(error){
            console.log(error);
        }
        
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile Page {params.id}</p>
            <hr />
            <button
                onClick={onLogout}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-gray-100"
            >
                Logout
            </button>
        </div>
    );
}