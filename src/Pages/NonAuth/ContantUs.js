import React from 'react'
import MainBanner from '../../Components/NonAuth/ContactUs/MainBanner'
import Section02 from '../../Components/NonAuth/ContactUs/Section02'
import Testimonial from '../../UI/Sliders/TestimonialSlider/Testimonial'
import ScrollToTop from './ScrollToTop'

const ContantUs = () => {
  return (
    <>
      <ScrollToTop>
        <MainBanner />
        <Section02 />
        <Testimonial />
      </ScrollToTop>
    </>
  )
}

export default ContantUs