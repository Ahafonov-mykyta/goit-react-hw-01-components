
import PropTypes from "prop-types";
import styles from "../Profile/Profile.module.css"
export default function Profile ({userName, tag, location,avatar, stats:{followers,views,likes}}){

  return  <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{userName}</p>
    <p className={styles.text}>@{tag}</p>
    <p className={styles.text}>{location}l</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
    userName: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location:PropTypes.string,

    stats:PropTypes.shape({
        followers:PropTypes.number,
        views:PropTypes.number,
        likes:PropTypes.number,
    })
    
    
  };