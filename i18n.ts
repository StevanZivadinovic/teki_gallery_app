import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from './locales/en.json';
import sr from './locales/sr.json';
// import ru from './locales/ru.json';

const resources = {
  en: { translation: en },
  sr: { translation: sr },
//   ru: { translation: ru },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
