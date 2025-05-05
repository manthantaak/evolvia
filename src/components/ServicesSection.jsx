
import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, BarChart, Share2, Search, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'Build stunning, high-performance websites that drive results and elevate your brand.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Digital Marketing Strategy',
    description: 'Develop comprehensive strategies that drive growth and maximize your online presence.',
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: 'Social Media Management',
    description: 'Engage your audience with compelling content across all social media platforms.',
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic to your website.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Analytics & Reporting',
    description: 'Track performance metrics and gain insights to optimize your marketing efforts.',
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: 'Content Creation',
    description: 'Produce high-quality, engaging content that resonates with your target audience.',
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="gradient-text">Digital Marketing & Web</span> Services
          </h2>
          <p className="text-foreground/70">
            We offer a comprehensive suite of digital marketing and web development services designed to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <div className="mb-6 p-4 rounded-full bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.description}</p>
              <Button variant="ghost" className="text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                Learn More
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="gradient-bg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
