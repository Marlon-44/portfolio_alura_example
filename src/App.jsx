import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Title from './components/Title'
import CardSection from './components/CardSection'
import { SkillsContext, SkillsProvider } from './context/SkillsContext'
import { HobbiesContext, HobbiesProvider } from './context/HobbiesContext'

function App() {
  const {skills} = useContext(SkillsContext)
  const {hobbies} = useContext(HobbiesContext)
  return (
    <>
      <Header/>
      <Banner/>
      <AboutMe/>
      <CardSection text='Skills' topicArray={skills} />
      <CardSection text='Hobbies' topicArray={hobbies}/>
      
    </>
  )
}

export default App
