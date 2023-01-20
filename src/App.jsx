import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";

// dummy data
const POSTS = [
  { id: 1, name: "Anik" },
  { id: 2, name: "Partho" },
];
function App() {
  const navigate = useNavigate();
  /* // we can do two things with react query.
  // ? 1. query --> getting the data from somewhere
  // ? 2. mutation --> posting the data to somewhere
  // to update the data instantly
  const queryClient = useQueryClient();
  console.log(POSTS);


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
  }); */

  return (
    <div>
      <h1>React query</h1>
      <button onClick={() => navigate("/postlist1")}>posts list 1</button>
      <button onClick={() => navigate("/postlist2")}>posts list 2</button>
      <button onClick={() => navigate(`/firstpost`)}>First post</button>
      <Outlet />
    </div>
  );
}

export default App;
