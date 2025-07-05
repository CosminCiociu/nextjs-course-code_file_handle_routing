import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query); // This will be an object containing 'id' and 'cl
  return (
    <div>
      <h1>The Selected Client Project Page</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
