import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Max Schwarz" },
    { id: "john", name: "John Doe" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: `/clients/[id]`,
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
