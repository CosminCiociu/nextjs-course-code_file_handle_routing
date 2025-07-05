import { useRouter } from "next/router";

function BlogPage() {
  const router = useRouter();

  console.log(router.query); // This will be an object containing 'slug'

  return (
    <div>
      <h1>The Blog Page</h1>
    </div>
  );
}

export default BlogPage;
