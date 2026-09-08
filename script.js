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
        title: "Webdesign | Isabell Bader",
        nav_home: "Home",
        nav_about: "Über mich",
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
        footer_copyright: "© 2024 Isabell Bader. Alle Rechte vorbehalten.",

        hero_subtitle: "INDIVIDUELL. MODERN. ZUVERLÄSSIG.",
        hero_h1: "Ihre Website. Ihr digitaler Auftritt.",
        hero_p: "Ihre Website ist mehr als eine digitale Visitenkarte. Sie zeigt, wofür Ihr Unternehmen steht, vermittelt Vertrauen und führt Interessenten gezielt zu den Informationen, die für ihre Entscheidung wichtig sind.",
        btn_services: "Leistungen ansehen",
        home_h1: "Mehr als Webdesign",
        home_p: "Eine gute Website beginnt nicht mit der Gestaltung, sondern mit der Frage, was sie für Ihr Unternehmen leisten soll.",
        home_p2: "Deshalb verbinde ich Webentwicklung, klare Inhalte und Nutzerführung mit Bereichen wie SEO und Conversion Optimierung. Je nach Bedarf können auch Terminbuchungen, digitale Preisanfragen oder weitere Funktionen integriert werden.",
        home_p3: "Das Ergebnis ist eine Website, die nicht isoliert betrachtet wird, sondern Teil einer durchdachten digitalen Lösung ist.",
        btn_contact: "Projekt anfragen →",
        preview_services: "Leistungen",
        preview_services_desc: "Von der professionellen Website über SEO und Conversion Optimierung bis hin zu gezielter Werbung.",
        preview_services_desc_2: "Welche Maßnahmen sinnvoll sind, hängt von Ihrem Unternehmen, Ihrer Ausgangssituation und Ihren Zielen ab.",
        btn_view_services: "Leistungen ansehen",
        preview_portfolio: "Portfolio",
        preview_portfolio_desc: "Ausgewählte Projekte aus den Bereichen Webdesign, Webentwicklung und digitale Kundengewinnung.",
        btn_view_portfolio: "Arbeiten zeigen",

        about_hero_title: "Vom Reitplatz in die digitale Welt",
        about_lead: "Ich komme nicht aus der klassischen Agenturwelt. Und genau das empfinde ich als Vorteil.",
        about_lead_1: "Durch meine eigene Selbstständigkeit kenne ich die Perspektive eines Unternehmens: Eine Website soll nicht einfach existieren, sondern einen Zweck erfüllen. Sie soll das eigene Angebot verständlich machen, Vertrauen schaffen und im besten Fall Arbeit abnehmen oder neue Anfragen ermöglichen.",
        about_lead_2: "Gleichzeitig interessiert mich die technische Seite genauso sehr.",
        about_lead_3: "Ich arbeite mit HTML, CSS und JavaScript und beschäftige mich kontinuierlich mit neuen Technologien und Möglichkeiten der Webentwicklung.",
        about_lead_4: "Dabei möchte ich nicht möglichst viele Technologien anbieten, nur um eine lange Liste auf die Website schreiben zu können. Entscheidend ist für mich, welche Lösung für das jeweilige Projekt sinnvoll ist.",
        about_expertise_title: "Pädagogik & Soziologie trifft Webentwicklung",
        about_expertise_description: "Mein Studium der Pädagogik und Soziologie begleitet mich dabei bis heute.",
        about_expertise_description_2: "Es hat meinen Blick dafür geschärft, wie Menschen Informationen aufnehmen, wie Kommunikation funktioniert und warum manche Dinge intuitiv verstanden werden, während andere unnötig kompliziert wirken.",
        about_expertise_description_3: "Genau diese Perspektive nehme ich auch in meine Arbeit mit. Denn eine technisch gut umgesetzte Website bringt wenig, wenn Besucher nicht verstehen, was sie dort finden oder wie sie zum nächsten Schritt kommen.",
        about_quote: "Webentwicklung mit einem Blick für Menschen, Unternehmen und die Details, die Vertrauen zwischen Unternehmen und ihren Kunden schaffen.",
        about_text_hero: "Was mir bei meiner Arbeit wichtig ist",
        about_text_1: "Ich möchte keine Standardlösung über ein Unternehmen legen.",
        about_text_2: "Jedes Unternehmen hat seine eigene Geschichte, seine eigenen Kunden und seine eigenen Anforderungen. Deshalb beginnt ein Projekt für mich immer damit, zuzuhören und zu verstehen.",
        about_text_3: "Und manchmal ist die richtige Lösung eine komplett neue Website. Manchmal reicht es aber auch, eine bestehende Website gezielt zu verbessern.",
        about_text_4: "Genau das möchte ich gemeinsam mit meinen Kunden herausfinden.",

        portfolio_titel: "Ausgewählte Projekte",
        portfolio_lead: "Jede Website wird individuell auf das Unternehmen, seine Zielgruppe und die gewünschten Ziele abgestimmt.",
        portfolio_project_1_title: "Website für Reitunterricht",
        portfolio_project_1_description: "Persönlich, klar und auf die Zielgruppe ausgerichtet",
        portfolio_project_1_challenge: "Die Herausforderung:",
        portfolio_project_1_challenge_text: "Eine Website, die Persönlichkeit vermittelt, Vertrauen schafft und Interessenten schnell zu den wichtigsten Informationen führt.",
        portfolio_project_1_solution: "Lösung:",
        portfolio_project_1_solution_text: "Ein harmonisches Design mit klarer Struktur, intuitiver Navigation und einfachen Kontaktmöglichkeiten. Die integrierte Terminorganisation erleichtert Interessenten den nächsten Schritt.",
        portfolio_project_1_fokus: "Fokus:",
        portfolio_project_1_fokus_text: "Webdesign · Nutzerführung · Terminbuchung · SEO",
        portfolio_project_1_cta: "Website ansehen",
        portfolio_project_2_title: "Website für eine KFZ-Werkstatt",
        portfolio_project_2_description: "Konzeptprojekt für einen modernen KFZ-Betrieb",
        portfolio_project_2_challenge: "Die Herausforderung:",
        portfolio_project_2_challenge_text: "Eine Website, die Kompetenz vermittelt und Kunden schnell zu Leistungen, Kontaktmöglichkeiten und wichtigen Informationen führt.",
        portfolio_project_2_solution: "Die Lösung:",
        portfolio_project_2_solution_text: "Eine moderne, übersichtliche und mobil optimierte Website mit klarer Nutzerführung und gezielten Kontaktmöglichkeiten.",
        portfolio_project_2_fokus: "Fokus:",
        portfolio_project_2_fokus_text: "Webdesign · Mobile Optimierung · Conversion · SEO",
        portfolio_project_2_cta: "Website ansehen",
        portfolio_project_3_title: "Webportal für Reitunterricht",
        portfolio_project_3_description: "Modernes Plattformkonzept für Anbieter und Interessenten",
        portfolio_project_3_challenge: "Die Herausforderung:",
        portfolio_project_3_challenge_text: "Angebote übersichtlich präsentieren und Interessenten dabei unterstützen, schnell passende Informationen und Angebote zu finden.",
        portfolio_project_3_solution: "Lösung:",
        portfolio_project_3_solution_text: "Ein modernes Konzept mit intuitiver Navigation, strukturierter Darstellung und benutzerfreundlicher Suche.",
        portfolio_project_3_fokus: "Fokus:",
        portfolio_project_3_fokus_text: "Webkonzeption · UX/UI · Nutzerführung · SEO",
        portfolio_project_3_cta: "Webportal ansehen",

        contact_hero_title: "Lass uns über dein Projekt sprechen.",
        contact_hero_subtitle: "Ich freue mich darauf, dich und dein Unternehmen kennenzulernen. Lass uns gemeinsam herausfinden, wie ich dich unterstützen kann.",
        contact_info_p: "Du hast Fragen oder möchtest erst einmal E-Mail-Kontakt? Schreib mir einfach eine Nachricht.",
        contact_info_email: "E-Mail:",
        contact_info_telefon: "Telefonnummer:",
        contact_info_hours: "Ich antworte werktags in der Regel innerhalb von 24 Stunden.",
        contact_form_h2: "Termin oder Anfrage",
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
        
        leistungen: "Leistungen",
        leistungen_titel: "Von der Website zur automatisierten Kundengewinnung",
        leistungen_titel2: "Ihre Website arbeitet für Sie.",
        leistungen_beschreibung: "Eine Website sollte nicht nur professionell aussehen. Sie sollte Ihr Unternehmen verständlich präsentieren, Vertrauen schaffen und Interessenten gezielt zur nächsten Handlung führen.",
        leistungen_strong: "Ihre Website kann wie ein eigenständiger Mitarbeiter Ihres Unternehmens arbeiten.",
        leistungen_beschreibung2: "Sie ist häufig der erste Kontaktpunkt für potenzielle Kunden. Sie beantwortet Fragen, vermittelt einen ersten Eindruck und begleitet Interessenten bis zur Anfrage oder Terminbuchung. Je besser diese Aufgaben aufeinander abgestimmt sind, desto mehr kann Ihre Website zu einem festen Bestandteil Ihrer Kundengewinnung werden.",
        leistungen_beschreibung3: "Genau dort setze ich an.",
        leistungen_beschreibung4: "Ich verbinde Webentwicklung, Suchmaschinenoptimierung, Conversion Optimierung und gezielte Werbung zu einem aufeinander abgestimmten Prozess.",
        leistungen_strong2: "Das Ergebnis: Eine Website, die nicht nur präsent ist, sondern einen konkreten Beitrag zu Ihrer Kundengewinnung leistet.",
        erstgespräch_button: "Kostenloses Erstgespräch vereinbaren",
        website_employee_titel: "Mehr als eine digitale Visitenkarte",
        website_employee_titel2: "Ihre Website übernimmt Aufgaben.",
        website_employee_beschreibung: "Wer sich für ein Unternehmen interessiert, informiert sich heute meist zuerst online. Dabei entstehen Fragen, Erwartungen und oft auch die erste Entscheidung, ob ein Kontakt überhaupt zustande kommt.",
        website_employee_strong: "Eine gute Website übernimmt diesen Prozess nicht nur. Sie gestaltet ihn.",
        website_employee_div: "Sie erklärt Ihr Angebot.",
        website_employee_div2: "Sie beantwortet wiederkehrende Fragen.",
        website_employee_div3: "Sie schafft erste Orientierung.",
        website_employee_div4: "Sie führt Interessenten zur Kontaktaufnahme.",
        website_employee_beschreibung2: "Durch Funktionen wie automatische Terminbuchung oder digitale Preisabfragen können Interessenten viele Informationen selbstständig erhalten und erste Schritte ohne zusätzlichen Aufwand für Ihr Unternehmen erledigen.",
        website_employee_beschreibung3: "So wird die Website zu einem festen Bestandteil Ihres Vertriebs und entlastet Sie dort, wo digitale Prozesse sinnvoll eingesetzt werden können.",
        paket_titel: "Leistungspakete",
        paket_titel2: "Die passende Lösung für Ihre digitale Kundengewinnung",
        paket_beschreibung: "Nicht jedes Unternehmen benötigt dieselben Maßnahmen. Deshalb bauen die drei Pakete aufeinander auf:",
        paket_strong: "Von der professionellen Website über Conversion Optimierung und Retargeting bis zur gezielten Kundengewinnung durch Werbung.",
        paket_beschreibung2: "Welche Lösung für Sie sinnvoll ist, klären wir in einem kostenlosen und individuellen Erstgespräch.",
        table: "Leistungen",
        präsenz: "Präsenz",
        conversion: "Conversion",
        kundengewinnung: "Kundengewinnung",
        table2: "Website & Grundlage",
        table3: "Konzeption und Strukturierung",
        table4: "Individuelles Webdesign",
        table5: "Technische Umsetzung",
        table6: "Mobil optimierte Darstellung",
        table7: "Überarbeitung / Erstellung relevanter Inhalte",
        table8: "Suchmaschinenoptimierung",
        table9: "Grundlegende SEO",
        table10: "Seitenstruktur & interne Verlinkung",
        table11: "Conversion Optimierung",
        table12: "Conversion Optimierung",
        table13: "Optimierung der Nutzerführung",
        table14: "Calls to Action",
        table15: "Optimierung von Kontakt- und Anfrageprozessen",
        table16: "Retargeting",
        table17: "Retargeting System",
        table18: "Vorbereitung von Retargeting Kampagnen",
        table19: "Werbung & Kampagnen",
        table20: "Strategische Planung geeigneter Werbekanäle",
        table21: "Google Ads / Meta Ads",
        table22: "Erstellung erster Kampagnen",
        table23: "Abstimmung von Anzeigen und Zielseiten",
        table24: "Auswertung relevanter Kennzahlen",
        table25: "Automatisierung",
        table26: "Automatische Terminbuchung",
        table27: "Optional",
        table28: "Digitale Preisabfrage",
        table29: "Laufende Optimierung",
        table30: "nach Vereinbarung",
        table31: "Präsenz anfragen",
        table32: "Conversion anfragen",
        table33: "Kundengewinnung aufbauen",
        table34: "Ihre professionelle Grundlage im Netz.",
        table35: "Aus Website Besuchern werden Interessenten.",
        table36: "Reichweite gezielt aufbauen und automatisierte Prozesse nutzen.",
        system_titel: "Das System dahinter",
        system_titel2: "Eine Website allein reicht nicht.",
        system_beschreibung: "Eine Website kann noch so gut aufgebaut sein. Wenn die richtigen Menschen sie nicht finden, bleibt ihr Potenzial ungenutzt. Und wenn Besucher nicht verstehen, was sie als Nächstes tun können, entsteht trotz Reichweite keine Anfrage.",
        system_beschreibung2: "Deshalb greifen die einzelnen Maßnahmen ineinander.",
        system_span: "Analyse",
        system_span2: "Website",
        system_span3: "SEO",
        system_span4: "Conversion",
        system_span5: "Ads",
        system_span6: "Retargeting",
        system_span7: "Optimierung",
        system_beschreibung3: "Jeder Bereich erfüllt eine konkrete Aufgabe. Gemeinsam entsteht daraus ein digitaler Prozess, der Interessenten erreicht, informiert und zur nächsten Handlung führt.",
        system_titel3: "Was braucht Ihr Unternehmen?",
        system_beschreibung4: "Im kostenlosen Erstgespräch betrachten wir Ihre aktuelle Website, Ihre Ausgangssituation und Ihre Ziele. Anschließend empfehle ich Ihnen die Maßnahmen, die für Ihr Unternehmen tatsächlich sinnvoll sind.",
        system_strong: "Nicht mehr Leistungen. Sondern die richtigen.",

    form_title: "Erstellen Sie Ihr individuelles Angebot",
    form: "Für welches Paket möchten Sie sich entscheiden?",
    form2: "Präsenz",
    form3: "Conversion",
    form4: "Kundengewinnung",
    form5: "Ich möchte ein individuelles Angebot",
    next: "Weiter",
    back: "Zurück",
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
    title: "Webdesign | Isabell Bader",
    nav_home: "Home",
    nav_about: "About Me",
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
    footer_copyright: "© 2024 Isabell Bader. All rights reserved.",
    
    hero_subtitle: "INDIVIDUAL. MODERN. RELIABLE.",
    hero_h1: "Your Website. Your Digital Presence.",
    hero_p: "Your website is more than a digital business card. It shows what your company stands for, builds trust and guides prospective customers to the information they need to make a decision.",
    btn_services: "View Services",
    home_h1: "More Than Web Design",
    home_p: "A good website does not begin with the design. It begins with the question of what the website should achieve for your business.",
    home_p2: "That is why I combine web development, clear content and user guidance with areas such as SEO and conversion optimization. Depending on your needs, appointment booking, digital price inquiries and other features can also be integrated.",
    home_p3: "The result is a website that is not viewed in isolation, but as part of a well considered digital solution.",
    btn_contact: "Request a Project →",
    preview_services: "Services",
    preview_services_desc: "From professional websites and SEO to conversion optimization and targeted advertising.",
    preview_services_desc_2: "The right approach depends on your business, your current situation and your goals.",
    btn_view_services: "View Services",
    preview_portfolio: "Portfolio",
    preview_portfolio_desc: "Selected projects in web design, web development and digital customer acquisition.",
    btn_view_portfolio: "View Projects",
    
    about_hero_title: "From the Riding Arena to the Digital World",
    about_lead: "I did not come from the traditional agency world. And I see that as an advantage.",
    about_lead_1: "Through my own experience as a self-employed professional, I understand the perspective of a business: A website should not simply exist. It should serve a purpose. It should communicate the company's offering clearly, build trust and, ideally, reduce workload or generate new enquiries.",
    about_lead_2: "At the same time, I am equally interested in the technical side.",
    about_lead_3: "I work with HTML, CSS and JavaScript and continuously explore new technologies and possibilities in web development.",
    about_lead_4: "I do not believe in offering as many technologies as possible simply to create a long list on a website. What matters to me is finding the solution that makes sense for the individual project.",
    about_expertise_title: "Education & Sociology Meet Web Development",
    about_expertise_description: "My background in education and sociology continues to influence the way I work today.",
    about_expertise_description_2: "It has sharpened my understanding of how people process information, how communication works and why some things are understood intuitively while others feel unnecessarily complicated.",
    about_expertise_description_3: "I bring this perspective into my work as well. Because even a technically well-built website has little value if visitors do not understand what they will find there or what they should do next.",
    about_quote: "Web development with an eye for people, businesses and the details that create trust between companies and their customers.",
    about_text_hero: "What matters to me in my work",
    about_text_1: "I do not want to impose a standard solution on a business.",
    about_text_2: "Every business has its own story, its own customers and its own requirements. That is why every project starts with listening and understanding.",
    about_text_3: "Sometimes the right solution is a completely new website. Sometimes, however, a carefully targeted improvement of an existing website is all that is needed.",
    about_text_4: "That is exactly what I want to find out together with my clients.",
    
    portfolio_titel: "Selected Projects",
    portfolio_lead: "Every website is individually tailored to the company, its target audience and its specific goals.",

    portfolio_project_1_title: "Website for Riding Lessons",
    portfolio_project_1_description: "Personal, clear and tailored to the target audience",
    portfolio_project_1_challenge: "The Challenge:",
    portfolio_project_1_challenge_text: "A website that conveys personality, builds trust and helps prospective customers quickly find the most important information.",
    portfolio_project_1_solution: "The Solution:",
    portfolio_project_1_solution_text: "A harmonious design with a clear structure, intuitive navigation and simple contact options. The integrated appointment booking makes it easy for prospective customers to take the next step.",
    portfolio_project_1_fokus: "Focus:",
    portfolio_project_1_fokus_text: "Web Design · User Experience · Appointment Booking · SEO",
    portfolio_project_1_cta: "View Website",

    portfolio_project_2_title: "Website for an Automotive Repair Shop",
    portfolio_project_2_description: "Concept project for a modern automotive repair business",
    portfolio_project_2_challenge: "The Challenge:",
    portfolio_project_2_challenge_text: "A website that conveys expertise and helps customers quickly find services, contact options and important information.",
    portfolio_project_2_solution: "The Solution:",
    portfolio_project_2_solution_text: "A modern, clear and mobile-optimized website with intuitive navigation and targeted contact options.",
    portfolio_project_2_fokus: "Focus:",
    portfolio_project_2_fokus_text: "Web Design · Mobile Optimization · Conversion · SEO",
    portfolio_project_2_cta: "View Website",

    portfolio_project_3_title: "Web Portal for Riding Lessons",
    portfolio_project_3_description: "Modern platform concept for providers and prospective customers",
    portfolio_project_3_challenge: "The Challenge:",
    portfolio_project_3_challenge_text: "Presenting offers clearly and helping prospective customers quickly find relevant information and suitable offers.",
    portfolio_project_3_solution: "The Solution:",
    portfolio_project_3_solution_text: "A modern concept with intuitive navigation, structured content and a user-friendly search experience.",
    portfolio_project_3_fokus: "Focus:",
    portfolio_project_3_fokus_text: "Web Concept · UX/UI · User Experience · SEO",
    portfolio_project_3_cta: "View Web Portal",

    contact_hero_title: "Let's talk about your project.",
    contact_hero_subtitle: "I look forward to getting to know you and your business. Let's find out together how I can support you.",
    contact_info_p: "Do you have questions or would you prefer to get in touch via email? Just send me a message.",
    contact_info_email: "Email:",
    contact_info_telefon: "Phone number:",
    contact_info_hours: "I respond to inquiries on weekdays within 24 hours.",
    contact_form_h2: "Appointment or inquiry",
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

    leistungen: "Services",
    leistungen_titel: "From Website to Automated Customer Acquisition",
    leistungen_titel2: "Your website works for you.",
    leistungen_beschreibung: "A website should do more than look professional. It should present your business clearly, build trust and guide potential customers towards the next step.",
    leistungen_strong: "Your website can work like an independent employee of your business.",
    leistungen_beschreibung2: "It is often the first point of contact for potential customers. It answers questions, creates a first impression and guides prospects towards an enquiry or appointment. The better these tasks work together, the more your website can become an integral part of your customer acquisition process.",
    leistungen_beschreibung3: "This is where I come in.",
    leistungen_beschreibung4: "I combine web development, search engine optimization, conversion optimization and targeted advertising into a coordinated process.",
    leistungen_strong2: "The result: A website that does more than simply exist online and makes a tangible contribution to your customer acquisition.",
    erstgespräch_button: "Book a free initial consultation",
    website_employee_titel: "More than a digital business card",
    website_employee_titel2: "Your website takes on tasks.",
    website_employee_beschreibung: "When people are interested in a business, they usually start by researching online. Questions arise, expectations are formed and often the first decision is made about whether to get in touch at all.",
    website_employee_strong: "A good website does not simply support this process. It shapes it.",
    website_employee_div: "It explains your offer.",
    website_employee_div2: "It answers recurring questions.",
    website_employee_div3: "It provides initial guidance.",
    website_employee_div4: "It makes it easy for prospects to get in touch.",
    website_employee_beschreibung2: "With features such as automated appointment booking or digital price enquiries, potential customers can access relevant information themselves and take the first steps without creating additional work for your business.",
    website_employee_beschreibung3: "This makes your website an integral part of your sales process and allows digital processes to take over wherever they make sense.",
    paket_titel: "Service Packages",
    paket_titel2: "The right solution for your digital customer acquisition",
    paket_beschreibung: "Not every business needs the same measures. That is why the three packages build on each other:",
    paket_strong: "From a professional website and conversion optimization to retargeting and targeted customer acquisition through advertising.",
    paket_beschreibung2: "We will determine which solution makes sense for your business in a free and individual initial consultation.",
    table: "Services",
    präsenz: "Presence",
    conversion: "Conversion",
    kundengewinnung: "Customer Acquisition",
    table2: "Website & Foundation",
    table3: "Planning and Structure",
    table4: "Custom Web Design",
    table5: "Technical Implementation",
    table6: "Mobile Optimization",
    table7: "Revision / Creation of Relevant Content",
    table8: "Search Engine Optimization",
    table9: "Basic SEO",
    table10: "Page Structure & Internal Linking",
    table11: "Conversion Optimization",
    table12: "Conversion Optimization",
    table13: "User Journey Optimization",
    table14: "Calls to Action",
    table15: "Optimization of Contact and Enquiry Processes",
    table16: "Retargeting",
    table17: "Retargeting System",
    table18: "Retargeting Campaign Preparation",
    table19: "Advertising & Campaigns",
    table20: "Strategic Planning of Suitable Advertising Channels",
    table21: "Google Ads / Meta Ads",
    table22: "Creation of Initial Campaigns",
    table23: "Alignment of Ads and Landing Pages",
    table24: "Analysis of Relevant Metrics",
    table25: "Automation",
    table26: "Automated Appointment Booking",
    table27: "Optional",
    table28: "Digital Price Enquiry",
    table29: "Ongoing Optimization",
    table30: "By agreement",
    table31: "Enquire about Presence",
    table32: "Enquire about Conversion",
    table33: "Build Customer Acquisition",
    table34: "Your professional foundation online.",
    table35: "Turn website visitors into potential customers.",
    table36: "Build targeted reach and use automated processes.",
    system_titel: "The System Behind It",
    system_titel2: "A website alone is not enough.",
    system_beschreibung: "A website can be well designed and structured. But if the right people cannot find it, its potential remains unused. And if visitors do not know what to do next, reach alone will not generate enquiries.",
    system_beschreibung2: "That is why the individual measures work together.",
    system_span: "Analysis",
    system_span2: "Website",
    system_span3: "SEO",
    system_span4: "Conversion",
    system_span5: "Ads",
    system_span6: "Retargeting",
    system_span7: "Optimization",
    system_beschreibung3: "Each area has a specific purpose. Together, they create a digital process that reaches potential customers, provides the right information and guides them towards the next step.",
    system_titel3: "What does your business need?",
    system_beschreibung4: "In a free initial consultation, we look at your current website, your starting point and your goals. I then recommend the measures that actually make sense for your business.",
    system_strong: "Not more services. The right ones.",

    form_title: "Create Your Individual Offer",
    form: "Which package would you like to choose?",
    form2: "Presence",
    form3: "Conversion",
    form4: "Customer Acquisition",
    form5: "I would like an individual offer",
    next: "Next",
    back: "Back",
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
    document.querySelector('.step[data-step="1"]')?.closest('main');


