import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import theme from './utils/theme'
import LandingPage from './pages/LandingPage'
import Ghana from './pages/countries/Ghana'
import './App.css'
import UK from './pages/countries/UK'
import USA from './pages/countries/USA'
import Navigation from './pages/Navigation'
import Other from './pages/countries/Other'
import BackButton from './pages/BackButton'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <BackButton />
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ghana" element={<Ghana />} />
          <Route path="/uk" element={<UK />} />
          <Route path="/usa" element={<USA />} />
          <Route path="/other" element={<Other />} />
          <Route path="*" element={<Ghana />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
