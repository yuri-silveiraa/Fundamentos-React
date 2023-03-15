import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import MostViewed from './pages/MostViewed'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/most-viewed' element={<MostViewed/>} />
        </Routes>
    )
}