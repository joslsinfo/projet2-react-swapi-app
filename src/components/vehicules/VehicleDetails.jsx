import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import FilmsService from '../../services/FilmsService';
import CharactersService from '../../services/CharactersService';
import VehiclesService from '../../services/VehiclesService';

import FilmList from "../common/FilmList";
import useGetData from '../../utilitaires/useGetData';
import PeopleList from '../common/PeopleList';

const VehicleDetails = () => {

    const {id} = useParams();

    const [vehicle, setVehicle] = useState({});
    const [loading, setLoading] = useState(true);

    const filmService = new FilmsService();
    const charactersService = new CharactersService();
    const vehicleService = new VehiclesService();

    useEffect( ()=> {
        async function getDataById() {
           const data = await vehicleService.getVehicleById(id);
           setVehicle(data);
           setLoading(false);
        }
        getDataById();
    }, []);

    const films = useGetData(
        filmService.getFilmById,
        vehicle?.films
    );

    const pilots = useGetData(
        charactersService.getCharacterById,
        vehicle?.pilots
    );
    

    return ( 
        <Container>
            <h2 className="my-5">Détails véhicules</h2>
            <Row>
                <h2 className='text-center'>{vehicle.name}</h2>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Cargo Capacity</td>
                            <td>{vehicle.cargo_capacity}</td>
                        </tr>
                        <tr>
                            <td>Consumables</td>
                            <td>{vehicle.consumables}</td>
                        </tr>
                        <tr>
                            <td>Cost In Credit</td>
                            <td>{vehicle.cost_in_credits}</td>
                        </tr>
                        <tr>
                            <td>Crew</td>
                            <td>{vehicle.crew}</td>
                        </tr>
                        <tr>
                            <td>Max Atmosphering Speed</td>
                            <td>{vehicle.max_atmosphering_speed}</td>
                        </tr>
                        <tr>
                            <td>Passengers</td>
                            <td>{vehicle.passengers}</td>
                        </tr>
                        <tr>
                            <td>Vehicle class</td>
                            <td>{vehicle.vehicle_class}</td>
                        </tr>
                    </tbody>
                </Table>
                <FilmList films={films} titre={'Films'} loader={loading} />
                <PeopleList people={pilots} titre={'Pilots'} loader={loading} />
            </Row>
        </Container>
    )
}
 
export default VehicleDetails;