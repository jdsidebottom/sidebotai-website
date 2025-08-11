import React from 'react'
import { Users, Target, Award, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">Sidebot AI</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            [PLACEHOLDER: Insert company overview and mission statement here. Describe what Sidebot AI is, when it was founded, and your core mission in the software development and AI consulting space.]
          </p>
        </div>

        {/* Our Story Section */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Our <span className="text-gradient">Story</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              [PLACEHOLDER: Tell the story of how Sidebot AI was founded. Include details about the founders, what inspired the creation of the company, early challenges, and key milestones in your journey.]
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              [PLACEHOLDER: Describe your evolution from startup to current state. Mention key projects, client successes, team growth, and how your services have expanded over time.]
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              [PLACEHOLDER: Share your vision for the future, upcoming goals, and how you plan to continue serving clients in the evolving tech landscape.]
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass rounded-2xl p-8 text-center glass-hover">
              <div className="text-primary mb-4 flex justify-center">
                <Target size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-white/70">
                [PLACEHOLDER: Describe your commitment to innovation and staying ahead of technology trends.]
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center glass-hover">
              <div className="text-primary mb-4 flex justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-white/70">
                [PLACEHOLDER: Explain your approach to working closely with clients and team collaboration.]
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center glass-hover">
              <div className="text-primary mb-4 flex justify-center">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-white/70">
                [PLACEHOLDER: Describe your commitment to delivering high-quality solutions and exceeding expectations.]
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center glass-hover">
              <div className="text-primary mb-4 flex justify-center">
                <Lightbulb size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Creativity</h3>
              <p className="text-white/70">
                [PLACEHOLDER: Explain how creativity drives your problem-solving approach and solution design.]
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed text-center mb-8">
            [PLACEHOLDER: Introduce your team members. Include brief bios, roles, expertise areas, and what each person brings to Sidebot AI.]
          </p>
          
          {/* Team Member Cards - Add as many as needed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6 text-center glass-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">[PHOTO]</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">[FOUNDER/CEO NAME]</h3>
              <p className="text-secondary mb-3">Founder & CEO</p>
              <p className="text-white/70 text-sm">
                [PLACEHOLDER: Brief bio and background of founder/CEO]
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center glass-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">[PHOTO]</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">[TEAM MEMBER NAME]</h3>
              <p className="text-secondary mb-3">[ROLE/TITLE]</p>
              <p className="text-white/70 text-sm">
                [PLACEHOLDER: Brief bio and background of team member]
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center glass-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">[PHOTO]</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">[TEAM MEMBER NAME]</h3>
              <p className="text-secondary mb-3">[ROLE/TITLE]</p>
              <p className="text-white/70 text-sm">
                [PLACEHOLDER: Brief bio and background of team member]
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="glass rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Why Choose <span className="text-gradient">Sidebot AI</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Experience & Expertise</h3>
              <p className="text-white/70 mb-6">
                [PLACEHOLDER: Highlight your years of experience, technical expertise, and industry knowledge.]
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-white/70 mb-6">
                [PLACEHOLDER: Mention successful projects, client satisfaction rates, and notable achievements.]
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-white/70 mb-6">
                [PLACEHOLDER: Describe your use of latest technologies, AI integration, and modern development practices.]
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">Client-Focused Approach</h3>
              <p className="text-white/70">
                [PLACEHOLDER: Explain your client-first philosophy, communication style, and commitment to understanding client needs.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
