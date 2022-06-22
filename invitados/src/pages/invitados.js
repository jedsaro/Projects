import {Container, Card} from 'semantic-ui-react'

export default function Invitados({tasks}) {

  return (
    <Container>
      <h1>Invitados</h1>
      {tasks.map(task => (
        <Card key={tasks._id}>
          <Card.Content>
            <Card.Header>{task.name}</Card.Header>
            <Card.Meta>Mesa: {task.table}</Card.Meta>
            <Card.Description>
              {task.status ? 'Invitado' : 'No invitado'}
            </Card.Description>
          </Card.Content>
        </Card>)
        )}
    </Container>
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
