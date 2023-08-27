import { useState } from 'react'
import ScrollToTop from "./components/ScrollToTop";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop />
    </>
  )
}

export default App
