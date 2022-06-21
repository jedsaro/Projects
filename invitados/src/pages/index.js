import {Container, Card} from 'semantic-ui-react'
import styles from '../styles/Home.module.css'

export default function Home({tasks}) {

  console.log(tasks)

  return (
    <div>
      Taco
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
