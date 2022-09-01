import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FilmsService from '../../services/FilmsService';
import CharactersService from '../../services/CharactersService';
import useGetData from '../../utilitaires/useGetData';
import PeopleList from '../common/PeopleList';
import VaisseauxSpatiauxService from '../../services/VaisseauxSpatiauxService';
import VehiclesService from '../../services/VehiclesService';
import VaisseauxList from '../common/VaisseauxList';
import VehicleList from '../common/VehicleList';

const FilmDetails = () => {

    const {id} = useParams();

    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);

    const filmService = new FilmsService();
    const charactersService = new CharactersService();
    const vaisseauxService = new VaisseauxSpatiauxService();
    const vehicleService = new VehiclesService();

    useEffect( ()=> {
        async function getDataById() {
           const data = await filmService.getFilmById(id);
           setFilm(data);
           setLoading(false);
        }
        getDataById();
        
    }, []);

    const characters = useGetData(
        charactersService.getCharacterById,
        film?.characters
    );

    const vaisseaux = useGetData(
        vaisseauxService.getVSById,
        film?.starships
    );

    const vehicles = useGetData(
        vehicleService.getVehicleById,
        film?.vehicles
    );
    

    return ( 
        <Container>
            <h2 className="my-5">Détails Film</h2>
            <Row>
                <h1>{film.title}</h1>
                <p>{film.opening_crawl}</p>
            </Row>
            <PeopleList people={characters} titre={'People'} loader={loading} />
            <VaisseauxList vaisseaux={vaisseaux} titre={'StarShips'} loader={loading} />
            <VehicleList vehicles={vehicles} titre={'Vehicles'} loader={loading} />
        </Container>
     );
}
 
export default FilmDetails;