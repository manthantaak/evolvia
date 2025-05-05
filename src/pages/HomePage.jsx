
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Scene from '@/components/3d/Scene';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Scene />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </motion.div>
  );
};

export default HomePage;
