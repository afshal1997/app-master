import React from 'react'
import MainBanner from '../../Components/NonAuth/Audit/MainBanner'
import Section01 from '../../Components/NonAuth/Audit/Section01'
import Section04 from '../../Components/NonAuth/Home/Section04'
import Testimonial from '../../UI/Sliders/TestimonialSlider/Testimonial'
import ScrollToTop from './ScrollToTop'

const Audit = () => {
  return (
    <div className='auditPage'>
      <ScrollToTop>
        <MainBanner />
        <Section01 />
        <Section04 />
        <Testimonial />
      </ScrollToTop>
    </div>
  )
}

export default Audit