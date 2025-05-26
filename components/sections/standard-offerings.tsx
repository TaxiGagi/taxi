"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

// Image mapping function to match destination names to local images
const getImagePath = (destinationKey: string): string => {
  const imageMap: { [key: string]: string } = {
    // National Parks
    plitviceLakes: "/images/plitvice.jpg",
    krka: "/images/krka.jpg",
    paklenica: "/images/paklenica.jpg",
    brijuni: "/images/brijuni.jpg",
    kornati: "/images/kornati.jpg",
    mljet: "/images/mljet.jpg",

    // Nature Parks
    vranskoLake: "/images/vransko.jpg",
    velebit: "/images/velebit.jpg",
    biokovo: "/images/biokovo.jpg",
    dinara: "/images/dinara.jpg",
    telascica: "/images/telascica.jpg",
    lastovo: "/images/lastovo.jpg",

    // Historic Cities
    dubrovnik: "/images/dubrovnik.jpg",
    split: "/images/split.jpg",
    sibenik: "/images/sibenik.jpg",
    zadar: "/images/zadar.jpg",
    makarska: "/images/makarska.jpg",
    novalja: "/images/novalja.avif",

    // Attractions
    diocletiansPalace: "/images/diocletian.jpg",
    seaOrgan: "/images/seaorgan.jpg",
    pagCheeseFactory: "/images/pagcheesefactory.jpg",
    trogirOldTown: "/images/trogir.jpg",
    salonaRuins: "/images/salona.jpg",
    klisFortress: "/images/klis.jpg",
  };

  return imageMap[destinationKey] || "/images/hero.jpg"; // fallback image
};

