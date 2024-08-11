"use client"

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h2 className='hero__title'>
                Find, book, or rent a car -- quickly and easily!
            </h2>
            <p className='hero__subtitle'>
                Streamline your car rental experience with our effortless booking process
            </p>
            <CustomButton 
            title="Explore Cars"
            containerStyle="bg-primary-blue text-white rounded-full mt-10 hover:bg-white hover:border-primary-blue 
            hover:text-primary-blue duration-300 border-2 font-bold"
            handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt='hero' fill className='object-contain' />
                <div className='hero__image-overlay' />
            </div>
        </div>
        
    </div>
  )
} 

export default Hero