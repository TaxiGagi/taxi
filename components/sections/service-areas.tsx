"use client"

import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const areas = [
  { name: 'Downtown', distance: '0-5 miles', estimatedTime: '5-10 min' },
  { name: 'North End', distance: '5-10 miles', estimatedTime: '10-15 min' },
  { name: 'South Side', distance: '5-8 miles', estimatedTime: '10-15 min' },
  { name: 'East District', distance: '7-12 miles', estimatedTime: '15-20 min' },
  { name: 'West Hills', distance: '8-15 miles', estimatedTime: '15-25 min' },
  { name: 'Airport', distance: '15-20 miles', estimatedTime: '25-35 min' },
  { name: 'Business Park', distance: '3-7 miles', estimatedTime: '8-12 min' },
  { name: 'Shopping Mall', distance: '4-9 miles', estimatedTime: '8-15 min' },
];

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5835368/pexels-photo-5835368.jpeg)',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.span 
              className="text-amber-400 font-semibold text-lg mb-2 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Where We Operate
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Service Coverage Areas
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide comprehensive coverage throughout the metropolitan area and beyond. Our extensive network ensures you can get a ride wherever you need to go.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {areas.map((area, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * (index % 4) }}
                >
                  <MapPin className="h-5 w-5 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{area.name}</h3>
                    <p className="text-sm text-gray-400">
                      {area.distance} | {area.estimatedTime}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-black font-semibold">
                Check Availability
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-amber-500/30">
              <img 
                src="https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg" 
                alt="Service coverage map" 
                className="w-full h-auto object-cover"
              />
              <div className="bg-black/80 p-4 text-center">
                <p className="text-amber-400 font-medium">Interactive coverage map available in our mobile app</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;