!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function t(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var r,o,i,u,a,s,l,c,_,d,p={},f=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,m=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function g(e){var n=e.parentNode;n&&n.removeChild(e)}function y(e,n,t){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return w(e,a,o,i,null)}function w(e,n,t,r,u){var a={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++i:u,__i:-1,__u:0};return null==u&&null!=o.vnode&&o.vnode(a),a}function b(e){return e.children}function k(e,n){this.props=e,this.context=n}function C(e,n){if(null==n)return e.__?C(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?C(e):null}function S(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return S(e)}}function I(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!P.__r++||a!==o.debounceRendering)&&((a=o.debounceRendering)||s)(P)}function P(){var e,n,t,r,i,a,s,c;for(u.sort(l);e=u.shift();)e.__d&&(n=u.length,r=void 0,a=(i=(t=e).__v).__e,s=[],c=[],t.__P&&((r=v({},i)).__v=i.__v+1,o.vnode&&o.vnode(r),U(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[a]:null,s,null==a?C(i):a,!!(32&i.__u),c),r.__v=i.__v,r.__.__k[r.__i]=r,j(s,r,c),r.__e!=a&&S(r)),u.length>n&&u.sort(l));P.__r=0}function H(e,n,t,r,o,i,u,a,s,l,c){var _,d,h,m,v,g=r&&r.__k||f,y=n.length;for(t.__d=s,A(t,n,g),s=t.__d,_=0;_<y;_++)null!=(h=t.__k[_])&&"boolean"!=typeof h&&"function"!=typeof h&&(d=-1===h.__i?p:g[h.__i]||p,h.__i=_,U(e,h,d,o,i,u,a,s,l,c),m=h.__e,h.ref&&d.ref!=h.ref&&(d.ref&&E(d.ref,null,h),c.push(h.ref,h.__c||m,h)),null==v&&null!=m&&(v=m),65536&h.__u||d.__k===h.__k?s=M(h,s,e):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:m&&(s=m.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=v}function A(e,n,t){var r,o,i,u,a,s=n.length,l=t.length,c=l,_=0;for(e.__k=[],r=0;r<s;r++)u=r+_,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?w(null,o,null,null,null):m(o)?w(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?w(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=D(o,t,u,c),o.__i=a,i=null,-1!==a&&(c--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&_--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a==u-1?_=a-u:a==u+1?_++:a>u?c>s-u?_+=a-u:_--:a<u&&_++,a!==r+_&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=C(i)),F(i,i,!1),t[u]=null,c--);if(c)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=C(i)),F(i,i))}function M(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=M(r[o],n,t));return n}e.__e!=n&&(n&&e.type&&!t.contains(n)&&(n=C(e)),t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a++}}return-1}function N(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||h.test(n)?t:t+"px"}function T(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||N(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||N(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=c,e.addEventListener(n,i?d:_,i)):e.removeEventListener(n,i?d:_,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function R(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=c++;else if(n.t<t.u)return;return t(o.event?o.event(n):n)}}}function U(e,n,t,r,i,u,a,s,l,c){var _,d,p,f,h,g,y,w,C,S,I,P,A,M,D,N,T=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),u=[s=n.__e=t.__e]),(_=o.__b)&&_(n);e:if("function"==typeof T)try{if(w=n.props,C="prototype"in T&&T.prototype.render,S=(_=T.contextType)&&r[_.__c],I=_?S?S.props.value:_.__:r,t.__c?y=(d=n.__c=t.__c).__=d.__E:(C?n.__c=d=new T(w,I):(n.__c=d=new k(w,I),d.constructor=T,d.render=B),S&&S.sub(d),d.props=w,d.state||(d.state={}),d.context=I,d.__n=r,p=d.__d=!0,d.__h=[],d._sb=[]),C&&null==d.__s&&(d.__s=d.state),C&&null!=T.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=v({},d.__s)),v(d.__s,T.getDerivedStateFromProps(w,d.__s))),f=d.props,h=d.state,d.__v=n,p)C&&null==T.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),C&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(C&&null==T.getDerivedStateFromProps&&w!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(w,I),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(w,d.__s,I)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=w,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),P=0;P<d._sb.length;P++)d.__h.push(d._sb[P]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(w,d.__s,I),C&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,h,g)}))}if(d.context=I,d.props=w,d.__P=e,d.__e=!1,A=o.__r,M=0,C){for(d.state=d.__s,d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),D=0;D<d._sb.length;D++)d.__h.push(d._sb[D]);d._sb=[]}else do{d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++M<25);d.state=d.__s,null!=d.getChildContext&&(r=v(v({},r),d.getChildContext())),C&&!p&&null!=d.getSnapshotBeforeUpdate&&(g=d.getSnapshotBeforeUpdate(f,h)),H(e,m(N=null!=_&&_.type===b&&null==_.key?_.props.children:_)?N:[N],n,t,r,i,u,a,s,l,c),d.base=n.__e,n.__u&=-161,d.__h.length&&a.push(d),y&&(d.__E=d.__=null)}catch(e){if(n.__v=null,l||null!=u){for(n.__u|=l?160:32;s&&8===s.nodeType&&s.nextSibling;)s=s.nextSibling;u[u.indexOf(s)]=null,n.__e=s}else n.__e=t.__e,n.__k=t.__k;o.__e(e,n,t)}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=x(t.__e,n,t,r,i,u,a,l,c);(_=o.diffed)&&_(n)}function j(e,n,t){n.__d=void 0;for(var r=0;r<t.length;r++)E(t[r],t[++r],t[++r]);o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function x(e,n,t,o,i,u,a,s,l){var c,_,d,f,h,v,y,w=t.props,b=n.props,k=n.type;if("svg"===k?i="http://www.w3.org/2000/svg":"math"===k?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((h=u[c])&&"setAttribute"in h==!!k&&(k?h.localName===k:3===h.nodeType)){e=h,u[c]=null;break}if(null==e){if(null===k)return document.createTextNode(b);e=document.createElementNS(i,k,b.is&&b),u=null,s=!1}if(null===k)w===b||s&&e.data===b||(e.data=b);else{if(u=u&&r.call(e.childNodes),w=t.props||p,!s&&null!=u)for(w={},c=0;c<e.attributes.length;c++)w[(h=e.attributes[c]).name]=h.value;for(c in w)if(h=w[c],"children"==c);else if("dangerouslySetInnerHTML"==c)d=h;else if("key"!==c&&!(c in b)){if("value"==c&&"defaultValue"in b||"checked"==c&&"defaultChecked"in b)continue;T(e,c,null,h,i)}for(c in b)h=b[c],"children"==c?f=h:"dangerouslySetInnerHTML"==c?_=h:"value"==c?v=h:"checked"==c?y=h:"key"===c||s&&"function"!=typeof h||w[c]===h||T(e,c,h,w[c],i);if(_)s||d&&(_.__html===d.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),n.__k=[];else if(d&&(e.innerHTML=""),H(e,m(f)?f:[f],n,t,o,"foreignObject"===k?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:t.__k&&C(t,0),s,l),null!=u)for(c=u.length;c--;)null!=u[c]&&g(u[c]);s||(c="value",void 0!==v&&(v!==e[c]||"progress"===k&&!v||"option"===k&&v!==w[c])&&T(e,c,v,w[c],i),c="checked",void 0!==y&&y!==e[c]&&T(e,c,y,w[c],i))}return e}function E(e,n,t){try{if("function"==typeof e){var r="function"==typeof e.__u;r&&e.__u(),r&&null==n||(e.__u=e(n))}else e.current=n}catch(e){o.__e(e,t)}}function F(e,n,t){var r,i;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||E(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&F(r[i],n,t||"function"!=typeof e.type);t||null==e.__e||g(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function B(e,n,t){return this.constructor(e,t)}r=f.slice,o={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},i=0,k.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),I(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),I(this))},k.prototype.render=b,u=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,c=0,_=R(!1),d=R(!0);var G=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,G(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},L=new Map;var W,V=function(e){var n=L.get(this);return n||(n=new Map,L.set(this,n)),(n=G(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(y),O=[{name:"EN",value:"en",emoji:"🇺🇸"},{name:"RU",value:"ru",emoji:"🇷🇺"}],q={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},"Request fonts":{en:"Request fonts",ru:"Запросить шрифты"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"},Geo:{en:"Geo",ru:"Гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Check camera":{en:"Check camera",ru:"Проверить камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"},"Local fonts":{en:"Local fonts",ru:"Локальные шрифты"},Filter:{en:"Filter",ru:"Фильтр"},Family:{en:"Family",ru:"Семейство"},Style:{en:"Style",ru:"Стиль"},"Local Font Access API is not supported.":{en:"Local Font Access API is not supported.",ru:"Local Font Access API не поддерживается."},"Group by family":{en:"Group by family",ru:"Группировать по семейству"},"Sample rate":{en:"Sample rate",ru:"Частота дискретизации"},"Sample size":{en:"Sample size",ru:"Размер семпла"},"Channel count":{en:"Channel count",ru:"Количество каналов"},"Auto gain control":{en:"Auto gain control",ru:"Автоматическая регулировка усиления"},Latency:{en:"Latency",ru:"Задержка"},"Noise suppression":{en:"Noise suppression",ru:"Шумоподавление"},"Echo cancellation":{en:"Echo cancellation",ru:"Эхоподавление"},"Background blur":{en:"Background blur",ru:"Размытие фона"},"hr.":{en:"hr.",ru:"ч."},"min.":{en:"min.",ru:"мин."},"sec.":{en:"sec.",ru:"с."},"Discharging time":{en:"Discharging time",ru:"Время до полной разрядки"},"Charging time":{en:"Charging time",ru:"Время до полной зарядки"},"Check vibration":{en:"Check vibration",ru:"Проверить вибрацию"},"Support is mainly on mobile devices.":{en:"Support is mainly on mobile devices.",ru:"Поддержка в основном на мобильных устройствах."},Vibrate:{en:"Vibrate",ru:"Вибрировать"},"Vibration API is not supported.":{en:"Vibration API is not supported.",ru:"Vibration API не поддерживается."},"Check mic":{en:"Check mic",ru:"Проверить микрофон"},"Hear yourself":{en:"Hear yourself",ru:"Слышать себя"},"Max touch points":{en:"Max touch points",ru:"Max touch points"},"Media Devices API is not supported.":{en:"Media Devices API is not supported.",ru:"Media Devices API не поддерживается."},"Check HDCP version":{en:"Check HDCP version",ru:"Проверить HDCP версию"},Bluetooth:{en:"Bluetooth",ru:"Bluetooth"},USB:{en:"USB",ru:"USB"},Sensor:{en:"Sensor",ru:"Сенсор"},Sensors:{en:"Sensors",ru:"Сенсоры"},MIDI:{en:"MIDI",ru:"MIDI"}};function K(){return n([],O,!0)}function z(e){var n=q[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[W];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(W,'" in getText().')),e):t}function $(){return W}var Y="undefined"!=typeof document,J="undefined"!=typeof window,Q="undefined"!=typeof navigator,X="undefined"!=typeof screen;var Z=1;function ee(e,n){return(e||"").slice(0,n)}function ne(){return Math.floor(Math.random()*(1<<30))}var te=512;function re(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function oe(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return re(t,n,e[n])})),re(t,"rn",ne()),re(t,"c",!!Q&&navigator.cookieEnabled),re(t,"s",X?[screen.width,screen.height,screen.colorDepth].join("x"):""),re(t,"sk",J&&window.devicePixelRatio||Z),re(t,"w",J?[window.innerWidth,window.innerHeight].join("x"):""),re(t,"en",Y&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return re(t,"et",r),re(t,"st",r),re(t,"t",ee(n,te)),t.join(":")}var ie=1024;function ue(e){return ee(e,ie)}function ae(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}function se(){var e,n;document.removeEventListener("mousemove",se),e=document.body,n="hover_yes",e.classList?e.classList.add(n):e.className+=(e.className?" ":"")+n}var le,ce,_e="undefined"==typeof window;if(!_e){(function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":oe(n,r.title),rn:ne(),ut:r.ut};r.url&&(o["page-url"]=ue(r.url)),r.referrer&&(o["page-ref"]=ue(r.referrer)),ae(t,o)})({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:Y?document.referrer:"",title:Y?document.title:"",url:J&&window.location?window.location.href:""},params:ce});var de=function(){var e,n=(null===(e=window.appData)||void 0===e?void 0:e.lang)||function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en";return"en"!==n&&"ru"!==n&&(n="en"),n}();!function(e){W=e}(de),window.addEventListener("beforeinstallprompt",(function(e){})),document.addEventListener("mousemove",se),null===(le=document.documentElement)||void 0===le||le.setAttribute("lang",de)}function pe(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=fe(r,t)),r):(n&&(r=fe(r,n)),r)}}function fe(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}function he(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}var me,ve=pe("link");function ge(e){var n=he(e.class,ve({theme:e.theme}));return V(me||(me=t(['<a target="','" class="','" href="','">',"</a>"],['<a target="','" class="','" href="','">',"</a>"])),e.target,n,e.href,e.children)}var ye,we,be,ke,Ce=0,Se=[],Ie=o,Pe=Ie.__b,He=Ie.__r,Ae=Ie.diffed,Me=Ie.__c,De=Ie.unmount,Ne=Ie.__;function Te(e,n){Ie.__h&&Ie.__h(we,e,Ce||n),Ce=0;var t=we.__H||(we.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Re(e){return Ce=1,function(e,n){var t=Te(ye++,2);if(t.t=e,!t.__c&&(t.__=[We(void 0,n),function(e){var n=t.__N?t.__N[0]:t.__[0],r=t.t(n,e);n!==r&&(t.__N=[r,t.__[1]],t.__c.setState({}))}],t.__c=we,!we.u)){var r=function(e,n,r){if(!t.__c.__H)return!0;var i=t.__c.__H.__.filter((function(e){return!!e.__c}));if(i.every((function(e){return!e.__N})))return!o||o.call(this,e,n,r);var u=!1;return i.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&t.__c.props===e)&&(!o||o.call(this,e,n,r))};we.u=!0;var o=we.shouldComponentUpdate,i=we.componentWillUpdate;we.componentWillUpdate=function(e,n,t){if(this.__e){var u=o;o=void 0,r(e,n,t),o=u}i&&i.call(this,e,n,t)},we.shouldComponentUpdate=r}return t.__N||t.__}(We,e)}function Ue(e,n){var t=Te(ye++,7);return Le(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function je(e,n){return Ce=8,Ue((function(){return e}),n)}function xe(){for(var e;e=Se.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Be),e.__H.__h.forEach(Ge),e.__H.__h=[]}catch(n){e.__H.__h=[],Ie.__e(n,e.__v)}}Ie.__b=function(e){we=null,Pe&&Pe(e)},Ie.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Ne&&Ne(e,n)},Ie.__r=function(e){He&&He(e),ye=0;var n=(we=e.__c).__H;n&&(be===we?(n.__h=[],we.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach(Be),n.__h.forEach(Ge),n.__h=[],ye=0)),be=we},Ie.diffed=function(e){Ae&&Ae(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==Se.push(n)&&ke===Ie.requestAnimationFrame||((ke=Ie.requestAnimationFrame)||Fe)(xe)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),be=we=null},Ie.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Be),e.__h=e.__h.filter((function(e){return!e.__||Ge(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],Ie.__e(t,e.__v)}})),Me&&Me(e,n)},Ie.unmount=function(e){De&&De(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{Be(e)}catch(e){n=e}})),t.__H=void 0,n&&Ie.__e(n,t.__v))};var Ee="function"==typeof requestAnimationFrame;function Fe(e){var n,t=function(){clearTimeout(r),Ee&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Ee&&(n=requestAnimationFrame(t))}function Be(e){var n=we,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),we=n}function Ge(e){var n=we;e.__c=e.__(),we=n}function Le(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function We(e,n){return"function"==typeof n?n(e):n}var Ve,Oe=pe("lang-switcher-item");function qe(e){var n=e.emoji,r=e.onClick,o=e.name,i=e.value,u=e.selected,a=je((function(){r(i)}),[]);return V(Ve||(Ve=t(['<div class="','" onClick="','">'," "," ","</div>"],['<div class="','" onClick="','">'," "," ","</div>"])),Oe(),a,n,o,u?" ✓":"")}function Ke(e,n){var t="index"===e?"":e+"/";return"/".concat(n||$(),"/").concat(t)}var ze,$e,Ye=pe("lang-switcher");function Je(){var e=Re(!1),n=e[0],r=e[1],o=$(),i=K(),u=je((function(e){r(!1),window.location.href=Ke(window.appData.pageId,e)}),[r]),a=je((function(){r(!0)}),[r]),s=i.filter((function(e){return o===e.value}))[0];return V($e||($e=t(['<div class="','">\n        <div class="','" onClick="','"><span class="','">',"</span> ",'</div>\n        <div class="','">\n            ',"\n        </div>\n    </div>"],['<div class="','">\n        <div class="','" onClick="','"><span class="','">',"</span> ",'</div>\n        <div class="','">\n            ',"\n        </div>\n    </div>"])),Ye(),Ye("current"),a,Ye("emoji"),s.emoji,s.name,Ye("popup",{visible:n}),i.map((function(e){return V(ze||(ze=t(["<",' selected="','" key="','" onClick="','" ..."','" //>'],["<",' selected="','" key="','" onClick="','" ..."','" //>'])),qe,o===e.value,e.value,u,e)})))}var Qe,Xe=pe("footer");function Ze(){return V(Qe||(Qe=t(['<footer class="','">\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues/new">','<//></div>\n        <div class="','"><',' //></div>\n        <div class="','">© Vvideo</div>\n    </footer>'],['<footer class="','">\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues/new">','<//></div>\n        <div class="','"><',' //></div>\n        <div class="','">© Vvideo</div>\n    </footer>'])),Xe(),Xe("item",{report:!0}),ge,z("Report a bug"),Xe("item"),Je,Xe("item"))}var en,nn,tn=pe("main-menu");function rn(e){return V(nn||(nn=t(['\n        <nav class="','">\n            <ul class="','">\n            ',"\n            </ul>\n        </nav>\n    "],['\n        <nav class="','">\n            <ul class="','">\n            ',"\n            </ul>\n        </nav>\n    "])),tn(),tn("list"),e.items.filter((function(e){return!e.hidden})).map((function(e){return V(en||(en=t(['<li class="','" key="','"><a class="','" href="','">',"</a></li>"],['<li class="','" key="','"><a class="','" href="','">',"</a></li>"])),tn("item",{selected:e.selected}),e.id,tn("link"),Ke(e.id),e.title)})))}var on,un=[{header:{en:"Check device online",ru:"Проверь устройство онлайн"},emoji:"",menuTitle:{en:"",ru:""},id:"index",hidden:!0},{header:{en:"Video",ru:"Видео"},emoji:"⏯",menuTitle:{en:"Video",ru:"Видео"},id:"video"},{menuTitle:{en:"Audio",ru:"Аудио"},emoji:"🔊",id:"audio"},{menuTitle:{en:"Screen",ru:"Экран"},emoji:"🖥️",id:"screen"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},emoji:"📸",id:"camera"},{menuTitle:{en:"Mic",ru:"Микрофон"},emoji:"🎙️",id:"mic"},{menuTitle:{en:"GPU",ru:"GPU"},emoji:"⚙️",id:"gpu"},{menuTitle:{en:"Mouse",ru:"Мышь"},emoji:"🖱",id:"mouse"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},emoji:"⌨️",id:"keyboard"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},emoji:"",id:"keycodes",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},emoji:"🕹️",id:"gamepad"},{menuTitle:{en:"Storage",ru:"Хранилище"},emoji:"💽",id:"storage"},{menuTitle:{en:"Network",ru:"Сеть"},emoji:"🌐",id:"network"},{menuTitle:{en:"Geo",ru:"Гео"},emoji:"📍",id:"geo"},{menuTitle:{en:"MIDI",ru:"MIDI"},emoji:"🎹",id:"midi",hidden:!0},{menuTitle:{en:"USB",ru:"USB"},emoji:"🔌",id:"usb",hidden:!0},{menuTitle:{en:"Bluetooth",ru:"Bluetooth"},emoji:"ᛒ",id:"bluetooth",hidden:!0},{menuTitle:{en:"Sensor",ru:"Сенсор"},emoji:"🧲",id:"sensor",hidden:!0},{menuTitle:{en:"Platform",ru:"Платформа"},emoji:"💻",id:"platform"},{menuTitle:{en:"Battery",ru:"Батарея"},emoji:"🔋",id:"battery"},{menuTitle:{en:"Fonts",ru:"Шрифты"},emoji:"❝",id:"fonts"},{menuTitle:{en:"404",ru:"404"},emoji:"",id:"error404",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},emoji:"",id:"test-dead-pixels",hidden:!0}];function an(){var n=_e?"":window.location.pathname.split(/[?./]/)[2],r=un.map((function(t){var r,o=t.id===n;return e(e({},t),{url:Ke(t.id),title:(r=t.menuTitle,r[W]),selected:o})}));return V(on||(on=t(["<",' items="','"><//>'],["<",' items="','"><//>'])),rn,r)}var sn,ln,cn,_n=pe("header");function dn(){return V(sn||(sn=t(['\n        <header class="','">\n            <',' theme="white" href="','"><span class="','"></span>',"<//>\n        </header>\n    "],['\n        <header class="','">\n            <',' theme="white" href="','"><span class="','"></span>',"<//>\n        </header>\n    "])),_n(),ge,Ke("index"),_n("logo"),z("Check device online"))}function pn(e){return V(cn||(cn=t(["\n        <div>\n            <"," //>\n            ","\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            ","\n\n            ","\n\n            <","><//>\n        </div>"])),dn,e.withoutMenu?"":V(ln||(ln=t(["<","><//>"],["<","><//>"])),an),e.children,Ze)}var fn,hn=pe("row");function mn(e){return V(fn||(fn=t(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),hn(),hn("category"),e.name,hn("body"),e.children)}var vn,gn,yn,wn=pe("list");function bn(e){var n=e.items.filter((function(e){if(!e)return!1;if(1===e.length)return!0;e[0];var n=e[1];return void 0!==n&&""!==n})).map((function(e){var n=e[0],t=e[1];return 1===e.length?[n]:[n,"boolean"==typeof t?String(t):t]})),r=he(e.class,wn());return n.length?V(yn||(yn=t(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),mn,e.title,r,n.map((function(e){var n=e[0],r=e[1];return 1===e.length?V(vn||(vn=t(["<li>","</li>"],["<li>","</li>"])),n):V(gn||(gn=t(["<li>",": ","</li>"],["<li>",": ","</li>"])),n,r)}))):""}function kn(){}const Cn='video/mp4; codecs="avc1.42E01E"';function Sn(){return Boolean(window.chrome)&&navigator.mediaCapabilities&&navigator.mediaCapabilities.decodingInfo?navigator.mediaCapabilities.decodingInfo({type:"file",video:{contentType:Cn,width:800,height:600,bitrate:1e5,framerate:30}}).then((e=>e.powerEfficient)).catch((()=>{})):Promise.resolve(void 0)}var In,Pn,Hn,An,Mn=pe("info-link");function Dn(e){return V(In||(In=t(['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'],['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'])),Mn(),Mn("link"),e.href,e.title)}function Nn(e){return e?"✓":z("No")}function Tn(){var e,r,o=function(e){return Ce=5,Ue((function(){return{current:e}}),[])}([]),i=Re(!1);i[0];var u=i[1],a=Re(void 0),s=a[0],l=a[1];!_e&&Sn().then((function(e){l(e)})),!_e&&(null===(r=null===(e=navigator.userAgentData)||void 0===e?void 0:e.getHighEntropyValues)||void 0===r||r.call(e,["architecture","bitness","formFactor","fullVersionList","model","platformVersion","wow64"]).then((function(e){var n=[[z("Name"),"".concat(e.platform," ").concat(e.platformVersion||"")],[z("Architecture"),e.architecture?"".concat(e.architecture," ").concat(e.bitness||""):""],[z("Form factor"),e.formFactor],[z("Model"),e.model]];o.current=n.filter((function(e){return e[1]})),u(!0)})).catch(kn));var c=[[V(Pn||(Pn=t(["Hardware concurrency <",' title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency"><//>'],["Hardware concurrency <",' title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency"><//>'])),Dn),_e?"…":navigator.hardwareConcurrency],[z("Standalone application"),_e?"…":Nn(Boolean("undefined"!=typeof window&&!0===window.navigator.standalone||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches))],["User agent",_e?"…":navigator.userAgent]];return!_e&&navigator.deviceMemory&&c.unshift([V(Hn||(Hn=t([""," <",' title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory"><//>'],[""," <",' title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory"><//>'])),z("RAM"),Dn),"≈ ".concat(navigator.deviceMemory," ").concat(z("GB"))]),void 0!==s&&c.push([z("Hardware acceleration"),Nn(s)]),c=o.current.length?n(n([],o.current,!0),c,!0):n([[z("Name"),_e?"…":navigator.platform]],c,!0),V(An||(An=t(["<",' items="','" //>'],["<",' items="','" //>'])),bn,c)}var Rn,Un=["accessibility-events","background-sync","bluetooth","clipboard-read","clipboard-write","compute-pressure","geolocation","local-fonts","microphone","camera","notifications","push","accelerometer","gyroscope","magnetometer","ambient-light-sensor","storage-access","top-level-storage-access","persistent-storage","midi","screen-wake-lock","window-management","xr-spatial-tracking"];function jn(){if(_e||!navigator.permissions)return"";var e=Re([]),n=e[0];e[1];var r=Re(!1),o=r[0],i=r[1],u=n.map((function(e){return[e.name,e.state]})).sort((function(e,n){return e[0]>n[0]?1:-1}));return function(e,n){var t=Te(ye++,3);!Ie.__s&&Le(t.__H,n)&&(t.__=e,t.i=n,we.__H.__h.push(t))}((function(){var e=[];Un.forEach((function(t){var r={name:t};"push"===t&&(r.userVisibleOnly=!0),e.push(navigator.permissions.query(r).then((function(e){n.push({name:t,state:e.state})})).catch(kn))})),Promise.all(e).then((function(){i(!0)}))}),[]),o?V(Rn||(Rn=t(["<",' title="','" items="','" //>'],["<",' title="','" items="','" //>'])),bn,z("Permissions"),u):""}var xn,En,Fn,Bn=pe("page-title");function Gn(e){return V(xn||(xn=t(['\n        <h1 class="','">\n            ',"\n        </h1>\n    "],['\n        <h1 class="','">\n            ',"\n        </h1>\n    "])),Bn(),e.children)}!function(e,n,t){var i,u,a,s;o.__&&o.__(e,n),u=(i="function"==typeof t)?null:n.__k,a=[],s=[],U(n,e=(!i&&t||n).__k=y(b,null,[e]),u||p,p,n.namespaceURI,!i&&t?[t]:u?null:n.firstChild?r.call(n.childNodes):null,a,!i&&t?t:u?u.__e:n.firstChild,i,s),j(a,e,s)}(V(Fn||(Fn=t(["<"," //>"],["<"," //>"])),(function(){return V(En||(En=t(["\n        <",">\n            <",">","<//>\n\n            <"," //>\n\n            <"," //>\n        <//>"],["\n        <",">\n            <",">","<//>\n\n            <"," //>\n\n            <"," //>\n        <//>"])),pn,Gn,z("Platform"),Tn,jn)})),document.querySelector(".page"))}));