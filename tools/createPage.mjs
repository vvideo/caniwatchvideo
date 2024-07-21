export function createPage({ id, header, headerPostfix }) {
    return `<!DOCTYPE html>
<html>
<head>
    <title>${header} / ${headerPostfix}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="theme-color" content="#FFd700" />
    <link rel="canonical" href="https://checkdevice.online/${id === 'index' ? '' : id + '.html'}" />
    <link rel="manifest" href="./manifest.json" />
    <link rel="shortcut icon" href="./static/favicons/favicon.png" />
    <link rel="apple-touch-icon" href="./static/favicons/touch.png" />
    <link rel="stylesheet" href="./dist/${id}.css?md5=" />
    <meta name="google-site-verification" content="BUV1qxuhIx696cS8GU9knQcJcZaGugHSDV2kAkEG73I" />
    <meta name="yandex-verification" content="985312253f7c8a44" />
    <script>
    <!--
        if (location.href.search(/show_error/) !== -1) {
            document.write('<script src="https://unpkg.com/show-js-error/dist/show-js-error.js"></script>');
        }
    //-->
    </script>
</head>
<body>
    <div class="page"></div>
    <script src="./dist/${id}.js?md5="></script>
</body>
</html>
`;
}
