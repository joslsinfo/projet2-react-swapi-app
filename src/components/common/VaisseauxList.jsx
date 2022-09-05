import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Loader from "./Loader";

const VaisseauxList = (props) => {

    const {vaisseaux, titre, loader} = props;

    const getUrlId = (url) => url.match(/\d+/).join("");

    return ( 
        <Row>
        <h2 className="my-5">{titre}</h2>
        {loader && <Loader element={'vaisseaux spatiaux'} />}
        {vaisseaux.map( (vaisseau, index) => (
            <Col md={6} key={index} className="align-left">
                <ListGroup>
                    <ListGroup.Item className="bg-light" href="#link1">
                        {/* <Link className="title-people" to={`/vaisseaux/${vaisseau.url.split('/').slice(-2, -1)[0]}`} >{vaisseau.name}</Link> */}
                        <Link className="title-link" to={`/vaisseaux/${getUrlId(vaisseau.url)}`} >{vaisseau.name}</Link>
                        <p>{vaisseau.model}</p>
                        <p>Cost in credits: {vaisseau.cost_in_credits}</p>
                        <p>Length: {vaisseau.length}</p>
                        <p>Passengers: {vaisseau.passengers}</p>
                        <p>Max atmosphering speed: {vaisseau.max_atmosphering_speed}</p>
                        <p>Hyperdrive rating: <em>{vaisseau.hyperdrive_rating}</em></p>
                    </ListGroup.Item>
                    <ListGroup.Item href="#link2">
                        <span>Made by: {vaisseau.manufacturer}</span>
                    </ListGroup.Item>
                </ListGroup>
                <br></br>
            </Col>
            ))
        }
        </Row>
     );
}
 
export default VaisseauxList;