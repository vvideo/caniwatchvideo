import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { BatteryStatus } from '../../components/BatteryStatus';
import { Page } from '../Page';

export function BatteryPage() {
    return html`
        <${Page}}>
            <${Header}>
                ${i18n('Battery')}
            <//>

            <${BatteryStatus}><//>
        <//>`;
}
