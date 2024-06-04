import { html } from 'htm/preact';
import { useEffect } from 'preact/hooks';
import { WarningMessage } from '../WarningMessage';
import { block } from '../../utils/bem';
import { TreeList } from '../TreeList';
import { i18n } from '../../i18n/i18n';
import { useForceUpdate } from '../../hooks/useForceUpdate';

const b = block('gamepad-list');

export function GamepadList() {
    if (!navigator.getGamepads) {
        return html`<${WarningMessage}>${i18n('Gamepad API is not supported.')}<//>`;
    }

    useEffect(() => {
        const handleGamepadconnected = () => {
            useForceUpdate();
        };

        window.addEventListener('gamepadconnected', handleGamepadconnected);
        window.addEventListener('gamepaddisconnected', handleGamepadconnected);

        return () => {
            window.removeEventListener('gamepadconnected', handleGamepadconnected);
            window.removeEventListener('gamepaddisconnected', handleGamepadconnected);
        };
    }, []);

    // Filter for MacOS with USB C
    const gamepads = navigator.getGamepads().filter(item => Boolean(item));

    return gamepads.length ? html`
        <div class="${b()}">
            ${
                gamepads.map((item, i) => {
                    return html`<${TreeList} name="${i}" items="${item}"><//>`;
                })
            }
        </div>
    ` : html`<${WarningMessage}>${i18n('Gamepad is not detected.')}<//>`;
}