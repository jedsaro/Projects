import React, { useState, useRef, useEffect } from 'react';
import {Card, Container, Header, Input, Image} from 'semantic-ui-react'
import {Navbar} from '../components/navbar'

export default function Home({tasks}) {

  const [invitado, setInvitado] = useState(
    {
      id: "",
      name: "",
      table: "",
      status: "",
    }
  );

  //const [input, setInput] = useState('')

  const [list, setList] = useState(false)

  const inputReference = useRef(null)

  useEffect(() => {
    inputReference.current.focus();
  });

  //const [checkIn, setcheckIn] = useState(false)

  const updateInvitado = async() => {
    try{
      await fetch("http://localhost:3000/api/tasks", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invitado),
      })
    } catch(err){
      console.log("Valio dick", err);
    }
  }


  const handleChange = (e) => {

    const result = tasks.find(task => task.name === e.target.value)

    if(result != undefined){
      
      setInvitado({
        id: result._id,
        name: result.name,
        table: result.table,
        status: result.status,
      })

      setList(true)
      
      updateInvitado();
    }
}

  return (
    <>
    <Navbar/>

    <Header as='h1' textAlign='center' dividing='true' >Fernanda 🥳</Header>
    <Container>

      <Image src='./Dancing.gif' size='large' centered/>

      <Card centered>

      <Input  placeholder='Buscar...' ref={inputReference} onChange={handleChange} hidden/>
        <Card.Content>
          <Card.Header><h2>{invitado.name}</h2></Card.Header>
            <Card.Description> <h4>Mesa: {invitado.table}</h4> </Card.Description>
            {list ? <Card.Meta>Pachangeando ✅</Card.Meta> : <Card.Meta>No ah llegado ❌</Card.Meta>}

          </Card.Content>  
        </Card>
    </Container>
    </>
  )
}

export const getServerSideProps = async(ctx) => {
  
  const res = await fetch('http://localhost:3000/api/tasks')

  const tasks = await res.json()

  return {
    props: {
      tasks,
    },
  }
}
