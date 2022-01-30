import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Logements from '../../data/logements.json'

import Slider from '../../components/Slider/slider'
import Tag from '../../components/Tags/tag'
import Rating from '../../components/Rating/rating'
import Portrait from '../../components/Portrait/portrait'
import Dropdown from '../../components/Dropdown/dropdown'

import './housingSheet.css'

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
      <div className="infoWrapper">
        <Rating notation={housing.rating} />
        <Portrait author={housing.host}/>
      </div>
      <Dropdown title="Description" content={[housing.description]} />
      <Dropdown title="Equipements" content={housing.equipments} />
    </main>
  )
}

export default HousingSheet