import './App.css'
import NavBar from './components/header/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import Footer from './components/footer/footer'
import Banner from './components/hero/hero'


function App() {

  return (

    <div className="app">
      <NavBar />
      
      <Banner />

      <ItemListContainer greeting={"Bienvenidos a la tienda de teclados y mouses"}/>

      <Footer />
    </div>
  )
}

export default App
