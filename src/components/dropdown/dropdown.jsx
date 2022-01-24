import "../dropdown/dropdown.css"

function Dropdown({title, content}){
    return(
        <section className="valuesContainer">
            <h2 onClick={handleClick}>{title}</h2>
            <p>{content}</p>
        </section>
    )
}

function handleClick(e) {
    e.target.parentNode.classList.toggle('isActive')
}

export default Dropdown