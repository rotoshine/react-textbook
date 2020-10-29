import { Helmet } from 'react-helmet'
import lives from './lives.json'
import styles from './App.module.css'

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="이디어츠의 공연 목록" />
        <meta property="og:title" content="이디어츠의 공연 목록" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="og:description" content="밴드 이디어츠의 공연 목록입니다." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/logo.jpg`} />
      </Helmet>
      <div className={styles.container}>
        {lives.map(live => (
          <div key={live._id} className={styles.card}>
            <img src={`https://idiots.roto.codes/${live.posters[0].url}`} />
            <div className={styles.content}>
              [{live.date}] {live.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
