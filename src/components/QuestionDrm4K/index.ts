import { useEffect, useState } from 'preact/hooks';
import { html } from 'htm/preact';
import {
    AV1_CONTENT_TYPE,
    HEV_MAIN_CONTENT_TYPE,
    VP9_CONTENT_TYPE,
    isAV1Supported,
    isFairPlaySupported,
    isHevcMainSupported,
    isPlayReadySL3000Supported,
    isVp9Supported,
    isWidevineL1Supported,
} from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';
import { i18n } from '../../i18n/i18n';
import { isScreensLargerThan2K, screenInfo } from '../../lib/ScreenInfo';
import { isDesktopSafari } from '../../utils/isDesktopSafari';

export function QuestionDrm4K() {
    const [isWidevineL1Vp9, setIsWidevineL1Vp9] = useState(false);
    const [isWidevineL1Hevc, setIsWidevineL1Hevc] = useState(false);
    const [isWidevineL1Av1, setIsWidevineL1Av1] = useState(false);

    const [isPlayReadySL3000Vp9, setIsPlayReadySL3000Vp9] = useState(false);
    const [isPlayReadySL3000Hevc, setIsPlayReadySL3000Hevc] = useState(false);
    const [isPlayReadySL3000Av1, setIsPlayReadySL3000Av1] = useState(false);

    const [isFairplayVp9, setIsFairplayVp9] = useState(false);
    const [isFairplayHevc, setIsFairplayHevc] = useState(false);
    const [isFairplayAv1, setIsFairplayAv1] = useState(false);

    const [screens, setScreens] = useState(screenInfo.get().screens);

    useEffect(() => {
        const handler = () => {
            setScreens(screenInfo.get().screens);
        };

        screenInfo.addListener(handler);

        return () => {
            screenInfo.removeListener(handler);
        };
    }, [screens]);

    useEffect(() => {
        isWidevineL1Supported(VP9_CONTENT_TYPE).then(result => {
            setIsWidevineL1Vp9(result);
        });

        isWidevineL1Supported(HEV_MAIN_CONTENT_TYPE).then(result => {
            setIsWidevineL1Hevc(result);
        });

        isWidevineL1Supported(AV1_CONTENT_TYPE).then(result => {
            setIsWidevineL1Av1(result);
        });

        isPlayReadySL3000Supported(VP9_CONTENT_TYPE).then(result => {
            setIsPlayReadySL3000Vp9(result);
        });

        isPlayReadySL3000Supported(HEV_MAIN_CONTENT_TYPE).then(result => {
            setIsPlayReadySL3000Hevc(result);
        });

        isPlayReadySL3000Supported(AV1_CONTENT_TYPE).then(result => {
            setIsPlayReadySL3000Av1(result);
        });

        isFairPlaySupported().then(result => {
            setIsFairplayVp9(result && isVp9Supported().any);
            setIsFairplayHevc(result && isHevcMainSupported().any);
            setIsFairplayAv1(result && isAV1Supported().any);
        });
    }, [
        isWidevineL1Vp9, isWidevineL1Hevc, isWidevineL1Av1,
        isPlayReadySL3000Vp9, isPlayReadySL3000Hevc, isPlayReadySL3000Av1,
        isFairplayVp9, isFairplayHevc, isFairplayAv1,
    ]);

    const anyCodecWithDrm = Boolean(
        isWidevineL1Vp9 || isWidevineL1Hevc || isWidevineL1Av1 ||
        isPlayReadySL3000Vp9 || isPlayReadySL3000Hevc || isPlayReadySL3000Av1 ||
        isFairplayVp9 || isFairplayHevc || isFairplayAv1
    );

    const largeThan2K = isScreensLargerThan2K(screens);
    const answer = anyCodecWithDrm && largeThan2K;

    const head = html`${i18n('Can I watch 4K video on online services?')} <${Result} value="${answer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>${i18n('Is the screen larger than 2K?')}\u00a0<${Result} value="${largeThan2K}"><//></li>
                <li>${i18n('Online services protect content using')}${'\u00a0'}<a target="_blank" href="${i18n('link:wiki:drm')}">DRM</a>.<br/>
                    ${i18n('Has support one of the video codecs and DRM with high security level?')} <${Result} value=${anyCodecWithDrm}><//>
                    <ul>
                        <li>
                            Google Widevine L1 + <${Codec}
                                name="VP9"
                                color="green"
                                disabled="${!isWidevineL1Vp9}">
                            <//>\u00a0<${Result} value="${isWidevineL1Vp9}"><//>
                        </li>
                        <li>
                            Google Widevine L1 + <${Codec}
                                name="H.265"
                                color="orange"
                                disabled="${!isWidevineL1Hevc}">
                            <//>\u00a0<${Result} value="${isWidevineL1Hevc}"><//>
                        </li>
                        <li>
                            Google Widevine L1 + <${Codec}
                                name="AV1"
                                color="yellow"
                                disabled="${!isWidevineL1Av1}">
                            <//>\u00a0<${Result} value="${isWidevineL1Av1}"><//>
                        </li>

                        <li>
                            Microsoft PlayReady SL3000 + <${Codec}
                                name="VP9"
                                color="green"
                                disabled="${!isPlayReadySL3000Vp9}">
                            <//>\u00a0<${Result} value="${isPlayReadySL3000Vp9}"><//>
                        </li>
                        <li>
                            Microsoft PlayReady SL3000 + <${Codec}
                                name="H.265"
                                color="orange"
                                disabled="${!isPlayReadySL3000Hevc}">
                            <//>\u00a0<${Result} value="${isPlayReadySL3000Hevc}"><//>
                        </li>
                        <li>
                            Microsoft PlayReady SL3000 + <${Codec}
                                name="AV1"
                                color="yellow"
                                disabled="${!isPlayReadySL3000Av1}">
                            <//>\u00a0<${Result} value="${isPlayReadySL3000Av1}"><//>
                        </li>

                        <li>
                            Apple FairPlay + <${Codec}
                                name="VP9"
                                color="green"
                                disabled="${!isFairplayVp9}">
                            <//>\u00a0<${Result} value="${isFairplayVp9}"><//>
                        </li>
                        <li>
                            Apple FairPlay + <${Codec}
                                name="H.265"
                                color="orange"
                                disabled="${!isFairplayHevc}">
                            <//>\u00a0<${Result} value="${isFairplayHevc}"><//>
                        </li>
                        <li>
                            Apple FairPlay + <${Codec}
                                name="AV1"
                                color="yellow"
                                disabled="${!isFairplayAv1}">
                            <//>\u00a0<${Result} value="${isFairplayAv1}"><//>
                        </li>
                    </ul>
                </li>
                <li>
                    ⚠️ Make sure that monitors, graphical cards and cables are plugged into an HDMI port that supports HDCP 2.2 or later (usually the HDMI 1 port).
                </li>
                ${isDesktopSafari() ? html`<li>
                    ⚠️ ${i18n('Select 2018 or later Mac computer with an')} <a href="${i18n('link:apple:t2')}" target="_blank">Apple T2 Security Chip</a>.
                </li>` : ''}
            </ul>
        <//>
    `;
}
