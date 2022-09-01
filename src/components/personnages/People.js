import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import CharactersService from "../../services/CharactersService";
import PeopleList from "../common/PeopleList";

const Poeple = () => {
    const [peopleData, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    const characterService = new CharactersService();

    useEffect( ()=> {
        async function getData() {
           const data = await characterService.getAllCharacters();
           setPeople(data);
           setLoading(false);
        }
        getData();
    }, []);
    
    return ( 
        <Container>
            <PeopleList people={peopleData} titre={'Liste des personnages'} loader={loading} />
        </Container>
     );
}
 
export default Poeple;