const Loader = (props) => {

    const {element} = props;

    return ( 
        <p className="text-warning">Chargement des {element} en cours veillez patientez...</p>
     );
}
 
export default Loader;