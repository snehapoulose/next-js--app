type BlogPost = {
    id:number;
    title:string;
}

export default async function Blog(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok){
        throw new Error("Failed to fetch")
    }
    const data = await response.json();
    const posts:BlogPost[] = data.posts;
    return(
        <div>
            <h1>SSG</h1>
            {posts.map((post)=>{
            return(
                <div>
                  <strong>{post.title}</strong>  
                </div>
            )
            })}
        </div>
    )
}