import {Link} from 'react-router-dom'
import logements from '../../data/logements.json'
import './card.css'
//TODO key sur figuer? si oui, key sur enfants?
function Cards() {
    console.log("test")
    return (
        <div className="cardContainer">
            {logements.data.map((logement) => (
                <Link to={`housing/${logement.id}`} key={logement.id}>
                    <figure className="card">  
                        <img src={`${logement.cover}`} alt={logement.title}/>
                        <figcaption>{logement.title}</figcaption>
                    </figure>
                </Link>
            ))}
        </div>
    )
}

export default Cards