import {Container, Card, Header} from 'semantic-ui-react'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function Home({tasks}) {

  console.log(tasks)

  return (
    <Header as='h1'>Fernanda 🥳</Header>
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
