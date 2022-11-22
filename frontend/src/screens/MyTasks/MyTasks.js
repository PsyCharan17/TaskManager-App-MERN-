import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import {
  Accordion,
  AccordionCollapse,
  Badge,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MyTasks = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };

  const fetchTasks = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <MainScreen title="Welcome back Casc">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Task
        </Button>
      </Link>
      <div style={{ width: "90vw", marginRight: "10vw" }}>
        {notes.map((note) => (
          <Accordion key={note._id} defaultActiveKey={["0"]}>
            <Accordion.Item eventkey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex", flex: 1 }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Button as={Card.Text} variant="link">
                      {note.title}
                    </Accordion.Button>
                  </span>
                  <div>
                    <Button href={`/mytasks/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <AccordionCollapse>
                  <Card.Body>
                    <h4>
                      <Badge bg="success">Category - {note.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created on - Date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </AccordionCollapse>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </MainScreen>
  );
};

export default MyTasks;
