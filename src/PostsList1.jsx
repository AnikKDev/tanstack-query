import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "./getPosts";

const PostsList1 = () => {
  // querying data
  const postsQuery = useQuery({
    // inside the object first one will be a unique identifier
    queryKey: ["posts"],
    // second property will be the exact function that will fetch the data
    queryFn: getPosts,
    // if we want data to go stale after 2s I will add stall time

    /* 
    The word stale means no longer fresh to use. In React Query, when a Query fetch an API and the response is ready, React Query marks it as stale. That is one of the reason why React Query looks for fresh content each time the page gets focus.
    */
    //? staleTime: 2000,

    // if I want my data to refetch everytime interval,
    // ! below code will refetch the data in every 1s
    //? refetchInterval:1000
  });
  // setting up loading
  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <ol>
      {postsQuery.data.map((post) => (
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
export default PostsList1;
