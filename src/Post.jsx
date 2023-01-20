import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost } from "./getPost";
import { getUser } from "./getUser";

const Post = () => {
  const postsQuery = useQuery({
    queryKey: ["posts", 1],
    // param pass korar shomoy ekhane ekta callback o dibo
    queryFn: () => getPost(1),
  });

  //   getting user data through the reference of previous api call
  const userQuery = useQuery({
    queryKey: ["users", postsQuery?.data?.id],
    enabled: postsQuery?.data?.id !== null,
    queryFn: () => getUser(postsQuery.data.id),
  });

  // setting up loading
  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <div>
      {postsQuery.data.body}
      <h2>
        {userQuery.isLoading
          ? "Loading user..."
          : userQuery.isError
          ? "Error loading user..."
          : userQuery.data.name}
      </h2>
    </div>
  );
};

export default Post;
