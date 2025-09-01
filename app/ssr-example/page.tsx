type Post = {
  id: number;
  title: string;
};

export default async function SSRPage() {
  const randomID = Math.floor(Math.random() * 100) + 1;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${randomID}`,
    {
      cache: "no-store", // ensures SSR
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  const post: Post = await response.json(); // ❌ causes type error


  return (
    <div>
      <h1>SSR</h1>
      <p>ID: {post.id}</p>
      <p>{post.title}</p>
    </div>
  );
}
