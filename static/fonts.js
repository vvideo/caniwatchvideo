!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,a,s,l,c,_,d={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function y(e,n,r){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return g(e,a,o,i,null)}function g(e,n,t,i,u){var a={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(a),a}function k(e){return e.children}function b(e,n){this.props=e,this.context=n}function w(e,n){if(null==n)return e.__?w(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?w(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function P(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!I.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(I)}function I(){var e,n,t,o,u,a,l,c;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,a=(u=(t=e).__v).__e,l=[],c=[],t.__P&&((o=v({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),R(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[a]:null,l,null==a?w(u):a,!!(32&u.__u),c),o.__v=u.__v,o.__.__k[o.__i]=o,x(l,o,c),o.__e!=a&&C(o)),i.length>n&&i.sort(s));I.__r=0}function S(e,n,t,r,o,i,u,a,s,l,c){var _,p,h,v,m,y=r&&r.__k||f,g=n.length;for(t.__d=s,H(t,n,y),s=t.__d,_=0;_<g;_++)null!=(h=t.__k[_])&&"boolean"!=typeof h&&"function"!=typeof h&&(p=-1===h.__i?d:y[h.__i]||d,h.__i=_,R(e,h,p,o,i,u,a,s,l,c),v=h.__e,h.ref&&p.ref!=h.ref&&(p.ref&&F(p.ref,null,h),c.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||p.__k===h.__k?s=A(h,s,e):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,i,u,a,s=n.length,l=t.length,c=l,_=0;for(e.__k=[],r=0;r<s;r++)u=r+_,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):h(o)?g(k,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=N(o,t,u,c),o.__i=a,i=null,-1!==a&&(c--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&_--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a==u-1?_=a-u:a==u+1?_++:a>u?c>s-u?_+=a-u:_--:a<u&&_++,a!==r+_&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=w(i)),E(i,i,!1),t[u]=null,c--);if(c)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=w(i)),E(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(n&&e.type&&!t.contains(n)&&(n=w(e)),t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function N(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a++}}return-1}function D(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||p.test(n)?t:t+"px"}function T(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||D(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||D(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?_:c,i)):e.removeEventListener(n,i?_:c,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function M(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function R(e,n,t,o,i,u,a,s,l,c){var _,d,f,p,m,y,g,w,C,P,I,H,A,N,D,T,M=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),u=[s=n.__e=t.__e]),(_=r.__b)&&_(n);e:if("function"==typeof M)try{if(w=n.props,C="prototype"in M&&M.prototype.render,P=(_=M.contextType)&&o[_.__c],I=_?P?P.props.value:_.__:o,t.__c?g=(d=n.__c=t.__c).__=d.__E:(C?n.__c=d=new M(w,I):(n.__c=d=new b(w,I),d.constructor=M,d.render=L),P&&P.sub(d),d.props=w,d.state||(d.state={}),d.context=I,d.__n=o,f=d.__d=!0,d.__h=[],d._sb=[]),C&&null==d.__s&&(d.__s=d.state),C&&null!=M.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=v({},d.__s)),v(d.__s,M.getDerivedStateFromProps(w,d.__s))),p=d.props,m=d.state,d.__v=n,f)C&&null==M.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),C&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(C&&null==M.getDerivedStateFromProps&&w!==p&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(w,I),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(w,d.__s,I)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=w,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(w,d.__s,I),C&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(p,m,y)}))}if(d.context=I,d.props=w,d.__P=e,d.__e=!1,A=r.__r,N=0,C){for(d.state=d.__s,d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),D=0;D<d._sb.length;D++)d.__h.push(d._sb[D]);d._sb=[]}else do{d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++N<25);d.state=d.__s,null!=d.getChildContext&&(o=v(v({},o),d.getChildContext())),C&&!f&&null!=d.getSnapshotBeforeUpdate&&(y=d.getSnapshotBeforeUpdate(p,m)),S(e,h(T=null!=_&&_.type===k&&null==_.key?_.props.children:_)?T:[T],n,t,o,i,u,a,s,l,c),d.base=n.__e,n.__u&=-161,d.__h.length&&a.push(d),g&&(d.__E=d.__=null)}catch(e){if(n.__v=null,l||null!=u){for(n.__u|=l?160:32;s&&8===s.nodeType&&s.nextSibling;)s=s.nextSibling;u[u.indexOf(s)]=null,n.__e=s}else n.__e=t.__e,n.__k=t.__k;r.__e(e,n,t)}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=j(t.__e,n,t,o,i,u,a,l,c);(_=r.diffed)&&_(n)}function x(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)F(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function j(e,n,r,o,i,u,a,s,l){var c,_,f,p,v,y,g,k=r.props,b=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((v=u[c])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,u[c]=null;break}if(null==e){if(null===C)return document.createTextNode(b);e=document.createElementNS(i,C,b.is&&b),u=null,s=!1}if(null===C)k===b||s&&e.data===b||(e.data=b);else{if(u=u&&t.call(e.childNodes),k=r.props||d,!s&&null!=u)for(k={},c=0;c<e.attributes.length;c++)k[(v=e.attributes[c]).name]=v.value;for(c in k)if(v=k[c],"children"==c);else if("dangerouslySetInnerHTML"==c)f=v;else if("key"!==c&&!(c in b)){if("value"==c&&"defaultValue"in b||"checked"==c&&"defaultChecked"in b)continue;T(e,c,null,v,i)}for(c in b)v=b[c],"children"==c?p=v:"dangerouslySetInnerHTML"==c?_=v:"value"==c?y=v:"checked"==c?g=v:"key"===c||s&&"function"!=typeof v||k[c]===v||T(e,c,v,k[c],i);if(_)s||f&&(_.__html===f.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),n.__k=[];else if(f&&(e.innerHTML=""),S(e,h(p)?p:[p],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:r.__k&&w(r,0),s,l),null!=u)for(c=u.length;c--;)null!=u[c]&&m(u[c]);s||(c="value",void 0!==y&&(y!==e[c]||"progress"===C&&!y||"option"===C&&y!==k[c])&&T(e,c,y,k[c],i),c="checked",void 0!==g&&g!==e[c]&&T(e,c,g,k[c],i))}return e}function F(e,n,t){try{if("function"==typeof e){var o="function"==typeof e.__u;o&&e.__u(),o&&null==n||(e.__u=e(n))}else e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||F(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function L(e,n,t){return this.constructor(e,t)}t=f.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},b.prototype.render=k,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},I.__r=0,l=0,c=M(!1),_=M(!0);var U=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,U(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},G=new Map;var W,V=function(e){var n=G.get(this);return n||(n=new Map,G.set(this,n)),(n=U(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(y),B=[{name:"EN",value:"en",emoji:"🇺🇸"},{name:"RU",value:"ru",emoji:"🇷🇺"}],O={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},"Request fonts":{en:"Request fonts",ru:"Запросить шрифты"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"},Geo:{en:"Geo",ru:"Гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Check camera":{en:"Check camera",ru:"Проверить камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"},"Local fonts":{en:"Local fonts",ru:"Локальные шрифты"},Filter:{en:"Filter",ru:"Фильтр"},Family:{en:"Family",ru:"Семейство"},Style:{en:"Style",ru:"Стиль"},"Local Font Access API is not supported.":{en:"Local Font Access API is not supported.",ru:"Local Font Access API не поддерживается."},"Group by family":{en:"Group by family",ru:"Группировать по семейству"},"Sample rate":{en:"Sample rate",ru:"Частота дискретизации"},"Sample size":{en:"Sample size",ru:"Размер семпла"},"Channel count":{en:"Channel count",ru:"Количество каналов"},"Auto gain control":{en:"Auto gain control",ru:"Автоматическая регулировка усиления"},Latency:{en:"Latency",ru:"Задержка"},"Noise suppression":{en:"Noise suppression",ru:"Шумоподавление"},"Echo cancellation":{en:"Echo cancellation",ru:"Эхоподавление"},"Background blur":{en:"Background blur",ru:"Размытие фона"},"hr.":{en:"hr.",ru:"ч."},"min.":{en:"min.",ru:"мин."},"sec.":{en:"sec.",ru:"с."},"Discharging time":{en:"Discharging time",ru:"Время до полной разрядки"},"Charging time":{en:"Charging time",ru:"Время до полной зарядки"},"Check vibration":{en:"Check vibration",ru:"Проверить вибрацию"},"Support is mainly on mobile devices.":{en:"Support is mainly on mobile devices.",ru:"Поддержка в основном на мобильных устройствах."},Vibrate:{en:"Vibrate",ru:"Вибрировать"},"Vibration API is not supported.":{en:"Vibration API is not supported.",ru:"Vibration API не поддерживается."},"Check mic":{en:"Check mic",ru:"Проверить микрофон"},"Hear yourself":{en:"Hear yourself",ru:"Слышать себя"},"Max touch points":{en:"Max touch points",ru:"Max touch points"},"Media Devices API is not supported.":{en:"Media Devices API is not supported.",ru:"Media Devices API не поддерживается."},"Check HDCP version":{en:"Check HDCP version",ru:"Проверить HDCP версию"}};function q(){return function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}([],B,!0)}function K(e){var n=O[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[W];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(W,'" in getText().')),e):t}function z(){return W}var $,Y,J,Q,X=0,Z=[],ee=r,ne=ee.__b,te=ee.__r,re=ee.diffed,oe=ee.__c,ie=ee.unmount,ue=ee.__;function ae(e,n){ee.__h&&ee.__h(Y,e,X||n),X=0;var t=Y.__H||(Y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function se(e){return X=1,function(e,n){var t=ae($++,2);if(t.t=e,!t.__c&&(t.__=[ye(void 0,n),function(e){var n=t.__N?t.__N[0]:t.__[0],r=t.t(n,e);n!==r&&(t.__N=[r,t.__[1]],t.__c.setState({}))}],t.__c=Y,!Y.u)){var r=function(e,n,r){if(!t.__c.__H)return!0;var i=t.__c.__H.__.filter((function(e){return!!e.__c}));if(i.every((function(e){return!e.__N})))return!o||o.call(this,e,n,r);var u=!1;return i.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&t.__c.props===e)&&(!o||o.call(this,e,n,r))};Y.u=!0;var o=Y.shouldComponentUpdate,i=Y.componentWillUpdate;Y.componentWillUpdate=function(e,n,t){if(this.__e){var u=o;o=void 0,r(e,n,t),o=u}i&&i.call(this,e,n,t)},Y.shouldComponentUpdate=r}return t.__N||t.__}(ye,e)}function le(e){return X=5,ce((function(){return{current:e}}),[])}function ce(e,n){var t=ae($++,7);return me(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function _e(e,n){return X=8,ce((function(){return e}),n)}function de(){for(var e;e=Z.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(he),e.__H.__h.forEach(ve),e.__H.__h=[]}catch(n){e.__H.__h=[],ee.__e(n,e.__v)}}ee.__b=function(e){Y=null,ne&&ne(e)},ee.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),ue&&ue(e,n)},ee.__r=function(e){te&&te(e),$=0;var n=(Y=e.__c).__H;n&&(J===Y?(n.__h=[],Y.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach(he),n.__h.forEach(ve),n.__h=[],$=0)),J=Y},ee.diffed=function(e){re&&re(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==Z.push(n)&&Q===ee.requestAnimationFrame||((Q=ee.requestAnimationFrame)||pe)(de)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),J=Y=null},ee.__c=function(e,n){n.some((function(e){try{e.__h.forEach(he),e.__h=e.__h.filter((function(e){return!e.__||ve(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],ee.__e(t,e.__v)}})),oe&&oe(e,n)},ee.unmount=function(e){ie&&ie(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{he(e)}catch(e){n=e}})),t.__H=void 0,n&&ee.__e(n,t.__v))};var fe="function"==typeof requestAnimationFrame;function pe(e){var n,t=function(){clearTimeout(r),fe&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);fe&&(n=requestAnimationFrame(t))}function he(e){var n=Y,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),Y=n}function ve(e){var n=Y;e.__c=e.__(),Y=n}function me(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function ye(e,n){return"function"==typeof n?n(e):n}function ge(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=ke(r,t)),r):(n&&(r=ke(r,n)),r)}}function ke(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}function be(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}var we,Ce=ge("button");function Pe(e){var t=e.disabled,r=e.size,o=e.theme,i=e.onClick,u=be(e.class,Ce({theme:o,size:r,disabled:t})),a=_e((function(){t||i&&i()}),[t,i]);return V(we||(we=n(['<button class="','" disabled="','" onClick="','">',"</button>"],['<button class="','" disabled="','" onClick="','">',"</button>"])),u,t,a,e.children)}var Ie,Se=ge("checkbox");function He(e){var t=se(e.checked),r=t[0],o=t[1],i=le(),u=_e((function(){if(i.current){var n=!i.current.checked;o(n),e.onClick&&e.onClick(n)}}),[r]),a=be(e.class,Se({checked:r,theme:e.theme}));return V(Ie||(Ie=n(['<label class="','" onClick="','">\n        <input autocomplete="off" ref="','" class="','" type="checkbox" checked="','" />',"\n    </label>"],['<label class="','" onClick="','">\n        <input autocomplete="off" ref="','" class="','" type="checkbox" checked="','" />',"\n    </label>"])),a,u,i,Se("input"),r,e.label)}var Ae,Ne=ge("input");function De(e){var t=be(Ne(),e.class),r=se(e.value||""),o=r[0],i=r[1],u=le(),a=_e((function(){if(u.current){var n=u.current.value;i(n),e.onChange&&e.onChange(n)}}),[o,e.onChange]);return V(Ae||(Ae=n(['<input ref="','" class="','" onInput="','" placeholder="','" value="','" />'],['<input ref="','" class="','" onInput="','" placeholder="','" value="','" />'])),u,t,a,e.placeholder,o)}var Te,Me=ge("warning-message");function Re(e){return V(Te||(Te=n(['<span class="','">⚠️ ',"</span>"],['<span class="','">⚠️ ',"</span>"])),Me({theme:e.theme}),e.children)}var xe,je,Fe=ge("font-item");function Ee(e){var t=se(!1),r=t[0],o=t[1],i=_e((function(){o(!r)}),[r]);return V(je||(je=n(['<div class="','">\n        <div class="','">\n            <span class="','" onClick="','">',"</span>\n            ","\n        </div>\n    </div>"],['<div class="','">\n        <div class="','">\n            <span class="','" onClick="','">',"</span>\n            ","\n        </div>\n    </div>"])),Fe({opened:r}),Fe("value"),Fe("switcher"),i,e.fullName,r?V(xe||(xe=n(['<div class="','">\n                <div class="','">',": ",'</div>\n                <div class="','">',": ","</div>\n            </div>"],['<div class="','">\n                <div class="','">',": ",'</div>\n                <div class="','">',": ","</div>\n            </div>"])),Fe("content"),Fe("family"),K("Family"),e.family,Fe("style"),K("Style"),e.style):"")}var Le,Ue,Ge=ge("font-list");function We(e){var t=e.items;return V(Ue||(Ue=n(['<div class="','">\n        ',"\n    </div>"],['<div class="','">\n        ',"\n    </div>"])),Ge(),t.map((function(e,t){return V(Le||(Le=n(["<",' key="','" family="','" fullName="','" style="','" num="','" //>'],["<",' key="','" family="','" fullName="','" style="','" num="','" //>'])),Ee,e.fullName,e.family,e.fullName,e.style,t+1)})))}var Ve,Be,Oe=ge("font-family-item");function qe(e){var t=se(!1),r=t[0],o=t[1],i=_e((function(){o(!r)}),[r]);return V(Be||(Be=n(['<div class="','">\n        <div class="','">\n            <span class="','" onClick="','">',"</span>\n            ","\n        </div>\n    </div>"],['<div class="','">\n        <div class="','">\n            <span class="','" onClick="','">',"</span>\n            ","\n        </div>\n    </div>"])),Oe({opened:r}),Oe("value"),Oe("switcher"),i,e.name,r?V(Ve||(Ve=n(['<div class="','"><',' items="','" //></div>'],['<div class="','"><',' items="','" //></div>'])),Oe("items"),We,e.items):"")}var Ke,ze,$e=ge("font-list-grouped");function Ye(e){var t=function(e){var n={};e.forEach((function(e){n[e.family]=n[e.family]||{name:e.family,items:[]},n[e.family].items.push(e)}));var t=[];return Object.keys(n).forEach((function(e){t.push(n[e]),n[e].items.sort((function(e,n){return e.fullName>n.fullName?1:-1}))})),t.sort((function(e,n){return e.name>n.name?1:-1})),t}(e.items);return V(ze||(ze=n(['<div class="','">\n        ',"\n    </div>"],['<div class="','">\n        ',"\n    </div>"])),$e(),t.map((function(e,t){return V(Ke||(Ke=n(["<",' key="','" name="','" items="','" num="','" //>'],["<",' key="','" name="','" items="','" num="','" //>'])),qe,e.name,e.name,e.items,t+1)})))}var Je,Qe="undefined"==typeof window,Xe=ge("spinner");function Ze(e){return V(Je||(Je=n(['<div class="','"></div>'],['<div class="','"></div>'])),Xe({size:e.size}))}var en,nn,tn,rn,on,un,an=ge("fonts");function sn(){if(Qe)return V(en||(en=n(["<"," //>"],["<"," //>"])),Ze);if(!window.queryLocalFonts)return V(nn||(nn=n(["<",">","<//>"],["<",">","<//>"])),Re,K("Local Font Access API is not supported."));var e=se(),t=e[0],r=e[1],o=se(""),i=o[0],u=o[1],a=se(!0),s=a[0],l=a[1],c=_e((function(){window.queryLocalFonts&&window.queryLocalFonts().then((function(e){r(e)}))}),[]);!function(e,n){var t=ae($++,3);!ee.__s&&me(t.__H,n)&&(t.__=e,t.i=n,Y.__H.__h.push(t))}((function(){c()}),[]);var _=_e((function(e){l(e)}),[]),d=_e((function(e){u(e)}),[]),f=function(e,n){return(e||[]).filter((function(e){return-1!==e.fullName.toLowerCase().indexOf(n.toLowerCase())}))}(t||[],i);return V(un||(un=n(['\n        <div class="','">\n            <div class="','">\n                ',"\n                ","\n                ","\n            </div>\n            <",' items="','" />\n        </div>\n    '],['\n        <div class="','">\n            <div class="','">\n                ',"\n                ","\n                ","\n            </div>\n            <",' items="','" />\n        </div>\n    '])),an(),an("controls"),t?"":V(tn||(tn=n(["<",' theme="active" onClick="','">',"<//>"],["<",' theme="active" onClick="','">',"<//>"])),Pe,c,K("Request fonts")),t?V(rn||(rn=n(["<",' class="','" placeholder="','" value="" onChange="','" //>'],["<",' class="','" placeholder="','" value="" onChange="','" //>'])),De,an("filter"),K("Filter"),d):"",t?V(on||(on=n(['<div class="','"><',' onClick="','" label="','" checked="','" //></div>'],['<div class="','"><',' onClick="','" label="','" checked="','" //></div>'])),an("group-by-family"),He,_,K("Group by family"),s):"",s?Ye:We,f)}var ln="undefined"!=typeof document,cn="undefined"!=typeof window,_n="undefined"!=typeof navigator,dn="undefined"!=typeof screen;var fn=1;function pn(e,n){return(e||"").slice(0,n)}function hn(){return Math.floor(Math.random()*(1<<30))}var vn=512;function mn(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function yn(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return mn(t,n,e[n])})),mn(t,"rn",hn()),mn(t,"c",!!_n&&navigator.cookieEnabled),mn(t,"s",dn?[screen.width,screen.height,screen.colorDepth].join("x"):""),mn(t,"sk",cn&&window.devicePixelRatio||fn),mn(t,"w",cn?[window.innerWidth,window.innerHeight].join("x"):""),mn(t,"en",ln&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return mn(t,"et",r),mn(t,"st",r),mn(t,"t",pn(n,vn)),t.join(":")}var gn,kn,bn=1024;function wn(e){return pn(e,bn)}function Cn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}function Pn(){var e,n;document.removeEventListener("mousemove",Pn),e=document.body,n="hover_yes",e.classList?e.classList.add(n):e.className+=(e.className?" ":"")+n}if(!Qe){(function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":yn(n,r.title),rn:hn(),ut:r.ut};r.url&&(o["page-url"]=wn(r.url)),r.referrer&&(o["page-ref"]=wn(r.referrer)),Cn(t,o)})({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:ln?document.referrer:"",title:ln?document.title:"",url:cn&&window.location?window.location.href:""},params:kn});var In=function(){var e,n=(null===(e=window.appData)||void 0===e?void 0:e.lang)||function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en";return"en"!==n&&"ru"!==n&&(n="en"),n}();!function(e){W=e}(In),window.addEventListener("beforeinstallprompt",(function(e){})),document.addEventListener("mousemove",Pn),null===(gn=document.documentElement)||void 0===gn||gn.setAttribute("lang",In)}var Sn,Hn=ge("link");function An(e){var t=be(e.class,Hn({theme:e.theme}));return V(Sn||(Sn=n(['<a target="','" class="','" href="','">',"</a>"],['<a target="','" class="','" href="','">',"</a>"])),e.target,t,e.href,e.children)}var Nn,Dn=ge("lang-switcher-item");function Tn(e){var t=e.emoji,r=e.onClick,o=e.name,i=e.value,u=e.selected,a=_e((function(){r(i)}),[]);return V(Nn||(Nn=n(['<div class="','" onClick="','">'," "," ","</div>"],['<div class="','" onClick="','">'," "," ","</div>"])),Dn(),a,t,o,u?" ✓":"")}function Mn(e,n){var t="index"===e?"":e+"/";return"/".concat(n||z(),"/").concat(t)}var Rn,xn,jn=ge("lang-switcher");function Fn(){var e=se(!1),t=e[0],r=e[1],o=z(),i=q(),u=_e((function(e){r(!1),window.location.href=Mn(window.appData.pageId,e)}),[r]),a=_e((function(){r(!0)}),[r]),s=i.filter((function(e){return o===e.value}))[0];return V(xn||(xn=n(['<div class="','">\n        <div class="','" onClick="','"><span class="','">',"</span> ",'</div>\n        <div class="','">\n            ',"\n        </div>\n    </div>"],['<div class="','">\n        <div class="','" onClick="','"><span class="','">',"</span> ",'</div>\n        <div class="','">\n            ',"\n        </div>\n    </div>"])),jn(),jn("current"),a,jn("emoji"),s.emoji,s.name,jn("popup",{visible:t}),i.map((function(e){return V(Rn||(Rn=n(["<",' selected="','" key="','" onClick="','" ..."','" //>'],["<",' selected="','" key="','" onClick="','" ..."','" //>'])),Tn,o===e.value,e.value,u,e)})))}var En,Ln=ge("footer");function Un(){return V(En||(En=n(['<footer class="','">\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues/new">','<//></div>\n        <div class="','"><',' //></div>\n        <div class="','">© Vvideo</div>\n    </footer>'],['<footer class="','">\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues/new">','<//></div>\n        <div class="','"><',' //></div>\n        <div class="','">© Vvideo</div>\n    </footer>'])),Ln(),Ln("item",{report:!0}),An,K("Report a bug"),Ln("item"),Fn,Ln("item"))}var Gn,Wn,Vn=ge("main-menu");function Bn(e){return V(Wn||(Wn=n(['\n        <nav class="','">\n            <ul class="','">\n            ',"\n            </ul>\n        </nav>\n    "],['\n        <nav class="','">\n            <ul class="','">\n            ',"\n            </ul>\n        </nav>\n    "])),Vn(),Vn("list"),e.items.filter((function(e){return!e.hidden})).map((function(e){return V(Gn||(Gn=n(['<li class="','" key="','"><a class="','" href="','">',"</a></li>"],['<li class="','" key="','"><a class="','" href="','">',"</a></li>"])),Vn("item",{selected:e.selected}),e.id,Vn("link"),Mn(e.id),e.title)})))}var On,qn=[{header:{en:"Check device online",ru:"Проверь устройство онлайн"},emoji:"",menuTitle:{en:"",ru:""},id:"index",hidden:!0},{header:{en:"Video",ru:"Видео"},emoji:"⏯",menuTitle:{en:"Video",ru:"Видео"},id:"video"},{menuTitle:{en:"Audio",ru:"Аудио"},emoji:"🔊",id:"audio"},{menuTitle:{en:"Screen",ru:"Экран"},emoji:"🖥️",id:"screen"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},emoji:"📸",id:"camera"},{menuTitle:{en:"Mic",ru:"Микрофон"},emoji:"🎙️",id:"mic"},{menuTitle:{en:"GPU",ru:"GPU"},emoji:"⚙️",id:"gpu"},{menuTitle:{en:"Mouse",ru:"Мышь"},emoji:"🖱",id:"mouse"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},emoji:"⌨️",id:"keyboard"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},emoji:"",id:"keycodes",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},emoji:"🕹️",id:"gamepad"},{menuTitle:{en:"Storage",ru:"Хранилище"},emoji:"💽",id:"storage"},{menuTitle:{en:"Network",ru:"Сеть"},emoji:"🌐",id:"network"},{menuTitle:{en:"Geo",ru:"Гео"},emoji:"📍",id:"geo"},{menuTitle:{en:"Platform",ru:"Платформа"},emoji:"💻",id:"platform"},{menuTitle:{en:"Battery",ru:"Батарея"},emoji:"🔋",id:"battery"},{menuTitle:{en:"Fonts",ru:"Шрифты"},emoji:"❝",id:"fonts"},{menuTitle:{en:"404",ru:"404"},emoji:"",id:"error404",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},emoji:"",id:"test-dead-pixels",hidden:!0}];function Kn(){var t=Qe?"":window.location.pathname.split(/[?./]/)[2],r=qn.map((function(n){var r,o=n.id===t;return e(e({},n),{url:Mn(n.id),title:(r=n.menuTitle,r[W]),selected:o})}));return V(On||(On=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),Bn,r)}var zn,$n,Yn,Jn=ge("header");function Qn(){return V(zn||(zn=n(['\n        <header class="','">\n            <',' theme="white" href="','"><span class="','"></span>',"<//>\n        </header>\n    "],['\n        <header class="','">\n            <',' theme="white" href="','"><span class="','"></span>',"<//>\n        </header>\n    "])),Jn(),An,Mn("index"),Jn("logo"),K("Check device online"))}function Xn(e){return V(Yn||(Yn=n(["\n        <div>\n            <"," //>\n            ","\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            ","\n\n            ","\n\n            <","><//>\n        </div>"])),Qn,e.withoutMenu?"":V($n||($n=n(["<","><//>"],["<","><//>"])),Kn),e.children,Un)}var Zn,et,nt,tt=ge("page-title");function rt(e){return V(Zn||(Zn=n(['\n        <h1 class="','">\n            ',"\n        </h1>\n    "],['\n        <h1 class="','">\n            ',"\n        </h1>\n    "])),tt(),e.children)}!function(e,n,o){var i,u,a,s;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,a=[],s=[],R(n,e=(!i&&o||n).__k=y(k,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,a,!i&&o?o:u?u.__e:n.firstChild,i,s),x(a,e,s)}(V(nt||(nt=n(["<"," //>"],["<"," //>"])),(function(){return V(et||(et=n(["\n        <",">\n            <",">","<//>\n            <","><//>\n        <//>"],["\n        <",">\n            <",">","<//>\n            <","><//>\n        <//>"])),Xn,rt,K("Local fonts"),sn)})),document.querySelector(".page"))}));
