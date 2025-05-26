"use client";

import { motion } from "@/components/ui/motion";
import { useTranslation } from "react-i18next";
import Map from "@/components/map";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>{t("about.description")}</p>
              <p>
                {t("about.paragraph1")} {t("about.paragraph2")}
              </p>
              <p>{t("about.paragraph3")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-xl w-fit mx-auto"
          >
            <Map />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
