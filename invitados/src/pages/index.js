import {Container, Card, Header} from 'semantic-ui-react'
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {Navbar} from '../components/navbar'

export default function Home({tasks}) {
  const [data, setData] = useState();

  return (
    <>
    <Navbar></Navbar>
    <Header as='h1' textAlign='center' dividing='true'>Fernanda 🥳</Header>
    <Container>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{width: '100%'}}
      />

      <p>{data}</p>
      </Container>
    </>
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
