import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// dummy data
const POSTS = [
  { id: 1, name: "Anik" },
  { id: 2, name: "Partho" },
];
function App() {
  // we can do two things with react query.
  // ? 1. query --> getting the data from somewhere
  // ? 2. mutation --> posting the data to somewhere
  // to update the data instantly
  const queryClient = useQueryClient();
  console.log(POSTS);
  // querying data
  const postsQuery = useQuery({
    // inside the object first one will be a unique identifier
    queryKey: ["posts"],
    // second property will be the exact function that will fetch the data
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  // mutation (adding data)
  const newPostMutation = useMutation({
    // use mutation will also take object and inside of it we have to pass mutation function which will take promise as its value. we can pass functions there.
    // and we always have to pass one single value in the promise
    mutationFn: (name) => {
      return wait(1000).then(() =>
        POSTS.push({ id: Math.random().toString(), name })
      );
    },
    // to update data instantly we have to invalidate this with the same key
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
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

      {/* to add something we have to call mutate function inside newPostMutation function and pass the parameter there (promised one) */}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("Antu")}
      >
        Add new
      </button>
    </div>
  );
}

// wait function
const wait = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export default App;
