'use client'

import './slider.css'
import { useState } from 'react'
import { TfiAngleDoubleLeft } from 'react-icons/tfi'
import { TfiAngleDoubleRight } from 'react-icons/tfi'
import { RxDot } from 'react-icons/rx'
import { RxDotFilled } from 'react-icons/rx'
import { sliderList } from './data'
import Image from 'next/image'

export default function Slider() {
  const [indexImg, setIndex] = useState(0)

  // переключение слайдера назад
  function handlePrevClick() {
    setIndex(index => {
      if (index === 0) return sliderList.length - 1
      return index - 1
    })
  }

  // переключение слайдера вперед
  function handleNextClick() {
    setIndex(index => {
      if (index === sliderList.length - 1) return 0
      return index + 1
    })
  }

  // автозапуск переключений слайдера
  // setTimeout(handlePrevClick, 5000)

  let slider = sliderList[indexImg]

  return (
    <div className='slider-container'>
      <div className='slider-body'>
        <div className='slider-title'>
          <h1>{slider.name}</h1>
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
        {
          sliderList.map((_, index) => (
            <button
              key={index}
              className='slider-dot-btn'
              onClick={() => setIndex(index)}
            >
              {index === indexImg ? <RxDotFilled /> : <RxDot />}
            </button>
          ))
        }
      </div>
    </div>
  )
}