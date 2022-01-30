import propTypes from "prop-types"

import './portrait.css'

function Portrait({author}){
    const firstName = author.name.split(" ")[0]
    const lastName = author.name.split(" ")[1]
    return(
        <div className="portraitContainer">
            <p>{firstName}<br/>{lastName}</p>
            <img src={author.picture} alt={`avatar de ${author.name}`} />
        </div>
    )
}

Portrait.propTypes = {
    author: propTypes.exact({
        name: propTypes.string,
        picture: propTypes.string
      })
}

export default Portrait