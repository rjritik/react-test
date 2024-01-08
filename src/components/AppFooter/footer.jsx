import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AppFooter = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col sm={12}>
            <p className="text-center">
              &copy; 2024 Your App. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;
