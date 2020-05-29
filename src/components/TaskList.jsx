import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faCheck,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ tasks, tasksCheck, tasksUncheck, taskDelete }) => {
  return (
    <>
      <div className="card-header-tab card-header">
        <h1 className="card-header-title font-size-lg text-capitalize font-weight-normal mb-5">
          <FontAwesomeIcon icon={faTasks} />
          &nbsp; Task List
        </h1>
      </div>
      <ListGroup className="listg">
        {tasks.map((task, index) => (
          <ListGroup.Item
            className="text-dark small text-left"
            key={index}
            index={index}
          >
            <div className="widget-content p-0">
              <Row className="widget-content-left">
                <Col xs="6" md="6" lg="6" className="widget-content-left">
                  <div
                    style={{
                      textDecoration: task.complete ? 'line-through' : '',
                    }}
                  >
                    {task.nametask}
                  </div>
                </Col>
                <Col
                  xs="6"
                  md="6"
                  lg="6"
                  className="widget-content-right text-right"
                >
                  {!task.complete ? (
                    <Button
                      variant="light"
                      className="border-0 btn-transition btn btn-outline-success"
                      onClick={() => tasksCheck(index)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </Button>
                  ) : (
                    <Button
                      variant="light"
                      className="border-0 btn-transition btn btn-outline-warning"
                      onClick={() => tasksUncheck(index)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </Button>
                  )}
                  <Button
                    variant="light"
                    className="border-0 btn-transition btn btn-outline-danger ml-2"
                    onClick={() => taskDelete(index)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </Col>
              </Row>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TaskList;
