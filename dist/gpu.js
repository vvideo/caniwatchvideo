!function(n){"function"==typeof define&&define.amd?define(n):n()}((function(){"use strict";var n=function(){return n=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},n.apply(this,arguments)};function e(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,u,s,_,l,c,p={},d=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(n,e){for(var t in e)n[t]=e[t];return n}function m(n){var e=n.parentNode;e&&e.removeChild(n)}function g(n,e,r){var o,i,a,u={};for(a in e)"key"==a?o=e[a]:"ref"==a?i=e[a]:u[a]=e[a];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(a in n.defaultProps)void 0===u[a]&&(u[a]=n.defaultProps[a]);return y(n,u,o,i,null)}function y(n,e,t,i,a){var u={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(u),u}function b(n){return n.children}function w(n,e){this.props=n,this.context=e}function k(n,e){if(null==e)return n.__?k(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?k(n):null}function P(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return P(n)}}function C(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!S.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||u)(S)}function S(){var n,e,t,o,a,u,_,l;for(i.sort(s);n=i.shift();)n.__d&&(e=i.length,o=void 0,u=(a=(t=n).__v).__e,_=[],l=[],t.__P&&((o=v({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),U(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[u]:null,_,null==u?k(a):u,!!(32&a.__u),l),o.__v=a.__v,o.__.__k[o.__i]=o,G(_,o,l),o.__e!=u&&P(o)),i.length>e&&i.sort(s));S.__r=0}function I(n,e,t,r,o,i,a,u,s,_,l){var c,f,h,v,m,g=r&&r.__k||d,y=e.length;for(t.__d=s,H(t,e,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?p:g[h.__i]||p,h.__i=c,U(n,h,f,o,i,a,u,s,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&M(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=k(f)),s=A(h,s,n)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(n,e,t){var r,o,i,a,u,s=e.length,_=t.length,l=_,c=0;for(n.__k=[],r=0;r<s;r++)a=r+c,null!=(o=n.__k[r]=null==(o=e[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=n,o.__b=n.__b+1,u=N(o,t,a,l),o.__i=u,i=null,-1!==u&&(l--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u===a+1?c++:u>a?l>s-a?c+=u-a:c--:u<a?u==a-1&&(c=u-a):c=0,u!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=k(i)),R(i,i,!1),t[a]=null,l--);if(l)for(r=0;r<_;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=k(i)),R(i,i))}function A(n,e,t){var r,o;if("function"==typeof n.type){for(r=n.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=n,e=A(r[o],e,t));return e}n.__e!=e&&(t.insertBefore(n.__e,e||null),e=n.__e);do{e=e&&e.nextSibling}while(null!=e&&8===e.nodeType);return e}function N(n,e,t,r){var o=n.key,i=n.type,a=t-1,u=t+1,s=e[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;a>=0||u<e.length;){if(a>=0){if((s=e[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a--}if(u<e.length){if((s=e[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function D(n,e,t){"-"===e[0]?n.setProperty(e,null==t?"":t):n[e]=null==t?"":"number"!=typeof t||f.test(e)?t:t+"px"}function x(n,e,t,r,o){var i;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||D(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||D(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||"onFocusOut"===e||"onFocusIn"===e?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t.u=r.u:(t.u=_,n.addEventListener(e,i?c:l,i)):n.removeEventListener(e,i?c:l,i);else{if("http://www.w3.org/2000/svg"==o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=e&&"height"!=e&&"href"!=e&&"list"!=e&&"form"!=e&&"tabIndex"!=e&&"download"!=e&&"rowSpan"!=e&&"colSpan"!=e&&"role"!=e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==e[4]?n.removeAttribute(e):n.setAttribute(e,t))}}function E(n){return function(e){if(this.l){var t=this.l[e.type+n];if(null==e.t)e.t=_++;else if(e.t<t.u)return;return t(r.event?r.event(e):e)}}}function U(n,e,o,i,a,u,s,_,l,c){var d,f,g,y,P,C,S,H,A,N,D,E,U,G,M,R=e.type;if(void 0!==e.constructor)return null;128&o.__u&&(l=!!(32&o.__u),u=[_=e.__e=o.__e]),(d=r.__b)&&d(e);n:if("function"==typeof R)try{if(H=e.props,A=(d=R.contextType)&&i[d.__c],N=d?A?A.props.value:d.__:i,o.__c?S=(f=e.__c=o.__c).__=f.__E:("prototype"in R&&R.prototype.render?e.__c=f=new R(H,N):(e.__c=f=new w(H,N),f.constructor=R,f.render=T),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=N,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=R.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,R.getDerivedStateFromProps(H,f.__s))),y=f.props,P=f.state,f.__v=e,g)null==R.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==R.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,N),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,N)||e.__v===o.__v)){for(e.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.forEach((function(n){n&&(n.__=e)})),D=0;D<f._sb.length;D++)f.__h.push(f._sb[D]);f._sb=[],f.__h.length&&s.push(f);break n}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,N),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,P,C)}))}if(f.context=N,f.props=H,f.__P=n,f.__e=!1,E=r.__r,U=0,"prototype"in R&&R.prototype.render){for(f.state=f.__s,f.__d=!1,E&&E(e),d=f.render(f.props,f.state,f.context),G=0;G<f._sb.length;G++)f.__h.push(f._sb[G]);f._sb=[]}else do{f.__d=!1,E&&E(e),d=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++U<25);f.state=f.__s,null!=f.getChildContext&&(i=v(v({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(C=f.getSnapshotBeforeUpdate(y,P)),I(n,h(M=null!=d&&d.type===b&&null==d.key?d.props.children:d)?M:[M],e,o,i,a,u,s,_,l,c),f.base=e.__e,e.__u&=-161,f.__h.length&&s.push(f),S&&(f.__E=f.__=null)}catch(n){e.__v=null,l||null!=u?(e.__e=_,e.__u|=l?160:32,u[u.indexOf(_)]=null):(e.__e=o.__e,e.__k=o.__k),r.__e(n,e,o)}else null==u&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=function(n,e,r,o,i,a,u,s,_){var l,c,d,f,v,g,y,b=r.props,w=e.props,P=e.type;if("svg"===P?i="http://www.w3.org/2000/svg":"math"===P?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(l=0;l<a.length;l++)if((v=a[l])&&"setAttribute"in v==!!P&&(P?v.localName===P:3===v.nodeType)){n=v,a[l]=null;break}if(null==n){if(null===P)return document.createTextNode(w);n=document.createElementNS(i,P,w.is&&w),a=null,s=!1}if(null===P)b===w||s&&n.data===w||(n.data=w);else{if(a=a&&t.call(n.childNodes),b=r.props||p,!s&&null!=a)for(b={},l=0;l<n.attributes.length;l++)b[(v=n.attributes[l]).name]=v.value;for(l in b)if(v=b[l],"children"==l);else if("dangerouslySetInnerHTML"==l)d=v;else if("key"!==l&&!(l in w)){if("value"==l&&"defaultValue"in w||"checked"==l&&"defaultChecked"in w)continue;x(n,l,null,v,i)}for(l in w)v=w[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||s&&"function"!=typeof v||b[l]===v||x(n,l,v,b[l],i);if(c)s||d&&(c.__html===d.__html||c.__html===n.innerHTML)||(n.innerHTML=c.__html),e.__k=[];else if(d&&(n.innerHTML=""),I(n,h(f)?f:[f],e,r,o,"foreignObject"===P?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:r.__k&&k(r,0),s,_),null!=a)for(l=a.length;l--;)null!=a[l]&&m(a[l]);s||(l="value",void 0!==g&&(g!==n[l]||"progress"===P&&!g||"option"===P&&g!==b[l])&&x(n,l,g,b[l],i),l="checked",void 0!==y&&y!==n[l]&&x(n,l,y,b[l],i))}return n}(o.__e,e,o,i,a,u,s,l,c);(d=r.diffed)&&d(e)}function G(n,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)M(t[o],t[++o],t[++o]);r.__c&&r.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){r.__e(n,e.__v)}}))}function M(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){r.__e(n,t)}}function R(n,e,t){var o,i;if(r.unmount&&r.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||M(o,null,e)),null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){r.__e(n,e)}o.base=o.__P=null}if(o=n.__k)for(i=0;i<o.length;i++)o[i]&&R(o[i],e,t||"function"!=typeof n.type);t||null==n.__e||m(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function T(n,e,t){return this.constructor(n,t)}t=d.slice,r={__e:function(n,e,t,r){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(n)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(n,r||{}),a=o.__d),a)return o.__E=o}catch(e){n=e}throw n}},o=0,w.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof n&&(n=n(v({},t),this.props)),n&&v(t,n),null!=n&&this.__v&&(e&&this._sb.push(e),C(this))},w.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),C(this))},w.prototype.render=b,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(n,e){return n.__v.__b-e.__v.__b},S.__r=0,_=0,l=E(!1),c=E(!0);var W=function(n,e,t,r){var o;e[0]=0;for(var i=1;i<e.length;i++){var a=e[i++],u=e[i]?(e[0]|=a?1:2,t[e[i++]]):e[++i];3===a?r[0]=u:4===a?r[1]=Object.assign(r[1]||{},u):5===a?(r[1]=r[1]||{})[e[++i]]=u:6===a?r[1][e[++i]]+=u+"":a?(o=n.apply(u,W(n,u,t,["",null])),r.push(o),u[0]?e[0]|=2:(e[i-2]=0,e[i]=o)):r.push(u)}return r},F=new Map;var B=function(n){var e=F.get(this);return e||(e=new Map,F.set(this,e)),(e=W(this,e.get(n)||(e.set(n,e=function(n){for(var e,t,r=1,o="",i="",a=[0],u=function(n){1===r&&(n||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,n,o):3===r&&(n||o)?(a.push(3,n,o),r=2):2===r&&"..."===o&&n?a.push(4,n,0):2===r&&o&&!n?a.push(5,0,!0,o):r>=5&&((o||!n&&5===r)&&(a.push(r,0,o,t),r=6),n&&(a.push(r,n,0,t),r=6)),o=""},s=0;s<n.length;s++){s&&(1===r&&u(),u(s));for(var _=0;_<n[s].length;_++)e=n[s][_],1===r?"<"===e?(u(),a=[a],r=3):o+=e:4===r?"--"===o&&">"===e?(r=1,o=""):o=e+o[0]:i?e===i?i="":o+=e:'"'===e||"'"===e?i=e:">"===e?(u(),r=1):r&&("="===e?(r=5,t=o,o=""):"/"===e&&(r<5||">"===n[s][_+1])?(u(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(u(),r=2):o+=e),3===r&&"!--"===o&&(r=4,a=a[0])}return u(),a}(n)),e),arguments,[])).length>1?e:e[0]}.bind(g),V="undefined"!=typeof document,L="undefined"!=typeof window,O="undefined"!=typeof navigator,j="undefined"!=typeof screen;var K=1;function q(n,e){return(n||"").slice(0,e)}function $(){return Math.floor(Math.random()*(1<<30))}var z=512;function Y(n,e,t){(t||0===t)&&n.push(e+":"+(!0===t?"1":t))}function J(n,e){var t=[];n&&Object.keys(n).forEach((function(e){return Y(t,e,n[e])})),Y(t,"rn",$()),Y(t,"c",!!O&&navigator.cookieEnabled),Y(t,"s",j?[screen.width,screen.height,screen.colorDepth].join("x"):""),Y(t,"sk",L&&window.devicePixelRatio||K),Y(t,"w",L?[window.innerWidth,window.innerHeight].join("x"):""),Y(t,"en",V&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Y(t,"et",r),Y(t,"st",r),Y(t,"t",q(e,z)),t.join(":")}var Q=1024;function X(n){return q(n,Q)}function Z(n,e){var t,r="https://mc.yandex.ru/watch/"+n+"?"+(t=e,Object.keys(t).filter((function(n){return t[n]||0===t[n]})).map((function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var nn,en,tn,rn={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"}};function on(n){var e=rn[n];if(!e)return console.error('Not found key "'.concat(n,'" in getText().')),n;var t=e[nn];return void 0===t?(console.error('Not found key "'.concat(n,'", lang "').concat(nn,'" in getText().')),n):t}function an(n){return function(e,t){if(!e)return n;var r=n;return"string"==typeof e?(r=n+"__"+e,t&&(r=un(r,t)),r):(e&&(r=un(r,e)),r)}}function un(n,e){var t=n;return Object.keys(e).forEach((function(r){var o=e[r];!1!==o&&null!=o&&""!==o&&(t+=" "+n+"_",!0===e[r]?t+=r:t+=r+"_"+o)})),t}"localhost"!==window.location.host&&function(n){var e=n.browserInfo,t=n.counterId,r=n.pageParams,o={"browser-info":J(e,r.title),rn:$(),ut:r.ut};r.url&&(o["page-url"]=X(r.url)),r.referrer&&(o["page-ref"]=X(r.referrer)),Z(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:V?document.referrer:"",title:V?document.title:"",url:L&&window.location?window.location.href:""},params:en}),function(n){nn=n}((tn=function(){for(var n=window.location.search.slice(1).split("&"),e=0;e<n.length;e++){var t=n[e].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==tn&&"ru"!==tn&&(tn="en"),tn));var sn,_n=an("header");function ln(n){return B(sn||(sn=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),_n(),n.children)}var cn,pn=an("footer");function dn(){return B(cn||(cn=e(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),pn(),pn("item"),pn("l1"),pn("l2"),pn("l3"),pn("l4"),pn("l5"),pn("l6"),pn("item",{g:!0}),pn("G"),pn("i"),pn("t"),pn("H"),pn("u"),pn("b"))}var fn,hn,vn,mn,gn=0,yn=[],bn=[],wn=r,kn=wn.__b,Pn=wn.__r,Cn=wn.diffed,Sn=wn.__c,In=wn.unmount,Hn=wn.__;function An(n,e){wn.__h&&wn.__h(hn,n,gn||e),gn=0;var t=hn.__H||(hn.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:bn}),t.__[n]}function Nn(n){return gn=1,function(n,e,t){var r=An(fn++,2);if(r.t=n,!r.__c&&(r.__=[Fn(void 0,e),function(n){var e=r.__N?r.__N[0]:r.__[0],t=r.t(e,n);e!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=hn,!hn.u)){var o=function(n,e,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(n){return!!n.__c}));if(o.every((function(n){return!n.__N})))return!i||i.call(this,n,e,t);var a=!1;return o.forEach((function(n){if(n.__N){var e=n.__[0];n.__=n.__N,n.__N=void 0,e!==n.__[0]&&(a=!0)}})),!(!a&&r.__c.props===n)&&(!i||i.call(this,n,e,t))};hn.u=!0;var i=hn.shouldComponentUpdate,a=hn.componentWillUpdate;hn.componentWillUpdate=function(n,e,t){if(this.__e){var r=i;i=void 0,o(n,e,t),i=r}a&&a.call(this,n,e,t)},hn.shouldComponentUpdate=o}return r.__N||r.__}(Fn,n)}function Dn(n){return gn=5,xn((function(){return{current:n}}),[])}function xn(n,e){var t=An(fn++,7);return Wn(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function En(n,e){return gn=8,xn((function(){return n}),e)}function Un(){for(var n;n=yn.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Rn),n.__H.__h.forEach(Tn),n.__H.__h=[]}catch(e){n.__H.__h=[],wn.__e(e,n.__v)}}wn.__b=function(n){hn=null,kn&&kn(n)},wn.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Hn&&Hn(n,e)},wn.__r=function(n){Pn&&Pn(n),fn=0;var e=(hn=n.__c).__H;e&&(vn===hn?(e.__h=[],hn.__h=[],e.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=bn,n.__N=n.i=void 0}))):(e.__h.forEach(Rn),e.__h.forEach(Tn),e.__h=[],fn=0)),vn=hn},wn.diffed=function(n){Cn&&Cn(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(1!==yn.push(e)&&mn===wn.requestAnimationFrame||((mn=wn.requestAnimationFrame)||Mn)(Un)),e.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==bn&&(n.__=n.__V),n.i=void 0,n.__V=bn}))),vn=hn=null},wn.__c=function(n,e){e.some((function(n){try{n.__h.forEach(Rn),n.__h=n.__h.filter((function(n){return!n.__||Tn(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],wn.__e(t,n.__v)}})),Sn&&Sn(n,e)},wn.unmount=function(n){In&&In(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{Rn(n)}catch(n){e=n}})),t.__H=void 0,e&&wn.__e(e,t.__v))};var Gn="function"==typeof requestAnimationFrame;function Mn(n){var e,t=function(){clearTimeout(r),Gn&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);Gn&&(e=requestAnimationFrame(t))}function Rn(n){var e=hn,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),hn=e}function Tn(n){var e=hn;n.__c=n.__(),hn=e}function Wn(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function Fn(n,e){return"function"==typeof e?e(n):e}var Bn,Vn=an("radio-button");function Ln(n){var t=En((function(){var e;null===(e=n.onClick)||void 0===e||e.call(n,n.value)}),[n.onClick]);return B(Bn||(Bn=e(['\n        <span\n            class="','"\n            onClick="','"\n            key="','"\n        >',"</span>\n    "],['\n        <span\n            class="','"\n            onClick="','"\n            key="','"\n        >',"</span>\n    "])),Vn({selected:n.selected}),t,n.value,n.text)}var On,jn,Kn,qn=an("radio-buttons");function $n(n){var t=n.buttons,r=n.label,o=n.onSelect,i=function(n){var e=n.find((function(n){return n.selected}));return null!=e?e:n[0]}(t),a=Nn(i?i.value:void 0),u=a[0],s=a[1],_=En((function(n){s(n),o(n)}),[o]);return B(jn||(jn=e(['\n        <div class="','">\n            <div class="','">',"</div>\n            ","\n        </div>\n    "],['\n        <div class="','">\n            <div class="','">',"</div>\n            ","\n        </div>\n    "])),qn(),qn("label"),r,t.map((function(n){return B(On||(On=e(["<",'\n                        selected="','"\n                        text="','"\n                        value="','"\n                        onClick="','"\n                    ><//>'],["<",'\n                        selected="','"\n                        text="','"\n                        value="','"\n                        onClick="','"\n                    ><//>'])),Ln,n.value===u,n.text,n.value,_)})))}function zn(n){if(!n)return{};var e={};for(var t in n)e[t]=n[t];return e}function Yn(n){if(!n)return[];var e=[];return n.forEach((function(n){e.push(n)})),e.sort()}function Jn(n){return B(Kn||(Kn=e(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),n.children)}var Qn,Xn=an("row");function Zn(n){return B(Qn||(Qn=e(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Xn(),Xn("category"),n.name,Xn("body"),n.children)}var ne,ee,te,re,oe,ie,ae,ue,se,_e,le,ce,pe,de,fe,he,ve,me,ge=an("tree-list"),ye={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function be(n,t,r){return void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof n?B(ne||(ne=e(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),ge("string"),n):"number"==typeof n?B(ee||(ee=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ge("number"),n):"bigint"==typeof n?B(te||(te=e(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),ge("bigint"),n):"boolean"==typeof n?B(re||(re=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ge("boolean"),String(n)):"function"==typeof n?B(oe||(oe=e(['<span class="','">function</span>'],['<span class="','">function</span>'])),ge("function")):"symbol"==typeof n?B(ie||(ie=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ge("symbol"),n):void 0===n?B(ae||(ae=e(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),ge("undefined")):null===n?B(ue||(ue=e(['<span class="','">null</span>'],['<span class="','">null</span>'])),ge("null")):Array.isArray(n)?t.compactArrayWithSimpleTypes&&n.every((function(n){return null===n||ye[typeof n]}))?B(_e||(_e=e(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",n.map((function(n,o){return B(se||(se=e(["","",""],["","",""])),o?", ":"",be(n,t,r+1))}))," "):B(pe||(pe=e(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),n.map((function(o,i){var a=t.showArrayIndex?B(le||(le=e([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),ge("index"),i):"";return B(ce||(ce=e(["<li>","","","</li>"],["<li>","","","</li>"])),a,be(o,t,r+1),i===n.length-1?"":",")}))):t.compactObject&&r>0?B(fe||(fe=e(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(n).map((function(o,i,a){return B(de||(de=e(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),ge("property"),o,be(n[o],t,r+1),i===a.length-1?"":", ")}))," "):B(ve||(ve=e(["{<ul>\n        ","\n    </ul>}"],["{<ul>\n        ","\n    </ul>}"])),Object.keys(n).map((function(o,i,a){return B(he||(he=e(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),ge("property"),o,be(n[o],t,r+1),i===a.length-1?"":",")})))}function we(n){return B(me||(me=e(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Zn,n.title,ge(),be(n.data,n.options))}var ke,Pe,Ce,Se=[{text:"Low power",value:"low-power"},{text:"High performance",value:"high-performance",selected:!0}],Ie=an("gpu-navigator");function He(){var n=Nn(!1),t=n[0],r=n[1],o=Nn(!1);o[0];var i=o[1],a=Nn("high-performance"),u=a[0],s=a[1],_=Dn(),l=Dn(),c=En((function(n){s(n)}),[]);!function(n,e){var t=An(fn++,3);!wn.__s&&Wn(t.__H,e)&&(t.__=n,t.i=e,hn.__H.__h.push(t))}((function(){navigator.gpu&&navigator.gpu.requestAdapter({powerPreference:u}).then((function(n){if(_.current=n,r(!0),n)return n.info?(l.current=n.info,void i(!0)):void n.requestAdapterInfo().then((function(n){l.current=n,i(!0)})).catch((function(n){console.error(n)}))})).catch((function(n){console.error(n)}))}),[u]);var p,d={info:(p=l.current,p?{vendor:p.vendor,architecture:p.architecture,description:p.description,device:p.device}:{}),isFallbackAdapter:_.current&&_.current.isFallbackAdapter,limits:zn(_.current&&_.current.limits),features:Yn(_.current&&_.current.features)};return navigator.gpu?null===t?B(Pe||(Pe=e(["<",">","<//>"],["<",">","<//>"])),Jn,on("GPU Adapter is not found.")):t?B(Ce||(Ce=e(['\n        <div class="','">\n            <div class="','">\n                <','\n                    label="Power preference:"\n                    buttons="','"\n                    onSelect="','"\n                ><//>\n            </div>\n\n            <',' title="Adapter" data=',"><//>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','">\n                <','\n                    label="Power preference:"\n                    buttons="','"\n                    onSelect="','"\n                ><//>\n            </div>\n\n            <',' title="Adapter" data=',"><//>\n        </div>\n    "])),Ie(),Ie("controls"),$n,Se,c,we,d):"...":B(ke||(ke=e(["<",">","<//>"],["<",">","<//>"])),Jn,on("WebGPU is not supported."))}var Ae,Ne,De=an("main-menu");function xe(n){return B(Ne||(Ne=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),De(),n.items.filter((function(n){return!n.hidden})).map((function(n){return B(Ae||(Ae=e(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),De("item",{selected:n.selected}),n.url,n.title)})))}var Ee,Ue=[{header:"Can I watch video",menuTitle:{en:"Video & audio",ru:"Видео и аудио"},id:"index",url:"./"},{header:"Screen",menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{header:"GPU",menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{header:"Gamepad",menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{header:"Storage",menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{header:"Network",menuTitle:{en:"Network",ru:"Сеть"},id:"network",url:"./network.html"},{header:"Battery",menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"}];function Ge(){var t=function(){var n=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return n||"index"}(),r=Ue.map((function(e){return n(n({},e),{title:(r=e.menuTitle,r[nn]),selected:e.id===t});var r}));return B(Ee||(Ee=e(["<",' items="','"><//>'],["<",' items="','"><//>'])),xe,r)}function Me(){const n=document.createElement("canvas");try{const e=n.getContext("webgl")||n.getContext("experimental-webgl");if(e){const n=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(n.UNMASKED_VENDOR_WEBGL)}}catch(n){}return""}function Re(){const n=document.createElement("canvas");try{const e=n.getContext("webgl")||n.getContext("experimental-webgl");if(e){const n=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(n.UNMASKED_RENDERER_WEBGL)}}catch(n){}return""}var Te,We,Fe,Be,Ve=an("list");function Le(n){var t=n.items.filter((function(n){if(1===n.length)return!0;n[0];var e=n[1];return void 0!==e&&""!==e})).map((function(n){var e=n[0],t=n[1];return 1===n.length?[e]:[e,"boolean"==typeof t?String(t):t]}));return t.length?B(Fe||(Fe=e(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),Zn,n.title,Ve(),t.map((function(n){var t=n[0],r=n[1];return 1===n.length?B(Te||(Te=e(["<li>","</li>"],["<li>","</li>"])),t):B(We||(We=e(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}function Oe(){var n=[["Vendor",Me()],["Renderer",Re()]].filter((function(n){return Boolean(n[1])}));return B(Be||(Be=e(["<",' title="WebGL context" items="','" //>'],["<",' title="WebGL context" items="','" //>'])),Le,n)}var je,Ke,qe=an("gpu-page");!function(n,e,o){var i,a,u,s;r.__&&r.__(n,e),a=(i="function"==typeof o)?null:e.__k,u=[],s=[],U(e,n=(!i&&o||e).__k=g(b,null,[n]),a||p,p,e.namespaceURI,!i&&o?[o]:a?null:e.firstChild?t.call(e.childNodes):null,u,!i&&o?o:a?a.__e:e.firstChild,i,s),G(u,n,s)}(B(Ke||(Ke=e(["<"," //>"],["<"," //>"])),(function(){return B(je||(je=e(['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","\n            <//>\n\n            <","><//>\n\n            <","><//>\n\n            <","><//>\n        </div>"],['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","\n            <//>\n\n            <","><//>\n\n            <","><//>\n\n            <","><//>\n        </div>"])),qe(),Ge,ln,on("WebGPU"),Oe,He,dn)})),document.querySelector(".page"))}));
