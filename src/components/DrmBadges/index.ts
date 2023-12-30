import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { WidevineBadge } from '../WidevineBadge';
import { ClearkeyBadge } from '../ClearkeyBadge';
import { FairplayBadge } from '../FairplayBadge';
import { PlayreadyBadge } from '../PlayreadyBadge';
import { PrimetimeBadge } from '../PrimetimeBadge';

const b = block('drm-badges');

export function DrmBadges() {
    return html`
        <div class="${b()}">
            <${WidevineBadge}><//>
            <${PlayreadyBadge}><//>
            <${FairplayBadge}><//>
            <${PrimetimeBadge}><//>
            <${ClearkeyBadge}><//>
        </div>
    `;
}
