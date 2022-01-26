import emptyStar from '../../assets/emptyStar.svg'
import fullStar from '../../assets/fullStar.svg'

function Rating({notation}){
    return(
         <div className="notationContainer">
            {Array(5).fill().map((_,index)=>
                <img key={'star'+index} src={index < parseInt(notation, 10) ? fullStar : emptyStar} className="star" alt=""/>
            )}             
        </div>
    )
}

export default Rating
