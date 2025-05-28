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
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Klaus (Austria)",
    role: "tourist",
    avatarColor: "bg-blue-500",
    content:
      "Great service from Zadar to Plitvice Lakes. The driver was on time and very friendly. Clean car and fair price. Would use again.",
    rating: 5,
  },
  {
    name: "Hans (Germany)",
    role: "tourist",
    avatarColor: "bg-green-500",
    content:
      "Perfect transfer from the airport to our hotel in Split. Driver spoke good English and helped with our luggage. Very professional.",
    rating: 5,
  },
  {
    name: "Marie (France)",
    role: "tourist",
    avatarColor: "bg-purple-500",
    content:
      "Excellent taxi service for our day trip to Krka National Park. The driver waited for us and gave good recommendations. Highly recommend.",
    rating: 5,
  },
  {
    name: "James (England)",
    role: "tourist",
    avatarColor: "bg-orange-500",
    content:
      "Used this service for airport pickup in Zadar. Driver was waiting with a sign, car was comfortable and clean. Good value for money.",
    rating: 5,
  },
  {
    name: "Anna (Poland)",
    role: "tourist",
    avatarColor: "bg-pink-500",
    content:
      "Reliable service for our family trip to Dubrovnik. Driver was punctual and the car had enough space for all our luggage. Thank you!",
    rating: 5,
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
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
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("testimonials.title")}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("testimonials.subtitle")}
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
                          <div
                            className={`h-12 w-12 mr-4 rounded-full ${testimonial.avatarColor} flex items-center justify-center`}
                          >
                            <span className="text-white font-semibold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {t(`testimonials.roles.${testimonial.role}`)}
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
              <CarouselPrevious className="mr-2 static transform-none" />
              <CarouselNext className="ml-2 static transform-none" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
