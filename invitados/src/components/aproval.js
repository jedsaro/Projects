import { Card, CardHeader } from "semantic-ui-react";


export const ApprovalCard = (props) => {

  return (
    <Card>
      <Card.Content content = "Center">
        <CardHeader><h1>Approved</h1></CardHeader>
        <CardHeader>{props.name}</CardHeader>
      </Card.Content>
    </Card>
  )
}
