import { getServerSession } from "next-auth";
// import ClientFetchSWR from "./components/clientFetchSWR";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthButton from "./components/AuthButton";




export default async function Home() {
  console.log('Next js in server')
  const session = await getServerSession(authOptions)
  return (
    <>
    <h1 className="text-3xl">Next js Text</h1>
    {/* <Hello/> */}
    {/* <ClientFetchSWR/> */}
    <main>
      <h1>Next js Authentication </h1>
      {session ?<p>Welcome ,{session.user?.name}!</p>:<p>You are not logged in </p>}
      <AuthButton/>
    </main>
    </>
    
  );
}
