!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,u,s,_,l,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,a,u={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:u[a]=n[a];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===u[a]&&(u[a]=e.defaultProps[a]);return y(e,u,o,i,null)}function y(e,n,t,i,a){var u={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(u),u}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function S(e,n){if(null==n)return e.__?S(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?S(e):null}function k(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return k(e)}}function I(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!P.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||u)(P)}function P(){var e,n,t,o,a,u,_,l;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,u=(a=(t=e).__v).__e,_=[],l=[],t.__P&&((o=v({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),x(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[u]:null,_,null==u?S(a):u,!!(32&a.__u),l),o.__v=a.__v,o.__.__k[o.__i]=o,R(_,o,l),o.__e!=u&&k(o)),i.length>n&&i.sort(s));P.__r=0}function C(e,n,t,r,o,i,a,u,s,_,l){var c,f,h,v,m,g=r&&r.__k||p,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=c,x(e,h,f,o,i,a,u,s,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&T(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=S(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,i,a,u,s=n.length,_=t.length,l=_,c=0;for(e.__k=[],r=0;r<s;r++)a=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,u=D(o,t,a,l),o.__i=u,i=null,-1!==u&&(l--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u===a+1?c++:u>a?l>s-a?c+=u-a:c--:u<a?u==a-1&&(c=u-a):c=0,u!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=S(i)),E(i,i,!1),t[a]=null,l--);if(l)for(r=0;r<_;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=S(i)),E(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,i=e.type,a=t-1,u=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;a>=0||u<n.length;){if(a>=0){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a--}if(u<n.length){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function N(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function U(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||N(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||N(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=_,e.addEventListener(n,i?c:l,i)):e.removeEventListener(n,i?c:l,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function M(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=_++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function x(e,n,t,o,i,a,u,s,_,l){var c,d,p,f,m,g,y,S,k,I,P,H,A,D,N,U=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(_=!!(32&t.__u),a=[s=n.__e=t.__e]),(c=r.__b)&&c(n);e:if("function"==typeof U)try{if(S=n.props,k=(c=U.contextType)&&o[c.__c],I=c?k?k.props.value:c.__:o,t.__c?y=(d=n.__c=t.__c).__=d.__E:("prototype"in U&&U.prototype.render?n.__c=d=new U(S,I):(n.__c=d=new b(S,I),d.constructor=U,d.render=G),k&&k.sub(d),d.props=S,d.state||(d.state={}),d.context=I,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=U.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=v({},d.__s)),v(d.__s,U.getDerivedStateFromProps(S,d.__s))),f=d.props,m=d.state,d.__v=n,p)null==U.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==U.getDerivedStateFromProps&&S!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(S,I),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(S,d.__s,I)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=S,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),P=0;P<d._sb.length;P++)d.__h.push(d._sb[P]);d._sb=[],d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(S,d.__s,I),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,m,g)}))}if(d.context=I,d.props=S,d.__P=e,d.__e=!1,H=r.__r,A=0,"prototype"in U&&U.prototype.render){for(d.state=d.__s,d.__d=!1,H&&H(n),c=d.render(d.props,d.state,d.context),D=0;D<d._sb.length;D++)d.__h.push(d._sb[D]);d._sb=[]}else do{d.__d=!1,H&&H(n),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++A<25);d.state=d.__s,null!=d.getChildContext&&(o=v(v({},o),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(f,m)),C(e,h(N=null!=c&&c.type===w&&null==c.key?c.props.children:c)?N:[N],n,t,o,i,a,u,s,_,l),d.base=n.__e,n.__u&=-161,d.__h.length&&u.push(d),y&&(d.__E=d.__=null)}catch(e){n.__v=null,_||null!=a?(n.__e=s,n.__u|=_?160:32,a[a.indexOf(s)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==a&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=W(t.__e,n,t,o,i,a,u,_,l);(c=r.diffed)&&c(n)}function R(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)T(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function W(e,n,r,o,i,a,u,s,_){var l,c,p,f,v,g,y,w=r.props,b=n.props,k=n.type;if("svg"===k?i="http://www.w3.org/2000/svg":"math"===k?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(l=0;l<a.length;l++)if((v=a[l])&&"setAttribute"in v==!!k&&(k?v.localName===k:3===v.nodeType)){e=v,a[l]=null;break}if(null==e){if(null===k)return document.createTextNode(b);e=document.createElementNS(i,k,b.is&&b),a=null,s=!1}if(null===k)w===b||s&&e.data===b||(e.data=b);else{if(a=a&&t.call(e.childNodes),w=r.props||d,!s&&null!=a)for(w={},l=0;l<e.attributes.length;l++)w[(v=e.attributes[l]).name]=v.value;for(l in w)if(v=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)p=v;else if("key"!==l&&!(l in b)){if("value"==l&&"defaultValue"in b||"checked"==l&&"defaultChecked"in b)continue;U(e,l,null,v,i)}for(l in b)v=b[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||s&&"function"!=typeof v||w[l]===v||U(e,l,v,w[l],i);if(c)s||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),C(e,h(f)?f:[f],n,r,o,"foreignObject"===k?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:r.__k&&S(r,0),s,_),null!=a)for(l=a.length;l--;)null!=a[l]&&m(a[l]);s||(l="value",void 0!==g&&(g!==e[l]||"progress"===k&&!g||"option"===k&&g!==w[l])&&U(e,l,g,w[l],i),l="checked",void 0!==y&&y!==e[l]&&U(e,l,y,w[l],i))}return e}function T(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||T(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,a;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),I(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),I(this))},b.prototype.render=w,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,_=0,l=M(!1),c=M(!0);var B=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var a=n[i++],u=n[i]?(n[0]|=a?1:2,t[n[i++]]):n[++i];3===a?r[0]=u:4===a?r[1]=Object.assign(r[1]||{},u):5===a?(r[1]=r[1]||{})[n[++i]]=u:6===a?r[1][n[++i]]+=u+"":a?(o=e.apply(u,B(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},F=new Map;var O=function(e){var n=F.get(this);return n||(n=new Map,F.set(this,n)),(n=B(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",a=[0],u=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,o):3===r&&(e||o)?(a.push(3,e,o),r=2):2===r&&"..."===o&&e?a.push(4,e,0):2===r&&o&&!e?a.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(a.push(r,0,o,t),r=6),e&&(a.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&u(),u(s));for(var _=0;_<e[s].length;_++)n=e[s][_],1===r?"<"===n?(u(),a=[a],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(u(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][_+1])?(u(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),r=2):o+=n),3===r&&"!--"===o&&(r=4,a=a[0])}return u(),a}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function L(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=V(r,t)),r):(n&&(r=V(r,n)),r)}}function V(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var z,j=L("header");function q(e){return O(z||(z=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),j(),e.children)}var K,$={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низ. разрешение"},"High resolution":{en:"High resolution",ru:"Выс. разрешение"},"High frame rate":{en:"High frame rate",ru:"Выс. частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."}};function Y(e){var n=$[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[K];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(K,'" in getText().')),e):t}var J,Q=L("row");function X(e){return O(J||(J=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Q(),Q("category"),e.name,Q("body"),e.children)}var Z,ee,ne,te=L("list");function re(e){var t=e.items.filter((function(e){if(1===e.length)return!0;e[0];var n=e[1];return void 0!==n&&""!==n})).map((function(e){var n=e[0],t=e[1];return 1===e.length?[n]:[n,"boolean"==typeof t?String(t):t]}));return t.length?O(ne||(ne=n(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),X,e.title,te(),t.map((function(e){var t=e[0],r=e[1];return 1===e.length?O(Z||(Z=n(["<li>","</li>"],["<li>","</li>"])),t):O(ee||(ee=n(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}function oe(e){return e?"✓":Y("No")}var ie,ae,ue,se,_e=0,le=[],ce=[],de=r,pe=de.__b,fe=de.__r,he=de.diffed,ve=de.__c,me=de.unmount,ge=de.__;function ye(e,n){de.__h&&de.__h(ae,e,_e||n),_e=0;var t=ae.__H||(ae.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:ce}),t.__[e]}function we(e){return _e=1,function(e,n,t){var r=ye(ie++,2);if(r.t=e,!r.__c&&(r.__=[Ce(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=ae,!ae.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var a=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(a=!0)}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};ae.u=!0;var i=ae.shouldComponentUpdate,a=ae.componentWillUpdate;ae.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}a&&a.call(this,e,n,t)},ae.shouldComponentUpdate=o}return r.__N||r.__}(Ce,e)}function be(){for(var e;e=le.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ie),e.__H.__h.forEach(Pe),e.__H.__h=[]}catch(n){e.__H.__h=[],de.__e(n,e.__v)}}de.__b=function(e){ae=null,pe&&pe(e)},de.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),ge&&ge(e,n)},de.__r=function(e){fe&&fe(e),ie=0;var n=(ae=e.__c).__H;n&&(ue===ae?(n.__h=[],ae.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=ce,e.__N=e.i=void 0}))):(n.__h.forEach(Ie),n.__h.forEach(Pe),n.__h=[],ie=0)),ue=ae},de.diffed=function(e){he&&he(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==le.push(n)&&se===de.requestAnimationFrame||((se=de.requestAnimationFrame)||ke)(be)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==ce&&(e.__=e.__V),e.i=void 0,e.__V=ce}))),ue=ae=null},de.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Ie),e.__h=e.__h.filter((function(e){return!e.__||Pe(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],de.__e(t,e.__v)}})),ve&&ve(e,n)},de.unmount=function(e){me&&me(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{Ie(e)}catch(e){n=e}})),t.__H=void 0,n&&de.__e(n,t.__v))};var Se="function"==typeof requestAnimationFrame;function ke(e){var n,t=function(){clearTimeout(r),Se&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Se&&(n=requestAnimationFrame(t))}function Ie(e){var n=ae,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),ae=n}function Pe(e){var n=ae;e.__c=e.__(),ae=n}function Ce(e,n){return"function"==typeof n?n(e):n}var He,Ae,De,Ne,Ue=L("ext-link");function Me(e){return O(He||(He=n(['\n        <a class="','" href="','" target="_blank">',"</a>\n    "],['\n        <a class="','" href="','" target="_blank">',"</a>\n    "])),Ue({theme:e.theme}),e.href,e.children)}function xe(){var e,t,r=we(void 0),o=r[0],i=r[1];if("function"!=typeof(null===(e=navigator.storage)||void 0===e?void 0:e.estimate))return"";!function(e,n){var t=ye(ie++,3);!de.__s&&function(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)&&(t.__=e,t.i=n,ae.__H.__h.push(t))}((function(){navigator.storage.estimate().then((function(e){void 0!==e.quota&&i(e.quota)}))}),[]);var a,u,s=[[O(Ae||(Ae=n(["<",' theme="white" href="https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist">',"<//>"],["<",' theme="white" href="https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist">',"<//>"])),Me,Y("Support of persistent storage")),oe(Boolean("function"==typeof(null===(t=navigator.storage)||void 0===t?void 0:t.persist)))]];return"number"==typeof o&&s.push([O(De||(De=n(["<",' theme="white" href="https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate">',"<//>"],["<",' theme="white" href="https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate">',"<//>"])),Me,Y("Storage quota for origin")),(a=o,u=Math.floor(a/1024/1024/1024*100)/100,"".concat(u," ").concat(Y("GB")))]),O(Ne||(Ne=n(["<",' title="','" items="','"><//>'],["<",' title="','" items="','"><//>'])),re,Y("Features"),s)}var Re,We,Te,Ee,Ge,Be,Fe={cookies:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled",sessionStorage:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",localStorage:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",indexeddb:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",opfs:"https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system"},Oe=L("storages");function Le(){var e,t="function"==typeof(null===(e=navigator.storage)||void 0===e?void 0:e.getDirectory),r=[[O(Re||(Re=n(["<",' theme="white" href="','">Cookies<//>'],["<",' theme="white" href="','">Cookies<//>'])),Me,Fe.cookies),oe(navigator.cookieEnabled)],[O(We||(We=n(["<",' theme="white" href="','">Local storage<//>'],["<",' theme="white" href="','">Local storage<//>'])),Me,Fe.localStorage),oe(Boolean(window.localStorage))],[O(Te||(Te=n(["<",' theme="white" href="','">Session storage<//>'],["<",' theme="white" href="','">Session storage<//>'])),Me,Fe.sessionStorage),oe(Boolean(window.sessionStorage))],[O(Ee||(Ee=n(["<",' theme="white" href="','">IndexedDB<//>'],["<",' theme="white" href="','">IndexedDB<//>'])),Me,Fe.indexeddb),oe(Boolean(window.indexedDB))],[O(Ge||(Ge=n(["<",' theme="white" href="','">Origin private file system<//>'],["<",' theme="white" href="','">Origin private file system<//>'])),Me,Fe.opfs),oe(t)]];return O(Be||(Be=n(['\n        <div class="','">\n            <',' items="','" />\n\n            <div class="','">\n                <',"><//>\n            </div>\n        </div>\n    "],['\n        <div class="','">\n            <',' items="','" />\n\n            <div class="','">\n                <',"><//>\n            </div>\n        </div>\n    "])),Oe(),re,r,Oe("features"),xe)}var Ve="undefined"!=typeof document,ze="undefined"!=typeof window,je="undefined"!=typeof navigator,qe="undefined"!=typeof screen;var Ke=1;function $e(e,n){return(e||"").slice(0,n)}function Ye(){return Math.floor(Math.random()*(1<<30))}var Je=512;function Qe(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function Xe(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return Qe(t,n,e[n])})),Qe(t,"rn",Ye()),Qe(t,"c",!!je&&navigator.cookieEnabled),Qe(t,"s",qe?[screen.width,screen.height,screen.colorDepth].join("x"):""),Qe(t,"sk",ze&&window.devicePixelRatio||Ke),Qe(t,"w",ze?[window.innerWidth,window.innerHeight].join("x"):""),Qe(t,"en",Ve&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Qe(t,"et",r),Qe(t,"st",r),Qe(t,"t",$e(n,Je)),t.join(":")}var Ze,en,nn=1024;function tn(e){return $e(e,nn)}function rn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":Xe(n,r.title),rn:Ye(),ut:r.ut};r.url&&(o["page-url"]=tn(r.url)),r.referrer&&(o["page-ref"]=tn(r.referrer)),rn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:Ve?document.referrer:"",title:Ve?document.title:"",url:ze&&window.location?window.location.href:""},params:Ze}),function(e){K=e}((en=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==en&&"ru"!==en&&(en="en"),en));var on,an=L("footer");function un(){return O(on||(on=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),an(),an("item"),an("l1"),an("l2"),an("l3"),an("l4"),an("l5"),an("l6"),an("item",{g:!0}),an("G"),an("i"),an("t"),an("H"),an("u"),an("b"))}var sn,_n,ln=L("main-menu");function cn(e){return O(_n||(_n=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ln(),e.items.filter((function(e){return!e.hidden})).map((function(e){return O(sn||(sn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),ln("item",{selected:e.selected}),e.url,e.title)})))}var dn,pn,fn,hn,vn=[{header:"Can I watch video",menuTitle:{en:"Video & audio",ru:"Видео и аудио"},id:"index",url:"./"},{header:"Screen",menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{header:"Camera",menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{header:"GPU",menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{header:"Gamepad",menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{header:"Storage",menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{header:"Network",menuTitle:{en:"Network",ru:"Сеть"},id:"network",url:"./network.html"},{header:"Battery",menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"}];function mn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=vn.map((function(n){return e(e({},n),{title:(r=n.menuTitle,r[K]),selected:n.id===t});var r}));return O(dn||(dn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),cn,r)}function gn(e){return O(pn||(pn=n(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),mn,e.children,un)}!function(e,n,o){var i,a,u,s;r.__&&r.__(e,n),a=(i="function"==typeof o)?null:n.__k,u=[],s=[],x(n,e=(!i&&o||n).__k=g(w,null,[e]),a||d,d,n.namespaceURI,!i&&o?[o]:a?null:n.firstChild?t.call(n.childNodes):null,u,!i&&o?o:a?a.__e:n.firstChild,i,s),R(u,e,s)}(O(hn||(hn=n(["<"," //>"],["<"," //>"])),(function(){return O(fn||(fn=n(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"])),gn,q,Y("Storages"),Le)})),document.querySelector(".page"))}));
