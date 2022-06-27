import React, { useState, useRef, useEffect } from 'react';
import {Card, Container, Header, Input, Image, Transition} from 'semantic-ui-react'
import {Navbar} from '../components/navbar'
import { ApprovalCard } from 'components/aproval';
import { Search } from 'components/search';

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

  const reservation = () => {
    setList(true)
  }

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

  const handleChange = async (e) => {

    const result = tasks.find(task => task.name === e.target.value)

    if(result != undefined){
      
      setInvitado({
        id: result._id,
        name: result.name,
        table: result.table,
        status: result.status,
      })

      setList(true)
      
      await updateInvitado();
    }
}

  return (
    <>
    <Navbar/>

    <Header as='h1' textAlign='center' dividing='true' >Fernanda 🥳</Header>
    <Container>

      <Image src='./Dancing.gif' size='large' centered/>

      <Card centered>
      <Input  placeholder='Buscar...' ref={inputReference} onChange={handleChange}/>

        <Card.Content>
          <Card.Header textAlign="center">
            <h1>{invitado.name}</h1>
          </Card.Header>

          <Transition visible={list} animation='scale' duration={700}>

            <ApprovalCard name={invitado.name} table={invitado.table} status={list}/>

          </Transition>


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
