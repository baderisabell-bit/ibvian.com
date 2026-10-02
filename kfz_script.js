// --- Ganz oben ---
let currentLang = localStorage.getItem('lang') || 'de';

// --- Alle Funktionen definieren ---
function initThemeToggle() { /* ... dein Theme Code ... */ }
function changeStep(n) { /* ... dein Formular Code ... */ }
function translateAll() { /* ... dein Sprach Code ... */ }
function setLanguage(lang) { /* ... dein Sprach Code ... */ }

// --- EINER FÜR ALLES: DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function() {

    // 1. BURGER MENU
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // 2. THEME TOGGLE
    initThemeToggle();

    // 3. SPRACH-BUTTON LOGIK
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            currentLang = (currentLang === 'de') ? 'en' : 'de';
            langBtn.textContent = (currentLang === 'de') ? 'EN' : 'DE';
            localStorage.setItem('lang', currentLang);
            translateAll();
        });

        // Initialen Button-Status setzen
        langBtn.textContent = (currentLang === 'de') ? 'EN' : 'DE';
    }

    // 4. SPRACHE ANWENDEN
    translateAll();
});

// --- Initialisierung DarkMode (kann außerhalb bleiben) ---
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
    initThemeToggle();
}

// =================================================================
// DARK MODE TOGGLE - KORRIGIERT (keine duplicate declarations)
// =================================================================

function initThemeToggle() {
    var themeBtn = document.getElementById("themeToggle");

    if (!themeBtn) {
        console.error('❌ ERROR: Theme-Button (id="themeToggle") nicht gefunden!');
        console.error('❌ Prüfe dein HTML: Muss haben <button id="themeToggle" class="theme-btn">');
        return;
    }

    console.log('Teme-Button gefunden:', themeBtn);

    var currentTheme = localStorage.getItem("theme");
    console.log('Gespeicherter Theme:', currentTheme);

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "Hellmodus";
        console.log('Dunkelmodus aktiv (aus localStorage)');
    }

    themeBtn.onclick = function() {
        console.log('Button geklickt!');

        var isDark = document.body.classList.toggle("dark-mode");

        if (isDark) {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "Hellmodus";
            console.log('Dunkelmodus AKTIV');
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "Dunkelmodus";
            console.log('Hellmodus AKTIV');
        }

        console.log('body.classList:', document.body.classList.contains("dark-mode"));
    };

    console.log('Dark-Mode Toggle initialisiert erfolgreich!');
}

// =================================================================
// FORMULAR LOGIK
// =================================================================

let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const dots = document.querySelectorAll(".step-dot");

function changeStep(n) {
    // Aktuellen Schritt ausblenden
    steps[currentStep].classList.remove("active");
    dots[currentStep].classList.remove("active");

    // Schritt erhöhen/verringern
    currentStep += n;

    // Boundary-Check (nicht unter 0 oder über 2 gehen)
    if (currentStep < 0) currentStep = 0;
    if (currentStep > 2) currentStep = 2;

    // Neuen Schritt einblenden
    steps[currentStep].classList.add("active");
    dots[currentStep].classList.add("active");

    // Buttons steuern
    document.getElementById("prevBtn").disabled = (currentStep === 0);
    document.getElementById("nextBtn").innerText = (currentStep === 2) ? "Absenden" : "Weiter";
}

// =================================================================
// DARK MODE INITIALISIEREN (SOFORT beim Laden)
// =================================================================

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
    initThemeToggle();
}

// ========================================================
// Sprachwechsel
// ========================================================

