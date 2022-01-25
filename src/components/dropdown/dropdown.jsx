import "../dropdown/dropdown.css"
//TODO trouveer clé unique
function Dropdown({title, content}){
    return(
        <section className="dropDownContainer">
            <h2 onClick={handleClick}>{title}</h2>
            <ul>
            {content.map((elt) => (
                <li key="1">{elt}</li>        
            ))}
            </ul>
        </section>
    )
}

function handleClick(e) {
    e.target.parentNode.classList.toggle('isActive')
}

export default Dropdown