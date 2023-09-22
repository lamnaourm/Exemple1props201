

function Personne({image, nom}) {
    return <div>
        <img src={image} alt="" />
        <h1>{nom}</h1>
    </div>;
}

export default Personne;