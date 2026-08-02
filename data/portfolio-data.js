/* ============================================================
   PORTFOLIO DATA, single source of truth for all sections.
   Mirrors the CV project's cv-data.js architecture.
   Imported by script.js (ES module).
   ============================================================ */

export const PROJECTS = [
  {
    id: 'agx-ai-translation-helper',
    name: 'AGX AI Translation Helper',
    category: 'app',
    image: 'assets/images/projects/large/agx-ai-translation-helper.jpg',
    tech: ['VS Code', 'Gemini AI', 'TypeScript', 'i18next'],
    links: {
      repo: 'https://github.com/exphoenee/AI_Translation_Plugin',
      demo: 'https://marketplace.visualstudio.com/items?itemName=ViktorBozzay.agx-ai-translation'
    },
    desc: {
      en: { functional: 'A VS Code extension powered by Google\u2019s Gemini AI that assists developers with translation, code generation and code analysis, string extraction into i18next JSON, AI translation, test generation, bug fixes, refactoring, code explanation and custom prompts, all from the Command Palette.', technical: 'Built on the VS Code Extension API with Gemini AI integration and published on the VS Code Marketplace. Commands are available from the Command Palette and the sidebar, with keyboard shortcuts for the most common tasks.' },
      de: { functional: 'Eine VS-Code-Erweiterung auf Basis von Googles Gemini-KI, die Entwickler bei Übersetzung, Code-Generierung und Code-Analyse unterstützt, String-Extraktion in i18next-JSON, KI-Übersetzung, Testgenerierung, Bugfixes, Refactoring, Code-Erklärung und eigene Prompts, alles über die Befehlspalette.', technical: 'Entwickelt mit der VS-Code-Extension-API und Gemini-KI-Integration, veröffentlicht im VS-Code-Marketplace. Die Befehle sind über die Befehlspalette und die Seitenleiste erreichbar, mit Tastenkürzeln für die häufigsten Aufgaben.' },
      hu: { functional: 'Egy VS Code bővítmény, amely a Google Gemini AI erejét használja a fejlesztők támogatására fordítás, kódgenerálás és kódanalízis terén, szöveg-kinyerés i18next JSON formátumba, AI-fordítás, tesztgenerálás, hibajavítás, refaktorálás, kódmagyarázat és egyedi promptok, mind a parancspalettából.', technical: 'A VS Code Extension API-ra és Gemini AI-integrációra épül, a VS Code Marketplace-en jelent meg. A parancsok a parancspalettából és az oldalsávból érhetők el, a leggyakoribb feladatokhoz billentyűparancsokkal.' },
      fr: { functional: 'Une extension VS Code propulsée par l\u2019IA Gemini de Google qui aide les développeurs dans la traduction, la génération et l\u2019analyse de code, extraction de chaînes en JSON i18next, traduction IA, génération de tests, correction de bugs, refactoring, explication de code et prompts personnalisés, le tout depuis la palette de commandes.', technical: 'Construite sur l\u2019API d\u2019extension VS Code avec intégration de l\u2019IA Gemini, publiée sur le marketplace VS Code. Les commandes sont disponibles depuis la palette de commandes et la barre latérale, avec des raccourcis clavier pour les tâches les plus courantes.' },
      it: { functional: 'Un\u2019estensione VS Code basata sull\u2019IA Gemini di Google che assiste gli sviluppatori nella traduzione, generazione e analisi del codice, estrazione di stringhe in JSON i18next, traduzione AI, generazione di test, correzione di bug, refactoring, spiegazione del codice e prompt personalizzati, tutto dalla palette comandi.', technical: 'Realizzata con l\u2019API delle estensioni VS Code e l\u2019integrazione di Gemini AI, pubblicata sul marketplace di VS Code. I comandi sono disponibili dalla palette comandi e dalla barra laterale, con scorciatoie da tastiera per le attività più comuni.' },
      es: { functional: 'Una extensión de VS Code impulsada por la IA Gemini de Google que ayuda a los desarrolladores con la traducción, generación y análisis de código, extracción de cadenas a JSON i18next, traducción con IA, generación de pruebas, corrección de errores, refactorización, explicación de código y prompts personalizados, todo desde la paleta de comandos.', technical: 'Construida sobre la API de extensiones de VS Code con integración de Gemini AI, publicada en el marketplace de VS Code. Los comandos están disponibles desde la paleta de comandos y la barra lateral, con atajos de teclado para las tareas más comunes.' }
    }
  },
  {
    id: 'ai4test',
    name: 'AI4Test',
    category: 'app',
    image: 'assets/images/projects/large/ai4test.jpg',
    tech: ['React', 'TypeScript', 'Jest', 'i18next'],
    links: { demo: 'https://mobiledevice.cloud/order/ai4test?lang=en' },
    desc: {
      en: { functional: 'Automates manual testing with the help of AI, AI-driven web analysis, automatic screenshot and element identification, and dynamic test script generation to accelerate QA workflows.', technical: 'A modern React + TypeScript web application; I worked on it as a frontend developer in an international team.' },
      de: { functional: 'Automatisiert manuelles Testen mithilfe von KI, KI-gestützte Web-Analyse, automatische Screenshot- und Element-Identifikation sowie dynamische Generierung von Testskripten zur Beschleunigung der QA-Workflows.', technical: 'Eine moderne React- und TypeScript-Webanwendung; ich habe als Frontend-Entwickler in einem internationalen Team daran gearbeitet.' },
      hu: { functional: 'A manuális tesztelés automatizálása AI segítségével, mesterséges intelligenciával támogatott webes elemzés, automatikus képernyőkép- és elemazonosítás, valamint dinamikus tesztszkript-generálás a QA-folyamatok felgyorsítására.', technical: 'Modern React + TypeScript webalkalmazás; frontend fejlesztőként dolgoztam rajta egy nemzetközi csapatban.' },
      fr: { functional: 'Automatise les tests manuels à l\u2019aide de l\u2019IA, analyse web assistée par IA, identification automatique de captures d\u2019écran et d\u2019éléments, et génération dynamique de scripts de test pour accélérer les workflows QA.', technical: 'Une application web moderne en React + TypeScript ; j\u2019y ai travaillé en tant que développeur frontend dans une équipe internationale.' },
      it: { functional: 'Automatizza i test manuali con l\u2019aiuto dell\u2019IA, analisi web basata su IA, identificazione automatica di screenshot ed elementi e generazione dinamica di script di test per accelerare i flussi di lavoro QA.', technical: 'Un\u2019applicazione web moderna in React + TypeScript; ci ho lavorato come sviluppatore frontend in un team internazionale.' },
      es: { functional: 'Automatiza las pruebas manuales con la ayuda de la IA, análisis web impulsado por IA, identificación automática de capturas de pantalla y elementos, y generación dinámica de scripts de prueba para acelerar los flujos de trabajo de QA.', technical: 'Una aplicación web moderna en React + TypeScript; trabajé en ella como desarrollador frontend en un equipo internacional.' }
    }
  },
  {
    id: 'arrganizer',
    name: 'Arrganizer',
    category: 'library',
    image: 'assets/images/projects/large/arrganizer_og.jpg',
    tech: ['TypeScript', 'tsup', 'Jest', 'Mocha'],
    links: { repo: 'https://github.com/ViktorBozzay/Arrganizer', demo: 'https://viktorbozzay.github.io/ArrganizerDocs/', npm: 'https://www.npmjs.com/package/arrganizer' },
    desc: {
      en: { functional: 'A chainable data-transformation library that makes working with arrays of objects feel like using a spreadsheet, group, sort, filter and format in readable chains.', technical: 'Zero-dependency TypeScript library with a fluent API, full operation history with undo/redo, locale-aware formatting via Intl, and end-to-end type safety with generics.' },
      de: { functional: 'Eine verkettbare Daten-Transformationsbibliothek, die das Arbeiten mit Objekt-Arrays wie mit einer Tabellenkalkulation wirken lässt, gruppieren, sortieren, filtern und formatieren in lesbaren Ketten.', technical: 'Zero-Dependency-TypeScript-Bibliothek mit fluider API, vollständiger Operations-Historie mit Undo/Redo, locale-basierter Formatierung via Intl und durchgängiger Typsicherheit mit Generics.' },
      hu: { functional: 'Láncolható adat-átalakító könyvtár, amely az objektumtömbökkel végzett munkát táblázatkezelőszerűvé teszi, csoportosítás, rendezés, szűrés és formázás olvasható láncokban.', technical: 'Függőségmentes TypeScript könyvtár folyékony API-val, teljes művelet-előzménnyel undo/redo funkcióval, Intl alapú lokalizált formázással és generikusokkal elért teljes típusbiztonsággal.' },
      fr: { functional: 'Une bibliothèque de transformation de données enchaînable qui rend le travail sur les tableaux d\u2019objets aussi fluide qu\u2019un tableur, grouper, trier, filtrer et formater en chaînes lisibles.', technical: 'Bibliothèque TypeScript sans dépendance avec API fluide, historique complet des opérations avec annuler/rétablir, formatage localisé via Intl et sécurité de typage de bout en bout grâce aux génériques.' },
      it: { functional: 'Una libreria di trasformazione dati incatenabile che rende il lavoro con array di oggetti simile a un foglio di calcolo, raggruppa, ordina, filtra e formatta in catene leggibili.', technical: 'Libreria TypeScript a zero dipendenze con API fluida, cronologia completa delle operazioni con annulla/ripeti, formattazione localizzata via Intl e type-safety totale con i generici.' },
      es: { functional: 'Una librería de transformación de datos encadenable que hace que trabajar con arrays de objetos parezca usar una hoja de cálculo, agrupa, ordena, filtra y formatea en cadenas legibles.', technical: 'Librería TypeScript sin dependencias con API fluida, historial completo de operaciones con deshacer/rehacer, formato localizado vía Intl y seguridad de tipos integral con genéricos.' }
    }
  },
  {
    id: 'auditorium',
    name: 'Auditorium',
    category: 'app',
    image: 'assets/images/projects/large/auditorium-og.jpg',
    tech: ['Vanilla JS', 'ES Modules', 'Vite', 'Vitest'],
    links: { repo: 'https://github.com/exphoenee/auditorium', demo: 'https://exphoenee.github.io/auditorium/' },
    desc: {
      en: { functional: 'Interactive theater seat reservation system with canvas visualization, pan/zoom support, seat management and an algorithm that finds the best contiguous blocks of free seats.', technical: 'Vanilla JavaScript (ES6+) with ES Modules, built with Vite and tested with Vitest; weighted scoring algorithm for optimal seat finding, canvas pan/zoom rendering and a dark glassmorphism UI.' },
      de: { functional: 'Interaktives Theatersitz-Reservierungssystem mit Canvas-Visualisierung, Pan/Zoom-Unterstützung, Sitzplatzverwaltung und einem Algorithmus, der die besten zusammenhängenden Blöcke freier Plätze findet.', technical: 'Vanilla JavaScript (ES6+) mit ES-Modulen, gebaut mit Vite und getestet mit Vitest; gewichteter Scoring-Algorithmus für die optimale Platzsuche, Canvas-Pan/Zoom-Rendering und dunkle Glassmorphism-Oberfläche.' },
      hu: { functional: 'Interaktív színházi székfoglaló rendszer canvas-megjelenítéssel, pan/zoom támogatással, székkezeléssel és egy algoritmussal, amely megtalálja a legjobb összefüggő szabad székblokkokat.', technical: 'Vanilla JavaScript (ES6+), ES-modulokkal, Vite-tal építve és Vitest-tel tesztelve; súlyozott pontozó algoritmus az optimális székkereséshez, canvas pan/zoom renderelés és sötét glassmorphism felület.' },
      fr: { functional: 'Système interactif de réservation de sièges de théâtre avec visualisation canvas, support pan/zoom, gestion des sièges et un algorithme qui trouve les meilleurs blocs contigus de places libres.', technical: 'JavaScript vanilla (ES6+) avec modules ES, construit avec Vite et testé avec Vitest ; algorithme de score pondéré pour la sélection optimale, rendu canvas pan/zoom et interface glassmorphism sombre.' },
      it: { functional: 'Sistema interattivo di prenotazione posti a teatro con visualizzazione canvas, supporto pan/zoom, gestione dei posti e un algoritmo che trova i migliori blocchi contigui di posti liberi.', technical: 'JavaScript vanilla (ES6+) con moduli ES, costruito con Vite e testato con Vitest; algoritmo di punteggio ponderato per la scelta ottimale, rendering canvas pan/zoom e UI dark glassmorphism.' },
      es: { functional: 'Sistema interactivo de reserva de asientos de teatro con visualización en canvas, soporte pan/zoom, gestión de asientos y un algoritmo que encuentra los mejores bloques contiguos de asientos libres.', technical: 'JavaScript vanilla (ES6+) con módulos ES, construido con Vite y probado con Vitest; algoritmo de puntuación ponderada para la selección óptima, renderizado canvas pan/zoom e interfaz glassmorphism oscura.' }
    }
  },
  {
    id: 'ba-team',
    name: 'BA Team',
    category: 'app',
    image: 'assets/images/projects/large/bateam.jpg',
    tech: ['AI Agents', 'Python'],
    links: { repo: 'https://github.com/exphoenee/ba-team-dev', demo: 'https://exphoenee.github.io/ba-team-docs/' },
    desc: {
      en: { functional: 'A structured development workspace for the BA Tool AI product: implementation plans, developer docs, test reports and a public documentation site, all in one organized repository.', technical: 'Markdown-to-HTML documentation pipeline published on GitHub Pages, custom AI skills and rules for development agents, and a strict repository convention system.' },
      de: { functional: 'Ein strukturierter Entwicklungs-Workspace für das KI-Produkt BA Tool: Implementierungspläne, Entwicklerdokumentation, Testberichte und eine öffentliche Dokumentationsseite, alles in einem organisierten Repository.', technical: 'Markdown-zu-HTML-Dokumentations-Pipeline, veröffentlicht auf GitHub Pages, mit eigenen KI-Skills und Regeln für Entwicklungsagenten sowie einem strikten Konventionssystem.' },
      hu: { functional: 'Strukturált fejlesztői munkaterület a BA Tool AI-termékhez: implementációs tervek, fejlesztői dokumentáció, teszteredmények és nyilvános dokumentációs oldal, mind egy szervezett repóban.', technical: 'Markdown-ból HTML dokumentációs folyamat GitHub Pages-en közzétéve, egyedi AI készségekkel és szabályokkal fejlesztői ágensekhez, valamint szigorú repókonvenció-rendszer.' },
      fr: { functional: 'Un espace de travail structuré pour le produit IA BA Tool : plans d\u2019implémentation, docs développeur, rapports de tests et un site de documentation public, le tout dans un dépôt organisé.', technical: 'Pipeline de documentation Markdown vers HTML publié sur GitHub Pages, compétences et règles IA personnalisées pour les agents de développement, et système de conventions de dépôt strict.' },
      it: { functional: 'Un workspace di sviluppo strutturato per il prodotto AI BA Tool: piani di implementazione, documentazione per sviluppatori, report di test e un sito di documentazione pubblico, tutto in un repository organizzato.', technical: 'Pipeline di documentazione Markdown-to-HTML pubblicata su GitHub Pages, skill e regole AI personalizzate per gli agenti di sviluppo e un rigoroso sistema di convenzioni di repository.' },
      es: { functional: 'Un espacio de trabajo de desarrollo estructurado para el producto IA BA Tool: planes de implementación, documentación de desarrollo, informes de pruebas y un sitio de documentación público, todo en un repositorio organizado.', technical: 'Pipeline de documentación Markdown a HTML publicada en GitHub Pages, skills y reglas de IA personalizadas para agentes de desarrollo y un estricto sistema de convenciones de repositorio.' }
    }
  },
  {
    id: 'bullseyes',
    name: "Bull's Eye",
    category: 'game',
    image: 'assets/images/projects/large/bullseye.jpg',
    tech: ['Vanilla JS', 'OOP', 'Canvas', 'Vite'],
    links: { repo: 'https://github.com/exphoenee/bullseyes', demo: 'https://exphoenee.github.io/bullseyes/' },
    desc: {
      en: { functional: 'A 2D arcade game where you control a bull with the mouse and protect hatching larvae from toads marching in from the right side of the screen.', technical: 'Vanilla JavaScript with a class hierarchy (GameObject base with Player, Enemy, Egg, Larva subclasses), circle-based collision detection, simple physics and Vite bundling.' },
      de: { functional: 'Ein 2D-Arcade-Spiel, bei dem du einen Bullen mit der Maus steuerst und schlüpfende Larven vor Kröten beschützt, die von rechts auf den Bildschirm marschieren.', technical: 'Vanilla JavaScript mit Klassenhierarchie (GameObject-Basis mit Player-, Enemy-, Egg-, Larva-Unterklassen), kreisbasierter Kollisionserkennung, einfacher Physik und Vite-Bundling.' },
      hu: { functional: '2D-akciójáték, amelyben egérrel irányítod a bikát, és megvéded a kikelő lárvákat a képernyő jobb oldaláról érkező varangyoktól.', technical: 'Vanilla JavaScript osztályhierarchiával (GameObject alaposztály Player, Enemy, Egg, Larva alosztályokkal), kör alapú ütközésérzékeléssel, egyszerű fizikával és Vite-bundlolással.' },
      fr: { functional: 'Un jeu d\u2019arcade 2D où vous contrôlez un taureau à la souris et protégez les larves qui éclosent des crapauds arrivant depuis la droite de l\u2019écran.', technical: 'JavaScript vanilla avec une hiérarchie de classes (base GameObject avec sous-classes Player, Enemy, Egg, Larva), détection de collisions circulaires, physique simple et bundling Vite.' },
      it: { functional: 'Un gioco arcade 2D in cui controlli un toro con il mouse e proteggi le larve in schiusa dai rospi che arrivano dal lato destro dello schermo.', technical: 'JavaScript vanilla con gerarchia di classi (base GameObject con sottoclassi Player, Enemy, Egg, Larva), rilevamento collisioni circolare, fisica semplice e bundling con Vite.' },
      es: { functional: 'Un juego arcade 2D donde controlas un toro con el ratón y proteges a las larvas que eclosionan de los sapos que llegan desde el lado derecho de la pantalla.', technical: 'JavaScript vanilla con jerarquía de clases (base GameObject con subclases Player, Enemy, Egg, Larva), detección de colisiones circular, física simple y empaquetado con Vite.' }
    }
  },
  {
    id: 'createdomblocks',
    name: 'createDOMBlocks',
    category: 'library',
    image: 'assets/images/projects/large/createDomBlocks.jpg',
    tech: ['TypeScript', 'DOMelemJS', 'Webpack', '50+ components'],
    links: { repo: 'https://github.com/exphoenee/createDOMBlocks', demo: 'https://exphoenee.github.io/createDOMBlocks/', npm: 'https://www.npmjs.com/package/createdomblocks' },
    desc: {
      en: { functional: 'A TypeScript library with 50+ UI components, form inputs, buttons, navigation, modals, drawers, carousels and more, created from JavaScript, framework-agnostic and tree-shakable.', technical: 'Built on top of DOMelemJS, fully type-safe with IntelliSense, portal support for drawers and modals, bundled with Webpack and published on npm.' },
      de: { functional: 'Eine TypeScript-Bibliothek mit über 50 UI-Komponenten, Formulareingaben, Buttons, Navigation, Modals, Drawers, Karussells und mehr, aus JavaScript erstellt, framework-agnostisch und tree-shakable.', technical: 'Auf DOMelemJS aufgebaut, vollständig typsicher mit IntelliSense, Portal-Support für Drawers und Modals, gebündelt mit Webpack und auf npm veröffentlicht.' },
      hu: { functional: 'TypeScript könyvtár 50+ UI komponenssel, űrlapmezők, gombok, navigáció, modálok, fiókok, karusszelek és még sok más, JavaScriptből létrehozva, keretrendszertől függetlenül és tree-shakable módon.', technical: 'A DOMelemJS-re épül, teljesen típusbiztos IntelliSense támogatással, portal-támogatás a fiókokhoz és modálokhoz, Webpack-kel csomagolva és npm-en publikálva.' },
      fr: { functional: 'Une bibliothèque TypeScript avec plus de 50 composants UI, champs de formulaire, boutons, navigation, modales, tiroirs, carrousels et plus, créés depuis JavaScript, agnostique et tree-shakable.', technical: 'Construite sur DOMelemJS, entièrement type-safe avec IntelliSense, support de portail pour tiroirs et modales, bundling Webpack et publiée sur npm.' },
      it: { functional: 'Una libreria TypeScript con oltre 50 componenti UI, campi di input, bottoni, navigazione, modali, drawer, caroselli e altro, creati da JavaScript, agnostica e tree-shakable.', technical: 'Costruita su DOMelemJS, completamente type-safe con IntelliSense, supporto portal per drawer e modali, bundling con Webpack e pubblicata su npm.' },
      es: { functional: 'Una librería TypeScript con más de 50 componentes de UI, campos de formulario, botones, navegación, modales, paneles, carruseles y más, creados desde JavaScript, agnóstica y tree-shakable.', technical: 'Construida sobre DOMelemJS, totalmente type-safe con IntelliSense, soporte portal para paneles y modales, empaquetada con Webpack y publicada en npm.' }
    }
  },
  {
    id: 'cv',
    name: 'CV, Viktor Bozzay',
    nameL10n: { hu: 'CV, Bozzay Viktor' },
    category: 'app',
    image: 'assets/images/projects/large/cv.jpg',
    tech: ['Vanilla JS', 'ES Modules', 'Formspree', 'Calendar API'],
    links: { repo: 'https://github.com/exphoenee/CV', demo: 'https://viktor.bozzay.online' },
    desc: {
      en: { functional: 'A multi-view, interactive CV in the browser: six presentations plus an RPG game from a single data source, with 12 languages, theme switching, an email-sending contact form via Formspree, and online appointment booking through the Google Calendar API.', technical: 'Data-driven architecture (CV_DATA) with framework-free vanilla JS ES modules, a custom game engine, music player, MX-record email domain validation, Formspree contact form, and a Google Apps Script backend with rate-limited calendar booking.' },
      de: { functional: 'Ein mehransichtiger, interaktiver Lebenslauf im Browser: sechs Präsentationen plus ein RPG-Spiel aus einer Datenquelle, mit 12 Sprachen, Theme-Wechsel, Kontaktformular mit E-Mail-Versand über Formspree und Online-Terminbuchung über die Google-Calendar-API.', technical: 'Datengetriebene Architektur (CV_DATA), Vanilla-JS-ES-Module ohne Framework, eigene Spiele-Engine, Musikplayer, E-Mail-Domain-Validierung per MX-Record, Formspree-Kontaktformular und ein Google-Apps-Script-Backend mit Rate-Limit-Terminbuchung.' },
      hu: { functional: 'Több nézetű, interaktív önéletrajz a böngészőben: hat megjelenítés plusz egy RPG-játék egyetlen adatforrásból, 12 nyelvvel, témaváltással, e-mailt küldő kapcsolatfelvételi űrlappal (Formspree) és online időpontfoglalással a Google Calendar API-n keresztül.', technical: 'Adatvezérelt architektúra (CV_DATA), keretrendszer nélküli vanilla JS ES-modulok, egyedi játékmotor, zenelejátszó, MX-rekord alapú e-mail domain-ellenőrzés, Formspree kapcsolatfelvételi űrlap és Google Apps Script backend rate-limites időpontfoglalással.' },
      fr: { functional: 'Un CV interactif multi-vues dans le navigateur : six présentations plus un jeu RPG depuis une source unique, avec 12 langues, changement de thème, un formulaire de contact qui envoie un e-mail via Formspree et une prise de rendez-vous en ligne via l\u2019API Google Calendar.', technical: 'Architecture pilotée par les données (CV_DATA), modules ES vanilla JS sans framework, moteur de jeu maison, lecteur de musique, validation de domaine email par enregistrement MX, formulaire Formspree et backend Google Apps Script avec réservation limitée.' },
      it: { functional: 'Un CV interattivo multi-vista nel browser: sei presentazioni più un gioco RPG da un\u2019unica fonte dati, con 12 lingue, cambio tema, un modulo di contatto che invia email via Formspree e prenotazione di appuntamenti online tramite Google Calendar API.', technical: 'Architettura data-driven (CV_DATA), moduli ES vanilla JS senza framework, game engine custom, music player, validazione dominio email tramite record MX, modulo di contatto Formspree e backend Google Apps Script con prenotazioni rate-limited.' },
      es: { functional: 'Un CV interactivo multivista en el navegador: seis presentaciones más un juego RPG desde una única fuente de datos, con 12 idiomas, cambio de tema, un formulario de contacto que envía correo vía Formspree y reserva de citas en línea mediante la API de Google Calendar.', technical: 'Arquitectura basada en datos (CV_DATA), módulos ES vanilla JS sin frameworks, motor de juego propio, reproductor de música, validación de dominio de correo mediante registros MX, formulario Formspree y backend de Google Apps Script con reservas con límite de tasa.' }
    }
  },
  {
    id: 'domelemjs',
    name: 'DOMelemJS',
    category: 'library',
    image: 'assets/images/projects/large/domelemjs.jpg',
    tech: ['TypeScript', 'Zero-dep', 'tsup', 'Vitest'],
    links: { repo: 'https://github.com/exphoenee/DOMelemJS', npm: 'https://www.npmjs.com/package/domelemjs' },
    desc: {
      en: { functional: 'A lightweight, zero-dependency TypeScript library for dynamically creating HTML elements from JavaScript with a clean, declarative API.', technical: 'Ships as ESM/CJS with type declarations, tree-shakable, tested with Vitest, bundled with tsup and published on npm with full IntelliSense support.' },
      de: { functional: 'Eine schlanke TypeScript-Bibliothek ohne Abhängigkeiten zum dynamischen Erstellen von HTML-Elementen aus JavaScript mit einer sauberen, deklarativen API.', technical: 'Als ESM/CJS mit Typdeklarationen geliefert, tree-shakable, mit Vitest getestet, mit tsup gebündelt und mit voller IntelliSense-Unterstützung auf npm veröffentlicht.' },
      hu: { functional: 'Könnyű, függőségmentes TypeScript könyvtár HTML-elemek JavaScriptből történő dinamikus létrehozásához, tiszta, deklaratív API-val.', technical: 'ESM/CJS formában, típusdeklarációkkal szállítva, tree-shakable, Vitest-tel tesztelve, tsup-pal csomagolva és teljes IntelliSense támogatással npm-en publikálva.' },
      fr: { functional: 'Une bibliothèque TypeScript légère sans dépendance pour créer dynamiquement des éléments HTML depuis JavaScript avec une API propre et déclarative.', technical: 'Livrée en ESM/CJS avec déclarations de types, tree-shakable, testée avec Vitest, bundlée avec tsup et publiée sur npm avec support IntelliSense complet.' },
      it: { functional: 'Una libreria TypeScript leggera a zero dipendenze per creare dinamicamente elementi HTML da JavaScript con un\u2019API pulita e dichiarativa.', technical: 'Distribuita come ESM/CJS con dichiarazioni di tipo, tree-shakable, testata con Vitest, bundlata con tsup e pubblicata su npm con supporto IntelliSense completo.' },
      es: { functional: 'Una librería TypeScript ligera sin dependencias para crear dinámicamente elementos HTML desde JavaScript con una API limpia y declarativa.', technical: 'Distribuida como ESM/CJS con declaraciones de tipos, tree-shakable, probada con Vitest, empaquetada con tsup y publicada en npm con soporte completo de IntelliSense.' }
    }
  },
  {
    id: 'facts-login',
    name: 'FACTS',
    category: 'app',
    image: 'assets/images/projects/large/facts.jpg',
    tech: ['React', 'TypeScript', 'Monorepo', 'Vitest', 'PNPM'],
    links: { demo: 'https://www.factslogin.com' },
    desc: {
      en: { functional: 'The secure login portal of FACTS, a compliance platform for the renewable fuels industry that tracks every feedstock transaction from collection to refinery with full traceability and chain-of-custody control.', technical: 'A production web portal with enterprise authentication options (including Microsoft login), role-based secure access and confidential, audit-ready record keeping for EPA-compliant feedstock tracking.' },
      de: { functional: 'Das sichere Login-Portal von FACTS, eine Compliance-Plattform für die erneuerbare Kraftstoffindustrie, die jede Rohstofftransaktion von der Sammlung bis zur Raffinerie mit vollständiger Rückverfolgbarkeit und Chain-of-Custody-Kontrolle verfolgt.', technical: 'Ein produktives Webportal mit Unternehmens-Authentifizierung (inkl. Microsoft-Login), rollenbasierter Sicherheit und vertraulicher, auditfähiger Dokumentation für EPA-konformes Rohstoff-Tracking.' },
      hu: { functional: 'A FACTS biztonságos belépőportálja, a megújuló üzemanyagipar megfelelőségi platformja, amely minden nyersanyag-tranzakciót a begyűjtéstől a finomítóig teljes nyomon követhetőséggel és nyomonkövetési lánc (chain of custody) kontrollal követ.', technical: 'Éles webportál vállalati hitelesítési opciókkal (Microsoft-bejelentkezéssel is), szerepkör-alapú biztonságos hozzáféréssel és bizalmas, auditkész nyilvántartással az EPA-megfelelő nyersanyag-nyomonkövetéshez.' },
      fr: { functional: 'Le portail de connexion sécurisé de FACTS, une plateforme de conformité pour l\u2019industrie des carburants renouvelables qui suit chaque transaction de matière première, de la collecte à la raffinerie, avec traçabilité complète et contrôle de chaîne de possession.', technical: 'Un portail web de production avec options d\u2019authentification entreprise (y compris Microsoft), accès sécurisé basé sur les rôles et tenue de registres confidentielle et vérifiable pour le suivi conforme des matières premières.' },
      it: { functional: 'Il portale di accesso sicuro di FACTS, una piattaforma di conformità per l\u2019industria dei carburanti rinnovabili che traccia ogni transazione di materia prima dalla raccolta alla raffineria con tracciabilità completa e controllo della catena di custodia.', technical: 'Un portale web di produzione con opzioni di autenticazione enterprise (incluso il login Microsoft), accesso sicuro basato sui ruoli e registri riservati e verificabili per il monitoraggio conforme delle materie prime.' },
      es: { functional: 'El portal de inicio de sesión seguro de FACTS, una plataforma de cumplimiento para la industria de combustibles renovables que rastrea cada transacción de materia prima desde la recogida hasta la refinería con trazabilidad total y control de cadena de custodia.', technical: 'Un portal web de producción con opciones de autenticación empresarial (incluido el inicio de sesión de Microsoft), acceso seguro basado en roles y registros confidenciales y auditables para el seguimiento de materias primas conforme a la EPA.' }
    }
  },
  {
    id: 'driver-app',
    name: 'FACTS Driver App',
    category: 'app',
    image: 'assets/images/projects/large/driver.jpg',
    tech: ['React', 'TypeScript', 'HERE Maps', 'Monorepo', 'Vitest', 'PNPM'],
    links: { demo: 'https://routes.factslogin.com' },
    desc: {
      en: { functional: 'A driver application for the FACTS logistics platform that organises and tracks biodiesel feedstock (used cooking oil) collections and monitors CO₂ emissions, route management and daily driver operations on a modern, data-driven frontend.', technical: 'Because of the second sibling application, the codebase was migrated into a monorepo and the shared logic moved into a single package; to support the developers I also built a CLI that speeds up and assists their work.' },
      de: { functional: 'Eine Fahrer-App für die FACTS-Logistikplattform, die Biodiesel-Rohstoff (gebrauchtes Speiseöl) Sammlungen organisiert und verfolgt und die CO₂-Emissionen überwacht, Routenverwaltung und tägliche Fahrerabläufe in einer modernen, datengetriebenen Oberfläche.', technical: 'Wegen der zweiten Schwesteranwendung wurde die Codebasis in ein Monorepo migriert und die gemeinsame Logik in ein einziges Paket verschoben; zur Unterstützung der Entwickler habe ich außerdem ein CLI gebaut, das ihre Arbeit beschleunigt und unterstützt.' },
      hu: { functional: 'Sofőr-alkalmazás a FACTS logisztikai platformhoz, amely a biodízel alapanyag (használt sütőolaj) begyűjtéseinek szervezésére és nyomon követésére, valamint a CO₂-kibocsátás monitorozására készült, útvonal-kezelés és napi sofőr-műveletek egy modern, adatvezérelt felületen.', technical: 'A második testvéralkalmazás okán a kódbázist monorepóba migráltam, a közös logikát pedig egyetlen package-be helyeztem át; a fejlesztők támogatására pedig egy CLI-t is készítettem, amivel felgyorsítottam és segítettem a munkájukat.' },
      fr: { functional: 'Une application chauffeur pour la plateforme logistique FACTS qui organise et suit les collectes de matière première biodiesel (huile de cuisson usagée) et surveille les émissions de CO₂, gestion des itinéraires et opérations quotidiennes des chauffeurs dans une interface moderne orientée données.', technical: 'En raison de la deuxième application sœur, la base de code a été migrée vers un monorepo et la logique commune déplacée dans un seul package ; pour soutenir les développeurs, j’ai aussi créé un CLI qui accélère et assiste leur travail.' },
      it: { functional: 'Un’app per conducenti per la piattaforma logistica FACTS che organizza e traccia le raccolte di materia prima biodiesel (olio da cucina esausto) e monitora le emissioni di CO₂, gestione dei percorsi e operazioni quotidiane dei conducenti in un frontend moderno e data-driven.', technical: 'A causa della seconda applicazione gemella, la codebase è stata migrata in un monorepo e la logica condivisa è stata spostata in un unico pacchetto; per supportare gli sviluppatori ho anche creato una CLI che accelera e supporta il loro lavoro.' },
      es: { functional: 'Una aplicación para conductores de la plataforma logística FACTS que organiza y rastrea las recogidas de materia prima de biodiesel (aceite de cocina usado) y monitoriza las emisiones de CO₂, gestión de rutas y operaciones diarias de conductores en una interfaz moderna basada en datos.', technical: 'Debido a la segunda aplicación hermana, la base de código se migró a un monorepo y la lógica compartida se movió a un único paquete; para apoyar a los desarrolladores también creé una CLI que acelera y asiste su trabajo.' }
    }
  },
  {
    id: 'fundmypitch',
    name: 'FundMyPitch',
    category: 'app',
    image: 'assets/images/projects/large/fundmypitch.jpg',
    tech: ['Responsive'],
    links: { demo: 'https://www.fundmypitch.com' },
    desc: {
      en: { functional: 'A funding platform that connects startups and SMEs with investors, companies present their pitch, gain visibility and raise capital in a structured, transparent process.', technical: 'A modern web platform for the fintech ecosystem with company profiles, pitch presentations and investor matchmaking, built for the UK SME funding market.' },
      de: { functional: 'Eine Finanzierungsplattform, die Startups und KMU mit Investoren verbindet, Unternehmen präsentieren ihren Pitch, gewinnen Sichtbarkeit und sammeln Kapital in einem strukturierten, transparenten Prozess.', technical: 'Eine moderne Webplattform für das Fintech-Ökosystem mit Unternehmensprofilen, Pitch-Präsentationen und Investoren-Matchmaking, gebaut für den britischen KMU-Finanzierungsmarkt.' },
      hu: { functional: 'Finanszírozási platform, amely induló vállalkozásokat és KKV-kat köt össze befektetőkkel, a cégek bemutatják pitchüket, láthatóságot szereznek és tőkét gyűjtenek strukturált, átlátható folyamatban.', technical: 'Modern webes platform a fintech-ökoszisztémához céges profilokkal, pitch-bemutatókkal és befektető-megfeleltetéssel, a brit KKV-finanszírozási piacra építve.' },
      fr: { functional: 'Une plateforme de financement qui met en relation startups et PME avec des investisseurs, les entreprises présentent leur pitch, gagnent en visibilité et lèvent des fonds dans un processus structuré et transparent.', technical: 'Une plateforme web moderne pour l\u2019écosystème fintech avec profils d\u2019entreprises, présentations de pitch et mise en relation avec des investisseurs, conçue pour le marché britannique du financement des PME.' },
      it: { functional: 'Una piattaforma di finanziamento che collega startup e PMI con gli investitori, le aziende presentano il loro pitch, guadagnano visibilità e raccolgono capitale in un processo strutturato e trasparente.', technical: 'Una piattaforma web moderna per l\u2019ecosistema fintech con profili aziendali, presentazioni di pitch e matchmaking con gli investitori, costruita per il mercato britannico dei finanziamenti alle PMI.' },
      es: { functional: 'Una plataforma de financiación que conecta startups y pymes con inversores, las empresas presentan su pitch, ganan visibilidad y recaudan capital en un proceso estructurado y transparente.', technical: 'Una plataforma web moderna para el ecosistema fintech con perfiles de empresa, presentaciones de pitch y emparejamiento con inversores, construida para el mercado británico de financiación de pymes.' }
    }
  },
  {
    id: 'pageonmobile',
    name: 'Page on Mobile',
    category: 'library',
    image: 'assets/images/projects/large/pageonmobile.jpg',
    tech: ['TypeScript', 'Canvas', 'ESM'],
    links: { repo: 'https://github.com/exphoenee/pageonmobile', demo: 'https://exphoenee.github.io/pageonmobile/', npm: 'https://www.npmjs.com/package/pageonmobile' },
    desc: {
      en: { functional: 'A dependency-free widget that renders website screenshots into device mockups, desktop, notebook, tablet, phone, on a canvas, with an auto-scroll preview animation.', technical: 'TypeScript ESM package with zero runtime dependencies, Canvas 2D rendering, WebP device frames, ~7 kB JS payload and full type declarations.' },
      de: { functional: 'Ein abhängigkeitsfreies Widget, das Website-Screenshots in Geräte-Mockups rendert, Desktop, Notebook, Tablet, Handy, auf einem Canvas, mit Auto-Scroll-Vorschau-Animation.', technical: 'TypeScript-ESM-Paket ohne Laufzeitabhängigkeiten, Canvas-2D-Rendering, WebP-Geräterahmen, ~7-kB-JS-Payload und vollständige Typdeklarationen.' },
      hu: { functional: 'Függőségmentes widget, amely weboldal-képernyőképeket eszköz-mockupokba renderel, asztali gép, laptop, tablet, telefon, canvasra, automatikus görgetős előnézeti animációval.', technical: 'TypeScript ESM-csomag nulla futásidejű függőséggel, Canvas 2D renderelés, WebP eszközkeretek, ~7 kB JS-méret és teljes típusdeklarációk.' },
      fr: { functional: 'Un widget sans dépendance qui rend des captures d\u2019écran de sites dans des maquettes d\u2019appareils, desktop, notebook, tablette, téléphone, sur un canvas, avec animation d\u2019aperçu à défilement auto.', technical: 'Paquet ESM TypeScript sans dépendances à l\u2019exécution, rendu Canvas 2D, cadres d\u2019appareils WebP, ~7 kB de JS et déclarations de types complètes.' },
      it: { functional: 'Un widget senza dipendenze che renderizza screenshot di siti web in mockup di dispositivi, desktop, notebook, tablet, telefono, su canvas, con animazione di anteprima a scorrimento automatico.', technical: 'Pacchetto ESM TypeScript con zero dipendenze runtime, rendering Canvas 2D, cornici dispositivi WebP, ~7 kB di JS e dichiarazioni di tipo complete.' },
      es: { functional: 'Un widget sin dependencias que renderiza capturas de pantalla de sitios web en maquetas de dispositivos, escritorio, portátil, tablet, teléfono, en un canvas, con animación de vista previa de scroll automático.', technical: 'Paquete ESM TypeScript con cero dependencias en runtime, renderizado Canvas 2D, marcos de dispositivos WebP, ~7 kB de JS y declaraciones de tipos completas.' }
    }
  },
  {
    id: 'pecscoach',
    name: 'Pécs Coach',
    category: 'website',
    image: 'assets/images/projects/large/pecscoach.jpg',
    tech: ['Bootstrap', 'Glide.js', 'AOS'],
    links: { repo: 'https://github.com/exphoenee/pecscoach', demo: 'https://pecscoach.hu' },
    desc: {
      en: { functional: 'A professional coaching website for a Pécs-based coach: services, about section, blog and contact, fully responsive and search-engine friendly.', technical: 'Built with Bootstrap 5, Glide.js carousels, AOS scroll animations and custom CSS, with semantic HTML and lazy-loaded images for performance.' },
      de: { functional: 'Eine professionelle Coaching-Website für einen Coach aus Pécs: Leistungen, Über-uns-Bereich, Blog und Kontakt, vollständig responsiv und suchmaschinenfreundlich.', technical: 'Gebaut mit Bootstrap 5, Glide.js-Karussells, AOS-Scroll-Animationen und eigenem CSS, mit semantischem HTML und lazy-loadenden Bildern für die Performance.' },
      hu: { functional: 'Professzionális coaching-weboldal egy pécsi coach számára: szolgáltatások, bemutatkozás, blog és kapcsolat, teljesen reszponzív és keresőbarát.', technical: 'Bootstrap 5-tel, Glide.js-karusszelekkel, AOS görgetési animációkkal és egyedi CSS-sel építve, szemantikus HTML-lel és lustán betöltődő képekkel a teljesítmény érdekében.' },
      fr: { functional: 'Un site de coaching professionnel pour un coach basé à Pécs : services, section à propos, blog et contact, entièrement responsive et optimisé pour les moteurs de recherche.', technical: 'Construit avec Bootstrap 5, carrousels Glide.js, animations de scroll AOS et CSS personnalisé, avec HTML sémantique et images en lazy-load pour la performance.' },
      it: { functional: 'Un sito di coaching professionale per un coach di Pécs: servizi, sezione about, blog e contatti, completamente responsive e ottimizzato per i motori di ricerca.', technical: 'Costruito con Bootstrap 5, caroselli Glide.js, animazioni di scroll AOS e CSS personalizzato, con HTML semantico e immagini lazy-loaded per le prestazioni.' },
      es: { functional: 'Un sitio web de coaching profesional para un coach de Pécs: servicios, sección sobre mí, blog y contacto, totalmente responsive y optimizado para buscadores.', technical: 'Construido con Bootstrap 5, carruseles Glide.js, animaciones de scroll AOS y CSS personalizado, con HTML semántico e imágenes con carga diferida para el rendimiento.' }
    }
  },
  {
    id: 'space-travel',
    name: 'Realtime Space Travel',
    category: 'game',
    image: 'assets/images/projects/large/space-travel.jpg',
    tech: ['React', 'TypeScript', 'Firebase', 'TensorFlow.js', 'Stripe'],
    links: { repo: 'https://github.com/exphoenee/realtime_space_travel', demo: 'https://realtimespacetravel-e74e3.web.app' },
    desc: {
      en: { functional: 'A real-time space travel simulator game: stay attentive as your starship crosses the galaxy in real time, the ultimate test of focus, deployed on Firebase Hosting.', technical: 'React + TypeScript + Vite, TensorFlow.js face-detection, Stripe payments, Zustand state management, i18next localization and Vitest testing.' },
      de: { functional: 'Ein Echtzeit-Weltraumreise-Simulatorspiel: Bleib aufmerksam, während dein Raumschiff die Galaxie in Echtzeit durchquert, der ultimative Fokustest, deployed auf Firebase Hosting.', technical: 'React + TypeScript + Vite, TensorFlow.js-Gesichtserkennung, Stripe-Zahlungen, Zustand-State-Management, i18next-Lokalisierung und Vitest-Tests.' },
      hu: { functional: 'Valós idejű űrutazás-szimulátor játék: maradj éber, amíg a csillaghajód valós időben átszeli a galaxist, a figyelem végső próbája, Firebase Hostingon telepítve.', technical: 'React + TypeScript + Vite, TensorFlow.js arcfelismerés, Stripe-fizetés, Zustand állapotkezelés, i18next lokalizáció és Vitest-tesztelés.' },
      fr: { functional: 'Un jeu simulateur de voyage spatial en temps réel : restez attentif pendant que votre vaisseau traverse la galaxie en temps réel, le test ultime de concentration, déployé sur Firebase Hosting.', technical: 'React + TypeScript + Vite, détection faciale TensorFlow.js, paiements Stripe, gestion d\u2019état Zustand, localisation i18next et tests Vitest.' },
      it: { functional: 'Un gioco simulatore di viaggio spaziale in tempo reale: resta vigile mentre la tua astronave attraversa la galassia in tempo reale, la prova definitiva di concentrazione, deploy su Firebase Hosting.', technical: 'React + TypeScript + Vite, rilevamento facciale TensorFlow.js, pagamenti Stripe, state management Zustand, localizzazione i18next e testing Vitest.' },
      es: { functional: 'Un juego simulador de viaje espacial en tiempo real: mantente atento mientras tu nave cruza la galaxia en tiempo real, la prueba definitiva de concentración, desplegado en Firebase Hosting.', technical: 'React + TypeScript + Vite, detección facial TensorFlow.js, pagos con Stripe, gestión de estado Zustand, localización i18next y pruebas Vitest.' }
    }
  },
  {
    id: 'rps-ts',
    name: 'Rock Paper Scissors',
    category: 'game',
    image: 'assets/images/projects/large/rockpaperscissors-ts.jpg',
    tech: ['TypeScript', 'Vite', 'Vitest', 'DOMelemJS'],
    links: { repo: 'https://github.com/exphoenee/RockPaperScissors-TS', demo: 'https://exphoenee.github.io/RockPaperScissors-TS/' },
    desc: {
      en: { functional: 'A TypeScript rewrite of the classic game with two modes (Classic and Big Bang Theory), a rolling choice animation, per-player statistics and a \"flashlight\" theme.', technical: 'Hand-rolled declarative DOM layer built on DOMelemJS, obfuscated and schema-validated state persistence in localStorage, Vite build and Vitest tests.' },
      de: { functional: 'Eine TypeScript-Neuauflage des klassischen Spiels mit zwei Modi (Classic und Big Bang Theory), rollender Auswahlanimation, Statistiken pro Spieler und einem „Taschenlampen\u201c-Theme.', technical: 'Handgebaute deklarative DOM-Schicht auf DOMelemJS-Basis, verschleierte und schema-validierte Zustandspersistenz in localStorage, Vite-Build und Vitest-Tests.' },
      hu: { functional: 'A klasszikus játék TypeScript-átirata két móddal (Classic és Big Bang Theory), gördülő választásanimációval, játékosonkénti statisztikákkal és „zseblámpa\u201d témával.', technical: 'Kézzel épített deklaratív DOM-réteg a DOMelemJS alapjain, obfuszkált és séma-validált állapotperszisztencia localStorage-ban, Vite-build és Vitest-tesztek.' },
      fr: { functional: 'Une réécriture TypeScript du jeu classique avec deux modes (Classic et Big Bang Theory), une animation de choix rotative, des statistiques par joueur et un thème « lampe torche ».', technical: 'Couche DOM déclarative faite main basée sur DOMelemJS, persistance d\u2019état obscurcie et validée par schéma dans localStorage, build Vite et tests Vitest.' },
      it: { functional: 'Una riscrittura TypeScript del gioco classico con due modalità (Classic e Big Bang Theory), animazione di scelta rotante, statistiche per giocatore e tema "torcia".', technical: 'Layer DOM dichiarativo fatto a mano basato su DOMelemJS, persistenza di stato offuscata e validata da schema in localStorage, build Vite e test Vitest.' },
      es: { functional: 'Una reescritura TypeScript del juego clásico con dos modos (Clásico y Teoría del Big Bang), animación de elección giratoria, estadísticas por jugador y un tema "linterna".', technical: 'Capa DOM declarativa hecha a mano basada en DOMelemJS, persistencia de estado ofuscada y validada por esquema en localStorage, build con Vite y pruebas Vitest.' }
    }
  },
  {
    id: 'romannumbers',
    name: 'RomanNumbersJS',
    category: 'library',
    image: 'assets/images/projects/large/romannumbersjs.jpg',
    tech: ['TypeScript', 'npm', 'Jest'],
    links: { repo: 'https://github.com/exphoenee/RomanNumbersJS', demo: 'https://exphoenee.github.io/RomanNumbersJS/', npm: 'https://www.npmjs.com/package/romannumbersjs' },
    desc: {
      en: { functional: 'A tiny npm package that converts Arabic numbers to Roman numerals and back, with full documentation and a live demo page.', technical: 'TypeScript source with dual CJS/ESM builds, Jest test coverage, Terser minification and a generated docs site on GitHub Pages.' },
      de: { functional: 'Ein winziges npm-Paket zum Umwandeln arabischer Zahlen in römische Ziffern und zurück, mit vollständiger Dokumentation und Live-Demo-Seite.', technical: 'TypeScript-Quellcode mit dualen CJS/ESM-Builds, Jest-Testabdeckung, Terser-Minifizierung und einer generierten Dokumentationsseite auf GitHub Pages.' },
      hu: { functional: 'Apró npm-csomag, amely arab számokat római számokká alakít és vissza, teljes dokumentációval és élő demóoldallal.', technical: 'TypeScript-forrás kettős CJS/ESM builddel, Jest-teszlefedettséggel, Terser-minifikálással és generált dokumentációs oldallal a GitHub Pages-en.' },
      fr: { functional: 'Un petit paquet npm qui convertit les nombres arabes en chiffres romains et inversement, avec documentation complète et page de démo en direct.', technical: 'Source TypeScript avec builds CJS/ESM doubles, couverture de tests Jest, minification Terser et site de documentation généré sur GitHub Pages.' },
      it: { functional: 'Un piccolo pacchetto npm che converte numeri arabi in numeri romani e viceversa, con documentazione completa e pagina demo live.', technical: 'Sorgente TypeScript con build CJS/ESM doppie, copertura test Jest, minificazione Terser e sito di documentazione generato su GitHub Pages.' },
      es: { functional: 'Un pequeño paquete npm que convierte números arábigos a números romanos y viceversa, con documentación completa y página de demo en vivo.', technical: 'Código fuente TypeScript con builds duales CJS/ESM, cobertura de pruebas Jest, minificación Terser y sitio de documentación generado en GitHub Pages.' }
    }
  },
  {
    id: 'scolia-darts',
    name: 'Scolia Darts',
    category: 'game',
    image: 'assets/images/projects/large/scolia.jpg',
    tech: ['JavaScript', 'Redux', 'Jest', 'i18next', 'Real-time'],
    links: { demo: 'https://game.scoliadarts.com' },
    desc: {
      en: { functional: 'The web client of the Scolia automatic darts scoring system: X01, Cricket, Around the Clock and more game modes, an online lobby, tournaments, bot opponents and detailed statistics, on any device.', technical: 'A browser-based real-time interface that connects to Scolia hardware, displaying scores and running games on smartphones, tablets, PCs and smart TVs with millimeter-accurate throw tracking.' },
      de: { functional: 'Der Web-Client des automatischen Dart-Scoring-Systems Scolia: X01, Cricket, Around the Clock und weitere Spielmodi, Online-Lobby, Turniere, Bot-Gegner und detaillierte Statistiken, auf jedem Gerät.', technical: 'Eine browserbasierte Echtzeit-Oberfläche, die sich mit der Scolia-Hardware verbindet, Punkte anzeigt und Spiele auf Smartphones, Tablets, PCs und Smart-TVs mit millimetergenauem Wurftracking ausführt.' },
      hu: { functional: 'A Scolia automatikus dartspontozó-rendszer webes kliensének a játékfelülete: X01, Cricket, Around the Clock és további játékmódok, online lobby, versenyek, bot-ellenfelek és részletes statisztikák, bármilyen eszközön.', technical: 'Böngészőalapú, valós idejű felület, amely a Scolia-hardverhez kapcsolódva pontszámokat jelenít meg és játékokat futtat telefonon, tableten, PC-n és smart TV-n, milliméter-pontos dobáskövetéssel.' },
      fr: { functional: 'Le client web du système de scoring automatique de fléchettes Scolia : X01, Cricket, Around the Clock et d\u2019autres modes de jeu, un lobby en ligne, des tournois, des adversaires bots et des statistiques détaillées, sur n\u2019importe quel appareil.', technical: 'Une interface temps réel basée sur navigateur qui se connecte au matériel Scolia, affiche les scores et lance des parties sur smartphones, tablettes, PC et TV connectées avec un suivi des lancers au millimètre près.' },
      it: { functional: 'Il client web del sistema di punteggio automatico per freccette Scolia: X01, Cricket, Around the Clock e altre modalità di gioco, lobby online, tornei, avversari bot e statistiche dettagliate, su qualsiasi dispositivo.', technical: 'Un\u2019interfaccia in tempo reale basata su browser che si collega all\u2019hardware Scolia, mostra i punteggi e gestisce le partite su smartphone, tablet, PC e smart TV con rilevamento dei lanci millimetrico.' },
      es: { functional: 'El cliente web del sistema de puntuación automática de dardos Scolia: X01, Cricket, Around the Clock y más modos de juego, lobby en línea, torneos, oponentes bot y estadísticas detalladas, en cualquier dispositivo.', technical: 'Una interfaz en tiempo real basada en navegador que se conecta al hardware de Scolia, muestra las puntuaciones y ejecuta partidas en smartphones, tablets, PC y smart TVs con seguimiento de lanzamientos de precisión milimétrica.' }
    }
  },
  {
    id: 'smartedu',
    name: 'SmartEdu',
    category: 'app',
    image: 'assets/images/projects/large/smartedu.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: { demo: 'https://smartedu.hu' },
    desc: {
      en: { functional: 'I designed the UI of an education platform for adult and public education.', technical: 'Pixel-perfect creation of the screenshots from the design plan, hand-coded with HTML, CSS and JavaScript.' },
      de: { functional: 'Ich habe die Benutzeroberfläche einer Bildungsplattform für die Erwachsenen- und öffentliche Bildung gestaltet.', technical: 'Pixelgenaue Erstellung der Screenshots nach Designvorlage, handcodiert mit HTML, CSS und JavaScript.' },
      hu: { functional: 'Felnőtt és közoktatási oktatási platform designját készítettem el.', technical: 'Képernyőképek pixelpontos elkészítése design terv alapján, HTML, CSS és JavaScript technológiákkal.' },
      fr: { functional: 'J\u2019ai conçu l\u2019interface d\u2019une plateforme éducative pour l\u2019éducation des adultes et l\u2019enseignement public.', technical: 'Création pixel-perfect des captures d\u2019écran à partir du plan de design, codée en HTML, CSS et JavaScript.' },
      it: { functional: 'Ho progettato l\u2019interfaccia di una piattaforma educativa per l\u2019istruzione degli adulti e quella pubblica.', technical: 'Creazione pixel-perfect degli screenshot dal piano di design, codificata in HTML, CSS e JavaScript.' },
      es: { functional: 'Diseñé la interfaz de una plataforma educativa para la educación de adultos y pública.', technical: 'Creación de capturas de pantalla pixel-perfect a partir del plan de diseño, codificada con HTML, CSS y JavaScript.' }
    }
  },
  {
    id: 'sudoku',
    name: 'Sudoku Solver API',
    category: 'api',
    image: 'assets/images/projects/large/sudoku-api.jpg',
    tech: ['Node.js', 'Express', 'TypeScript', 'Swagger'],
    links: { repo: 'https://github.com/exphoenee/SudokuSolver-API', demo: 'https://sudoku-solver-api.fly.dev/' },
    desc: {
      en: { functional: 'A REST API for solving and generating Sudoku puzzles using a backtracking algorithm, with live Swagger documentation and rate limiting.', technical: 'Node.js + Express + TypeScript, backtracking solver and puzzle generator, Zod validation, pino logging, swagger-jsdoc UI and Jest test suite.' },
      de: { functional: 'Eine REST-API zum Lösen und Generieren von Sudoku-Rätseln mit einem Backtracking-Algorithmus, mit Live-Swagger-Dokumentation und Rate-Limiting.', technical: 'Node.js + Express + TypeScript, Backtracking-Solver und Rätselgenerator, Zod-Validierung, pino-Logging, swagger-jsdoc-UI und Jest-Testsuite.' },
      hu: { functional: 'REST API Sudoku-feladványok megoldására és generálására backtracking algoritmussal, élő Swagger-dokumentációval és rate limitinggel.', technical: 'Node.js + Express + TypeScript, backtracking megoldó és feladványgenerátor, Zod-validáció, pino-naplózás, swagger-jsdoc UI és Jest-tesztcsomag.' },
      fr: { functional: 'Une API REST pour résoudre et générer des grilles de Sudoku avec un algorithme de backtracking, documentation Swagger en direct et limitation de débit.', technical: 'Node.js + Express + TypeScript, solveur backtracking et générateur de grilles, validation Zod, logging pino, UI swagger-jsdoc et suite de tests Jest.' },
      it: { functional: 'Una REST API per risolvere e generare griglie di Sudoku usando un algoritmo di backtracking, con documentazione Swagger live e rate limiting.', technical: 'Node.js + Express + TypeScript, solver backtracking e generatore di griglie, validazione Zod, logging pino, UI swagger-jsdoc e suite di test Jest.' },
      es: { functional: 'Una API REST para resolver y generar tableros de Sudoku con un algoritmo de backtracking, con documentación Swagger en vivo y limitación de tasa.', technical: 'Node.js + Express + TypeScript, solver de backtracking y generador de tableros, validación Zod, logging con pino, UI swagger-jsdoc y suite de pruebas Jest.' }
    }
  },
  {
    id: 'szelacoaching',
    name: 'Szela Coaching',
    category: 'website',
    image: 'assets/images/projects/large/szelacoaching.jpg',
    tech: ['PHP', 'MySQL', 'MVC', 'Bootstrap'],
    links: { demo: 'https://szelacoaching.hu' },
    desc: {
      en: { functional: 'The web app is a coaching website: a showcase landing page, services, about section, references/testimonials, a contact section and a blog. It includes an admin interface for editing content and managing blog posts, plus login/logout functionality. It also handles the GDPR/cookie notice, the imprint and social links in the footer.', technical: 'A custom, PHP-based server-side web application with a MySQL database and session-based login. The architecture is close to MVC: split into controller/, model/, view/ and system/ layers, with index.php as the central entry point that selects the page. The frontend is built on Bootstrap, custom CSS and media files, extended with blog management, image upload and admin features.' },
      de: { functional: 'Die Webapp ist eine Coaching-Website: eine Präsentations-Landingpage, Leistungen, Über-mich-Bereich, Referenzen/Testimonials, Kontaktbereich und Blog. Sie enthält ein Admin-Panel zum Bearbeiten von Inhalten und Verwalten von Blogbeiträgen sowie Login-/Logout-Funktion. Außerdem verwaltet sie die GDPR/Cookie-Hinweise, das Impressum und soziale Links in der Fußzeile.', technical: 'Eine individuelle, PHP-basierte serverseitige Webanwendung mit MySQL-Datenbank und sessionbasierter Anmeldung. Die Architektur ist nahezu MVC: unterteilt in controller/, model/, view/- und system/-Ebenen, wobei index.php als zentraler Einstiegspunkt die Seite auswählt. Das Erscheinungsbild basiert auf Bootstrap, eigenem CSS und Mediendateien, ergänzt um Blogverwaltung, Bild-Upload und Admin-Funktionen.' },
      hu: { functional: 'A webapp egy coaching honlap: bemutató landing page-et, szolgáltatásokat, bemutatkozást, referenciákat/tesztimóniálékat, kapcsolatfelvételi részt és blogot kínál. Tartalmaz admin felületet a tartalmak szerkesztésére, blogbejegyzések kezelésére, illetve bejelentkezés/kijelentkezés funkciót. Emellett kezeli a GDPR/cookie tájékoztatót, impresszumot és láblécben elérhető közösségi linkeket.', technical: 'Egy egyedi, PHP-alapú, szerveroldali webalkalmazás, MySQL adatbázissal és session-alapú beléptetéssel. A felépítés közel MVC: controller/, model/, view/, system/ rétegekre van bontva, az index.php pedig központi belépési pontként választja ki az oldalt. A megjelenés Bootstrapre, saját CSS-re és médiafájlokra épül, blogkezeléssel, képfeltöltéssel és admin funkciókkal kiegészítve.' },
      fr: { functional: 'La webapp est un site de coaching : une landing page de présentation, des services, une section à propos, des références/témoignages, une section contact et un blog. Elle comprend une interface d’administration pour modifier le contenu et gérer les articles de blog, ainsi qu’une fonction de connexion/déconnexion. Elle gère également l’avis RGPD/cookies, les mentions légales et les liens sociaux dans le pied de page.', technical: 'Une application web personnalisée côté serveur, basée sur PHP, avec une base de données MySQL et une connexion par session. L’architecture est proche du MVC : divisée en couches controller/, model/, view/ et system/, avec index.php comme point d’entrée central qui sélectionne la page. L’interface repose sur Bootstrap, un CSS personnalisé et des fichiers médias, complétée par la gestion de blog, l’upload d’images et des fonctions d’administration.' },
      it: { functional: 'La webapp è un sito di coaching: una landing page di presentazione, servizi, sezione about, referenze/testimonianze, una sezione contatti e un blog. Include un’interfaccia di amministrazione per modificare i contenuti e gestire i post del blog, oltre alla funzione di login/logout. Gestisce inoltre l’informativa GDPR/cookie, l’impressum e i link social nel footer.', technical: 'Un’applicazione web personalizzata lato server basata su PHP, con database MySQL e autenticazione basata su sessione. L’architettura è vicina al MVC: suddivisa nei layer controller/, model/, view/ e system/, con index.php come punto di ingresso centrale che seleziona la pagina. L’interfaccia si basa su Bootstrap, CSS personalizzati e file multimediali, completata da gestione del blog, upload di immagini e funzioni admin.' },
      es: { functional: 'La webapp es un sitio de coaching: una landing page de presentación, servicios, sección sobre mí, referencias/testimonios, una sección de contacto y un blog. Incluye una interfaz de administración para editar contenidos y gestionar las entradas del blog, además de la función de iniciar/cerrar sesión. También gestiona el aviso de GDPR/cookies, el aviso legal y los enlaces sociales en el pie de página.', technical: 'Una aplicación web personalizada del lado del servidor basada en PHP, con base de datos MySQL e inicio de sesión basado en sesiones. La arquitectura está cerca del MVC: dividida en las capas controller/, model/, view/ y system/, con index.php como punto de entrada central que selecciona la página. La interfaz se basa en Bootstrap, CSS propio y archivos multimedia, complementada con gestión de blog, subida de imágenes y funciones de administración.' }
    }
  }
];

