import './App.css'
import NavBar from './components/header/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
function App() {

  return (

    <div className="app">
      <NavBar />

      <ItemListContainer greeting={"Bienvenidos a la tienda de teclados y mouses"}/>
    </div>
  )
}

export default App
