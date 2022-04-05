import { createI18n } from "vue-i18n";
import ko from "@/locales/ko.json";
import en from "@/locales/en.json";

const messages = {
  ko: ko,
  en: en,
};

export default createI18n({
  locale: "en", // set locale
  fallbackLocale: "ko", // set fallback locale
  messages,
});
