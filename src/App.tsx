import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HeroContent from './components/HeroContent'
import ConcertCard from './components/ConcertCard'
import MonPassport from './components/pages/Monpasseport'
import MonPlanning from './components/pages/MonPlanning'
import Programme from './components/pages/programme'

function Home() {
  return (
    <>
      <HeroContent />
      <ConcertCard />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/planning" element={<MonPlanning />} />
        <Route path="/passport" element={<MonPassport />} />
      </Routes>
    </>
  )
}

export default App