import {Link} from 'react-router-dom'
import logements from '../../data/logements.json'
import './card.css'

function Cards() {
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
            <div className="card item-empty"></div>
        </div>
    )
}

export default Cards