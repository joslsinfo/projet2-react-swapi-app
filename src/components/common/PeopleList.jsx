
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Loader from "./Loader";

const PeopleList = (props) => {

    const {people, titre, loader} = props;

    return ( 
        <Row>
        <h2 className="my-5">{titre}</h2>
        {loader && <Loader element={'personnages'} />}
        {people.map( (character, index) => (
            <Col md={6} key={index} className="align-left">
                <ListGroup>
                    <ListGroup.Item className="bg-light" href="#link1">
                        <Link className="title-people" to={`/people/${character.url.split('/').slice(-2, -1)[0]}`} >{character.name}</Link>
                        <p>{character.birth_year}</p>
                    </ListGroup.Item>
                </ListGroup>
                <br></br>
            </Col>
            ))
        }
        </Row>
     );
}
 
export default PeopleList;