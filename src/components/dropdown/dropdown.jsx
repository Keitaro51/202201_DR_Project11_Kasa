import "../dropdown/dropdown.css"

function Dropdown({title, content}){
    return(
        <section className="dropDownContainer">
            <h2 onClick={handleClick}>{title}</h2>
            <ul>
            {content.map((element, index) => (
                <li key={title + index}>{element}</li>        
            ))}
            </ul>
        </section>
    )
}

function handleClick(e) {
    e.target.parentNode.classList.toggle('isActive')
}

export default Dropdown