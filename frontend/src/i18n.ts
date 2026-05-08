import { createI18n } from "vue-i18n";
import uz from "./locales/uz";
import ru from "./locales/ru";
import en from "./locales/en";

const messages = {
  uz,
  ru,
  en
};

export const i18n = createI18n({
  locale: "uz",
  fallbackLocale: "ru",
  messages,
  legacy: false // Ensure Composition API compatibility
});
