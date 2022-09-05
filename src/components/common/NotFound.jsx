import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container fluid>
      <Container className="vh-100 d-flex justify-content-center align-items-center text-danger">
        <div className="text-center">
          <h1> Error 404! </h1>
          <p className="pb-3">The page you are looking for doesn't exist. </p>
          <Link className="titlePage-NotFound" to='/'>Aller à la page d'accueil </Link>
        </div>
      </Container>
    </Container>
  );
};

export default NotFound;
