import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

const VIDEOS = [
  {
    id: 0,
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "sonido de suegra bellaca",
    albumCover: "../../../assets/album.svg",
    src: "../../../assets/08ed73aca7b91254f0e7179895d526dd.mp4",
  },
  {
    id: 1,
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "la suegra contraataca",
    albumCover: "../../../assets/album.svg",
    src: "../../../assets/0a019cc20b7338572078f2e0d3f7ad3c.mp4",
  },
  {
    id: 2,
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra revenge",
    albumCover: "../../../assets/album.svg",
    src: "../../../assets/2717eb2a0851990b174e9f23bf500328.mp4",
  },
  {
    id: 3,
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra reload",
    albumCover: "../../../assets/album.svg",
    src: "../../../assets/31f8ea8011e63c308f742534673f8d4e.mp4",
  },
  {
    id: 4,
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra fuera de la matrix",
    albumCover: "../../../assets/album.svg",
    src: "../../../assets/5153099b32b1544e3aed9805e3d75446.mp4",
  },
  {
    id: 5,
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra interestelar",
    albumCover: "../../../assets/album.svg",
    src: "../../../assets/8dc229b07a6e5c43ed3f4c68bc3fa6fb.mp4",
  },
  {
    id: 6,
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra en pijama",
    albumCover: "../../../assets/album.svg",
    src: "../../../assets/d348c968d5fbead7e6eef9352ddd9d79.mp4",
  },
  {
    id: 7,
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "lo que callan las suegras",
    albumCover: "../../../assets/album.svg",
    src: "../../../assets/d387985fadd08625dc20be675b7bf0ce.mp4",
  },
];

export default function FeedVideos() {
  return VIDEOS.map((video) => (
    <div key={video.id} className={styles.item}>
      <VideoPlayer {...video} />
    </div>
  ));
}
