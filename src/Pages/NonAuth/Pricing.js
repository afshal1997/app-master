import React from 'react'
import MainBanner from '../../Components/NonAuth/Pricing/MainBanner'
import Section03 from '../../Components/NonAuth/Pricing/Section03'
import Testimonial from '../../UI/Sliders/TestimonialSlider/Testimonial'
import PricingTabs from '../../UI/Tabs/PricingTabs'
import ScrollToTop from './ScrollToTop'

const Pricing = () => {
    return (
        <>
            <ScrollToTop>
                <MainBanner />
                <PricingTabs />
                <Section03 />
                <Testimonial />
            </ScrollToTop>
        </>
    )
}

export default Pricing