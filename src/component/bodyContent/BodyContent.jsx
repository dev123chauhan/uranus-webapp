import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from "../images/sun.jpg"
import "./bodycontent.css"
export default function BodyContent() {
  
  return (
    <>
      <div className="animation-container">
        <img className='w-100 rotate-infinite' src={image} alt='' />
      </div>
      <Container>
        <Row className='mb-5'>
          <Col className='text-white'>
            $URANUS
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='text-white'>
            Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on Saturday, January 27, then retrogrades again on Sunday, September 1. This suggests ongoing evolution in your home life and personal growth.
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='text-white'>
            Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='text-white'>
            In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius.
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='text-white'>
            So, we are slowly moving into a new age, from Pisces to Aquarius. Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs
          </Col>
        </Row>

        <Row className='mb-5'>
        <Col>
          <ul>
            <li className='text-white'>Everyone Loves to Pump Uranus more than they like when Uranus Dumps.</li>
            <li className='text-white'>The liquidity injections just keep coming into Uranus.</li>
            <li className='text-white'>Don't pass gas (it's gonna be giant)</li>
            <li className='text-white'>Hold onto Uranus!</li>
            <li className='text-white'>Disclaimer: This is all in good fun - a blend of memes, astrology, and crypto. We will not go to the moon, we're going to Uranus.</li>
          </ul>
          </Col>
        </Row>
      </Container>
    </>

  )
}
