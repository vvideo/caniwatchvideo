import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

const createServerConfig = () => ({
    input: `src/entries/ssr.ts`,
    output: [
        {
            file: `dist/ssr.mjs`,
            format: 'es',
        },
]   ,
    plugins: [
        typescript(),
        nodeResolve(),
        postcss({
            config: true,
            extract: path.resolve(`dist/temp.css`),
        }),
    ]
});

export default createServerConfig();
