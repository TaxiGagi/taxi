const it = {
  common: {
    callNow: "Chiama ora",
    chooseMethod: "Scegli metodo",
    chooseMethodDescription:
      "Seleziona il tuo metodo preferito per inviare la richiesta di prenotazione.",
    whatsapp: "WhatsApp",
    sms: "SMS",
  },
  nav: {
    home: "Home",
    about: "Chi Siamo",
    fleet: "Flotta",
    testimonials: "Testimonianze",
    destinations: "Destinazioni",
    contact: "Contatti",
  },
  hero: {
    title: "Il Tuo Servizio",
    titleHighlight: "Taxi Premium",
    subtitle:
      "Vivi un trasporto confortevole e affidabile in tutta la Dalmazia, da Novalja e i laghi di Plitvice a Zara, Spalato e Dubrovnik.",
    needRide: "Hai bisogno di un passaggio?",
    pickupLocation: "Luogo di ritiro",
    destination: "Destinazione",
    checkAvailability: "Verifica disponibilità",
    messageTemplate:
      "Ciao! Vorrei prenotare un viaggio:\n\nDa: {{pickup}}\nA: {{destination}}",
    addNotes: "Aggiungi note",
    removeNotes: "Rimuovi note",
    selectVehicleType: "Seleziona tipo di veicolo",
    vehicleOptions: {
      sedan: "fino a 4 persone (berlina)",
      luxurySedan: "fino a 4 persone (berlina di lusso)",
      shuttle: "fino a 7 persone (navetta)",
    },
    date: "Data",
    time: "Ora",
    notesPlaceholder: "Aggiungi richieste speciali o note...",
    paymentInfo: "Accettiamo pagamenti in contanti e con carta.",
    validation: {
      pickupRequired: "Il luogo di ritiro è obbligatorio.",
      pickupMinLength: "Il luogo di ritiro deve avere almeno 2 caratteri.",
      destinationRequired: "La destinazione è obbligatoria.",
      destinationMinLength: "La destinazione deve avere almeno 2 caratteri.",
      destinationSameAsPickup:
        "La destinazione deve essere diversa dal luogo di ritiro.",
      vehicleTypeRequired: "Seleziona un tipo di veicolo.",
      dateRequired: "Seleziona una data.",
      timeRequired: "Seleziona un orario.",
    },
    dateDialog: {
      title: "Seleziona Data",
      description: "Scegli la tua data di viaggio preferita.",
    },
  },
  about: {
    title: "Il tuo partner di trasporto di fiducia in Dalmazia",
    description:
      "Benvenuti in Taxi Gagi, il vostro servizio di trasporto di prima classe nella bellissima regione della Dalmazia. Con anni di esperienza nel servire residenti e turisti, ci siamo affermati come un servizio taxi affidabile e professionale che copre tutta la costa dalmata.",
    paragraph1:
      "Dalle strade storiche di Zara alla vivace città di Spalato, dai magnifici laghi di Plitvice fino alla perla dell'Adriatico - Dubrovnik, il nostro servizio copre tutte le principali destinazioni della regione.",
    paragraph2:
      "Siamo orgogliosi di offrire servizi di trasporto confortevoli, puntuali e sicuri che soddisfano tutte le vostre esigenze di viaggio.",
    paragraph3:
      "I nostri autisti professionali conoscono ogni angolo della Dalmazia e possono assicurare che raggiungiate la vostra destinazione in sicurezza e in tempo. Che abbiate bisogno di un trasferimento aeroportuale, di una gita di un giorno ai laghi di Plitvice o di un trasporto alla vostra destinazione dalmata preferita, siamo qui per servirvi con i più alti standard di servizio clienti.",
  },
  fleet: {
    title: "I Nostri Veicoli",
    subtitle:
      "Scegli il veicolo perfetto per le tue esigenze dalla nostra flotta premium.",
    featuresLabel: "Caratteristiche:",
    bookVehicle: "Prenota questo veicolo",
    tabs: {
      sedan: "Berlina",
      shuttle: "Navetta",
      luxury: "Lusso",
    },
    vehicles: {
      sedan: {
        name: "Berlina Standard",
        description:
          "Opzione confortevole ed elegante per fino a 4 passeggeri.",
      },
      shuttle: {
        name: "Navetta",
        description:
          "Mercedes navetta spaziosa, perfetta per gruppi o famiglie.",
      },
      luxury: {
        name: "Lusso Esecutivo",
        description:
          "Esperienza premium con veicoli e servizio di alto livello.",
      },
    },
    features: {
      airConditioning: "Aria condizionata",
      professionalDriver: "Autista professionale",
      airportTransfers: "Trasferimenti aeroportuali",
      cityTours: "Tour della città",
      cashlessPayment: "Pagamento senza contanti",
      comfortableSeating: "Sedili comodi",
      luggageSpace: "Spazio bagagli",
      twentyFourSevenAvailability: "Disponibilità 24/7",
      premiumInterior: "Interni premium",
      climateControl: "Controllo climatico",
      perfectForGroups: "Perfetto per gruppi",
      airportMeetGreet: "Accoglienza in aeroporto",
      complementaryWater: "Acqua gratuita",
      extraSpace: "Spazio extra",
      executiveExperience: "Esperienza esecutiva",
      priorityService: "Servizio prioritario",
      refreshmentsIncluded: "Rinfreschi inclusi",
      professionalChauffeur: "Autista professionale",
      temperatureControlledLeatherSeating:
        "Sedili in pelle premium a temperatura controllata",
      superiorRideComfort: "Comfort di guida e maneggevolezza superiore",
    },
  },
  contact: {
    title: "Contattaci",
    subtitle:
      "Hai domande o hai bisogno di prenotare un viaggio? Contattaci attraverso uno dei nostri canali di contatto.",
    sendMessage: "Inviaci un messaggio",
    contactInfo: "Informazioni di contatto",
    viewProfile: "Visualizza il nostro profilo aziendale",
    info: {
      phone: "Chiamaci",
      sms: "SMS",
      whatsapp: "WhatsApp",
      business: "Google Business",
      hours: "Orari di lavoro",
      hoursValue: "24/7, 365 giorni all'anno",
    },
    form: {
      name: "Nome",
      message: "Messaggio",
      namePlaceholder: "Il tuo nome",
      messagePlaceholder: "Come possiamo aiutarti?",
      send: "Invia messaggio",
    },
    dialog: {
      title: "Scegli metodo messaggio",
      description:
        "Seleziona il tuo metodo preferito per inviare il messaggio.",
    },
  },
  testimonials: {
    title: "Cosa dicono i nostri clienti",
    subtitle:
      "Leggi le recensioni dei nostri clienti soddisfatti sulla loro esperienza con il nostro servizio taxi.",
    roles: {
      tourist: "Turista",
    },
  },
  destinations: {
    title: "Scopri la Dalmazia",
    subtitle:
      "Esplora le più belle destinazioni della Dalmazia con il nostro comodo servizio di trasporto.",
    categories: {
      nationalParks: "Parchi Nazionali",
      natureParks: "Parchi Naturali",
      historicCities: "Città Storiche",
      attractions: "Attrazioni",
    },
    nationalParks: {
      plitviceLakes: {
        name: "Laghi di Plitvice",
        description:
          "Sito del patrimonio mondiale UNESCO con 16 laghi a cascata.",
      },
      krka: {
        name: "Krka",
        description: "Cascate mozzafiato e monasteri lungo il fiume Krka.",
      },
      paklenica: {
        name: "Paklenica",
        description:
          "Canyon drammatici e paradiso dell'arrampicata nel Velebit.",
      },
      brijuni: {
        name: "Brijuni",
        description:
          "Arcipelago incontaminato con ricca fauna selvatica e patrimonio romano.",
      },
      kornati: {
        name: "Kornati",
        description:
          "Arcipelago mozzafiato di 89 isole con paesaggio carsico unico.",
      },
      mljet: {
        name: "Mljet",
        description:
          "Parco nazionale insulare incontaminato con laghi di acqua salata e monastero antico.",
      },
    },
    natureParks: {
      vranskoLake: {
        name: "Lago Vransko",
        description:
          "Il più grande lago naturale della Croazia, paradiso del birdwatching.",
      },
      velebit: {
        name: "Velebit",
        description:
          "La più grande catena montuosa della Croazia con flora e fauna diverse.",
      },
      biokovo: {
        name: "Biokovo",
        description:
          "Catena montuosa drammatica sopra Makarska con viste costiere mozzafiato.",
      },
      dinara: {
        name: "Dinara",
        description:
          "La vetta più alta della Croazia con viste panoramiche mozzafiato.",
      },
      telascica: {
        name: "Telašćica",
        description:
          "Parco naturale incontaminato su Dugi Otok con scogliere drammatiche e lago salato.",
      },
      lastovo: {
        name: "Lastovo",
        description:
          "Parco naturale insulare remoto con paesaggi incontaminati e cieli bui.",
      },
    },
    historicCities: {
      dubrovnik: {
        name: "Dubrovnik",
        description: "Perla dell'Adriatico con mura cittadine iconiche.",
      },
      split: {
        name: "Spalato",
        description:
          "Antico palazzo romano trasformato in centro città vibrante.",
      },
      sibenik: {
        name: "Šibenik",
        description:
          "Città medievale con cattedrali patrimonio mondiale UNESCO.",
      },
      zadar: {
        name: "Zara",
        description:
          "Rovine romane e attrazioni moderne come l'Organo del Mare.",
      },
      makarska: {
        name: "Makarska",
        description: "Bella città costiera sotto la catena montuosa Biokovo.",
      },
      novalja: {
        name: "Novalja",
        description:
          "Città vibrante sull'isola di Pag famosa per la vita notturna e le spiagge.",
      },
    },
    attractions: {
      diocletiansPalace: {
        name: "Palazzo di Diocleziano",
        description: "Antico complesso di palazzo romano nel cuore di Spalato.",
      },
      seaOrgan: {
        name: "Organo del Mare",
        description: "Oggetto d'arte sonora architettonica unica a Zara.",
      },
      pagCheeseFactory: {
        name: "Caseificio di Pag",
        description: "Produzione tradizionale di formaggio sull'isola di Pag.",
      },
      trogirOldTown: {
        name: "Centro Storico di Trogir",
        description: "Città medievale patrimonio mondiale UNESCO.",
      },
      salonaRuins: {
        name: "Rovine di Salona",
        description: "Antica capitale romana della Dalmazia vicino a Spalato.",
      },
      klisFortress: {
        name: "Fortezza di Klis",
        description: "Fortezza medievale con viste panoramiche su Spalato.",
      },
    },
  },
  footer: {
    description:
      "Servizio taxi premium che fornisce servizi di trasporto confortevoli, affidabili e rapidi in tutta la Dalmazia, da Novalja e i laghi di Plitvice a Zara, Spalato e Dubrovnik.",
    quickLinks: "Link Rapidi",
    services: "Servizi",
    contactInfo: "Informazioni di Contatto",
    servicesList: {
      airportTransfer: "Trasferimento Aeroportuale",
      corporateTravel: "Viaggi Aziendali",
      eventTransportation: "Trasporto Eventi",
      hourlyHire: "Noleggio Orario",
      specialOccasions: "Occasioni Speciali",
      longDistanceTravel: "Viaggi a Lunga Distanza",
    },
    contactLabels: {
      sms: "SMS",
      whatsapp: "WhatsApp",
      googleBusiness: "Google Business",
      hours: "24/7, 365 giorni all'anno",
    },
    copyright: "TaxiGagi Taxi Services. Tutti i diritti riservati.",
    termsAndPrivacy: "Termini e Condizioni e Informativa sulla Privacy",
  },
  terms: {
    backToHome: "Torna alla home",
  },
};

export default it;
