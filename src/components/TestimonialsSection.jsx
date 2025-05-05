
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Marketing Director, TechCorp',
    image: 'professional-woman-marketing-director',
    quote: 'DigitalSphere transformed our online presence with their innovative 3D marketing approach. Our engagement rates increased by 200% within just three months!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    position: 'CEO, Innovate Solutions',
    image: 'asian-male-ceo-business-portrait',
    quote: 'The 3D visualizations created by DigitalSphere helped us explain our complex products in a way that resonated with customers. Our conversion rates have never been higher.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    position: 'Brand Manager, Lifestyle Brands',
    image: 'latina-woman-brand-manager-professional',
    quote: 'Working with DigitalSphere has been a game-changer for our brand. Their strategic approach to digital marketing has helped us reach new audiences we never thought possible.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    position: 'Founder, StartUp Ventures',
    image: 'african-american-male-entrepreneur-founder',
    quote: 'As a startup, we needed to make a big impact with limited resources. DigitalSphere delivered beyond our expectations, creating a digital presence that rivals much larger competitors.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  
};

export default TestimonialsSection;
