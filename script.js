document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        const isDark = theme === 'dark';
        document.body.classList.toggle('dark-mode', isDark);
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');

        if (themeBtn) {
            themeBtn.textContent = isDark ? 'Heller Modus' : 'Dunkelmodus';
            themeBtn.setAttribute('aria-pressed', String(isDark));
        }
    };

    if (savedTheme === 'dark') {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', nextTheme);
            applyTheme(nextTheme);
        });
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    });
}

// Sprache
// --- Ganz oben ---
let currentLang = localStorage.getItem('lang') || 'de';

const translations = {
    de: {
        title: "Ibvian",
        nav_home: "Home",
        nav_about: "Über Ibvian",
        nav_services: "Leistungen",
        nav_portfolio: "Portfolio",
        nav_contact: "Kontakt",
        theme_toggle: "Dunkelmodus",
        lang_switch: "EN",
        footer_links: "Informationen",
        link_impressum: "Impressum",
        link_datenschutz: "Datenschutz",
        link_agb: "Allgemeine Geschäftsbedingungen",
        link_wiederruf: "Zahlung und Versand",
        footer_copyright: "Alle Rechte vorbehalten.",

        hero_h1: "Ibvian",
        hero_p: "Digital Studio",
        hero_h1: "Ibvian",
        hero_p: "Digital Studio",
        preview_services: "Leistungen",
        preview_portfolio: "Portfolio",
        preview_services_intro: "Digitale Lösungen für mehr als nur Präsenz.",
        preview_services_desc: "Webentwicklung, Design, SEO, Conversion Optimierung und digitale Prozesse. Von der technischen Grundlage bis zur automatisierten Kundengewinnung entsteht eine Lösung, die Besucher erreichen, zu Anfragen führen und Abläufe vereinfachen kann.",
        btn_view_services: "Leistungen ansehen →",
        preview_portfolio_desc: "Aus Ideen werden digitale Lösungen.",
        preview_portfolio_desc2:"Ausgewählte Websites, Webportale und individuelle Entwicklungen. Mit Einblicken in Gestaltung, Technik und die Lösungen, die aus einer Idee ein funktionierendes digitales Projekt machen.",
        btn_view_portfolio: "Arbeiten zeigen →",

        ibvian_text: "Digitale Lösungen - Ibvian",
        ibvian_description: "Durch meine eigene Selbstständigkeit kenne ich die Perspektive von Unternehmen aus erster Hand. Eine Website soll nicht einfach gut aussehen oder online sein. Sie soll einen echten Zweck erfüllen und zum Unternehmen beitragen. Bei Ibvian verbinde ich Webentwicklung, hochwertiges Design und digitale Kundengewinnung zu durchdachten Lösungen. Dabei lege ich besonderen Wert auf eine technisch saubere, moderne und performante Umsetzung mit HTML, CSS und JavaScript und einem klaren Blick für Details. Denn eine Website kann mehr als eine digitale Visitenkarte sein. Sie kann Leistungen verständlich vermitteln, Vertrauen schaffen, Anfragen generieren und als aktiver Teil der Kundengewinnung funktionieren. Mein Anspruch ist es, Technik, Design und Strategie so zu verbinden, dass aus einer Website ein echtes Werkzeug für das Unternehmen wird.",
        about_text_hero: "Technik, die Menschen verstehen",
        about_text_1: "Mein Studium der Pädagogik und Soziologie prägt meinen Blick auf digitale Kommunikation bis heute. Mich interessiert nicht nur, wie eine Website technisch funktioniert, sondern auch, wie Menschen sie wahrnehmen und nutzen. Eine gute Website muss verständlich sein, Orientierung geben und Vertrauen schaffen. Deshalb verbinde ich technische Umsetzung mit einem Blick für Nutzer, Unternehmen und die Details, die aus Besuchern Interessenten machen.",
        about_text_2: "Mein Anspruch sind Websites, die gut aussehen, verständlich funktionieren und einen echten Zweck erfüllen.",

    portfoliotitel: "Ausgewählte Projekte",
    portfoliolead: "Jede Website wird individuell auf das Unternehmen, seine Zielgruppe und die gewünschten Ziele abgestimmt.",

    portfolio1alt: "Website Isabell Bader Barockreiten",
    portfolio1title: "Isabell Bader – Barockreiten",

    portfolio2alt: "Website Rebell Pilates",
    portfolio2title: "Rebell Pilates",

    portfolio3alt: "Webportal Equily",
    portfolio3title: "Equily – individuelles Webportal",

    portfolio4alt: "Website Uhrenmanufaktur",
    portfolio4title: "Aurelius & Söhne – Mechanische Uhrenmanufaktur",

    portfolio5alt: "Website Immobilienmakler",
    portfolio5title: "Immobilienmakler – individuelle Immobilienberatung",

    portfolioviewproject: "→ Projekt ansehen",

    portfoliocomingsoon: "Coming Soon",
    portfoliomoreprojects: "Weitere Projekte in Kürze",

        contact_hero_title: "Lass uns über dein Projekt sprechen.",
        contact_hero_subtitle: "Ich freue mich darauf, dich und dein Unternehmen kennenzulernen. Lass uns gemeinsam herausfinden, wie ich dich unterstützen kann.",
        contact_info_p: "Du hast Fragen, willst dich informieren oder möchtest eine konkrete Einschätzung?",
        contact_info_email: "E-Mail:",
        contact_info_telefon: "Telefonnummer:",
        contact_info_hours: "Ich antworte werktags in der Regel innerhalb von 24 Stunden.",
        btn_request_appointment: "Kostenloses Erstgespräch vereinbaren",
        contact_form_h2: "Kontakt",
        contact_form_name: "Name",
        contact_form_email: "E-Mail",
        contact_form_telefon: "Telefonnummer (optional)",
        contact_form_topic: "Anliegen",
        contact_form_topic_anfrage: "Allgemeine Anfrage / Rückrufbitte",
        contact_form_topic_termin: "Termin für Erstgespräch buchen",
        contact_form_message: "Nachricht",
        contact_form_submit: "Absenden",
        form_success: "Danke! Ich habe deine Nachricht erhalten.",
        form_error: "Ups, da gab es einen Fehler.",

        legal_impressum: "Impressum",
        legal_provider: "Gesetzliche Anbieterkennung",
        legal_phone: "Telefon",
        legal_email: "E-Mail",
        legal_whatsapp: "WhatsApp",

        legal_datenschutz: "Datenschutzerklärung",
        legal_datenschutz_text1: "Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch für einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorgängen keine anderweitige Angabe gemacht wird.",
        legal_datenschutz_text2: "\"Personenbezogene Daten\" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
        legal_server_logfiles: "Server-Logfiles",
        legal_server_logfiles_text1: "Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen.",
        legal_server_logfiles_text2: "Bei jedem Zugriff auf unsere Website werden an uns oder unseren Webhoster / IT-Dienstleister Nutzungsdaten durch Ihren Internet Browser übermittelt und in Protokolldaten (sog. Server-Logfiles) gespeichert.",
        legal_server_logfiles_text3: "Zu diesen gespeicherten Daten gehören z.B. der Name der aufgerufenen Seite, Datum und Uhrzeit des Abrufs, die IP-Adresse, die übertragene Datenmenge und der anfragende Provider.",
        legal_server_logfiles_text4: "Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Gewährleistung eines störungsfreien Betriebs unserer Website sowie zur Verbesserung unseres Angebotes.",
        legal_contact: "Kontakt",
        legal_responsible: "Verantwortlicher",
        legal_responsible_text: "Kontaktieren Sie uns auf Wunsch. Verantwortlicher für die Datenverarbeitung ist:",
        legal_phone: "Telefon",
        legal_email: "E-Mail",
        legal_initiative: "Initiativ-Kontaktaufnahme des Kunden per E-Mail",
        legal_initiative_text: "Wenn Sie per E-Mail initiativ mit uns in Geschäftskontakt treten, erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage.",
        legal_initiative_text2: "Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_initiative_text3: "Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage.",
        legal_initiative_text4: "Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_contact_form: "Erhebung und Verarbeitung bei Nutzung des Kontaktformulars",
        legal_contact_form_text: "Bei der Nutzung des Kontaktformulars erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient dem Zweck der Kontaktaufnahme.",
        legal_contact_form_text2: "Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_contact_form_text3: "Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage.",
        legal_contact_form_text4: "Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_revocation: "Erhebung und Verarbeitung bei Nutzung des Widerrufsbuttons",
        legal_revocation_text1: "Wenn Sie einen Vertrag über unsere Onlinepräsenz abgeschlossen haben, stellen wir Ihnen eine Widerrufsfunktion (Widerrufsbutton) zur Verfügung, über welche Sie Ihre Widerrufserklärung unmittelbar abgeben können.",
        legal_revocation_text2: "Bei der Nutzung der Widerrufsfunktion erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Angabe zur Identifizierung des Vertrages oder Vertragsteils, den Sie widerrufen möchten sowie den Zeitpunkt (Datum und Uhrzeit) der Absendung der Widerrufserklärung) nur in dem von Ihnen zur Verfügung gestellten Umfang.",
        legal_revocation_text3: "Die Datenverarbeitung dient dem Zweck, Ihnen die gesetzlich vorgeschriebene Möglichkeit zum Widerruf Ihres Vertrages zur Verfügung zu stellen sowie der ordnungsgemäßen Bearbeitung Ihres Widerrufes.",
        legal_revocation_text4: "Wenn die Kontaktaufnahme einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_revocation_text5: "Ansonsten erfolgt die Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. c DSGVO, zur Erfüllung einer rechtlichen Verpflichtung Ihnen eine Widerrufsfunktion auf unserer Onlinepräsenz zur Verfügung zu stellen.",
        legal_revocation_text6: "Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Widerrufserklärung. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_revocation_text7: "Die Verarbeitung Ihrer personenbezogenen Daten dient dem Zweck, die gesetzlichen Anforderungen an die Gestaltung der Widerrufsfunktion rechtssicher zu erfüllen und erfolgt auf Grundlage des Art. 6 Abs. 1 lit. c DSGVO.",
        legal_revocation_text8: "Diese Datenverarbeitung erfolgt außerdem auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse Ihnen eine benutzerfreundliche Widerrufsmöglichkeit zur Verfügung stellen zu können.",
        legal_termination: "Erhebung und Verarbeitung bei Nutzung des Kündigungsbuttons",
        legal_termination_text1: "Wenn Sie einen über unsere Onlinepräsenz abgeschlossenen Abonnement-Vertrag über die gesetzlich vorgeschriebene Kündigungsschaltfläche („Kündigungsbutton“) kündigen, verarbeiten wir dabei die von Ihnen in der Bestätigungsmaske eingegebenen Daten.",
        legal_termination_text2: "Bei der Nutzung der Kündigungsschaltfläche erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, gegebenenfalls Ihre Telefonnummer, Angaben zur Identifizierung des Vertrages, den Sie kündigen möchten sowie den Zeitpunkt (Datum und Uhrzeit) der Absendung der Kündigungserklärung) nur in dem von Ihnen zur Verfügung gestellten Umfang.",
        legal_termination_text3: "Die Datenverarbeitung dient dem Zweck, Ihnen die gesetzlich vorgeschriebene Möglichkeit zur Kündigung Ihres Dauerschuldverhältnisses zur Verfügung zu stellen sowie der ordnungsgemäßen Bearbeitung Ihrer Kündigung.",
        legal_termination_text4: "Wenn die Kontaktaufnahme einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_termination_text5: "Ansonsten erfolgt die Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. c DSGVO, da wir gesetzlich dazu verpflichtet sind, Ihnen eine Kündigungsschaltfläche auf unserer Onlinepräsenz zur Verfügung zu stellen.",
        legal_termination_text6: "Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Kündigungserklärung. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_images: "Erhebung und Verarbeitung bei Zusendung von Bildern per E-Mail",
        legal_images_text1: "Sie haben die Möglichkeit, uns Bilder per E-Mail zukommen zu lassen im Zusammenhang mit der Bestellung eines personalisierten Produktes.",
        legal_images_text2: "Mit Übermittlung Ihrer Bilder erheben wir ggf. Ihre personenbezogenen Daten (Abbildung einer identifizierbarer Personen) nur in dem von Ihnen zur Verfügung gestellten Umfang.",
        legal_images_text3: "Die Datenverarbeitung dient dem Zweck personalisierte Produkte zu erstellen. Das übersandte Bild dient hierbei als Vorlage für das Produkt und wird dafür verwendet (bspw. T-Shirt Druck).",
        legal_images_text4: "Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO und ist für die Erfüllung eines Vertrags mit Ihnen erforderlich.",
        legal_images_text5: "Eine Weitergabe Ihrer Daten erfolgt nicht.",
        legal_images_text6: "Das von Ihnen übersandte Bild nutzen wir nur im Rahmen der Leistungserbringung. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_whatsapp: "WhatsApp Business",
        legal_whatsapp_text1: "Wenn Sie per WhatsApp mit uns in Geschäftskontakt treten, nutzen wir hierfür die Version WhatsApp Business der WhatsApp Ireland Limited (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland; “WhatsApp”).",
        legal_whatsapp_text2: "Soweit Sie Ihren Aufenthalt außerhalb des Europäischen Wirtschaftsraumes haben, wird dieser Dienst durch die WhatsApp Inc. (1601 Willow Road, Menlo Park, CA 94025, USA) bereitgestellt.",
        legal_whatsapp_text3: "Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage.",
        legal_whatsapp_text4: "Zu diesem Zweck erheben und verarbeiten wir Ihre bei WhatsApp hinterlegte Mobilfunknummer, falls bereitgestellt Ihren Namen sowie weitere Daten in dem von Ihnen zur Verfügung gestellten Umfang.",
        legal_whatsapp_continuation: "WhatsApp Business (Fortsetzung)",
        legal_whatsapp_continuation_text1: "Wir verwenden für den Dienst ein mobiles Endgerät, in dessen Adressbuch ausschließlich Daten von Nutzern gespeichert sind, die uns über WhatsApp kontaktiert haben. Eine Weitergabe personenbezogener Daten an WhatsApp, ohne dass Sie hierin bereits gegenüber WhatsApp eingewilligt haben, erfolgt damit nicht.",
        legal_whatsapp_continuation_text2: "Ihre Daten werden von WhatsApp an Server der Meta Platforms Inc. in den USA übermittelt. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF).",
        legal_whatsapp_continuation_text3: "Meta Platforms Inc. hat sich nach dem TADPF zertifiziert und damit verpflichtet, europäische Datenschutzgrundsätze einzuhalten.",
        legal_whatsapp_continuation_text4: "Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_whatsapp_continuation_text5: "Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse am Bereitstellen einer schnellen und einfachen Kontaktaufnahme sowie an der Beantwortung Ihrer Anfrage.",
        legal_whatsapp_continuation_text6: "Ihre personenbezogenen Daten nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_whatsapp_continuation_text7: "Nähere Informationen zu Nutzungsbedingungen und Datenschutz bei Nutzung von WhatsApp finden Sie unter:",

    digitale_leistungen: "Digitale Lösungen",
    leistungen_lead: "die für Ihr Unternehmen arbeiten.",

    digitale_leistungen_text:
        "Eine Website sollte nicht nur gut aussehen oder technisch funktionieren. Sie sollte die Identität eines Unternehmens verständlich vermitteln, Vertrauen schaffen und Menschen gezielt durch die digitale Kommunikation führen. Dabei verbinden sich Technik, Design und strategisches Denken miteinander. Sauberer Code, eine klare Nutzerführung und durchdachte Inhalte bilden die Grundlage. Darauf können Suchmaschinenoptimierung, Conversion Optimierung, digitale Prozesse und gezielte Werbung aufbauen. Entscheidend ist nicht, möglichst viele Funktionen oder Leistungen anzubieten, sondern die richtigen Lösungen miteinander zu verbinden. Jede technische Entscheidung, jedes Designelement und jeder digitale Prozess sollte einem klaren Zweck folgen. So entsteht keine Website, die lediglich online ist, sondern ein digitales Werkzeug, das langfristig einen echten Beitrag zum Unternehmen leisten kann.",

    technik: "TECHNIK",
    technik_titel: "Webentwicklung & Design",
    technik_beschreibung:
        "Individuelle Websites mit sauberer technischer Grundlage, hochwertigem Design und klarer Struktur.",
    mehr_erfahren: "Mehr erfahren",

    sichtbarkeit: "SICHTBARKEIT",
    seo_titel: "Suchmaschinenoptimierung",
    seo_beschreibung:
        "Technische und inhaltliche Optimierung, damit Ihre Website von relevanten Menschen gefunden werden kann.",

    technik_details_1:
        "Webentwicklung bedeutet mehr als eine ansprechende Oberfläche. Eine gute Website muss schnell laden, auf jedem Gerät funktionieren, verständlich aufgebaut sein und technisch so entwickelt werden, dass sie auch langfristig zuverlässig arbeitet. Je nach Anforderungen entstehen individuelle Lösungen mit HTML5, CSS und JavaScript. Für schlanke und performante Websites können statische Lösungen eingesetzt werden. Wenn Inhalte regelmäßig gepflegt oder umfangreichere Funktionen benötigt werden, kommen WordPress oder Joomla mit PHP zum Einsatz. Auch Datenbanken, APIs, individuelle Funktionen, Formulare, Tracking und weitere Schnittstellen lassen sich integrieren.",

    technik_details_2:
        "Dabei steht nicht die verwendete Technologie im Mittelpunkt, sondern die passende Lösung für das jeweilige Unternehmen. Nicht jedes Projekt benötigt ein komplexes CMS und nicht jede Website sollte mit unnötigen Funktionen belastet werden. Eine technisch schlanke Lösung kann genauso sinnvoll sein wie ein individuell erweitertes System. Der Vorteil liegt in der Verbindung von Design, Entwicklung und strategischem Verständnis. Die technische Basis wird nicht isoliert betrachtet, sondern von Anfang an auf Nutzerführung, Suchmaschinenoptimierung, Performance und spätere Erweiterbarkeit ausgerichtet.",

    technik_details_3:
        "So entsteht keine Website von der Stange, sondern eine digitale Lösung, die zum Unternehmen passt, technisch sauber umgesetzt ist und einen konkreten Zweck erfüllt.",

    seo_details_1:
        "SEO sorgt dafür, dass eine Website technisch sauber aufgebaut ist, relevante Inhalte bietet und von Suchmaschinen verstanden und gefunden werden kann. Dazu gehören unter anderem Keyword Recherche, Onpage Optimierung, semantisches HTML, Meta Daten, strukturierte Überschriften, interne Verlinkungen, optimierte URLs, XML Sitemaps und strukturierte Daten. Auch Ladezeiten, mobile Optimierung, Indexierung und technische Fehler werden berücksichtigt.",

    seo_details_2:
        "Entscheidend ist die Verbindung aus Technik, Inhalten und Nutzerführung. Ziel ist nicht möglichst viel Traffic, sondern mehr relevante Besucher, die tatsächlich zum Angebot passen und zu Anfragen oder Kunden werden können.",

    service_label_3: "CONVERSION",
    conversion_title: "Conversion Optimierung",
    conversion_description:
        "Besucher sollen nicht nur Ihre Website ansehen, sondern verstehen, was sie als Nächstes tun können.",

    service_label_4: "AUTOMATISIERUNG",
    digital_processes_title: "Digitale Prozesse",
    digital_processes_description:
        "Die Website als Teil der Unternehmensprozesse schafft digitale Abläufe über die reine Darstellung von Inhalten hinaus.",

    conversion_details_1:
        "Conversion Optimierung sorgt dafür, dass aus Besuchern möglichst passende Interessenten werden. Dabei wird die Website gezielt auf Nutzerführung, Vertrauen und klare Handlungswege ausgerichtet. Optimiert werden unter anderem Call to Actions, Seitenstruktur, Formulare, Kontaktwege, Inhalte und Landingpages. Auch Faktoren wie mobile Darstellung, Ladezeiten, visuelle Hierarchie und die Platzierung wichtiger Informationen spielen eine Rolle.",

    conversion_details_2:
        "Ziel ist eine Website, die Besucher nicht einfach informiert, sondern sie gezielt zur passenden Handlung führt. Dazu können Anfragen, Erstgespräche, Terminbuchungen oder konkrete Kaufentscheidungen gehören.",

    digital_processes_details_1:
        "Eine Website kann als technische Schnittstelle zwischen Kunden, Mitarbeitern und bestehenden Unternehmenssystemen eingesetzt werden. Umsetzbar sind unter anderem Online Formulare, Terminbuchungen, Kundenanfragen, CRM Anbindungen, API Schnittstellen, Webhooks, automatisierte E Mail Prozesse, Datenübertragungen und individuelle Workflows. Bestehende Systeme können angebunden werden, sodass Informationen nicht mehrfach manuell erfasst werden müssen.",

    digital_processes_details_2:
        "Je nach Anforderung kann die Website Anfragen direkt an ein CRM übergeben, Termine mit einem Kalendersystem synchronisieren, Daten über APIs austauschen oder interne Prozesse über definierte Workflows anstoßen. Damit wird die Website technisch in bestehende Unternehmensabläufe integriert und übernimmt konkrete Funktionen über die reine Darstellung von Inhalten hinaus.",

    service_label_5: "REICHWEITE",
    service_title_5: "Ads & Kampagnen",
    service_description_titel5:
        "Gezielte Werbekampagnen, die relevante Besucher auf passende Angebote und Landingpages führen.",

    service_label_6: "OPTIMIERUNG",
    service_title_6: "Retargeting",
    service_description_titel6:
        "Besucher, die bereits Interesse gezeigt haben, erneut gezielt erreichen.",

    service_details_5:
        "Gezielte Werbekampagnen bringen relevante Besucher auf die Website und verbinden bezahlte Reichweite mit einem klar definierten Ziel. Zum Einsatz kommen unter anderem Google Ads, Social Ads, Zielgruppen Targeting, Kampagnenstrukturen, Anzeigentexte, Landingpages und Conversion Tracking. Kampagnen können auf bestimmte Leistungen, Regionen, Zielgruppen oder konkrete Angebote ausgerichtet werden.",

    service_details_5_2:
        "Entscheidend ist das Zusammenspiel der einzelnen Elemente. Anzeige, Zielgruppe, Landingpage, Conversion und Tracking werden aufeinander abgestimmt und messbar gemacht. Dadurch lässt sich nachvollziehen, welche Kampagnen funktionieren, wo Besucher abspringen und welche Maßnahmen angepasst werden müssen. Kampagnen werden dabei nicht einfach einmal eingerichtet und sich selbst überlassen. Daten werden ausgewertet, Anzeigen und Zielgruppen getestet und Budgets gezielt auf die relevanten Maßnahmen ausgerichtet. So entsteht ein messbarer Prozess von der ersten Anzeige bis zur konkreten Anfrage.",

    service_details_6:
        "Retargeting setzt dort an, wo der erste Website Besuch endet. Besucher, die bereits Interesse an einem Unternehmen, einer Leistung oder einem konkreten Angebot gezeigt haben, können zu definierten Zielgruppen zusammengefasst und gezielt erneut angesprochen werden. Dafür werden Tracking, Zielgruppen, Conversion Ereignisse und Werbekampagnen miteinander verbunden. Je nach Verhalten können unterschiedliche Zielgruppen entstehen, beispielsweise für Besucher bestimmter Leistungsseiten, Nutzer mit abgebrochenen Formularen oder Personen, die bereits eine bestimmte Aktion auf der Website ausgeführt haben.",

    service_details_6_2:
        "Über Google Ads, Meta Ads und weitere Werbeplattformen können anschließend passende Kampagnen ausgespielt werden. Inhalte, Anzeigen und Zielseiten lassen sich dabei auf die jeweilige Zielgruppe abstimmen. Retargeting wird damit zu einem messbaren Bestandteil der gesamten Customer Journey. Vom ersten Kontakt über die Website bis zur erneuten Ansprache lassen sich Nutzer gezielt weiterführen und Kampagnen anhand ihrer tatsächlichen Interaktionen optimieren.",

    leistungen_details_bottom:
        "Technik, Design und Kundengewinnung greifen dabei ineinander.",

    leistungen_details_bottom_strong:
        "Nicht jede Website braucht alles. Aber jede Website sollte das Richtige tun.",

    form_title: "Erstellen Sie Ihr individuelles Angebot",
    form6: "Ich möchte meine Website:",
    form7: "Individuell erstellen lassen",
    form8: "Optimieren lassen",
    form9: "Ich bin mit meiner Website zufrieden",
    form10: "Die Texte meiner Website:",
    form11: "Werde ich zur Verfügung stellen",
    form12: "Möchte ich individuell und SEO konform erstellen lassen",
    form13: "Die Texte meiner Website:",
    form14: "Sollen unverändert bleiben",
    form15: "Werde ich zur Verfügung stellen",
    form16: "Möchte ich individuell und SEO konform erstellen lassen",
    form17: "Ich möchte das Design meiner aktuellen Website anpassen:",
    form18: "Nein, das Design soll unverändert bleiben",
    form19: "Ja, ich möchte das Design ändern lassen",
    form20: "Wie viele Seiten soll Ihre Website umfassen? Rechtstexte ausgenommen",
    form21: "One Pager (1 Seite)",
    form22: "2 bis 3 Seiten",
    form23: "4 bis 6 Seiten",
    form24: "7 bis 9 Seiten",
    form25: "10 oder mehr Seiten",
    form26: "Welche Funktionen möchten Sie in Ihre Website integrieren?",
    form27: "Kontaktformular",
    form28: "Terminbuchung",
    form29: "Preisrechner",
    form30: "Anfrageformular",
    form31: "Mehrsprachigkeit",
    form32: "Blog",
    form33: "Newsletter",
    form34: "Weitere Funktionen",
    form35: "Welche weiteren Funktionen möchten Sie integrieren?",
    form37: "Möchten Sie eine Suchmaschinenoptimierung (SEO) für Ihre Website?",
    form38: "Ja",
    form39: "Nein",
    form40: "Wurde SEO bei der Erstellung Ihrer Texte bereits berücksichtigt?",
    form41: "Ja",
    form42: "Nein",
    form43: "Möchten Sie Ihre Texte SEO optimieren lassen?",
    form44: "Ja",
    form45: "Nein",
    form46: "Conversion Optimierung Ihrer Website:",
    form47: "Ich möchte meine Conversion Optimierung verbessern. Es sind bereits Daten vorhanden.",
    form48: "Ich möchte eine neue Conversion Optimierung aufbauen. Es sind noch keine Daten vorhanden.",
    form49: "Ich möchte keine Conversion Optimierung",
    form50: "Aus welchen Quellen stammen Ihre Daten?",
    form51: "Google Analytics / Matomo",
    form52: "Search Console",
    form53: "Weitere Quellen",
    form54: "Mit welcher weiteren Funktion oder Quelle wurden Ihre Daten erfasst?",
    form55: "Gibt es eine bestimmte Funktion, die Sie auf Grundlage Ihrer Daten verbessern möchten? (optional)",
    form56: "Wie viele Besucher hat Ihre Website ungefähr pro Monat?",
    form57: "Unter 500 Besucher",
    form58: "500 bis 2.000 Besucher",
    form59: "2.000 bis 10.000 Besucher",
    form60: "Über 10.000 Besucher",
    form61: "Möchten Sie Retargeting für Ihre Website einrichten?",
    form62: "Ich möchte Retargeting neu einrichten lassen",
    form63: "Ich möchte mein bestehendes Retargeting optimieren lassen",
    form64: "Ich möchte kein Retargeting einsetzen",
    form65: "Welche Werbeplattform nutzen Sie bereits?",
    form66: "Google Ads",
    form67: "Meta Ads",
    form68: "Weitere Plattform",
    form69: "Welche weitere Werbeplattform nutzen Sie bereits?",
    form70: "Haben Sie bereits konkrete Vorstellungen zur Optimierung Ihres Retargetings?",
    form71: "Ja",
    form72: "Nein",
    form73: "Wie möchten Sie Ihr Retargeting optimieren?",
    form74: "Ads und Werbekampagnen",
    form75: "Werden aktuell bereits Anzeigen geschaltet?",
    form76: "Ja",
    form77: "Nein, aber ich möchte Anzeigen oder Kampagnen schalten",
    form78: "Nein, ich möchte keine Anzeigen oder Kampagnen schalten",
    form79: "Welche Anzeigen werden bereits geschaltet?",
    form80: "Was soll eingerichtet werden?",
    form81: "Einzelne Ads",
    form82: "Eine Kampagne",
    form83: "Mehrere Kampagnen",
    form84: "Eine vollständige Kampagnenstruktur",
    form85: "Wo möchten Sie werben?",
    form86: "Google Ads",
    form87: "Meta Ads",
    form88: "Weitere Plattform",
    form89: "Ich weiß es noch nicht",
    form90: "Welche weitere Plattform möchten Sie verwenden?",
    form91: "Wie viele Angebote sollen beworben werden?",
    form92: "1 Angebot",
    form93: "2 bis 3 Angebote",
    form94: "4 oder mehr Angebote",
    form95: "Benötigen Sie dafür neue Landingpages?",
    form96: "Nein",
    form97: "Eine Landingpage",
    form98: "Mehrere Landingpages",
    form99: "Ich weiß es noch nicht",
    form100: "Wen möchten Sie erreichen?",
    form101: "Privatkunden",
    form102: "Geschäftskunden",
    form103: "Bewerber",
    form104: "Regionale Kunden",
    form105: "Überregionale oder internationale Kunden",
    form106: "Wie hoch ist Ihr aktuelles monatliches Werbebudget? Ein höheres Budget bedeutet nicht automatisch eine höhere Reichweite. Das Budget sollte zu Ihrem Unternehmen und Ihren Zielen passen.",
    form107: "Unter 500 €",
    form108: "500 € bis 1.000 €",
    form109: "1.000 € bis 2.500 €",
    form110: "2.500 € bis 5.000 €",
    form111: "Über 5.000 €",
    form112: "Einmalige Investition:",
    form113: "Monatliche Betreuung:",
    form114: "Sie sind mit dem Angebot zufrieden oder haben noch Fragen?",
    form115: "Nachricht senden",
    form116: "Kostenloses Erstgespräch vereinbaren",
    form117: "Zurück",
    form118: "Weiter",
    contact_form_h2: "Kontakt aufnehmen",
    contact_form_name: "Name",
    contact_form_email: "E-Mail",
    contact_form_telefon: "Telefonnummer (optional)",
    contact_form_message: "Nachricht",
    send: "Nachricht senden",
  webreitsport: "01 / Webdesign · Reitsport",
  dressurmuenchen: "Klassisch-barocke<br>Dressur München",
  persweb: "Eine persönliche Website für Isabell Bader, die Kompetenz, Vertrauen und die individuelle Arbeit mit Pferd und Reiter in den Mittelpunkt stellt.",

  reitprojekt: "Das Projekt",
  reitprojekt1: "Eine Website, die Persönlichkeit vermittelt.",
  reitprojekt2: "Die Website sollte die persönliche Arbeit von Isabell Bader als Reitlehrerin und Bereiterin authentisch widerspiegeln. Im Mittelpunkt stehen dabei nicht nur die angebotenen Leistungen, sondern vor allem die individuelle Ausbildung von Pferd und Reiter.",
  reitprojekt3: "Der digitale Auftritt sollte bewusst nicht wie eine klassische Reitschul Website wirken, sondern Ruhe, Qualität und Vertrauen vermitteln.",

  reither: "Die Herausforderung",
  reither1: "Viele Leistungen. Eine klare Struktur.",
  reither2: "Das Angebot richtet sich an unterschiedliche Zielgruppen vom Reitunterricht über Beritt und Lehrgänge bis hin zur Jungpferdeausbildung und der Arbeit mit anspruchsvollen Pferden.",
  reither3: "Die Herausforderung bestand darin, diese unterschiedlichen Themen übersichtlich darzustellen, ohne die Website mit Informationen zu überladen.",

  reitansatz: "Der Ansatz",
  reitansatz1: "Weniger Ablenkung.<br>Mehr Persönlichkeit.",

  reitkonzept: "Das Konzept",
  reitkonzept1: "Ruhig, persönlich und hochwertig.",
  reitkonzept2: "Die Gestaltung setzt auf eine klare Typografie, großzügige Bildflächen und ausreichend Weißraum. Dadurch entsteht eine ruhige Atmosphäre, die zur klassischen Reitkunst und zur persönlichen Arbeitsweise passt.",
  reitkonzept3: "Die Inhalte wurden so strukturiert, dass Besucher schnell verstehen, welche Leistungen angeboten werden und welcher Ansatz hinter der Arbeit steht.",

  altdesktop: "Desktop Ansicht der Website",
  altmobil: "Mobile Ansicht der Website",

  reitumsetzung: "Umsetzung",
  reitumsetzung1: "Individuelles Webdesign",
  reitumsetzung2: "Responsive Gestaltung",
  reitumsetzung3: "Klare Leistungsstruktur",
  reitumsetzung4: "Optimierung für mobile Endgeräte",
  reitumsetzung5: "SEO orientierte Seitenstruktur",
  reitumsetzung6: "Kontaktmöglichkeiten und Nutzerführung",

  reitergebnis: "Das Ergebnis",
  reitergebnis1: "Ein digitaler Auftritt, der die Persönlichkeit hinter dem Angebot sichtbar macht.",
  reitergebnis2: "Die Website verbindet eine klare Nutzerführung mit einer persönlichen und hochwertigen Gestaltung. Besucher erhalten schnell einen Überblick über das Angebot und gleichzeitig einen authentischen Eindruck von der Arbeitsweise.",

  portfolioviewproject: "→ Projekt ansehen",
  
  webpilates: "02 / Webdesign · Pilates",
  rebellpilates: "Rebell Pilates<br>Individuelles Training",
  perspilates: "Eine Website für persönliches Pilates Training, bei dem die individuelle Betreuung und die Arbeit mit dem einzelnen Menschen im Mittelpunkt stehen.",
  altpilates: "Website von Rebell Pilates",

  pilatesprojekt: "Das Projekt",
  pilatesprojekt1: "Pilates. Persönlich statt in der Gruppe.",
  pilatesprojekt2: "Für Rebell Pilates entstand eine Website, die das individuelle Trainingskonzept klar und verständlich vermittelt.",
  pilatesprojekt3: "Besonders wichtig war dabei, deutlich zu machen: Rebell Pilates bietet keine klassischen Gruppenkurse an, sondern persönliche Pilates Einheiten mit individueller Betreuung.",

  pilatesher: "Die Herausforderung",
  pilatesher1: "Ein anderes Verständnis von Pilates.",
  pilatesher2: "Viele Menschen verbinden Pilates zunächst mit Kursräumen und festen Gruppen. Die Website musste deshalb bereits auf den ersten Blick zeigen, dass hier ein anderes Konzept verfolgt wird.",
  pilatesher3: "Das individuelle Training, die persönliche Betreuung und die gezielte Arbeit an den jeweiligen Bedürfnissen sollten klar im Mittelpunkt stehen.",

  pilatesansatz: "Der Ansatz",
  pilatesansatz1: "Keine Gruppenkurse.<br>Volle Aufmerksamkeit.",

  pilateskonzept: "Das Konzept",
  pilateskonzept1: "Klar, modern und persönlich.",
  pilateskonzept2: "Die Gestaltung wurde bewusst modern und reduziert gehalten. Großzügige Bildflächen und eine klare Struktur geben dem individuellen Trainingsangebot Raum.",
  pilateskonzept3: "Leistungen und Trainingsansatz werden verständlich erklärt, sodass Besucher schnell erkennen, für wen das Angebot geeignet ist und was sie bei Rebell Pilates erwartet.",

  altdesktoppilates: "Desktop Ansicht der Website",
  altmobilpilates: "Mobile Ansicht der Website",

  pilatesumsetzung: "Umsetzung",
  pilatesumsetzung1: "Individuelles Webdesign",
  pilatesumsetzung2: "Responsive Gestaltung",
  pilatesumsetzung3: "Klare Positionierung des Angebots",
  pilatesumsetzung4: "Verständliche Darstellung des 1:1 Trainings",
  pilatesumsetzung5: "Strukturierte Leistungsseiten",
  pilatesumsetzung6: "Kontakt und Anfrageführung",

  pilatesergebnis: "Das Ergebnis",
  pilatesergebnis1: "Eine Website, die individuelles Training vermittelt.",
  pilatesergebnis2: "Der digitale Auftritt stellt die persönliche Betreuung klar in den Mittelpunkt und grenzt das Angebot deutlich von klassischen Pilates Gruppenkursen ab.",

  portfolioviewproject: "→ Projekt ansehen",
  
  webequily: "03 / Webdesign · Reitsport",
  equily: "Equily",
  persEquily: "Ein moderner digitaler Auftritt für eine Marke aus dem Pferdesport – klar, hochwertig und emotional, ohne dabei auf eine überladene Gestaltung zurückzugreifen.",
  altequily: "Equily Website",

  equilyprojekt: "Das Projekt",
  equilyprojekt1: "Eine Marke braucht mehr als eine schöne Website.",
  equilyprojekt2: "Für Equily sollte ein digitaler Auftritt entstehen, der die Marke professionell präsentiert und gleichzeitig die emotionale Verbindung zum Pferdesport vermittelt.",
  equilyprojekt3: "Die Website sollte modern wirken, die Marke klar positionieren und Besuchern einen einfachen Zugang zu den wichtigsten Inhalten ermöglichen.",

  equilyher: "Die Herausforderung",
  equilyher1: "Modern, ohne den Charakter zu verlieren.",
  equilyher2: "Websites im Pferdesport arbeiten häufig mit sehr dekorativen Elementen, klassischen Motiven und einer Vielzahl visueller Details.",
  equilyher3: "Für Equily sollte bewusst ein anderer Weg gewählt werden: ein reduziertes Erscheinungsbild, das hochwertig wirkt und der Marke genügend Raum gibt.",

  equilyansatz: "Der Ansatz",
  equilyansatz1: "Reduziertes Design.<br>Starke Marke.",

  equilykonzept: "Das Konzept",
  equilykonzept1: "Klarheit trifft auf Emotionalität.",
  equilykonzept2: "Das Gestaltungskonzept verbindet eine klare Typografie mit großzügigen Bildflächen und einer ruhigen Farbwelt.",
  equilykonzept3: "Statt möglichst viele Informationen gleichzeitig zu zeigen, wurden die Inhalte bewusst priorisiert. So entsteht eine visuelle Hierarchie, die Besucher intuitiv durch die Website führt.",

  altequilydesktop: "Equily Desktop Ansicht",
  altequilymobil: "Equily Mobile Ansicht",

  equilyumsetzung: "Umsetzung",
  equilyumsetzung1: "Individuelles Webdesign",
  equilyumsetzung2: "Modernes Farb und Typografiekonzept",
  equilyumsetzung3: "Responsive Gestaltung",
  equilyumsetzung4: "Klare Nutzerführung",
  equilyumsetzung5: "Mobile Optimierung",
  equilyumsetzung6: "Visuelle Markenführung",

  equilyergebnis: "Das Ergebnis",
  equilyergebnis1: "Ein moderner Auftritt mit eigenständiger visueller Identität.",
  equilyergebnis2: "Die Gestaltung verbindet die emotionale Welt des Pferdesports mit einer klaren und zeitgemäßen Formsprache. Dadurch erhält Equily einen professionellen digitalen Auftritt, der die Marke in den Mittelpunkt stellt.",

  portfolioviewproject: "→ Projekt ansehen",
  
  webuhren: "04 / Webdesign · Uhrenmanufaktur",
  aureliusuhr: "Aurelius & Söhne<br>Mechanische Uhrenmanufaktur",
  persuhren: "Ein digitaler Auftritt für eine traditionsbewusste Uhrenmanufaktur, der Handwerkskunst, Präzision und zeitlose Gestaltung miteinander verbindet.",
  altuhren: "Website der Uhrenmanufaktur Aurelius & Söhne",

  uhrenprojekt: "Das Projekt",
  uhrenprojekt1: "Eine digitale Bühne für mechanische Uhrmacherkunst.",
  uhrenprojekt2: "Für Aurelius & Söhne entstand eine Website, die den Charakter einer traditionsreichen Uhrenmanufaktur in die digitale Welt überträgt.",
  uhrenprojekt3: "Im Mittelpunkt stehen die Uhren, ihre Details und die Geschichte hinter der Marke – reduziert präsentiert und mit viel Raum für hochwertige Bildwelten.",

  uhrenher: "Die Herausforderung",
  uhrenher1: "Tradition modern präsentieren.",
  uhrenher2: "Die Gestaltung sollte hochwertig und klassisch wirken, ohne dabei altmodisch zu werden. Gleichzeitig mussten Produkte, Geschichte und Markenwelt übersichtlich miteinander verbunden werden.",
  uhrenher3: "Besonderes Augenmerk lag auf einer ruhigen Gestaltung, die den Uhren selbst den nötigen Raum gibt.",

  uhrenansatz: "Der Ansatz",
  uhrenansatz1: "Präzision im Detail.<br>Ruhe im Design.",

  uhrenkonzept: "Das Konzept",
  uhrenkonzept1: "Reduziert, klassisch und hochwertig.",
  uhrenkonzept2: "Die Gestaltung verbindet eine elegante Typografie mit warmen, zurückhaltenden Farbtönen und großzügigen Bildflächen.",
  uhrenkonzept3: "Produktseiten, Markengeschichte und Informationen zur Manufaktur wurden klar strukturiert, sodass die Website sowohl die Ästhetik als auch die handwerkliche Qualität der Marke vermittelt.",

  altuhrendesktop: "Desktop Ansicht der Website",
  altuhrenmobil: "Mobile Ansicht der Website",

  uhrenumsetzung: "Umsetzung",
  uhrenumsetzung1: "Individuelles Webdesign",
  uhrenumsetzung2: "Hochwertige Produktpräsentation",
  uhrenumsetzung3: "Responsive Gestaltung",
  uhrenumsetzung4: "Strukturierte Produkt und Markenseiten",
  uhrenumsetzung5: "Individuelle Bild und Typografiegestaltung",
  uhrenumsetzung6: "SEO orientierte Seitenstruktur",

  uhrenergebnis: "Das Ergebnis",
  uhrenergebnis1: "Ein digitaler Auftritt, der Tradition und moderne Markenpräsentation verbindet.",
  uhrenergebnis2: "Die Website schafft eine ruhige, hochwertige Umgebung für die Präsentation der Uhren und gibt der Marke einen eigenständigen digitalen Auftritt.",

  portfolioviewproject: "→ Projekt ansehen",
  
  webimmo: "05 / Konzeptprojekt · Real Estate & Architektur",
  immo: "Immobilien & Architektur",
  persimmo: "Ein Premium-Website-Konzept für ein Architektur- und Immobilienbüro mit Fokus auf Ästhetik, hochwertige Projektpräsentation und gezielte Interaktion.",
  altimmo: "Immobilien & Architektur Website Konzept",

  immoidee: "Die Idee",
  immoidee1: "Eine Plattform, die Architektur und Immobilien erlebbar macht.",
  immoidee2: "Für dieses Konzept wurde ein eleganter digitaler Auftritt für ein hochklassiges Architektur- und Immobilienunternehmen entwickelt.",
  immoidee3: "Im Mittelpunkt steht dabei nicht nur die visuelle Eleganz, sondern die gezielte Führung des Besuchers: Kann diese Agentur meine Traumimmobilie oder mein Bauvorhaben realisieren?",

  immoher: "Die Herausforderung",
  immoher1: "Vom ersten Eindruck zur qualifizierten Anfrage.",
  immoher2: "Kaufinteressenten und Bauherren suchen nach Präzision, Exklusivität und klaren Fakten: Welche Projekte wurden umgesetzt, welche Spezifikationen bieten die Objekte und wie erfolgt die Kontaktaufnahme?",
  immoher3: "Deshalb wurde die Website konsequent aus der Perspektive anspruchsvoller Kunden konzipiert – übersichtlich, stilvoll und frei von unnötigem Ballast.",

  immoansatz: "Der Ansatz",
  immoansatz1: "Ästhetik spüren.<br>Details entdecken.<br>Projekt anfragen.",

  immokonzept: "Das Konzept",
  immokonzept1: "Zeitlos, strukturiert und wirkungsvoll.",
  immokonzept2: "Die Gestaltung vereint eine minimalistische Formsprache mit großflächiger Bildsprache und interaktiven Modulen wie Vorher-Nachher-Vergleichen oder Grundriss-Previews.",
  immokonzept3: "Exklusive Portfolio-Kategorien und Kontakmöglichkeiten stehen im Vordergrund. Elemente wie Qualitätsgarantien, Materialkonzepte und Haltung schaffen sofortiges Vertrauen.",

  altimmodesktop: "Immobilien Website Desktop Ansicht",
  altimmomobil: "Immobilien Website Mobile Ansicht",

  immoumsetzung: "Umsetzung",
  immoumsetzung1: "Exklusives Website-Konzept",
  immoumsetzung2: "Responsive Webdesign",
  immoumsetzung3: "Filterbare Projektübersicht",
  immoumsetzung4: "Interaktiver Vorher-Nachher Slider",
  immoumsetzung5: "Grundriss- & Spezifikationen-Tabs",
  immoumsetzung6: "Strategische Nutzerführung für Anfragen",

  immoergebnis: "Das Ziel",
  immoergebnis1: "Eine Website, die exklusive Projekte würdig präsentiert und Leads generiert.",
  immoergebnis2: "Das Konzept zeigt, wie Architekten und Immobilienmakler digital auf Highend-Niveau auftreten können, um Premium-Kunden direkt zu überzeugen.",

  portfolioviewproject: "→ Projekt ansehen",

  immohinweis: "Hinweis",
  immohinweis1: "Dieses Projekt ist ein eigenständig entwickeltes Website-Konzept und keine reale Kundenwebsite.",

    },
    en: {
    title: "Ibvian",
    nav_home: "Home",
    nav_about: "About Ibvian",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    theme_toggle: "Dark Mode",
    lang_switch: "DE",
    footer_links: "Information",
    link_impressum: "Legal Notice",
    link_datenschutz: "Privacy Policy",
    link_agb: "Terms and Conditions",
    link_wiederruf: "Payment and Shipping",
    footer_copyright: "All rights reserved.",

    hero_h1: "Ibvian",
    hero_p: "Digital Studio",
    preview_services: "Services",
    preview_portfolio: "Portfolio",
    preview_services_intro: "Digital solutions for more than just a presence.",
    preview_services_desc:
        "Web development, design, SEO, conversion optimization and digital processes. From the technical foundation to automated customer acquisition, we create solutions that reach visitors, turn them into inquiries and simplify workflows.",
    btn_view_services: "View services →",
    preview_portfolio_desc: "Turning ideas into digital solutions.",
    preview_portfolio_desc2:
        "Selected websites, web portals and custom developments. Discover insights into design, technology and the solutions that turn an idea into a functional digital project.",
    btn_view_portfolio: "View projects →",

    ibvian_text: "Digital Solutions - Ibvian",
    ibvian_description: "Through my own self-employment, I understand the perspective of businesses firsthand. A website shouldn't just look good or be online. It should serve a real purpose and contribute to the company's success. At Ibvian, I combine web development, high-quality design, and digital customer acquisition into well-thought-out solutions. I place particular emphasis on a technically clean, modern, and high-performance implementation using HTML, CSS, and JavaScript, with a keen eye for detail. Because a website can be more than just a digital business card. It can communicate services clearly, build trust, generate inquiries, and function as an active part of customer acquisition. My goal is to combine technology, design, and strategy in a way that turns a website into a powerful tool for your business.",
    about_text_hero: "Technology that people understand",
    about_text_1: "My studies in pedagogy and sociology shape my perspective on digital communication to this day. I'm not only interested in how a website works technically, but also in how people perceive and interact with it. A good website must be clear, provide orientation, and build trust. That's why I combine technical execution with an eye for users, businesses, and the details that turn visitors into leads.",
    about_text_2: "My ambition is to create websites that look great, function intuitively, and serve a clear purpose.",

    portfoliotitel: "Selected Projects",
    portfoliolead: "Every website is individually tailored to the company, its target audience and its specific goals.",

    portfolio1alt: "Isabell Bader Baroque Riding Website",
    portfolio1title: "Isabell Bader – Baroque Riding",

    portfolio2alt: "Rebell Pilates Website",
    portfolio2title: "Rebell Pilates",

    portfolio3alt: "Equily Web Portal",
    portfolio3title: "Equily – Custom Web Portal",

    portfolio4alt: "Watch Manufacture Website",
    portfolio4title: "Aurelius & Söhne – Mechanical Watch Manufacture",

    portfolio5alt: "Real Estate Agency Website",
    portfolio5title: "Real Estate Agency – Individual Property Consulting",

    portfolioviewproject: "→ View project",

    portfoliocomingsoon: "Coming Soon",
    portfoliomoreprojects: "More projects coming soon",

    contact_hero_title: "Let's talk about your project.",
    contact_hero_subtitle: "I look forward to getting to know you and your business. Let's find out together how I can support you.",
    contact_info_p: "Do you have questions or would like to discuss your project? I am happy to help.",
    contact_info_email: "Email:",
    contact_info_telefon: "Phone number:",
    contact_info_hours: "I respond to inquiries on weekdays within 24 hours.",
    btn_request_appointment: "Request a free initial consultation",
    contact_form_h2: "Contact",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_telefon: "Phone number (optional)",
    contact_form_topic: "Subject",
    contact_form_topic_anfrage: "General inquiry / Request for callback",
    contact_form_topic_termin: "Book appointment for initial consultation",
    contact_form_message: "Message",
    contact_form_submit: "Send",
    form_success: "Thank you! I have received your message.",
    form_error: "Oops, something went wrong.",

    legal_impressum: "Impressum",
    legal_provider: "Gesetzliche Anbieterkennung",
    legal_phone: "Telefon",
    legal_email: "E-Mail",
    legal_whatsapp: "WhatsApp",

    digitale_leistungen: "Digital Solutions",
    leistungen_lead: "that work for your business.",

    digitale_leistungen_text:
        "A website should not only look good or function technically. It should communicate a company's identity clearly, build trust and guide people purposefully through digital communication. This is where technology, design and strategic thinking come together. Clean code, clear user guidance and well-planned content form the foundation. On top of this, search engine optimization, conversion optimization, digital processes and targeted advertising can be built. The goal is not to offer as many features or services as possible, but to connect the right solutions. Every technical decision, design element and digital process should serve a clear purpose. This creates more than a website that is simply online: it creates a digital tool that can make a lasting and meaningful contribution to the business.",

    technik: "TECHNOLOGY",
    technik_titel: "Web Development & Design",
    technik_beschreibung:
        "Custom websites with a solid technical foundation, high-quality design and a clear structure.",
    mehr_erfahren: "Learn more",

    sichtbarkeit: "VISIBILITY",
    seo_titel: "Search Engine Optimization",
    seo_beschreibung:
        "Technical and content optimization to help your website be found by the people who matter.",

    technik_details_1:
        "Web development is about more than an appealing interface. A good website needs to load quickly, work on every device, be easy to understand and be technically built to remain reliable over time. Depending on the requirements, custom solutions can be developed using HTML5, CSS and JavaScript. Static solutions can be used for lean and high-performance websites. When content needs to be managed regularly or more advanced functionality is required, WordPress or Joomla with PHP can be used. Databases, APIs, custom functions, forms, tracking and other integrations can also be implemented.",

    technik_details_2:
        "The focus is not on the technology itself, but on finding the right solution for each business. Not every project needs a complex CMS, and not every website should be burdened with unnecessary features. A technically lean solution can be just as effective as a customized and extended system. The advantage lies in combining design, development and strategic thinking. The technical foundation is not considered in isolation, but is designed from the beginning with user experience, search engine optimization, performance and future scalability in mind.",

    technik_details_3:
        "The result is not an off-the-shelf website, but a digital solution that fits the business, is technically well executed and serves a clear purpose.",

    seo_details_1:
        "SEO ensures that a website is technically well structured, provides relevant content and can be understood and discovered by search engines. This includes keyword research, on-page optimization, semantic HTML, meta data, structured headings, internal linking, optimized URLs, XML sitemaps and structured data. Loading times, mobile optimization, indexing and technical errors are also taken into account.",

    seo_details_2:
        "What matters is the combination of technology, content and user experience. The goal is not simply to generate as much traffic as possible, but to attract more relevant visitors who actually fit the offering and can become inquiries or customers.",

    service_label_3: "CONVERSION",
    conversion_title: "Conversion Optimization",
    conversion_description:
        "Visitors should not just browse your website. They should understand what they can do next.",

    service_label_4: "AUTOMATION",
    digital_processes_title: "Digital Processes",
    digital_processes_description:
        "Integrating the website into business processes creates digital workflows that go beyond simply presenting information.",

    conversion_details_1:
        "Conversion optimization focuses on turning visitors into relevant prospects. The website is strategically designed around user guidance, trust and clear paths to action. This can include optimizing calls to action, page structure, forms, contact options, content and landing pages. Factors such as mobile presentation, loading times, visual hierarchy and the placement of important information also play a role.",

    conversion_details_2:
        "The goal is a website that does more than simply inform visitors. It guides them toward the right action. This can include inquiries, initial consultations, appointment bookings or specific purchase decisions.",

    digital_processes_details_1:
        "A website can serve as a technical interface between customers, employees and existing business systems. Possible implementations include online forms, appointment bookings, customer inquiries, CRM integrations, API connections, webhooks, automated email processes, data transfers and custom workflows. Existing systems can be connected so that information does not have to be entered manually multiple times.",

    digital_processes_details_2:
        "Depending on the requirements, the website can send inquiries directly to a CRM, synchronize appointments with a calendar system, exchange data through APIs or trigger internal processes through defined workflows. This integrates the website into existing business operations and gives it concrete functions beyond simply displaying content.",

    service_label_5: "REACH",
    service_title_5: "Ads & Campaigns",
    service_description_titel5:
        "Targeted advertising campaigns that guide relevant visitors to suitable offers and landing pages.",

    service_label_6: "OPTIMIZATION",
    service_title_6: "Retargeting",
    service_description_titel6:
        "Reach visitors who have already shown interest and engage with them again in a targeted way.",

    service_details_5:
        "Targeted advertising campaigns bring relevant visitors to the website and connect paid reach with a clearly defined goal. This can include Google Ads, social ads, audience targeting, campaign structures, ad copy, landing pages and conversion tracking. Campaigns can be targeted toward specific services, regions, audiences or offers.",

    service_details_5_2:
        "The key is how all individual elements work together. Ads, audiences, landing pages, conversions and tracking are coordinated and made measurable. This makes it possible to understand which campaigns perform, where visitors drop off and which measures need to be adjusted. Campaigns are not simply set up once and left to run on their own. Data is analyzed, ads and audiences are tested, and budgets are focused on the measures that matter. This creates a measurable process from the first advertisement to the actual inquiry.",

    service_details_6:
        "Retargeting starts where the first website visit ends. Visitors who have already shown interest in a company, service or specific offer can be grouped into defined audiences and reached again with targeted messaging. This requires tracking, audience segments, conversion events and advertising campaigns to work together. Depending on user behavior, different audiences can be created, such as visitors to specific service pages, users who abandoned a form or people who have already completed a particular action on the website.",

    service_details_6_2:
        "Suitable campaigns can then be delivered through Google Ads, Meta Ads and other advertising platforms. Content, ads and landing pages can be tailored to each audience. Retargeting therefore becomes a measurable part of the entire customer journey. From the first website interaction to renewed engagement, users can be guided through the journey and campaigns can be optimized based on their actual interactions.",

    leistungen_details_bottom:
        "Technology, design and customer acquisition work together.",

    leistungen_details_bottom_strong:
        "Not every website needs everything. But every website should do the right thing.",

    form_title: "Create Your Individual Offer",
    form6: "I would like to:",
    form7: "Have a new website created",
    form8: "Optimize my existing website",
    form9: "Keep my current website",
    form10: "The content of my website:",
    form11: "I will provide it",
    form12: "I would like it to be created individually and optimized for SEO",
    form13: "The content of my website:",
    form14: "Should remain unchanged",
    form15: "I will provide it",
    form16: "I would like it to be created individually and optimized for SEO",
    form17: "I would like to adjust the design of my current website:",
    form18: "No, the design should remain unchanged",
    form19: "Yes, I would like to change the design",
    form20: "How many pages should your website contain? Legal pages excluded",
    form21: "One Pager (1 page)",
    form22: "2 to 3 pages",
    form23: "4 to 6 pages",
    form24: "7 to 9 pages",
    form25: "10 or more pages",
    form26: "Which features would you like to integrate into your website?",
    form27: "Contact form",
    form28: "Appointment booking",
    form29: "Price calculator",
    form30: "Inquiry form",
    form31: "Multiple languages",
    form32: "Blog",
    form33: "Newsletter",
    form34: "Other features",
    form35: "Which other features would you like to integrate?",
    form37: "Would you like search engine optimization (SEO) for your website?",
    form38: "Yes",
    form39: "No",
    form40: "Has SEO already been considered when creating your content?",
    form41: "Yes",
    form42: "No",
    form43: "Would you like your content to be optimized for SEO?",
    form44: "Yes",
    form45: "No",
    form46: "Conversion optimization for your website:",
    form47: "I would like to improve my conversion optimization. Data is already available.",
    form48: "I would like to establish a new conversion optimization strategy. No data is available yet.",
    form49: "I do not want conversion optimization",
    form50: "Which sources is your data from?",
    form51: "Google Analytics / Matomo",
    form52: "Search Console",
    form53: "Other sources",
    form54: "Which other tool or source was used to collect your data?",
    form55: "Is there a specific feature you would like to improve based on your data? (optional)",
    form56: "Approximately how many visitors does your website receive per month?",
    form57: "Fewer than 500 visitors",
    form58: "500 to 2,000 visitors",
    form59: "2,000 to 10,000 visitors",
    form60: "More than 10,000 visitors",
    form61: "Would you like to set up retargeting for your website?",
    form62: "I would like to have retargeting set up",
    form63: "I would like to optimize my existing retargeting",
    form64: "I do not want to use retargeting",
    form65: "Which advertising platform are you currently using?",
    form66: "Google Ads",
    form67: "Meta Ads",
    form68: "Other platform",
    form69: "Which other advertising platform are you currently using?",
    form70: "Do you already have specific ideas for optimizing your retargeting?",
    form71: "Yes",
    form72: "No",
    form73: "How would you like to optimize your retargeting?",
    form74: "Ads and Advertising Campaigns",
    form75: "Are you currently running advertisements?",
    form76: "Yes",
    form77: "No, but I would like to run ads or campaigns",
    form78: "No, I do not want to run ads or campaigns",
    form79: "Which ads are currently running?",
    form80: "What would you like to set up?",
    form81: "Individual ads",
    form82: "One campaign",
    form83: "Multiple campaigns",
    form84: "Complete campaign structure",
    form85: "Where would you like to advertise?",
    form86: "Google Ads",
    form87: "Meta Ads",
    form88: "Other platform",
    form89: "I am not sure yet",
    form90: "Which other platform would you like to use?",
    form91: "How many offers should be advertised?",
    form92: "1 offer",
    form93: "2 to 3 offers",
    form94: "4 or more offers",
    form95: "Do you need new landing pages for this?",
    form96: "No",
    form97: "One landing page",
    form98: "Multiple landing pages",
    form99: "I am not sure yet",
    form100: "Who would you like to reach?",
    form101: "Private customers",
    form102: "Business customers",
    form103: "Applicants",
    form104: "Regional customers",
    form105: "Customers outside your region or international customers",
    form106: "What is your current monthly advertising budget? A higher budget does not automatically mean greater reach. The budget should be appropriate for your business and goals.",
    form107: "Under €500",
    form108: "€500 to €1,000",
    form109: "€1,000 to €2,500",
    form110: "€2,500 to €5,000",
    form111: "More than €5,000",

    form112: "One-time investment:",
    form113: "Monthly support:",
    form114: "Are you happy with the offer or do you still have questions?",
    form115: "Send a message",
    form116: "Schedule a free initial consultation",
    contact_form_h2: "Get in Touch",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_telefon: "Phone number (optional)",
    contact_form_message: "Message",
    contact_booking_h2: "Schedule a Free Initial Consultation",
    contact_booking_text: "Choose a suitable time for your free initial consultation.",
    cal_title: "Select a time for an initial consultation",
    placeholder_funktionen: "Briefly describe which features you would like to integrate...",
    placeholder_datenquelle: "Briefly describe which tool or source was used...",
    placeholder_verbesserung: "Briefly describe which feature you would like to improve...",
    placeholder_retargeting_plattform: "Briefly describe which advertising platform you are using...",
    placeholder_retargeting_optimierung: "Briefly describe how you would like to optimize your retargeting...",
    placeholder_ads_bestehend: "Briefly describe which ads are currently running...",
    placeholder_ads_plattform: "Briefly describe which platform you would like to use...",
    placeholder_message: "Your message",
    honeypot_label: "Please leave this field empty",
    send: "Send Message",
    request_appointment: "Request Initial Consultation",
  webreitsport: "01 / Web Design · Equestrian",
  dressurmuenchen: "Classical Baroque<br>Dressage Munich",
  persweb: "A personal website for Isabell Bader, focusing on expertise, trust and her individual approach to working with horse and rider.",

  reitprojekt: "The Project",
  reitprojekt1: "A website that conveys personality.",
  reitprojekt2: "The website was designed to authentically reflect Isabell Bader’s work as a riding instructor and rider. The focus is not only on the services offered, but above all on the individual training of horse and rider.",
  reitprojekt3: "The digital presence was deliberately designed not to feel like a traditional riding school website, but to convey calmness, quality and trust.",

  reither: "The Challenge",
  reither1: "Many services. One clear structure.",
  reither2: "The services are aimed at different target groups, ranging from riding lessons, horse training and clinics to young horse training and working with challenging horses.",
  reither3: "The challenge was to present these different areas clearly without overwhelming the website with information.",

  reitansatz: "The Approach",
  reitansatz1: "Less distraction.<br>More personality.",

  reitkonzept: "The Concept",
  reitkonzept1: "Calm, personal and refined.",
  reitkonzept2: "The design uses clear typography, generous image areas and ample white space. This creates a calm atmosphere that reflects classical riding and the personal approach to the work.",
  reitkonzept3: "The content was structured so that visitors can quickly understand which services are offered and what approach lies behind the work.",

  altdesktop: "Desktop view of the website",
  altmobil: "Mobile view of the website",

  reitumsetzung: "Implementation",
  reitumsetzung1: "Custom web design",
  reitumsetzung2: "Responsive design",
  reitumsetzung3: "Clear service structure",
  reitumsetzung4: "Mobile optimisation",
  reitumsetzung5: "SEO oriented page structure",
  reitumsetzung6: "Contact options and user guidance",

  reitergebnis: "The Result",
  reitergebnis1: "A digital presence that makes the personality behind the service visible.",
  reitergebnis2: "The website combines clear user guidance with a personal and refined design. Visitors can quickly understand the services while gaining an authentic impression of the approach to the work.",

  portfolioviewproject: "→ View project",
  
  webpilates: "02 / Web Design · Pilates",
  rebellpilates: "Rebell Pilates<br>Personal Training",
  perspilates: "A website for personal Pilates training, focusing on individual attention and a personalised approach to each client.",
  altpilates: "Website for Rebell Pilates",

  pilatesprojekt: "The Project",
  pilatesprojekt1: "Pilates. Personal rather than in a group.",
  pilatesprojekt2: "A website was created for Rebell Pilates to clearly and effectively communicate its individual training concept.",
  pilatesprojekt3: "It was particularly important to make clear that Rebell Pilates does not offer traditional group classes, but personal Pilates sessions with individual attention.",

  pilatesher: "The Challenge",
  pilatesher1: "A different approach to Pilates.",
  pilatesher2: "Many people initially associate Pilates with studios and fixed groups. The website therefore needed to communicate from the very first glance that a different concept was being offered.",
  pilatesher3: "Individual training, personal attention and targeted work based on each client’s needs were placed clearly at the centre.",

  pilatesansatz: "The Approach",
  pilatesansatz1: "No group classes.<br>Full attention.",

  pilateskonzept: "The Concept",
  pilateskonzept1: "Clear, modern and personal.",
  pilateskonzept2: "The design was deliberately kept modern and minimal. Generous image areas and a clear structure give the individual training concept room to breathe.",
  pilateskonzept3: "The services and training approach are explained clearly, allowing visitors to quickly understand who the offer is suited to and what they can expect from Rebell Pilates.",

  altdesktoppilates: "Desktop view of the website",
  altmobilpilates: "Mobile view of the website",

  pilatesumsetzung: "Implementation",
  pilatesumsetzung1: "Custom web design",
  pilatesumsetzung2: "Responsive design",
  pilatesumsetzung3: "Clear positioning of the service",
  pilatesumsetzung4: "Clear presentation of 1:1 training",
  pilatesumsetzung5: "Structured service pages",
  pilatesumsetzung6: "Contact and enquiry guidance",

  pilatesergebnis: "The Result",
  pilatesergebnis1: "A website that communicates individual training.",
  pilatesergebnis2: "The digital presence clearly places personal attention at the centre and distinguishes the service from traditional Pilates group classes.",

  portfolioviewproject: "→ View project",
  
  webequily: "03 / Web Design · Equestrian",
  equily: "Equily",
  persEquily: "A modern digital presence for an equestrian brand, combining clarity, quality and emotion without relying on an overloaded design.",
  altequily: "Equily Website",

  equilyprojekt: "The Project",
  equilyprojekt1: "A brand needs more than a beautiful website.",
  equilyprojekt2: "The goal for Equily was to create a digital presence that presents the brand professionally while conveying its emotional connection to the equestrian world.",
  equilyprojekt3: "The website was designed to feel modern, position the brand clearly and give visitors easy access to the most important content.",

  equilyher: "The Challenge",
  equilyher1: "Modern without losing character.",
  equilyher2: "Equestrian websites often rely on decorative elements, traditional imagery and a large number of visual details.",
  equilyher3: "For Equily, a different approach was deliberately chosen: a reduced visual identity that feels refined while giving the brand enough space to stand out.",

  equilyansatz: "The Approach",
  equilyansatz1: "Reduced design.<br>Strong brand.",

  equilykonzept: "The Concept",
  equilykonzept1: "Clarity meets emotion.",
  equilykonzept2: "The design concept combines clear typography with generous image areas and a calm colour palette.",
  equilykonzept3: "Instead of presenting as much information as possible at once, the content was deliberately prioritised. This creates a visual hierarchy that guides visitors intuitively through the website.",

  altequilydesktop: "Equily Desktop view",
  altequilymobil: "Equily Mobile view",

  equilyumsetzung: "Implementation",
  equilyumsetzung1: "Custom web design",
  equilyumsetzung2: "Modern colour and typography concept",
  equilyumsetzung3: "Responsive design",
  equilyumsetzung4: "Clear user guidance",
  equilyumsetzung5: "Mobile optimisation",
  equilyumsetzung6: "Visual brand guidance",

  equilyergebnis: "The Result",
  equilyergebnis1: "A modern presence with a distinctive visual identity.",
  equilyergebnis2: "The design combines the emotional world of equestrian sport with a clear and contemporary visual language. This gives Equily a professional digital presence that puts the brand at the centre.",

  portfolioviewproject: "→ View project",

  webuhren: "04 / Web Design · Watch Manufacture",
  aureliusuhr: "Aurelius & Söhne<br>Mechanical Watch Manufacture",
  persuhren: "A digital presence for a traditional watch manufacture, combining craftsmanship, precision and timeless design.",
  altuhren: "Website of Aurelius & Söhne watch manufacture",

  uhrenprojekt: "The Project",
  uhrenprojekt1: "A digital stage for mechanical watchmaking.",
  uhrenprojekt2: "For Aurelius & Söhne, a website was created to bring the character of a traditional watch manufacture into the digital world.",
  uhrenprojekt3: "The focus is on the watches, their details and the story behind the brand, presented in a reduced style with generous space for high quality imagery.",

  uhrenher: "The Challenge",
  uhrenher1: "Presenting tradition in a modern way.",
  uhrenher2: "The design needed to feel refined and classic without appearing outdated. At the same time, products, history and brand identity had to be connected in a clear and structured way.",
  uhrenher3: "Particular emphasis was placed on a calm design that gives the watches the space they deserve.",

  uhrenansatz: "The Approach",
  uhrenansatz1: "Precision in detail.<br>Calm in design.",

  uhrenkonzept: "The Concept",
  uhrenkonzept1: "Reduced, classic and refined.",
  uhrenkonzept2: "The design combines elegant typography with warm, understated colours and generous image areas.",
  uhrenkonzept3: "Product pages, brand history and information about the manufacture were clearly structured so that the website communicates both the aesthetics and the craftsmanship of the brand.",

  altuhrendesktop: "Desktop view of the website",
  altuhrenmobil: "Mobile view of the website",

  uhrenumsetzung: "Implementation",
  uhrenumsetzung1: "Custom web design",
  uhrenumsetzung2: "High quality product presentation",
  uhrenumsetzung3: "Responsive design",
  uhrenumsetzung4: "Structured product and brand pages",
  uhrenumsetzung5: "Custom imagery and typography",
  uhrenumsetzung6: "SEO oriented page structure",

  uhrenergebnis: "The Result",
  uhrenergebnis1: "A digital presence that combines tradition with modern brand presentation.",
  uhrenergebnis2: "The website creates a calm, refined environment for presenting the watches and gives the brand a distinctive digital presence.",

  portfolioviewproject: "→ View project",
  
  webimmo: "05 / Concept Project · Real Estate & Architecture",
  immo: "Real Estate & Architecture",
  persimmo: "A premium website concept for an architecture and real estate firm, focusing on aesthetics, high quality project presentation and targeted interaction.",
  altimmo: "Real Estate & Architecture Website Concept",

  immoidee: "The Idea",
  immoidee1: "A platform that makes architecture and real estate tangible.",
  immoidee2: "For this concept, an elegant digital presence was developed for a high-end architecture and real estate company.",
  immoidee3: "The focus is not only on visual elegance, but also on guiding visitors with purpose: Can this agency realise my dream property or construction project?",

  immoher: "The Challenge",
  immoher1: "From first impression to qualified enquiry.",
  immoher2: "Property buyers and clients looking to build are looking for precision, exclusivity and clear facts: Which projects have been completed, what specifications do the properties offer and how can they get in touch?",
  immoher3: "The website was therefore designed consistently from the perspective of demanding clients – clear, refined and free from unnecessary distractions.",

  immoansatz: "The Approach",
  immoansatz1: "Feel the aesthetics.<br>Discover the details.<br>Enquire about the project.",

  immokonzept: "The Concept",
  immokonzept1: "Timeless, structured and impactful.",
  immokonzept2: "The design combines a minimalist visual language with large-scale imagery and interactive modules such as before-and-after comparisons and floor plan previews.",
  immokonzept3: "Exclusive portfolio categories and contact options take centre stage. Elements such as quality guarantees, material concepts and brand values create immediate trust.",

  altimmodesktop: "Real Estate Website Desktop View",
  altimmomobil: "Real Estate Website Mobile View",

  immoumsetzung: "Implementation",
  immoumsetzung1: "Exclusive website concept",
  immoumsetzung2: "Responsive web design",
  immoumsetzung3: "Filterable project overview",
  immoumsetzung4: "Interactive before-and-after slider",
  immoumsetzung5: "Floor plan and specification tabs",
  immoumsetzung6: "Strategic user guidance for enquiries",

  immoergebnis: "The Goal",
  immoergebnis1: "A website that presents exclusive projects appropriately and generates leads.",
  immoergebnis2: "The concept demonstrates how architects and real estate professionals can establish a high-end digital presence designed to directly convince premium clients.",

  portfolioviewproject: "→ View project",

  immohinweis: "Note",
  immohinweis1: "This project is an independently developed website concept and not a real client website.",

        footer_contact: "Contact",
        contact_hero_h1: "Let's start your project",
        contact_hero_lead: "Send me a message or book a free, no-obligation introductory call.",
        contact_info_h2: "Contact",
        back: "Back",
        header_nav0: "Open menu",
        menu_open: "Open menu",
        portfolio_titel: "Selected Projects",
        portfolio_lead: "Every website is individually tailored to the company, its target audience and its specific goals.",
        portfolio_project_1_alt: "Isabell Bader Baroque Riding Website",
        portfolio_project_1_title: "Isabell Bader - Baroque Riding",
        portfolio_project_2_alt: "Rebell Pilates Website",
        portfolio_project_2_title: "Rebell Pilates",
        portfolio_project_3_alt: "Equily Web Portal",
        portfolio_project_3_title: "Equily - Custom Web Portal",
        portfolio_project_4_alt: "Watch Manufacture Website",
        portfolio_project_4_title: "Aurelius & Sons - Mechanical Watch Manufacture",
        portfolio_project_5_alt: "Real Estate Agency Website",
        portfolio_project_5_title: "Real Estate Agency - Individual Property Consulting",
        portfolio_view_project: "-> View project",
        portfolio_coming_soon: "Coming Soon",
        portfolio_more_projects: "More projects coming soon",

        legal_datenschutz: "Privacy Policy",
        legal_datenschutz_text1: "Unless stated otherwise below, providing your personal data is neither legally nor contractually required, nor necessary to enter into a contract. You are not obliged to provide the data. Failure to provide it will have no consequences unless otherwise stated for a specific processing activity.",
        legal_datenschutz_text2: "Personal data means any information relating to an identified or identifiable natural person.",
        legal_server_logfiles: "Server log files",
        legal_server_logfiles_text1: "You can visit our websites without providing any personal information.",
        legal_server_logfiles_text2: "Whenever you access our website, usage data is transmitted by your internet browser to us or our web host and stored in log files, known as server log files.",
        legal_server_logfiles_text3: "The stored data includes the name of the page accessed, the date and time of access, the IP address, the amount of data transferred and the requesting provider.",
        legal_server_logfiles_text4: "Processing is based on Art. 6 (1) (f) GDPR and our legitimate interest in ensuring the trouble-free operation of our website and improving our services.",
        legal_contact: "Contact",
        legal_responsible: "Controller",
        legal_responsible_text: "Please contact us if you wish. The controller responsible for data processing is:",
        legal_initiative: "Customer-initiated contact by email",
        legal_initiative_text: "If you contact us by email on your own initiative, we collect your personal data, such as your name, email address and message, only to the extent you provide it. The data is processed to handle and respond to your inquiry.",
        legal_initiative_text2: "If the contact concerns pre-contractual measures, such as advice regarding a purchase or preparing an offer, or concerns an existing contract between you and us, processing is based on Art. 6 (1) (b) GDPR.",
        legal_initiative_text3: "If you contact us for other reasons, processing is based on Art. 6 (1) (f) GDPR and our legitimate interest in handling and responding to your inquiry.",
        legal_initiative_text4: "We use your email address only to process your inquiry. Your data is then deleted in accordance with statutory retention periods unless you have consented to further processing and use.",
        legal_contact_form: "Collection and processing when using the contact form",
        legal_contact_form_text: "When you use the contact form, we collect your personal data, such as your name, email address and message, only to the extent you provide it. The data is processed for the purpose of contacting you.",
        legal_contact_form_text2: "If the contact concerns pre-contractual measures, such as advice regarding a purchase or preparing an offer, or concerns an existing contract between you and us, processing is based on Art. 6 (1) (b) GDPR.",
        legal_contact_form_text3: "If you contact us for other reasons, processing is based on Art. 6 (1) (f) GDPR and our legitimate interest in handling and responding to your inquiry.",
        legal_contact_form_text4: "We use your email address only to process your inquiry. Your data is then deleted in accordance with statutory retention periods unless you have consented to further processing and use.",
        legal_revocation: "Collection and processing when using the withdrawal button",
        legal_revocation_text1: "If you have concluded a contract through our online presence, we provide a withdrawal function that allows you to submit your withdrawal declaration directly.",
        legal_revocation_text2: "When using the withdrawal function, we collect your personal data, including your name, email address, contract identification details and the date and time of submission, only to the extent you provide it.",
        legal_revocation_text3: "The data is processed to provide the legally required option to withdraw from your contract and to process your withdrawal properly.",
        legal_revocation_text4: "If the contact concerns an existing contract between you and us, processing is based on Art. 6 (1) (b) GDPR.",
        legal_revocation_text5: "Otherwise, processing is based on Art. 6 (1) (c) GDPR to fulfil our legal obligation to provide a withdrawal function on our online presence.",
        legal_revocation_text6: "We use your email address only to process your withdrawal declaration. Your data is then deleted in accordance with statutory retention periods unless you have consented to further processing and use.",
        legal_revocation_text7: "Processing your personal data serves to fulfil the statutory requirements for a legally compliant withdrawal function and is based on Art. 6 (1) (c) GDPR.",
        legal_revocation_text8: "This processing is also based on Art. 6 (1) (f) GDPR and our legitimate interest in providing a user-friendly withdrawal option.",
        legal_termination: "Collection and processing when using the cancellation button",
        legal_termination_text1: "If you cancel a subscription concluded through our online presence using the legally required cancellation button, we process the data you enter in the confirmation form.",
        legal_termination_text2: "When using the cancellation button, we collect your personal data, including your name, email address, telephone number if provided, contract identification details and the date and time of submission, only to the extent you provide it.",
        legal_termination_text3: "The data is processed to provide the legally required option to cancel your continuing obligation contract and to process your cancellation properly.",
        legal_termination_text4: "If the contact concerns an existing contract between you and us, processing is based on Art. 6 (1) (b) GDPR.",
        legal_termination_text5: "Otherwise, processing is based on Art. 6 (1) (c) GDPR because we are legally required to provide a cancellation button on our online presence.",
        legal_termination_text6: "We use your email address only to process your cancellation declaration. Your data is then deleted in accordance with statutory retention periods unless you have consented to further processing and use.",
        legal_images: "Collection and processing when images are sent by email",
        legal_images_text1: "You may send us images by email in connection with ordering a personalised product.",
        legal_images_text2: "When you send us images, we may collect personal data, such as images of identifiable persons, only to the extent you provide it.",
        legal_images_text3: "The data is processed to create personalised products. The image sent is used as a template for the product, such as a printed T-shirt.",
        legal_images_text4: "Processing is based on Art. 6 (1) (b) GDPR and is necessary to fulfil a contract with you.",
        legal_images_text5: "Your data is not shared with third parties.",
        legal_images_text6: "We use the image you send only to provide the agreed service. Your data is then deleted in accordance with statutory retention periods unless you have consented to further processing and use.",
        legal_whatsapp_text1: "If you contact us via WhatsApp, we use WhatsApp Business provided by WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.",
        legal_whatsapp_text2: "If you are located outside the European Economic Area, this service is provided by WhatsApp Inc., 1601 Willow Road, Menlo Park, CA 94025, USA.",
        legal_whatsapp_text3: "The data is processed to handle and respond to your inquiry.",
        legal_whatsapp_text4: "For this purpose, we process your mobile phone number stored with WhatsApp, your name if provided and any other data you provide.",
        legal_whatsapp_continuation: "WhatsApp Business (continued)",
        legal_whatsapp_continuation_text1: "We use a mobile device whose address book contains only data of users who have contacted us via WhatsApp. We therefore do not disclose personal data to WhatsApp without your prior consent to WhatsApp.",
        legal_whatsapp_continuation_text2: "WhatsApp transfers your data to servers operated by Meta Platforms Inc. in the USA. The EU Commission has recognised the Trans-Atlantic Data Privacy Framework as an adequacy decision for the USA.",
        legal_whatsapp_continuation_text3: "Meta Platforms Inc. is certified under the Trans-Atlantic Data Privacy Framework and has therefore committed to comply with European data protection principles.",
        legal_whatsapp_continuation_text4: "If the contact concerns pre-contractual measures or an existing contract between you and us, processing is based on Art. 6 (1) (b) GDPR.",
        legal_whatsapp_continuation_text5: "If you contact us for other reasons, processing is based on Art. 6 (1) (f) GDPR and our legitimate interest in providing a fast and simple means of contact and responding to your inquiry.",
        legal_whatsapp_continuation_text6: "We use your personal data only to process your inquiry. Your data is then deleted in accordance with statutory retention periods unless you have consented to further processing and use.",
        legal_whatsapp_continuation_text7: "Further information about WhatsApp's terms of use and privacy policy is available at:",
            legal_orders: "Orders",
            legal_orders_processing: "Collection, processing and disclosure of personal data when placing orders",
            legal_orders_processing_text1: "When you place an order, we collect and process your personal data only to the extent necessary to fulfil and process your order and handle your inquiries.",
            legal_orders_processing_text2: "Providing the data is necessary to conclude the contract. If the data is not provided, no contract can be concluded.",
            legal_orders_processing_text3: "Processing is based on Art. 6 (1) (b) GDPR and is necessary to fulfil a contract with you.",
            legal_orders_processing_text4: "Your data may be disclosed to shipping companies, dropshipping or fulfilment providers, payment service providers, order processing providers and IT service providers.",
            legal_orders_processing_text5: "In all cases, we strictly observe the statutory requirements. The scope of data transferred is limited to the minimum necessary.",
            legal_payment_service_providers: "Payment service providers",
            legal_payment_service_providers_paypal: "Use of PayPal Checkout",
            legal_payment_service_providers_paypal_text1: "We use the PayPal Checkout payment service provided by PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg, on our website.",
            legal_payment_service_providers_paypal_text2: "The data is processed to offer you payment through this payment service.",
            legal_payment_service_providers_paypal_text3: "When you select and use payment via PayPal, credit card via PayPal, direct debit via PayPal or Pay Later via PayPal, the data required for payment processing is transmitted to PayPal to fulfil the contract using your selected payment method.",
            legal_payment_service_providers_paypal_text4: "This processing is based on Art. 6 (1) (b) GDPR.",
            legal_payment_service_providers_paypal_text5: "Cookies may be stored to recognise your browser. This processing is based on Art. 6 (1) (f) GDPR and our legitimate interest in offering customers a choice of payment methods.",
            legal_payment_service_providers_betroffenenrechte: "Data subject rights and storage period",
            legal_payment_service_providers_dauer: "Storage period",
            legal_payment_service_providers_dauer_text1: "After the contract has been fully completed, the data is initially stored for the duration of the statutory warranty period. It is then stored in accordance with statutory retention periods, particularly those under tax and commercial law, and deleted after those periods have expired unless you have consented to further processing and use.",
            legal_payment_service_providers_rights: "Rights of the data subject",
            legal_payment_service_providers_rights_text: "Where the statutory requirements are met, you have the following rights under Articles 15 to 20 GDPR:",
            legal_payment_service_providers_rights_auskunft: "Right of access",
            legal_payment_service_providers_rights_berichtigung: "Right to rectification",
            legal_payment_service_providers_rights_loeschung: "Right to erasure",
            legal_payment_service_providers_rights_einschraenkung: "Right to restriction of processing",
            legal_payment_service_providers_rights_datenuebertragbarkeit: "Right to data portability",
            legal_payment_service_providers_rights_text2: "Under Art. 21 (1) GDPR, you also have the right to object to processing based on Art. 6 (1) (f) GDPR and to processing for direct marketing purposes.",
            legal_complaints: "Right to lodge a complaint with a supervisory authority",
            legal_complaints_text: "Under Art. 77 GDPR, you have the right to lodge a complaint with a supervisory authority if you believe that the processing of your personal data is unlawful.",
            legal_complaints_text2: "You may lodge a complaint with the supervisory authority responsible for us:",
            legal_withdrawal: "Right to object",
            legal_withdrawal_text1: "If the personal data processing described here is based on our legitimate interest under Art. 6 (1) (f) GDPR, you have the right to object to this processing at any time with effect for the future for reasons arising from your particular situation.",
            legal_withdrawal_text2: "After you object, processing of the affected data will cease unless we can demonstrate compelling legitimate grounds for processing that override your interests, rights and freedoms, or the processing serves to establish, exercise or defend legal claims.",
            next: "Next",
    }
};

