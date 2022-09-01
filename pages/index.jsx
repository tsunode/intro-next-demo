import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import background from './assets/background-404-bottom.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Teste</h1>
      <Image src={background} alt="" />
    </div>
  )
}
