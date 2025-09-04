"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/router";


export default function AdminPage(){
    const {data:session,status}= useSession();
    const router = useRouter();
    if(status === "loading"){
        return <p>Loading..</p>
    }
    if(status==='unauthenticated'||session?.user?.role!=="admin"){
        router.push('/unauthorized');
    }
    return(
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome , {session?.user?.name}</p>
        </div>
    )
}