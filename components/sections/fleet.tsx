"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "@/components/ui/motion";
import { User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const getVehicles = (t: any) => [
  {
    id: "sedan",
    name: t("fleet.vehicles.sedan.name"),
    description: t("fleet.vehicles.sedan.description"),
    image: "/images/skoda.png",
    passengers: 4,
    features: [
      t("fleet.features.airConditioning"),
      t("fleet.features.professionalDriver"),
      t("fleet.features.airportTransfers"),
      t("fleet.features.cityTours"),
      t("fleet.features.cashlessPayment"),
    ],
  },
  {
    id: "shuttle",
    name: t("fleet.vehicles.shuttle.name"),
    description: t("fleet.vehicles.shuttle.description"),
    image: "/images/viano.png",
    passengers: 7,
    features: [
      t("fleet.features.premiumInterior"),
      t("fleet.features.climateControl"),
      t("fleet.features.perfectForGroups"),
      t("fleet.features.airportMeetGreet"),
      t("fleet.features.complementaryWater"),
      t("fleet.features.extraSpace"),
    ],
  },
  {
    id: "luxury",
    name: t("fleet.vehicles.luxury.name"),
    description: t("fleet.vehicles.luxury.description"),
    image: "/images/merc.png",
    passengers: 4,
    features: [
      t("fleet.features.premiumInterior"),
      t("fleet.features.executiveExperience"),
      t("fleet.features.priorityService"),
      t("fleet.features.refreshmentsIncluded"),
      t("fleet.features.airportMeetGreet"),
      t("fleet.features.professionalChauffeur"),
    ],
  },
];

const Fleet = () => {
  const { t } = useTranslation();
  const vehicles = getVehicles(t);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bookingVehicle, setBookingVehicle] = useState<string>("");

  const handleBooking = (vehicleName: string) => {
    setBookingVehicle(vehicleName);
    setIsDialogOpen(true);
  };

  const sendMessage = (type: "whatsapp" | "sms") => {
    const message = `Hello! I'm interested in booking the ${bookingVehicle} service.`;
    const phoneNumber = "385955039442";

    if (type === "whatsapp") {
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } else {
      window.open(
        `sms:+${phoneNumber}?body=${encodeURIComponent(message)}`,
        "_blank"
      );
    }

    setIsDialogOpen(false);
  };

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("fleet.title")}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("fleet.subtitle")}
          </motion.p>
        </div>

        <div className="mb-8">
          <Tabs
            defaultValue="sedan"
            onValueChange={(value) => {
              const vehicle = vehicles.find((v: any) => v.id === value);
              if (vehicle) setSelectedVehicle(vehicle);
            }}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="sedan">{t("fleet.tabs.sedan")}</TabsTrigger>
              <TabsTrigger value="shuttle">
                {t("fleet.tabs.shuttle")}
              </TabsTrigger>
              <TabsTrigger value="luxury">{t("fleet.tabs.luxury")}</TabsTrigger>
            </TabsList>

            {vehicles.map((vehicle: any) => (
              <TabsContent key={vehicle.id} value={vehicle.id} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        priority={vehicle.id === "sedan"}
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full flex items-center space-x-1 font-semibold text-sm">
                      <User className="h-4 w-4" />
                      <span>{vehicle.passengers}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-6">{vehicle.description}</p>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3">
                        {t("fleet.featuresLabel")}:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {vehicle.features.map(
                          (feature: string, index: number) => (
                            <li key={index} className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-amber-400 mr-2"></div>
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <button
                      className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 px-6 rounded-md transition-colors"
                      onClick={() => handleBooking(vehicle.name)}
                    >
                      {t("fleet.bookVehicle")}
                    </button>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("common.chooseMethod")}</DialogTitle>
            <DialogDescription>
              {t("common.chooseMethodDescription")}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button
              onClick={() => sendMessage("whatsapp")}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              {t("common.whatsapp")}
            </Button>
            <Button onClick={() => sendMessage("sms")} variant="outline">
              {t("common.sms")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Fleet;