const translations = {
    de: {
        header_nav0: "← Hauptseite", header_nav1: "Home", header_nav2: "Über uns", header_nav3: "Unsere Leistungen", header_nav4: "Karriere", header_nav5: "Kontakt",
        titel: "KFZ-Werkstatt Bader",
        titel_beschreibung: "Seit 1964 für zuverlässige Autoreparatur, Inspektion, TÜV und E-Mobilität.",
        termin_anfragen: "Termin anfragen",
        index_ueberschrift1: "Unabhängiger Meisterbetrieb seit 1964",
        index_ueberschrift5: "Unsere Leistungen",
        beschreibung_index_ueberschrift5: "Vom Routinetermin bis zur komplexen Fehlerdiagnose – wir bieten professionellen Service.",
        karriere_ansehen: "Mehr erfahren",
        index_ueberschrift6: "Karriere & Ausbildung",
        beschreibung_index_ueberschrift6: "Wir bilden aus und suchen Verstärkung für unser Team. Erfahren Sie mehr über offene Stellen und Ausbildungsmöglichkeiten.",
        anliegen_titel: "Ihr Anliegen",
        label_art: "Was steht an? *",
        select_choose: "Bitte wählen...",
        label_beschreibung: "Beschreibung *",
        termin_titel: "Terminwunsch",
        btn_weiter: "Weiter",
        btn_absenden: "Anfrage verbindlich absenden",
        footer_links: "Informationen",
        link_impressum: "Impressum",
        link_datenschutz: "Datenschutz",
        link_agb: "Allgemeine Geschäftsbedingungen",
        link_wiederruf: "Zahlung und Versand",
        footer_copyright: "Alle Rechte vorbehalten.",
        kontakt_titel: "Ihre Daten",
        label_vorname: "Vorname",
        label_nachname: "Nachname",
        label_email: "E-Mail-Adresse",
        label_tel: "Telefonnummer",
        label_kennzeichen: "Kennzeichen",
        placeholder_vorname: "Max",
        placeholder_nachname: "Mustermann",
        placeholder_email: "max@beispiel.de",
        placeholder_tel: "0170 1234567",
        placeholder_kennzeichen: "M-KB 1234",
        oeffnungszeiten_titel: "Unsere Öffnungszeiten",
        zeiten_mo_fr: "Mo–Fr: 8:00 – 18:00 Uhr",
        zeiten_sa: "Samstag: 9:00 – 13:00 Uhr",
        zeiten_so: "Sonntag: Geschlossen",
        kontakt_main_titel: "Kontakt & Terminanfrage",
        kontakt_main_text: "Sie haben Fragen zu einer Autoreparatur, Inspektion, Reifenwechsel oder TÜV? Melden Sie sich telefonisch, per E-Mail oder nutzen Sie unser Online-Formular für eine schnelle Terminanfrage.",
        telefon_titel: "Telefonischer Direktkontakt",
        telefon_text: "Für dringende Anfragen, akute Pannen oder kurzfristige Terminabsprachen ist der Anruf der schnellste Weg. Wir sind werktags jederzeit für Sie erreichbar.",
        telefon_label: "Telefon:",
        weg_titel: "Ihr Weg zu uns – KFZ-Werkstatt Bader Essen",
        weg_adresse_name: "KFZ-Werkstatt Bader",
        weg_ubahn: "U-Bahn: Haltestelle Essen Hbf (5 Min.)",
        about_titel: "Traditionelles Handwerk trifft moderne Fahrzeugtechnik",
        about_titel_desc: "Ob Inspektion, Reparatur, Hauptuntersuchung oder Diagnose: Wir kümmern uns darum, dass Ihr Fahrzeug sicher und zuverlässig unterwegs ist. Bei uns sind Sie keine Nummer, sondern Kunde mit individuellen Anforderungen.",
        about_geschichte_titel: "Unsere Geschichte",
        about_geschichte_sub: "Seit drei Generationen für Sie da.",
        about_geschichte_p1: "Gegründet 1964 von KFZ-Meister Heinrich Bader, wird die Werkstatt heute von seinem Sohn Thomas Bader und Enkelin Lisa Bader geführt. Was als kleine Reparaturwerkstatt begann, ist heute ein moderner KFZ-Meisterbetrieb in Essen.",
        about_geschichte_p2: "Unsere Erfahrung mit klassischen Verbrennungsmotoren ergänzt sich heute mit aktuellem Know-how in elektronischer Fahrzeugdiagnose, Steuergeräte-Analyse und E-Mobilität. So betreuen wir sowohl ältere Fahrzeuge als auch moderne Hybrid- und Elektroautos fachgerecht.",
        about_werte_titel: "Unsere Werte",
        about_werte_desc: "Als KFZ-Werkstatt in Essen stehen wir für Qualität, Transparenz und nachhaltige Reparaturlösungen.",
        about_werte_1_titel: "Transparente Beratung & klare Diagnosen",
        about_werte_1_desc: "Wir erklären Ihnen alle Reparaturen verständlich und nachvollziehbar. Mithilfe moderner Diagnosesoftware lesen wir Fehlercodes direkt aus dem Steuergerät aus und besprechen die Ergebnisse transparent mit Ihnen.",
        about_werte_2_titel: "Gründliche Fehlersuche statt schneller Lösungen",
        about_werte_2_desc: "Ein Beispiel aus dem Werkstattalltag: Bei Leistungsverlust prüfen wir nicht nur oberflächlich Bauteile, sondern analysieren Sensordaten, Luftmassenmesser und Einspritzsystem im Detail. So vermeiden wir unnötige Teilewechsel und sparen Ihnen Kosten.",
        about_werte_3_titel: "Ausbildung & Verantwortung",
        about_werte_3_desc: "Als Ausbildungsbetrieb geben wir unser Wissen an die nächste Generation weiter. Denn gutes Handwerk entsteht durch Erfahrung, Sorgfalt und die Bereitschaft, ständig dazuzulernen.",
        about_team_titel: "Unser Team",
        about_team_desc: "Unser Team vereint Erfahrung aus Jahrzehnten mit modernem technischen Know-how.",
        about_team_1_name: "KFZ-Meister & Senior-Chef – Thomas Bader",
        about_team_1_quote: "„Viele Fahrzeuge kenne ich noch aus ihrer Bauzeit – dieses Wissen hilft bei jeder Diagnose.“",
        about_team_2_name: "Werkstattleitung & Junior-Chefin – Lisa Bader",
        about_team_2_quote: "„Moderne Fahrzeuge sind rollende Computersysteme – wir arbeiten mit aktueller Software und Messtechnik.“",
        about_team_3_name: "Büro & Kundenservice – Anna Bader",
        about_team_3_quote: "„Ich sorge für klare Abläufe, transparente Kommunikation und einen reibungslosen Service.“",
        angebot_titel: "Leistungen für Ihr Fahrzeug – KFZ-Werkstatt Bader Essen",
        angebot_beschreibung: "Vom Routinetermin bis zur komplexen Fehlerdiagnose – als markenunabhängiger Meisterbetrieb bieten wir professionellen Service nach Herstellervorgaben. Zuverlässig, transparent und effizient.",
        angebot_ueberschrift1: "Unsere Qualitätsgarantie: Nur Erstausrüsterqualität",
        angebot_beschreibung1: "Bei allen Reparaturen verwenden wir ausschließlich Original-Ersatzteile der Fahrzeughersteller oder Identteile von führenden Markenherstellern (wie Bosch, Brembo, Sachs oder Mahle). Das garantiert maximale Passgenauigkeit, Langlebigkeit und die Sicherheit, dass Ihr Fahrzeug exakt den Sicherheitsstandards der Hersteller entspricht.",
        angebot_ueberschrift2: "Wartung & Inspektion nach Herstellervorgabe",
        angebot_beschreibung2: "Inspektion mit Garantieerhalt",
        angebot_beschreibung2_1: "Flüssigkeitsservice (Öl, Kühler, Bremsflüssigkeit)",
        angebot_beschreibung2_2: "Saison-Checks: Vorbereitung auf Winter oder Urlaubsreise",
        angebot_ueberschrift3: "Moderne Diagnose & Fahrzeugelektrik",
        angebot_beschreibung3: "Fehlerauslese: Gezielte Steuergeräte-Diagnose mit modernsten Testgeräten zur schnellen Lokalisierung von Fehlern",
        angebot_beschreibung3_1: "Assistenzsysteme: Prüfung und Kalibrierung von sensor- und kamerabasierten Systemen",
        angebot_beschreibung3_2: "Batteriemanagement: Diagnose, Tiefenprüfung und fachgerechtes Anlernen neuer Fahrzeugbatterien",
        angebot_ueberschrift4: "E-Mobilität & Hochvolt-Service",
        angebot_beschreibung4: "Hochvolt-Diagnose: Fachgerechte Prüfung und Wartung von Batterien und Stromsystemen bei Elektro- und Hybridfahrzeugen",
        angebot_beschreibung4_1: "Sicherheitscheck: Prüfung der Hochvolt-Komponenten auf Defekte, Isolationsfehler und thermische Überlastung",
        angebot_beschreibung4_2: "Reparatur & Anlernen: Ersatzteilwechsel, Batterie-Update und fachgerechte Inbetriebnahme nach Herstellerangaben",
        angebot_ueberschrift5: "Fahrwerk, Bremsen & Mechanik",
        angebot_beschreibung5: "Bremsenservice: Kompletter Check und Austausch von Bremsscheiben, Belägen und Leitungen",
        angebot_beschreibung5_1: "Fahrwerk & Lenkung: Reparatur von Stoßdämpfern, Federn, Querlenkern und Spurstangenköpfen",
        angebot_beschreibung5_2: "Achsvermessung: Präzise elektronische Vermessung und Einstellung der Fahrwerksgeometrie",
        angebot_ueberschrift6: "HU/AU (TÜV) & Prüfservice",
        angebot_beschreibung6: "Haupt- und Abgasuntersuchung: Regelmäßige Durchführung der HU/AU direkt bei uns im Haus durch amtlich anerkannte Prüforganisationen",
        angebot_beschreibung6_1: "Vorab-Check: Wir untersuchen Ihr Auto vor dem Prüftermin, um Kritikpunkte zu vermeiden",
        angebot_ueberschrift7: "Klimaservice & Komfortsysteme",
        angebot_beschreibung7: "Klimawartung: Funktions- und Dichtigkeitsprüfung der Klimaanlage, Absaugen und Befüllen des Kältemittels",
        angebot_beschreibung7_1: "Desinfektion: Professionelle Reinigung des Verdampfers zur Beseitigung von Bakterien, Pilzen und unangenehmen Gerüchen im Innenraum",
        angebot_ueberschrift8: "Reifen- & Räderservice",
        angebot_beschreibung8: "Reifenwechsel: Fachgerechte Montage und Auswuchten von Sommer-, Winter- und Allwetterreifen",
        angebot_beschreibung8_1: "Radeinlagerung: Reinigung und sichere, dunkle Lagerung Ihrer Räder für die nächste Saison unter optimalen Bedingungen",
        learn_more: "Mehr erfahren",
        karriere_titel: "Werde Teil unserer Familie.",
        karriere_beschreibung: "Du liebst das KFZ-Handwerk, hast aber keine Lust mehr auf Akkordarbeit, schlechte Stimmung und starre Hierarchien? Bei uns im Familienbetrieb zählen deine Leistung, deine Ideen und dein Wohlbefinden.",
        karriere_fehlerkultur: "Fehlerkultur statt Schuldzuweisungen",
        fehlerkultur_beschreibung: "Moderne Fahrzeuge sind komplex. Wenn etwas schiefgeht, stehen wir als Team hinter dir. Wir suchen gemeinsam nach der Lösung, nicht nach dem Sündenbock. Bei uns lernst du mit jeder Herausforderung dazu.",
        fehlerkultur_beschreibung2: "Echte Wertschätzung & Mitgestaltung",
        fehlerkultur_beschreibung3: "Familienbetrieb bedeutet für uns: Wir kennen deine Stärken und nehmen Rücksicht auf dein Privatleben. Bei uns gibt es pünktlichen Feierabend, faire, leistungsgerechte Vergütung und Überstunden, die aufgeschrieben und zeitnah ausgeglichen werden.",
        fehlerkultur_beschreibung4: "Deine Entwicklung im Fokus",
        fehlerkultur_beschreibung5: "Das KFZ-Handwerk verändert sich rasanter. Egal ob Hochvolt-Schein (E-Mobilität), Diagnose-Spezialisierung oder der Weg zum Meister – wir unterstützen dich bei Fortbildungen und übernehmen die Kosten. Wenn du wachsen willst, halten wir dir den Rücken frei.",
        offene_stellen: "Offene Stellen",
        stellen_titel: "Ausbildung zum KFZ-Mechatroniker (m/w/d) in Vollzeit",
        option_inspektion: "Inspektion & Wartung",
        option_reparatur: "Reparatur",
        option_reifen: "Reifenservice",
        termin_beschreibung: "Wähle hier später deinen Wunschtermin...",
        btn_zurück: "Zurück",
        btn_absenden: "Absenden",
    },
    en: {
        header_nav0: "← Main Page", header_nav1: "Home", header_nav2: "About Us", header_nav3: "Services", header_nav4: "Career", header_nav5: "Contact",
        titel: "Bader Auto Repair",
        titel_beschreibung: "Reliable car repair, inspection, and e-mobility since 1964.",
        termin_anfragen: "Request Appointment",
        index_ueberschrift1: "Independent Master Workshop since 1964",
        index_ueberschrift5: "Our Services",
        beschreibung_index_ueberschrift5: "From routine appointments to complex diagnostics – professional service.",
        beschreibung_index_ueberschrift6: "We train and are looking for reinforcement for our team. Learn more about open positions and training opportunities.",
        karriere_ansehen: "Learn More",
        index_ueberschrift6: "Career & Training",
        anliegen_titel: "Your Request",
        label_art: "What do you need? *",
        select_choose: "Please choose...",
        label_beschreibung: "Description *",
        termin_titel: "Preferred Date",
        btn_weiter: "Next",
        btn_absenden: "Submit Request",
        footer_links: "Information",
        link_impressum: "Imprint",
        link_agb: "Terms & Conditions",
        link_wiederruf: "Payment and Shipping",
        link_datenschutz: "Privacy Policy",
        footer_copyright: "All rights reserved.",
        kontakt_titel: "Your Contact Details",
        label_vorname: "First Name",
        label_nachname: "Last Name",
        label_email: "Email Address",
        label_tel: "Phone Number",
        label_kennzeichen: "License Plate",
        placeholder_vorname: "Max",
        placeholder_nachname: "Mustermann",
        placeholder_email: "max@example.com",
        placeholder_tel: "0170 1234567",
        placeholder_kennzeichen: "M-KB 1234",
        oeffnungszeiten_titel: "Our Opening Hours",
        zeiten_mo_fr: "Mon–Fri: 8:00 AM – 6:00 PM",
        zeiten_sa: "Saturday: 9:00 AM – 1:00 PM",
        zeiten_so: "Sunday: Closed",
        kontakt_main_titel: "Contact & Appointment Request",
        kontakt_main_text: "Do you have questions about car repairs, inspections, tire changes, or MOT? Call us, email us, or use our online form for a quick appointment request.",
        telefon_titel: "Phone Contact",
        telefon_text: "For urgent inquiries, acute breakdowns, or short-notice appointments, a phone call is the fastest way. We are available on weekdays.",
        telefon_label: "Phone:",
        weg_titel: "How to find us – Bader Auto Repair Essen",
        weg_adresse_name: "Bader Auto Repair",
        weg_ubahn: "Subway: Stop Essen Hbf (5 min.)",
        about_titel: "Traditional Craftsmanship Meets Modern Vehicle Technology",
        about_titel_desc: "Whether it's an inspection, repair, technical inspection (TÜV), or diagnosis: We ensure that your vehicle stays safe and reliable on the road. With us, you are not just a number, but a customer with individual requirements.",
        about_geschichte_titel: "Our History",
        about_geschichte_sub: "Here for you for three generations.",
        about_geschichte_p1: "Founded in 1964 by master mechanic Heinrich Bader, the workshop is now run by his son Thomas Bader and granddaughter Lisa Bader. What started as a small repair shop is now a modern master-certified car workshop in Essen.",
        about_geschichte_p2: "Our experience with classic internal combustion engines is now complemented by current know-how in electronic vehicle diagnostics, control unit analysis, and e-mobility. This allows us to professionally service older vehicles as well as modern hybrid and electric cars.",
        about_werte_titel: "Our Values",
        about_werte_desc: "As a car workshop in Essen, we stand for quality, transparency, and sustainable repair solutions.",
        about_werte_1_titel: "Transparent Advice & Clear Diagnoses",
        about_werte_1_desc: "We explain all repairs in a way that is easy to understand. Using modern diagnostic software, we read fault codes directly from the control unit and discuss the results transparently with you.",
        about_werte_2_titel: "Thorough Troubleshooting Instead of Quick Fixes",
        about_werte_2_desc: "A real-world example: In the event of a power loss, we don't just check components superficially; we analyze sensor data, mass airflow sensors, and injection systems in detail. This way, we avoid unnecessary parts replacement and save you money.",
        about_werte_3_titel: "Apprenticeship & Responsibility",
        about_werte_3_desc: "As a training company, we pass our knowledge on to the next generation. Because good craftsmanship is built on experience, diligence, and the willingness to learn constantly.",
        about_team_titel: "Our Team",
        about_team_desc: "Our team combines decades of experience with modern technical know-how.",
        about_team_1_name: "Master Mechanic & Senior Manager – Thomas Bader",
        about_team_1_quote: "“I still know many vehicles from when they were built – that knowledge helps with every diagnosis.”",
        about_team_2_name: "Workshop Manager & Junior Manager – Lisa Bader",
        about_team_2_quote: "“Modern vehicles are rolling computer systems – we work with the latest software and measurement technology.”",
        about_team_3_name: "Office & Customer Service – Anna Bader",
        about_team_3_quote: "“I ensure clear processes, transparent communication, and smooth service.”",
        angebot_titel: "Services for Your Vehicle – KFZ-Werkstatt Bader Essen",
        angebot_beschreibung: "From routine appointments to complex diagnostics – as an independent master-certified workshop, we offer professional service according to manufacturer specifications. Reliable, transparent, and efficient.",
        angebot_ueberschrift1: "Our Quality Guarantee: Only OEM Quality",
        angebot_beschreibung1: "For all repairs, we exclusively use original spare parts from vehicle manufacturers or identical parts from leading brand manufacturers (such as Bosch, Brembo, Sachs, or Mahle). This guarantees maximum fit, longevity, and the certainty that your vehicle meets exact manufacturer safety standards.",
        angebot_ueberschrift2: "Maintenance & Inspection per Manufacturer Specs",
        angebot_beschreibung2: "Inspection with warranty retention",
        angebot_beschreibung2_1: "Fluid service (oil, coolant, brake fluid)",
        angebot_beschreibung2_2: "Seasonal checks: Preparation for winter or holidays",
        angebot_ueberschrift3: "Modern Diagnostics & Vehicle Electrics",
        angebot_beschreibung3: "Fault reading: Targeted control unit diagnostics with state-of-the-art testing equipment for quick error localization",
        angebot_beschreibung3_1: "Assistance systems: Testing and calibration of sensor- and camera-based systems",
        angebot_beschreibung3_2: "Battery management: Diagnostics, deep testing, and professional programming of new car batteries",
        angebot_ueberschrift4: "E-Mobility & High-Voltage Service",
        angebot_beschreibung4: "High-voltage diagnostics: Professional testing and maintenance of batteries and power systems in electric and hybrid vehicles",
        angebot_beschreibung4_1: "Safety check: Testing high-voltage components for defects, insulation faults, and thermal overload",
        angebot_beschreibung4_2: "Repair & Programming: Part replacement, battery updates, and professional commissioning according to manufacturer specs",
        angebot_ueberschrift5: "Chassis, Brakes & Mechanics",
        angebot_beschreibung5: "Brake service: Complete check and replacement of brake discs, pads, and lines",
        angebot_beschreibung5_1: "Chassis & Steering: Repair of shock absorbers, springs, wishbones, and tie rod ends",
        angebot_beschreibung5_2: "Wheel alignment: Precise electronic measurement and adjustment of chassis geometry",
        angebot_ueberschrift6: "HU/AU (MOT) & Inspection Service",
        angebot_beschreibung6: "General and exhaust gas inspection: Regular execution of HU/AU directly on-site by officially recognized testing organizations",
        angebot_beschreibung6_1: "Pre-check: We inspect your car before the official appointment to avoid potential issues",
        angebot_ueberschrift7: "AC Service & Comfort Systems",
        angebot_beschreibung7: "AC maintenance: Function and leak testing of the air conditioning system, vacuuming, and refilling of refrigerant",
        angebot_beschreibung7_1: "Disinfection: Professional cleaning of the evaporator to eliminate bacteria, mold, and unpleasant odors in the interior",
        angebot_ueberschrift8: "Tire & Wheel Service",
        angebot_beschreibung8: "Tire change: Professional mounting and balancing of summer, winter, and all-weather tires",
        angebot_beschreibung8_1: "Wheel storage: Cleaning and safe, dark storage of your wheels for the next season under optimal conditions",
        learn_more: "Learn More",
        karriere_titel: "Become Part of Our Family.",
        karriere_beschreibung: "You love automotive craftsmanship but are tired of assembly-line work, poor morale, and rigid hierarchies? In our family business, your performance, ideas, and well-being matter.",
        karriere_fehlerkultur: "Culture of Learning from Mistakes",
        fehlerkultur_beschreibung: "Modern vehicles are complex. If something goes wrong, we stand behind you as a team. We look for solutions together, not for someone to blame. With us, you learn from every challenge.",
        fehlerkultur_beschreibung2: "Genuine Appreciation & Participation",
        fehlerkultur_beschreibung3: "Being a family business means we know your strengths and respect your private life. We offer timely finishing hours, fair compensation based on performance, and overtime that is recorded and compensated promptly.",
        fehlerkultur_beschreibung4: "Your Development in Focus",
        fehlerkultur_beschreibung5: "The automotive trade is changing rapidly. Whether it's a high-voltage certificate (e-mobility), diagnostic specialization, or the path to becoming a master mechanic – we support you in further training and cover the costs. If you want to grow, we have your back.",
        offene_stellen: "Open Positions",
        stellen_titel: "Apprenticeship as an Automotive Mechatronics Technician (m/f/d) Full-Time",
        option_inspektion: "Inspection & Maintenance",
        option_reparatur: "Repair",
        option_reifen: "Tire Service",
        termin_beschreibung: "Choose your preferred date here later...",
        btn_zurück: "Back",
        btn_absenden: "Submit",
    }
};

function translateAll() {
    const langData = translations[currentLang];
    if (!langData) return;

    // Alle Elemente mit data-i18n übersetzen
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (langData[key]) el.textContent = langData[key];
    });

    // Alle Inputs mit data-i18n-placeholder übersetzen
    document.querySelectorAll("input[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (langData[key]) {
            el.placeholder = langData[key];
        }
    });

    // Button-Text übersetzen
    const nextBtn = document.getElementById("nextBtn");
    if(nextBtn) {
        const isLast = (currentStep === steps.length - 1);
        nextBtn.textContent = isLast ? langData.btn_absenden : langData.btn_weiter;
    }
}