"use client";

import { motion } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Business Traveler",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    content:
      "Taxi Gagi has been my go-to taxi service for business travel. Their punctuality and professionalism make them stand out from other services I've used. The drivers are always courteous and the vehicles are immaculate.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Frequent Flyer",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    content:
      "As someone who travels frequently, I appreciate the reliability of Taxi Gagi. Their airport pickup service is exceptional - the driver is always waiting for me, even when my flight is delayed. It's one less thing to worry about.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Local Resident",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    content:
      "I use Taxi Gagi for all my transportation needs around the city. The booking process is simple, the drivers arrive promptly, and the fares are transparent. I've recommended them to all my friends and family.",
    rating: 4,
  },
  {
    name: "David Williams",
    role: "Corporate Client",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    content:
      "Our company has a corporate account with Taxi Gagi and we've been extremely satisfied with the service. The billing is straightforward, the booking system is efficient, and the executive vehicles make a great impression on our clients.",
    rating: 5,
  },
  {
    name: "Jessica Martinez",
    role: "Tourist",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    content:
      "During my visit to the city, Taxi Gagi made getting around effortless. The drivers were knowledgeable about local attractions and provided helpful recommendations. It made my vacation experience so much better!",
    rating: 5,
  },
  {
    name: "Robert Lee",
    role: "Event Organizer",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    content:
      "We used Taxi Gagi's fleet services for transporting guests at our corporate event. The coordination was flawless, the vehicles arrived exactly on schedule, and our attendees were very impressed with the quality of service.",
    rating: 4,
  },
];

const RatingStars = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            className="text-amber-400 font-semibold text-lg mb-2 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Client Feedback
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it - hear from our satisfied customers
            about their experience with our taxi service.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 flex-grow">
                          {testimonial.content}
                        </p>

                        <div className="mt-auto">
                          <RatingStars rating={testimonial.rating} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2 static transform-none" />
              <CarouselNext className="relative ml-2 static transform-none" />
            </div>
          </Carousel>
        </motion.div>

        <div className="bg-amber-400 rounded-lg p-8 mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Join Our Satisfied Customers
            </h3>
            <p className="text-black/80 mb-8 max-w-2xl mx-auto">
              Experience our exceptional service for yourself. Book a ride today
              and discover why our customers keep coming back.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-md transition-colors"
              >
                Book Your First Ride
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
