import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import './App.css'



function App() {
  

  return (
    <Routes>
      <Route 
        index /*path = "/" Do the same thing as index prop but index prop is a shortcut*/ 
        element = {<HomePage />}
      />
      
      <Route 
        path = "checkout" 
        element = {<div>Test checkout page</div>}
      />
      
      
    </Routes>
  )
}

export default App
