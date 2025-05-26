"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't render anything until mounted (client-side)
  if (!mounted) {
    return null;
  }

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.testimonials"), href: "#testimonials" },
    { name: t("nav.fleet"), href: "#fleet" },
    { name: t("nav.destinations"), href: "#destinations" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4",
        scrolled || isOpen
          ? "bg-black/80 text-white shadow-lg transition-all duration-300"
          : "bg-transparent transition-all duration-300 delay-300"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold">
            <span className="text-amber-400">Taxi</span>
            <span className="text-white">Gagi</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center overflow-x-auto scrollbar-hide">
          <div className="flex items-center space-x-8 whitespace-nowrap px-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium transition-colors hover:text-amber-400 text-white flex-shrink-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Call Button and Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <a href="tel:+385955039442">
            <Button
              variant="default"
              className="bg-amber-400 hover:bg-amber-500 text-black font-semibold"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              {t("common.callNow")}
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button
            className="text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="text-white h-7 w-7" />
            ) : (
              <Menu className="text-white h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "xl:hidden absolute left-0 right-0 top-full bg-black/80 overflow-hidden",
          isOpen
            ? scrolled
              ? "max-h-[500px] py-4 transition-all duration-300"
              : "max-h-[500px] py-4 transition-all duration-300 delay-300"
            : "max-h-0 transition-all duration-300"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white py-2 font-medium hover:text-amber-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Language Switcher and Call Button - only show on small screens */}
          <div className="md:hidden py-2 w-fit">
            <LanguageSwitcher />
          </div>
          <a href="tel:+385955039442" className="md:hidden">
            <Button
              variant="default"
              className="bg-amber-400 hover:bg-amber-500 text-black font-semibold w-full"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              {t("common.callNow")}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
