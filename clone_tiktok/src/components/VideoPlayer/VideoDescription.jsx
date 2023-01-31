import AlbumDisk from "./AlbumDisk"

export default function VideoDescription({ author, description }) {
  return (
    <footer>
    <div>
    <strong>{author}</strong>
    <p>{description}</p>
    </div>

    <div>
    <AlbumDisk albumImage={albumImage} />
    </div>
    </footer>
  )
}