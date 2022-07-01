import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  Container,
  Input,
  Image,
  Transition,
} from "semantic-ui-react";
import { Navbar } from "../components/navbar";
import { ApprovalCard } from "components/aproval";
//import { Search } from 'components/search';

export default function Home({ tasks }) {
  const [invitado, setInvitado] = useState({
    id: "",
    name: "",
    table: "",
    status: "",
  });

  const [input, setInput] = useState("");

  const [list, setList] = useState(false);

  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  });

  //const [checkIn, setcheckIn] = useState(false)

  const handleChange = (e) => {

    setInput(e.target.value);

    const result = tasks.find((task) => task.name === e.target.value);

    if (result != undefined) {
      setInvitado({
        //id: result._id,
        name: result.name,
        table: result.table,
      });

      setList(true);

      setInput("");
      //await updateInvitado();
    }
  };

  return (
    <>
      <Navbar />

      <Container>
        <Image key="{image}"src="./inverted-dance.gif" size="large" centered />

        <Card centered>
          <Input key="{input}"ref={inputReference} onChange={handleChange} value={input} />

          <Card.Content>
            <Card.Header key="{header}" textAlign="center">
              <h1>{invitado.name}</h1>
            </Card.Header>

            <Transition key="{transç}" visible={list} animation="scale" duration={1000}>
              <ApprovalCard
                name={invitado.name}
                table={invitado.table}
                status={list}
              />
            </Transition>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/tasks");

  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
};
