import React from 'react'
import { Code, Brain, Rocket, Users, Cog, Lightbulb } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Code size={40} />,
      title: "Custom Software Development",
      description: "Tailored applications built with cutting-edge technology to meet your specific business requirements and goals."
    },
    {
      icon: <Brain size={40} />,
      title: "AI-Powered Solutions",
      description: "Integrate artificial intelligence into your business processes to automate tasks and gain competitive advantages."
    },
    {
      icon: <Users size={40} />,
      title: "Expert Consulting",
      description: "Strategic guidance from experienced developers to help you make informed decisions about your technology stack."
    },
    {
      icon: <Rocket size={40} />,
      title: "Rapid Prototyping",
      description: "Quickly transform your ideas into working prototypes to validate concepts and secure stakeholder buy-in."
    },
    {
      icon: <Cog size={40} />,
      title: "Scalable Architecture",
      description: "Build applications that grow with your business using modern, maintainable, and scalable technology solutions."
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation Focus",
      description: "Stay ahead of the curve with innovative approaches and emerging technologies that drive business success."
    }
  ]

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive software development and consulting services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const serviceIds = [
              'custom-development',
              'ai-solutions', 
              'consulting',
              'prototyping',
              'scalable-architecture',
              'innovation-focus'
            ];
            
            return (
              <div 
                key={index}
                id={serviceIds[index]}
                className="glass rounded-2xl p-8 glass-hover group cursor-pointer"
              >
                <div className="text-primary mb-4 group-hover:text-secondary transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
