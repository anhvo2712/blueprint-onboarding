"use client";

import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import Post from "@/components/Posts/Post";
import "@/styles/global.css";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";

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
  } | null
};

export default function Home() {
  const [postData, setPostData] = useState<PostData[] | null>(null);
    
    async function fetchPostData() {
      const { data, error } = await supabase
      .from('Posts')
      .select(`
        *,
        Locations (
          city_name,
          state_abbr
        )
      `);

    if (error) {
      console.error('Error fetching posts:', error);
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
          postData.map((postItem, index) => {
            const imageMap: Record<string, string> = {
              'etam3': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
            };
           
          return (
              <Post
                key={postItem.id}
                username={postItem.user_name}
                npo={postItem.npo_name}
                city={postItem.Locations?.city_name || "Unknown City"}
                state={postItem.Locations?.state_abbr || "Unknown State"}
                image={postItem.image_link}
                likeCount={postItem.num_likes}
                text={postItem.post_text}
              />
          );
        })
      )}
    </div>
    </div>
  </main>
  );
}
