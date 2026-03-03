"use client";

import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import PostComponent from "@/components/Posts";
import "@/styles/global.css";
import styles from "./styles.module.css";

export default function Home() {
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
          <PostComponent
            username="etam3"
            organization="Mission Bit"
            location="San Francisco, CA"
            imageUrl="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
            caption="This past weekend, I taught at Mission Bit. I was working with a group of high school students who were building their first web pages. I really enjoyed being able to help guide 10 students on learning CS fundamentals through a project! They were all really eager to learn, and I'm glad I signed up. Highly recommend to any other software engineers interested in volunteering! Sign-up here: https://missionbit.org/get-involved/volunteer-with-us/"
            likes={3}
            comments={2}
            date="February 1"
          />

          <hr className={styles.post} />
          <PostComponent
            username="carolyn123"
            organization="Boys and Girls Club"
            location="Oakland, CA"
            caption="I recently volunteered at my local Boys and Girls Club!"
            likes={0}
            comments={0}
            date="February 10"
          />
        </div>
      </div>
    </main>
  );
}
