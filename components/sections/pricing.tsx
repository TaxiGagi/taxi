"use client"

import { useState } from 'react';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Check, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';

const PricingCard = ({ title, price, features, highlighted = false }) => (
  <motion.div
    className={`rounded-lg ${highlighted ? 'bg-amber-400 text-black shadow-xl' : 'bg-white text-gray-900 border border-gray-200'} relative overflow-hidden h-full flex flex-col`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {highlighted && (
      <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold uppercase py-1 px-3 transform translate-x-8 translate-y-4 rotate-45">
        Popular
      </div>
    )}
    <div className={`p-8 ${highlighted ? 'bg-amber-500' : 'bg-gray-50'}`}>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-3xl font-extrabold">${price}</span>
        <span className="ml-1 text-sm opacity-80">/mile</span>
      </div>
    </div>
    <div className="p-8 flex-grow">
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`w-5 h-5 mr-2 flex-shrink-0 ${highlighted ? 'text-black' : 'text-amber-500'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full ${highlighted ? 'bg-black hover:bg-gray-800 text-white' : 'bg-amber-400 hover:bg-amber-500 text-black'}`}
        size="lg"
      >
        Book Now
      </Button>
    </div>
  </motion.div>
);

const FareCalculator = () => {
  const [distance, setDistance] = useState(5);
  const [vehicleType, setVehicleType] = useState("standard");
  
  const rates = {
    standard: 2.5,
    premium: 3.5,
    luxury: 4.5
  };
  
  const baseFare = 5;
  const estimatedFare = baseFare + (distance * rates[vehicleType]);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-xl font-bold mb-6">Fare Estimator</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Type
          </label>
          <Tabs 
            defaultValue="standard" 
            className="w-full"
            onValueChange={setVehicleType}
          >
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Distance (miles)
            </label>
            <span className="text-sm font-medium">{distance} miles</span>
          </div>
          <Slider
            defaultValue={[5]}
            max={30}
            step={1}
            onValueChange={(value) => setDistance(value[0])}
          />
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Base Fare</span>
            <span>${baseFare.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Distance Charge</span>
            <span>${(distance * rates[vehicleType]).toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Estimated Total</span>
            <span>${estimatedFare.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full">
            Book This Ride
          </Button>
          <p className="text-xs text-gray-500 mt-2">
            *Final fare may vary based on traffic and waiting time
          </p>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            className="text-amber-400 font-semibold text-lg mb-2 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transparent Pricing
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple, Affordable Rates
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the service that fits your needs with our straightforward pricing structure. No hidden fees, just quality service.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <PricingCard
            title="Standard Taxi"
            price="2.50"
            features={[
              "Comfortable sedan vehicles",
              "Air conditioning",
              "Professional driver",
              "24/7 availability",
              "Up to 4 passengers"
            ]}
          />
          
          <PricingCard
            title="Premium Taxi"
            price="3.50"
            features={[
              "Spacious SUV vehicles",
              "Climate control",
              "Professional driver",
              "Complementary water",
              "Up to 6 passengers",
              "Extra luggage space"
            ]}
            highlighted={true}
          />
          
          <PricingCard
            title="Luxury Service"
            price="4.50"
            features={[
              "Luxury sedan or SUV",
              "Premium interior & amenities",
              "Executive experience",
              "Priority booking",
              "Up to 4 passengers",
              "Airport meet & greet"
            ]}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Additional Services</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold">Airport Pickup</h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">Includes 30 minutes of waiting time, flight tracking, and meet & greet service</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional fee</span>
                    <span className="font-medium">$15.00</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold">Late Night Service</h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Between 11:00 PM and 5:00 AM</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional fee</span>
                    <span className="font-medium">$5.00</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold">Extra Luggage</h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>For each piece over 2 standard suitcases</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Per additional piece</span>
                    <span className="font-medium">$3.00</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold">Waiting Time</h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>First 5 minutes are free</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Per minute</span>
                    <span className="font-medium">$0.50</span>
                  </div>
                </div>
              </div>
            </div>
            
            <FareCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;