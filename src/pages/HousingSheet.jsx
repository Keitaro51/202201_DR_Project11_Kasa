import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Logements from '../data/logements.json'

import Slider from '../components/slider/slider'
import Tag from '../components/tag/tag'
import Rating from '../components/rating/rating'
import Dropdown from '../components/dropdown/dropdown'

function HousingSheet() {
  const { id } = useParams()
  const [housing, setHousing] = useState({})
  
  useEffect(() => {
    const currentHousing = Logements.data.filter((logement)=>logement.id  === id)[0]
    setHousing(currentHousing)
  }, []);
  
  /*
  <Dropdown title="Equipements" content={housing.equipments}/>
  {housing.tags.map((tag) => (
    <Tag tag={tag}/>        
    ))}
    */
   console.log(housing.tags[0])
   
   return (
     <main className="housingContentContainer">
     <Slider gallery={housing.pictures}/>
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>
      
      <Dropdown title="Description" content={housing.description} />
      <Rating notation={housing.rating}/>
    </main>
  )
}

export default HousingSheet