import React, { useState, useEffect } from 'react';
import {Container, Header} from 'semantic-ui-react'
import {QrReader} from 'react-qr-reader';
import {Navbar} from '../components/navbar'
import {ApprovalCard} from '../components/aproval'

export default function Home({tasks}) {

  const [data, setData] = useState();

  //const [checkIn, setcheckIn] = useState(false)


  const verify = () => {

    const result = tasks.find((name) => tasks.name === data);

    console.log(result.name)

    if(result.name === data)
    {
      return(
        <ApprovalCard name = {result.name}/>
      )
    }
    
  }

  return (
    <>
    <Navbar/>
    <Header as='h1' textAlign='center' dividing='true'>Fernanda 🥳</Header>
    <Container>
      <QrReader
        onResult={(result, error) => {

          if (!!result) {
            setData(result?.text);
            verify({data});
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{width: '100%'}}
      />

      </Container>
    </>
  )
}


export const getStaticProps = async(ctx) => {
  
  const res = await fetch('http://localhost:3000/api/tasks')

  const tasks = await res.json()

  return {
    props: {
      tasks,
    },
  }
}
