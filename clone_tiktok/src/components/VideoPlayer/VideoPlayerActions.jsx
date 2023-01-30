import Heart from "../Icons/Heart"
import styles from "./styles.module.css"

export default function VideoPlayerActions ({ likes = 12, comments = 12, shares = false }) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title="like">{likes}</strong>
      </div>

      <div className={styles.action}>
        <Heart />
        <strong title="comments">{comments}</strong>
      </div>

      <div className={styles.action}>
        <Heart />
        <strong title="shares">{shares}</strong>
      </div>
    </aside>
  )
}