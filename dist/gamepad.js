!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,a,s,_,l,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return y(e,a,o,i,null)}function y(e,n,t,i,u){var a={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(a),a}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function S(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!I.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(I)}function I(){var e,n,t,o,u,a,_,l;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,a=(u=(t=e).__v).__e,_=[],l=[],t.__P&&((o=v({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),R(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[a]:null,_,null==a?k(u):a,!!(32&u.__u),l),o.__v=u.__v,o.__.__k[o.__i]=o,M(_,o,l),o.__e!=a&&C(o)),i.length>n&&i.sort(s));I.__r=0}function P(e,n,t,r,o,i,u,a,s,_,l){var c,f,h,v,m,g=r&&r.__k||p,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=c,R(e,h,f,o,i,u,a,s,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&U(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=k(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,i,u,a,s=n.length,_=t.length,l=_,c=0;for(e.__k=[],r=0;r<s;r++)u=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=T(o,t,u,l),o.__i=a,i=null,-1!==a&&(l--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&c--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a===u+1?c++:a>u?l>s-u?c+=a-u:c--:a<u?a==u-1&&(c=a-u):c=0,a!==r+c&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i,!1),t[u]=null,l--);if(l)for(r=0;r<_;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function T(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a++}}return-1}function x(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function D(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||x(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||x(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=_,e.addEventListener(n,i?c:l,i)):e.removeEventListener(n,i?c:l,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function N(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=_++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function R(e,n,o,i,u,a,s,_,l,c){var p,f,g,y,C,S,I,H,A,T,x,N,R,M,U,E=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(l=!!(32&o.__u),a=[_=n.__e=o.__e]),(p=r.__b)&&p(n);e:if("function"==typeof E)try{if(H=n.props,A=(p=E.contextType)&&i[p.__c],T=p?A?A.props.value:p.__:i,o.__c?I=(f=n.__c=o.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(H,T):(n.__c=f=new b(H,T),f.constructor=E,f.render=G),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=T,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,E.getDerivedStateFromProps(H,f.__s))),y=f.props,C=f.state,f.__v=n,g)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,T),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,T)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),x=0;x<f._sb.length;x++)f.__h.push(f._sb[x]);f._sb=[],f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,T),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,C,S)}))}if(f.context=T,f.props=H,f.__P=e,f.__e=!1,N=r.__r,R=0,"prototype"in E&&E.prototype.render){for(f.state=f.__s,f.__d=!1,N&&N(n),p=f.render(f.props,f.state,f.context),M=0;M<f._sb.length;M++)f.__h.push(f._sb[M]);f._sb=[]}else do{f.__d=!1,N&&N(n),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++R<25);f.state=f.__s,null!=f.getChildContext&&(i=v(v({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(S=f.getSnapshotBeforeUpdate(y,C)),P(e,h(U=null!=p&&p.type===w&&null==p.key?p.props.children:p)?U:[U],n,o,i,u,a,s,_,l,c),f.base=n.__e,n.__u&=-161,f.__h.length&&s.push(f),I&&(f.__E=f.__=null)}catch(e){n.__v=null,l||null!=a?(n.__e=_,n.__u|=l?160:32,a[a.indexOf(_)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==a&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,i,u,a,s,_){var l,c,p,f,v,g,y,w=r.props,b=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(l=0;l<u.length;l++)if((v=u[l])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,u[l]=null;break}if(null==e){if(null===C)return document.createTextNode(b);e=document.createElementNS(i,C,b.is&&b),u=null,s=!1}if(null===C)w===b||s&&e.data===b||(e.data=b);else{if(u=u&&t.call(e.childNodes),w=r.props||d,!s&&null!=u)for(w={},l=0;l<e.attributes.length;l++)w[(v=e.attributes[l]).name]=v.value;for(l in w)if(v=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)p=v;else if("key"!==l&&!(l in b)){if("value"==l&&"defaultValue"in b||"checked"==l&&"defaultChecked"in b)continue;D(e,l,null,v,i)}for(l in b)v=b[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||s&&"function"!=typeof v||w[l]===v||D(e,l,v,w[l],i);if(c)s||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),P(e,h(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:r.__k&&k(r,0),s,_),null!=u)for(l=u.length;l--;)null!=u[l]&&m(u[l]);s||(l="value",void 0!==g&&(g!==e[l]||"progress"===C&&!g||"option"===C&&g!==w[l])&&D(e,l,g,w[l],i),l="checked",void 0!==y&&y!==e[l]&&D(e,l,y,w[l],i))}return e}(o.__e,n,o,i,u,a,s,l,c);(p=r.diffed)&&p(n)}function M(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function U(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),S(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},b.prototype.render=w,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},I.__r=0,_=0,l=N(!1),c=N(!0);var F=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,F(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},L=new Map;var W=function(e){var n=L.get(this);return n||(n=new Map,L.set(this,n)),(n=F(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var _=0;_<e[s].length;_++)n=e[s][_],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][_+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function B(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=O(r,t)),r):(n&&(r=O(r,n)),r)}}function O(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var V,j=B("header");function K(e){return W(V||(V=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),j(),e.children)}var q,z={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"}};function $(e){var n=z[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[q];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(q,'" in getText().')),e):t}function Y(e){return e[q]}var X,J,Q,Z,ee=0,ne=[],te=[],re=r,oe=re.__b,ie=re.__r,ue=re.diffed,ae=re.__c,se=re.unmount,_e=re.__;function le(e,n){re.__h&&re.__h(J,e,ee||n),ee=0;var t=J.__H||(J.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:te}),t.__[e]}function ce(e){return ee=1,function(e,n,t){var r=le(X++,2);if(r.t=e,!r.__c&&(r.__=[we(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=J,!J.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var u=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};J.u=!0;var i=J.shouldComponentUpdate,u=J.componentWillUpdate;J.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}u&&u.call(this,e,n,t)},J.shouldComponentUpdate=o}return r.__N||r.__}(we,e)}function de(e,n){var t=le(X++,7);return ye(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function pe(){for(var e;e=ne.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(me),e.__H.__h.forEach(ge),e.__H.__h=[]}catch(n){e.__H.__h=[],re.__e(n,e.__v)}}re.__b=function(e){J=null,oe&&oe(e)},re.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),_e&&_e(e,n)},re.__r=function(e){ie&&ie(e),X=0;var n=(J=e.__c).__H;n&&(Q===J?(n.__h=[],J.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=te,e.__N=e.i=void 0}))):(n.__h.forEach(me),n.__h.forEach(ge),n.__h=[],X=0)),Q=J},re.diffed=function(e){ue&&ue(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==ne.push(n)&&Z===re.requestAnimationFrame||((Z=re.requestAnimationFrame)||ve)(pe)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==te&&(e.__=e.__V),e.i=void 0,e.__V=te}))),Q=J=null},re.__c=function(e,n){n.some((function(e){try{e.__h.forEach(me),e.__h=e.__h.filter((function(e){return!e.__||ge(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],re.__e(t,e.__v)}})),ae&&ae(e,n)},re.unmount=function(e){se&&se(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{me(e)}catch(e){n=e}})),t.__H=void 0,n&&re.__e(n,t.__v))};var fe,he="function"==typeof requestAnimationFrame;function ve(e){var n,t=function(){clearTimeout(r),he&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);he&&(n=requestAnimationFrame(t))}function me(e){var n=J,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),J=n}function ge(e){var n=J;e.__c=e.__(),J=n}function ye(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function we(e,n){return"function"==typeof n?n(e):n}function be(e){return W(fe||(fe=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var ke,Ce=B("row");function Se(e){return W(ke||(ke=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Ce(),Ce("category"),e.name,Ce("body"),e.children)}var Ie,Pe,He,Ae,Te,xe,De,Ne,Re,Me,Ue,Ee,Ge,Fe,Le,We,Be,Oe,Ve=B("tree-list"),je={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function Ke(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof e)return W(Ie||(Ie=n(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),Ve("string"),e);if("number"==typeof e)return W(Pe||(Pe=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Ve("number"),e);if("bigint"==typeof e)return W(He||(He=n(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),Ve("bigint"),e);if("boolean"==typeof e)return W(Ae||(Ae=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Ve("boolean"),String(e));if("function"==typeof e)return W(Te||(Te=n(['<span class="','">function</span>'],['<span class="','">function</span>'])),Ve("function"));if("symbol"==typeof e)return W(xe||(xe=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Ve("symbol"),e);if(void 0===e)return W(De||(De=n(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),Ve("undefined"));if(null===e)return W(Ne||(Ne=n(['<span class="','">null</span>'],['<span class="','">null</span>'])),Ve("null"));if(Array.isArray(e))return t.compactArrayWithSimpleTypes&&e.every((function(e){return null===e||je[typeof e]}))?W(Me||(Me=n(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",e.map((function(e,o){return W(Re||(Re=n(["","",""],["","",""])),o?", ":"",Ke(e,t,r+1))}))," "):W(Ge||(Ge=n(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),e.map((function(o,i){var u=t.showArrayIndex?W(Ue||(Ue=n([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),Ve("index"),i):"";return W(Ee||(Ee=n(["<li>","","","</li>"],["<li>","","","</li>"])),u,Ke(o,t,r+1),i===e.length-1?"":",")})));if(t.compactObject&&r>0)return W(Le||(Le=n(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(e).map((function(o,i,u){return W(Fe||(Fe=n(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),Ve("property"),o,Ke(e[o],t,r+1),i===u.length-1?"":", ")}))," ");var o=Boolean(t.showCurlyBracesAtRootLevel||r);return W(Be||(Be=n(["",'<ul class="','">\n        ',"\n    </ul>",""],["",'<ul class="','">\n        ',"\n    </ul>",""])),o?"{":"",Ve("ul",{padding:o?"yes":"no"}),Object.keys(e).map((function(o,i,u){return W(We||(We=n(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),Ve("property"),o,Ke(e[o],t,r+1),i===u.length-1?"":",")})),o?"}":"")}function qe(e){return W(Oe||(Oe=n(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Se,e.title,Ve(),Ke(e.data,e.options))}var ze,$e=function(){var e=ce({})[1];return function(e,n){return ee=8,de((function(){return e}),n)}((function(){return e({})}),[])},Ye=B("spinner");function Xe(e){return W(ze||(ze=n(['<div class="','"></div>'],['<div class="','"></div>'])),Ye({size:e.size}))}var Je,Qe=B("xbox-buttons");function Ze(){return W(Je||(Je=n(['<div class="','">\n        <div class="','">X</div>\n        <div class="','">Y</div>\n        <div class="','">A</div>\n        <div class="','">B</div>\n    </div>'],['<div class="','">\n        <div class="','">X</div>\n        <div class="','">Y</div>\n        <div class="','">A</div>\n        <div class="','">B</div>\n    </div>'])),Qe(),Qe("x"),Qe("y"),Qe("a"),Qe("b"))}var en,nn,tn,rn,on,un=B("gamepad-list");function an(){if(!navigator.getGamepads)return W(en||(en=n(["<",">","<//>"],["<",">","<//>"])),be,$("🎮 Gamepad API is not supported."));var e=$e();!function(e,n){var t=le(X++,3);!re.__s&&ye(t.__H,n)&&(t.__=e,t.i=n,J.__H.__h.push(t))}((function(){var n=window.setInterval((function(){e()}),20),t=function(){e()};return window.addEventListener("gamepadconnected",t),window.addEventListener("gamepaddisconnected",t),function(){window.removeEventListener("gamepadconnected",t),window.removeEventListener("gamepaddisconnected",t),window.clearInterval(n)}}),[]);var t=navigator.getGamepads(),r=Array.isArray(t)?t.filter((function(e){return null!==e})):[];return r.length?W(tn||(tn=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),un(),r.map((function(e,t){var r=e,o={index:r.index,mapping:r.mapping,connected:r.connected,timestamp:r.timestamp,axes:r.axes,buttons:r.buttons.map((function(e){return{value:e.value,pressed:e.pressed,touched:e.touched}}))};void 0!==r.hand&&(o.hand=r.hand);return W(nn||(nn=n(['\n                        <div class="','">\n                            <div class="','">',"</div>\n                            <",' name="','" data="','" options="','"><//>\n                        </div>'],['\n                        <div class="','">\n                            <div class="','">',"</div>\n                            <",' name="','" data="','" options="','"><//>\n                        </div>'])),un("item"),un("title"),r.id,qe,t,o,{compactObject:!0,compactArrayWithSimpleTypes:!0,showArrayIndex:!0})}))):W(rn||(rn=n(["<"," //>"],["<"," //>"])),sn)}function sn(){return W(on||(on=n(["<",' size="m" //> '," <"," //>"],["<",' size="m" //> '," <"," //>"])),Xe,$("Connect and press any button on the gamepad."),Ze)}var _n="undefined"!=typeof document,ln="undefined"!=typeof window,cn="undefined"!=typeof navigator,dn="undefined"!=typeof screen;var pn=1;function fn(e,n){return(e||"").slice(0,n)}function hn(){return Math.floor(Math.random()*(1<<30))}var vn=512;function mn(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function gn(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return mn(t,n,e[n])})),mn(t,"rn",hn()),mn(t,"c",!!cn&&navigator.cookieEnabled),mn(t,"s",dn?[screen.width,screen.height,screen.colorDepth].join("x"):""),mn(t,"sk",ln&&window.devicePixelRatio||pn),mn(t,"w",ln?[window.innerWidth,window.innerHeight].join("x"):""),mn(t,"en",_n&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return mn(t,"et",r),mn(t,"st",r),mn(t,"t",fn(n,vn)),t.join(":")}var yn,wn,bn=1024;function kn(e){return fn(e,bn)}function Cn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":gn(n,r.title),rn:hn(),ut:r.ut};r.url&&(o["page-url"]=kn(r.url)),r.referrer&&(o["page-ref"]=kn(r.referrer)),Cn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:_n?document.referrer:"",title:_n?document.title:"",url:ln&&window.location?window.location.href:""},params:yn}),function(e){q=e}((wn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==wn&&"ru"!==wn&&(wn="en"),wn)),window.addEventListener("beforeinstallprompt",(function(e){}));var Sn,In=B("footer");function Pn(){return W(Sn||(Sn=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"</a></div>\n    </div>"],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"</a></div>\n    </div>"])),In(),In("item"),In("l1"),In("l2"),In("l3"),In("l4"),In("l5"),In("l6"),In("item",{g:!0}),$("Report a bug"))}var Hn,An,Tn=B("main-menu");function xn(e){return W(An||(An=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Tn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return W(Hn||(Hn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Tn("item",{selected:e.selected}),e.url,e.title)})))}var Dn,Nn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Rn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=Nn.map((function(n){var r=n.id===t;return r&&(document.title=Y(n.header||n.menuTitle)),e(e({},n),{title:Y(n.menuTitle),selected:r})}));return W(Dn||(Dn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),xn,r)}var Mn,Un,En,Gn,Fn=B("head");function Ln(){return W(Mn||(Mn=n(['\n        <div class="','">\n            <span class="','"></span>',"\n        </div>\n    "],['\n        <div class="','">\n            <span class="','"></span>',"\n        </div>\n    "])),Fn(),Fn("logo"),$("Check device online"))}function Wn(e){return W(Un||(Un=n(["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Ln,Rn,e.children,Pn)}!function(e,n,o){var i,u,a,s;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,a=[],s=[],R(n,e=(!i&&o||n).__k=g(w,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,a,!i&&o?o:u?u.__e:n.firstChild,i,s),M(a,e,s)}(W(Gn||(Gn=n(["<"," //>"],["<"," //>"])),(function(){return W(En||(En=n(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"])),Wn,K,$("Gamepad"),an)})),document.querySelector(".page"))}));
