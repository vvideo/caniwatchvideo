!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,s,u,_,l,c,p={},d=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,a,s={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:s[a]=n[a];if(arguments.length>2&&(s.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===s[a]&&(s[a]=e.defaultProps[a]);return y(e,s,o,i,null)}function y(e,n,t,i,a){var s={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(s),s}function b(e){return e.children}function w(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function I(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return I(e)}}function P(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!S.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||s)(S)}function S(){var e,n,t,o,a,s,_,l;for(i.sort(u);e=i.shift();)e.__d&&(n=i.length,o=void 0,s=(a=(t=e).__v).__e,_=[],l=[],t.__P&&((o=v({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),T(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[s]:null,_,null==s?k(a):s,!!(32&a.__u),l),o.__v=a.__v,o.__.__k[o.__i]=o,x(_,o,l),o.__e!=s&&I(o)),i.length>n&&i.sort(u));S.__r=0}function C(e,n,t,r,o,i,a,s,u,_,l){var c,f,h,v,m,g=r&&r.__k||d,y=n.length;for(t.__d=u,H(t,n,g),u=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?p:g[h.__i]||p,h.__i=c,T(e,h,f,o,i,a,s,u,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&R(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(u&&!u.isConnected&&(u=k(f)),u=A(h,u,e)):"function"==typeof h.type&&void 0!==h.__d?u=h.__d:v&&(u=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=u,t.__e=m}function H(e,n,t){var r,o,i,a,s,u=n.length,_=t.length,l=_,c=0;for(e.__k=[],r=0;r<u;r++)a=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,s=N(o,t,a,l),o.__i=s,i=null,-1!==s&&(l--,(i=t[s])&&(i.__u|=131072)),null==i||null===i.__v?(-1==s&&c--,"function"!=typeof o.type&&(o.__u|=65536)):s!==a&&(s===a+1?c++:s>a?l>u-a?c+=s-a:c--:s<a?s==a-1&&(c=s-a):c=0,s!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),G(i,i,!1),t[a]=null,l--);if(l)for(r=0;r<_;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),G(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function N(e,n,t,r){var o=e.key,i=e.type,a=t-1,s=t+1,u=n[t];if(null===u||u&&o==u.key&&i===u.type&&!(131072&u.__u))return t;if(r>(null==u||131072&u.__u?0:1))for(;a>=0||s<n.length;){if(a>=0){if((u=n[a])&&!(131072&u.__u)&&o==u.key&&i===u.type)return a;a--}if(s<n.length){if((u=n[s])&&!(131072&u.__u)&&o==u.key&&i===u.type)return s;s++}}return-1}function D(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function U(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||D(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||D(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=_,e.addEventListener(n,i?c:l,i)):e.removeEventListener(n,i?c:l,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function M(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=_++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function T(e,n,o,i,a,s,u,_,l,c){var d,f,g,y,I,P,S,H,A,N,D,M,T,x,R,G=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(l=!!(32&o.__u),s=[_=n.__e=o.__e]),(d=r.__b)&&d(n);e:if("function"==typeof G)try{if(H=n.props,A=(d=G.contextType)&&i[d.__c],N=d?A?A.props.value:d.__:i,o.__c?S=(f=n.__c=o.__c).__=f.__E:("prototype"in G&&G.prototype.render?n.__c=f=new G(H,N):(n.__c=f=new w(H,N),f.constructor=G,f.render=E),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=N,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=G.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,G.getDerivedStateFromProps(H,f.__s))),y=f.props,I=f.state,f.__v=n,g)null==G.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==G.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,N),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,N)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),D=0;D<f._sb.length;D++)f.__h.push(f._sb[D]);f._sb=[],f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,N),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,I,P)}))}if(f.context=N,f.props=H,f.__P=e,f.__e=!1,M=r.__r,T=0,"prototype"in G&&G.prototype.render){for(f.state=f.__s,f.__d=!1,M&&M(n),d=f.render(f.props,f.state,f.context),x=0;x<f._sb.length;x++)f.__h.push(f._sb[x]);f._sb=[]}else do{f.__d=!1,M&&M(n),d=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++T<25);f.state=f.__s,null!=f.getChildContext&&(i=v(v({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(P=f.getSnapshotBeforeUpdate(y,I)),C(e,h(R=null!=d&&d.type===b&&null==d.key?d.props.children:d)?R:[R],n,o,i,a,s,u,_,l,c),f.base=n.__e,n.__u&=-161,f.__h.length&&u.push(f),S&&(f.__E=f.__=null)}catch(e){n.__v=null,l||null!=s?(n.__e=_,n.__u|=l?160:32,s[s.indexOf(_)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==s&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,i,a,s,u,_){var l,c,d,f,v,g,y,b=r.props,w=n.props,I=n.type;if("svg"===I?i="http://www.w3.org/2000/svg":"math"===I?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(l=0;l<a.length;l++)if((v=a[l])&&"setAttribute"in v==!!I&&(I?v.localName===I:3===v.nodeType)){e=v,a[l]=null;break}if(null==e){if(null===I)return document.createTextNode(w);e=document.createElementNS(i,I,w.is&&w),a=null,u=!1}if(null===I)b===w||u&&e.data===w||(e.data=w);else{if(a=a&&t.call(e.childNodes),b=r.props||p,!u&&null!=a)for(b={},l=0;l<e.attributes.length;l++)b[(v=e.attributes[l]).name]=v.value;for(l in b)if(v=b[l],"children"==l);else if("dangerouslySetInnerHTML"==l)d=v;else if("key"!==l&&!(l in w)){if("value"==l&&"defaultValue"in w||"checked"==l&&"defaultChecked"in w)continue;U(e,l,null,v,i)}for(l in w)v=w[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||u&&"function"!=typeof v||b[l]===v||U(e,l,v,b[l],i);if(c)u||d&&(c.__html===d.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(d&&(e.innerHTML=""),C(e,h(f)?f:[f],n,r,o,"foreignObject"===I?"http://www.w3.org/1999/xhtml":i,a,s,a?a[0]:r.__k&&k(r,0),u,_),null!=a)for(l=a.length;l--;)null!=a[l]&&m(a[l]);u||(l="value",void 0!==g&&(g!==e[l]||"progress"===I&&!g||"option"===I&&g!==b[l])&&U(e,l,g,b[l],i),l="checked",void 0!==y&&y!==e[l]&&U(e,l,y,b[l],i))}return e}(o.__e,n,o,i,a,s,u,l,c);(d=r.diffed)&&d(n)}function x(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)R(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function R(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function G(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||R(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&G(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}t=d.slice,r={__e:function(e,n,t,r){for(var o,i,a;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(n){e=n}throw e}},o=0,w.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},w.prototype.render=b,i=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,n){return e.__v.__b-n.__v.__b},S.__r=0,_=0,l=M(!1),c=M(!0);var B=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var a=n[i++],s=n[i]?(n[0]|=a?1:2,t[n[i++]]):n[++i];3===a?r[0]=s:4===a?r[1]=Object.assign(r[1]||{},s):5===a?(r[1]=r[1]||{})[n[++i]]=s:6===a?r[1][n[++i]]+=s+"":a?(o=e.apply(s,B(e,s,t,["",null])),r.push(o),s[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(s)}return r},W=new Map;var F=function(e){var n=W.get(this);return n||(n=new Map,W.set(this,n)),(n=B(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",a=[0],s=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,o):3===r&&(e||o)?(a.push(3,e,o),r=2):2===r&&"..."===o&&e?a.push(4,e,0):2===r&&o&&!e?a.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(a.push(r,0,o,t),r=6),e&&(a.push(r,e,0,t),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&s(),s(u));for(var _=0;_<e[u].length;_++)n=e[u][_],1===r?"<"===n?(s(),a=[a],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(s(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[u][_+1])?(s(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(s(),r=2):o+=n),3===r&&"!--"===o&&(r=4,a=a[0])}return s(),a}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g),V="undefined"!=typeof document,O="undefined"!=typeof window,j="undefined"!=typeof navigator,L="undefined"!=typeof screen;var K=1;function q(e,n){return(e||"").slice(0,n)}function z(){return Math.floor(Math.random()*(1<<30))}var $=512;function Y(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function J(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return Y(t,n,e[n])})),Y(t,"rn",z()),Y(t,"c",!!j&&navigator.cookieEnabled),Y(t,"s",L?[screen.width,screen.height,screen.colorDepth].join("x"):""),Y(t,"sk",O&&window.devicePixelRatio||K),Y(t,"w",O?[window.innerWidth,window.innerHeight].join("x"):""),Y(t,"en",V&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Y(t,"et",r),Y(t,"st",r),Y(t,"t",q(n,$)),t.join(":")}var Q=1024;function X(e){return q(e,Q)}function Z(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var ee,ne,te,re={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"}};function oe(e){var n=re[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[ee];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(ee,'" in getText().')),e):t}function ie(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=ae(r,t)),r):(n&&(r=ae(r,n)),r)}}function ae(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":J(n,r.title),rn:z(),ut:r.ut};r.url&&(o["page-url"]=X(r.url)),r.referrer&&(o["page-ref"]=X(r.referrer)),Z(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:V?document.referrer:"",title:V?document.title:"",url:O&&window.location?window.location.href:""},params:ne}),function(e){ee=e}((te=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==te&&"ru"!==te&&(te="en"),te));var se,ue=ie("header");function _e(e){return F(se||(se=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ue(),e.children)}var le,ce=ie("footer");function pe(){return F(le||(le=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),ce(),ce("item"),ce("l1"),ce("l2"),ce("l3"),ce("l4"),ce("l5"),ce("l6"),ce("item",{g:!0}),ce("G"),ce("i"),ce("t"),ce("H"),ce("u"),ce("b"))}var de,fe=ie("info-link");function he(e){return F(de||(de=n(['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'],['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'])),fe(),fe("link"),e.href,e.title)}var ve,me,ge,ye,be=0,we=[],ke=[],Ie=r,Pe=Ie.__b,Se=Ie.__r,Ce=Ie.diffed,He=Ie.__c,Ae=Ie.unmount,Ne=Ie.__;function De(e,n){Ie.__h&&Ie.__h(me,e,be||n),be=0;var t=me.__H||(me.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:ke}),t.__[e]}function Ue(e){return be=1,function(e,n,t){var r=De(ve++,2);if(r.t=e,!r.__c&&(r.__=[Fe(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=me,!me.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var a=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(a=!0)}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};me.u=!0;var i=me.shouldComponentUpdate,a=me.componentWillUpdate;me.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}a&&a.call(this,e,n,t)},me.shouldComponentUpdate=o}return r.__N||r.__}(Fe,e)}function Me(e,n){var t=De(ve++,7);return We(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function Te(){for(var e;e=we.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ee),e.__H.__h.forEach(Be),e.__H.__h=[]}catch(n){e.__H.__h=[],Ie.__e(n,e.__v)}}Ie.__b=function(e){me=null,Pe&&Pe(e)},Ie.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Ne&&Ne(e,n)},Ie.__r=function(e){Se&&Se(e),ve=0;var n=(me=e.__c).__H;n&&(ge===me?(n.__h=[],me.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=ke,e.__N=e.i=void 0}))):(n.__h.forEach(Ee),n.__h.forEach(Be),n.__h=[],ve=0)),ge=me},Ie.diffed=function(e){Ce&&Ce(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==we.push(n)&&ye===Ie.requestAnimationFrame||((ye=Ie.requestAnimationFrame)||Ge)(Te)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==ke&&(e.__=e.__V),e.i=void 0,e.__V=ke}))),ge=me=null},Ie.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Ee),e.__h=e.__h.filter((function(e){return!e.__||Be(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],Ie.__e(t,e.__v)}})),He&&He(e,n)},Ie.unmount=function(e){Ae&&Ae(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{Ee(e)}catch(e){n=e}})),t.__H=void 0,n&&Ie.__e(n,t.__v))};var xe,Re="function"==typeof requestAnimationFrame;function Ge(e){var n,t=function(){clearTimeout(r),Re&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Re&&(n=requestAnimationFrame(t))}function Ee(e){var n=me,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),me=n}function Be(e){var n=me;e.__c=e.__(),me=n}function We(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function Fe(e,n){return"function"==typeof n?n(e):n}function Ve(e){return F(xe||(xe=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var Oe,je=ie("row");function Le(e){return F(Oe||(Oe=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),je(),je("category"),e.name,je("body"),e.children)}var Ke,qe,ze,$e,Ye,Je,Qe,Xe,Ze,en,nn,tn,rn,on,an,sn,un,_n,ln=ie("tree-list"),cn={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function pn(e,t,r){return void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof e?F(Ke||(Ke=n(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),ln("string"),e):"number"==typeof e?F(qe||(qe=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ln("number"),e):"bigint"==typeof e?F(ze||(ze=n(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),ln("bigint"),e):"boolean"==typeof e?F($e||($e=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ln("boolean"),String(e)):"function"==typeof e?F(Ye||(Ye=n(['<span class="','">function</span>'],['<span class="','">function</span>'])),ln("function")):"symbol"==typeof e?F(Je||(Je=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),ln("symbol"),e):void 0===e?F(Qe||(Qe=n(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),ln("undefined")):null===e?F(Xe||(Xe=n(['<span class="','">null</span>'],['<span class="','">null</span>'])),ln("null")):Array.isArray(e)?t.compactArrayWithSimpleTypes&&e.every((function(e){return null===e||cn[typeof e]}))?F(en||(en=n(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",e.map((function(e,o){return F(Ze||(Ze=n(["","",""],["","",""])),o?", ":"",pn(e,t,r+1))}))," "):F(rn||(rn=n(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),e.map((function(o,i){var a=t.showArrayIndex?F(nn||(nn=n([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),ln("index"),i):"";return F(tn||(tn=n(["<li>","","","</li>"],["<li>","","","</li>"])),a,pn(o,t,r+1),i===e.length-1?"":",")}))):t.compactObject&&r>0?F(an||(an=n(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(e).map((function(o,i,a){return F(on||(on=n(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),ln("property"),o,pn(e[o],t,r+1),i===a.length-1?"":", ")}))," "):F(un||(un=n(["{<ul>\n        ","\n    </ul>}"],["{<ul>\n        ","\n    </ul>}"])),Object.keys(e).map((function(o,i,a){return F(sn||(sn=n(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),ln("property"),o,pn(e[o],t,r+1),i===a.length-1?"":",")})))}function dn(e){return F(_n||(_n=n(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Le,e.title,ln(),pn(e.data,e.options))}var fn,hn,vn=ie("battery-badge");function mn(e){return F(hn||(hn=n(['\n        <div class="','">\n            <div class="','" style="width: ','%"></div>\n            <div class="','"></div>\n            ','\n            <div class="','">',"%</div>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','" style="width: ','%"></div>\n            <div class="','"></div>\n            ','\n            <div class="','">',"%</div>\n        </div>\n    "])),vn({low:e.level<.2}),vn("charge"),100*e.level,vn("contact"),e.charging?F(fn||(fn=n(['<div class="','">↯</div>'],['<div class="','">↯</div>'])),vn("charging")):"",vn("level"),Math.floor(100*e.level))}var gn,yn,bn=function(){var e=Ue({})[1];return function(e,n){return be=8,Me((function(){return e}),n)}((function(){return e({})}),[])},wn=ie("battery-status");function kn(){var e,t,r,o,i=Ue(!1),a=i[0],s=i[1],u=function(e){return be=5,Me((function(){return{current:e}}),[])}(),_=bn();if(function(e,n){var t=De(ve++,3);!Ie.__s&&We(t.__H,n)&&(t.__=e,t.i=n,me.__H.__h.push(t))}((function(){if(navigator.getBattery){navigator.getBattery().then((function(e){u.current=e,s(!0)})).catch((function(e){console.error(e)}));var e=setInterval((function(){_()}),1e3);return function(){return clearInterval(e)}}}),[]),!navigator.getBattery)return F(gn||(gn=n(["<",">","<//>"],["<",">","<//>"])),Ve,oe("Battery Status API is not supported."));var l={charging:null===(e=u.current)||void 0===e?void 0:e.charging,chargingTime:null===(t=u.current)||void 0===t?void 0:t.chargingTime,dischargingTime:null===(r=u.current)||void 0===r?void 0:r.dischargingTime,level:null===(o=u.current)||void 0===o?void 0:o.level};return a?F(yn||(yn=n(['\n        <div class="','">\n            <',' data="','"><//>\n            <',' level="','" charging="','"><//>\n        </div>\n    '],['\n        <div class="','">\n            <',' data="','"><//>\n            <',' level="','" charging="','"><//>\n        </div>\n    '])),wn(),dn,l,mn,l.level,l.charging):"..."}var In,Pn,Sn=ie("main-menu");function Cn(e){return F(Pn||(Pn=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Sn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return F(In||(In=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Sn("item",{selected:e.selected}),e.url,e.title)})))}var Hn,An=[{header:"Can I watch video",menuTitle:{en:"Video & audio",ru:"Видео и аудио"},id:"index",url:"./"},{header:"Screen",menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{header:"GPU",menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{header:"Gamepad",menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{header:"Storage",menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{header:"Network",menuTitle:{en:"Network",ru:"Сеть"},id:"network",url:"./network.html"},{header:"Battery",menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"}];function Nn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=An.map((function(n){return e(e({},n),{title:(r=n.menuTitle,r[ee]),selected:n.id===t});var r}));return F(Hn||(Hn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),Cn,r)}var Dn,Un,Mn=ie("battery-page");!function(e,n,o){var i,a,s,u;r.__&&r.__(e,n),a=(i="function"==typeof o)?null:n.__k,s=[],u=[],T(n,e=(!i&&o||n).__k=g(b,null,[e]),a||p,p,n.namespaceURI,!i&&o?[o]:a?null:n.firstChild?t.call(n.childNodes):null,s,!i&&o?o:a?a.__e:n.firstChild,i,u),x(s,e,u)}(F(Un||(Un=n(["<"," //>"],["<"," //>"])),(function(){return F(Dn||(Dn=n(['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API"><//>\n            <//>\n\n            <',"><//>\n\n            <","><//>\n        </div>"],['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API"><//>\n            <//>\n\n            <',"><//>\n\n            <","><//>\n        </div>"])),Mn(),Nn,_e,oe("Can I use Battery Status API?"),he,kn,pe)})),document.querySelector(".page"))}));
