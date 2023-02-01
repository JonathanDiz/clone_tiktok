import AlbumDisk from "./AlbumDisk"
import styles from "./styles.module.css"

export default function VideoDescription({ albumCover ,author, description }) {
  return (
    <footer className={styles.description}>
    <div>
    <strong>{author}</strong>
    <p>{description}</p>
    </div>

    <div>
    <AlbumDisk albumCover={albumCover} />
    </div>
    </footer>
  )
}