const langSwitch = document.getElementById('lang-switch');

function applyLanguage(language) {
    const newLang = translations[language] ? language : 'de';
    document.documentElement.lang = newLang;
    localStorage.setItem('lang', newLang);

    if (langSwitch) langSwitch.textContent = newLang === 'de' ? 'EN' : 'DE';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[newLang][key]) {
            element.innerHTML = translations[newLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[newLang][key]) element.setAttribute('alt', translations[newLang][key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[newLang][key]) element.setAttribute('title', translations[newLang][key]);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria-label');
        if (translations[newLang][key]) element.setAttribute('aria-label', translations[newLang][key]);
    });
}

applyLanguage(currentLang);

if (langSwitch) langSwitch.addEventListener('click', () => {
    const newLang = document.documentElement.lang === 'de' ? 'en' : 'de';
    applyLanguage(newLang);
});

// ============================================================
// KOMPLETTER PREISRECHNER
// PREISBERECHNUNG + STEPS + CONDITIONALS + CAL.COM + FORMSPREE
// ============================================================


// ============================================================
// PREISRECHNER
// ============================================================

const calculator =
    document.querySelector('.step[data-step="1"]')?.closest('form');


if (calculator) {


    // ========================================================
    // EINMALIGE PREISE
    // ========================================================

    const oneTimePrices = {

        website: {
            erstellen: 490,
            optimieren: 340,
            nein: 0
        },

        umfang: {
            '1': 0,
            '2-3': 200,
            '4-6': 450,
            '7-9': 750,
            '10': 1100
        },

        texte: {
            bleiben: 0,
            erstellen: 100,
            optimieren: 100
        },

        design: {
            nein: 0,
            ja: 250
        },

        funktionen: {
            kontaktformular: 50,
            terminbuchung: 100,
            preisrechner: 200,
            anfrageformular: 75,
            mehrsprachigkeit: 150,
            blog: 100,
            newsletter: 100
        },

        seo: {
            ja: 200,
            nein: 0
        },

        seo_optimieren: {
            ja: 100,
            nein: 0
        },

        cro: {
            optimieren: 400,
            neu: 500,
            nein: 0
        },

        retargeting: {
            neu: 350,
            optimieren: 300,
            nein: 0
        },

        ads_umfang: {
            ads: 300,
            eine: 400,
            mehrere: 600,
            struktur: 800
        },

        ads_ort: {
            google: 100,
            meta: 100,
            keine_Ahnung: 100
        },

        ads_angebote: {
            '1': 0,
            '2-3': 100,
            '4+': 250
        },

        landingpage: {
            nein: 0,
            eine: 200,
            mehrere: 400,
            keine_Ahnung: 0
        }

    };


    // ========================================================
    // MONATLICHE PREISE
    // ========================================================

    const monthlyPrices = {

        website: 49,

        seo: 149,

        cro: 199,

        budget: {
            unter_500: 100,
            '500': 150,
            '1.000': 250,
            '2.500': 350,
            '5.000+': 500
        }

    };


    // ========================================================
    // AUSGEWÄHLTE WERTE AUSLESEN
    // ========================================================

    const getValues = (name) => {

        return [
            ...calculator.querySelectorAll(
                `[name="${name}"]:checked`
            )
        ].map(input => input.value);

    };


    // ========================================================
    // PREISWERTE ADDIEREN
    // ========================================================

    const addSelected = (prices, name) => {

        return getValues(name).reduce(
            (total, value) => {

                return total + (prices[value] || 0);

            },
            0
        );

    };


    // ========================================================
    // PREIS BERECHNEN
    // ========================================================

    function calculatePrice() {

        const hasIndividualPrice =
            getValues('funktionen').includes('weitere') ||
            getValues('ads_ort').includes('weitere');


        let oneTime = 0;


        let monthly = 0;


        // ----------------------------------------------------
        // INDIVIDUELLES ANGEBOT
        // ----------------------------------------------------

        oneTime +=
            addSelected(
                oneTimePrices.website,
                'website'
            );


        oneTime +=
            addSelected(
                oneTimePrices.umfang,
                'umfang'
            );


        oneTime +=
            addSelected(
                oneTimePrices.texte,
                'texte'
            );


        oneTime +=
            addSelected(
                oneTimePrices.design,
                'design'
            );


        oneTime +=
            addSelected(
                oneTimePrices.funktionen,
                'funktionen'
            );


        oneTime +=
            addSelected(
                oneTimePrices.seo,
                'seo'
            );


        oneTime +=
            addSelected(
                oneTimePrices.seo_optimieren,
                'seo_optimieren'
            );


        oneTime +=
            addSelected(
                oneTimePrices.cro,
                'cro'
            );


        oneTime +=
            addSelected(
                oneTimePrices.retargeting,
                'retargeting'
            );


        oneTime +=
            addSelected(
                oneTimePrices.ads_umfang,
                'ads_umfang'
            );


        oneTime +=
            addSelected(
                oneTimePrices.ads_ort,
                'ads_ort'
            );


        oneTime +=
            addSelected(
                oneTimePrices.ads_angebote,
                'ads_angebote'
            );


        oneTime +=
            addSelected(
                oneTimePrices.landingpage,
                'landingpage'
            );


            // ------------------------------------------------
            // MONATLICHE BETREUUNG
            // ------------------------------------------------

        const website =
            getValues('website')[0];


        if (
            website &&
            website !== 'nein'
        ) {

            monthly +=
                monthlyPrices.website;

        }


        if (
            getValues('seo')[0] === 'ja'
        ) {

            monthly +=
                monthlyPrices.seo;

        }


        if (
            ['optimieren', 'neu']
                .includes(
                    getValues('cro')[0]
                )
        ) {

            monthly +=
                monthlyPrices.cro;

        }


        if (
            ['ja', 'jein']
                .includes(
                    getValues('ads')[0]
                )
        ) {

            monthly +=
                monthlyPrices.budget[
                    getValues('budget')[0]
                ] || 0;

        }


        // ----------------------------------------------------
        // PREIS AUSGEBEN
        // ----------------------------------------------------

        const preisElement =
            document.getElementById('preis');


        const betreuungElement =
            document.getElementById('betreuung');


        if (preisElement) {

            preisElement.textContent =
                hasIndividualPrice
                    ? 'Individuelles Angebot'
                    : `${oneTime.toLocaleString('de-DE')} €`;

        }


        if (betreuungElement) {

            betreuungElement.textContent =
                `${monthly.toLocaleString('de-DE')} € / Monat`;

        }

        // ----------------------------------------------------
        // PREISE FÜR FORMSPREE SPEICHERN
        // ----------------------------------------------------

        updateFormspreePrices();

    }


    // ========================================================
    // CONDITIONAL FIELDS
    // ========================================================

    function updateConditionalFields() {

        calculator
            .querySelectorAll('.conditional')
            .forEach(element => {


                const condition =
                    element.dataset.showIf;


                if (!condition) {
                    return;
                }


                /*
                 * Unterstützt:
                 *
                 * data-show-if="website:erstellen|optimieren"
                 *
                 * = Website erstellen ODER optimieren
                 */


                const [name, allowedValues] =
                    condition.split(':');


                if (!name || !allowedValues) {
                    return;
                }


                const selectedValues =
                    getValues(name);


                const isVisible =
                    allowedValues
                        .split('|')
                        .some(
                            value =>
                                selectedValues.includes(value)
                        );


                element.hidden =
                    !isVisible;


                // ------------------------------------------------
                // Wenn ein Feld unsichtbar wird:
                // Eingaben darin NICHT automatisch löschen.
                //
                // Dadurch bleiben die Daten erhalten, wenn der
                // Benutzer später zurückgeht.
                // ------------------------------------------------

            });

    }


    // ========================================================
    // SICHTBARE STEPS
    // ========================================================

    function visibleSteps() {

        return [
            ...calculator.querySelectorAll('.step')
        ].filter(
            step => !step.hidden
        );

    }


    // ========================================================
    // AKTUELLEN STEP ANZEIGEN
    // ========================================================

    function showStep(step) {

        if (!step) {
            return;
        }


        calculator
            .querySelectorAll('.step')
            .forEach(item => {

                item.classList.remove('active');

            });


        step.classList.add('active');


        updateConditionalFields();

        calculatePrice();

        if (step.dataset.step === '8') {
            waitForCalCom();
        }


        step.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }


    // ========================================================
    // ÄNDERUNGEN IM FORMULAR
    // ========================================================

    calculator.addEventListener(
        'change',
        () => {

            updateConditionalFields();

            calculatePrice();

        }
    );


    // ========================================================
    // NEXT / BACK BUTTONS
    // ========================================================

    calculator.addEventListener(
        'click',
        event => {


            const button =
                event.target.closest(
                    '.next, .back'
                );


            if (!button) {
                return;
            }


            const currentStep =
                button.closest('.step');


            if (!currentStep) {
                return;
            }


            const steps =
                visibleSteps();


            const currentIndex =
                steps.indexOf(
                    currentStep
                );


            const nextIndex =
                button.classList.contains('next')
                    ? currentIndex + 1
                    : currentIndex - 1;


            if (
                nextIndex >= 0 &&
                nextIndex < steps.length
            ) {

                showStep(
                    steps[nextIndex]
                );

            }

        }
    );


    // ========================================================
    // INITIALISIERUNG
    // ========================================================

    updateConditionalFields();

    calculatePrice();

}


