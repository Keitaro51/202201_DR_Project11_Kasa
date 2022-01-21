import {Link} from 'react-router-dom'
import logements from '../../datas/logements.json'
import './card.css'
//TODO key sur figuer? si oui, key sur enfants?
function Cards() {
    return (
        <div className="cardContainer">
            {logements.datas.map((logement) => (
                <Link to={`housing/${logement.id}`}>
                    <figure className="card">  
                        <img key={logement.id} src={`${logement.cover}`} alt={logement.title}/>
                        <figcaption key={logement.title}>{logement.title}</figcaption>
                    </figure>
                </Link>
            ))}
        </div>
    )
}

export default Cards