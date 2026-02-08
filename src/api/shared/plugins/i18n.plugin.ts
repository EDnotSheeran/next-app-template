import { i18next } from "elysia-i18next";
import { en } from "@/api/shared/i18n/locales/en";
import { pt } from "@/api/shared/i18n/locales/pt";

export async function i18nPlugin() {
  return i18next({
    initOptions: {
      lng: "en",
      resources: {
        en,
        pt,
      },
    },
  });
}
