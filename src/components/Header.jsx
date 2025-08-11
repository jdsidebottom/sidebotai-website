import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-0">
            <img 
              src="https://rbhvcwzjvgatesivsxbb.supabase.co/storage/v1/object/public/assets/WhiteLogoTrans.png" 
              alt="Sidebot AI Logo" 
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]"
            />

            <div className="text-3xl font-bold">
              <span className="text-secondary">Side</span><span className="text-white">bot</span> <span className="text-secondary">AI</span> 
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
            <a href="#features" className="text-white hover:text-secondary transition-colors">Services</a>
            <Link to="/about" className="text-white hover:text-secondary transition-colors">About</Link>
            <a href="#contact" className="text-white hover:text-secondary transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <a 
              href="tel:18447433268"
              className="px-4 py-2 text-white border border-white/30 rounded-lg glass-hover flex items-center space-x-2"
            >
              <span>1 (844) SIDEBOT</span>
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
              <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
              <a href="#features" className="text-white hover:text-secondary transition-colors">Services</a>
              <Link to="/about" className="text-white hover:text-secondary transition-colors">About</Link>
              <a href="#contact" className="text-white hover:text-secondary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <a 
                  href="tel:18447433268"
                  className="px-4 py-2 text-white border border-white/30 rounded-lg glass-hover text-center"
                >
                  1 (844) SIDEBOT
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
