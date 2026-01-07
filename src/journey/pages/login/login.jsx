import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
  <div className="d-flex justify-content-center align-items-center min-vh-100">
    <Card style={{ width: '30rem' }} className="mx-auto mt-5">
      <Row xs={1} md={1} className="g-2 p-3">
        <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />

            <div className="text-end">
              <Link to="/forgot-username" className="text-decoration-none">
                forgot your email?
              </Link>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />

            <div className="text-end">
              <Link to="/forgot-password" className="text-decoration-none">
                forgot your password?
              </Link>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="remember me" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </Row>
    </Card>
</div>
  );
}

export default LoginPage;