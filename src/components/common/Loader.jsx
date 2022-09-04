const Loader = (props) => {

    const {element} = props;

    return ( 
        <p className="text-warning">Chargement des {element} en cours veuillez patienter...</p>
     );
}
 
export default Loader;