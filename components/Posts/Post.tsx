import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";
import styles from "./styles.module.css";

interface PostProps {
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image?: string;
  likeCount: number;
}

export default function Post({
  username,
  npo,
  city,
  state,
  text,
  image,
  likeCount,
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
            <span className={styles.organization}>{npo}</span>
          </p>
          <p className={styles.location}>
            {city}, {state}
          </p>
        </div>
      </div>

      {image && (
        <img src={image} alt={`${npo} post`} className={styles.postImage} />
      )}

      <p className={styles.postText}>{text}</p>

      <div className={styles.commentSection}>
        <p className={styles.commentText}>{likeCount} Likes</p>
        <p className={styles.commentText}>View Comments</p>
      </div>

      <div className={styles.engagementSection}>
        <HeartIcon className={styles.engagementIcon} />
        <TbMessageCircle className={styles.engagementIcon} />
        <ShareIcon className={styles.shareButton} />
      </div>
    </>
  );
}
