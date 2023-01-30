import { Heart } from "../Icons/Heart"
import { Comments } from "../Icons/Comments"
import { Share } from "../Icons/Share"
import styles from "./styles.module.css"

export default function VideoPlayerActions ({ likes = 12, comments = 12, shares = 12, hearted = false }) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <h2><strong title="like">{likes}</strong></h2>
      </div>

      <div className={styles.action}>
        <Comments />
        <h2><strong title="comments">{comments}</strong></h2>
      </div>

      <div className={styles.action}>
        <Share />
        <h2><strong title="shares">{shares}</strong></h2>
      </div>
    </aside>
  )
}