import { useEffect } from 'react'
import emptyStar from '../../assets/emptyStar.svg'
import fullStar from '../../assets/fullStar.svg'

function Rating(notation){
    const mockNotation = 4
    const stars = Array.from(document.getElementsByClassName('star'))
    useEffect(()=>{
        stars.forEach((star, index)=>{
            if(index +1 <= mockNotation){
                star.setAttribute("src", `${fullStar}`)
            }
        })
    },[stars])
    
    
    return(
         <div className="notationContainer">
             <img src={`${emptyStar}`} className="star" alt=""/>
             <img src={`${emptyStar}`} className="star" alt=""/>
             <img src={`${emptyStar}`} className="star" alt=""/>
             <img src={`${emptyStar}`} className="star" alt=""/>
             <img src={`${emptyStar}`} className="star" alt=""/>
        </div>
    )
}

export default Rating