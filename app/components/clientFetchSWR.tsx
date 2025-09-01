"use client";

import useSWR from "swr";

const fetcher = (url:string)=> fetch(url).then((res)=>res.json());

export default function ClientFetchSWR(){
    const {data,error,isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts',fetcher)
    if(isLoading)
        return <p>Loading ...</p>
    if(error) 
        return <p>Error Loading posts</p>
    return(
        <div>
           <h1>SWR</h1>
           {data?.slice(0,5).map((post:{id:number,title:number})=>{
            return(
                <div key={post.id}>
                    <strong>{post.title}</strong>
                </div>
            )
           })}
        </div>
    )
}