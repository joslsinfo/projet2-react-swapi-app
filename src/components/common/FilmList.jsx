import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Loader from "./Loader";


const FilmList = (props) => {

    const {films, titre, loader} = props;

    const getUrlId = (url) => url.match(/\d+/).join("");
    
    return ( 
        <Row>
            <h2 className="my-5">{titre}</h2>
            {loader && <Loader element={'films'} />}
            {films.map((film) => (
                <Col md={6} key={film.episode_id} className="align-left">
                    <ListGroup>
                        <ListGroup.Item className="bg-light" href="#link1">
                            {/* <Link className="title-link" to={`/films/${film.url.split('/').slice(-2, -1)[0]}`} >{film.title}</Link> */}
                            <Link className="title-link" to={`/films/${getUrlId(film.url)}`} >{film.title}</Link>
                            <p>{film.episode_id}th film</p>
                           
                        </ListGroup.Item>
                        <ListGroup.Item href="#link2">
                            <span>Release on: {film.release_date}</span>
                        </ListGroup.Item>
                    </ListGroup>
                    <br></br>
                </Col>
            ))
            }
        </Row>
     );
}
 
export default FilmList;