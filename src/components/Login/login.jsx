import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="login-form">
        <h1>Login / Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <div className="social-login mt-3">
          <p>Or login with:</p>
          <div>
            {/* Add social login icons and links */}
            <Button variant="light" className="me-2 text-danger">
              <i className="fab fa-google"></i> Google
            </Button>
            <Button variant="light" className="me-2 text-primary">
              <i className="fab fa-facebook"></i> Facebook
            </Button>
            <Button variant="light" className="text-dark">
              <i className="fab fa-github"></i> GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
