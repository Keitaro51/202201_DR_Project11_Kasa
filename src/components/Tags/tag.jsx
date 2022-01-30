import propTypes from "prop-types"

import './tag.css'

function Tag({tags}){
    return(
    <ul className="tagContainer">
        {tags.map((tag, index) => (
            <li key={tag + index}>{tag}</li>
        ))}
       
    </ul>
   )
}

Tag.propTypes = {
    tags: propTypes.arrayOf(propTypes.string)
}

export default Tag