// ============================================================
// FORMSPREE
// ============================================================

const form =
    document.querySelector('.contact-form');


const formStatus =
    document.getElementById('form-status');


// ============================================================
// PREISE IN FORMSPREE-FELDER SCHREIBEN
// ============================================================

function updateFormspreePrices() {


    const preisElement =
        document.getElementById('preis');


    const betreuungElement =
        document.getElementById('betreuung');


    if (
        !preisElement ||
        !betreuungElement
    ) {

        return;

    }


    const preis =
        preisElement.textContent;


    const betreuung =
        betreuungElement.textContent;


    // --------------------------------------------------------
    // Nachricht
    // --------------------------------------------------------

    const preisField =
        document.getElementById(
            'formspree_preis'
        );


    const betreuungField =
        document.getElementById(
            'formspree_betreuung'
        );


    if (preisField) {

        preisField.value =
            preis;

    }


    if (betreuungField) {

        betreuungField.value =
            betreuung;

    }


    // --------------------------------------------------------
    // Erstgespräch
    // --------------------------------------------------------

    const preisTerminField =
        document.getElementById(
            'formspree_preis_termin'
        );


    const betreuungTerminField =
        document.getElementById(
            'formspree_betreuung_termin'
        );


    if (preisTerminField) {

        preisTerminField.value =
            preis;

    }


    if (betreuungTerminField) {

        betreuungTerminField.value =
            betreuung;

    }

}


