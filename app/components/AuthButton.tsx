"use client";

import {signIn, signOut, useSession} from 'next-auth/react';
export default function AuthButton() {
  const {data:session} = useSession();
 console.log(session,'session data');
 console.log(status,'status')
 if(!session) {
    return <button onClick={()=>signIn()}>Sign In</button>
 }
 return(
    <div>
        
            <div>
                <p>Welcome {session.user?.name}</p>
                <p>Role:{session.user?.role}</p>
                <button onClick={()=>signOut()}>Sign Out</button>
                </div>
    </div>
 )
}
