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

export default Tag