const getAttractions = (t: any) => [
  {
    id: "national-parks",
    category: t("destinations.categories.nationalParks"),
    items: [
      {
        name: t("destinations.nationalParks.plitviceLakes.name"),
        description: t("destinations.nationalParks.plitviceLakes.description"),
        image: getImagePath("plitviceLakes"),
        key: "plitviceLakes",
      },
      {
        name: t("destinations.nationalParks.krka.name"),
        description: t("destinations.nationalParks.krka.description"),
        image: getImagePath("krka"),
        key: "krka",
      },
      {
        name: t("destinations.nationalParks.paklenica.name"),
        description: t("destinations.nationalParks.paklenica.description"),
        image: getImagePath("paklenica"),
        key: "paklenica",
      },
      {
        name: t("destinations.nationalParks.brijuni.name"),
        description: t("destinations.nationalParks.brijuni.description"),
        image: getImagePath("brijuni"),
        key: "brijuni",
      },
      {
        name: t("destinations.nationalParks.kornati.name"),
        description: t("destinations.nationalParks.kornati.description"),
        image: getImagePath("kornati"),
        key: "kornati",
      },
      {
        name: t("destinations.nationalParks.mljet.name"),
        description: t("destinations.nationalParks.mljet.description"),
        image: getImagePath("mljet"),
        key: "mljet",
      },
    ],
  },
  {
    id: "nature-parks",
    category: t("destinations.categories.natureParks"),
    items: [
      {
        name: t("destinations.natureParks.vranskoLake.name"),
        description: t("destinations.natureParks.vranskoLake.description"),
        image: getImagePath("vranskoLake"),
        key: "vranskoLake",
      },
      {
        name: t("destinations.natureParks.velebit.name"),
        description: t("destinations.natureParks.velebit.description"),
        image: getImagePath("velebit"),
        key: "velebit",
      },
      {
        name: t("destinations.natureParks.biokovo.name"),
        description: t("destinations.natureParks.biokovo.description"),
        image: getImagePath("biokovo"),
        key: "biokovo",
      },
      {
        name: t("destinations.natureParks.dinara.name"),
        description: t("destinations.natureParks.dinara.description"),
        image: getImagePath("dinara"),
        key: "dinara",
      },
      {
        name: t("destinations.natureParks.telascica.name"),
        description: t("destinations.natureParks.telascica.description"),
        image: getImagePath("telascica"),
        key: "telascica",
      },
      {
        name: t("destinations.natureParks.lastovo.name"),
        description: t("destinations.natureParks.lastovo.description"),
        image: getImagePath("lastovo"),
        key: "lastovo",
      },
    ],
  },
  {
    id: "historic-cities",
    category: t("destinations.categories.historicCities"),
    items: [
      {
        name: t("destinations.historicCities.dubrovnik.name"),
        description: t("destinations.historicCities.dubrovnik.description"),
        image: getImagePath("dubrovnik"),
        key: "dubrovnik",
      },
      {
        name: t("destinations.historicCities.split.name"),
        description: t("destinations.historicCities.split.description"),
        image: getImagePath("split"),
        key: "split",
      },
      {
        name: t("destinations.historicCities.sibenik.name"),
        description: t("destinations.historicCities.sibenik.description"),
        image: getImagePath("sibenik"),
        key: "sibenik",
      },
      {
        name: t("destinations.historicCities.zadar.name"),
        description: t("destinations.historicCities.zadar.description"),
        image: getImagePath("zadar"),
        key: "zadar",
      },
      {
        name: t("destinations.historicCities.makarska.name"),
        description: t("destinations.historicCities.makarska.description"),
        image: getImagePath("makarska"),
        key: "makarska",
      },
      {
        name: t("destinations.historicCities.novalja.name"),
        description: t("destinations.historicCities.novalja.description"),
        image: getImagePath("novalja"),
        key: "novalja",
      },
    ],
  },
  {
    id: "attractions",
    category: t("destinations.categories.attractions"),
    items: [
      {
        name: t("destinations.attractions.diocletiansPalace.name"),
        description: t(
          "destinations.attractions.diocletiansPalace.description"
        ),
        image: getImagePath("diocletiansPalace"),
        key: "diocletiansPalace",
      },
      {
        name: t("destinations.attractions.seaOrgan.name"),
        description: t("destinations.attractions.seaOrgan.description"),
        image: getImagePath("seaOrgan"),
        key: "seaOrgan",
      },
      {
        name: t("destinations.attractions.pagCheeseFactory.name"),
        description: t("destinations.attractions.pagCheeseFactory.description"),
        image: getImagePath("pagCheeseFactory"),
        key: "pagCheeseFactory",
      },
      {
        name: t("destinations.attractions.trogirOldTown.name"),
        description: t("destinations.attractions.trogirOldTown.description"),
        image: getImagePath("trogirOldTown"),
        key: "trogirOldTown",
      },
      {
        name: t("destinations.attractions.salonaRuins.name"),
        description: t("destinations.attractions.salonaRuins.description"),
        image: getImagePath("salonaRuins"),
        key: "salonaRuins",
      },
      {
        name: t("destinations.attractions.klisFortress.name"),
        description: t("destinations.attractions.klisFortress.description"),
        image: getImagePath("klisFortress"),
        key: "klisFortress",
      },
    ],
  },
];

const StandardOfferings = () => {
  const { t } = useTranslation();
  const attractions = getAttractions(t);
  const [selectedCategory, setSelectedCategory] = useState(attractions[0]);

  return (
    <section id="destinations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("destinations.title")}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("destinations.subtitle")}
          </motion.p>
        </div>

        <div className="mb-8">
          <Tabs
            defaultValue="national-parks"
            onValueChange={(value) => {
              const category = attractions.find((c: any) => c.id === value);
              if (category) setSelectedCategory(category);
            }}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-12">
              <TabsTrigger
                value="national-parks"
                className="text-xs sm:text-sm"
              >
                {t("destinations.categories.nationalParks")}
              </TabsTrigger>
              <TabsTrigger value="nature-parks" className="text-xs sm:text-sm">
                {t("destinations.categories.natureParks")}
              </TabsTrigger>
              <TabsTrigger
                value="historic-cities"
                className="text-xs sm:text-sm"
              >
                {t("destinations.categories.historicCities")}
              </TabsTrigger>
              <TabsTrigger value="attractions" className="text-xs sm:text-sm">
                {t("destinations.categories.attractions")}
              </TabsTrigger>
            </TabsList>

            {attractions.map((category: any) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item: any, itemIndex: number) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * itemIndex }}
                      >
                        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover transform hover:scale-110 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority={itemIndex < 3} // Priority for first 3 images
                            />
                          </div>
                          <CardContent className="p-6">
                            <h4 className="text-xl font-semibold mb-2">
                              {item.name}
                            </h4>
                            <p className="text-gray-600">{item.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default StandardOfferings;
