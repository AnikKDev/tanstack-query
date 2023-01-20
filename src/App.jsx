import { useQuery } from "react-query";

function App() {
  // we can do two things with react query.
  // ? 1. query --> getting the data from somewhere
  // ? 2. mutation --> posting the data to somewhere

  // dummy data
  const POSTS = [
    { id: 1, name: "Anik" },
    { id: 2, name: "Partho" },
  ];

  // querying data
  const postsQuery = useQuery({
    // inside the object first one will be a unique identifier
    queryKey: ["posts"],
    // second property will be the exact function that will fetch the data
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  // setting up loading
  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <div>
      <h1>React query</h1>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </div>
  );
}

// wait function
const wait = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export default App;
