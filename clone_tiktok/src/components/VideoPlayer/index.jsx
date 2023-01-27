import styles from './styles.module.css'
const SRC =
  "https://v16-webapp.tiktok.com/00f77db8d49e815d50f245101f712d6a/63d455ba/video/tos/useast2a/tos-useast2a-pve-0068/oAYmaQOPjbBZx7eMBaeDQlntEzARrctUIwbRJJ/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2676&bt=1338&cs=0&ds=3&ft=IecA0oofD12NvRluBZIxRIBSrlJG-UjNSIHpi9&mime_type=video_mp4&qs=0&rc=Mzw5NjhnZWk1PDpnaDQ7Z0BpanVzNmc6ZnU8aTMzNzczM0A1NF9fNl80XmAxMF4zYTQ1YSM0MDBgcjRfZjNgLS1kMTZzcw%3D%3D&l=20230127165109DB3A631CA00867F6D43A&btag=80000";

export default function VideoPlayer() {
  return <video className={styles.video} src={SRC} controls={false} />;
}
