import { html } from 'htm/preact';
import { MainMenu, MainMenuItem } from '../../components/MainMenu';
import pages from '../pages';
import { getI18nLang, i18n, i18nWithKeyset } from '../../i18n/i18n';

export function getIdFromLocation() {
    const id = window.location.pathname
        // Fix for github pages
        .replace(/^\/caniwatchvideo/, '')
        .split(/[?./]/)[1];

    return id ? id : 'index';
}

export function Menu() {
    const id = getIdFromLocation();
    const items: MainMenuItem[] = pages.map(item => {
        const selected = item.id === id;
        if (selected) {
            document.title = i18nWithKeyset(item.header || item.menuTitle) + ' / ' + i18n('Check device online')
        }

        return {
            ...item,
            url: item.url + '?lang=' + getI18nLang(),
            title: i18nWithKeyset(item.menuTitle),
            selected,
        };
    });

    return html`<${MainMenu} items="${items}"><//>`;
}
