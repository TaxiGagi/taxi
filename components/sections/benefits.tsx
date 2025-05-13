"use client"

import { CheckCircle, Clock, Award, MapPin, Shield, Car } from 'lucide-react';
import { motion } from '@/components/ui/motion';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    title: '24/7 Availability',
    description: 'Our taxi service is available round the clock, ensuring you have transportation whenever you need it.',
    icon: Clock,
  },
  {
    title: 'Professional Drivers',
    description: 'All our drivers are professionally trained, licensed, and committed to providing exceptional service.',
    icon: Award,
  },
  {
    title: 'Comprehensive Coverage',
    description: 'We provide service across the entire metropolitan area and surrounding suburbs.',
    icon: MapPin,
  },
  {
    title: 'Safety First',
    description: 'Your safety is our priority with regularly maintained vehicles and strict safety protocols.',
    icon: Shield,
  },
  {
    title: 'Comfortable Fleet',
    description: 'Our diverse fleet of vehicles ensures comfort and style for any occasion or group size.',
    icon: Car,
  },
  {
    title: 'Guaranteed Punctuality',
    description: 'We pride ourselves on being on time, every time. Your schedule is important to us.',
    icon: CheckCircle,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            className="text-amber-400 font-semibold text-lg mb-2 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Benefits of Our Premium Taxi Service
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the difference with our exceptional service that prioritizes your comfort, safety, and satisfaction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-none">
                <CardContent className="p-6">
                  <div className="bg-amber-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <benefit.icon className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;