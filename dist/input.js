!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,u,i,a,s,_,l,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,u,i,a={};for(i in n)"key"==i?o=n[i]:"ref"==i?u=n[i]:a[i]=n[i];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return y(e,a,o,u,null)}function y(e,n,t,u,i){var a={type:e,props:n,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++o:i,__i:-1,__u:0};return null==i&&null!=r.vnode&&r.vnode(a),a}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function S(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return S(e)}}function P(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!C.__r++||i!==r.debounceRendering)&&((i=r.debounceRendering)||a)(C)}function C(){var e,n,t,o,i,a,_,l;for(u.sort(s);e=u.shift();)e.__d&&(n=u.length,o=void 0,a=(i=(t=e).__v).__e,_=[],l=[],t.__P&&((o=v({},i)).__v=i.__v+1,r.vnode&&r.vnode(o),M(t.__P,o,i,t.__n,t.__P.namespaceURI,32&i.__u?[a]:null,_,null==a?k(i):a,!!(32&i.__u),l),o.__v=i.__v,o.__.__k[o.__i]=o,R(_,o,l),o.__e!=a&&S(o)),u.length>n&&u.sort(s));C.__r=0}function I(e,n,t,r,o,u,i,a,s,_,l){var c,f,h,v,m,g=r&&r.__k||p,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=c,M(e,h,f,o,u,i,a,s,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&E(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=k(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,u,i,a,s=n.length,_=t.length,l=_,c=0;for(e.__k=[],r=0;r<s;r++)i=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=D(o,t,i,l),o.__i=a,u=null,-1!==a&&(l--,(u=t[a])&&(u.__u|=131072)),null==u||null===u.__v?(-1==a&&c--,"function"!=typeof o.type&&(o.__u|=65536)):a!==i&&(a===i+1?c++:a>i?l>s-i?c+=a-i:c--:a<i?a==i-1&&(c=a-i):c=0,a!==r+c&&(o.__u|=65536))):(u=t[i])&&null==u.key&&u.__e&&!(131072&u.__u)&&(u.__e==e.__d&&(e.__d=k(u)),U(u,u,!1),t[i]=null,l--);if(l)for(r=0;r<_;r++)null!=(u=t[r])&&!(131072&u.__u)&&(u.__e==e.__d&&(e.__d=k(u)),U(u,u))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,u=e.type,i=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&u===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;i>=0||a<n.length;){if(i>=0){if((s=n[i])&&!(131072&s.__u)&&o==s.key&&u===s.type)return i;i--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&u===s.type)return a;a++}}return-1}function N(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function T(e,n,t,r,o){var u;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||N(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||N(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])u=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+u]=t,t?r?t.u=r.u:(t.u=_,e.addEventListener(n,u?c:l,u)):e.removeEventListener(n,u?c:l,u);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function x(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=_++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function M(e,n,o,u,i,a,s,_,l,c){var p,f,g,y,S,P,C,H,A,D,N,x,M,R,E,U=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(l=!!(32&o.__u),a=[_=n.__e=o.__e]),(p=r.__b)&&p(n);e:if("function"==typeof U)try{if(H=n.props,A=(p=U.contextType)&&u[p.__c],D=p?A?A.props.value:p.__:u,o.__c?C=(f=n.__c=o.__c).__=f.__E:("prototype"in U&&U.prototype.render?n.__c=f=new U(H,D):(n.__c=f=new b(H,D),f.constructor=U,f.render=G),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=D,f.__n=u,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=U.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,U.getDerivedStateFromProps(H,f.__s))),y=f.props,S=f.state,f.__v=n,g)null==U.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==U.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,D),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,D)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),N=0;N<f._sb.length;N++)f.__h.push(f._sb[N]);f._sb=[],f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,D),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,S,P)}))}if(f.context=D,f.props=H,f.__P=e,f.__e=!1,x=r.__r,M=0,"prototype"in U&&U.prototype.render){for(f.state=f.__s,f.__d=!1,x&&x(n),p=f.render(f.props,f.state,f.context),R=0;R<f._sb.length;R++)f.__h.push(f._sb[R]);f._sb=[]}else do{f.__d=!1,x&&x(n),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++M<25);f.state=f.__s,null!=f.getChildContext&&(u=v(v({},u),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(P=f.getSnapshotBeforeUpdate(y,S)),I(e,h(E=null!=p&&p.type===w&&null==p.key?p.props.children:p)?E:[E],n,o,u,i,a,s,_,l,c),f.base=n.__e,n.__u&=-161,f.__h.length&&s.push(f),C&&(f.__E=f.__=null)}catch(e){n.__v=null,l||null!=a?(n.__e=_,n.__u|=l?160:32,a[a.indexOf(_)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==a&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,u,i,a,s,_){var l,c,p,f,v,g,y,w=r.props,b=n.props,S=n.type;if("svg"===S?u="http://www.w3.org/2000/svg":"math"===S?u="http://www.w3.org/1998/Math/MathML":u||(u="http://www.w3.org/1999/xhtml"),null!=i)for(l=0;l<i.length;l++)if((v=i[l])&&"setAttribute"in v==!!S&&(S?v.localName===S:3===v.nodeType)){e=v,i[l]=null;break}if(null==e){if(null===S)return document.createTextNode(b);e=document.createElementNS(u,S,b.is&&b),i=null,s=!1}if(null===S)w===b||s&&e.data===b||(e.data=b);else{if(i=i&&t.call(e.childNodes),w=r.props||d,!s&&null!=i)for(w={},l=0;l<e.attributes.length;l++)w[(v=e.attributes[l]).name]=v.value;for(l in w)if(v=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)p=v;else if("key"!==l&&!(l in b)){if("value"==l&&"defaultValue"in b||"checked"==l&&"defaultChecked"in b)continue;T(e,l,null,v,u)}for(l in b)v=b[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||s&&"function"!=typeof v||w[l]===v||T(e,l,v,w[l],u);if(c)s||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),I(e,h(f)?f:[f],n,r,o,"foreignObject"===S?"http://www.w3.org/1999/xhtml":u,i,a,i?i[0]:r.__k&&k(r,0),s,_),null!=i)for(l=i.length;l--;)null!=i[l]&&m(i[l]);s||(l="value",void 0!==g&&(g!==e[l]||"progress"===S&&!g||"option"===S&&g!==w[l])&&T(e,l,g,w[l],u),l="checked",void 0!==y&&y!==e[l]&&T(e,l,y,w[l],u))}return e}(o.__e,n,o,u,i,a,s,l,c);(p=r.diffed)&&p(n)}function R(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)E(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function E(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function U(e,n,t){var o,u;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&U(o[u],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,u,i;n=n.__;)if((o=n.__c)&&!o.__)try{if((u=o.constructor)&&null!=u.getDerivedStateFromError&&(o.setState(u.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},b.prototype.render=w,u=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},C.__r=0,_=0,l=x(!1),c=x(!0);var L=function(e,n,t,r){var o;n[0]=0;for(var u=1;u<n.length;u++){var i=n[u++],a=n[u]?(n[0]|=i?1:2,t[n[u++]]):n[++u];3===i?r[0]=a:4===i?r[1]=Object.assign(r[1]||{},a):5===i?(r[1]=r[1]||{})[n[++u]]=a:6===i?r[1][n[++u]]+=a+"":i?(o=e.apply(a,L(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[u-2]=0,n[u]=o)):r.push(a)}return r},F=new Map;var V=function(e){var n=F.get(this);return n||(n=new Map,F.set(this,n)),(n=L(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",u="",i=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,t),r=6),e&&(i.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var _=0;_<e[s].length;_++)n=e[s][_],1===r?"<"===n?(a(),i=[i],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:u?n===u?u="":o+=n:'"'===n||"'"===n?u=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][_+1])?(a(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,i=i[0])}return a(),i}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function W(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=B(r,t)),r):(n&&(r=B(r,n)),r)}}function B(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var O,j=W("header");function q(e){return V(O||(O=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),j(),e.children)}var K,z={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"}};function $(e){return e[K]}var Y="undefined"!=typeof document,X="undefined"!=typeof window,J="undefined"!=typeof navigator,Q="undefined"!=typeof screen;var Z=1;function ee(e,n){return(e||"").slice(0,n)}function ne(){return Math.floor(Math.random()*(1<<30))}var te=512;function re(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function oe(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return re(t,n,e[n])})),re(t,"rn",ne()),re(t,"c",!!J&&navigator.cookieEnabled),re(t,"s",Q?[screen.width,screen.height,screen.colorDepth].join("x"):""),re(t,"sk",X&&window.devicePixelRatio||Z),re(t,"w",X?[window.innerWidth,window.innerHeight].join("x"):""),re(t,"en",Y&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return re(t,"et",r),re(t,"st",r),re(t,"t",ee(n,te)),t.join(":")}var ue,ie,ae=1024;function se(e){return ee(e,ae)}function _e(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":oe(n,r.title),rn:ne(),ut:r.ut};r.url&&(o["page-url"]=se(r.url)),r.referrer&&(o["page-ref"]=se(r.referrer)),_e(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:Y?document.referrer:"",title:Y?document.title:"",url:X&&window.location?window.location.href:""},params:ue}),function(e){K=e}((ie=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==ie&&"ru"!==ie&&(ie="en"),ie)),window.addEventListener("beforeinstallprompt",(function(e){}));var le,ce=W("footer");function de(){return V(le||(le=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),ce(),ce("item"),ce("l1"),ce("l2"),ce("l3"),ce("l4"),ce("l5"),ce("l6"),ce("item",{g:!0}),ce("G"),ce("i"),ce("t"),ce("H"),ce("u"),ce("b"))}var pe,fe,he=W("main-menu");function ve(e){return V(fe||(fe=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),he(),e.items.filter((function(e){return!e.hidden})).map((function(e){return V(pe||(pe=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),he("item",{selected:e.selected}),e.url,e.title)})))}var me,ge,ye=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Input",ru:"Ввод"},id:"input",url:"./input.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function we(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=ye.map((function(n){var r=n.id===t;return r&&(document.title=$(n.header||n.menuTitle)),e(e({},n),{title:$(n.menuTitle),selected:r})}));return V(me||(me=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),ve,r)}function be(e){return V(ge||(ge=n(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),we,e.children,de)}var ke,Se,Pe,Ce,Ie=0,He=[],Ae=[],De=r,Ne=De.__b,Te=De.__r,xe=De.diffed,Me=De.__c,Re=De.unmount,Ee=De.__;function Ue(e,n){De.__h&&De.__h(Se,e,Ie||n),Ie=0;var t=Se.__H||(Se.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:Ae}),t.__[e]}function Ge(e){return Ie=1,function(e,n,t){var r=Ue(ke++,2);if(r.t=e,!r.__c&&(r.__=[qe(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=Se,!Se.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!u||u.call(this,e,n,t);var i=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(i=!0)}})),!(!i&&r.__c.props===e)&&(!u||u.call(this,e,n,t))};Se.u=!0;var u=Se.shouldComponentUpdate,i=Se.componentWillUpdate;Se.componentWillUpdate=function(e,n,t){if(this.__e){var r=u;u=void 0,o(e,n,t),u=r}i&&i.call(this,e,n,t)},Se.shouldComponentUpdate=o}return r.__N||r.__}(qe,e)}function Le(e,n){var t=Ue(ke++,7);return je(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function Fe(){for(var e;e=He.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Be),e.__H.__h.forEach(Oe),e.__H.__h=[]}catch(n){e.__H.__h=[],De.__e(n,e.__v)}}De.__b=function(e){Se=null,Ne&&Ne(e)},De.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Ee&&Ee(e,n)},De.__r=function(e){Te&&Te(e),ke=0;var n=(Se=e.__c).__H;n&&(Pe===Se?(n.__h=[],Se.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=Ae,e.__N=e.i=void 0}))):(n.__h.forEach(Be),n.__h.forEach(Oe),n.__h=[],ke=0)),Pe=Se},De.diffed=function(e){xe&&xe(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==He.push(n)&&Ce===De.requestAnimationFrame||((Ce=De.requestAnimationFrame)||We)(Fe)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==Ae&&(e.__=e.__V),e.i=void 0,e.__V=Ae}))),Pe=Se=null},De.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Be),e.__h=e.__h.filter((function(e){return!e.__||Oe(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],De.__e(t,e.__v)}})),Me&&Me(e,n)},De.unmount=function(e){Re&&Re(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{Be(e)}catch(e){n=e}})),t.__H=void 0,n&&De.__e(n,t.__v))};var Ve="function"==typeof requestAnimationFrame;function We(e){var n,t=function(){clearTimeout(r),Ve&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Ve&&(n=requestAnimationFrame(t))}function Be(e){var n=Se,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),Se=n}function Oe(e){var n=Se;e.__c=e.__(),Se=n}function je(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function qe(e,n){return"function"==typeof n?n(e):n}var Ke,ze,$e,Ye=function(){var e=Ge({})[1];return function(e,n){return Ie=8,Le((function(){return e}),n)}((function(){return e({})}),[])},Xe=W("mouse"),Je=200,Qe=100;function Ze(){var e=Ge(0),t=e[0],r=e[1],o=Ge(0),u=o[0],i=o[1],a=Ye(),s=function(e){return Ie=5,Le((function(){return{current:e}}),[])}({});!function(e,n){var t=Ue(ke++,3);!De.__s&&je(t.__H,n)&&(t.__=e,t.i=n,Se.__H.__h.push(t))}((function(){var e=function(e){r(e.pageX/screen.width*Je),i(e.pageY/screen.height*Qe)},n=function(e){e.preventDefault()},t=function(e){s.current[e.button]=!0,a()},o=function(e){s.current[e.button]=!1,a()};return document.addEventListener("mousemove",e),document.addEventListener("contextmenu",n),document.addEventListener("mousedown",t),document.addEventListener("mouseup",o),function(){document.removeEventListener("mousemove",e),document.removeEventListener("contextmenu",n),document.removeEventListener("mousedown",t),document.removeEventListener("mouseup",o)}}),[]);var _="transform:translate(".concat(t,"px,").concat(u,"px)");return V(Ke||(Ke=n(['\n        <div class="','">\n            <div class="','"></div>\n            <div class="','" style="','">\n                <div class="','"></div>\n                <div class="','"></div>\n                <div class="','"></div>\n                <div class="','"></div>\n                <div class="','"></div>\n            </div>\n        </div>\n    '],['\n        <div class="','">\n            <div class="','"></div>\n            <div class="','" style="','">\n                <div class="','"></div>\n                <div class="','"></div>\n                <div class="','"></div>\n                <div class="','"></div>\n                <div class="','"></div>\n            </div>\n        </div>\n    '])),Xe(),Xe("pad"),Xe("body"),_,Xe("left-button",{pressed:s.current[0]}),Xe("middle-button",{pressed:s.current[1]}),Xe("right-button",{pressed:s.current[2]}),Xe("4-button",{pressed:s.current[3]}),Xe("5-button",{pressed:s.current[4]}))}!function(e,n,o){var u,i,a,s;r.__&&r.__(e,n),i=(u="function"==typeof o)?null:n.__k,a=[],s=[],M(n,e=(!u&&o||n).__k=g(w,null,[e]),i||d,d,n.namespaceURI,!u&&o?[o]:i?null:n.firstChild?t.call(n.childNodes):null,a,!u&&o?o:i?i.__e:n.firstChild,u,s),R(a,e,s)}(V($e||($e=n(["<"," //>"],["<"," //>"])),(function(){return V(ze||(ze=n(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <"," //>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <"," //>\n        <//>"])),be,q,function(e){var n=z[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[K];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(K,'" in getText().')),e):t}("Mouse"),Ze)})),document.querySelector(".page"))}));