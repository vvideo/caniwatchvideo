import { VNode } from 'preact';
import { block } from '../../utils/css/bem';
import { html } from 'htm/preact';
import { classname } from '../../utils/css/classname';

import './index.css';

interface LinkProps {
    class?: string;
    target?: string;
    href: string;
    theme?: 'white';
    children: VNode | string;
}

const b = block('link');

export function Link(props: LinkProps) {
    const className = classname(props.class, b({ theme: props.theme }));

    return html`<a target="${props.target}" class="${className}" href="${props.href}">${props.children}</a>`;
}
