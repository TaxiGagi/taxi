const cs = {
  common: {
    callNow: "Zavolejte nyní",
    chooseMethod: "Vyberte způsob",
    chooseMethodDescription:
      "Vyberte preferovaný způsob odeslání žádosti o rezervaci.",
    whatsapp: "WhatsApp",
    sms: "SMS",
  },
  nav: {
    home: "Domů",
    about: "O Nás",
    fleet: "Vozový park",
    testimonials: "Reference",
    destinations: "Destinace",
    contact: "Kontakt",
  },
  hero: {
    title: "Vaše Premium",
    titleHighlight: "Taxi Služba",
    subtitle:
      "Zažijte pohodlnou a spolehlivou přepravu po celé Dalmácii, od Novalje a Plitvických jezer po Zadar, Split a Dubrovník.",
    needRide: "Potřebujete odvoz?",
    pickupLocation: "Místo vyzvednutí",
    destination: "Cíl cesty",
    checkAvailability: "Zkontrolovat dostupnost",
    messageTemplate:
      "Dobrý den! Rád bych si objednal/a jízdu:\n\nOd: {{pickup}}\nDo: {{destination}}",
    addNotes: "Přidat poznámky",
    removeNotes: "Odstranit poznámky",
    selectVehicleType: "Vyberte typ vozidla",
    vehicleOptions: {
      sedan: "až 4 osoby (sedan)",
      luxurySedan: "až 4 osoby (luxusní sedan)",
      shuttle: "až 7 osob (shuttle)",
    },
    date: "Datum",
    time: "Čas",
    notesPlaceholder: "Přidejte speciální požadavky nebo poznámky...",
    paymentInfo: "Přijímáme platby v hotovosti i kartou.",
    validation: {
      pickupRequired: "Místo vyzvednutí je povinné.",
      pickupMinLength: "Místo vyzvednutí musí mít alespoň 2 znaky.",
      destinationRequired: "Cíl cesty je povinný.",
      destinationMinLength: "Cíl cesty musí mít alespoň 2 znaky.",
      destinationSameAsPickup: "Cíl cesty musí být jiný než místo vyzvednutí.",
      vehicleTypeRequired: "Prosím vyberte typ vozidla.",
      dateRequired: "Prosím vyberte datum.",
      timeRequired: "Prosím vyberte čas.",
    },
    dateDialog: {
      title: "Vyberte Datum",
      description: "Vyberte preferované datum cesty.",
    },
  },
  about: {
    title: "Váš důvěryhodný dopravní partner v Dalmácii",
    description:
      "Vítejte u Taxi Gagi, vaší prémiové dopravní služby v krásné oblasti Dalmácie. S letitými zkušenostmi v obsluze místních obyvatel i turistů jsme se etablovali jako spolehlivá a profesionální taxislužba pokrývající celé dalmatské pobřeží.",
    paragraph1:
      "Od historických ulic Zadaru po rušné město Split, od úchvatných Plitvických jezer po perlu Jadranu - Dubrovník, naše služba pokrývá všechny hlavní destinace regionu.",
    paragraph2:
      "Jsme hrdí na poskytování pohodlných, přesných a bezpečných dopravních služeb, které uspokojí všechny vaše cestovní potřeby.",
    paragraph3:
      "Naši profesionální řidiči znají každý kout Dalmácie a mohou zajistit, že se bezpečně a včas dostanete do svého cíle. Ať už potřebujete transfer na letiště, jednodenní výlet na Plitvická jezera nebo dopravu do své oblíbené dalmatské destinace, jsme tu, abychom vám sloužili s nejvyššími standardy zákaznického servisu.",
  },
  fleet: {
    title: "Naše Vozidla",
    subtitle:
      "Vyberte si perfektní vozidlo pro vaše potřeby z naší prémiové flotily.",
    featuresLabel: "Vlastnosti:",
    bookVehicle: "Rezervovat toto vozidlo",
    tabs: {
      sedan: "Sedan",
      shuttle: "Shuttle",
      luxury: "Luxus",
    },
    vehicles: {
      sedan: {
        name: "Standardní Sedan",
        description: "Pohodlná a elegantní volba pro až 4 cestující.",
      },
      shuttle: {
        name: "Shuttle",
        description:
          "Prostorný Mercedes shuttle, perfektní pro skupiny nebo rodiny.",
      },
      luxury: {
        name: "Exekutivní Luxus",
        description: "Prémiový zážitek s prvotřídními vozidly a službami.",
      },
    },
    features: {
      airConditioning: "Klimatizace",
      professionalDriver: "Profesionální řidič",
      airportTransfers: "Transfery na letiště",
      cityTours: "Prohlídky města",
      cashlessPayment: "Bezhotovostní platba",
      comfortableSeating: "Pohodlné sedadla",
      luggageSpace: "Prostor pro zavazadla",
      twentyFourSevenAvailability: "Dostupnost 24/7",
      premiumInterior: "Prémiový interiér",
      climateControl: "Kontrola klimatu",
      perfectForGroups: "Perfektní pro skupiny",
      airportMeetGreet: "Vítání na letišti",
      complementaryWater: "Zdarma voda",
      extraSpace: "Extra prostor",
      executiveExperience: "Exekutivní zážitek",
      priorityService: "Prioritní služba",
      refreshmentsIncluded: "Občerstvení v ceně",
      professionalChauffeur: "Profesionální šofér",
      temperatureControlledLeatherSeating:
        "Kožená sedadla premium s teplotní kontrolou",
      superiorRideComfort: "Vynikající komfort jízdy a řízení",
    },
  },
  contact: {
    title: "Kontaktujte nás",
    subtitle:
      "Máte otázky nebo potřebujete rezervovat jízdu? Kontaktujte nás prostřednictvím kteréhokoli z našich kanálů.",
    sendMessage: "Pošlete nám zprávu",
    contactInfo: "Kontaktní informace",
    viewProfile: "Zobrazit náš firemní profil",
    info: {
      phone: "Zavolejte nám",
      sms: "SMS",
      whatsapp: "WhatsApp",
      business: "Google Business",
      hours: "Pracovní doba",
      hoursValue: "24/7, 365 dní v roce",
    },
    form: {
      name: "Jméno",
      message: "Zpráva",
      namePlaceholder: "Vaše jméno",
      messagePlaceholder: "Jak vám můžeme pomoci?",
      send: "Odeslat zprávu",
    },
    dialog: {
      title: "Vyberte způsob zprávy",
      description: "Vyberte preferovaný způsob odeslání zprávy.",
    },
  },
  testimonials: {
    title: "Co říkají naši zákazníci",
    subtitle:
      "Nevěřte jen našim slovům - poslechněte si, co říkají naši spokojení zákazníci o zkušenostech s naší taxislužbou.",
  },
  destinations: {
    title: "Objevte Dalmácii",
    subtitle:
      "Prozkoumejte nejkrásnější destinace v Dalmácii s naším pohodlným dopravním servisem.",
    categories: {
      nationalParks: "Národní parky",
      natureParks: "Přírodní parky",
      historicCities: "Historická města",
      attractions: "Atrakce",
    },
    nationalParks: {
      plitviceLakes: {
        name: "Plitvická jezera",
        description: "Světové dědictví UNESCO s 16 kaskádovitými jezery.",
      },
      krka: {
        name: "Krka",
        description: "Úchvatné vodopády a kláštery podél řeky Krky.",
      },
      paklenica: {
        name: "Paklenica",
        description: "Dramatické kaňony a ráj horolezectví ve Velebitu.",
      },
      brijuni: {
        name: "Brijuni",
        description:
          "Nedotčený souostroví s bohatou faunou a římským dědictvím.",
      },
      kornati: {
        name: "Kornati",
        description:
          "Úchvatné souostroví 89 ostrovů s jedinečnou krasovou krajinou.",
      },
      mljet: {
        name: "Mljet",
        description:
          "Nedotčený ostrovní národní park se slanými jezery a starověkým klášterem.",
      },
    },
    natureParks: {
      vranskoLake: {
        name: "Vranské jezero",
        description:
          "Největší přírodní jezero v Chorvatsku, ráj pozorování ptáků.",
      },
      velebit: {
        name: "Velebit",
        description: "Největší pohoří Chorvatska s rozmanitou flórou a faunou.",
      },
      biokovo: {
        name: "Biokovo",
        description:
          "Dramatické pohoří nad Makarskou s úchvatnými pobřežními výhledy.",
      },
      dinara: {
        name: "Dinara",
        description:
          "Nejvyšší vrchol Chorvatska s úchvatnými panoramatickými výhledy.",
      },
      telascica: {
        name: "Telašćica",
        description:
          "Nedotčený přírodní park na Dugém otoku s dramatickými útesy a slaným jezerem.",
      },
      lastovo: {
        name: "Lastovo",
        description:
          "Vzdálený ostrovní přírodní park s nedotčenými krajinami a tmavou oblohou.",
      },
    },
    historicCities: {
      dubrovnik: {
        name: "Dubrovník",
        description: "Perla Jadranu s ikonickými městskými hradbami.",
      },
      split: {
        name: "Split",
        description:
          "Starověký římský palác přeměněný na živé městské centrum.",
      },
      sibenik: {
        name: "Šibenik",
        description:
          "Středověké město s katedrálami světového dědictví UNESCO.",
      },
      zadar: {
        name: "Zadar",
        description: "Římské ruiny a moderní atrakce jako Mořské varhany.",
      },
      makarska: {
        name: "Makarska",
        description: "Krásné pobřežní město pod pohořím Biokovo.",
      },
      novalja: {
        name: "Novalja",
        description:
          "Živé město na ostrově Pag slavné nočním životem a plážemi.",
      },
    },
    attractions: {
      diocletiansPalace: {
        name: "Diokleciánův palác",
        description: "Starověký římský palácový komplex v srdci Splitu.",
      },
      seaOrgan: {
        name: "Mořské varhany",
        description:
          "Jedinečný architektonický zvukový umělecký objekt v Zadaru.",
      },
      pagCheeseFactory: {
        name: "Sýrárna Pag",
        description: "Tradiční výroba sýrů na ostrově Pag.",
      },
      trogirOldTown: {
        name: "Staré město Trogir",
        description: "Středověké město světového dědictví UNESCO.",
      },
      salonaRuins: {
        name: "Ruiny Salony",
        description: "Starověké římské hlavní město Dalmácie u Splitu.",
      },
      klisFortress: {
        name: "Pevnost Klis",
        description: "Středověká pevnost s panoramatickými výhledy na Split.",
      },
    },
  },
  footer: {
    description:
      "Prémiová taxislužba poskytující pohodlné, spolehlivé a rychlé dopravní služby po celé Dalmácii, od Novalje a Plitvických jezer po Zadar, Split a Dubrovník.",
    quickLinks: "Rychlé Odkazy",
    services: "Služby",
    contactInfo: "Kontaktní Informace",
    servicesList: {
      airportTransfer: "Transfer na Letiště",
      corporateTravel: "Firemní Cestování",
      eventTransportation: "Doprava na Akce",
      hourlyHire: "Hodinový Pronájem",
      specialOccasions: "Speciální Příležitosti",
      longDistanceTravel: "Dálkové Cestování",
    },
    contactLabels: {
      sms: "SMS",
      whatsapp: "WhatsApp",
      googleBusiness: "Google Business",
      hours: "24/7, 365 dní v roce",
    },
    copyright: "TaxiGagi Taxi Služby. Všechna práva vyhrazena.",
    termsAndPrivacy: "Obchodní Podmínky a Zásady Ochrany Osobních Údajů",
  },
  terms: {
    backToHome: "Zpět na domovskou stránku",
  },
};

export default cs;
