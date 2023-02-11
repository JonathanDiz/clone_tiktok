import styles from "./styles.module.css";
import MusicIcon from "../Icons/MusicIcon";


export default function SongTicker ({ songTitle }) {
  return (
    <div className={styles.song}>
      <marquee>
      <MusicIcon className={styles.icon}/>
        {songTitle}
      </marquee>
    </div>
  )
}