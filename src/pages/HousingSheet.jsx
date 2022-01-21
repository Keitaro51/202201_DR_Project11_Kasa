import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Logements from '../datas/logements.json'

import Slider from '../components/slider/slider'
import Tag from '../components/tag/tag'
import Rating from '../components/rating/rating'
import Dropdown from '../components/dropdown/dropdown'

function HousingSheet() {
  const { id } = useParams()
  const [housing, setHousing] = useState({})

  useEffect(() => {
    const currentHousing = Logements.datas.filter((logement)=>logement.id  === id)[0]
    setHousing(currentHousing)
}, [id]);

console.log(housing)
  
  return (
    <React.Fragment>
      <Slider />
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>

      {housing.tags.map((tag) => (
        <Tag tag={tag}/>
      ))}
      <Rating />

      <Dropdown />
    </React.Fragment>
  )
}

export default HousingSheet