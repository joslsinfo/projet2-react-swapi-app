import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import FilmsService from '../../services/FilmsService';
import CharactersService from '../../services/CharactersService';
import VehiclesService from '../../services/VehiclesService';

import FilmList from "../common/FilmList";
import VehicleList from '../common/VehicleList';

import useGetData from '../../utilitaires/useGetData';

const PeopleDetails = () => {
    const {id} = useParams();

    const [person, setPerson] = useState({});
    const [loading, setLoading] = useState(true);

    const filmService = new FilmsService();
    const charactersService = new CharactersService();
    const vehicleService = new VehiclesService();

    useEffect( ()=> {
        async function getDataById() {
           const data = await charactersService.getCharacterById(id);
           setPerson(data);
           setLoading(false);
        }
        getDataById();
    }, []);

    const films = useGetData(
        filmService.getFilmById,
        person?.films
    );

    const vehicles = useGetData(
        vehicleService.getVehicleById,
        person?.vehicles
    );

console.log(vehicles);
    

    return ( 
        <Container>
            <h2 className="my-5">Personnage</h2>
            <Row>
                <h2 className='text-center'>{person.name}</h2>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Birth Year</td>
                            <td>{person.birth_year}</td>
                        </tr>
                        <tr>
                            <td>Eye Color</td>
                            <td>{person.eye_color}</td>
                        </tr>
                        <tr>
                            <td>Hair Color</td>
                            <td>{person.hair_color}</td>
                        </tr>
                        <tr>
                            <td>Mass</td>
                            <td>{person.mass}</td>
                        </tr>
                        <tr>
                            <td>Skin Color</td>
                            <td>{person.skin_color}</td>
                        </tr>
                    </tbody>
                </Table>
                <FilmList films={films} titre={'Films'} loader={loading} />
                <VehicleList vehicles={vehicles} titre={'Vehicles'} loader={loading} />
            </Row>
        </Container>
     );
}
 
export default PeopleDetails;