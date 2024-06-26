import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { GamepadList } from '../../components/GamepadList';
import { Page } from '../Page';

export function GamepadPage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Gamepad')}
            <//>

            <${GamepadList}><//>
        <//>`;
}
