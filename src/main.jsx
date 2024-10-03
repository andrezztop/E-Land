import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Card from './Components/OrgCard/Card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 flex items-center justify-center relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="/fondo.jpg" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full max-w-md z-10 relative">
            <Card />
          </div>
        </main>
      </div>
    </div>
  </StrictMode>,
)