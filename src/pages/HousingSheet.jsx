import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Logements from '../datas/logements.json'

import Slider from '../components/slider/slider'
import Tag from '../components/tag/tag'
import Rating from '../components/rating/rating'
import Dropdown from '../components/dropdown/dropdown'

function HousingSheet() {
  const [housing, setHousing] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    const currentHousing = Logements.datas.filter((logement)=>logement.id  === id)[0]
    setHousing(currentHousing)
}, []);

/*
{housing.tags.map((tag) => (
  <Tag tag={tag}/>        
  ))}
  */
 
 console.log(housing)
 
 return (
   <main className="housingContentContainer">
      <Slider />
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>
      <Rating notation={housing.rating}/>
      <Dropdown />
    </main>
  )
}

export default HousingSheet