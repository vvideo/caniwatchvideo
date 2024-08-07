import 'show-js-error';
import { hit } from 'lyam';
import { I18NLanguage, setI18nLang } from '../../i18n';
import { withInstallApp } from '../../utils/withInstallApp';
import { addHoverOnBody } from '../../utils/css/addHoverOnBody';
import { isSsr } from '../../utils/isSsr';
import { setPageId } from './pageId';
import { defaultLang, langs } from '../../i18n/langs';

import './index.css';

export function getLang() {
    let lang = window.__appData__.lang || getLangFromNavigator();

    const result = langs.filter(item => item.value === lang);
    if (!result.length) {
        lang = defaultLang;
    }

    return lang;
}

function getLangFromNavigator() {
    return ((navigator.language || '').split('-')[0] || defaultLang);
}


if (!isSsr) {
    hit('95998062'); // 97747983

    const lang = getLang();
    setI18nLang(lang as I18NLanguage);

    setPageId(window.__appData__.pageId);

    withInstallApp();

    addHoverOnBody();

    // ally
    document.documentElement?.setAttribute('lang', lang);
}
