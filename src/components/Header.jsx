import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-0">
            <img 
              src="https://rbhvcwzjvgatesivsxbb.supabase.co/storage/v1/object/public/assets/OrangeLogoTrans.png" 
              alt="Sidebot AI Logo" 
              className="w-[150px] h-[150px] md:w-[50px] md:h-[50px]"
            />
            <div className="text-3xl font-bold">
              <span className="text-secondary">Side</span><span className="text-white">bot</span> <span className="text-secondary">AI</span> 
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-secondary transition-colors">Home</a>
            <a href="#features" className="text-white hover:text-secondary transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-secondary transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-secondary transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <a 
              href="tel:8447433268"
              className="px-4 py-2 text-white border border-white/30 rounded-lg glass-hover flex items-center space-x-2"
            >
              <span>(844) SIDEBOT</span>
            </a>
            <button className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors">
              Get Quote
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-secondary transition-colors">Home</a>
              <a href="#features" className="text-white hover:text-secondary transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-secondary transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-secondary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <a 
                  href="tel:8447433268"
                  className="px-4 py-2 text-white border border-white/30 rounded-lg glass-hover text-center"
                >
                  (844) SIDEBOT
                </a>
                <button className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors">
                  Get Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
