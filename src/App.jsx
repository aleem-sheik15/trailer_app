import { Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Latest from './components/Pages/Latest'
import About from './components/Pages/About'
import Trailer from './components/Pages/Trailer'
import Year from './components/Pages/Year'
import Footer from './components/Footer/Footer'
import { lazy, Suspense } from 'react'
import Geners from './components/Pages/Geners'

const Home = lazy(() => import("./components/Pages/Home"))
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <Suspense fallback={"Loading..."}>
            <Home />
          </Suspense>
        } />
        <Route path='/latest' element={<Latest />} />
        <Route path='/year' element={<Year />} />
        <Route path='/geners' element={<Geners/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/trailer'>
          <Route path=':trailerId' element={<Trailer />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
