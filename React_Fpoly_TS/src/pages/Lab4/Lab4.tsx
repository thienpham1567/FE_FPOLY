import React from 'react';
import './Lab4.scss';
import dataLab1 from '../../dataLab1.json';
import {
  Col,
  Row,
  Container,
  Card,
  Table,
  Button,
  Form,
} from 'react-bootstrap';

const Lab4 = () => {
  return (
    <Container className="py-4">
      <Row>
        {dataLab1.map((user) => (
          <Col key={user.img}>
            <Card className="shadow d-flex gap-2 align-items-center justify-content-center">
              <h3>Fullname: {user.fullName}</h3>
              <img src={user.img} alt="" className="w-25" />
              <p>Birthday: {user.birthDay}</p>
              <p>Score:{user.score}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Table striped bordered hover variant="dark" className="mt-5">
        <thead>
          <tr>
            <th>Image</th>
            <th>Full name</th>
            <th>Birthday</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {dataLab1.map((user) => (
            <tr key={user.img}>
              <td>
                <img src={user.img} alt="" className="w-25" />
              </td>
              <td>
                <h3>Fullname: {user.fullName}</h3>
              </td>
              <td>
                <p>Birthday: {user.birthDay}</p>
              </td>
              <td>
                <p>Score:{user.score}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row>
        <Card className="shadow p-4 mt-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Chieu Dai</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Chieu Rong</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Chu Vi</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Dien Tich</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Row>

      <Row>
        <Card className="shadow p-4 mt-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ho Ten</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ngay Sinh</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Gioi Tinh</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>Gioi tinh</option>
                <option value="1">Nam</option>
                <option value="2">Nu</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Diem</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Hoc Luc</Form.Label>
              <Form.Control type="text" disabled />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default Lab4;
