!function(n){"function"==typeof define&&define.amd?define(n):n()}((function(){"use strict";function n(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var e,t,r,o,i,a,_,s,u,l,c={},p=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=Array.isArray;function h(n,e){for(var t in e)n[t]=e[t];return n}function v(n){var e=n.parentNode;e&&e.removeChild(n)}function m(n,t,r){var o,i,a,_={};for(a in t)"key"==a?o=t[a]:"ref"==a?i=t[a]:_[a]=t[a];if(arguments.length>2&&(_.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(a in n.defaultProps)void 0===_[a]&&(_[a]=n.defaultProps[a]);return g(n,_,o,i,null)}function g(n,e,o,i,a){var _={type:n,props:e,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++r:a,__i:-1,__u:0};return null==a&&null!=t.vnode&&t.vnode(_),_}function y(n){return n.children}function w(n,e){this.props=n,this.context=e}function b(n,e){if(null==e)return n.__?b(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?b(n):null}function k(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return k(n)}}function P(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!I.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||a)(I)}function I(){var n,e,r,i,a,s,u,l;for(o.sort(_);n=o.shift();)n.__d&&(e=o.length,i=void 0,s=(a=(r=n).__v).__e,u=[],l=[],r.__P&&((i=h({},a)).__v=a.__v+1,t.vnode&&t.vnode(i),M(r.__P,i,a,r.__n,r.__P.namespaceURI,32&a.__u?[s]:null,u,null==s?b(a):s,!!(32&a.__u),l),i.__v=a.__v,i.__.__k[i.__i]=i,x(u,i,l),i.__e!=s&&k(i)),o.length>e&&o.sort(_));I.__r=0}function S(n,e,t,r,o,i,a,_,s,u,l){var d,f,h,v,m,g=r&&r.__k||p,y=e.length;for(t.__d=s,C(t,e,g),s=t.__d,d=0;d<y;d++)null!=(h=t.__k[d])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?c:g[h.__i]||c,h.__i=d,M(n,h,f,o,i,a,_,s,u,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&E(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=b(f)),s=H(h,s,n)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function C(n,e,t){var r,o,i,a,_,s=e.length,u=t.length,l=u,c=0;for(n.__k=[],r=0;r<s;r++)a=r+c,null!=(o=n.__k[r]=null==(o=e[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):f(o)?g(y,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=n,o.__b=n.__b+1,_=A(o,t,a,l),o.__i=_,i=null,-1!==_&&(l--,(i=t[_])&&(i.__u|=131072)),null==i||null===i.__v?(-1==_&&c--,"function"!=typeof o.type&&(o.__u|=65536)):_!==a&&(_===a+1?c++:_>a?l>s-a?c+=_-a:c--:_<a?_==a-1&&(c=_-a):c=0,_!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=b(i)),G(i,i,!1),t[a]=null,l--);if(l)for(r=0;r<u;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=b(i)),G(i,i))}function H(n,e,t){var r,o;if("function"==typeof n.type){for(r=n.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=n,e=H(r[o],e,t));return e}n.__e!=e&&(t.insertBefore(n.__e,e||null),e=n.__e);do{e=e&&e.nextSibling}while(null!=e&&8===e.nodeType);return e}function A(n,e,t,r){var o=n.key,i=n.type,a=t-1,_=t+1,s=e[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;a>=0||_<e.length;){if(a>=0){if((s=e[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a--}if(_<e.length){if((s=e[_])&&!(131072&s.__u)&&o==s.key&&i===s.type)return _;_++}}return-1}function N(n,e,t){"-"===e[0]?n.setProperty(e,null==t?"":t):n[e]=null==t?"":"number"!=typeof t||d.test(e)?t:t+"px"}function D(n,e,t,r,o){var i;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||N(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||N(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||"onFocusOut"===e||"onFocusIn"===e?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t.u=r.u:(t.u=s,n.addEventListener(e,i?l:u,i)):n.removeEventListener(e,i?l:u,i);else{if("http://www.w3.org/2000/svg"==o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=e&&"height"!=e&&"href"!=e&&"list"!=e&&"form"!=e&&"tabIndex"!=e&&"download"!=e&&"rowSpan"!=e&&"colSpan"!=e&&"role"!=e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==e[4]?n.removeAttribute(e):n.setAttribute(e,t))}}function U(n){return function(e){if(this.l){var r=this.l[e.type+n];if(null==e.t)e.t=s++;else if(e.t<r.u)return;return r(t.event?t.event(e):e)}}}function M(n,r,o,i,a,_,s,u,l,p){var d,m,g,k,P,I,C,H,A,N,U,M,x,E,G,W=r.type;if(void 0!==r.constructor)return null;128&o.__u&&(l=!!(32&o.__u),_=[u=r.__e=o.__e]),(d=t.__b)&&d(r);n:if("function"==typeof W)try{if(H=r.props,A=(d=W.contextType)&&i[d.__c],N=d?A?A.props.value:d.__:i,o.__c?C=(m=r.__c=o.__c).__=m.__E:("prototype"in W&&W.prototype.render?r.__c=m=new W(H,N):(r.__c=m=new w(H,N),m.constructor=W,m.render=R),A&&A.sub(m),m.props=H,m.state||(m.state={}),m.context=N,m.__n=i,g=m.__d=!0,m.__h=[],m._sb=[]),null==m.__s&&(m.__s=m.state),null!=W.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=h({},m.__s)),h(m.__s,W.getDerivedStateFromProps(H,m.__s))),k=m.props,P=m.state,m.__v=r,g)null==W.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==W.getDerivedStateFromProps&&H!==k&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(H,N),!m.__e&&(null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(H,m.__s,N)||r.__v===o.__v)){for(r.__v!==o.__v&&(m.props=H,m.state=m.__s,m.__d=!1),r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(n){n&&(n.__=r)})),U=0;U<m._sb.length;U++)m.__h.push(m._sb[U]);m._sb=[],m.__h.length&&s.push(m);break n}null!=m.componentWillUpdate&&m.componentWillUpdate(H,m.__s,N),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(k,P,I)}))}if(m.context=N,m.props=H,m.__P=n,m.__e=!1,M=t.__r,x=0,"prototype"in W&&W.prototype.render){for(m.state=m.__s,m.__d=!1,M&&M(r),d=m.render(m.props,m.state,m.context),E=0;E<m._sb.length;E++)m.__h.push(m._sb[E]);m._sb=[]}else do{m.__d=!1,M&&M(r),d=m.render(m.props,m.state,m.context),m.state=m.__s}while(m.__d&&++x<25);m.state=m.__s,null!=m.getChildContext&&(i=h(h({},i),m.getChildContext())),g||null==m.getSnapshotBeforeUpdate||(I=m.getSnapshotBeforeUpdate(k,P)),S(n,f(G=null!=d&&d.type===y&&null==d.key?d.props.children:d)?G:[G],r,o,i,a,_,s,u,l,p),m.base=r.__e,r.__u&=-161,m.__h.length&&s.push(m),C&&(m.__E=m.__=null)}catch(n){r.__v=null,l||null!=_?(r.__e=u,r.__u|=l?160:32,_[_.indexOf(u)]=null):(r.__e=o.__e,r.__k=o.__k),t.__e(n,r,o)}else null==_&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(n,t,r,o,i,a,_,s,u){var l,p,d,h,m,g,y,w=r.props,k=t.props,P=t.type;if("svg"===P?i="http://www.w3.org/2000/svg":"math"===P?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(l=0;l<a.length;l++)if((m=a[l])&&"setAttribute"in m==!!P&&(P?m.localName===P:3===m.nodeType)){n=m,a[l]=null;break}if(null==n){if(null===P)return document.createTextNode(k);n=document.createElementNS(i,P,k.is&&k),a=null,s=!1}if(null===P)w===k||s&&n.data===k||(n.data=k);else{if(a=a&&e.call(n.childNodes),w=r.props||c,!s&&null!=a)for(w={},l=0;l<n.attributes.length;l++)w[(m=n.attributes[l]).name]=m.value;for(l in w)if(m=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)d=m;else if("key"!==l&&!(l in k)){if("value"==l&&"defaultValue"in k||"checked"==l&&"defaultChecked"in k)continue;D(n,l,null,m,i)}for(l in k)m=k[l],"children"==l?h=m:"dangerouslySetInnerHTML"==l?p=m:"value"==l?g=m:"checked"==l?y=m:"key"===l||s&&"function"!=typeof m||w[l]===m||D(n,l,m,w[l],i);if(p)s||d&&(p.__html===d.__html||p.__html===n.innerHTML)||(n.innerHTML=p.__html),t.__k=[];else if(d&&(n.innerHTML=""),S(n,f(h)?h:[h],t,r,o,"foreignObject"===P?"http://www.w3.org/1999/xhtml":i,a,_,a?a[0]:r.__k&&b(r,0),s,u),null!=a)for(l=a.length;l--;)null!=a[l]&&v(a[l]);s||(l="value",void 0!==g&&(g!==n[l]||"progress"===P&&!g||"option"===P&&g!==w[l])&&D(n,l,g,w[l],i),l="checked",void 0!==y&&y!==n[l]&&D(n,l,y,w[l],i))}return n}(o.__e,r,o,i,a,_,s,l,p);(d=t.diffed)&&d(r)}function x(n,e,r){e.__d=void 0;for(var o=0;o<r.length;o++)E(r[o],r[++o],r[++o]);t.__c&&t.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){t.__e(n,e.__v)}}))}function E(n,e,r){try{"function"==typeof n?n(e):n.current=e}catch(n){t.__e(n,r)}}function G(n,e,r){var o,i;if(t.unmount&&t.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||E(o,null,e)),null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){t.__e(n,e)}o.base=o.__P=null}if(o=n.__k)for(i=0;i<o.length;i++)o[i]&&G(o[i],e,r||"function"!=typeof n.type);r||null==n.__e||v(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function R(n,e,t){return this.constructor(n,t)}e=p.slice,t={__e:function(n,e,t,r){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(n)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(n,r||{}),a=o.__d),a)return o.__E=o}catch(e){n=e}throw n}},r=0,w.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},t),this.props)),n&&h(t,n),null!=n&&this.__v&&(e&&this._sb.push(e),P(this))},w.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this))},w.prototype.render=y,o=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=function(n,e){return n.__v.__b-e.__v.__b},I.__r=0,s=0,u=U(!1),l=U(!0);var W=function(n,e,t,r){var o;e[0]=0;for(var i=1;i<e.length;i++){var a=e[i++],_=e[i]?(e[0]|=a?1:2,t[e[i++]]):e[++i];3===a?r[0]=_:4===a?r[1]=Object.assign(r[1]||{},_):5===a?(r[1]=r[1]||{})[e[++i]]=_:6===a?r[1][e[++i]]+=_+"":a?(o=n.apply(_,W(n,_,t,["",null])),r.push(o),_[0]?e[0]|=2:(e[i-2]=0,e[i]=o)):r.push(_)}return r},T=new Map;var V=function(n){var e=T.get(this);return e||(e=new Map,T.set(this,e)),(e=W(this,e.get(n)||(e.set(n,e=function(n){for(var e,t,r=1,o="",i="",a=[0],_=function(n){1===r&&(n||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,n,o):3===r&&(n||o)?(a.push(3,n,o),r=2):2===r&&"..."===o&&n?a.push(4,n,0):2===r&&o&&!n?a.push(5,0,!0,o):r>=5&&((o||!n&&5===r)&&(a.push(r,0,o,t),r=6),n&&(a.push(r,n,0,t),r=6)),o=""},s=0;s<n.length;s++){s&&(1===r&&_(),_(s));for(var u=0;u<n[s].length;u++)e=n[s][u],1===r?"<"===e?(_(),a=[a],r=3):o+=e:4===r?"--"===o&&">"===e?(r=1,o=""):o=e+o[0]:i?e===i?i="":o+=e:'"'===e||"'"===e?i=e:">"===e?(_(),r=1):r&&("="===e?(r=5,t=o,o=""):"/"===e&&(r<5||">"===n[s][u+1])?(_(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(_(),r=2):o+=e),3===r&&"!--"===o&&(r=4,a=a[0])}return _(),a}(n)),e),arguments,[])).length>1?e:e[0]}.bind(m),F="undefined"!=typeof document,L="undefined"!=typeof window,B="undefined"!=typeof navigator,j="undefined"!=typeof screen;var O=1;function K(n,e){return(n||"").slice(0,e)}function q(){return Math.floor(Math.random()*(1<<30))}var z=512;function $(n,e,t){(t||0===t)&&n.push(e+":"+(!0===t?"1":t))}function Y(n,e){var t=[];n&&Object.keys(n).forEach((function(e){return $(t,e,n[e])})),$(t,"rn",q()),$(t,"c",!!B&&navigator.cookieEnabled),$(t,"s",j?[screen.width,screen.height,screen.colorDepth].join("x"):""),$(t,"sk",L&&window.devicePixelRatio||O),$(t,"w",L?[window.innerWidth,window.innerHeight].join("x"):""),$(t,"en",F&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return $(t,"et",r),$(t,"st",r),$(t,"t",K(e,z)),t.join(":")}var J=1024;function Q(n){return K(n,J)}function X(n,e){var t,r="https://mc.yandex.ru/watch/"+n+"?"+(t=e,Object.keys(t).filter((function(n){return t[n]||0===t[n]})).map((function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var Z,nn,en,tn={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Press any key on the 🎮 gamepad.":{en:"Press any key on the 🎮 gamepad.",ru:"Нажмите любую кнопку на 🎮 джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"}};function rn(n){var e=tn[n];if(!e)return console.error('Not found key "'.concat(n,'" in getText().')),n;var t=e[Z];return void 0===t?(console.error('Not found key "'.concat(n,'", lang "').concat(Z,'" in getText().')),n):t}function on(n){return function(e,t){if(!e)return n;var r=n;return"string"==typeof e?(r=n+"__"+e,t&&(r=an(r,t)),r):(e&&(r=an(r,e)),r)}}function an(n,e){var t=n;return Object.keys(e).forEach((function(r){var o=e[r];!1!==o&&null!=o&&""!==o&&(t+=" "+n+"_",!0===e[r]?t+=r:t+=r+"_"+o)})),t}"localhost"!==window.location.host&&function(n){var e=n.browserInfo,t=n.counterId,r=n.pageParams,o={"browser-info":Y(e,r.title),rn:q(),ut:r.ut};r.url&&(o["page-url"]=Q(r.url)),r.referrer&&(o["page-ref"]=Q(r.referrer)),X(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:F?document.referrer:"",title:F?document.title:"",url:L&&window.location?window.location.href:""},params:nn}),function(n){Z=n}((en=function(){for(var n=window.location.search.slice(1).split("&"),e=0;e<n.length;e++){var t=n[e].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==en&&"ru"!==en&&(en="en"),en));var _n,sn=on("header");function un(e){return V(_n||(_n=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),sn(),e.children)}var ln,cn=on("footer");function pn(){return V(ln||(ln=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),cn(),cn("item"),cn("l1"),cn("l2"),cn("l3"),cn("l4"),cn("l5"),cn("l6"),cn("item",{g:!0}),cn("G"),cn("i"),cn("t"),cn("H"),cn("u"),cn("b"))}var dn,fn=on("info-link");function hn(e){return V(dn||(dn=n(['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'],['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'])),fn(),fn("link"),e.href,e.title)}var vn,mn,gn=[{title:rn("Video & audio"),id:"index",url:"./"},{title:rn("Screen"),id:"screen",url:"./screen.html",hidden:!0},{title:"GPU",id:"gpu",url:"./gpu.html"},{title:rn("Gamepad"),id:"gamepad",url:"./gamepad.html"},{title:rn("Storage"),id:"storage",url:"./storage.html",hidden:!0},{title:rn("Network"),id:"network",url:"./network.html"},{title:rn("Battery"),id:"battery",url:"./battery.html"}],yn=on("main-menu");function wn(){var e=function(){var n=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return n||"index"}();return V(mn||(mn=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),yn(),gn.filter((function(n){return!n.hidden})).map((function(t){return V(vn||(vn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),yn("item",{active:t.id===e}),t.url,t.title)})))}var bn,kn,Pn,In,Sn=0,Cn=[],Hn=[],An=t,Nn=An.__b,Dn=An.__r,Un=An.diffed,Mn=An.__c,xn=An.unmount,En=An.__;function Gn(n,e){An.__h&&An.__h(kn,n,Sn||e),Sn=0;var t=kn.__H||(kn.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:Hn}),t.__[n]}function Rn(n){return Sn=1,function(n,e,t){var r=Gn(bn++,2);if(r.t=n,!r.__c&&(r.__=[Kn(void 0,e),function(n){var e=r.__N?r.__N[0]:r.__[0],t=r.t(e,n);e!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=kn,!kn.u)){var o=function(n,e,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(n){return!!n.__c}));if(o.every((function(n){return!n.__N})))return!i||i.call(this,n,e,t);var a=!1;return o.forEach((function(n){if(n.__N){var e=n.__[0];n.__=n.__N,n.__N=void 0,e!==n.__[0]&&(a=!0)}})),!(!a&&r.__c.props===n)&&(!i||i.call(this,n,e,t))};kn.u=!0;var i=kn.shouldComponentUpdate,a=kn.componentWillUpdate;kn.componentWillUpdate=function(n,e,t){if(this.__e){var r=i;i=void 0,o(n,e,t),i=r}a&&a.call(this,n,e,t)},kn.shouldComponentUpdate=o}return r.__N||r.__}(Kn,n)}function Wn(n,e){var t=Gn(bn++,7);return On(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function Tn(){for(var n;n=Cn.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Bn),n.__H.__h.forEach(jn),n.__H.__h=[]}catch(e){n.__H.__h=[],An.__e(e,n.__v)}}An.__b=function(n){kn=null,Nn&&Nn(n)},An.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),En&&En(n,e)},An.__r=function(n){Dn&&Dn(n),bn=0;var e=(kn=n.__c).__H;e&&(Pn===kn?(e.__h=[],kn.__h=[],e.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=Hn,n.__N=n.i=void 0}))):(e.__h.forEach(Bn),e.__h.forEach(jn),e.__h=[],bn=0)),Pn=kn},An.diffed=function(n){Un&&Un(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(1!==Cn.push(e)&&In===An.requestAnimationFrame||((In=An.requestAnimationFrame)||Ln)(Tn)),e.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==Hn&&(n.__=n.__V),n.i=void 0,n.__V=Hn}))),Pn=kn=null},An.__c=function(n,e){e.some((function(n){try{n.__h.forEach(Bn),n.__h=n.__h.filter((function(n){return!n.__||jn(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],An.__e(t,n.__v)}})),Mn&&Mn(n,e)},An.unmount=function(n){xn&&xn(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{Bn(n)}catch(n){e=n}})),t.__H=void 0,e&&An.__e(e,t.__v))};var Vn,Fn="function"==typeof requestAnimationFrame;function Ln(n){var e,t=function(){clearTimeout(r),Fn&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);Fn&&(e=requestAnimationFrame(t))}function Bn(n){var e=kn,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),kn=e}function jn(n){var e=kn;n.__c=n.__(),kn=e}function On(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function Kn(n,e){return"function"==typeof e?e(n):e}function qn(e){return V(Vn||(Vn=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var zn,$n=on("row");function Yn(e){return V(zn||(zn=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),$n(),$n("category"),e.name,$n("body"),e.children)}var Jn,Qn,Xn,Zn,ne,ee,te,re,oe,ie,ae,_e,se,ue=on("tree-list");function le(e){return"string"==typeof e?V(Jn||(Jn=n(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),ue("string"),e):"number"==typeof e?V(Qn||(Qn=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ue("number"),e):"bigint"==typeof e?V(Xn||(Xn=n(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),ue("bigint"),e):"boolean"==typeof e?V(Zn||(Zn=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ue("boolean"),String(e)):"function"==typeof e?V(ne||(ne=n(['<span class="','">function</span>'],['<span class="','">function</span>'])),ue("function")):"symbol"==typeof e?V(ee||(ee=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ue("symbol"),e):void 0===e?V(te||(te=n(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),ue("undefined")):null===e?V(re||(re=n(['<span class="','">null</span>'],['<span class="','">null</span>'])),ue("null")):Array.isArray(e)?V(ie||(ie=n(["<ul>\n            ","\n        </ul>"],["<ul>\n            ","\n        </ul>"])),e.map((function(e){return V(oe||(oe=n(["<li>","</li>"],["<li>","</li>"])),le(e))}))):V(_e||(_e=n(["<ul>\n        ","\n    </ul>"],["<ul>\n        ","\n    </ul>"])),Object.keys(e).map((function(t){return V(ae||(ae=n(['<li><span class="','">',": </span>","</div>"],['<li><span class="','">',": </span>","</div>"])),ue("property"),t,le(e[t]))})))}function ce(e){return V(se||(se=n(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Yn,e.title,ue(),le(e.data))}var pe,de,fe,he,ve=function(){var n=Rn({})[1];return function(n,e){return Sn=8,Wn((function(){return n}),e)}((function(){return n({})}),[])},me=on("gamepad-list");function ge(){if(!navigator.getGamepads)return V(pe||(pe=n(["<",">","<//>"],["<",">","<//>"])),qn,rn("🎮 Gamepad API is not supported."));var e=ve();!function(n,e){var t=Gn(bn++,3);!An.__s&&On(t.__H,e)&&(t.__=n,t.i=e,kn.__H.__h.push(t))}((function(){var n=function(){e()};return window.addEventListener("gamepadconnected",n),window.addEventListener("gamepaddisconnected",n),function(){window.removeEventListener("gamepadconnected",n),window.removeEventListener("gamepaddisconnected",n)}}),[]);var t=navigator.getGamepads().filter((function(n){return null!==n}));return t.length?V(fe||(fe=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),me(),t.map((function(e,t){var r={id:null==e?void 0:e.id,connected:null==e?void 0:e.connected,index:null==e?void 0:e.index,mapping:null==e?void 0:e.mapping};return V(de||(de=n(["<",' name="','" data="','"><//>'],["<",' name="','" data="','"><//>'])),ce,t,r)}))):V(he||(he=n(["<",">","<//>"],["<",">","<//>"])),qn,rn("Press any key on the 🎮 gamepad."))}var ye,we,be=on("gamepad-page");!function(n,r,o){var i,a,_,s;t.__&&t.__(n,r),a=(i="function"==typeof o)?null:r.__k,_=[],s=[],M(r,n=(!i&&o||r).__k=m(y,null,[n]),a||c,c,r.namespaceURI,!i&&o?[o]:a?null:r.firstChild?e.call(r.childNodes):null,_,!i&&o?o:a?a.__e:r.firstChild,i,s),x(_,n,s)}(V(we||(we=n(["<"," //>"],["<"," //>"])),(function(){return V(ye||(ye=n(['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API"><//>\n            <//>\n\n            <',"><//>\n\n            <","><//>\n        </div>"],['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API"><//>\n            <//>\n\n            <',"><//>\n\n            <","><//>\n        </div>"])),be(),wn,un,rn("Can I use 🎮 Gamepad API?"),hn,ge,pn)})),document.querySelector(".page"))}));
