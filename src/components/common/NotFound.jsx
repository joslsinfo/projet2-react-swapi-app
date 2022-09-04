import React from "react";
import Container from "react-bootstrap/Container";

const NotFound = () => {
  return (
    <Container fluid>
      <Container className="vh-100 d-flex justify-content-center align-items-center text-danger">
        <h1 className="gy-3">Error 404! The page you are looking for doesn't exist.</h1> 
        
      </Container>
    </Container>
  );
};

export default NotFound;
