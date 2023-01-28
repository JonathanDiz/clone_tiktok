const VIDEOS = [
  {
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "sonido de suegra bellaca",
    albumCover: "suegra2.0", 
    src: "https://v16-webapp.tiktok.com/00f77db8d49e815d50f245101f712d6a/63d455ba/video/tos/useast2a/tos-useast2a-pve-0068/oAYmaQOPjbBZx7eMBaeDQlntEzARrctUIwbRJJ/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2676&bt=1338&cs=0&ds=3&ft=IecA0oofD12NvRluBZIxRIBSrlJG-UjNSIHpi9&mime_type=video_mp4&qs=0&rc=Mzw5NjhnZWk1PDpnaDQ7Z0BpanVzNmc6ZnU8aTMzNzczM0A1NF9fNl80XmAxMF4zYTQ1YSM0MDBgcjRfZjNgLS1kMTZzcw%3D%3D&l=20230127165109DB3A631CA00867F6D43A&btag=80000"
  },
  {
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "la suegra contraataca",
    albumCover: "suegra2.0", 
    src: "https://v16-webapp.tiktok.com/1519400db15af3a723046b443fd36f03/63d45598/video/tos/useast2a/tos-useast2a-ve-0068c001/osIcQdhgSsA8cDfedmjazob0cvnHCCYR7AfHsH/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1780&bt=890&cs=0&ds=3&ft=IecA0oofD12NvRluBZIxRIBSrlJG-UjNSIHpi9&mime_type=video_mp4&qs=0&rc=aDg1ODZkO2hmZGg3ZWhnM0BpanB2bWY6ZnF5aTMzNzczM0A0NDJiMTE2XmMxYDMwLl8tYSNncTVxcjRfazVgLS1kMTZzcw%3D%3D&l=20230127165109DB3A631CA00867F6D43A&btag=80000&__vid=TT-vCache-7192809220406791430"
  },
  {
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra revenge",
    albumCover: "suegra2.0", 
    src: "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/o8C4ANYbRjDliJB2BnntjYeUegFrQALI9GTPQE~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1674882000&x-signature=PGyVEWhDaCUzFTLEO2UE1%2FpX%2FZg%3D"
  },
  {
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra reload",
    albumCover: "suegra2.0", 
    src: "https://v16-webapp.tiktok.com/00f77db8d49e815d50f245101f712d6a/63d455ba/video/tos/useast2a/tos-useast2a-pve-0068/oAYmaQOPjbBZx7eMBaeDQlntEzARrctUIwbRJJ/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2676&bt=1338&cs=0&ds=3&ft=IecA0oofD12NvRluBZIxRIBSrlJG-UjNSIHpi9&mime_type=video_mp4&qs=0&rc=Mzw5NjhnZWk1PDpnaDQ7Z0BpanVzNmc6ZnU8aTMzNzczM0A1NF9fNl80XmAxMF4zYTQ1YSM0MDBgcjRfZjNgLS1kMTZzcw%3D%3D&l=20230127165109DB3A631CA00867F6D43A&btag=80000"
  },
  {
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra fuera de la matrix",
    albumCover: "suegra2.0", 
    src: "https://v16-webapp.tiktok.com/16a7b018ec943346aa857da7237ddfdb/63d4b321/video/tos/useast2a/tos-useast2a-ve-0068c003/oIfKDBAeAIZXTRQQ6FEyLDUzTTMHnb8BJcrjhL/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1890&bt=945&cs=0&ds=3&ft=-ElcommRPD12NLQA68-UxHcvSYKt3wv25rcAV&mime_type=video_mp4&qs=0&rc=aWZkPDQ4OjU2OTs6OmZkM0BpamV2bmU6ZmttaTMzNzczM0AvLjBhMGFeXy4xYzFeNTQtYSM2LTRycjRvLjJgLS1kMTZzcw%3D%3D&l=20230127232941CCFFE7240375D236B40E&btag=80000"
  },
  {
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra interestelar",
    albumCover: "suegra2.0", 
    src: "https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c004/os3jQBWOMAYDQRr3QIeebxJnbbA2tisDBEBpuU/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2208&bt=1104&cs=0&ds=3&ft=-Csk_mmRPD12NKJA68-Uxeo2mYKt3wv25ocAV&mime_type=video_mp4&qs=0&rc=aDhpaTVlNmg4OmVlZDUzO0BpM3V3cjQ6ZjlmZzMzNzczM0A0YC1gYGBjXmExNmJfMmNfYSNjYS1xcjRvX2tgLS1kMTZzcw%3D%3D&btag=80000&expire=1674884022&l=20230127233209E449CC3700D7F13742B8&ply_type=2&policy=2&signature=0bd94485724eb66a4ed21cea2f10317c&tk=tt_chain_token"
  },
  {
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "suegra en pijama",
    albumCover: "suegra2.0", 
    src: "https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c004/owHtYf03AoCIFzPGUwGgrvGwHvhC6xdkoQATIE/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2912&bt=1456&cs=0&ds=3&ft=-Csk_mmRPD12NKJA68-Uxeo2mYKt3wv25ocAV&mime_type=video_mp4&qs=0&rc=Zmc6ZjtmaTtpNDg8ZDU0OUBpMzkza2k6Zm9raTMzNzczM0AtLjEvYGIwXzMxL2JfYjBjYSNsMTNrcjRvaDZgLS1kMTZzcw%3D%3D&btag=80000&expire=1674883970&l=20230127233209E449CC3700D7F13742B8&ply_type=2&policy=2&signature=740ebca2d2809e89f0231160022ed705&tk=tt_chain_token"
  },
  {
    author: "misuegraenpijama",
    description: "es hora de la cena",
    likes: "3000",
    shares: "333",
    songTitle: "lo que callan las suegras",
    albumCover: "suegra2.0", 
    src: "https://v16-webapp.tiktok.com/78a62eed1520dfd962cfb834480e91d9/63d4b3ba/video/tos/useast2a/tos-useast2a-ve-0068c001/o4xakAR9lA8IOAfIIg4UXXrQF6CIo6NHkKxzhm/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1022&bt=511&cs=0&ds=3&ft=4b~OyMMQ8Zmo0.45764jVzCBZpWrKsdm&mime_type=video_mp4&qs=0&rc=OjhoNmlmNDllZWg2ZzplNEBpM3Y2bzs6Zmx2aTMzNzczM0BiMjMzNS5iXjMxNC5jLzEuYSNnZW1ycjRnXjVgLS1kMTZzcw%3D%3D&l=20230127233218B049E0CC8A8381394C50&btag=80000"
  }
]

export default function FeedVideos () {

}