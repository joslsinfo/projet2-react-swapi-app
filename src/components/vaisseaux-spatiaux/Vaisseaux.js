import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import VaisseauxSpatiauxService from "../../services/VaisseauxSpatiauxService";
import VaisseauxList from "../common/VaisseauxList";

const Vaisseaux = () => {
    const [vaisseauxData, setVaisseaux] = useState([]);
    const [loading, setLoading] = useState(true);

    const vaisseauxService = new VaisseauxSpatiauxService();

    useEffect( ()=> {
        async function getData() {
           const data = await vaisseauxService.getAllVS();
           setVaisseaux(data);
           setLoading(false);
        }
        getData();
    }, []);
    
    return ( 
        <Container>
            <VaisseauxList vaisseaux={vaisseauxData} titre={'Liste des vaisseaux spatiaux'} loader={loading} />
        </Container>
     );
}
 
export default Vaisseaux;