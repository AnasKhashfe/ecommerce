import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
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
        element = {<CheckoutPage />}
      />

      <Route 
        path = "Orders" 
        element = {<OrdersPage />}
      />

      <Route 
        path = "Tracking" 
        element = {<TrackingPage />}
      />
      
      
    </Routes>
  )
}

export default App
