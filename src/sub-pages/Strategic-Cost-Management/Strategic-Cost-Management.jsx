import React from 'react'
import HeroSection from "./HeroSection";
import "../Css/Pages.css"
import ChallengeSection from './ChallengeSection';
import WhyTrustAECS from './WhyTrustAECS';
import ServicesSection from './ServicesSection';
import ProjectExcellence from './ProjectExcellence';
import WhatMakesAECSDifferent from './WhatMakesAECSDifferent';
import ContactCTA from './Contact-CTA';

const SubStrategicCostManagement = () => {
  return (
    <div>
        <HeroSection/>
        <ChallengeSection/>
        <WhyTrustAECS/>
        <ServicesSection/>
        <ProjectExcellence/>
        <WhatMakesAECSDifferent/>
        <ContactCTA/>

      
    </div>
  )
}

export default SubStrategicCostManagement
