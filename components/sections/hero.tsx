"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from '@/components/ui/motion';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/2399254/pexels-photo-2399254.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Premium <span className="text-amber-400">Taxi Service</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Experience comfortable, reliable and prompt transportation services with our professional drivers and luxury fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-black text-lg font-semibold">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg">
                Our Fleet
              </Button>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            className="w-full lg:w-1/2 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Your Ride</h2>
              
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="time"
                      className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>
                
                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold text-lg py-6">
                  Request Ride
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;