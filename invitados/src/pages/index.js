import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({tasks}) {

  console.log(tasks)

  return (
    <div className={styles.container}>
      Tu MAMA
    </div>
  )
}

export const getStaticProps = async(ctx) => {
  
  const res = await fetch('http://localhost:3000/api/tasks')

  const tasks = await res.json()

  console.log(tasks)
  
  return {
    props: {
      tasks,
    },
  }
}
