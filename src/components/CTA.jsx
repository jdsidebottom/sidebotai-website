import React from 'react'
import { ArrowRight, Phone } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="glass rounded-3xl p-8 md:p-16 text-center glass-hover">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how our AI-powered solutions can transform your business. 
            Get expert guidance from concept to launch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 text-lg font-semibold">
              <span>Start Your Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="tel:8447433268"
              className="group px-10 py-4 glass glass-hover text-white rounded-xl text-lg font-semibold border-2 border-white/30 flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Call (844) SIDEBOT</span>
            </a>
          </div>
          
          <div className="glass rounded-xl p-6 max-w-md mx-auto">
            <p className="text-white/80 font-semibold mb-2">Contact Us</p>
            <p className="text-white/70 text-sm mb-1">(844) 743-3268 • (844) SIDEBOT</p>
            <p className="text-white/60 text-sm">Free consultation • Custom quotes available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
