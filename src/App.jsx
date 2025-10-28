import './App.css'
import NavBar from './components/header/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import Footer from './components/footer/footer'
import Banner from './components/hero/hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailsContainer from './components/itemDetailsContainer/itemDetailsContainer'

function App() {

  return (

    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Banner />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailsContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
