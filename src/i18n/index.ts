import { keysets } from './keysets';
import { langs } from './langs';

export type I18NKeys = { 'en': string, 'ru': string };
export type I18nKeysets = Record<string, I18NKeys>;
export type I18NLanguage = keyof I18NKeys;

const i18nKeysets = keysets;
let i18nLang: I18NLanguage;

export function getI18nLangs() {
    return [
        ...langs,
    ];
}

export function i18n(id: string) {
    const key = i18nKeysets[id];
    if (!key) {
        console.error(`i18n: not found translation key "${id}".`);
        return id;
    }

    const value = key[i18nLang];

    if (typeof value === 'undefined') {
        console.error(`i18n: not found translation key "${id}", lang "${i18nLang}".`);
        return id;
    }

    return value;
}

export function i18nWithKeyset(keyset: I18NKeys): string {
    return keyset[i18nLang];
}

export function setI18nLang(lang?: I18NLanguage) {
    if (lang) {
        i18nLang = lang;
    }
}

export function getI18nLang() {
    return i18nLang;
}
