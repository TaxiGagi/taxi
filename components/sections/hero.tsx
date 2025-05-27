"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  MessageSquare,
  Plus,
  X,
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import { useTranslation } from "react-i18next";
import { DayPicker } from "react-day-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "react-day-picker/dist/style.css";
import i18n from "@/lib/i18n/config";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [notes, setNotes] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();

  // Generate time options in 10-minute intervals
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleSubmit = () => {
    setIsDialogOpen(true);
  };

  const sendMessage = (type: "whatsapp" | "sms") => {
    let message = `${t("hero.messageTemplate", {
      pickup: pickupLocation,
      destination: destination,
    })}`;

    if (selectedDate) {
      message += `\nDate: ${selectedDate.toLocaleDateString()}`;
    }
    if (selectedTime) {
      message += `\nTime: ${selectedTime}`;
    }
    if (numberOfPersons) {
      message += `\nPersons: ${numberOfPersons}`;
    }
    if (notes) {
      message += `\nNotes: ${notes}`;
    }

    const phoneNumber = "385919842510";

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
    setPickupLocation("");
    setDestination("");
    setSelectedDate(undefined);
    setSelectedTime("");
    setNumberOfPersons("");
    setNotes("");
    setShowNotes(false);
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center bg-black"
    >
      <Image
        src="/images/hero.jpg"
        alt="Croatian Adriatic coastline"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="container mx-auto px-10 lg:px-20 relative z-20 pb-10 xs:pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {i18n.language !== "hr" ? (
                <>
                  {t("hero.title")}{" "}
                  <span className="text-amber-400">
                    {t("hero.titleHighlight")}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-amber-400">
                    {t("hero.titleHighlight")}{" "}
                  </span>
                  {t("hero.title")}
                </>
              )}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl mb-8 text-gray-200">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* Form - Hidden on xs screens, visible on larger screens */}
          <motion.div
            className="hidden xs:block w-full lg:w-1/2 max-w-lg min-w-[380px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {t("hero.needRide")}
                </h2>
                {!showNotes ? (
                  <button
                    type="button"
                    onClick={() => setShowNotes(true)}
                    className="text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-50 transition-colors flex items-center gap-1"
                  >
                    <Plus className="h-3 w-3" />
                    {t("hero.addNotes")}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setShowNotes(false);
                      setNotes("");
                    }}
                    className="text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-50 transition-colors flex items-center gap-1"
                  >
                    <X className="h-3 w-3" />
                    {t("hero.removeNotes")}
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t("hero.pickupLocation")}
                    className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-500"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t("hero.destination")}
                    className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-500"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={numberOfPersons}
                    onChange={(e) => setNumberOfPersons(e.target.value)}
                    className={`w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white appearance-none cursor-pointer ${
                      !numberOfPersons ? "text-gray-500" : "text-black"
                    }`}
                  >
                    <option value="">{t("hero.selectVehicleType")}</option>
                    <option value={t("hero.vehicleOptions.sedan")}>
                      {t("hero.vehicleOptions.sedan")}
                    </option>
                    <option value={t("hero.vehicleOptions.luxurySedan")}>
                      {t("hero.vehicleOptions.luxurySedan")}
                    </option>
                    <option value={t("hero.vehicleOptions.shuttle")}>
                      {t("hero.vehicleOptions.shuttle")}
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setIsDatePickerOpen(true)}
                      className={`w-full pl-10 pr-1 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-left bg-white ${
                        !selectedDate ? "text-gray-500" : "text-black"
                      }`}
                    >
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : t("hero.date")}
                    </button>
                  </div>

                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none z-10" />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className={`w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white appearance-none cursor-pointer ${
                        !selectedTime ? "text-gray-500" : "text-black"
                      }`}
                    >
                      <option value="">{t("hero.time")}</option>
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {showNotes && (
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      placeholder={t("hero.notesPlaceholder")}
                      className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-500 resize-none"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                )}

                <button
                  className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold text-lg py-3 rounded-md transition-colors"
                  onClick={handleSubmit}
                >
                  {t("hero.checkAvailability")}
                </button>

                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-center text-sm text-gray-700 font-medium">
                    {t("hero.paymentInfo")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Date Picker Dialog */}
      <Dialog open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("hero.dateDialog.title")}</DialogTitle>
            <DialogDescription>
              {t("hero.dateDialog.description")}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setIsDatePickerOpen(false);
              }}
              disabled={{ before: new Date() }}
              className="rdp"
              classNames={{
                day_selected: "bg-amber-400 text-black hover:bg-amber-500",
                day_today: "bg-amber-100 text-amber-900",
              }}
            />
          </div>
        </DialogContent>
      </Dialog>

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

export default Hero;
