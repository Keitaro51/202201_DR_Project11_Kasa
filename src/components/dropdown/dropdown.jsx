import propTypes from "prop-types"
import "./dropdown.css"


function Dropdown({title, content}){
    return(
        <section className={`dropDownContainer ${title}`}>
            <h2 onClick={handleClick}>{title}</h2>
            <ul>
            {content.map((element, index) => (
                <li key={title + index}>{element}</li>        
            ))}
            </ul>
        </section>
    )
}

Dropdown.propTypes = {
    title: propTypes.string,
    content: propTypes.arrayOf(propTypes.string)
}

function handleClick(e) {
    e.target.parentNode.classList.toggle('isActive')
}

export default Dropdown