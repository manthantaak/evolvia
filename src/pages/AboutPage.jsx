
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Calendar, Briefcase } from 'lucide-react';

const teamMembers = [
  {
    name: 'Manthan Taak',
    position: 'web developer',
    image: 'professional-male-ceo-portrait',
    bio: ' Creative and detail-oriented web developer with a passion for building responsive, user-friendly websites and applications.'
  } ,

  {
    name: 'Anuj Bohra',
    position: 'Digital Marketing Strategist',
    image: 'asian-female-creative-director-portrait',
    bio: 'Results-driven digital marketing specialist skilled in crafting data-backed strategies to boost online visibility and engagement'
  },
  {
    name: 'sarvesh',
    position: 'Digital Marketing Strategist',
    image: 'african-american-male-marketing-strategist',
    bio: 'sarvesh develops data-driven marketing strategies that deliver measurable results. His analytical approach ensures our clients achieve maximum ROI on their marketing investments.'
  },
  {
    name: 'Hardik Dalvi',
    position: 'Creative Director',
    image: 'latina-female-creative-director-portrait',
    bio: ' creative aspects of our projects, ensuring that every visual element aligns with our clients\' brand identity and marketing objectives.'
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Evolvia</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              We're a team of digital marketing experts and web development specialists dedicated to transforming how brands connect with their audiences in the digital world.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Founded in 2025 with a vision to revolutionize digital presence',
                'Specialized in combining web development with strategic marketing',
                'Trustable team of marketers, designers, and developers'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button className="gradient-bg">Our Services</Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img  
                  alt="Evolvia team working together" 
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card p-4 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Trustable</p>
                    <p className="text-xl font-bold">Agency</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        
        
        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-foreground/70">
              We're on a mission to revolutionize digital presence through innovative web development and strategic marketing approaches that deliver measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovate',
                description: 'We constantly push the boundaries of what\'s possible in digital marketing and web tech, exploring new approaches to help our clients stand out.'
              },
              {
                title: 'Transform',
                description: 'We transform traditional marketing strategies and websites into engaging experiences that captivate audiences and drive meaningful interactions.'
              },
              {
                title: 'Deliver',
                description: 'We\'re committed to delivering measurable results that impact our clients\' bottom line, focusing on ROI and long-term business growth.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl text-center"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Our diverse team of experts brings together skills in marketing, design, technology, and business strategy to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <div className="aspect-square">
                  <img  
                    alt={`${member.name}, ${member.position}`} 
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.position}</p>
                  <p className="text-sm text-foreground/70">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