/* ------------------------------------------------------------
   CAREER TIMELINE, collected from the CV repository
   (cv-data.js workExperience + profile/bio.md)
   ------------------------------------------------------------ */
export const TIMELINE = [
  {
    period: { en: 'Nov 2023 – Present', de: 'Nov. 2023 – heute', hu: '2023. nov. – jelenleg', fr: 'Nov. 2023 – aujourd\u2019hui', it: 'Nov 2023 – oggi', es: 'Nov 2023 – actualidad' },
    title: { en: 'Frontend Tech Lead', de: 'Frontend Tech Lead', hu: 'Frontend Tech Lead', fr: 'Frontend Tech Lead', it: 'Frontend Tech Lead', es: 'Frontend Tech Lead' },
    company: 'Aegex Technologies',
    current: true,
    desc: {
      en: 'Leading frontend architecture, system design and legacy modernization with TypeScript, React and Node.js, including AI-assisted development workflows and CI quality gates.',
      de: 'Frontend-Architektur, Systemdesign und Legacy-Modernisierung mit TypeScript, React und Node.js, inklusive KI-gestützter Entwicklungs-Workflows und CI-Qualitätsgates.',
      hu: 'Frontend-architektúra, rendszertervezés és legacy-modernizáció TypeScript, React és Node.js technológiákkal, AI-támogatott fejlesztési workflow-kkal és CI-minőségkapukkal.',
      fr: 'Direction de l\u2019architecture frontend, du design système et de la modernisation de systèmes legacy avec TypeScript, React et Node.js, incluant des workflows assistés par IA et des quality gates CI.',
      it: 'Guido l\u2019architettura frontend, il design di sistema e la modernizzazione di sistemi legacy con TypeScript, React e Node.js, inclusi workflow assistiti da IA e quality gate CI.',
      es: 'Lidero la arquitectura frontend, el diseño de sistemas y la modernización de sistemas legacy con TypeScript, React y Node.js, incluidos flujos de trabajo asistidos por IA y puertas de calidad CI.'
    }
  },
  {
    period: { en: 'Jul 2023 – Nov 2023', de: 'Jul. 2023 – Nov. 2023', hu: '2023. júl. – 2023. nov.', fr: 'Juil. 2023 – Nov. 2023', it: 'Lug 2023 – Nov 2023', es: 'Jul 2023 – Nov 2023' },
    title: { en: 'Developer', de: 'Entwickler', hu: 'Fejlesztő', fr: 'Développeur', it: 'Sviluppatore', es: 'Desarrollador' },
    company: 'Deutsche Telekom IT Solutions HU',
    current: false,
    desc: {
      en: 'Software development in a large enterprise environment.',
      de: 'Softwareentwicklung in einem großen Unternehmensumfeld.',
      hu: 'Szoftverfejlesztés nagyvállalati környezetben.',
      fr: 'Développement logiciel dans un environnement de grande entreprise.',
      it: 'Sviluppo software in un ambiente aziendale di grandi dimensioni.',
      es: 'Desarrollo de software en un entorno empresarial de gran escala.'
    }
  },
  {
    period: { en: 'Jan 2023 – Jul 2023', de: 'Jan. 2023 – Jul. 2023', hu: '2023. jan. – 2023. júl.', fr: 'Janv. 2023 – Juil. 2023', it: 'Gen 2023 – Lug 2023', es: 'Ene 2023 – Jul 2023' },
    title: { en: 'Frontend Developer', de: 'Frontend-Entwickler', hu: 'Frontend fejlesztő', fr: 'Développeur Frontend', it: 'Sviluppatore Frontend', es: 'Desarrollador Frontend' },
    company: 'Scolia Technologies',
    current: false,
    desc: {
      en: 'Real-time frontend interfaces for an automated sports scoring and analytics platform, low-latency UI and live data visualization.',
      de: 'Echtzeit-Frontend-Schnittstellen für eine automatisierte Sport-Scoring- und Analyseplattform, latenzarme UI und Live-Datenvisualisierung.',
      hu: 'Valós idejű frontend felületek automatizált sporteredmény- és elemzőplatformhoz, kis késleltetésű UI és élő adatvizualizáció.',
      fr: 'Interfaces frontend temps réel pour une plateforme automatisée de scoring sportif et d\u2019analyse, UI à faible latence et visualisation de données en direct.',
      it: 'Interfacce frontend in tempo reale per una piattaforma automatizzata di punteggio sportivo e analisi, UI a bassa latenza e visualizzazione dati live.',
      es: 'Interfaces frontend en tiempo real para una plataforma automatizada de puntuación y análisis deportivo, UI de baja latencia y visualización de datos en vivo.'
    }
  },
  {
    period: { en: 'Sep 2022 – Jan 2023', de: 'Sep. 2022 – Jan. 2023', hu: '2022. szept. – 2023. jan.', fr: 'Sept. 2022 – Janv. 2023', it: 'Set 2022 – Gen 2023', es: 'Sep 2022 – Ene 2023' },
    title: { en: 'Frontend Developer', de: 'Frontend-Entwickler', hu: 'Frontend fejlesztő', fr: 'Développeur Frontend', it: 'Sviluppatore Frontend', es: 'Desarrollador Frontend' },
    company: 'Cubicfox',
    current: false,
    desc: {
      en: 'Frontend development for enterprise clients.',
      de: 'Frontend-Entwicklung für Unternehmenskunden.',
      hu: 'Frontend-fejlesztés vállalati ügyfeleknek.',
      fr: 'Développement frontend pour des clients entreprises.',
      it: 'Sviluppo frontend per clienti aziendali.',
      es: 'Desarrollo frontend para clientes empresariales.'
    }
  },
  {
    period: { en: 'Aug 2021 – Aug 2022', de: 'Aug. 2021 – Aug. 2022', hu: '2021. aug. – 2022. aug.', fr: 'Août 2021 – Août 2022', it: 'Ago 2021 – Ago 2022', es: 'Ago 2021 – Ago 2022' },
    title: { en: 'Engineering Manager', de: 'Engineering-Manager', hu: 'Mérnökvezető', fr: 'Responsable Ingénierie', it: 'Engineering Manager', es: 'Engineering Manager' },
    company: 'CobotX Technologies',
    current: false,
    desc: {
      en: 'Leading a 4-person engineering team in industrial automation and robot integration projects.',
      de: 'Leitung eines 4-köpfigen Engineering-Teams in der Industrieautomation und in Roboterintegrationsprojekten.',
      hu: '4 fős mérnökcsapat vezetése ipari automatizálásban és robotintegrációs projektekben.',
      fr: 'Direction d\u2019une équipe d’ingénierie de 4 personnes en automatisation industrielle et sur des projets d’intégration robotique.',
      it: 'Guida di un team di ingegneria di 4 persone nell\u2019automazione industriale e in progetti di integrazione robotica.',
      es: 'Dirección de un equipo de ingeniería de 4 personas en automatización industrial y proyectos de integración robótica.'
    }
  },
  {
    period: { en: 'Jun 2020 – Nov 2022', de: 'Jun. 2020 – Nov. 2022', hu: '2020. jún. – 2022. nov.', fr: 'Juin 2020 – Nov. 2022', it: 'Giu 2020 – Nov 2022', es: 'Jun 2020 – Nov 2022' },
    title: { en: 'Freelance Full Stack Developer', de: 'Freelance-Full-Stack-Entwickler', hu: 'Szabadúszó full-stack fejlesztő', fr: 'Développeur full-stack freelance', it: 'Sviluppatore full-stack freelance', es: 'Desarrollador full-stack freelance' },
    company: 'WebforSol',
    current: false,
    desc: {
      en: 'Freelance full-stack development right after an intensive 8-month web developer training, building complete web applications.',
      de: 'Freiberufliche Full-Stack-Entwicklung direkt nach einer intensiven 8-monatigen Webentwickler-Ausbildung, komplette Webanwendungen.',
      hu: 'Szabadúszó full-stack fejlesztés egy intenzív 8 hónapos webfejlesztő tanfolyam után, teljes webes alkalmazások.',
      fr: 'Développement full-stack freelance juste après une formation intensive de 8 mois, des applications web complètes.',
      it: 'Sviluppo full-stack freelance subito dopo una formazione intensiva di 8 mesi, applicazioni web complete.',
      es: 'Desarrollo full-stack freelance justo después de una formación intensiva de 8 meses, aplicaciones web completas.'
    }
  },
  {
    period: { en: '2005 – 2018', de: '2005 – 2018', hu: '2005 – 2018', fr: '2005 – 2018', it: '2005 – 2018', es: '2005 – 2018' },
    title: { en: 'Mechanical Engineer', de: 'Maschinenbauingenieur', hu: 'Gépészmérnök', fr: 'Ingénieur mécanicien', it: 'Ingegnere meccanico', es: 'Ingeniero mecánico' },
    company: 'Hauni Hungary',
    current: false,
    desc: {
      en: 'Mechanical engineering, measurement, data acquisition, automation and LabVIEW application development.',
      de: 'Maschinenbau, Messtechnik, Datenerfassung, Automatisierung und Entwicklung von LabVIEW-Anwendungen.',
      hu: 'Gépészmérnöki munka, mérés, adatgyűjtés, automatizálás és LabVIEW-alkalmazások fejlesztése.',
      fr: 'Ingénierie mécanique, mesure, acquisition de données, automatisation et développement d’applications LabVIEW.',
      it: 'Ingegneria meccanica, misurazione, acquisizione dati, automazione e sviluppo di applicazioni LabVIEW.',
      es: 'Ingeniería mecánica, medición, adquisición de datos, automatización y desarrollo de aplicaciones LabVIEW.'
    }
  }
];

