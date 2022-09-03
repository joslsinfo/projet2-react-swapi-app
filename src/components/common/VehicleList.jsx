import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Loader from "./Loader";

const VehicleList = (props) => {

    const {vehicles, titre, loader } = props;

    return ( 
        <Row>
            <h2 className="my-5">{titre}</h2>
            {loader && <Loader element={'vehicules'} />}
            {vehicles.map((vehicle, index) => (
                <Col md={6} key={index+1} className="align-left">
                    <ListGroup>
                        <ListGroup.Item className="bg-light" href="#link1">
                            <Link className="title-link" to={`/vehicules/${vehicle.url.split('/').slice(-2, -1)[0]}`} >{vehicle.name}</Link>
                            <p>{vehicle.model}</p>
                        </ListGroup.Item>
                        <ListGroup.Item href="#link2">
                            <span>{vehicle.manufacturer}</span>
                        </ListGroup.Item>
                    </ListGroup>
                    <br></br>
                </Col>
            ))
            }
        </Row>
     );
}
 
export default VehicleList;