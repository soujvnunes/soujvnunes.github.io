import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

const detector = new LanguageDetector();
detector.addDetector({
  name: "browserLocation",
  lookup() {
    // Only detect if it's the first visit (no saved preference)
    if (localStorage.getItem("i18nextLng")) return undefined;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const brazilTimezones = [
      "America/Sao_Paulo",
      "America/Manaus",
      "America/Fortaleza",
      "America/Recife",
      "America/Araguaina",
      "America/Maceio",
      "America/Bahia",
      "America/Belem",
      "America/Santarem",
      "America/Porto_Velho",
      "America/Boa_Vista",
      "America/Cuiaba",
      "America/Campo_Grande",
      "America/Rio_Branco",
      "America/Noronha",
    ];

    if (brazilTimezones.includes(timezone)) {
      return "pt";
    }

    return undefined;
  },
});

void i18n
  .use(detector)
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      async (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    supportedLngs: ["en", "pt"],
    fallbackLng: {
      default: ["en"],
    },
    detection: {
      order: [
        "querystring",
        "localStorage",
        "cookie",
        "browserLocation",
        "navigator",
        "htmlTag",
      ],
      lookupQuerystring: "hl",
      lookupLocalStorage: "i18nextLng",
      lookupCookie: "i18next",
      caches: ["localStorage", "cookie"],
    },
    debug: import.meta.env.DEV,
  });
