import { html } from 'htm/preact';
import { useCallback } from 'preact/hooks';
import { block } from '../../utils/bem';

import './index.css';
import { classname } from '../../utils/classname';

export interface RadioButtonProps {
    text: string;
    value: string;
    selected?: boolean;
    class?: string;
    onClick?: (value: string) => void;
}

const b = block('radio-button');

export function RadioButton(props: RadioButtonProps) {
    const handleClick = useCallback(() => {
        props.onClick?.(props.value);
    }, [props.onClick]);

    const className = classname(b({ selected: props.selected }), props.class);

    return html`
        <span
            class="${className}"
            onClick="${handleClick}"
            key="${props.value}"
        >${props.text}</span>
    `;
}
