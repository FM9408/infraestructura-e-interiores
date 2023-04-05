import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import Part1 from '../pages/part1/part1'
import CharacterDetail from '../pages/part1/characterDetails'
import Part2 from '../pages/part2/part2'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/parte1' element={<Part1 />} />
            <Route path='/:id/details' element={<CharacterDetail />} />
            <Route path='/parte2' element={<Part2 />} />
        </Routes>
    )
}