// ============================================================
// CAL.COM INITIALISIEREN
// ============================================================

let calComInitialized = false;

function initCalCom() {


    if (!window.Cal || calComInitialized) {

        if (!window.Cal) {
            console.warn('Cal.com wurde noch nicht geladen.');
        }

        return;

    }

    const bookingElement = document.getElementById('cal-booking');

    if (!bookingElement) {
        return;
    }


    // --------------------------------------------------------
    // CAL.COM INITIALISIEREN
    // --------------------------------------------------------

    try {
        window.Cal(
            'init',
            {
                origin: 'https://cal.com'
            }
        );

        window.Cal(
            'inline',
            {
                elementOrSelector: '#cal-booking',
                calLink:
                    'isabell-bader-b1v9os',
                config: {
                    layout:
                        'month_view',
                    useSlotsViewOnSmallScreen:
                        true
                }
            }
        );
        calComInitialized = true;
    } catch (error) {
        console.error('Cal.com konnte nicht initialisiert werden:', error);
        return;
    }


    // ========================================================
    // ERFOLGREICHE CAL.COM BUCHUNG
    // ========================================================

    window.Cal(
        'on',
        {
            action: 'bookingSuccessful',

            callback: function(event) {


                console.log(
                    'Cal.com Buchung erfolgreich:',
                    event
                );


                // ------------------------------------------------
                // EVENT-DATEN
                // ------------------------------------------------

                const detail =
                    event?.detail ||
                    event ||
                    {};


                const bookingData =
                    detail.data ||
                    detail.booking ||
                    detail;


                // ------------------------------------------------
                // STARTZEIT
                // ------------------------------------------------

                const start =
                    bookingData.startTime ||
                    bookingData.start ||
                    bookingData.booking?.startTime ||
                    '';


                // ------------------------------------------------
                // ENDZEIT
                // ------------------------------------------------

                const end =
                    bookingData.endTime ||
                    bookingData.end ||
                    bookingData.booking?.endTime ||
                    '';


                // ------------------------------------------------
                // BUCHUNGS-ID
                // ------------------------------------------------

                const bookingId =
                    bookingData.uid ||
                    bookingData.id ||
                    bookingData.booking?.uid ||
                    bookingData.booking?.id ||
                    '';


                // ------------------------------------------------
                // DATUM + UHRZEIT
                // ------------------------------------------------

                if (start) {


                    const startDate =
                        new Date(start);


                    if (
                        !isNaN(
                            startDate.getTime()
                        )
                    ) {


                        const datum =
                            startDate.toLocaleDateString(
                                'de-DE'
                            );


                        const uhrzeit =
                            startDate.toLocaleTimeString(
                                'de-DE',
                                {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                }
                            );


                        const datumField =
                            document.getElementById(
                                'termin_datum'
                            );


                        const uhrzeitField =
                            document.getElementById(
                                'termin_uhrzeit'
                            );


                        if (datumField) {

                            datumField.value =
                                datum;

                        }


                        if (uhrzeitField) {

                            uhrzeitField.value =
                                uhrzeit;

                        }

                    }

                }


                // ------------------------------------------------
                // ENDZEIT
                // ------------------------------------------------

                if (end) {


                    const endDate =
                        new Date(end);


                    if (
                        !isNaN(
                            endDate.getTime()
                        )
                    ) {


                        const endzeit =
                            endDate.toLocaleTimeString(
                                'de-DE',
                                {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                }
                            );


                        const endField =
                            document.getElementById(
                                'termin_endzeit'
                            );


                        if (endField) {

                            endField.value =
                                endzeit;

                        }

                    }

                }


                // ------------------------------------------------
                // BUCHUNGS-ID
                // ------------------------------------------------

                const bookingIdField =
                    document.getElementById(
                        'termin_buchungs_id'
                    );


                if (bookingIdField) {

                    bookingIdField.value =
                        bookingId;

                }


                // ------------------------------------------------
                // PREISE AKTUALISIEREN
                // ------------------------------------------------

                updateFormspreePrices();


                // ------------------------------------------------
                // STATUS
                // ------------------------------------------------

                const bookingContainer =
                    document.getElementById(
                        'cal-booking'
                    );


                if (bookingContainer) {

                    bookingContainer.classList.add(
                        'booking-success'
                    );

                }


                console.log(
                    'Termin:',
                    document.getElementById(
                        'termin_datum'
                    )?.value
                );


                console.log(
                    'Uhrzeit:',
                    document.getElementById(
                        'termin_uhrzeit'
                    )?.value
                );

            }

        }
    );

}


