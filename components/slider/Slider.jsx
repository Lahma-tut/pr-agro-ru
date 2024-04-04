'use client'

import { useState } from 'react'
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { sliderList } from './data'
import Image from 'next/image'
import './slider.css'


export default function Slider() {
  const [index, setIndex] = useState(0)

  function handlePrevClick() {
    setIndex(index => {
      if (index === 0) return sliderList.length - 1
      return index - 1 
    })
  }
  
  function handleNextClick() {
    setIndex(index => {
      if (index === sliderList.length - 1) return 0
      return index + 1
    })
  }

  let slider = sliderList[index]

  return (
    <>
    <div className='slider-container'>
     
     <div className='slider-body'>
        <div className='slider-title'>
            <h1>{ slider.name }</h1>
          </div>
        <button className='slider-button'>ПОДРОБНЕЕ</button>
      </div>

    <div className='slider-image'>
        <Image
          src={slider.url}
          alt={slider.alt}
          fill
        />
      </div>
    
    <button 
      className='slider-btn left'
      onClick={handlePrevClick} 
      >
      <TfiAngleDoubleLeft />
      </button>

    <button 
      className='slider-btn right'
      onClick={handleNextClick}
      >
        <TfiAngleDoubleRight />
      </button>

    <div className='slider-dot'>
      { index + 1 } слайд из { sliderList.length }
      </div>
    
    </div>
    </>
  )
}