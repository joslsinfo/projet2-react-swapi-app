class FilmsService {

    url = "https://swapi.dev/api/films";

	async getAllFilms() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();	
			console.log(data.results);
			return data.results;
		} catch (e) {
			console.error(e);
        }
	}

	async getFilmById(id) {
		try {
			const response = await fetch(`https://swapi.dev/api/films/${id}`);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();		
			return data;
		} catch (e) {
			console.error(e);
        }
	}
}
 
export default FilmsService;