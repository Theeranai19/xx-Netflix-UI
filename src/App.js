import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainSection from './components/MainSection/MainSection'
import Section from './components/Section/Section'
import QuestionSection from './components/QuestionSection/QuestionSection'

import './App.css'

function App() {
  return (
    <div className='display'>
      <div className='main'>
        <Navbar />
        <MainSection />
      </div>
      <hr />
      <Section h1={'Enjoy on your TV'} p={'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'} img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'} />
      <hr />
      <Section h1={'Download your shows to watch offline'} p={'Save your favorites easily and always have something to watch.'} img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'} />
      <hr />
      <Section h1={'Watch everywhere'} p={'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'} img={''} />
      <hr />
      <Section h1={'Watch Create profiles for kids'} p={'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'} img={'https://occ-0-6116-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55'} />
      <hr />
      <QuestionSection />
    </div>
  )
}

export default App