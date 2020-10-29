import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ lives }) {
  return (
    <div>
      <Head>
        <title>이디어츠의 공연 목록</title>
        <meta property="og:title" content="이디어츠의 공연 목록" />
        <meta property="og:title" content="이디어츠의 공연 목록" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="og:description" content="밴드 이디어츠의 공연 목록입니다." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/logo.jpg`} />
      </Head>
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

export async function getServerSideProps({ req }) {
  console.log(process.env.NEXT_PUBLIC_URL)
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/live`)
  const lives = await res.json()
  return {
    props: {
      lives,
    },
  }
}
