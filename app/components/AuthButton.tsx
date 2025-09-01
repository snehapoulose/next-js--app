"use client";

import {signIn, signOut, useSession} from 'next-auth/react';
export default function AuthButton() {
  const {data:session,status} = useSession();
 console.log(session,'session data');
 console.log(status,'status')
 if(status === "loading") {
    return <p>Loading Authentication ....</p>
 }
 return(
    <div>
        {session ?(
            <div>
                <p>Welcome {session.user?.name}</p>
                <button onClick={()=>signOut()}>Sign Out</button>
                </div>
        ):(
            <button onClick={()=>signIn()}>Sign In</button>
        )}
    </div>
 )
}
