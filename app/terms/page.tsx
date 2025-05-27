"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useTranslation } from "react-i18next";

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-amber-400">Taxi</span>
              <span className="text-black">Gagi</span>
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">{t("terms.backToHome")}</span>
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">
            Uvjeti korištenja i politika privatnosti
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm black mb-8 italic">
              Posljednja izmjena: 25. svibnja, 2025
            </p>

            <p className="mb-6">
              Posjetom TaxiGagi web stranice korisnik potvrđuje da je pročitao i
              da u cijelosti prihvaća Uvjete korištenja. Također, korisnik
              potvrđuje da je u svakom trenutku upoznat s aktualnom verzijom
              Uvjeta korištenja i da ih u cijelosti prihvaća.
            </p>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6 black">Uvod</h2>
              <p className="mb-4">
                Ova Obavijest o privatnosti namijenjena je osiguravanju
                transparentnosti i zaštite vaše privatnosti prilikom posjete
                našoj web stranici. Uzimamo vašu privatnost ozbiljno i ne
                prikupljamo vaše osobne podatke osim ako to izričito ne odobrite
                ili ih dobrovoljno ne pružite putem drugih kanala komunikacije.
              </p>
              <p className="mb-4">
                Za obradu osobnih podataka odgovoran je: TAXI GAGI, obrt za
                taksi prijevoz, vl. Josip Gagula, Bibinje, Ulica A. G. Matoša
                15.
              </p>
              <p className="mb-4">Kontakt: +385 91 984 2510</p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6 black">
                Načini prikupljanja i vrste podataka koji se prikupljaju
              </h2>
              <p className="mb-4">
                Naša web stranica ne prikuplja osobne podatke posjetitelja, osim
                ako isti dobrovoljno ne pruže putem drugih kanala komunikacije,
                kao što su WhatsApp, SMS, telefonski pozivi ili drugi oblici
                direktnog kontakta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6 black">
                Svrha obrade i pravna osnova
              </h2>
              <p className="mb-4">
                Osobni podaci koje nam pružite putem drugih kanala komunikacije
                koristit će se isključivo u svrhu odgovora na vaše upite i
                zahtjeve za taxi uslugama. Pravna osnova za obradu osobnih
                podataka je vaša dobrovoljna privola ili izvršenje ugovora,
                ovisno o okolnostima slučaja.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6 black">
                Rok čuvanja podataka
              </h2>
              <p className="mb-4">
                Osobne podatke koje nam pružite putem drugih kanala komunikacije
                čuvamo samo za vrijeme potrebno za obradu vašeg upita ili
                zahtjeva, osim ako nema zakonske obveze za duže čuvanje.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6 black">
                Prijenos podataka trećim stranama
              </h2>
              <p className="mb-4">
                Ne dijelimo vaše osobne podatke s trećim stranama bez vašeg
                izričitog odobrenja, osim ako to ne zahtijeva zakon ili službeni
                zahtjev.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6 black">Prava korisnika</h2>
              <p className="mb-4">
                Imate pravo zatražiti pristup, ispravak ili brisanje vaših
                osobnih podataka koje čuvamo. Također imate pravo na ograničenje
                obrade i prenos podataka. Ako želite ostvariti ta prava ili
                imate bilo kakvih pitanja ili zahtjeva u vezi s vašim osobnim
                podacima, slobodno nas kontaktirajte putem navedenih kontaktnih
                podataka.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6 black">
                Promjene obavijesti o privatnosti
              </h2>
              <p className="mb-4">
                TaxiGagi zadržava pravo izmijeniti i dopuniti ovu Politiku u
                bilo kojem trenutku, bez davanja bilo kakve obavijesti
                zainteresiranim osobama. Iz tog razloga preporuča se svim
                zainteresiranim osobama da redovito provjeravaju sadržaj naše
                web stranice radi informiranosti o sadržaju ove Politike.
              </p>
            </section>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </>
  );
}
