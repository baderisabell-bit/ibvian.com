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

        portfolio_titel: "Ausgewählte Projekte",

    portfolio_lead:
        "Jede Website wird individuell auf das Unternehmen, seine Zielgruppe und die gewünschten Ziele abgestimmt.",

    portfolio_project_1_alt: "Website Reitunterricht",
    portfolio_project_1_title:
        "Individuelle Website für ein Reitangebot mit klarer Nutzerführung und persönlicher Gestaltung.",

    portfolio_implementation: "Umsetzung",

    portfolio_project_1_implementation_1:
        "Webdesign & responsive Umsetzung",
    portfolio_project_1_implementation_2:
        "Strukturierung der Inhalte und Leistungen",
    portfolio_project_1_implementation_3:
        "Nutzerführung und klare Kontaktwege",
    portfolio_project_1_implementation_4:
        "Optimierung für Desktop, Tablet und Smartphone",
    portfolio_project_1_implementation_5:
        "SEO-Basics und technische Onpage-Optimierung",

    portfolio_technology: "Technik",
    portfolio_view_project: "→ Projekt ansehen",

    portfolio_project_2_alt: "Website KFZ-Werkstatt",
    portfolio_project_2_title:
        "Moderne Unternehmenswebsite zur übersichtlichen Darstellung der Werkstattleistungen und zur einfachen Kontaktaufnahme.",

    portfolio_project_2_implementation_1:
        "Individuelles Webdesign",
    portfolio_project_2_implementation_2:
        "Responsive Webentwicklung",
    portfolio_project_2_implementation_3:
        "Strukturierte Darstellung der Leistungen",
    portfolio_project_2_implementation_4:
        "Kontakt- und Anfrageelemente",
    portfolio_project_2_implementation_5:
        "Suchmaschinenfreundliche Seitenstruktur",
    portfolio_project_2_implementation_6:
        "Optimierung von Ladezeit und Darstellung",

    portfolio_project_3_alt: "Webportal Equily",
    portfolio_project_3_title:
        "Individuelles Webportal mit erweiterten Funktionen über die klassische Unternehmenswebsite hinaus.",

    portfolio_project_3_implementation_1:
        "Konzeption und Gestaltung des Webportals",
    portfolio_project_3_implementation_2:
        "Responsive Benutzeroberfläche",
    portfolio_project_3_implementation_3:
        "Strukturierung umfangreicher Inhalte",
    portfolio_project_3_implementation_4:
        "Interaktive Funktionen",
    portfolio_project_3_implementation_5:
        "Benutzerfreundliche Navigation",
    portfolio_project_3_implementation_6:
        "Individuelle technische Umsetzung",

    portfolio_coming_soon: "Coming Soon",
    portfolio_more_projects: "Weitere Projekte in Kürze",

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
    send: "Nachricht senden"

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
  
    portfolio_titel: "Selected Projects",

    portfolio_lead:
        "Every website is individually tailored to the business, its target audience and its specific goals.",

    portfolio_project_1_alt: "Horse Riding Website",
    portfolio_project_1_title:
        "Custom website for a horse riding service with clear user guidance and a personal design.",

    portfolio_implementation: "Implementation",

    portfolio_project_1_implementation_1:
        "Web design & responsive development",
    portfolio_project_1_implementation_2:
        "Content and service structure",
    portfolio_project_1_implementation_3:
        "User guidance and clear contact options",
    portfolio_project_1_implementation_4:
        "Optimization for desktop, tablet and smartphone",
    portfolio_project_1_implementation_5:
        "SEO basics and technical on-page optimization",

    portfolio_technology: "Technology",
    portfolio_view_project: "→ View project",

    portfolio_project_2_alt: "Automotive Workshop Website",
    portfolio_project_2_title:
        "Modern business website for clearly presenting workshop services and making it easy for customers to get in touch.",

    portfolio_project_2_implementation_1:
        "Custom web design",
    portfolio_project_2_implementation_2:
        "Responsive web development",
    portfolio_project_2_implementation_3:
        "Structured presentation of services",
    portfolio_project_2_implementation_4:
        "Contact and inquiry elements",
    portfolio_project_2_implementation_5:
        "Search-engine-friendly page structure",
    portfolio_project_2_implementation_6:
        "Loading speed and display optimization",

    portfolio_project_3_alt: "Equily Web Portal",
    portfolio_project_3_title:
        "Custom web portal with advanced functionality beyond a traditional business website.",

    portfolio_project_3_implementation_1:
        "Web portal concept and design",
    portfolio_project_3_implementation_2:
        "Responsive user interface",
    portfolio_project_3_implementation_3:
        "Structuring of extensive content",
    portfolio_project_3_implementation_4:
        "Interactive features",
    portfolio_project_3_implementation_5:
        "User-friendly navigation",
    portfolio_project_3_implementation_6:
        "Custom technical implementation",

    portfolio_coming_soon: "Coming Soon",
    portfolio_more_projects: "More projects coming soon",

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
    request_appointment: "Request Initial Consultation"
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
    const cards = document.querySelectorAll('.service-card');

    // Funktion zum Schließen aller geöffneten Details & Karten
    const closeAllServices = () => {
        document.querySelectorAll('.service-card').forEach(c => {
            c.classList.remove('is-active');
            const btn = c.querySelector('.service-toggle');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        document.querySelectorAll('.service-details-row').forEach(row => row.classList.remove('is-open'));
        document.querySelectorAll('.service-details').forEach(detail => detail.classList.remove('is-active'));
    };

    // Klick-Event direkt auf die gesamte Kachel
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation(); // Verhindert, dass das globale Document-Click-Event direkt auslöst
            
            const serviceId = card.getAttribute('data-service');
            const isActive = card.classList.contains('is-active');
            const toggleBtn = card.querySelector('.service-toggle');

            // Zuerst alle Einklappen
            closeAllServices();

            // Wenn die Kachel vorher nicht aktiv war -> Öffnen
            if (!isActive) {
                card.classList.add('is-active');
                if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');

                const targetDetail = document.querySelector(`.service-details[data-details="${serviceId}"]`);
                if (targetDetail) {
                    targetDetail.classList.add('is-active');
                    const parentRow = targetDetail.closest('.service-details-row');
                    if (parentRow) {
                        parentRow.classList.add('is-open');
                    }
                }
            }
        });
    });

    // Klick außerhalb schließt den offenen Bereich
    document.addEventListener('click', (e) => {
        const isClickInsideCard = e.target.closest('.service-card');
        const isClickInsideDetails = e.target.closest('.service-details-row');

        if (!isClickInsideCard && !isClickInsideDetails) {
            closeAllServices();
        }
    });
});