/* ------------------------------------------------------------
   SKILLS, grouped technologies, synced from the CV repo's
   cv/cv-data.js `skillGroups` (primary, backend, testing,
   tooling, ai) + spoken languages (icons from assets/images/tech)
   ------------------------------------------------------------ */
export const SKILLS = [
  {
    titleKey: 'skills.primary',
    chips: [
      { label: 'CSS', icon: 'assets/images/tech/css.svg' },
      { label: 'HTML', icon: 'assets/images/tech/html.svg' },
      { label: 'JavaScript', icon: 'assets/images/tech/javascript.svg' },
      { label: 'KRL', icon: 'assets/images/tech/kuka.png' },
      { label: 'LabVIEW', icon: 'assets/images/tech/labview.png' },
      { label: 'PHP', icon: 'assets/images/tech/php.svg' },
      { label: 'Python', icon: 'assets/images/tech/python.svg' },
      { label: 'SCSS', icon: 'assets/images/tech/scss.svg' },
      { label: 'TPL', icon: 'assets/images/tech/fanuc.png' },
      { label: 'TypeScript', icon: 'assets/images/tech/typescript.svg' }
    ]
  },
  {
    titleKey: 'skills.frontend',
    chips: [
      { label: 'Bootstrap', icon: 'assets/images/tech/bootstrap.svg' },
      { label: 'Next.js', icon: 'assets/images/tech/nextjs.svg' },
      { label: 'React', icon: 'assets/images/tech/react.svg' },
      { label: 'Redux', icon: 'assets/images/tech/Redux.svg' },
      { label: 'styled-components', icon: 'assets/images/tech/styled_components.svg' },
      { label: 'Svelte', icon: 'assets/images/tech/svelte.svg' },
      { label: 'Zustand', icon: 'assets/images/tech/zustand.png' }
    ]
  },
  {
    titleKey: 'skills.backend',
    chips: [
      { label: 'Express.js', icon: 'assets/images/tech/express.svg' },
      { label: 'Firebase', icon: 'assets/images/tech/firebase.svg' },
      { label: 'MongoDB', icon: 'assets/images/tech/mongodb.svg' },
      { label: 'MySQL', icon: 'assets/images/tech/mysql.svg' },
      { label: 'NestJS', icon: 'assets/images/tech/NestJS.svg' },
      { label: 'Node.js', icon: 'assets/images/tech/nodejs.svg' },
      { label: 'REST API', icon: 'assets/images/tech/rest-api.svg' },
      { label: 'Swagger', icon: 'assets/images/tech/swagger.svg' },
      { label: 'WebSocket', icon: 'assets/images/tech/websocket.svg' }
    ]
  },
  {
    titleKey: 'skills.testing',
    chips: [
      { label: 'Jest', icon: 'assets/images/tech/jest.svg' },
      { label: 'Mocha', icon: 'assets/images/tech/mocha.svg' },
      { label: 'Playwright', icon: 'assets/images/tech/playwright.svg' },
      { label: 'Vitest', icon: 'assets/images/tech/vitest.svg' }
    ]
  },
  {
    titleKey: 'skills.tooling',
    chips: [
      { label: 'CI/CD' },
      { label: 'npm', icon: 'assets/images/tech/npm.svg' },
      { label: 'PNPM', icon: 'assets/images/tech/pnpm.svg' },
      { label: 'Vite', icon: 'assets/images/tech/vite.svg' },
      { label: 'Webpack', icon: 'assets/images/tech/webpack.svg' }
    ]
  },
  {
    titleKey: 'skills.ai',
    chips: [
      // { label: 'Antigravity', icon: 'assets/images/tech/antigravity.png' },
      { label: 'Claude Code', icon: 'assets/images/tech/claude.svg' },
      { label: 'Codex', icon: 'assets/images/tech/codex.svg' },
      // { label: 'Cursor', icon: 'assets/images/tech/cursor.svg' },
      { label: 'Freebuff', icon: 'assets/images/tech/freebuff.png' },
      { label: 'KiloCode', icon: 'assets/images/tech/kilocode.png' },
      { label: 'Ollama', icon: 'assets/images/tech/ollama.svg' },
      { label: 'OpenCode', icon: 'assets/images/tech/opencode.svg' },
      { label: 'Suno', icon: 'assets/images/tech/suno.svg' }
    ]
  },
  {
    titleKey: 'skills.robotics',
    chips: [
      { label: 'FANUC', icon: 'assets/images/tech/fanuc.png' },
      { label: 'KUKA', icon: 'assets/images/tech/kuka.png' },
      { label: 'Machine Vision', icon: 'assets/images/tech/machine_vision.svg' },
      { label: 'OnRobot', icon: 'assets/images/tech/OnRobot.svg' },
      { label: 'Universal Robot', icon: 'assets/images/tech/universal-robot.png' }
    ]
  },
  {
    titleKey: 'skills.spoken',
    chips: [
      { label: '\u{1F1ED}\u{1F1FA} Hungarian, Native' },
      { label: '\u{1F1E9}\u{1F1EA} German, B2' },
      { label: '\u{1F1EC}\u{1F1E7} English, B2' }
    ]
  }
];

