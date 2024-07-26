import fs from 'fs';
import beautify from 'simply-beautiful';

import { createPage } from './createPage.mjs';
import { updateTemplate } from './updateTemplate.mjs';
import { createSitemap } from './createSitemap.mjs';
import { loadJson } from './utils/loadJson.mjs';
import { buildPage } from '../dist/ssr.mjs';

const pages = loadJson('./src/pages/pages.json');

const lang = 'en';

pages.forEach(item => {
    let header = (item.header ? item.header.en : item.menuTitle.en);

    if (item.id !== 'index') {
        header += ' / Check device online';
    }

    let html = createPage({
        id: item.id,
        header,
        lang,
        content: beautify.html(buildPage(item.id)),
    });

    fs.writeFileSync(`${item.id}.html`, html, 'utf-8');
});

pages.forEach(({ id }) => updateTemplate(id));

fs.writeFileSync(
    'sitemap.xml',
    createSitemap(pages),
    'utf-8'
);
