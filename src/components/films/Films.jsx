import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import FilmList from "../common/FilmList";
import FilmsService from "../../services/FilmsService";

const Films = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    const filmService = new FilmsService();

    useEffect( ()=> {
        async function getData() {
           const data = await filmService.getAllFilms();
           setFilms(data);
           setLoading(false);
        }
        getData();
    }, []);
    
    return ( 
        <Container>
            <FilmList films={films} titre={'Liste des films'} loader={loading} />
        </Container>
     );
}
 
export default Films;