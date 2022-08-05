import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Toolbar} from '../components/toolbar'

export default function Home() {
  return (
    <div className='page-container'>
      <Toolbar/>
      <div className={styles.main}>
      <h1>News App</h1>
      </div>
      
    </div>
  )
}
