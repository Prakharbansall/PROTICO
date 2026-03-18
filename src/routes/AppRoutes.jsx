import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Company from '../pages/Company'
import Solutions from '../pages/Solutions'
import Legal from '../pages/Legal'
import Perspectives from '../pages/Perspectives'
import ReachUs from '../pages/ReachUs'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path='/perspectives' element={<Perspectives/>}/>
      <Route path='/reach-us' element={<ReachUs/>}/>
      <Route path="/legal" element={<Legal />} />
    </Routes>
  )
}

export default AppRoutes