import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Logements from '../data/logements.json'

import Tag from '../components/tag/tag'
import Slider from '../components/slider/slider'
import Rating from '../components/rating/rating'
import Dropdown from '../components/dropdown/dropdown'

function HousingSheet() {
  const { id } = useParams()
  const [housing, setHousing] = useState(null)
  
  useEffect(() => {
    const currentHousing = Logements.data.filter((logement)=>logement.id  === id)[0]
    setHousing(currentHousing)
  }, [id]);
  
  if (!housing) {
    return (
      <div>Chargement en cours</div>
    )
  }

  return (
    <main className="housingContentContainer">
      <Slider gallery={housing.pictures}/>
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>
      <Tag tags={housing.tags} />
      <Rating notation={housing.rating} />

      <Dropdown title="Equipements" content={housing.equipments} />
      <Dropdown title="Description" content={[housing.description]} />
      
      
      
      
    </main>
  )
}

export default HousingSheet

/*


  */