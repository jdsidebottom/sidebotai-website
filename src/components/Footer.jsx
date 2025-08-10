import React from 'react'
import { Code, Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-1 mb-4">
              <img 
                src="https://rbhvcwzjvgatesivsxbb.supabase.co/storage/v1/object/public/assets/SidebotaiLogoIcon.png" 
                alt="Sidebot AI Logo" 
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold">
                <span className="text-secondary">Side</span><span className="text-white">bot</span> <span className="text-secondary">AI</span> <span className="text-white">Labs</span>
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Sidebot AI Labs LLC develops innovative software applications and provides expert 
              consulting services to help businesses bring their ideas to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@sidebot.ai" className="text-white/60 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Consulting</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Prototyping</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white/70">
                <Phone size={16} />
                <div>
                  <div>(844) 743-3268</div>
                  <div className="text-sm">(844) SIDEBOT</div>
                </div>
              </div>
              <div className="flex items-start space-x-2 text-white/70">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div>Sidebot AI Labs, LLC</div>
                  <div>3101 N. Central Ave, Ste 183 #6247</div>
                  <div>Phoenix, Arizona 85012</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Sidebot AI Labs, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
