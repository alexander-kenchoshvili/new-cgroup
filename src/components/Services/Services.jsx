import React from 'react'
import { useEffect } from 'react';
import Offer from '../home/offer/Offer';
import Sequence from '../home/sequence/Sequence';

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='service-section' >
        <Offer />
        <Sequence />
    </div>
  )
}

export default Services