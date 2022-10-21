import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
  <>
  <Navbar/>
  <ItemListContainer nombre="Gabriel" apellido="Slúsar"/>
  </>
  )
}
export default App