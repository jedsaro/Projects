import { Menu, Container, Button } from "semantic-ui-react";
import {useRouter} from 'next/router'

export const Navbar = () => {

  const router = useRouter()

  return(
    <Menu inverted boarderless attached>
    <Container>
      <Menu.Item as="/favicon.ico" header>
       Invitados
      </Menu.Item>
      <Menu.Item position="center">
        
        <Button primary size="mini" onClick={() => alert('works')}>
          Home
        </Button>
      </Menu.Item>
    </Container>
    </Menu>
  )
};
