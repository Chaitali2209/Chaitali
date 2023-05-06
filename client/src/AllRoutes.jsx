import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import { DetectPCOS } from './components/DetectPCOS'
import Detection from './pages/Detection'
import { YogaPlanner } from './components/YogaPlanner'
import {DietPlanner} from './components/DietPlanner'
import { MailchimpForm } from "./components/MailchimpForm";
import {PeriodTracker} from "./components/PeriodTracker"
const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/predict' element={<DetectPCOS/>} />
            <Route path='/detection' element={<Detection />} />
            <Route path='/yoga' element={<YogaPlanner />} />
            <Route path='/diet' element={<DietPlanner />} />
            <Route path='/consult' element={<MailchimpForm />} />
            <Route path='/periodTracker' element={<PeriodTracker />} />
        </Routes>
    </Router>
  )
}

export default AllRoutes