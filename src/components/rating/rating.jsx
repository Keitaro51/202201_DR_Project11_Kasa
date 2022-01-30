import propTypes from "prop-types"

import emptyStar from '../../assets/emptyStar.svg'
import fullStar from '../../assets/fullStar.svg'

import '../Rating/rating.css'

function Rating({notation}){
    
    return(
         <div className="notationContainer">
            {Array(5).fill().map((_,index)=>
                <img key={'star'+index} src={index < parseInt(notation, 10) ? fullStar : emptyStar} className="star" alt=""/>
            )}             
        </div>
    )
}

Rating.propTypes = {
    notation: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ])
}

export default Rating
