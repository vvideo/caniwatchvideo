!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,u,s,l,c,_,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,a,u={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:u[a]=n[a];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===u[a]&&(u[a]=e.defaultProps[a]);return y(e,u,o,i,null)}function y(e,n,t,i,a){var u={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(u),u}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function I(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!P.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||u)(P)}function P(){var e,n,t,o,a,u,l,c;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,u=(a=(t=e).__v).__e,l=[],c=[],t.__P&&((o=v({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),M(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[u]:null,l,null==u?k(a):u,!!(32&a.__u),c),o.__v=a.__v,o.__.__k[o.__i]=o,j(l,o,c),o.__e!=u&&C(o)),i.length>n&&i.sort(s));P.__r=0}function S(e,n,t,r,o,i,a,u,s,l,c){var _,f,h,v,m,g=r&&r.__k||p,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,_=0;_<y;_++)null!=(h=t.__k[_])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=_,M(e,h,f,o,i,a,u,s,l,c),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&U(f.ref,null,h),c.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&"string"==typeof h.type&&!e.contains(s)&&(s=k(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,i,a,u,s=n.length,l=t.length,c=l,_=0;for(e.__k=[],r=0;r<s;r++)a=r+_,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,u=T(o,t,a,c),o.__i=u,i=null,-1!==u&&(c--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&_--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u==a-1?_=u-a:u==a+1?_++:u>a?c>s-a?_+=u-a:_--:u<a&&_++,u!==r+_&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),F(i,i,!1),t[a]=null,c--);if(c)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),F(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function T(e,n,t,r){var o=e.key,i=e.type,a=t-1,u=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;a>=0||u<n.length;){if(a>=0){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a--}if(u<n.length){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function D(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function N(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||D(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||D(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?_:c,i)):e.removeEventListener(n,i?_:c,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function R(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function M(e,n,t,o,i,a,u,s,l,c){var _,d,p,f,m,g,y,k,C,I,P,H,A,T,D,N,R=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),a=[s=n.__e=t.__e]),(_=r.__b)&&_(n);e:if("function"==typeof R)try{if(k=n.props,C="prototype"in R&&R.prototype.render,I=(_=R.contextType)&&o[_.__c],P=_?I?I.props.value:_.__:o,t.__c?y=(d=n.__c=t.__c).__=d.__E:(C?n.__c=d=new R(k,P):(n.__c=d=new b(k,P),d.constructor=R,d.render=E),I&&I.sub(d),d.props=k,d.state||(d.state={}),d.context=P,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),C&&null==d.__s&&(d.__s=d.state),C&&null!=R.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=v({},d.__s)),v(d.__s,R.getDerivedStateFromProps(k,d.__s))),f=d.props,m=d.state,d.__v=n,p)C&&null==R.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),C&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(C&&null==R.getDerivedStateFromProps&&k!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,P),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,P)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=k,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[],d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,P),C&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,m,g)}))}if(d.context=P,d.props=k,d.__P=e,d.__e=!1,A=r.__r,T=0,C){for(d.state=d.__s,d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),D=0;D<d._sb.length;D++)d.__h.push(d._sb[D]);d._sb=[]}else do{d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++T<25);d.state=d.__s,null!=d.getChildContext&&(o=v(v({},o),d.getChildContext())),C&&!p&&null!=d.getSnapshotBeforeUpdate&&(g=d.getSnapshotBeforeUpdate(f,m)),S(e,h(N=null!=_&&_.type===w&&null==_.key?_.props.children:_)?N:[N],n,t,o,i,a,u,s,l,c),d.base=n.__e,n.__u&=-161,d.__h.length&&u.push(d),y&&(d.__E=d.__=null)}catch(e){n.__v=null,l||null!=a?(n.__e=s,n.__u|=l?160:32,a[a.indexOf(s)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==a&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=x(t.__e,n,t,o,i,a,u,l,c);(_=r.diffed)&&_(n)}function j(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function x(e,n,r,o,i,a,u,s,l){var c,_,p,f,v,g,y,w=r.props,b=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(c=0;c<a.length;c++)if((v=a[c])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,a[c]=null;break}if(null==e){if(null===C)return document.createTextNode(b);e=document.createElementNS(i,C,b.is&&b),a=null,s=!1}if(null===C)w===b||s&&e.data===b||(e.data=b);else{if(a=a&&t.call(e.childNodes),w=r.props||d,!s&&null!=a)for(w={},c=0;c<e.attributes.length;c++)w[(v=e.attributes[c]).name]=v.value;for(c in w)if(v=w[c],"children"==c);else if("dangerouslySetInnerHTML"==c)p=v;else if("key"!==c&&!(c in b)){if("value"==c&&"defaultValue"in b||"checked"==c&&"defaultChecked"in b)continue;N(e,c,null,v,i)}for(c in b)v=b[c],"children"==c?f=v:"dangerouslySetInnerHTML"==c?_=v:"value"==c?g=v:"checked"==c?y=v:"key"===c||s&&"function"!=typeof v||w[c]===v||N(e,c,v,w[c],i);if(_)s||p&&(_.__html===p.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),n.__k=[];else if(p&&(e.innerHTML=""),S(e,h(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:r.__k&&k(r,0),s,l),null!=a)for(c=a.length;c--;)null!=a[c]&&m(a[c]);s||(c="value",void 0!==g&&(g!==e[c]||"progress"===C&&!g||"option"===C&&g!==w[c])&&N(e,c,g,w[c],i),c="checked",void 0!==y&&y!==e[c]&&N(e,c,y,w[c],i))}return e}function U(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function F(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&F(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,a;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),I(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),I(this))},b.prototype.render=w,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,l=0,c=R(!1),_=R(!0);var L=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var a=n[i++],u=n[i]?(n[0]|=a?1:2,t[n[i++]]):n[++i];3===a?r[0]=u:4===a?r[1]=Object.assign(r[1]||{},u):5===a?(r[1]=r[1]||{})[n[++i]]=u:6===a?r[1][n[++i]]+=u+"":a?(o=e.apply(u,L(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},G=new Map;var B=function(e){var n=G.get(this);return n||(n=new Map,G.set(this,n)),(n=L(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",a=[0],u=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,o):3===r&&(e||o)?(a.push(3,e,o),r=2):2===r&&"..."===o&&e?a.push(4,e,0):2===r&&o&&!e?a.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(a.push(r,0,o,t),r=6),e&&(a.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&u(),u(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(u(),a=[a],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(u(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(u(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),r=2):o+=n),3===r&&"!--"===o&&(r=4,a=a[0])}return u(),a}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function W(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=O(r,t)),r):(n&&(r=O(r,n)),r)}}function O(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var V,K=W("page-title");function q(e){return B(V||(V=n(['\n        <h1 class="','">\n            ',"\n        </h1>\n    "],['\n        <h1 class="','">\n            ',"\n        </h1>\n    "])),K(),e.children)}var z,$=[{name:"EN",value:"en",emoji:"🇺🇸"},{name:"RU",value:"ru",emoji:"🇷🇺"}],Y={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},"Request fonts":{en:"Request fonts",ru:"Запросить шрифты"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Check camera":{en:"Check camera",ru:"Проверить камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"},"Local fonts":{en:"Local fonts",ru:"Локальные шрифты"},Filter:{en:"Filter",ru:"Фильтр"},Family:{en:"Family",ru:"Семейство"},Style:{en:"Style",ru:"Стиль"},"Local Font Access API is not supported.":{en:"Local Font Access API is not supported.",ru:"Local Font Access API не поддерживается."},"Group by family":{en:"Group by family",ru:"Группировать по семейству"},"Sample rate":{en:"Sample rate",ru:"Частота дискретизации"},"Sample size":{en:"Sample size",ru:"Размер семпла"},"Channel count":{en:"Channel count",ru:"Количество каналов"},"Auto gain control":{en:"Auto gain control",ru:"Автоматическая регулировка усиления"},Latency:{en:"Latency",ru:"Задержка"},"Noise suppression":{en:"Noise suppression",ru:"Шумоподавление"},"Echo cancellation":{en:"Echo cancellation",ru:"Эхоподавление"},"Background blur":{en:"Background blur",ru:"Размытие фона"},"hr.":{en:"hr.",ru:"ч."},"min.":{en:"min.",ru:"мин."},"sec.":{en:"sec.",ru:"с."},"Discharging time":{en:"Discharging time",ru:"Время до полной разрядки"},"Charging time":{en:"Charging time",ru:"Время до полной зарядки"},"Check vibration":{en:"Check vibration",ru:"Проверить вибрацию"},"Support is mainly on mobile devices.":{en:"Support is mainly on mobile devices.",ru:"Поддержка в основном только на мобильных устройствах."},Vibrate:{en:"Vibrate",ru:"Вибрировать"},"Vibration API is not supported":{en:"Vibration API is not supported",ru:"Vibration API не поддерживается"},"Check mic":{en:"Check mic",ru:"Проверить микрофон"},"Hear yourself":{en:"Hear yourself",ru:"Слышать себя"}};function J(){return function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}([],$,!0)}function Q(e){var n=Y[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[z];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(z,'" in getText().')),e):t}function X(e){return e[z]}function Z(){return z}var ee,ne,te,re,oe=0,ie=[],ae=r,ue=ae.__b,se=ae.__r,le=ae.diffed,ce=ae.__c,_e=ae.unmount,de=ae.__;function pe(e,n){ae.__h&&ae.__h(ne,e,oe||n),oe=0;var t=ne.__H||(ne.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function fe(e){return oe=1,function(e,n,t){var r=pe(ee++,2);if(r.t=e,!r.__c&&(r.__=[Ce(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=ne,!ne.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var a=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(a=!0)}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};ne.u=!0;var i=ne.shouldComponentUpdate,a=ne.componentWillUpdate;ne.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}a&&a.call(this,e,n,t)},ne.shouldComponentUpdate=o}return r.__N||r.__}(Ce,e)}function he(e,n){var t=pe(ee++,7);return ke(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function ve(e,n){return oe=8,he((function(){return e}),n)}function me(){for(var e;e=ie.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(we),e.__H.__h.forEach(be),e.__H.__h=[]}catch(n){e.__H.__h=[],ae.__e(n,e.__v)}}ae.__b=function(e){ne=null,ue&&ue(e)},ae.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),de&&de(e,n)},ae.__r=function(e){se&&se(e),ee=0;var n=(ne=e.__c).__H;n&&(te===ne?(n.__h=[],ne.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach(we),n.__h.forEach(be),n.__h=[],ee=0)),te=ne},ae.diffed=function(e){le&&le(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==ie.push(n)&&re===ae.requestAnimationFrame||((re=ae.requestAnimationFrame)||ye)(me)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),te=ne=null},ae.__c=function(e,n){n.some((function(e){try{e.__h.forEach(we),e.__h=e.__h.filter((function(e){return!e.__||be(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],ae.__e(t,e.__v)}})),ce&&ce(e,n)},ae.unmount=function(e){_e&&_e(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{we(e)}catch(e){n=e}})),t.__H=void 0,n&&ae.__e(n,t.__v))};var ge="function"==typeof requestAnimationFrame;function ye(e){var n,t=function(){clearTimeout(r),ge&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ge&&(n=requestAnimationFrame(t))}function we(e){var n=ne,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),ne=n}function be(e){var n=ne;e.__c=e.__(),ne=n}function ke(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function Ce(e,n){return"function"==typeof n?n(e):n}var Ie,Pe=W("warning-message");function Se(e){return B(Ie||(Ie=n(['<span class="','">⚠️ ',"</span>"],['<span class="','">⚠️ ',"</span>"])),Pe({theme:e.theme}),e.children)}var He,Ae,Te=W("battery-badge");function De(e){return B(Ae||(Ae=n(['\n        <div class="','">\n            <div class="','" style="width: ','%"></div>\n            <div class="','"></div>\n            ','\n            <div class="','">',"%</div>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','" style="width: ','%"></div>\n            <div class="','"></div>\n            ','\n            <div class="','">',"%</div>\n        </div>\n    "])),Te({low:e.level<.2}),Te("charge"),100*e.level,Te("contact"),e.charging?B(He||(He=n(['<div class="','">↯</div>'],['<div class="','">↯</div>'])),Te("charging")):"",Te("level"),Math.floor(100*e.level))}var Ne,Re=function(){var e=fe({})[1];return ve((function(){return e({})}),[])},Me=W("spinner");function je(e){return B(Ne||(Ne=n(['<div class="','"></div>'],['<div class="','"></div>'])),Me({size:e.size}))}var xe,Ue=W("row");function Fe(e){return B(xe||(xe=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Ue(),Ue("category"),e.name,Ue("body"),e.children)}function Ee(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}var Le,Ge,Be,We=W("list");function Oe(e){var t=e.items.filter((function(e){if(!e)return!1;if(1===e.length)return!0;e[0];var n=e[1];return void 0!==n&&""!==n})).map((function(e){var n=e[0],t=e[1];return 1===e.length?[n]:[n,"boolean"==typeof t?String(t):t]})),r=Ee(e.class,We());return t.length?B(Be||(Be=n(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),Fe,e.title,r,t.map((function(e){var t=e[0],r=e[1];return 1===e.length?B(Le||(Le=n(["<li>","</li>"],["<li>","</li>"])),t):B(Ge||(Ge=n(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}function Ve(e){var n=Math.floor(e/60/60),t=Math.floor((e-60*n*60)/60);return["".concat(n?"".concat(n," ").concat(Q("hr.")):""),"".concat(n||t?"".concat(t," ").concat(Q("min.")):"")].filter(Boolean).join(" ")}var Ke,qe,ze,$e=W("battery-status");function Ye(){if(!navigator.getBattery)return B(Ke||(Ke=n(["<",">","<//>"],["<",">","<//>"])),Se,Q("Battery Status API is not supported."));var e=fe(),t=e[0],r=e[1],o=Re();!function(e,n){var t=pe(ee++,3);!ae.__s&&ke(t.__H,n)&&(t.__=e,t.i=n,ne.__H.__h.push(t))}((function(){if(navigator.getBattery){navigator.getBattery().then((function(e){r(e)})).catch((function(e){console.error(e)}));var e=setInterval((function(){o()}),1e3);return function(){return clearInterval(e)}}}),[]);var i=t?[[Q("Charging time"),isFinite(null==t?void 0:t.chargingTime)?Ve(null==t?void 0:t.chargingTime):"∞"],[Q("Discharging time"),isFinite(null==t?void 0:t.dischargingTime)?Ve(null==t?void 0:t.dischargingTime):"∞"]]:[];return t?B(qe||(qe=n(['\n        <div class="','">\n            <',' level="','" charging="','"><//>\n            <',' class="','" items="','"><//>\n        </div>\n    '],['\n        <div class="','">\n            <',' level="','" charging="','"><//>\n            <',' class="','" items="','"><//>\n        </div>\n    '])),$e(),De,t.level,t.charging,Oe,$e("list"),i):B(ze||(ze=n(["<"," //>"],["<"," //>"])),je)}var Je="undefined"!=typeof document,Qe="undefined"!=typeof window,Xe="undefined"!=typeof navigator,Ze="undefined"!=typeof screen;var en=1;function nn(e,n){return(e||"").slice(0,n)}function tn(){return Math.floor(Math.random()*(1<<30))}var rn=512;function on(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function an(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return on(t,n,e[n])})),on(t,"rn",tn()),on(t,"c",!!Xe&&navigator.cookieEnabled),on(t,"s",Ze?[screen.width,screen.height,screen.colorDepth].join("x"):""),on(t,"sk",Qe&&window.devicePixelRatio||en),on(t,"w",Qe?[window.innerWidth,window.innerHeight].join("x"):""),on(t,"en",Je&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return on(t,"et",r),on(t,"st",r),on(t,"t",nn(n,rn)),t.join(":")}var un=1024;function sn(e){return nn(e,un)}function ln(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}function cn(){var e,n;document.removeEventListener("mousemove",cn),e=document.body,n="hover_yes",e.classList?e.classList.add(n):e.className+=(e.className?" ":"")+n}var _n,dn=window.location.host;!function(e,n,t){!function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":an(n,r.title),rn:tn(),ut:r.ut};r.url&&(o["page-url"]=sn(r.url)),r.referrer&&(o["page-ref"]=sn(r.referrer)),ln(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:e,pageParams:{referrer:Je?document.referrer:"",title:Je?document.title:"",url:Qe&&window.location?window.location.href:""},params:t})}("caniwatchvideo.online"===dn||"checkdevice.online"===dn?"95998062":"97747983"),function(e){z=e}((_n=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==_n&&"ru"!==_n&&(_n="en"),_n)),window.addEventListener("beforeinstallprompt",(function(e){})),document.addEventListener("mousemove",cn);var pn,fn=W("link");function hn(e){var t=Ee(e.class,fn({theme:e.theme}));return B(pn||(pn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),t,e.href,e.children)}var vn,mn=W("lang-switcher-item");function gn(e){var t=e.emoji,r=e.onClick,o=e.name,i=e.value,a=e.selected,u=ve((function(){r(i)}),[]);return B(vn||(vn=n(['<div class="','" onClick="','">'," "," ","</div>"],['<div class="','" onClick="','">'," "," ","</div>"])),mn(),u,t,o,a?" ✓":"")}var yn=function(e){try{return decodeURIComponent(e)}catch(n){return e}};var wn=document.createElement("a");function bn(n,t,r){if(void 0===r)return n;var o=function(e){wn.href=e;var n=wn.pathname||"";"/"!==n.charAt(0)&&(n="/".concat(n));var t=(wn.search||"")+(wn.hash||""),r=e.lastIndexOf(t);return{originalPath:-1===r?e:e.slice(0,r),href:wn.href,protocol:wn.protocol,host:wn.host,hostname:wn.hostname,port:wn.port,pathname:n,search:wn.search,hash:wn.hash}}(n),i=function(e){for(var n={},t=e.replace(/^[?#]+/,"").replace(/#.*$/,"").split("&"),r=0;r<t.length;r+=1){var o=t[r].indexOf("="),i=void 0,a=void 0;if(-1===o?(i=yn(t[r]),a=""):(i=yn(t[r].slice(0,o)),a=t[r].slice(o+1)),i){var u=Boolean(/(\[\])$/.exec(i));i=i.replace(/\[\]$/,""),u?void 0===n[i]?n[i]=[yn(a)]:n[i]=[].concat(n[i]||[],yn(a)):n[i]=yn(a)}}return n}(o.search);return i[t]=r,function(e){var n="443"===e.port||"80"===e.port?e.hostname:e.host;return"".concat(e.protocol,"//").concat(n).concat(e.pathname).concat(e.search).concat(e.hash)}(e(e({},o),{search:Cn(i)}))}var kn=function(e,n){return n.map((function(n){return"".concat(e,"[]=").concat(encodeURIComponent(n))})).join("&")};function Cn(e){var n=[];return Object.keys(e).forEach((function(t){var r=e[t];Array.isArray(r)?n.push(kn(t,r)):void 0!==r&&n.push("".concat(t,"=").concat(encodeURIComponent(r)))})),n.length?"?".concat(n.join("&")):""}var In,Pn,Sn=W("lang-switcher");function Hn(){var e=fe(!1),t=e[0],r=e[1],o=Z(),i=J(),a=ve((function(e){r(!1),window.location.href=bn(window.location.href,"lang",e)}),[r]),u=ve((function(){r(!0)}),[r]),s=i.filter((function(e){return o===e.value}))[0];return B(Pn||(Pn=n(['<div class="','">\n        <div class="','" onClick="','"><span class="','">',"</span> ",'</div>\n        <div class="','">\n            ',"\n        </div>\n    </div>"],['<div class="','">\n        <div class="','" onClick="','"><span class="','">',"</span> ",'</div>\n        <div class="','">\n            ',"\n        </div>\n    </div>"])),Sn(),Sn("current"),u,Sn("emoji"),s.emoji,s.name,Sn("popup",{visible:t}),i.map((function(e){return B(In||(In=n(["<",' selected="','" key="','" onClick="','" ..."','" //>'],["<",' selected="','" key="','" onClick="','" ..."','" //>'])),gn,o===e.value,e.value,a,e)})))}var An,Tn=W("footer");function Dn(){return B(An||(An=n(['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues/new">','<//></div>\n        <div class="','"><'," //></div>\n    </footer>"],['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues/new">','<//></div>\n        <div class="','"><'," //></div>\n    </footer>"])),Tn(),Tn("item"),Tn("l1"),Tn("l2"),Tn("l3"),Tn("l4"),Tn("l5"),Tn("l6"),Tn("item",{g:!0}),hn,Q("Report a bug"),Tn("item"),Hn)}var Nn,Rn,Mn=W("main-menu");function jn(e){return B(Rn||(Rn=n(['\n        <nav class="','">\n            ',"\n        </nav>\n    "],['\n        <nav class="','">\n            ',"\n        </nav>\n    "])),Mn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return B(Nn||(Nn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Mn("item",{selected:e.selected}),e.url,e.title)})))}var xn,Un=[{header:{en:"Check device online",ru:"Проверь устройство онлайн"},emoji:"",menuTitle:{en:"",ru:""},id:"index",url:"./",hidden:!0},{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},emoji:"⏯",menuTitle:{en:"Video",ru:"Видео"},id:"video",url:"./video.html"},{menuTitle:{en:"Audio",ru:"Аудио"},emoji:"🔊",id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},emoji:"🖥️",id:"screen",url:"./screen.html"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},emoji:"📸",id:"camera",url:"./camera.html"},{menuTitle:{en:"Mic",ru:"Микрофон"},emoji:"🎙️",id:"mic",url:"./mic.html"},{menuTitle:{en:"GPU",ru:"GPU"},emoji:"⚙️",id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},emoji:"🖱",id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},emoji:"⌨",id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},emoji:"",id:"keycodes",url:"./keycodes.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},emoji:"🕹️",id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},emoji:"💽",id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},emoji:"📍",id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},emoji:"💻",id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},emoji:"🔋",id:"battery",url:"./battery.html"},{menuTitle:{en:"Fonts",ru:"Шрифты"},emoji:"❝",id:"fonts",url:"./fonts.html"},{menuTitle:{en:"404",ru:"404"},emoji:"",id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},emoji:"",id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Fn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=Un.map((function(n){var r=n.id===t;return r&&(document.title=X(n.header||n.menuTitle)+" / "+Q("Check device online")),e(e({},n),{url:n.url+"?lang="+Z(),title:X(n.menuTitle),selected:r})}));return B(xn||(xn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),jn,r)}var En,Ln,Gn,Bn,Wn,On=W("header");function Vn(){return B(En||(En=n(['\n        <header class="','">\n            <',' theme="white" href="','"><span class="','"></span>',"<//>\n        </header>\n    "],['\n        <header class="','">\n            <',' theme="white" href="','"><span class="','"></span>',"<//>\n        </header>\n    "])),On(),hn,(e="index",t="?lang=".concat(Z()),"index"===e?"/".concat(t):"".concat(e,".html").concat(t)),On("logo"),Q("Check device online"));var e,t}function Kn(e){return B(Gn||(Gn=n(["\n        <div>\n            <"," //>\n            ","\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            ","\n\n            ","\n\n            <","><//>\n        </div>"])),Vn,e.withoutMenu?"":B(Ln||(Ln=n(["<","><//>"],["<","><//>"])),Fn),e.children,Dn)}!function(e,n,o){var i,a,u,s;r.__&&r.__(e,n),a=(i="function"==typeof o)?null:n.__k,u=[],s=[],M(n,e=(!i&&o||n).__k=g(w,null,[e]),a||d,d,n.namespaceURI,!i&&o?[o]:a?null:n.firstChild?t.call(n.childNodes):null,u,!i&&o?o:a?a.__e:n.firstChild,i,s),j(u,e,s)}(B(Wn||(Wn=n(["<"," //>"],["<"," //>"])),(function(){return B(Bn||(Bn=n(["\n        <","}>\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"],["\n        <","}>\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"])),Kn,q,Q("Battery"),Ye)})),document.querySelector(".page"))}));
