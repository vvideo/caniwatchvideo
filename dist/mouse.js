!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,u,i,a,s,_,l,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,u,i,a={};for(i in n)"key"==i?o=n[i]:"ref"==i?u=n[i]:a[i]=n[i];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return y(e,a,o,u,null)}function y(e,n,t,u,i){var a={type:e,props:n,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++o:i,__i:-1,__u:0};return null==i&&null!=r.vnode&&r.vnode(a),a}function b(e){return e.children}function w(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function P(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!S.__r++||i!==r.debounceRendering)&&((i=r.debounceRendering)||a)(S)}function S(){var e,n,t,o,i,a,_,l;for(u.sort(s);e=u.shift();)e.__d&&(n=u.length,o=void 0,a=(i=(t=e).__v).__e,_=[],l=[],t.__P&&((o=v({},i)).__v=i.__v+1,r.vnode&&r.vnode(o),M(t.__P,o,i,t.__n,t.__P.namespaceURI,32&i.__u?[a]:null,_,null==a?k(i):a,!!(32&i.__u),l),o.__v=i.__v,o.__.__k[o.__i]=o,E(_,o,l),o.__e!=a&&C(o)),u.length>n&&u.sort(s));S.__r=0}function I(e,n,t,r,o,u,i,a,s,_,l){var c,f,h,v,m,g=r&&r.__k||p,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=c,M(e,h,f,o,u,i,a,s,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&L(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&"string"==typeof h.type&&!e.contains(s)&&(s=k(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,u,i,a,s=n.length,_=t.length,l=_,c=0;for(e.__k=[],r=0;r<s;r++)i=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=D(o,t,i,l),o.__i=a,u=null,-1!==a&&(l--,(u=t[a])&&(u.__u|=131072)),null==u||null===u.__v?(-1==a&&c--,"function"!=typeof o.type&&(o.__u|=65536)):a!==i&&(a==i-1?c=a-i:a==i+1?c++:a>i?l>s-i?c+=a-i:c--:a<i&&c++,a!==r+c&&(o.__u|=65536))):(u=t[i])&&null==u.key&&u.__e&&!(131072&u.__u)&&(u.__e==e.__d&&(e.__d=k(u)),F(u,u,!1),t[i]=null,l--);if(l)for(r=0;r<_;r++)null!=(u=t[r])&&!(131072&u.__u)&&(u.__e==e.__d&&(e.__d=k(u)),F(u,u))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,u=e.type,i=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&u===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;i>=0||a<n.length;){if(i>=0){if((s=n[i])&&!(131072&s.__u)&&o==s.key&&u===s.type)return i;i--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&u===s.type)return a;a++}}return-1}function T(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function N(e,n,t,r,o){var u;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||T(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||T(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])u=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+u]=t,t?r?t.u=r.u:(t.u=_,e.addEventListener(n,u?c:l,u)):e.removeEventListener(n,u?c:l,u);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function R(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=_++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function M(e,n,t,o,u,i,a,s,_,l){var c,d,p,f,m,g,y,k,C,P,S,H,A,D,T,N,R=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(_=!!(32&t.__u),i=[s=n.__e=t.__e]),(c=r.__b)&&c(n);e:if("function"==typeof R)try{if(k=n.props,C="prototype"in R&&R.prototype.render,P=(c=R.contextType)&&o[c.__c],S=c?P?P.props.value:c.__:o,t.__c?y=(d=n.__c=t.__c).__=d.__E:(C?n.__c=d=new R(k,S):(n.__c=d=new w(k,S),d.constructor=R,d.render=U),P&&P.sub(d),d.props=k,d.state||(d.state={}),d.context=S,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),C&&null==d.__s&&(d.__s=d.state),C&&null!=R.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=v({},d.__s)),v(d.__s,R.getDerivedStateFromProps(k,d.__s))),f=d.props,m=d.state,d.__v=n,p)C&&null==R.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),C&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(C&&null==R.getDerivedStateFromProps&&k!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,S),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,S)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=k,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,S),C&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,m,g)}))}if(d.context=S,d.props=k,d.__P=e,d.__e=!1,A=r.__r,D=0,C){for(d.state=d.__s,d.__d=!1,A&&A(n),c=d.render(d.props,d.state,d.context),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[]}else do{d.__d=!1,A&&A(n),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++D<25);d.state=d.__s,null!=d.getChildContext&&(o=v(v({},o),d.getChildContext())),C&&!p&&null!=d.getSnapshotBeforeUpdate&&(g=d.getSnapshotBeforeUpdate(f,m)),I(e,h(N=null!=c&&c.type===b&&null==c.key?c.props.children:c)?N:[N],n,t,o,u,i,a,s,_,l),d.base=n.__e,n.__u&=-161,d.__h.length&&a.push(d),y&&(d.__E=d.__=null)}catch(e){n.__v=null,_||null!=i?(n.__e=s,n.__u|=_?160:32,i[i.indexOf(s)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=x(t.__e,n,t,o,u,i,a,_,l);(c=r.diffed)&&c(n)}function E(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)L(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function x(e,n,r,o,u,i,a,s,_){var l,c,p,f,v,g,y,b=r.props,w=n.props,C=n.type;if("svg"===C?u="http://www.w3.org/2000/svg":"math"===C?u="http://www.w3.org/1998/Math/MathML":u||(u="http://www.w3.org/1999/xhtml"),null!=i)for(l=0;l<i.length;l++)if((v=i[l])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,i[l]=null;break}if(null==e){if(null===C)return document.createTextNode(w);e=document.createElementNS(u,C,w.is&&w),i=null,s=!1}if(null===C)b===w||s&&e.data===w||(e.data=w);else{if(i=i&&t.call(e.childNodes),b=r.props||d,!s&&null!=i)for(b={},l=0;l<e.attributes.length;l++)b[(v=e.attributes[l]).name]=v.value;for(l in b)if(v=b[l],"children"==l);else if("dangerouslySetInnerHTML"==l)p=v;else if("key"!==l&&!(l in w)){if("value"==l&&"defaultValue"in w||"checked"==l&&"defaultChecked"in w)continue;N(e,l,null,v,u)}for(l in w)v=w[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||s&&"function"!=typeof v||b[l]===v||N(e,l,v,b[l],u);if(c)s||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),I(e,h(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":u,i,a,i?i[0]:r.__k&&k(r,0),s,_),null!=i)for(l=i.length;l--;)null!=i[l]&&m(i[l]);s||(l="value",void 0!==g&&(g!==e[l]||"progress"===C&&!g||"option"===C&&g!==b[l])&&N(e,l,g,b[l],u),l="checked",void 0!==y&&y!==e[l]&&N(e,l,y,b[l],u))}return e}function L(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function F(e,n,t){var o,u;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||L(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&F(o[u],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function U(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,u,i;n=n.__;)if((o=n.__c)&&!o.__)try{if((u=o.constructor)&&null!=u.getDerivedStateFromError&&(o.setState(u.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(n){e=n}throw e}},o=0,w.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},w.prototype.render=b,u=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},S.__r=0,_=0,l=R(!1),c=R(!0);var G=function(e,n,t,r){var o;n[0]=0;for(var u=1;u<n.length;u++){var i=n[u++],a=n[u]?(n[0]|=i?1:2,t[n[u++]]):n[++u];3===i?r[0]=a:4===i?r[1]=Object.assign(r[1]||{},a):5===i?(r[1]=r[1]||{})[n[++u]]=a:6===i?r[1][n[++u]]+=a+"":i?(o=e.apply(a,G(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[u-2]=0,n[u]=o)):r.push(a)}return r},W=new Map;var V,B=function(e){var n=W.get(this);return n||(n=new Map,W.set(this,n)),(n=G(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",u="",i=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,t),r=6),e&&(i.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var _=0;_<e[s].length;_++)n=e[s][_],1===r?"<"===n?(a(),i=[i],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:u?n===u?u="":o+=n:'"'===n||"'"===n?u=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][_+1])?(a(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,i=i[0])}return a(),i}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g),O={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},"Request fonts":{en:"Request fonts",ru:"Запросить шрифты"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Check camera":{en:"Check camera",ru:"Проверить камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"},"Local fonts":{en:"Local fonts",ru:"Локальные шрифты"},Filter:{en:"Filter",ru:"Фильтр"},Family:{en:"Family",ru:"Семейство"},Style:{en:"Style",ru:"Стиль"},"Local Font Access API is not supported.":{en:"Local Font Access API is not supported.",ru:"Local Font Access API не поддерживается."},"Group by family":{en:"Group by family",ru:"Группировать по семейству"},"Sample rate":{en:"Sample rate",ru:"Частота дискретизации"},"Sample size":{en:"Sample size",ru:"Размер семпла"},"Channel count":{en:"Channel count",ru:"Количество каналов"},"Auto gain control":{en:"Auto gain control",ru:"Автоматическая регулировка усиления"},Latency:{en:"Latency",ru:"Задержка"},"Noise suppression":{en:"Noise suppression",ru:"Шумоподавление"},"Echo cancellation":{en:"Echo cancellation",ru:"Эхоподавление"},"Background blur":{en:"Background blur",ru:"Размытие фона"},"hr.":{en:"hr.",ru:"ч."},"min.":{en:"min.",ru:"мин."},"sec.":{en:"sec.",ru:"с."},"Discharging time":{en:"Discharging time",ru:"Время до полной разрядки"},"Charging time":{en:"Charging time",ru:"Время до полной зарядки"},Vibration:{en:"Vibration",ru:"Вибрация"},Vibrate:{en:"Vibrate",ru:"Вибрировать"},"Vibration API is not supported":{en:"Vibration API is not supported",ru:"Vibration API не поддерживается"},"Check mic":{en:"Check mic",ru:"Проверить микрофон"},"Hear yourself":{en:"Hear yourself",ru:"Слышать себя"}};function K(e){var n=O[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[V];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(V,'" in getText().')),e):t}function j(e){return e[V]}var q="undefined"!=typeof document,z="undefined"!=typeof window,$="undefined"!=typeof navigator,Y="undefined"!=typeof screen;var J=1;function Q(e,n){return(e||"").slice(0,n)}function X(){return Math.floor(Math.random()*(1<<30))}var Z=512;function ee(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function ne(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return ee(t,n,e[n])})),ee(t,"rn",X()),ee(t,"c",!!$&&navigator.cookieEnabled),ee(t,"s",Y?[screen.width,screen.height,screen.colorDepth].join("x"):""),ee(t,"sk",z&&window.devicePixelRatio||J),ee(t,"w",z?[window.innerWidth,window.innerHeight].join("x"):""),ee(t,"en",q&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return ee(t,"et",r),ee(t,"st",r),ee(t,"t",Q(n,Z)),t.join(":")}var te=1024;function re(e){return Q(e,te)}function oe(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var ue,ie=window.location.host;function ae(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=se(r,t)),r):(n&&(r=se(r,n)),r)}}function se(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}!function(e,n,t){!function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":ne(n,r.title),rn:X(),ut:r.ut};r.url&&(o["page-url"]=re(r.url)),r.referrer&&(o["page-ref"]=re(r.referrer)),oe(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:e,pageParams:{referrer:q?document.referrer:"",title:q?document.title:"",url:z&&window.location?window.location.href:""},params:t})}("caniwatchvideo.online"===ie||"checkdevice.online"===ie?"95998062":"97747983"),function(e){V=e}((ue=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==ue&&"ru"!==ue&&(ue="en"),ue)),window.addEventListener("beforeinstallprompt",(function(e){}));var _e,le=ae("link");function ce(e){return B(_e||(_e=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),le({theme:e.theme}),e.href,e.children)}var de,pe=ae("footer");function fe(){return B(de||(de=n(['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </footer>"],['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </footer>"])),pe(),pe("item"),pe("l1"),pe("l2"),pe("l3"),pe("l4"),pe("l5"),pe("l6"),pe("item",{g:!0}),ce,K("Report a bug"))}var he,ve,me=ae("main-menu");function ge(e){return B(ve||(ve=n(['\n        <nav class="','">\n            ',"\n        </nav>\n    "],['\n        <nav class="','">\n            ',"\n        </nav>\n    "])),me(),e.items.filter((function(e){return!e.hidden})).map((function(e){return B(he||(he=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),me("item",{selected:e.selected}),e.url,e.title)})))}var ye,be=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"Mic",ru:"Микрофон"},id:"mic",url:"./mic.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},id:"keycodes",url:"./keycodes.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"Fonts",ru:"Шрифты"},id:"fonts",url:"./fonts.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function we(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=be.map((function(n){var r=n.id===t;return r&&(document.title=j(n.header||n.menuTitle)),e(e({},n),{title:j(n.menuTitle),selected:r})}));return B(ye||(ye=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),ge,r)}var ke,Ce,Pe=ae("header");function Se(){return B(ke||(ke=n(['\n        <header class="','">\n            <',' theme="white" href="/"><span class="','"></span>',"<//>\n        </header>\n    "],['\n        <header class="','">\n            <',' theme="white" href="/"><span class="','"></span>',"<//>\n        </header>\n    "])),Pe(),ce,Pe("logo"),K("Check device online"))}function Ie(e){return B(Ce||(Ce=n(["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Se,we,e.children,fe)}var He,Ae,De,Te,Ne=0,Re=[],Me=r,Ee=Me.__b,xe=Me.__r,Le=Me.diffed,Fe=Me.__c,Ue=Me.unmount,Ge=Me.__;function We(e,n){Me.__h&&Me.__h(Ae,e,Ne||n),Ne=0;var t=Ae.__H||(Ae.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Ve(e){return Ne=1,function(e,n,t){var r=We(He++,2);if(r.t=e,!r.__c&&(r.__=[Qe(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=Ae,!Ae.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!u||u.call(this,e,n,t);var i=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(i=!0)}})),!(!i&&r.__c.props===e)&&(!u||u.call(this,e,n,t))};Ae.u=!0;var u=Ae.shouldComponentUpdate,i=Ae.componentWillUpdate;Ae.componentWillUpdate=function(e,n,t){if(this.__e){var r=u;u=void 0,o(e,n,t),u=r}i&&i.call(this,e,n,t)},Ae.shouldComponentUpdate=o}return r.__N||r.__}(Qe,e)}function Be(e,n){var t=We(He++,3);!Me.__s&&Je(t.__H,n)&&(t.__=e,t.i=n,Ae.__H.__h.push(t))}function Oe(e){return Ne=5,Ke((function(){return{current:e}}),[])}function Ke(e,n){var t=We(He++,7);return Je(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function je(){for(var e;e=Re.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($e),e.__H.__h.forEach(Ye),e.__H.__h=[]}catch(n){e.__H.__h=[],Me.__e(n,e.__v)}}Me.__b=function(e){Ae=null,Ee&&Ee(e)},Me.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Ge&&Ge(e,n)},Me.__r=function(e){xe&&xe(e),He=0;var n=(Ae=e.__c).__H;n&&(De===Ae?(n.__h=[],Ae.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach($e),n.__h.forEach(Ye),n.__h=[],He=0)),De=Ae},Me.diffed=function(e){Le&&Le(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==Re.push(n)&&Te===Me.requestAnimationFrame||((Te=Me.requestAnimationFrame)||ze)(je)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),De=Ae=null},Me.__c=function(e,n){n.some((function(e){try{e.__h.forEach($e),e.__h=e.__h.filter((function(e){return!e.__||Ye(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],Me.__e(t,e.__v)}})),Fe&&Fe(e,n)},Me.unmount=function(e){Ue&&Ue(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{$e(e)}catch(e){n=e}})),t.__H=void 0,n&&Me.__e(n,t.__v))};var qe="function"==typeof requestAnimationFrame;function ze(e){var n,t=function(){clearTimeout(r),qe&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);qe&&(n=requestAnimationFrame(t))}function $e(e){var n=Ae,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),Ae=n}function Ye(e){var n=Ae;e.__c=e.__(),Ae=n}function Je(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function Qe(e,n){return"function"==typeof n?n(e):n}var Xe=function(){var e=Ve({})[1];return function(e,n){return Ne=8,Ke((function(){return e}),n)}((function(){return e({})}),[])};function Ze(){}var en=!1;try{var nn={get passive(){return en=!0,!1}};window.addEventListener("test",Ze,nn),window.removeEventListener("test",Ze,{})}catch(Ee){en=!1}var tn,rn=ae("mouse");function on(){var e=Ve(0),t=e[0],r=e[1],o=Xe(),u=Oe({}),i=Oe();return Be((function(){var e=function(e){e.preventDefault()},n=function(e){u.current[e.button]=!0,o()},t=function(e){u.current[e.button]=!1,o()};return document.addEventListener("contextmenu",e),document.addEventListener("scroll",e),document.addEventListener("mousedown",n),document.addEventListener("mouseup",t),function(){document.removeEventListener("contextmenu",e),document.removeEventListener("scroll",e),document.removeEventListener("mousedown",n),document.removeEventListener("mouseup",t)}}),[]),Be((function(){var e,n=function(e){e.preventDefault(),r(t-e.deltaY)};return null===(e=i.current)||void 0===e||e.addEventListener("wheel",n,!!en&&{passive:!1}),function(){var e;null===(e=i.current)||void 0===e||e.removeEventListener("wheel",n)}}),[t]),B(tn||(tn=n(['\n        <div ref="','" class="','">\n            <div class="','">\n                <div class="','"></div>\n                <div class="','">\n                    <div class="','" style="background-position-y:','px"></div>\n                </div>\n                <div class="','"></div>\n                <div class="','"></div>\n                <div class="','"></div>\n            </div>\n        </div>\n    '],['\n        <div ref="','" class="','">\n            <div class="','">\n                <div class="','"></div>\n                <div class="','">\n                    <div class="','" style="background-position-y:','px"></div>\n                </div>\n                <div class="','"></div>\n                <div class="','"></div>\n                <div class="','"></div>\n            </div>\n        </div>\n    '])),i,rn(),rn("body"),rn("left-button",{pressed:u.current[0]}),rn("middle-button",{pressed:u.current[1]}),rn("wheel"),t,rn("right-button",{pressed:u.current[2]}),rn("4-button",{pressed:u.current[3]}),rn("5-button",{pressed:u.current[4]}))}var un,an,sn,_n=ae("page-title");function ln(e){return B(un||(un=n(['\n        <h1 class="','">\n            ',"\n        </h1>\n    "],['\n        <h1 class="','">\n            ',"\n        </h1>\n    "])),_n(),e.children)}!function(e,n,o){var u,i,a,s;r.__&&r.__(e,n),i=(u="function"==typeof o)?null:n.__k,a=[],s=[],M(n,e=(!u&&o||n).__k=g(b,null,[e]),i||d,d,n.namespaceURI,!u&&o?[o]:i?null:n.firstChild?t.call(n.childNodes):null,a,!u&&o?o:i?i.__e:n.firstChild,u,s),E(a,e,s)}(B(sn||(sn=n(["<"," //>"],["<"," //>"])),(function(){return B(an||(an=n(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <"," //>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <"," //>\n        <//>"])),Ie,ln,K("Testing mouse"),on)})),document.querySelector(".page"))}));