/* ------------------------------------------------------------
   CONTACT, contact cards
   ------------------------------------------------------------ */
export const CONTACT = [
  { icon: '<img src="assets/images/email.png" alt="" class="contact-img" loading="lazy">', nameKey: 'contact.email', value: 'bozzay.viktor@gmail.com', href: 'mailto:bozzay.viktor@gmail.com', openHire: true },
  /* The only card whose value is prose rather than an identifier, so it is the
     only one that needs translating, hence valueKey instead of value. */
  { icon: '<img src="assets/images/calendar.png" alt="" class="contact-img" loading="lazy">', nameKey: 'contact.booking', valueKey: 'contact.bookingValue', href: 'https://viktor.bozzay.online', openBooking: true },
  { icon: '<img src="assets/images/github.png" alt="" class="contact-img" loading="lazy">', nameKey: 'contact.github', value: 'github.com/exphoenee', href: 'https://github.com/exphoenee' },
  { icon: '<img src="assets/images/linkedin.png" alt="" class="contact-img" loading="lazy">', nameKey: 'contact.linkedin', value: 'in/viktorbozzay', href: 'https://www.linkedin.com/in/viktorbozzay/' },
  { icon: '<img src="assets/images/resume.png" alt="" class="contact-img" loading="lazy">', nameKey: 'contact.website', value: 'viktor.bozzay.online', href: 'https://viktor.bozzay.online' }
];

/* ------------------------------------------------------------
   SKILLS, grouped technologies (icons from assets/images/tech)
   ------------------------------------------------------------ */
