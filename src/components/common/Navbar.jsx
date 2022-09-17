import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../../redux/authSlice';
import AuthService from "../../auth/service/auth-service";

const NavBar = () => {
    const auth = new AuthService();
    let location = useLocation();
    const url = location.pathname;
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);

    const logOut = async () => {
        try {
            await auth.logout();
            dispatch(logoutUser(undefined))
            console.log("user signed out");
        } catch (error) {
            console.log("error", error);
        };
    }
    return (
        <nav>
            <h1 className="app-logo">Star Wars App</h1>
            { user &&
                <ul className="liens">
                    <li>
                        <Link className={`${url.includes('films') ? 'active' : ''} lien`} to={'/films'}>Films</Link>
                    </li>
                    <li>
                        <Link className={`${url.includes('people') ? 'active' : ''} lien`} to={'/people'}>Personnages</Link>
                    </li>
                    <li>
                        <Link className={`${url.includes('vehicules') ? 'active' : ''} lien`} to={'/vehicules'}>Vehicules</Link>
                    </li>
                    <li>
                        <Link className={`${url.includes('vaisseaux') ? 'active' : ''} lien`} to={'/vaisseaux'}>Vaisseaux Spatiaux</Link>
                    </li>
                    <li>
                        <span className='lien text-dark'>{user}</span>
                    </li>
                    <li>
                        <Link className='lien text-dark' to="#" onClick={logOut}>Deconnexion</Link>
                    </li>
                </ul>
            }
            { !user && 
                <ul className="liens">
                    <li>
                        <Link className={`${url.includes('connexion') ? 'active' : ''} lien`} to={'/connexion'}>Login</Link>
                    </li>
                    <li>
                        <Link className={`${url.includes('inscription') ? 'active' : ''} lien`} to={'/inscription'}>Inscription</Link>
                    </li>
                </ul>
            }
        </nav>
    );
}

export default NavBar;