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

const BookingForm = () => {
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
    setPickupLocation("");
    setDestination("");
    setSelectedDate(undefined);
    setSelectedTime("");
    setNumberOfPersons("");
    setNotes("");
    setShowNotes(false);
  };

  return (
    <section className="xs:hidden py-16 xs:py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-md xs:max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-lg shadow-xl p-4 xs:p-6">
            <div className="flex items-center justify-between mb-4 xs:mb-6">
              <h2 className="text-xl xs:text-2xl font-bold text-gray-800">
                {t("hero.needRide")}
              </h2>
              {!showNotes ? (
                <button
                  type="button"
                  onClick={() => setShowNotes(true)}
                  className="text-xs xs:text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md px-2 xs:px-3 py-1 hover:bg-gray-50 transition-colors flex items-center gap-1"
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
                  className="text-xs xs:text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md px-2 xs:px-3 py-1 hover:bg-gray-50 transition-colors flex items-center gap-1"
                >
                  <X className="h-3 w-3" />
                  {t("hero.removeNotes")}
                </button>
              )}
            </div>

            <div className="space-y-3 xs:space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 xs:h-5 w-4 xs:w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("hero.pickupLocation")}
                  className="w-full pl-9 xs:pl-10 py-2.5 xs:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-500 text-sm xs:text-base"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 xs:h-5 w-4 xs:w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("hero.destination")}
                  className="w-full pl-9 xs:pl-10 py-2.5 xs:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-500 text-sm xs:text-base"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 xs:h-5 w-4 xs:w-5 text-gray-400" />
                <select
                  value={numberOfPersons}
                  onChange={(e) => setNumberOfPersons(e.target.value)}
                  className={`w-full pl-9 xs:pl-10 py-2.5 xs:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white appearance-none cursor-pointer text-sm xs:text-base ${
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

              <div className="grid grid-cols-2 gap-2 xs:gap-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 xs:h-5 w-4 xs:w-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setIsDatePickerOpen(true)}
                    className={`w-full pl-9 xs:pl-10 py-2.5 xs:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-left bg-white text-xs xs:text-base ${
                      !selectedDate ? "text-gray-500" : "text-black"
                    }`}
                  >
                    {selectedDate
                      ? selectedDate.toLocaleDateString()
                      : t("hero.date")}
                  </button>
                </div>

                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 xs:h-5 w-4 xs:w-5 text-gray-400 pointer-events-none z-10" />
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className={`w-full pl-9 xs:pl-10 py-2.5 xs:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white appearance-none cursor-pointer text-xs xs:text-base ${
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
                  <MessageSquare className="absolute left-3 top-3 h-4 xs:h-5 w-4 xs:w-5 text-gray-400" />
                  <textarea
                    placeholder={t("hero.notesPlaceholder")}
                    className="w-full pl-9 xs:pl-10 py-2.5 xs:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-500 resize-none text-sm xs:text-base"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              )}

              <button
                className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold text-base xs:text-lg py-2.5 xs:py-3 rounded-md transition-colors"
                onClick={handleSubmit}
              >
                {t("hero.checkAvailability")}
              </button>

              <div className="mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-gray-300">
                <p className="text-center text-xs xs:text-sm text-gray-700 font-medium">
                  {t("hero.paymentInfo")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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

export default BookingForm;
