import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({
    role,children
}:{
    role:string;
    children:ReactNode;
}){
    const {data:session,status} = useSession()
    const router = useRouter();
    useEffect(()=>{
        if(status === "authenticated" && session?.user.role!==role){
            router.push("/unauthorized");
        }
    },[status,session,role,router]);
    if(status==="loading"){
        return <p>Loading...</p>
    }
    return <>{children}</>
}