if (calculator && document.getElementById('preis')) {


    // ========================================================
    // EINMALIGE PREISE
    // ========================================================

    const oneTimePrices = {

        paket: {
            präsenz: 490,
            conversion: 890,
            kundengewinnung: 1490,
            individuell: 0
        },

        website: {
            erstellen: 0,
            optimieren: -150,
            nein: -300
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
            erstellen: 0,
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
            mehrsprachigkeit: 200,
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
            optimieren: 200,
            neu: 300,
            nein: 0
        },

        retargeting: {
            neu: 250,
            optimieren: 200,
            nein: 0
        },

        ads_umfang: {
            ads: 100,
            eine: 200,
            mehrere: 400,
            struktur: 600
        },

        ads_ort: {
            google: 100,
            meta: 100,
            keine_Ahnung: 0
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

        const packageValue =
            getValues('paket')[0];


        const hasIndividualPrice =
            packageValue === 'individuell' ||
            getValues('funktionen').includes('weitere') ||
            getValues('ads_ort').includes('weitere');


        let oneTime =
            addSelected(
                oneTimePrices.paket,
                'paket'
            );


        let monthly = 0;


        // ----------------------------------------------------
        // INDIVIDUELLES ANGEBOT
        // ----------------------------------------------------

        if (packageValue !== 'individuell') {


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

                        hasIndividualPrice
                            ? 'Individuelles Angebot'
                            : `${monthly.toLocaleString('de-DE')} € / Monat`;
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
                 * data-show-if="paket:präsenz|conversion"
                 *
                 * = Paket Präsenz ODER Conversion
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

        if (step.dataset.step === '9') {
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