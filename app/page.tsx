"use client";

import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import Post from "@/components/Posts/Post";
import "@/styles/global.css";
import { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";
import styles from "./styles.module.css";

type PostData = {
  id: number;
  created_at: string;
  user_name: string;
  npo_name: string;
  post_text: string;
  location_id: number;
  image_link: string;
  num_likes: number;
  Locations: {
    city_name: string;
    state_abbr: string;
  } | null;
  Comments: Array<{
    id: number;
    user_name: string;
    comment_text: string;
    created_at: string;
  }> | null;
};

export default function Home() {
  const [postData, setPostData] = useState<PostData[] | null>(null);

  async function fetchPostData() {
    const { data, error } = await supabase.from("Posts").select(`
        *,
        Locations (
          city_name,
          state_abbr
        ),
        Comments!post_id (
          id, 
          user_name,
          comment_text, 
          created_at 
        )
      `);

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
    return data as PostData[];
  }
  useEffect(() => {
    // Inside useEffect, you can perform side effects, like fetching data
    // Here, we fetch some data from an API
    async function loadData() {
      const fetchedPost = await fetchPostData();
      setPostData(fetchedPost);
    }

    loadData();
  }, []); // Empty dependency array means this effect runs only once

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>

        <div className={styles.entireFeed}>
          {postData == null ? (
            <p>Loading...</p>
          ) : (
            postData.map((postItem, index) => (
              <>
                <Post
                  key={postItem.id}
                  username={postItem.user_name}
                  npo={postItem.npo_name}
                  city={postItem.Locations?.city_name || "Unknown City"}
                  state={postItem.Locations?.state_abbr || "Unknown State"}
                  image={postItem.image_link}
                  likeCount={postItem.num_likes}
                  text={postItem.post_text}
                  comments={postItem.Comments || []}
                />
                {index < postData.length - 1 && <hr className={styles.post} />}
              </> // Add separator
            ))
          )}
        </div>
      </div>
    </main>
  );
}
