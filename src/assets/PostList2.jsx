import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../getPosts";

const PostList2 = () => {
  // querying data
  const postsQuery = useQuery({
    // inside the object first one will be a unique identifier
    queryKey: ["posts"],
    // second property will be the exact function that will fetch the data
    queryFn: getPosts,
  });
  // setting up loading
  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <ol>
      {postsQuery.data.slice(0, 10).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}

      {/* to add something we have to call mutate function inside newPostMutation function and pass the parameter there (promised one) */}
      {/* <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("Antu")}
      >
        Add new
      </button> */}
    </ol>
  );
};
// wait function
const wait = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
export default PostList2;
