!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,a,s,l,c,_,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function m(e,n){for(var t in n)e[t]=n[t];return e}function v(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return y(e,a,o,i,null)}function y(e,n,t,i,u){var a={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(a),a}function k(e){return e.children}function w(e,n){this.props=e,this.context=n}function b(e,n){if(null==n)return e.__?b(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?b(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function P(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!I.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(I)}function I(){var e,n,t,o,u,a,l,c;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,a=(u=(t=e).__v).__e,l=[],c=[],t.__P&&((o=m({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),M(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[a]:null,l,null==a?b(u):a,!!(32&u.__u),c),o.__v=u.__v,o.__.__k[o.__i]=o,x(l,o,c),o.__e!=a&&C(o)),i.length>n&&i.sort(s));I.__r=0}function S(e,n,t,r,o,i,u,a,s,l,c){var _,f,h,m,v,g=r&&r.__k||p,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,_=0;_<y;_++)null!=(h=t.__k[_])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=_,M(e,h,f,o,i,u,a,s,l,c),m=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&F(f.ref,null,h),c.push(h.ref,h.__c||m,h)),null==v&&null!=m&&(v=m),65536&h.__u||f.__k===h.__k?(s&&"string"==typeof h.type&&!e.contains(s)&&(s=b(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:m&&(s=m.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=v}function H(e,n,t){var r,o,i,u,a,s=n.length,l=t.length,c=l,_=0;for(e.__k=[],r=0;r<s;r++)u=r+_,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(k,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=R(o,t,u,c),o.__i=a,i=null,-1!==a&&(c--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&_--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a==u-1?_=a-u:a==u+1?_++:a>u?c>s-u?_+=a-u:_--:a<u&&_++,a!==r+_&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),E(i,i,!1),t[u]=null,c--);if(c)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),E(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function R(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a++}}return-1}function T(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function D(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||T(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||T(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?_:c,i)):e.removeEventListener(n,i?_:c,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function N(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function M(e,n,t,o,i,u,a,s,l,c){var _,d,p,f,v,g,y,b,C,P,I,H,A,R,T,D,N=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),u=[s=n.__e=t.__e]),(_=r.__b)&&_(n);e:if("function"==typeof N)try{if(b=n.props,C="prototype"in N&&N.prototype.render,P=(_=N.contextType)&&o[_.__c],I=_?P?P.props.value:_.__:o,t.__c?y=(d=n.__c=t.__c).__=d.__E:(C?n.__c=d=new N(b,I):(n.__c=d=new w(b,I),d.constructor=N,d.render=G),P&&P.sub(d),d.props=b,d.state||(d.state={}),d.context=I,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),C&&null==d.__s&&(d.__s=d.state),C&&null!=N.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=m({},d.__s)),m(d.__s,N.getDerivedStateFromProps(b,d.__s))),f=d.props,v=d.state,d.__v=n,p)C&&null==N.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),C&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(C&&null==N.getDerivedStateFromProps&&b!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,I),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,I)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=b,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,I),C&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,v,g)}))}if(d.context=I,d.props=b,d.__P=e,d.__e=!1,A=r.__r,R=0,C){for(d.state=d.__s,d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[]}else do{d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++R<25);d.state=d.__s,null!=d.getChildContext&&(o=m(m({},o),d.getChildContext())),C&&!p&&null!=d.getSnapshotBeforeUpdate&&(g=d.getSnapshotBeforeUpdate(f,v)),S(e,h(D=null!=_&&_.type===k&&null==_.key?_.props.children:_)?D:[D],n,t,o,i,u,a,s,l,c),d.base=n.__e,n.__u&=-161,d.__h.length&&a.push(d),y&&(d.__E=d.__=null)}catch(e){n.__v=null,l||null!=u?(n.__e=s,n.__u|=l?160:32,u[u.indexOf(s)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=U(t.__e,n,t,o,i,u,a,l,c);(_=r.diffed)&&_(n)}function x(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)F(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function U(e,n,r,o,i,u,a,s,l){var c,_,p,f,m,g,y,k=r.props,w=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((m=u[c])&&"setAttribute"in m==!!C&&(C?m.localName===C:3===m.nodeType)){e=m,u[c]=null;break}if(null==e){if(null===C)return document.createTextNode(w);e=document.createElementNS(i,C,w.is&&w),u=null,s=!1}if(null===C)k===w||s&&e.data===w||(e.data=w);else{if(u=u&&t.call(e.childNodes),k=r.props||d,!s&&null!=u)for(k={},c=0;c<e.attributes.length;c++)k[(m=e.attributes[c]).name]=m.value;for(c in k)if(m=k[c],"children"==c);else if("dangerouslySetInnerHTML"==c)p=m;else if("key"!==c&&!(c in w)){if("value"==c&&"defaultValue"in w||"checked"==c&&"defaultChecked"in w)continue;D(e,c,null,m,i)}for(c in w)m=w[c],"children"==c?f=m:"dangerouslySetInnerHTML"==c?_=m:"value"==c?g=m:"checked"==c?y=m:"key"===c||s&&"function"!=typeof m||k[c]===m||D(e,c,m,k[c],i);if(_)s||p&&(_.__html===p.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),n.__k=[];else if(p&&(e.innerHTML=""),S(e,h(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:r.__k&&b(r,0),s,l),null!=u)for(c=u.length;c--;)null!=u[c]&&v(u[c]);s||(c="value",void 0!==g&&(g!==e[c]||"progress"===C&&!g||"option"===C&&g!==k[c])&&D(e,c,g,k[c],i),c="checked",void 0!==y&&y!==e[c]&&D(e,c,y,k[c],i))}return e}function F(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||F(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||v(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,w.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=m({},this.state),"function"==typeof e&&(e=e(m({},t),this.props)),e&&m(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},w.prototype.render=k,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},I.__r=0,l=0,c=N(!1),_=N(!0);var L=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,L(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},W=new Map;var j=function(e){var n=W.get(this);return n||(n=new Map,W.set(this,n)),(n=L(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function B(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=O(r,t)),r):(n&&(r=O(r,n)),r)}}function O(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var V,K=B("page-title");function q(e){return j(V||(V=n(['\n        <h1 class="','">\n            ',"\n        </h1>\n    "],['\n        <h1 class="','">\n            ',"\n        </h1>\n    "])),K(),e.children)}var z,$=[{name:"EN",value:"en",emoji:"🇺🇸"},{name:"RU",value:"ru",emoji:"🇷🇺"}],Y={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},"Request fonts":{en:"Request fonts",ru:"Запросить шрифты"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Check camera":{en:"Check camera",ru:"Проверить камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"},"Local fonts":{en:"Local fonts",ru:"Локальные шрифты"},Filter:{en:"Filter",ru:"Фильтр"},Family:{en:"Family",ru:"Семейство"},Style:{en:"Style",ru:"Стиль"},"Local Font Access API is not supported.":{en:"Local Font Access API is not supported.",ru:"Local Font Access API не поддерживается."},"Group by family":{en:"Group by family",ru:"Группировать по семейству"},"Sample rate":{en:"Sample rate",ru:"Частота дискретизации"},"Sample size":{en:"Sample size",ru:"Размер семпла"},"Channel count":{en:"Channel count",ru:"Количество каналов"},"Auto gain control":{en:"Auto gain control",ru:"Автоматическая регулировка усиления"},Latency:{en:"Latency",ru:"Задержка"},"Noise suppression":{en:"Noise suppression",ru:"Шумоподавление"},"Echo cancellation":{en:"Echo cancellation",ru:"Эхоподавление"},"Background blur":{en:"Background blur",ru:"Размытие фона"},"hr.":{en:"hr.",ru:"ч."},"min.":{en:"min.",ru:"мин."},"sec.":{en:"sec.",ru:"с."},"Discharging time":{en:"Discharging time",ru:"Время до полной разрядки"},"Charging time":{en:"Charging time",ru:"Время до полной зарядки"},"Check vibration":{en:"Check vibration",ru:"Проверить вибрацию"},"Support is mainly on mobile devices.":{en:"Support is mainly on mobile devices.",ru:"Поддержка в основном только на мобильных устройствах."},Vibrate:{en:"Vibrate",ru:"Вибрировать"},"Vibration API is not supported":{en:"Vibration API is not supported",ru:"Vibration API не поддерживается"},"Check mic":{en:"Check mic",ru:"Проверить микрофон"},"Hear yourself":{en:"Hear yourself",ru:"Слышать себя"}};function J(){return function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}([],$,!0)}function Q(e){var n=Y[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[z];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(z,'" in getText().')),e):t}function X(e){return e[z]}function Z(){return z}var ee="undefined"!=typeof document,ne="undefined"!=typeof window,te="undefined"!=typeof navigator,re="undefined"!=typeof screen;var oe=1;function ie(e,n){return(e||"").slice(0,n)}function ue(){return Math.floor(Math.random()*(1<<30))}var ae=512;function se(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function le(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return se(t,n,e[n])})),se(t,"rn",ue()),se(t,"c",!!te&&navigator.cookieEnabled),se(t,"s",re?[screen.width,screen.height,screen.colorDepth].join("x"):""),se(t,"sk",ne&&window.devicePixelRatio||oe),se(t,"w",ne?[window.innerWidth,window.innerHeight].join("x"):""),se(t,"en",ee&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return se(t,"et",r),se(t,"st",r),se(t,"t",ie(n,ae)),t.join(":")}var ce=1024;function _e(e){return ie(e,ce)}function de(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var pe,fe=window.location.host;!function(e,n,t){!function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":le(n,r.title),rn:ue(),ut:r.ut};r.url&&(o["page-url"]=_e(r.url)),r.referrer&&(o["page-ref"]=_e(r.referrer)),de(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:e,pageParams:{referrer:ee?document.referrer:"",title:ee?document.title:"",url:ne&&window.location?window.location.href:""},params:t})}("caniwatchvideo.online"===fe||"checkdevice.online"===fe?"95998062":"97747983"),function(e){z=e}((pe=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==pe&&"ru"!==pe&&(pe="en"),pe)),window.addEventListener("beforeinstallprompt",(function(e){}));var he,me=B("link");function ve(e){return j(he||(he=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),me({theme:e.theme}),e.href,e.children)}var ge,ye,ke,we,be=0,Ce=[],Pe=r,Ie=Pe.__b,Se=Pe.__r,He=Pe.diffed,Ae=Pe.__c,Re=Pe.unmount,Te=Pe.__;function De(e,n){Pe.__h&&Pe.__h(ye,e,be||n),be=0;var t=ye.__H||(ye.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Ne(e){return be=1,function(e,n,t){var r=De(ge++,2);if(r.t=e,!r.__c&&(r.__=[We(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=ye,!ye.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var u=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};ye.u=!0;var i=ye.shouldComponentUpdate,u=ye.componentWillUpdate;ye.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}u&&u.call(this,e,n,t)},ye.shouldComponentUpdate=o}return r.__N||r.__}(We,e)}function Me(e,n){var t=De(ge++,7);return function(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function xe(e,n){return be=8,Me((function(){return e}),n)}function Ue(){for(var e;e=Ce.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ge),e.__H.__h.forEach(Le),e.__H.__h=[]}catch(n){e.__H.__h=[],Pe.__e(n,e.__v)}}Pe.__b=function(e){ye=null,Ie&&Ie(e)},Pe.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Te&&Te(e,n)},Pe.__r=function(e){Se&&Se(e),ge=0;var n=(ye=e.__c).__H;n&&(ke===ye?(n.__h=[],ye.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach(Ge),n.__h.forEach(Le),n.__h=[],ge=0)),ke=ye},Pe.diffed=function(e){He&&He(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==Ce.push(n)&&we===Pe.requestAnimationFrame||((we=Pe.requestAnimationFrame)||Ee)(Ue)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),ke=ye=null},Pe.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Ge),e.__h=e.__h.filter((function(e){return!e.__||Le(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],Pe.__e(t,e.__v)}})),Ae&&Ae(e,n)},Pe.unmount=function(e){Re&&Re(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{Ge(e)}catch(e){n=e}})),t.__H=void 0,n&&Pe.__e(n,t.__v))};var Fe="function"==typeof requestAnimationFrame;function Ee(e){var n,t=function(){clearTimeout(r),Fe&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Fe&&(n=requestAnimationFrame(t))}function Ge(e){var n=ye,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),ye=n}function Le(e){var n=ye;e.__c=e.__(),ye=n}function We(e,n){return"function"==typeof n?n(e):n}var je,Be=B("lang-switcher-item");function Oe(e){var t=e.emoji,r=e.onClick,o=e.name,i=e.value,u=e.selected,a=xe((function(){r(i)}),[]);return j(je||(je=n(['<div class="','" onClick="','">'," "," ","</div>"],['<div class="','" onClick="','">'," "," ","</div>"])),Be(),a,t,o,u?" ✓":"")}var Ve=function(e){try{return decodeURIComponent(e)}catch(n){return e}};var Ke=document.createElement("a");function qe(n,t,r){if(void 0===r)return n;var o=function(e){Ke.href=e;var n=Ke.pathname||"";"/"!==n.charAt(0)&&(n="/".concat(n));var t=(Ke.search||"")+(Ke.hash||""),r=e.lastIndexOf(t);return{originalPath:-1===r?e:e.slice(0,r),href:Ke.href,protocol:Ke.protocol,host:Ke.host,hostname:Ke.hostname,port:Ke.port,pathname:n,search:Ke.search,hash:Ke.hash}}(n),i=function(e){for(var n={},t=e.replace(/^[?#]+/,"").replace(/#.*$/,"").split("&"),r=0;r<t.length;r+=1){var o=t[r].indexOf("="),i=void 0,u=void 0;if(-1===o?(i=Ve(t[r]),u=""):(i=Ve(t[r].slice(0,o)),u=t[r].slice(o+1)),i){var a=Boolean(/(\[\])$/.exec(i));i=i.replace(/\[\]$/,""),a?void 0===n[i]?n[i]=[Ve(u)]:n[i]=[].concat(n[i]||[],Ve(u)):n[i]=Ve(u)}}return n}(o.search);return i[t]=r,function(e){var n="443"===e.port||"80"===e.port?e.hostname:e.host;return"".concat(e.protocol,"//").concat(n).concat(e.pathname).concat(e.search).concat(e.hash)}(e(e({},o),{search:$e(i)}))}var ze=function(e,n){return n.map((function(n){return"".concat(e,"[]=").concat(encodeURIComponent(n))})).join("&")};function $e(e){var n=[];return Object.keys(e).forEach((function(t){var r=e[t];Array.isArray(r)?n.push(ze(t,r)):void 0!==r&&n.push("".concat(t,"=").concat(encodeURIComponent(r)))})),n.length?"?".concat(n.join("&")):""}var Ye,Je,Qe=B("lang-switcher");function Xe(){var e=Ne(!1),t=e[0],r=e[1],o=Z(),i=J(),u=xe((function(e){r(!1),window.location.href=qe(window.location.href,"lang",e)}),[r]),a=xe((function(){r(!0)}),[r]),s=i.filter((function(e){return o===e.value}))[0];return j(Je||(Je=n(['<div class="','">\n        <div class="','" onClick="','"><span class="','">',"</span> ",'</div>\n        <div class="','">\n            ',"\n        </div>\n    </div>"],['<div class="','">\n        <div class="','" onClick="','"><span class="','">',"</span> ",'</div>\n        <div class="','">\n            ',"\n        </div>\n    </div>"])),Qe(),Qe("current"),a,Qe("emoji"),s.emoji,s.name,Qe("popup",{visible:t}),i.map((function(e){return j(Ye||(Ye=n(["<",' selected="','" key="','" onClick="','" ..."','" //>'],["<",' selected="','" key="','" onClick="','" ..."','" //>'])),Oe,o===e.value,e.value,u,e)})))}var Ze,en=B("footer");function nn(){return j(Ze||(Ze=n(['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">','<//></div>\n        <div class="','"><'," //></div>\n    </footer>"],['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">','<//></div>\n        <div class="','"><'," //></div>\n    </footer>"])),en(),en("item"),en("l1"),en("l2"),en("l3"),en("l4"),en("l5"),en("l6"),en("item",{g:!0}),ve,Q("Report a bug"),en("item"),Xe)}var tn,rn,on=B("main-menu");function un(e){return j(rn||(rn=n(['\n        <nav class="','">\n            ',"\n        </nav>\n    "],['\n        <nav class="','">\n            ',"\n        </nav>\n    "])),on(),e.items.filter((function(e){return!e.hidden})).map((function(e){return j(tn||(tn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),on("item",{selected:e.selected}),e.url,e.title)})))}var an,sn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"Mic",ru:"Микрофон"},id:"mic",url:"./mic.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},id:"keycodes",url:"./keycodes.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"Fonts",ru:"Шрифты"},id:"fonts",url:"./fonts.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function ln(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=sn.map((function(n){var r=n.id===t;return r&&(document.title=X(n.header||n.menuTitle)+" / "+Q("Check device online")),e(e({},n),{url:n.url+"?lang="+Z(),title:X(n.menuTitle),selected:r})}));return j(an||(an=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),un,r)}var cn,_n,dn,pn,fn=B("header");function hn(){return j(cn||(cn=n(['\n        <header class="','">\n            <',' theme="white" href="/"><span class="','"></span>',"<//>\n        </header>\n    "],['\n        <header class="','">\n            <',' theme="white" href="/"><span class="','"></span>',"<//>\n        </header>\n    "])),fn(),ve,fn("logo"),Q("Check device online"))}function mn(e){return j(_n||(_n=n(["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),hn,ln,e.children,nn)}!function(e,n,o){var i,u,a,s;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,a=[],s=[],M(n,e=(!i&&o||n).__k=g(k,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,a,!i&&o?o:u?u.__e:n.firstChild,i,s),x(a,e,s)}(j(pn||(pn=n(["<"," //>"],["<"," //>"])),(function(){return j(dn||(dn=n(["\n        <",">\n            <",">404<//>\n\n            <p>","</p>\n            <p><",' href="/">',"><//></p>\n        <//>"],["\n        <",">\n            <",">404<//>\n\n            <p>","</p>\n            <p><",' href="/">',"><//></p>\n        <//>"])),mn,q,Q("Page not found."),ve,Q("Go to main page"))})),document.querySelector(".page"))}));
