import { html } from 'htm/preact';
import { useEffect } from 'preact/hooks';
import { ScreenBadges } from '../../components/ScreenBadges';
import { VideoCodecs } from '../../components/VideoCodecs';
import { DrmBadges } from '../../components/DrmBadges';
import { Section } from '../../components/Section';
import { NativeStreaming } from '../../components/NativeStreaming';
import { VideoQuestions } from '../../components/VideoQuestions';
import { HtmlVideoElementFeatures } from '../../components/HtmlVideoElementFeatures';
import { ImageFormats } from '../../components/ImageFormats';
import { i18n } from '../../i18n';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function VideoPage() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        function onVisibilityСhange() {
            forceUpdate();
        }

        document.addEventListener('visibilitychange', onVisibilityСhange);

        return () => {
            document.removeEventListener('visibilitychange', onVisibilityСhange);
        };
    }, []);

    return html`
        <${Page}>
            <${PageTitle}>
                ${i18n('Video')}
            <//>

            <h2>${i18n('Can I watch video in this browser?')}</h2>
            <${VideoQuestions}><//>
            <${ScreenBadges}><//>

            <${Section} name="${i18n('Video Codecs')}">
                <${VideoCodecs}><//>
            <//>

            <${Section} name="DRM">
                <${DrmBadges}><//>
            <//>

            <${Section} name="${i18n('Image Formats')}">
                <${ImageFormats}><//>
            <//>

            <${Section} name="${i18n('Native Streaming Support')}">
                <${NativeStreaming}><//>
            <//>

            <${Section} name="${i18n('HTMLVideoElement Features')}">
                <${HtmlVideoElementFeatures}><//>
            <//>
        <//>`;
}
