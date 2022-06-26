import {Container, Card, Button} from 'semantic-ui-react'
import { useRouter } from 'next/router'

export default function Invitados({tasks}) {

  const router = useRouter();

  return (
    <Container>

      <h1>Invitados</h1>
      {tasks.map(task => (
        <Card key={tasks._id}>
          <Card.Content>
            <Card.Header><h2>{task.name}</h2></Card.Header>
            <Card.Meta><h4>Mesa: {task.table}</h4></Card.Meta>
            <Card.Description>
              <h4>{task.status ? 'Pachangeando ✅' : 'No ah llegado ❌'}</h4>
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Button onClick={()=> router.push(`/tasks/${task._id}`)}>MEH</Button>
          </Card.Content>
        </Card>)
        )}
    </Container>
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
