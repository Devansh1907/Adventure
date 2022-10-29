import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS FOR YOU</h1>
        <div className='hero-btn'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
              WATCH TRAILER
            </Button>
        </div>
    </div>
  )
}
