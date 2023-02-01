import styles from './styles.module.css'
import { MusicIcon } from '../Icons/MusicIcon'
import Ticker from 'react-ticker'


export default function SongTicker ({ songTitle }) {
  return (
    <div className={styles.song}>
    <MusicIcon />
    <Ticker speed={10}>
    {() => 'hola'}
    </Ticker>
    <span>{songTitle}</span>
    </div>
  )
}