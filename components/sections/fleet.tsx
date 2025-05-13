"use client"

import { useState } from 'react';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { User, Briefcase, Stars, Coffee } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const vehicles = [
  {
    id: 'sedan',
    name: 'Standard Sedan',
    description: 'Comfortable and economical option for up to 4 passengers.',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    passengers: 4,
    luggage: 2,
    features: ['Air conditioning', 'Professional driver', '24/7 availability', 'Cashless payment'],
    pricePerMile: 2.5,
  },
  {
    id: 'suv',
    name: 'Premium SUV',
    description: 'Spacious vehicle ideal for groups or extra luggage.',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
    passengers: 6,
    luggage: 4,
    features: ['Climate control', 'Professional driver', 'Extra space', 'Complementary water', 'Cashless payment'],
    pricePerMile: 3.5,
  },
  {
    id: 'luxury',
    name: 'Executive Luxury',
    description: 'Premium experience with top-tier vehicles and service.',
    image: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg',
    passengers: 4,
    luggage: 3,
    features: ['Premium interior', 'Executive experience', 'Priority service', 'Complementary refreshments', 'Airport meet & greet'],
    pricePerMile: 4.5,
  }
];

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            className="text-amber-400 font-semibold text-lg mb-2 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Vehicles
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore Our Premium Fleet
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect vehicle for your needs from our diverse, well-maintained fleet of premium vehicles.
          </motion.p>
        </div>

        <div className="mb-8">
          <Tabs
            defaultValue="sedan"
            onValueChange={(value) => {
              const vehicle = vehicles.find(v => v.id === value);
              if (vehicle) setSelectedVehicle(vehicle);
            }}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="sedan">Sedan</TabsTrigger>
              <TabsTrigger value="suv">SUV</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
            </TabsList>
            
            {vehicles.map((vehicle) => (
              <TabsContent key={vehicle.id} value={vehicle.id} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-amber-400 hover:bg-amber-400 text-black">
                      ${vehicle.pricePerMile}/mile
                    </Badge>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-6">{vehicle.description}</p>
                    
                    <div className="flex space-x-8 mb-6">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-amber-500 mr-2" />
                        <div>
                          <div className="text-sm text-gray-500">Passengers</div>
                          <div className="font-semibold">{vehicle.passengers}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-amber-500 mr-2" />
                        <div>
                          <div className="text-sm text-gray-500">Luggage</div>
                          <div className="font-semibold">{vehicle.luggage}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold mb-3">Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {vehicle.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-amber-400 mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="bg-amber-400 hover:bg-amber-500 text-black"
                    >
                      Book This Vehicle
                    </Button>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="bg-black text-white rounded-lg p-8 md:p-12 mt-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-6">
                We offer specialized services for events, business travel, and other custom transportation needs. Contact us to discuss your specific requirements.
              </p>
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
              >
                Request Custom Quote
              </Button>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="rounded-full bg-amber-400 p-6">
                <Stars className="h-16 w-16 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;