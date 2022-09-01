

class VehiclesService {

    url = "https://swapi.dev/api/vehicles/";

	async getAllVehicles() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();	
			return data.results;
		} catch (e) {
			console.error(e);
        }
	}

	async getVehicleById(id) {
		try {
			const response = await fetch(`https://swapi.dev/api/vehicles/${id}`);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();		
			return data;
		} catch (e) {
			console.error(e);
        }
	}
}
 
export default VehiclesService;