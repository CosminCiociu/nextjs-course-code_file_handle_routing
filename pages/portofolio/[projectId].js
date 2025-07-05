import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname); // This will be '/portofolio/[projectId]'
  console.log(router.query); // This will be '/portofolio/[projectId]'

  // Send a request to some backend service to fetch data for the project
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
export default PortfolioProjectPage;
