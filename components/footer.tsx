"use client";

import Link from "next/link";
import {
  PhoneCall,
  MessageSquare,
  MessageCircle,
  Store,
  Clock,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-amber-400">Taxi</span>Gagi
            </h3>
            <p className="text-gray-400 mb-6">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {t("nav.testimonials")}
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {t("nav.fleet")}
                </Link>
              </li>
              <li>
                <Link
                  href="#destinations"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {t("nav.destinations")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.services")}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">
                  {t("footer.servicesList.airportTransfer")}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {t("footer.servicesList.corporateTravel")}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {t("footer.servicesList.eventTransportation")}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {t("footer.servicesList.hourlyHire")}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {t("footer.servicesList.specialOccasions")}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {t("footer.servicesList.longDistanceTravel")}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <div>
                  <a
                    href="tel:+385955039442"
                    className="text-gray-400 hover:text-amber-400"
                  >
                    +385 95 503 9442
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MessageSquare className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <div>
                  <a
                    href="sms:+385955039442"
                    className="text-gray-400 hover:text-amber-400"
                  >
                    {t("footer.contactLabels.sms")}: +385 95 503 9442
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <div>
                  <a
                    href="https://wa.me/385955039442"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400"
                  >
                    {t("footer.contactLabels.whatsapp")}: +385 95 503 9442
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Store className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <div>
                  <a
                    href="https://g.page/your-business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400"
                  >
                    {t("footer.contactLabels.googleBusiness")}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <div>
                  <span className="text-gray-400">
                    {t("footer.contactLabels.hours")}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} {t("footer.copyright")}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/terms"
                className="text-gray-500 hover:text-amber-400 transition-colors"
              >
                {t("footer.termsAndPrivacy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
