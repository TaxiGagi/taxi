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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

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
  const [messageData, setMessageData] = useState({ name: "", message: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setMessageData(values);
    setIsDialogOpen(true);
  };

  const sendMessage = (type: "whatsapp" | "sms") => {
    const message = `Name: ${messageData.name}\nMessage: ${messageData.message}`;
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
    form.reset();
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

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.name")}</FormLabel>
                      <FormControl>
                        <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                          placeholder={t("contact.form.namePlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("contact.form.messagePlaceholder")}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold"
                  size="lg"
                >
                  {t("contact.form.send")}
                </Button>
              </form>
            </Form>
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
                link="https://g.page/your-business"
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

export default Contact;