// ============================================================
// AUF CAL.COM WARTEN
// ============================================================

function waitForCalCom() {

    const bookingElement = document.getElementById('cal-booking');

    if (
        !bookingElement ||
        bookingElement.closest('.step[hidden]')
    ) {
        return;
    }

    if (window.Cal) {

        initCalCom();

        return;

    }


    setTimeout(
        waitForCalCom,
        300
    );

}


waitForCalCom();


// ============================================================
// FORMSPREE ABSENDEN
// ============================================================

async function handleSubmit(event) {


    event.preventDefault();


    if (!form) {
        return;
    }


    // --------------------------------------------------------
    // PREISE AKTUALISIEREN
    // --------------------------------------------------------

    updateFormspreePrices();


    // --------------------------------------------------------
    // FORM STATUS
    // --------------------------------------------------------

    if (formStatus) {

        formStatus.textContent =
            'Wird gesendet...';

    }


    // --------------------------------------------------------
    // ABSENDEBUTTON
    // --------------------------------------------------------

    const submitButton =
        event.submitter;


    if (submitButton) {

        submitButton.disabled =
            true;

    }


    // --------------------------------------------------------
    // FORMULARDATEN
    // --------------------------------------------------------

    const data =
        new FormData(form);


    // --------------------------------------------------------
    // DEBUG
    // --------------------------------------------------------

    console.log(
        'Formspree Daten:'
    );


    for (
        const [key, value]
        of data.entries()
    ) {

        console.log(
            key,
            ':',
            value
        );

    }


    try {


        // ----------------------------------------------------
        // FORMSPREE
        // ----------------------------------------------------

        const response =
            await fetch(
                form.action,
                {
                    method: form.method || 'POST',

                    body: data,

                    headers: {
                        'Accept':
                            'application/json'
                    }
                }
            );


        // ----------------------------------------------------
        // ERFOLG
        // ----------------------------------------------------

        if (response.ok) {


            if (formStatus) {


                if (
                    typeof translations !== 'undefined' &&
                    typeof lang !== 'undefined' &&
                    translations[lang]?.form_success
                ) {

                    formStatus.textContent =
                        translations[lang].form_success;

                } else {

                    formStatus.textContent =
                        'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.';

                }

            }


            // ------------------------------------------------
            // FORMULAR ZURÜCKSETZEN
            // ------------------------------------------------

            form.reset();


            // ------------------------------------------------
            // TERMINFELDER LEEREN
            // ------------------------------------------------

            const terminFields = [

                'termin_datum',

                'termin_uhrzeit',

                'termin_endzeit',

                'termin_buchungs_id'

            ];


            terminFields.forEach(
                id => {

                    const field =
                        document.getElementById(id);


                    if (field) {

                        field.value =
                            '';

                    }

                }
            );


            // ------------------------------------------------
            // PREISE NEU SETZEN
            // ------------------------------------------------

            if (
                typeof calculator !== 'undefined' &&
                calculator
            ) {

                if (
                    typeof updateConditionalFields ===
                    'function'
                ) {
                    updateConditionalFields();
                }

            }


        } else {


            // ------------------------------------------------
            // FORMSPREE FEHLER
            // ------------------------------------------------

            let errorMessage =
                'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';


            try {

                const errorData =
                    await response.json();


                if (
                    errorData?.errors?.length
                ) {

                    errorMessage =
                        errorData.errors
                            .map(
                                error =>
                                    error.message
                            )
                            .join(', ');

                }

            } catch (error) {

                console.warn(
                    'Fehlerantwort konnte nicht gelesen werden.',
                    error
                );

            }


            if (formStatus) {

                formStatus.textContent =
                    errorMessage;

            }


            console.error(
                'Formspree Fehler:',
                response.status
            );

        }


    } catch (error) {


        // ----------------------------------------------------
        // NETZWERKFEHLER
        // ----------------------------------------------------

        console.error(
            'Formspree Fehler:',
            error
        );


        if (formStatus) {

            formStatus.textContent =
                'Beim Senden ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.';

        }


    } finally {


        // ----------------------------------------------------
        // BUTTON WIEDER AKTIVIEREN
        // ----------------------------------------------------

        if (submitButton) {

            submitButton.disabled =
                false;

        }

    }

}


