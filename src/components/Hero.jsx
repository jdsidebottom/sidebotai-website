import React from 'react'
import { ArrowRight, Code, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="glass rounded-3xl p-8 md:p-12 glass-hover animate-float">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src="https://rbhvcwzjvgatesivsxbb.supabase.co/storage/v1/object/public/assets/WhiteLogoTrans.png" 
                alt="Sidebot AI Logo" 
                className="w-[25px] h-[250px] md:w-[120px] md:h-[120px] animate-glow"

              />
              <Sparkles size={24} className="absolute -top-2 -right-2 text-secondary animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="text-gradient block">Software Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
            <span className="text-secondary">Side</span><span className="text-white/80">bot</span> <span className="text-secondary">AI</span> <span className="text-white/80">Labs</span> develops innovative software applications and provides expert consulting 
            services to help businesses and entrepreneurs bring their ideas to life through custom AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-secondary text-white rounded-xl hover:bg-secondary/80 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold">
              <span>Start Your Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 glass glass-hover text-white rounded-xl text-lg font-semibold">
              View Our Work
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="glass rounded-xl p-6 glass-hover">
              <div className="text-3xl font-bold text-primary mb-2">AI</div>
              <div className="text-white/80">Powered Solutions</div>
            </div>
            <div className="glass rounded-xl p-6 glass-hover">
              <div className="text-3xl font-bold text-secondary mb-2">∞</div>
              <div className="text-white/80">Scalable Technology</div>
            </div>
            <div className="glass rounded-xl p-6 glass-hover">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-white/80">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
