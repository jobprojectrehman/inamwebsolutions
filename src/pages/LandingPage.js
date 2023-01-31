import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import {
  LandingNewProducts,
  LandingFeatureProduct,
  LandingShare,
  GoogleReviews,
} from '../components/landing'

const LandingPage = () => {
  const { sectionOne, sectionTwo, sectionThree } = useSelector(
    (state) => state.websiteContent
  )
  return (
    <>
      <Helmet>
        <title>{sectionOne?.heading}</title>
        <meta name='description' content={sectionOne?.paragraph} />
        <link rel='canonical' href='/' />
      </Helmet>
      <LandingShare landingPage={sectionOne} />
      <LandingFeatureProduct />
      <LandingShare landingPage={sectionTwo} />
      <LandingNewProducts />
      <LandingShare landingPage={sectionThree} />
      <GoogleReviews />
    </>
  )
}

export default LandingPage
