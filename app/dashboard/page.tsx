"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Dashboard(){
    const{data:session,status}= useSession()
    const router = useRouter();
    if(status === "loading"){
        return<p>Loading...</p>
    }
    if(status === "unauthenticated"){
        router.push("/login")
        return null;
    }
    return(
        <div>
            <h1>Welcome to Dashboard, {session?.user?.name}</h1>
            <p>Email:{session?.user?.email}</p>
        </div>
    )
}