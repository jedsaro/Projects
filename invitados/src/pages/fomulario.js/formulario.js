import { Form, Grid } from "semantic-ui-react";

export const formulario = () => {
  return (
    <Grid.Column centered verticalAlign="middle">
      <Form>
        <Form.Input label="Name" placeholder="Nombre" />
        <Form.Input label="Table" placeholder="Table" />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Grid.Column>
  )
}
