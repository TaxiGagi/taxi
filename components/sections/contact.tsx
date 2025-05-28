"use client";

import React, { useState } from "react";
import { motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  PhoneCall,
  MessageSquare,
  Store,
  Clock,
  MessageCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const ContactInfo = ({
  icon: Icon,
  title,
  content,
  link = "",
  className = "",
}: {
  icon: React.ComponentType<any>;
  title: string;
  content: string;
  link?: string;
  className?: string;
}) => (
  <div className={`flex ${className}`}>
    <div className="bg-amber-100 rounded-full p-3 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
      <Icon className="h-5 w-5 text-amber-600" />
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:text-amber-700"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState({ name: "", message: "" });

  const validateForm = () => {
    const newErrors = { name: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: "name" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsDialogOpen(true);
    }
  };

  const sendMessage = (type: "whatsapp" | "sms") => {
    const message = `Name: ${formData.name}\nMessage: ${formData.message}`;
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
    setFormData({ name: "", message: "" });
    setErrors({ name: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {t("contact.sendMessage")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={t("contact.form.namePlaceholder")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`min-h-[120px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder={t("contact.form.messagePlaceholder")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold"
                size="lg"
              >
                {t("contact.form.send")}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {t("contact.contactInfo")}
            </h3>

            <div className="space-y-6 mb-8">
              <ContactInfo
                icon={PhoneCall}
                title={t("contact.info.phone")}
                content="+385 91 984 2510"
                link="tel:+385919842510"
              />

              <ContactInfo
                icon={MessageSquare}
                title={t("contact.info.sms")}
                content="+385 91 984 2510"
                link="sms:+385919842510"
              />

              <ContactInfo
                icon={MessageCircle}
                title={t("contact.info.whatsapp")}
                content="+385 91 984 2510"
                link="https://wa.me/385919842510"
              />

              <ContactInfo
                icon={Store}
                title={t("contact.info.business")}
                content={t("contact.viewProfile")}
                link="https://g.co/kgs/W2D1iru"
              />

              <ContactInfo
                icon={Clock}
                title={t("contact.info.hours")}
                content={t("contact.info.hoursValue")}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("contact.dialog.title")}</DialogTitle>
            <DialogDescription>
              {t("contact.dialog.description")}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col xs:flex-row gap-3 mt-4">
            <Button
              onClick={() => sendMessage("whatsapp")}
              className="bg-green-500 hover:bg-green-600 text-white flex-1 text-sm xs:text-base px-3 py-2"
            >
              {t("common.whatsapp")}
            </Button>
            <Button
              onClick={() => sendMessage("sms")}
              variant="outline"
              className="flex-1 text-sm xs:text-base px-3 py-2"
            >
              {t("common.sms")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
