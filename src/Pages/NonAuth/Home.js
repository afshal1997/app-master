import React from 'react'
import MainBanner from '../../Components/NonAuth/Home/MainBanner'
import Section02 from '../../Components/NonAuth/Home/Section02'
import Section03 from '../../Components/NonAuth/Home/Section03'
import Section04 from '../../Components/NonAuth/Home/Section04'
import Testimonial from '../../UI/Sliders/TestimonialSlider/Testimonial'
import VideosSlider from '../../UI/Sliders/VideosSlider/VideosSlider'
import ScrollToTop from './ScrollToTop'

const Home = () => {
  return (
    <>
      <ScrollToTop>
        <MainBanner />
        <Section02 />
        <Section03 />
        <Section04 />
        <VideosSlider />
        <Testimonial />
      </ScrollToTop>
    </>
  )
}

export default Home