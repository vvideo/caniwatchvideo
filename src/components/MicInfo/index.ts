import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { List } from '../List';
import { getChecked } from '../../utils/getChecked';
import { ValueInProgress } from '../ValueInProgress';

interface MicInfoProps {
    groupId: string;
    deviceId: string;
    label: string;
    autoGainControl: boolean;
    channelCount: number;
    echoCancellation: boolean;
    latency: number;
    noiseSuppression: boolean;
    sampleRate: number;
    sampleSize: number;
}

export function MicInfo(props: MicInfoProps) {
    const audioParams =  [
        [i18n('Auto gain control'), getChecked(props.autoGainControl)],
        [i18n('Channel count'), props.channelCount],
        [i18n('Echo cancellation'), getChecked(props.echoCancellation)],
        [i18n('Latency'), props.latency],
        [i18n('Noise suppression'), getChecked(props.noiseSuppression)],
        [i18n('Sample rate'), props.sampleRate ? `${props.sampleRate} ${i18n('Hz')}` : undefined],
        [i18n('Sample size'), props.sampleSize],
    ];

    return html`<${List} title="${props.label}" items="${audioParams}"><//>`;
}

export function MicInfoSsr() {
    const audioParams =  [
        [i18n('Auto gain control'), html`<${ValueInProgress} //>`],
        [i18n('Channel count'), html`<${ValueInProgress} //>`],
        [i18n('Echo cancellation'), html`<${ValueInProgress} //>`],
        [i18n('Latency'), html`<${ValueInProgress} //>`],
        [i18n('Noise suppression'), html`<${ValueInProgress} //>`],
        [i18n('Sample rate'), html`<${ValueInProgress} //>`],
        [i18n('Sample size'), html`<${ValueInProgress} //>`],
    ];

    return html`<${List} title="${i18n('Microphone name')}" items="${audioParams}"><//>`;
}
