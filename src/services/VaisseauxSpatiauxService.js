class VaisseauxSpatiauxService {

    url = "https://swapi.dev/api/starships";

	async getAllVS() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();	
			return data.results;
		} catch (e) {
			console.error(e);
        }
	}

	async getVSById(id) {
		try {
			const response = await fetch(`https://swapi.dev/api/starships/${id}`);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();		
			return data;
		} catch (e) {
			console.error(e);
        }
	}
}
 
export default VaisseauxSpatiauxService;