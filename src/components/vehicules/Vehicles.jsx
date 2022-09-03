import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import VehiclesService from "../../services/VehiclesService";
import VehicleList from "../common/VehicleList";

const Vehicles = () => {

    const [vehiclesData, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    const vehicleService = new VehiclesService();

    useEffect( ()=> {
        async function getData() {
           const data = await vehicleService.getAllVehicles();
           setVehicles(data);
           setLoading(false);
        }
        getData();
    }, []);

    return ( 
        <Container>
            {vehiclesData && <VehicleList vehicles={vehiclesData} titre={'Liste des véhicules'} loader={loading} />}
        </Container>
     );
}
 
export default Vehicles;