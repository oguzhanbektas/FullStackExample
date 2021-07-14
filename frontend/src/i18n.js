import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        "Signup": "Sign up",
        "Password mismatch": "Password mismatch",
        "Username": "Username",
        "Displayname": "Displayname",
        "Password": "Password",
        "Password Repeat": "Password Repeat",
        "Login": "Login",
        "Logout": "Logout"
      },
    },
    tr: {
      translations: {
        "Signup": "Kayıt Ol",
        "Password mismatch": "Şifreler aynı olmalı",
        "Username": "Kullanıcı Adı",
        "Displayname": "Takma Ad",
        "Password": "Şifre",
        "Password Repeat": "Şifreyi Tekrarla",
        "Login": "Sisteme Gir",
        "Logout": "Çıkış Yap"
      },
    },
  },
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: ["translations"],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

export default i18n;
