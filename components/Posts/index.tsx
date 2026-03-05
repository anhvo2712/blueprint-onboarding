"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";
import styles from "./styles.module.css";

interface PostProps {
  username: string;
  organization: string;
  location: string;
  imageUrl?: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  }

export default function Post({
  username,
  organization,
  location,
  imageUrl,
  caption,
  likes,
  comments,
  date,
}: PostProps) {
  return (
    <>
      <div className={styles.postHeader}>
          
          <img
          src="/assets/profile.svg" 
          alt="Profile Icon" 
          className={styles.profileIcon} 
          />
          <div className={styles.postInfo}>
          <p className={styles.usernameOrganization}>
            <span className={styles.name}>{username}</span> at{" "}
            <span className={styles.organization}>{organization}</span>
          </p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${organization} post`}
          className={styles.postImage}
        />
      )}

      <p className={styles.postText}>{caption}</p>

      <div className={styles.commentSection}>
        <p className={styles.commentText}>{likes} Likes</p>
        <p className={styles.commentText}>View {comments} Comments</p>
      </div>

      <div className={styles.engagementSection}>
        <HeartIcon className={styles.engagementIcon} />
        <TbMessageCircle className={styles.engagementIcon} />
        <ShareIcon className={styles.shareButton} />
    </div>

      <p className={styles.date}>{date}</p>
    </>
  );
}


