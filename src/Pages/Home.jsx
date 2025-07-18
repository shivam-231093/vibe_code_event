import React from 'react'
import HeroSection from '../components/HeroSection'
import CountdownTimer from '../components/CountdownTimer'
import Flow from '../components/Flow'
import RulesAndRewards from '../components/RulesAndRewards'
import ScrollFloat from '../components/ScrollFloat'

const Home = () => {
  return (<div className='ms:mx-6 mx-3 flex flex-col gap-6'>
    <HeroSection />
    
    <CountdownTimer />
    <Flow />
    <RulesAndRewards />
  </div>
  )
}

export default Home