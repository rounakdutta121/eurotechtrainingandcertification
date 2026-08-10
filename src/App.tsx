import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { RoboticWelding } from './pages/RoboticWelding'
import { CeMark } from './pages/CeMark'
import { PlumbingTraining } from './pages/PlumbingTraining'
import { WeldingTraining } from './pages/WeldingTraining'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { About } from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="robotic-welding-course" element={<RoboticWelding />} />
          <Route path="ce-mark" element={<CeMark />} />
          <Route path="plumbing-training" element={<PlumbingTraining />} />
          <Route path="welding-training-courses" element={<WeldingTraining />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
