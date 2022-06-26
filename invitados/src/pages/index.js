import React, { useState, useRef, useEffect } from 'react';
import {Card, Container, Header, Input, Image} from 'semantic-ui-react'
import {Navbar} from '../components/navbar'

export default function Home({tasks}) {

  const [invitado, setInvitado] = useState(
    {
      name: "",
      table: "",
    }
  );

  const [input, setInput] = useState('')

  const [list, setList] = useState('')

  const inputReference = useRef(null)

  const resetpointer = () => {
  useEffect(() => {
    inputReference.current.focus();
  }, []);
  }

  const deleteinput = () => {
    useEffect(() => {
      inputReference.current.value = '';
    }, []);
    }

  //const [checkIn, setcheckIn] = useState(false)

  const handleChange = (e) => {

    const result = tasks.find(task => task.name === e.target.value)

    if(result != undefined){
      
      setInvitado({
        name: result.name,
        table: result.table,
        invited: result.status,
      })
      setList(true)
      console.log("This is a result" + result.name)
    }
    else{
      setList(false)
  }
}

  return (
    <>

    {resetpointer()}

    <Navbar/>
    <Header as='h1' textAlign='center' dividing='true' >Fernanda 🥳</Header>
    <Container>

      <Image hidden src='./Dancing.gif' size='large' centered/>

      <Card centered>
      <Input placeholder='Buscar...' ref={inputReference} onChange={handleChange} hidden/>

        <Card.Content>
          <Card.Header centered><h2>{invitado.name}</h2></Card.Header>
          <Card.Meta centered><h4>Mesa: {invitado.table}</h4></Card.Meta>
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
