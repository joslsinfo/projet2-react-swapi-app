

class CharactersService {

    url = "https://swapi.dev/api/people";

	async getAllCharacters() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();
			return data.results;
		} catch (e) {
			console.error(e);
        }
	}

	async getCharacterById(id) {
		try {
			const response = await fetch(`https://swapi.dev/api/people/${id}`);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();		
			return data;
		} catch (e) {
			console.error(e);
        }
	}
}
 
export default CharactersService;