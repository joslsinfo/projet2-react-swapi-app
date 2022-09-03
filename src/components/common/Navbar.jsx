import { Link,  useLocation } from 'react-router-dom';

const NavBar = () => {
    
    let location = useLocation();
    const url = location.pathname;

    return ( 
        <nav>
            <h1 className="app-logo">Star Wars App</h1>
            <ul className="liens">
                <li>
                    <Link className={`${url.includes('films') ? 'active' : ''} lien`} to={'/films'}>Films</Link>
                </li>
                <li>
                    <Link className={`${url.includes('people') ? 'active' : ''} lien`} to={'/people'}>Personnages</Link>
                </li>
                <li>
                    <Link className={`${url.includes('vehicules') ? 'active' : ''} lien`} to={'/vehicules'}>Véhicules</Link>
                </li>
                <li>
                    <Link className={`${url.includes('vaisseaux') ? 'active' : ''} lien`} to={'/vaisseaux'}>Vaisseaux Spatiaux</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default NavBar;