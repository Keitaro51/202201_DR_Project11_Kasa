function Tag({tags}){
    
    return(
    <div className="tagContainer">
        {tags.map((tag, index) => (
            <div key={tag + index}>{tag}</div>
        ))}
       
    </div>

    
   )

}

export default Tag