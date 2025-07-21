import React from 'react'
import Herosection from '../components/Herosection'
import SubSection1 from '../components/SubSection1'
import SubSection2 from '../components/SubSection2'
import SubSection3 from '../components/SubSection3'
import SubSection4 from '../components/SubSection4'
import SubSection5 from '../components/SubSection5'
import SubSection6 from '../components/SubSection6'
import Subsection7 from '../components/Subsection7'
const LandingPage = () => {
  return (
    <div className='bg-cream'>
      <div >
        <Herosection/>
        <SubSection1/>
        <SubSection2/>
        {/* <SubSection3/> */}
        {/* <SubSection4/> */}
        <SubSection5/>
        <SubSection6/>
        <Subsection7/>
      </div>
    </div>
  )
}

export default LandingPage
