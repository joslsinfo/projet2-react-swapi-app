import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/Navbar';

import Films from './components/films/Films';
import FilmDetails from './components/films/FilmDetails';
import People from './components/personnages/People';
import PeopleDetails from './components/personnages/PeopleDetails';
import Vehicules from './components/vehicules/Vehicles';
import VehicleDetails from './components/vehicules/VehicleDetails';
import Vaisseaux from './components/vaisseaux-spatiaux/Vaisseaux';
import VaisseauDetails from './components/vaisseaux-spatiaux/VaisseauDetails';
import SignUp from './auth/components/SignUp';
import SignIn from './auth/components/SignIn';

import AuthService from './auth/service/auth-service';
import { useDispatch } from "react-redux";
import ProtectedRoute from './utilitaires/ProtectedRoute'
import { getAuthStatus } from './redux/authSlice';
import { useEffect } from "react";
import { Container } from 'react-bootstrap';

function App() {

  const authService = new AuthService();
  const dispatch = useDispatch();

  const getState = () => {
    authService.onAuthChange(async (state) => {
      if (state) {
        await dispatch(getAuthStatus(state.auth.currentUser.email));
        console.log(state);
      } else {
        await dispatch(getAuthStatus(undefined));
      }
    })
  };
  
  useEffect( () => {
    getState();
  }, [dispatch]);

  return (
        <BrowserRouter>
        <div className="App">
        <Container>
            <NavBar />
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/films" element={
                <ProtectedRoute>
                  <Films />
                </ProtectedRoute>
              } />
              <Route path="/films/:id" element={
                <ProtectedRoute>
                  <FilmDetails />
                </ProtectedRoute>
              } />
              <Route path="/people" element={
                <ProtectedRoute>
                  <People />
                </ProtectedRoute>
              } />
              <Route path="/people/:id" element={
                <ProtectedRoute>
                  <PeopleDetails />
                </ProtectedRoute>
              } />
              <Route path="/vehicules" element={
                <ProtectedRoute>
                  <Vehicules />
                </ProtectedRoute>
              } />
              <Route path="/vehicules/:id" element={
                <ProtectedRoute>
                  <VehicleDetails />
                </ProtectedRoute>
              } />
              <Route path="/vaisseaux" element={
                <ProtectedRoute>
                  <Vaisseaux />
                </ProtectedRoute>
              } />
              <Route path="/vaisseaux/:id" element={
                <ProtectedRoute>
                  <VaisseauDetails />
                </ProtectedRoute>
              } />
              <Route path="/inscription" element={ <SignUp />} />
              <Route path="/connexion" element={ <SignIn />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
  );
}

export default App;
