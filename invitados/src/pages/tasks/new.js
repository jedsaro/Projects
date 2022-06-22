import { Button, Container, Form, Grid } from "semantic-ui-react";

import { useState } from "react";

export default function TaskFormPage() {

  const [newTask, setNewTask] = useState({
    name: "",
    table: "",
  });

  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = validate();

    if(Object.keys(errors).length) return setErrors(errors);

    await createInvitado()
  }

  const handleChange = (e) => setNewTask({
    ...newTask,
    [e.target.name]: e.target.value})

  const validate = () => {

    const errors = {}

    if (!newTask.name) errors.name = "Name is required"
    if (!newTask.table) errors.table = "Table is required"

    return errors;
    }
  

  const createInvitado = async(e) => {
    try{
      await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
    } catch(err){
      console.log("Valio dick", err);
    }
      
  }

  return (
    <Container centered>
    <Grid 
    centered 
    verticalAlign="middle" 
    colums="3" 
    style={{ height: "80vh" }}
    >

      <Grid.Row>
        <Grid.Column textAlign="center" >
          <h1>Agregar</h1>
          <Form onSubmit={handleSubmit}>
          <Form.Input 
            label="Name" 
            placeholder="Name"
            name="name"
            onChange={handleChange}
            error={errors.name ? { content:"Please enter a name", pointing: "below"}: null}/>
          <Form.Input 
            label="Table" 
            placeholder="Table" 
            name = "table"
            onChange={handleChange}
            error={errors.table ? { content:"Please enter a table number", pointing: "below",}: null}/>
          <Button primary>Submit</Button>
          </Form>  
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
  )
}
