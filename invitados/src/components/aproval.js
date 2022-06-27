import { Card, Transition} from "semantic-ui-react";
import { useEffect, useState } from "react";

export const ApprovalCard = (props) => {

  const [approval, setApproval] = useState(props.status);

  useEffect(()=>{
    setTimeout(() => {
      setApproval(false)
         }, 2000);
       },
   [])

  return (
    <Card>
      <Card.Content textAlign="center">
        <Card.Description>Mesa</Card.Description>
        <Card.Header><h1>{props.table}</h1></Card.Header>
      </Card.Content>
    </Card> 
    
  )
}
