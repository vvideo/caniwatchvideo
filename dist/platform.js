!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function t(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var r,o,i,a,u,_,s,l,c,d,p={},f=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function m(e,n){for(var t in n)e[t]=n[t];return e}function g(e){var n=e.parentNode;n&&n.removeChild(e)}function y(e,n,t){var o,i,a,u={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:u[a]=n[a];if(arguments.length>2&&(u.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===u[a]&&(u[a]=e.defaultProps[a]);return w(e,u,o,i,null)}function w(e,n,t,r,a){var u={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++i:a,__i:-1,__u:0};return null==a&&null!=o.vnode&&o.vnode(u),u}function b(e){return e.children}function k(e,n){this.props=e,this.context=n}function C(e,n){if(null==n)return e.__?C(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?C(e):null}function S(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return S(e)}}function I(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!P.__r++||u!==o.debounceRendering)&&((u=o.debounceRendering)||_)(P)}function P(){var e,n,t,r,i,u,_,l;for(a.sort(s);e=a.shift();)e.__d&&(n=a.length,r=void 0,u=(i=(t=e).__v).__e,_=[],l=[],t.__P&&((r=m({},i)).__v=i.__v+1,o.vnode&&o.vnode(r),T(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[u]:null,_,null==u?C(i):u,!!(32&i.__u),l),r.__v=i.__v,r.__.__k[r.__i]=r,E(_,r,l),r.__e!=u&&S(r)),a.length>n&&a.sort(s));P.__r=0}function H(e,n,t,r,o,i,a,u,_,s,l){var c,d,h,v,m,g=r&&r.__k||f,y=n.length;for(t.__d=_,N(t,n,g),_=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(d=-1===h.__i?p:g[h.__i]||p,h.__i=c,T(e,h,d,o,i,a,u,_,s,l),v=h.__e,h.ref&&d.ref!=h.ref&&(d.ref&&F(d.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||d.__k===h.__k?(_&&!_.isConnected&&(_=C(d)),_=A(h,_,e)):"function"==typeof h.type&&void 0!==h.__d?_=h.__d:v&&(_=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=_,t.__e=m}function N(e,n,t){var r,o,i,a,u,_=n.length,s=t.length,l=s,c=0;for(e.__k=[],r=0;r<_;r++)a=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?w(null,o,null,null,null):v(o)?w(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?w(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,u=D(o,t,a,l),o.__i=u,i=null,-1!==u&&(l--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u===a+1?c++:u>a?l>_-a?c+=u-a:c--:u<a?u==a-1&&(c=u-a):c=0,u!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=C(i)),G(i,i,!1),t[a]=null,l--);if(l)for(r=0;r<s;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=C(i)),G(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,i=e.type,a=t-1,u=t+1,_=n[t];if(null===_||_&&o==_.key&&i===_.type&&!(131072&_.__u))return t;if(r>(null==_||131072&_.__u?0:1))for(;a>=0||u<n.length;){if(a>=0){if((_=n[a])&&!(131072&_.__u)&&o==_.key&&i===_.type)return a;a--}if(u<n.length){if((_=n[u])&&!(131072&_.__u)&&o==_.key&&i===_.type)return u;u++}}return-1}function M(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||h.test(n)?t:t+"px"}function U(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||M(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||M(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?d:c,i)):e.removeEventListener(n,i?d:c,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function R(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(o.event?o.event(n):n)}}}function T(e,n,t,r,i,a,u,_,s,l){var c,d,p,f,h,g,y,w,C,S,I,P,N,A,D,M=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(s=!!(32&t.__u),a=[_=n.__e=t.__e]),(c=o.__b)&&c(n);e:if("function"==typeof M)try{if(w=n.props,C=(c=M.contextType)&&r[c.__c],S=c?C?C.props.value:c.__:r,t.__c?y=(d=n.__c=t.__c).__=d.__E:("prototype"in M&&M.prototype.render?n.__c=d=new M(w,S):(n.__c=d=new k(w,S),d.constructor=M,d.render=V),C&&C.sub(d),d.props=w,d.state||(d.state={}),d.context=S,d.__n=r,p=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=M.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=m({},d.__s)),m(d.__s,M.getDerivedStateFromProps(w,d.__s))),f=d.props,h=d.state,d.__v=n,p)null==M.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==M.getDerivedStateFromProps&&w!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(w,S),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(w,d.__s,S)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=w,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),I=0;I<d._sb.length;I++)d.__h.push(d._sb[I]);d._sb=[],d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(w,d.__s,S),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,h,g)}))}if(d.context=S,d.props=w,d.__P=e,d.__e=!1,P=o.__r,N=0,"prototype"in M&&M.prototype.render){for(d.state=d.__s,d.__d=!1,P&&P(n),c=d.render(d.props,d.state,d.context),A=0;A<d._sb.length;A++)d.__h.push(d._sb[A]);d._sb=[]}else do{d.__d=!1,P&&P(n),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++N<25);d.state=d.__s,null!=d.getChildContext&&(r=m(m({},r),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(f,h)),H(e,v(D=null!=c&&c.type===b&&null==c.key?c.props.children:c)?D:[D],n,t,r,i,a,u,_,s,l),d.base=n.__e,n.__u&=-161,d.__h.length&&u.push(d),y&&(d.__E=d.__=null)}catch(e){n.__v=null,s||null!=a?(n.__e=_,n.__u|=s?160:32,a[a.indexOf(_)]=null):(n.__e=t.__e,n.__k=t.__k),o.__e(e,n,t)}else null==a&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=x(t.__e,n,t,r,i,a,u,s,l);(c=o.diffed)&&c(n)}function E(e,n,t){n.__d=void 0;for(var r=0;r<t.length;r++)F(t[r],t[++r],t[++r]);o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function x(e,n,t,o,i,a,u,_,s){var l,c,d,f,h,m,y,w=t.props,b=n.props,k=n.type;if("svg"===k?i="http://www.w3.org/2000/svg":"math"===k?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(l=0;l<a.length;l++)if((h=a[l])&&"setAttribute"in h==!!k&&(k?h.localName===k:3===h.nodeType)){e=h,a[l]=null;break}if(null==e){if(null===k)return document.createTextNode(b);e=document.createElementNS(i,k,b.is&&b),a=null,_=!1}if(null===k)w===b||_&&e.data===b||(e.data=b);else{if(a=a&&r.call(e.childNodes),w=t.props||p,!_&&null!=a)for(w={},l=0;l<e.attributes.length;l++)w[(h=e.attributes[l]).name]=h.value;for(l in w)if(h=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)d=h;else if("key"!==l&&!(l in b)){if("value"==l&&"defaultValue"in b||"checked"==l&&"defaultChecked"in b)continue;U(e,l,null,h,i)}for(l in b)h=b[l],"children"==l?f=h:"dangerouslySetInnerHTML"==l?c=h:"value"==l?m=h:"checked"==l?y=h:"key"===l||_&&"function"!=typeof h||w[l]===h||U(e,l,h,w[l],i);if(c)_||d&&(c.__html===d.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(d&&(e.innerHTML=""),H(e,v(f)?f:[f],n,t,o,"foreignObject"===k?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:t.__k&&C(t,0),_,s),null!=a)for(l=a.length;l--;)null!=a[l]&&g(a[l]);_||(l="value",void 0!==m&&(m!==e[l]||"progress"===k&&!m||"option"===k&&m!==w[l])&&U(e,l,m,w[l],i),l="checked",void 0!==y&&y!==e[l]&&U(e,l,y,w[l],i))}return e}function F(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){o.__e(e,t)}}function G(e,n,t){var r,i;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||F(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&G(r[i],n,t||"function"!=typeof e.type);t||null==e.__e||g(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function V(e,n,t){return this.constructor(e,t)}r=f.slice,o={__e:function(e,n,t,r){for(var o,i,a;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(n){e=n}throw e}},i=0,k.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=m({},this.state),"function"==typeof e&&(e=e(m({},t),this.props)),e&&m(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),I(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),I(this))},k.prototype.render=b,a=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,l=0,c=R(!1),d=R(!0);var W=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var a=n[i++],u=n[i]?(n[0]|=a?1:2,t[n[i++]]):n[++i];3===a?r[0]=u:4===a?r[1]=Object.assign(r[1]||{},u):5===a?(r[1]=r[1]||{})[n[++i]]=u:6===a?r[1][n[++i]]+=u+"":a?(o=e.apply(u,W(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},B=new Map;var L=function(e){var n=B.get(this);return n||(n=new Map,B.set(this,n)),(n=W(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",a=[0],u=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,o):3===r&&(e||o)?(a.push(3,e,o),r=2):2===r&&"..."===o&&e?a.push(4,e,0):2===r&&o&&!e?a.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(a.push(r,0,o,t),r=6),e&&(a.push(r,e,0,t),r=6)),o=""},_=0;_<e.length;_++){_&&(1===r&&u(),u(_));for(var s=0;s<e[_].length;s++)n=e[_][s],1===r?"<"===n?(u(),a=[a],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(u(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[_][s+1])?(u(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),r=2):o+=n),3===r&&"!--"===o&&(r=4,a=a[0])}return u(),a}(e)),n),arguments,[])).length>1?n:n[0]}.bind(y);function O(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=j(r,t)),r):(n&&(r=j(r,n)),r)}}function j(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var q,K=O("header");function z(e){return L(q||(q=t(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),K(),e.children)}var $,Y={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"}};function J(e){var n=Y[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[$];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat($,'" in getText().')),e):t}function Q(e){return e[$]}var X="undefined"!=typeof document,Z="undefined"!=typeof window,ee="undefined"!=typeof navigator,ne="undefined"!=typeof screen;var te=1;function re(e,n){return(e||"").slice(0,n)}function oe(){return Math.floor(Math.random()*(1<<30))}var ie=512;function ae(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function ue(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return ae(t,n,e[n])})),ae(t,"rn",oe()),ae(t,"c",!!ee&&navigator.cookieEnabled),ae(t,"s",ne?[screen.width,screen.height,screen.colorDepth].join("x"):""),ae(t,"sk",Z&&window.devicePixelRatio||te),ae(t,"w",Z?[window.innerWidth,window.innerHeight].join("x"):""),ae(t,"en",X&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return ae(t,"et",r),ae(t,"st",r),ae(t,"t",re(n,ie)),t.join(":")}var _e,se,le=1024;function ce(e){return re(e,le)}function de(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":ue(n,r.title),rn:oe(),ut:r.ut};r.url&&(o["page-url"]=ce(r.url)),r.referrer&&(o["page-ref"]=ce(r.referrer)),de(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:X?document.referrer:"",title:X?document.title:"",url:Z&&window.location?window.location.href:""},params:_e}),function(e){$=e}((se=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==se&&"ru"!==se&&(se="en"),se)),window.addEventListener("beforeinstallprompt",(function(e){}));var pe,fe=O("footer");function he(){return L(pe||(pe=t(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),fe(),fe("item"),fe("l1"),fe("l2"),fe("l3"),fe("l4"),fe("l5"),fe("l6"),fe("item",{g:!0}),fe("G"),fe("i"),fe("t"),fe("H"),fe("u"),fe("b"))}var ve,me,ge=O("main-menu");function ye(e){return L(me||(me=t(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ge(),e.items.filter((function(e){return!e.hidden})).map((function(e){return L(ve||(ve=t(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),ge("item",{selected:e.selected}),e.url,e.title)})))}var we,be,ke=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"}];function Ce(){var n=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=ke.map((function(t){var r=t.id===n;return r&&(document.title=Q(t.header||t.menuTitle)),e(e({},t),{title:Q(t.menuTitle),selected:r})}));return L(we||(we=t(["<",' items="','"><//>'],["<",' items="','"><//>'])),ye,r)}function Se(e){return L(be||(be=t(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Ce,e.children,he)}var Ie,Pe,He,Ne,Ae=0,De=[],Me=[],Ue=o,Re=Ue.__b,Te=Ue.__r,Ee=Ue.diffed,xe=Ue.__c,Fe=Ue.unmount,Ge=Ue.__;function Ve(e,n){Ue.__h&&Ue.__h(Pe,e,Ae||n),Ae=0;var t=Pe.__H||(Pe.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:Me}),t.__[e]}function We(e){return Ae=1,function(e,n,t){var r=Ve(Ie++,2);if(r.t=e,!r.__c&&(r.__=[ze(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=Pe,!Pe.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var a=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(a=!0)}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};Pe.u=!0;var i=Pe.shouldComponentUpdate,a=Pe.componentWillUpdate;Pe.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}a&&a.call(this,e,n,t)},Pe.shouldComponentUpdate=o}return r.__N||r.__}(ze,e)}function Be(e){return Ae=5,function(e,n){var t=Ve(Ie++,7);return function(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}((function(){return{current:e}}),[])}function Le(){for(var e;e=De.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(qe),e.__H.__h.forEach(Ke),e.__H.__h=[]}catch(n){e.__H.__h=[],Ue.__e(n,e.__v)}}Ue.__b=function(e){Pe=null,Re&&Re(e)},Ue.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Ge&&Ge(e,n)},Ue.__r=function(e){Te&&Te(e),Ie=0;var n=(Pe=e.__c).__H;n&&(He===Pe?(n.__h=[],Pe.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=Me,e.__N=e.i=void 0}))):(n.__h.forEach(qe),n.__h.forEach(Ke),n.__h=[],Ie=0)),He=Pe},Ue.diffed=function(e){Ee&&Ee(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==De.push(n)&&Ne===Ue.requestAnimationFrame||((Ne=Ue.requestAnimationFrame)||je)(Le)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==Me&&(e.__=e.__V),e.i=void 0,e.__V=Me}))),He=Pe=null},Ue.__c=function(e,n){n.some((function(e){try{e.__h.forEach(qe),e.__h=e.__h.filter((function(e){return!e.__||Ke(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],Ue.__e(t,e.__v)}})),xe&&xe(e,n)},Ue.unmount=function(e){Fe&&Fe(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{qe(e)}catch(e){n=e}})),t.__H=void 0,n&&Ue.__e(n,t.__v))};var Oe="function"==typeof requestAnimationFrame;function je(e){var n,t=function(){clearTimeout(r),Oe&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Oe&&(n=requestAnimationFrame(t))}function qe(e){var n=Pe,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),Pe=n}function Ke(e){var n=Pe;e.__c=e.__(),Pe=n}function ze(e,n){return"function"==typeof n?n(e):n}var $e,Ye=O("row");function Je(e){return L($e||($e=t(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Ye(),Ye("category"),e.name,Ye("body"),e.children)}var Qe,Xe,Ze,en=O("list");function nn(e){var n=e.items.filter((function(e){if(1===e.length)return!0;e[0];var n=e[1];return void 0!==n&&""!==n})).map((function(e){var n=e[0],t=e[1];return 1===e.length?[n]:[n,"boolean"==typeof t?String(t):t]}));return n.length?L(Ze||(Ze=t(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),Je,e.title,en(),n.map((function(e){var n=e[0],r=e[1];return 1===e.length?L(Qe||(Qe=t(["<li>","</li>"],["<li>","</li>"])),n):L(Xe||(Xe=t(["<li>",": ","</li>"],["<li>",": ","</li>"])),n,r)}))):""}function tn(){}const rn='video/mp4; codecs="avc1.42E01E"';function on(){return Boolean(window.chrome)&&navigator.mediaCapabilities&&navigator.mediaCapabilities.decodingInfo?navigator.mediaCapabilities.decodingInfo({type:"file",video:{contentType:rn,width:800,height:600,bitrate:1e5,framerate:30}}).then((e=>e.powerEfficient)).catch((()=>{})):Promise.resolve(void 0)}var an,un,_n,sn,ln,cn,dn=O("info-link");function pn(e){return L(an||(an=t(['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'],['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'])),dn(),dn("link"),e.href,e.title)}function fn(e){return e?"✓":J("No")}function hn(){var e,r,o=Be([]),i=We(!1);i[0];var a=i[1],u=We(void 0),_=u[0],s=u[1];on().then((function(e){s(e)})),null===(r=null===(e=navigator.userAgentData)||void 0===e?void 0:e.getHighEntropyValues)||void 0===r||r.call(e,["architecture","bitness","formFactor","fullVersionList","model","platformVersion","wow64"]).then((function(e){var n=[[J("Name"),"".concat(e.platform," ").concat(e.platformVersion||"")],[J("Architecture"),e.architecture?"".concat(e.architecture," ").concat(e.bitness||""):""],[J("Form factor"),e.formFactor],[J("Model"),e.model]];o.current=n.filter((function(e){return e[1]})),a(!0)})).catch(tn);var l=[[L(un||(un=t(["Hardware concurrency <",' title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency"><//>'],["Hardware concurrency <",' title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency"><//>'])),pn),navigator.hardwareConcurrency],[L(_n||(_n=t(["Device memory <",' title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory"><//>'],["Device memory <",' title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory"><//>'])),pn),navigator.deviceMemory?"".concat(navigator.deviceMemory," ").concat(J("GB")):void 0],[J("Standalone application"),fn(Boolean(!0===window.navigator.standalone||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches))],["User agent",navigator.userAgent]];return void 0!==_&&l.push([J("Hardware acceleration"),fn(_)]),l=o.current.length?n(n([],o.current,!0),l,!0):n([[J("Name"),navigator.platform]],l,!0),L(sn||(sn=t(["<",' items="','" //>'],["<",' items="','" //>'])),nn,l)}!function(e,n,t){var i,a,u,_;o.__&&o.__(e,n),a=(i="function"==typeof t)?null:n.__k,u=[],_=[],T(n,e=(!i&&t||n).__k=y(b,null,[e]),a||p,p,n.namespaceURI,!i&&t?[t]:a?null:n.firstChild?r.call(n.childNodes):null,u,!i&&t?t:a?a.__e:n.firstChild,i,_),E(u,e,_)}(L(cn||(cn=t(["<"," //>"],["<"," //>"])),(function(){return L(ln||(ln=t(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <"," //>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <"," //>\n        <//>"])),Se,z,J("Platform"),hn)})),document.querySelector(".page"))}));
