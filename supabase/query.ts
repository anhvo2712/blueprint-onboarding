// ... indicates that you need a keyword here that I won't reveal!
// Post is a custom type that you will have to define based on the columns of the table!

import { supabase } from "./client";

type Post = {
  id: number;
  created_at: string;
  user_name: string;
  npo_name: string;
  post_text: string;
  location_id: number;
  image_link: string;
  num_likes: number;
};

// you can define the Post type in this file itself or in a separate file and import it, either is ok!
export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase.from("posts").select("*");
  // handle errors here
  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
  return data;
}
