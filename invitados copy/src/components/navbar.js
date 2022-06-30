import { Menu, Container, Button } from "semantic-ui-react";
import { useRouter } from "next/router";

export const Navbar = () => {

  const router = useRouter();

  return (
    <Menu inverted borderless attached>
      <Container>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary size="large" color="violet" onClick={() => router.push('/invitados')}>
              Invitados
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>      
  )
}
