import { Heart } from "../Icons/Heart"
import { Comments } from "../Icons/Comments"
import { Share } from "../Icons/Share"
import styles from "./styles.module.css"

export default function VideoPlayerActions ({ likes = 12, comments = 12, shares = 12, hearted = false }) {
  
  const handleLike = () => {
    window.alert('like')
  }

  const handleComment = () => {
    window.alert('comment')
  }

  const handleShare = () => {
    window.alert('share')
  }

  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
      <button onClick={handleLike} className={styles.action}>
        <Heart width='45'/>
        <span title="like">{likes}</span>
      </button>
      </div>

      <div className={styles.action}>
      <button onClick={handleComment} className={styles.action}>  
        <Comments width='45' />
        <span title="comments">{comments}</span>
      </button>
      </div>

      <div className={styles.action}>
      <button onClick={handleShare} className={styles.action}>  
        <Share width='45' />
        <span title="shares">{shares}</span>
      </button>
      </div>
    </aside>
  )
}