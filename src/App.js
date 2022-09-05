import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/Navbar';
import NotFound from './components/common/NotFound';

import Films from './components/films/Films';
import FilmDetails from './components/films/FilmDetails';
import People from './components/personnages/People';
import PeopleDetails from './components/personnages/PeopleDetails';
import Vehicules from './components/vehicules/Vehicles';
import VehicleDetails from './components/vehicules/VehicleDetails';
import Vaisseaux from './components/vaisseaux-spatiaux/Vaisseaux';
import VaisseauDetails from './components/vaisseaux-spatiaux/VaisseauDetails';


function App() {
  return (
     
    <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Films />} />
              <Route path="/films" element={<Films />} />
              <Route path="/films/:id" element={<FilmDetails />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/:id" element={ <PeopleDetails />} />
              <Route path="/vehicules" element={ <Vehicules />} />
              <Route path="/vehicules/:id" element={ <VehicleDetails />} />
              <Route path="/vaisseaux" element={ <Vaisseaux />} />
              <Route path="/vaisseaux/:id" element={ <VaisseauDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
        </div>
    
  );
}

export default App;
