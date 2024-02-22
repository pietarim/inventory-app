import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import IssueForm from './Component/IssueForm'
import DetailedDevice from './Component/DetailedDecive'

function App() {
  const [devices, setDevices] = useState([])

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/devices')
        const data = response.data
        setDevices(data)
      } catch (error) {
        console.log('Failed to fetch devices', error)
      }
    }
    fetchDevices()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/device/:id" element={<DetailedDevice />} />
        <Route path="/" element={<IssueForm devices={devices} />} />
      </Routes>
    </Router>
  )
}

export default App
