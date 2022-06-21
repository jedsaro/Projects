import {Container, Card} from 'semantic-ui-react'

export default function Invitados({tasks}) {

  console.log(tasks)

  return (
    <Container>
      {tasks.map(task => (
        <Card key={tasks._id}>
          <Card.Content>
            <Card.Header>{task.name}</Card.Header>
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
