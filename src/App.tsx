import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import FLCGhana from 'pages/countries/Ghana-FLC'
import Australia from 'pages/countries/Australia'
import './App.css'
import Switzerland from 'pages/countries/Switzerland'
import Kenya from 'pages/countries/Kenya'
import UK from './pages/countries/UK'
import USA from './pages/countries/USA'
import Navigation from './pages/Navigation'
import Other from './pages/countries/Other'
import BackButton from './pages/BackButton'
import Ghana from './pages/countries/Ghana'
import Nigeria from './pages/countries/Nigeria'
import LandingPage from './pages/LandingPage'
import theme from './utils/theme'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <BackButton />
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/online" element={<Other />} />
          <Route path="/ghana" element={<Ghana />} />
          <Route path="/nigeria" element={<Nigeria />} />
          <Route path="/uk" element={<UK />} />
          <Route path="/usa" element={<USA />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/switzerland" element={<Switzerland />} />
          <Route path="/kenya" element={<Kenya />} />
          <Route path="flc-ghana" element={<FLCGhana />} />
          <Route path="*" element={<Ghana />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
