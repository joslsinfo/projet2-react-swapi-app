import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FilmsService from '../../services/FilmsService';
import useGetData from '../../utilitaires/useGetData';

import FilmList from '../common/FilmList';
import PeopleList from '../common/PeopleList';

import VaisseauxSpatiauxService from '../../services/VaisseauxSpatiauxService';
import CharactersService from '../../services/CharactersService';


const VaisseauDetails = () => {
    const {id} = useParams();

    const [vaisseau, setVaisseau] = useState({});
    const [loading, setLoading] = useState(true);

    const filmService = new FilmsService();
    const charactersService = new CharactersService();
    const vaisseauxService = new VaisseauxSpatiauxService();


    useEffect( ()=> {
        async function getDataById() {
           const data = await vaisseauxService.getVSById(id);
           setVaisseau(data);
           setLoading(false);
        }
        getDataById();
        
    }, []);

    const films = useGetData(
        filmService.getFilmById,
        vaisseau?.films
    );

    const characters = useGetData(
        charactersService.getCharacterById,
        vaisseau?.pilots
    );
    

    return ( 
        <Container>
            <h2 className="my-5">Détails Vaisseau Spatial</h2>
            <Row>
                <h1>{vaisseau.name}</h1>
                <p>{vaisseau.model}</p>
            </Row>
            <FilmList films={films} titre={'Films'} loader={loading} />
            <PeopleList people={characters} titre={'Pilots'} loader={loading} />
        </Container>
    );
}
 
export default VaisseauDetails;