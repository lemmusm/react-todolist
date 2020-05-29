import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  // SEND TASK
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    addTask(task);
    setTask(''); // clean form
  };

  // CAPTURE VALUE FROM FIELD AND SET ON STATE
  const handleChange = (evnt) => {
    setTask(evnt.target.value);
  };

  return (
    <>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Insert your task"
            value={task}
            onChange={handleChange}
          />
          <Button variant="warning" className="mt-3" type="submit">
            Add task
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddTaskForm;