// ============================================================
// FORM SUBMIT EVENT
// ============================================================

if (form) {

    form.addEventListener(
        'submit',
        handleSubmit
    );

}

// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.folder-tab');
    const panes = document.querySelectorAll('.folder-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Aktive Klassen von allen Tabs und Inhalten entfernen
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            panes.forEach(p => p.classList.remove('active'));

            // Aktiven Tab und zugehörigen Inhalt aktivieren
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            const targetId = tab.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

// Portfolio-Karten öffnen die zugehörige Projektseite.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.portfolio-item[data-project]').forEach(item => {
        const openProject = event => {
            if (event.target.closest('a')) return;
            window.location.href = item.dataset.project;
        };

        item.addEventListener('click', openProject);
        item.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openProject(event);
            }
        });
    });
});

// ============================================================
// ERSTGESPRÄCH PER BUTTON AUF DERSELBEN SEITE EINBLENDEN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const showBtn = document.getElementById('btn-show-erstgespraech');
    const stepErstgespraech = document.getElementById('step-erstgespraech');

    if (showBtn && stepErstgespraech) {
        showBtn.addEventListener('click', () => {
            // Entfernt das 'hidden'-Attribut, das vom Rechner-Skript gesetzt wurde
            stepErstgespraech.hidden = false;

            // Fügt die 'active'-Klasse hinzu, falls CSS diese nutzt
            stepErstgespraech.classList.add('active');

            // Cal.com Widget initialisieren, falls noch nicht geschehen
            if (typeof waitForCalCom === 'function') {
                waitForCalCom();
            }

            // Sanft zum Erstgespräch-Bereich scrollen
            stepErstgespraech.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

/* =========================================================
   SERVICE CARDS
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const cards = [...document.querySelectorAll('.service-card')];
    const detailRows = [...document.querySelectorAll('.service-details-row')];

    const closeAllServices = () => {
        cards.forEach(card => {
            card.classList.remove('is-active');
            card.querySelector('.service-toggle')?.setAttribute('aria-expanded', 'false');
        });

        detailRows.forEach(row => row.classList.remove('is-open'));
        document.querySelectorAll('.service-details').forEach(detail => {
            detail.classList.remove('is-visible');
        });
    };

    cards.forEach(card => {
        card.addEventListener('click', event => {
            if (event.target.closest('.service-toggle')) {
                event.preventDefault();
            }

            const serviceId = card.dataset.service;
            const detail = document.querySelector(`.service-details[data-details="${serviceId}"]`);
            const row = detail?.closest('.service-details-row');
            const isOpen = card.classList.contains('is-active');

            if (!detail || !row) return;

            closeAllServices();

            if (!isOpen) {
                card.classList.add('is-active');
                row.classList.add('is-open');
                detail.classList.add('is-visible');
                card.querySelector('.service-toggle')?.setAttribute('aria-expanded', 'true');
            }
        });
    });
});