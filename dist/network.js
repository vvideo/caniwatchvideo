!function(n){"function"==typeof define&&define.amd?define(n):n()}((function(){"use strict";var n=function(){return n=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},n.apply(this,arguments)};function e(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,u,s,l,_,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(n,e){for(var t in e)n[t]=e[t];return n}function m(n){var e=n.parentNode;e&&e.removeChild(n)}function g(n,e,r){var o,i,a,u={};for(a in e)"key"==a?o=e[a]:"ref"==a?i=e[a]:u[a]=e[a];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(a in n.defaultProps)void 0===u[a]&&(u[a]=n.defaultProps[a]);return y(n,u,o,i,null)}function y(n,e,t,i,a){var u={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(u),u}function w(n){return n.children}function b(n,e){this.props=n,this.context=e}function k(n,e){if(null==e)return n.__?k(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?k(n):null}function C(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return C(n)}}function P(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!S.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||u)(S)}function S(){var n,e,t,o,a,u,l,_;for(i.sort(s);n=i.shift();)n.__d&&(e=i.length,o=void 0,u=(a=(t=n).__v).__e,l=[],_=[],t.__P&&((o=v({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),M(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[u]:null,l,null==u?k(a):u,!!(32&a.__u),_),o.__v=a.__v,o.__.__k[o.__i]=o,R(l,o,_),o.__e!=u&&C(o)),i.length>e&&i.sort(s));S.__r=0}function I(n,e,t,r,o,i,a,u,s,l,_){var c,f,h,v,m,g=r&&r.__k||p,y=e.length;for(t.__d=s,H(t,e,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=c,M(n,h,f,o,i,a,u,s,l,_),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&U(f.ref,null,h),_.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=k(f)),s=A(h,s,n)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(n,e,t){var r,o,i,a,u,s=e.length,l=t.length,_=l,c=0;for(n.__k=[],r=0;r<s;r++)a=r+c,null!=(o=n.__k[r]=null==(o=e[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=n,o.__b=n.__b+1,u=D(o,t,a,_),o.__i=u,i=null,-1!==u&&(_--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u===a+1?c++:u>a?_>s-a?c+=u-a:c--:u<a?u==a-1&&(c=u-a):c=0,u!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=k(i)),E(i,i,!1),t[a]=null,_--);if(_)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=k(i)),E(i,i))}function A(n,e,t){var r,o;if("function"==typeof n.type){for(r=n.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=n,e=A(r[o],e,t));return e}n.__e!=e&&(t.insertBefore(n.__e,e||null),e=n.__e);do{e=e&&e.nextSibling}while(null!=e&&8===e.nodeType);return e}function D(n,e,t,r){var o=n.key,i=n.type,a=t-1,u=t+1,s=e[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;a>=0||u<e.length;){if(a>=0){if((s=e[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a--}if(u<e.length){if((s=e[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function N(n,e,t){"-"===e[0]?n.setProperty(e,null==t?"":t):n[e]=null==t?"":"number"!=typeof t||f.test(e)?t:t+"px"}function T(n,e,t,r,o){var i;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||N(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||N(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||"onFocusOut"===e||"onFocusIn"===e?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t.u=r.u:(t.u=l,n.addEventListener(e,i?c:_,i)):n.removeEventListener(e,i?c:_,i);else{if("http://www.w3.org/2000/svg"==o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=e&&"height"!=e&&"href"!=e&&"list"!=e&&"form"!=e&&"tabIndex"!=e&&"download"!=e&&"rowSpan"!=e&&"colSpan"!=e&&"role"!=e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==e[4]?n.removeAttribute(e):n.setAttribute(e,t))}}function x(n){return function(e){if(this.l){var t=this.l[e.type+n];if(null==e.t)e.t=l++;else if(e.t<t.u)return;return t(r.event?r.event(e):e)}}}function M(n,e,o,i,a,u,s,l,_,c){var p,f,g,y,C,P,S,H,A,D,N,x,M,R,U,E=e.type;if(void 0!==e.constructor)return null;128&o.__u&&(_=!!(32&o.__u),u=[l=e.__e=o.__e]),(p=r.__b)&&p(e);n:if("function"==typeof E)try{if(H=e.props,A=(p=E.contextType)&&i[p.__c],D=p?A?A.props.value:p.__:i,o.__c?S=(f=e.__c=o.__c).__=f.__E:("prototype"in E&&E.prototype.render?e.__c=f=new E(H,D):(e.__c=f=new b(H,D),f.constructor=E,f.render=G),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=D,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,E.getDerivedStateFromProps(H,f.__s))),y=f.props,C=f.state,f.__v=e,g)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,D),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,D)||e.__v===o.__v)){for(e.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.forEach((function(n){n&&(n.__=e)})),N=0;N<f._sb.length;N++)f.__h.push(f._sb[N]);f._sb=[],f.__h.length&&s.push(f);break n}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,D),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,C,P)}))}if(f.context=D,f.props=H,f.__P=n,f.__e=!1,x=r.__r,M=0,"prototype"in E&&E.prototype.render){for(f.state=f.__s,f.__d=!1,x&&x(e),p=f.render(f.props,f.state,f.context),R=0;R<f._sb.length;R++)f.__h.push(f._sb[R]);f._sb=[]}else do{f.__d=!1,x&&x(e),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++M<25);f.state=f.__s,null!=f.getChildContext&&(i=v(v({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(P=f.getSnapshotBeforeUpdate(y,C)),I(n,h(U=null!=p&&p.type===w&&null==p.key?p.props.children:p)?U:[U],e,o,i,a,u,s,l,_,c),f.base=e.__e,e.__u&=-161,f.__h.length&&s.push(f),S&&(f.__E=f.__=null)}catch(n){e.__v=null,_||null!=u?(e.__e=l,e.__u|=_?160:32,u[u.indexOf(l)]=null):(e.__e=o.__e,e.__k=o.__k),r.__e(n,e,o)}else null==u&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=function(n,e,r,o,i,a,u,s,l){var _,c,p,f,v,g,y,w=r.props,b=e.props,C=e.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(_=0;_<a.length;_++)if((v=a[_])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){n=v,a[_]=null;break}if(null==n){if(null===C)return document.createTextNode(b);n=document.createElementNS(i,C,b.is&&b),a=null,s=!1}if(null===C)w===b||s&&n.data===b||(n.data=b);else{if(a=a&&t.call(n.childNodes),w=r.props||d,!s&&null!=a)for(w={},_=0;_<n.attributes.length;_++)w[(v=n.attributes[_]).name]=v.value;for(_ in w)if(v=w[_],"children"==_);else if("dangerouslySetInnerHTML"==_)p=v;else if("key"!==_&&!(_ in b)){if("value"==_&&"defaultValue"in b||"checked"==_&&"defaultChecked"in b)continue;T(n,_,null,v,i)}for(_ in b)v=b[_],"children"==_?f=v:"dangerouslySetInnerHTML"==_?c=v:"value"==_?g=v:"checked"==_?y=v:"key"===_||s&&"function"!=typeof v||w[_]===v||T(n,_,v,w[_],i);if(c)s||p&&(c.__html===p.__html||c.__html===n.innerHTML)||(n.innerHTML=c.__html),e.__k=[];else if(p&&(n.innerHTML=""),I(n,h(f)?f:[f],e,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:r.__k&&k(r,0),s,l),null!=a)for(_=a.length;_--;)null!=a[_]&&m(a[_]);s||(_="value",void 0!==g&&(g!==n[_]||"progress"===C&&!g||"option"===C&&g!==w[_])&&T(n,_,g,w[_],i),_="checked",void 0!==y&&y!==n[_]&&T(n,_,y,w[_],i))}return n}(o.__e,e,o,i,a,u,s,_,c);(p=r.diffed)&&p(e)}function R(n,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){r.__e(n,e.__v)}}))}function U(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){r.__e(n,t)}}function E(n,e,t){var o,i;if(r.unmount&&r.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||U(o,null,e)),null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){r.__e(n,e)}o.base=o.__P=null}if(o=n.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],e,t||"function"!=typeof n.type);t||null==n.__e||m(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function G(n,e,t){return this.constructor(n,t)}t=p.slice,r={__e:function(n,e,t,r){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(n)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(n,r||{}),a=o.__d),a)return o.__E=o}catch(e){n=e}throw n}},o=0,b.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof n&&(n=n(v({},t),this.props)),n&&v(t,n),null!=n&&this.__v&&(e&&this._sb.push(e),P(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this))},b.prototype.render=w,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(n,e){return n.__v.__b-e.__v.__b},S.__r=0,l=0,_=x(!1),c=x(!0);var z=function(n,e,t,r){var o;e[0]=0;for(var i=1;i<e.length;i++){var a=e[i++],u=e[i]?(e[0]|=a?1:2,t[e[i++]]):e[++i];3===a?r[0]=u:4===a?r[1]=Object.assign(r[1]||{},u):5===a?(r[1]=r[1]||{})[e[++i]]=u:6===a?r[1][e[++i]]+=u+"":a?(o=n.apply(u,z(n,u,t,["",null])),r.push(o),u[0]?e[0]|=2:(e[i-2]=0,e[i]=o)):r.push(u)}return r},F=new Map;var V=function(n){var e=F.get(this);return e||(e=new Map,F.set(this,e)),(e=z(this,e.get(n)||(e.set(n,e=function(n){for(var e,t,r=1,o="",i="",a=[0],u=function(n){1===r&&(n||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,n,o):3===r&&(n||o)?(a.push(3,n,o),r=2):2===r&&"..."===o&&n?a.push(4,n,0):2===r&&o&&!n?a.push(5,0,!0,o):r>=5&&((o||!n&&5===r)&&(a.push(r,0,o,t),r=6),n&&(a.push(r,n,0,t),r=6)),o=""},s=0;s<n.length;s++){s&&(1===r&&u(),u(s));for(var l=0;l<n[s].length;l++)e=n[s][l],1===r?"<"===e?(u(),a=[a],r=3):o+=e:4===r?"--"===o&&">"===e?(r=1,o=""):o=e+o[0]:i?e===i?i="":o+=e:'"'===e||"'"===e?i=e:">"===e?(u(),r=1):r&&("="===e?(r=5,t=o,o=""):"/"===e&&(r<5||">"===n[s][l+1])?(u(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(u(),r=2):o+=e),3===r&&"!--"===o&&(r=4,a=a[0])}return u(),a}(n)),e),arguments,[])).length>1?e:e[0]}.bind(g);function W(n){return function(e,t){if(!e)return n;var r=n;return"string"==typeof e?(r=n+"__"+e,t&&(r=j(r,t)),r):(e&&(r=j(r,e)),r)}}function j(n,e){var t=n;return Object.keys(e).forEach((function(r){var o=e[r];!1!==o&&null!=o&&""!==o&&(t+=" "+n+"_",!0===e[r]?t+=r:t+=r+"_"+o)})),t}var O,B=W("header");function L(n){return V(O||(O=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),B(),n.children)}var K,q={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"}};function $(n){var e=q[n];if(!e)return console.error('Not found key "'.concat(n,'" in getText().')),n;var t=e[K];return void 0===t?(console.error('Not found key "'.concat(n,'", lang "').concat(K,'" in getText().')),n):t}function Y(n){return n[K]}var J,Q=W("row");function X(n){return V(J||(J=e(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Q(),Q("category"),n.name,Q("body"),n.children)}var Z,nn,en,tn,rn,on,an,un,sn,ln,_n,cn,dn,pn,fn,hn,vn,mn,gn=W("tree-list"),yn={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function wn(n,t,r){if(void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof n)return V(Z||(Z=e(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),gn("string"),n);if("number"==typeof n)return V(nn||(nn=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),gn("number"),n);if("bigint"==typeof n)return V(en||(en=e(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),gn("bigint"),n);if("boolean"==typeof n)return V(tn||(tn=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),gn("boolean"),String(n));if("function"==typeof n)return V(rn||(rn=e(['<span class="','">function</span>'],['<span class="','">function</span>'])),gn("function"));if("symbol"==typeof n)return V(on||(on=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),gn("symbol"),n);if(void 0===n)return V(an||(an=e(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),gn("undefined"));if(null===n)return V(un||(un=e(['<span class="','">null</span>'],['<span class="','">null</span>'])),gn("null"));if(Array.isArray(n))return t.compactArrayWithSimpleTypes&&n.every((function(n){return null===n||yn[typeof n]}))?V(ln||(ln=e(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",n.map((function(n,o){return V(sn||(sn=e(["","",""],["","",""])),o?", ":"",wn(n,t,r+1))}))," "):V(dn||(dn=e(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),n.map((function(o,i){var a=t.showArrayIndex?V(_n||(_n=e([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),gn("index"),i):"";return V(cn||(cn=e(["<li>","","","</li>"],["<li>","","","</li>"])),a,wn(o,t,r+1),i===n.length-1?"":",")})));if(t.compactObject&&r>0)return V(fn||(fn=e(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(n).map((function(o,i,a){return V(pn||(pn=e(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),gn("property"),o,wn(n[o],t,r+1),i===a.length-1?"":", ")}))," ");var o=Boolean(t.showCurlyBracesAtRootLevel||r);return V(vn||(vn=e(["",'<ul class="','">\n        ',"\n    </ul>",""],["",'<ul class="','">\n        ',"\n    </ul>",""])),o?"{":"",gn("ul",{padding:o?"yes":"no"}),Object.keys(n).map((function(o,i,a){return V(hn||(hn=e(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),gn("property"),o,wn(n[o],t,r+1),i===a.length-1?"":",")})),o?"}":"")}function bn(n){return V(mn||(mn=e(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),X,n.title,gn(),wn(n.data,n.options))}var kn,Cn=W("connection-navigator");function Pn(){if(!navigator.connection)return"";var n=navigator.connection,t={downlink:n.downlink,effectiveType:n.effectiveType,rtt:n.rtt,saveData:n.saveData};return"type"in n&&(t.type=n.type),"downlinkMax"in n&&(t.downlinkMax=n.downlinkMax),V(kn||(kn=e(['\n        <div class="','">\n            <',' title="navigator.connection" data="','"><//>\n        </div>'],['\n        <div class="','">\n            <',' title="navigator.connection" data="','"><//>\n        </div>'])),Cn(),bn,t)}var Sn,In,Hn,An,Dn=0,Nn=[],Tn=[],xn=r,Mn=xn.__b,Rn=xn.__r,Un=xn.diffed,En=xn.__c,Gn=xn.unmount,zn=xn.__;function Fn(n,e){xn.__h&&xn.__h(In,n,Dn||e),Dn=0;var t=In.__H||(In.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:Tn}),t.__[n]}function Vn(n){return Dn=1,function(n,e,t){var r=Fn(Sn++,2);if(r.t=n,!r.__c&&(r.__=[$n(void 0,e),function(n){var e=r.__N?r.__N[0]:r.__[0],t=r.t(e,n);e!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=In,!In.u)){var o=function(n,e,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(n){return!!n.__c}));if(o.every((function(n){return!n.__N})))return!i||i.call(this,n,e,t);var a=!1;return o.forEach((function(n){if(n.__N){var e=n.__[0];n.__=n.__N,n.__N=void 0,e!==n.__[0]&&(a=!0)}})),!(!a&&r.__c.props===n)&&(!i||i.call(this,n,e,t))};In.u=!0;var i=In.shouldComponentUpdate,a=In.componentWillUpdate;In.componentWillUpdate=function(n,e,t){if(this.__e){var r=i;i=void 0,o(n,e,t),i=r}a&&a.call(this,n,e,t)},In.shouldComponentUpdate=o}return r.__N||r.__}($n,n)}function Wn(n,e){var t=Fn(Sn++,7);return qn(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function jn(){for(var n;n=Nn.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Ln),n.__H.__h.forEach(Kn),n.__H.__h=[]}catch(e){n.__H.__h=[],xn.__e(e,n.__v)}}xn.__b=function(n){In=null,Mn&&Mn(n)},xn.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),zn&&zn(n,e)},xn.__r=function(n){Rn&&Rn(n),Sn=0;var e=(In=n.__c).__H;e&&(Hn===In?(e.__h=[],In.__h=[],e.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=Tn,n.__N=n.i=void 0}))):(e.__h.forEach(Ln),e.__h.forEach(Kn),e.__h=[],Sn=0)),Hn=In},xn.diffed=function(n){Un&&Un(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(1!==Nn.push(e)&&An===xn.requestAnimationFrame||((An=xn.requestAnimationFrame)||Bn)(jn)),e.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==Tn&&(n.__=n.__V),n.i=void 0,n.__V=Tn}))),Hn=In=null},xn.__c=function(n,e){e.some((function(n){try{n.__h.forEach(Ln),n.__h=n.__h.filter((function(n){return!n.__||Kn(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],xn.__e(t,n.__v)}})),En&&En(n,e)},xn.unmount=function(n){Gn&&Gn(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{Ln(n)}catch(n){e=n}})),t.__H=void 0,e&&xn.__e(e,t.__v))};var On="function"==typeof requestAnimationFrame;function Bn(n){var e,t=function(){clearTimeout(r),On&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);On&&(e=requestAnimationFrame(t))}function Ln(n){var e=In,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),In=e}function Kn(n){var e=In;n.__c=n.__(),In=e}function qn(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function $n(n,e){return"function"==typeof e?e(n):e}var Yn,Jn,Qn,Xn=W("list");function Zn(n){var t=n.items.filter((function(n){if(!n)return!1;if(1===n.length)return!0;n[0];var e=n[1];return void 0!==e&&""!==e})).map((function(n){var e=n[0],t=n[1];return 1===n.length?[e]:[e,"boolean"==typeof t?String(t):t]}));return t.length?V(Qn||(Qn=e(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),X,n.title,Xn(),t.map((function(n){var t=n[0],r=n[1];return 1===n.length?V(Yn||(Yn=e(["<li>","</li>"],["<li>","</li>"])),t):V(Jn||(Jn=e(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}var ne,ee,te,re,oe=W("spinner");function ie(n){return V(ne||(ne=e(['<div class="','"></div>'],['<div class="','"></div>'])),oe({size:n.size}))}function ae(){}function ue(n,e){return window.fetch?window.fetch.call(null,n,e):new Promise(ae)}function se(){var n=Vn(""),t=n[0],r=n[1],o=Vn(""),i=o[0],a=o[1];!function(n,e){var t=Fn(Sn++,3);!xn.__s&&qn(t.__H,e)&&(t.__=n,t.i=e,In.__H.__h.push(t))}((function(){ue("https://checkip.amazonaws.com/").then((function(n){return n.text()})).then((function(n){r(n)})),ue("https://www.cloudflare.com/cdn-cgi/trace").then((function(n){return n.text()})).then((function(n){a(function(n){if(!n)return"-";var e=n.match(/^ip=([\w\d:]+?)$/m);return e?e[1]:"-"}(n))}))}),[]);var u=[["IPv4",t||V(ee||(ee=e(["<",' size="s" //>'],["<",' size="s" //>'])),ie)],["IPv6",i||V(te||(te=e(["<",' size="s" //>'],["<",' size="s" //>'])),ie)]];return V(re||(re=e(["<",' items="','" //>'],["<",' items="','" //>'])),Zn,u)}var le,_e=W("network-information");function ce(){return V(le||(le=e(['\n        <div class="','">\n            <'," //>\n            <"," //>\n        </div>"],['\n        <div class="','">\n            <'," //>\n            <"," //>\n        </div>"])),_e(),se,Pn)}var de="undefined"!=typeof document,pe="undefined"!=typeof window,fe="undefined"!=typeof navigator,he="undefined"!=typeof screen;var ve=1;function me(n,e){return(n||"").slice(0,e)}function ge(){return Math.floor(Math.random()*(1<<30))}var ye=512;function we(n,e,t){(t||0===t)&&n.push(e+":"+(!0===t?"1":t))}function be(n,e){var t=[];n&&Object.keys(n).forEach((function(e){return we(t,e,n[e])})),we(t,"rn",ge()),we(t,"c",!!fe&&navigator.cookieEnabled),we(t,"s",he?[screen.width,screen.height,screen.colorDepth].join("x"):""),we(t,"sk",pe&&window.devicePixelRatio||ve),we(t,"w",pe?[window.innerWidth,window.innerHeight].join("x"):""),we(t,"en",de&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return we(t,"et",r),we(t,"st",r),we(t,"t",me(e,ye)),t.join(":")}var ke,Ce,Pe=1024;function Se(n){return me(n,Pe)}function Ie(n,e){var t,r="https://mc.yandex.ru/watch/"+n+"?"+(t=e,Object.keys(t).filter((function(n){return t[n]||0===t[n]})).map((function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(n){var e=n.browserInfo,t=n.counterId,r=n.pageParams,o={"browser-info":be(e,r.title),rn:ge(),ut:r.ut};r.url&&(o["page-url"]=Se(r.url)),r.referrer&&(o["page-ref"]=Se(r.referrer)),Ie(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:de?document.referrer:"",title:de?document.title:"",url:pe&&window.location?window.location.href:""},params:ke}),function(n){K=n}((Ce=function(){for(var n=window.location.search.slice(1).split("&"),e=0;e<n.length;e++){var t=n[e].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==Ce&&"ru"!==Ce&&(Ce="en"),Ce)),window.addEventListener("beforeinstallprompt",(function(n){}));var He,Ae=W("footer");function De(){return V(He||(He=e(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),Ae(),Ae("item"),Ae("l1"),Ae("l2"),Ae("l3"),Ae("l4"),Ae("l5"),Ae("l6"),Ae("item",{g:!0}),Ae("G"),Ae("i"),Ae("t"),Ae("H"),Ae("u"),Ae("b"))}var Ne,Te,xe=W("main-menu");function Me(n){return V(Te||(Te=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),xe(),n.items.filter((function(n){return!n.hidden})).map((function(n){return V(Ne||(Ne=e(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),xe("item",{selected:n.selected}),n.url,n.title)})))}var Re,Ue,Ee=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Input",ru:"Ввод"},id:"input",url:"./input.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Ge(){var t=function(){var n=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return n||"index"}(),r=Ee.map((function(e){var r=e.id===t;return r&&(document.title=Y(e.header||e.menuTitle)),n(n({},e),{title:Y(e.menuTitle),selected:r})}));return V(Re||(Re=e(["<",' items="','"><//>'],["<",' items="','"><//>'])),Me,r)}function ze(n){return V(Ue||(Ue=e(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Ge,n.children,De)}var Fe,Ve=W("button");function We(n){var t=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return n.filter((function(n){return null!=n})).join(" ")}(n.class,Ve({theme:n.theme,size:n.size}));return V(Fe||(Fe=e(['<button class="','" onClick="','">',"</button>"],['<button class="','" onClick="','">',"</button>"])),t,n.onClick,n.children)}var je,Oe=W("ya-static-map"),Be="https://static-maps.yandex.ru/v1?";function Le(n){var t=Be+[["ll","".concat(n.longitude,",").concat(n.latitude)],["size","".concat(n.width,",").concat(n.height)],["z",n.zoom],["apikey",n.apikey]].map((function(n){return"".concat(n[0],"=").concat(n[1])})).join("&");return V(je||(je=e(['<div class="','"><img src="','" width="','" height="','" /></div>'],['<div class="','"><img src="','" width="','" height="','" /></div>'])),Oe(),t,n.width,n.height)}var Ke,qe,$e,Ye,Je,Qe=W("geo-location");function Xe(n){var t;if(void 0===(null===(t=navigator.geolocation)||void 0===t?void 0:t.getCurrentPosition))return"";var r=Vn(null),o=r[0],i=r[1],a=Vn(!1),u=a[0],s=a[1],l=Vn(null),_=l[0],c=l[1],d=function(n,e){return Dn=8,Wn((function(){return n}),e)}((function(){s(!0),navigator.geolocation.getCurrentPosition((function(n){var e=n.coords;i({latitude:e.latitude,longitude:e.longitude,accuracy:e.accuracy,altitude:e.altitude,altitudeAccuracy:e.altitudeAccuracy,speed:e.speed,heading:e.heading}),s(!1)}),(function(n){s(!1),c(n.message),console.error(n)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}),[]);return V(Je||(Je=e(["\n        <",' theme="active" onClick="','">',"<//> ","\n        ","\n        ","\n        ","\n    "],["\n        <",' theme="active" onClick="','">',"<//> ","\n        ","\n        ","\n        ","\n    "])),We,d,$("Request geo location"),u?V(Ke||(Ke=e(["<",' size="m" //>'],["<",' size="m" //>'])),ie):"",o?V(qe||(qe=e(['<div class="','"><',' data="','" //></div>'],['<div class="','"><',' data="','" //></div>'])),Qe("list"),bn,o):"",_?V($e||($e=e(['<div class="','">',"</div>"],['<div class="','">',"</div>"])),Qe("error"),_):"",o?V(Ye||(Ye=e(['<div class="','">\n            <','\n                latitude="','"\n                longitude="','"\n                width="300"\n                height="300"\n                zoom="13"\n                apikey="','" //>\n        </div>'],['<div class="','">\n            <','\n                latitude="','"\n                longitude="','"\n                width="300"\n                height="300"\n                zoom="13"\n                apikey="','" //>\n        </div>'])),Qe("map"),Le,o.latitude,o.longitude,n.yaMapsApiKey):"")}var Ze,nt,et="82d7a38b-bad1-4b72-b66c-bfdaf838ba66";!function(n,e,o){var i,a,u,s;r.__&&r.__(n,e),a=(i="function"==typeof o)?null:e.__k,u=[],s=[],M(e,n=(!i&&o||e).__k=g(w,null,[n]),a||d,d,e.namespaceURI,!i&&o?[o]:a?null:e.firstChild?t.call(e.childNodes):null,u,!i&&o?o:a?a.__e:e.firstChild,i,s),R(u,n,s)}(V(nt||(nt=e(["<"," //>"],["<"," //>"])),(function(){return V(Ze||(Ze=e(["\n        <",">\n            <",">\n                ","\n            <//>\n            <","><//>\n            <",' yaMapsApiKey="','" //>\n        <//>'],["\n        <",">\n            <",">\n                ","\n            <//>\n            <","><//>\n            <",' yaMapsApiKey="','" //>\n        <//>'])),ze,L,$("Network & geo"),ce,Xe,et)})),document.querySelector(".page"))}));
