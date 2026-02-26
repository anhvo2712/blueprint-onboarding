"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import Image from "next/image";
import styles from "./Post.module.css";

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
        <div className={styles.profileIcon}>
          <ProfileIcon size={40} color="#D9D9D9" />
        </div>
        <div className={styles.postInfo}>
          <p className={styles.usernameOrganization}>
            <span className={styles.name}>{username}</span> at{" "}
            <span className={styles.organization}>{organization}</span>
          </p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${organization} post`}
          width={375}
          height={250}
          className={styles.postImage}
        />
      )}

      <p className={styles.postText}>{caption}</p>

      <div className={styles.commentSection}>
        <p className={styles.commentText}>{likes} Likes</p>
        <p className={styles.commentText}>View {comments} Comments</p>
      </div>

      <div className={styles.engagementSection}>
        <HeartIcon className={styles.engagementIcon} size={24} />
        <TbMessageCircle className={styles.engagementIcon} size={24} />
        <ShareIcon className={styles.shareButton} size={24} />
      </div>

      <p className={styles.date}>{date}</p>
    </>
  );
}
