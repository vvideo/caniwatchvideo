!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,u,i,a,s,l,_,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function m(e,n){for(var t in n)e[t]=n[t];return e}function v(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,u,i,a={};for(i in n)"key"==i?o=n[i]:"ref"==i?u=n[i]:a[i]=n[i];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return y(e,a,o,u,null)}function y(e,n,t,u,i){var a={type:e,props:n,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++o:i,__i:-1,__u:0};return null==i&&null!=r.vnode&&r.vnode(a),a}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function P(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return P(e)}}function S(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!C.__r++||i!==r.debounceRendering)&&((i=r.debounceRendering)||a)(C)}function C(){var e,n,t,o,i,a,l,_;for(u.sort(s);e=u.shift();)e.__d&&(n=u.length,o=void 0,a=(i=(t=e).__v).__e,l=[],_=[],t.__P&&((o=m({},i)).__v=i.__v+1,r.vnode&&r.vnode(o),x(t.__P,o,i,t.__n,t.__P.namespaceURI,32&i.__u?[a]:null,l,null==a?k(i):a,!!(32&i.__u),_),o.__v=i.__v,o.__.__k[o.__i]=o,N(l,o,_),o.__e!=a&&P(o)),u.length>n&&u.sort(s));C.__r=0}function I(e,n,t,r,o,u,i,a,s,l,_){var c,f,h,m,v,g=r&&r.__k||p,y=n.length;for(t.__d=s,D(t,n,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=c,x(e,h,f,o,u,i,a,s,l,_),m=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&G(f.ref,null,h),_.push(h.ref,h.__c||m,h)),null==v&&null!=m&&(v=m),65536&h.__u||f.__k===h.__k?(s&&"string"==typeof h.type&&!e.contains(s)&&(s=k(f)),s=H(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:m&&(s=m.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=v}function D(e,n,t){var r,o,u,i,a,s=n.length,l=t.length,_=l,c=0;for(e.__k=[],r=0;r<s;r++)i=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=T(o,t,i,_),o.__i=a,u=null,-1!==a&&(_--,(u=t[a])&&(u.__u|=131072)),null==u||null===u.__v?(-1==a&&c--,"function"!=typeof o.type&&(o.__u|=65536)):a!==i&&(a==i-1?c=a-i:a==i+1?c++:a>i?_>s-i?c+=a-i:c--:a<i&&c++,a!==r+c&&(o.__u|=65536))):(u=t[i])&&null==u.key&&u.__e&&!(131072&u.__u)&&(u.__e==e.__d&&(e.__d=k(u)),W(u,u,!1),t[i]=null,_--);if(_)for(r=0;r<l;r++)null!=(u=t[r])&&!(131072&u.__u)&&(u.__e==e.__d&&(e.__d=k(u)),W(u,u))}function H(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=H(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function T(e,n,t,r){var o=e.key,u=e.type,i=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&u===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;i>=0||a<n.length;){if(i>=0){if((s=n[i])&&!(131072&s.__u)&&o==s.key&&u===s.type)return i;i--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&u===s.type)return a;a++}}return-1}function R(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function A(e,n,t,r,o){var u;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||R(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||R(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])u=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+u]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,u?c:_,u)):e.removeEventListener(n,u?c:_,u);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function M(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function x(e,n,t,o,u,i,a,s,l,_){var c,d,p,f,v,g,y,k,P,S,C,D,H,T,R,A,M=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),i=[s=n.__e=t.__e]),(c=r.__b)&&c(n);e:if("function"==typeof M)try{if(k=n.props,P="prototype"in M&&M.prototype.render,S=(c=M.contextType)&&o[c.__c],C=c?S?S.props.value:c.__:o,t.__c?y=(d=n.__c=t.__c).__=d.__E:(P?n.__c=d=new M(k,C):(n.__c=d=new b(k,C),d.constructor=M,d.render=E),S&&S.sub(d),d.props=k,d.state||(d.state={}),d.context=C,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),P&&null==d.__s&&(d.__s=d.state),P&&null!=M.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=m({},d.__s)),m(d.__s,M.getDerivedStateFromProps(k,d.__s))),f=d.props,v=d.state,d.__v=n,p)P&&null==M.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),P&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(P&&null==M.getDerivedStateFromProps&&k!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,C),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,C)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=k,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),D=0;D<d._sb.length;D++)d.__h.push(d._sb[D]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,C),P&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,v,g)}))}if(d.context=C,d.props=k,d.__P=e,d.__e=!1,H=r.__r,T=0,P){for(d.state=d.__s,d.__d=!1,H&&H(n),c=d.render(d.props,d.state,d.context),R=0;R<d._sb.length;R++)d.__h.push(d._sb[R]);d._sb=[]}else do{d.__d=!1,H&&H(n),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++T<25);d.state=d.__s,null!=d.getChildContext&&(o=m(m({},o),d.getChildContext())),P&&!p&&null!=d.getSnapshotBeforeUpdate&&(g=d.getSnapshotBeforeUpdate(f,v)),I(e,h(A=null!=c&&c.type===w&&null==c.key?c.props.children:c)?A:[A],n,t,o,u,i,a,s,l,_),d.base=n.__e,n.__u&=-161,d.__h.length&&a.push(d),y&&(d.__E=d.__=null)}catch(e){n.__v=null,l||null!=i?(n.__e=s,n.__u|=l?160:32,i[i.indexOf(s)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=U(t.__e,n,t,o,u,i,a,l,_);(c=r.diffed)&&c(n)}function N(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)G(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function U(e,n,r,o,u,i,a,s,l){var _,c,p,f,m,g,y,w=r.props,b=n.props,P=n.type;if("svg"===P?u="http://www.w3.org/2000/svg":"math"===P?u="http://www.w3.org/1998/Math/MathML":u||(u="http://www.w3.org/1999/xhtml"),null!=i)for(_=0;_<i.length;_++)if((m=i[_])&&"setAttribute"in m==!!P&&(P?m.localName===P:3===m.nodeType)){e=m,i[_]=null;break}if(null==e){if(null===P)return document.createTextNode(b);e=document.createElementNS(u,P,b.is&&b),i=null,s=!1}if(null===P)w===b||s&&e.data===b||(e.data=b);else{if(i=i&&t.call(e.childNodes),w=r.props||d,!s&&null!=i)for(w={},_=0;_<e.attributes.length;_++)w[(m=e.attributes[_]).name]=m.value;for(_ in w)if(m=w[_],"children"==_);else if("dangerouslySetInnerHTML"==_)p=m;else if("key"!==_&&!(_ in b)){if("value"==_&&"defaultValue"in b||"checked"==_&&"defaultChecked"in b)continue;A(e,_,null,m,u)}for(_ in b)m=b[_],"children"==_?f=m:"dangerouslySetInnerHTML"==_?c=m:"value"==_?g=m:"checked"==_?y=m:"key"===_||s&&"function"!=typeof m||w[_]===m||A(e,_,m,w[_],u);if(c)s||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),I(e,h(f)?f:[f],n,r,o,"foreignObject"===P?"http://www.w3.org/1999/xhtml":u,i,a,i?i[0]:r.__k&&k(r,0),s,l),null!=i)for(_=i.length;_--;)null!=i[_]&&v(i[_]);s||(_="value",void 0!==g&&(g!==e[_]||"progress"===P&&!g||"option"===P&&g!==w[_])&&A(e,_,g,w[_],u),_="checked",void 0!==y&&y!==e[_]&&A(e,_,y,w[_],u))}return e}function G(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function W(e,n,t){var o,u;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||G(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&W(o[u],n,t||"function"!=typeof e.type);t||null==e.__e||v(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,u,i;n=n.__;)if((o=n.__c)&&!o.__)try{if((u=o.constructor)&&null!=u.getDerivedStateFromError&&(o.setState(u.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=m({},this.state),"function"==typeof e&&(e=e(m({},t),this.props)),e&&m(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),S(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},b.prototype.render=w,u=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},C.__r=0,l=0,_=M(!1),c=M(!0);var F=function(e,n,t,r){var o;n[0]=0;for(var u=1;u<n.length;u++){var i=n[u++],a=n[u]?(n[0]|=i?1:2,t[n[u++]]):n[++u];3===i?r[0]=a:4===i?r[1]=Object.assign(r[1]||{},a):5===i?(r[1]=r[1]||{})[n[++u]]=a:6===i?r[1][n[++u]]+=a+"":i?(o=e.apply(a,F(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[u-2]=0,n[u]=o)):r.push(a)}return r},L=new Map;var B=function(e){var n=L.get(this);return n||(n=new Map,L.set(this,n)),(n=F(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",u="",i=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,t),r=6),e&&(i.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(a(),i=[i],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:u?n===u?u="":o+=n:'"'===n||"'"===n?u=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(a(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,i=i[0])}return a(),i}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function O(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=K(r,t)),r):(n&&(r=K(r,n)),r)}}function K(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var j,V=O("header");function q(e){return B(j||(j=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),V(),e.children)}var z,$={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"}};function Y(e){var n=$[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[z];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(z,'" in getText().')),e):t}function J(e){return e[z]}var Q="undefined"!=typeof document,X="undefined"!=typeof window,Z="undefined"!=typeof navigator,ee="undefined"!=typeof screen;var ne=1;function te(e,n){return(e||"").slice(0,n)}function re(){return Math.floor(Math.random()*(1<<30))}var oe=512;function ue(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function ie(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return ue(t,n,e[n])})),ue(t,"rn",re()),ue(t,"c",!!Z&&navigator.cookieEnabled),ue(t,"s",ee?[screen.width,screen.height,screen.colorDepth].join("x"):""),ue(t,"sk",X&&window.devicePixelRatio||ne),ue(t,"w",X?[window.innerWidth,window.innerHeight].join("x"):""),ue(t,"en",Q&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return ue(t,"et",r),ue(t,"st",r),ue(t,"t",te(n,oe)),t.join(":")}var ae,se=1024;function le(e){return te(e,se)}function _e(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}!function(e,n,t){!function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":ie(n,r.title),rn:re(),ut:r.ut};r.url&&(o["page-url"]=le(r.url)),r.referrer&&(o["page-ref"]=le(r.referrer)),_e(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:e,pageParams:{referrer:Q?document.referrer:"",title:Q?document.title:"",url:X&&window.location?window.location.href:""},params:t})}("caniwatchvideo.online"===window.location.host?"95998062":"97747983"),function(e){z=e}((ae=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==ae&&"ru"!==ae&&(ae="en"),ae)),window.addEventListener("beforeinstallprompt",(function(e){}));var ce,de=O("link");function pe(e){return B(ce||(ce=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),de({theme:e.theme}),e.href,e.children)}var fe,he=O("footer");function me(){return B(fe||(fe=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </div>"],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </div>"])),he(),he("item"),he("l1"),he("l2"),he("l3"),he("l4"),he("l5"),he("l6"),he("item",{g:!0}),pe,Y("Report a bug"))}var ve,ge,ye=O("main-menu");function we(e){return B(ge||(ge=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ye(),e.items.filter((function(e){return!e.hidden})).map((function(e){return B(ve||(ve=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),ye("item",{selected:e.selected}),e.url,e.title)})))}var be,ke=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},id:"keycodes",url:"./keycodes.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Pe(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=ke.map((function(n){var r=n.id===t;return r&&(document.title=J(n.header||n.menuTitle)),e(e({},n),{title:J(n.menuTitle),selected:r})}));return B(be||(be=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),we,r)}var Se,Ce,Ie,De,He=O("head");function Te(){return B(Se||(Se=n(['\n        <div class="','">\n            <span class="','"></span>',"\n        </div>\n    "],['\n        <div class="','">\n            <span class="','"></span>',"\n        </div>\n    "])),He(),He("logo"),Y("Check device online"))}function Re(e){return B(Ce||(Ce=n(["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Te,Pe,e.children,me)}!function(e,n,o){var u,i,a,s;r.__&&r.__(e,n),i=(u="function"==typeof o)?null:n.__k,a=[],s=[],x(n,e=(!u&&o||n).__k=g(w,null,[e]),i||d,d,n.namespaceURI,!u&&o?[o]:i?null:n.firstChild?t.call(n.childNodes):null,a,!u&&o?o:i?i.__e:n.firstChild,u,s),N(a,e,s)}(B(De||(De=n(["<"," //>"],["<"," //>"])),(function(){return B(Ie||(Ie=n(["\n        <",">\n            <",">404<//>\n\n            <p>","</p>\n            <p><",' href="/">',"><//></p>\n        <//>"],["\n        <",">\n            <",">404<//>\n\n            <p>","</p>\n            <p><",' href="/">',"><//></p>\n        <//>"])),Re,q,Y("Page not found."),pe,Y("Go to main page"))})),document.querySelector(".page"))}));
