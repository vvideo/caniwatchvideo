!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,a,s,l,_,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function m(e,n){for(var t in n)e[t]=n[t];return e}function v(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return y(e,a,o,i,null)}function y(e,n,t,i,u){var a={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(a),a}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function S(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return S(e)}}function P(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!I.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(I)}function I(){var e,n,t,o,u,a,l,_;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,a=(u=(t=e).__v).__e,l=[],_=[],t.__P&&((o=m({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),R(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[a]:null,l,null==a?k(u):a,!!(32&u.__u),_),o.__v=u.__v,o.__.__k[o.__i]=o,x(l,o,_),o.__e!=a&&S(o)),i.length>n&&i.sort(s));I.__r=0}function C(e,n,t,r,o,i,u,a,s,l,_){var c,f,h,m,v,g=r&&r.__k||p,y=n.length;for(t.__d=s,A(t,n,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=c,R(e,h,f,o,i,u,a,s,l,_),m=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&F(f.ref,null,h),_.push(h.ref,h.__c||m,h)),null==v&&null!=m&&(v=m),65536&h.__u||f.__k===h.__k?(s&&"string"==typeof h.type&&!e.contains(s)&&(s=k(f)),s=H(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:m&&(s=m.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=v}function A(e,n,t){var r,o,i,u,a,s=n.length,l=t.length,_=l,c=0;for(e.__k=[],r=0;r<s;r++)u=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=D(o,t,u,_),o.__i=a,i=null,-1!==a&&(_--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&c--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a==u-1?c=a-u:a==u+1?c++:a>u?_>s-u?c+=a-u:c--:a<u&&c++,a!==r+c&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),W(i,i,!1),t[u]=null,_--);if(_)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),W(i,i))}function H(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=H(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a++}}return-1}function T(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function M(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||T(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||T(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?c:_,i)):e.removeEventListener(n,i?c:_,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function N(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function R(e,n,t,o,i,u,a,s,l,_){var c,d,p,f,v,g,y,k,S,P,I,A,H,D,T,M,N=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),u=[s=n.__e=t.__e]),(c=r.__b)&&c(n);e:if("function"==typeof N)try{if(k=n.props,S="prototype"in N&&N.prototype.render,P=(c=N.contextType)&&o[c.__c],I=c?P?P.props.value:c.__:o,t.__c?y=(d=n.__c=t.__c).__=d.__E:(S?n.__c=d=new N(k,I):(n.__c=d=new b(k,I),d.constructor=N,d.render=E),P&&P.sub(d),d.props=k,d.state||(d.state={}),d.context=I,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),S&&null==d.__s&&(d.__s=d.state),S&&null!=N.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=m({},d.__s)),m(d.__s,N.getDerivedStateFromProps(k,d.__s))),f=d.props,v=d.state,d.__v=n,p)S&&null==N.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),S&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(S&&null==N.getDerivedStateFromProps&&k!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,I),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,I)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=k,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),A=0;A<d._sb.length;A++)d.__h.push(d._sb[A]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,I),S&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,v,g)}))}if(d.context=I,d.props=k,d.__P=e,d.__e=!1,H=r.__r,D=0,S){for(d.state=d.__s,d.__d=!1,H&&H(n),c=d.render(d.props,d.state,d.context),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[]}else do{d.__d=!1,H&&H(n),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++D<25);d.state=d.__s,null!=d.getChildContext&&(o=m(m({},o),d.getChildContext())),S&&!p&&null!=d.getSnapshotBeforeUpdate&&(g=d.getSnapshotBeforeUpdate(f,v)),C(e,h(M=null!=c&&c.type===w&&null==c.key?c.props.children:c)?M:[M],n,t,o,i,u,a,s,l,_),d.base=n.__e,n.__u&=-161,d.__h.length&&a.push(d),y&&(d.__E=d.__=null)}catch(e){n.__v=null,l||null!=u?(n.__e=s,n.__u|=l?160:32,u[u.indexOf(s)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=U(t.__e,n,t,o,i,u,a,l,_);(c=r.diffed)&&c(n)}function x(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)F(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function U(e,n,r,o,i,u,a,s,l){var _,c,p,f,m,g,y,w=r.props,b=n.props,S=n.type;if("svg"===S?i="http://www.w3.org/2000/svg":"math"===S?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(_=0;_<u.length;_++)if((m=u[_])&&"setAttribute"in m==!!S&&(S?m.localName===S:3===m.nodeType)){e=m,u[_]=null;break}if(null==e){if(null===S)return document.createTextNode(b);e=document.createElementNS(i,S,b.is&&b),u=null,s=!1}if(null===S)w===b||s&&e.data===b||(e.data=b);else{if(u=u&&t.call(e.childNodes),w=r.props||d,!s&&null!=u)for(w={},_=0;_<e.attributes.length;_++)w[(m=e.attributes[_]).name]=m.value;for(_ in w)if(m=w[_],"children"==_);else if("dangerouslySetInnerHTML"==_)p=m;else if("key"!==_&&!(_ in b)){if("value"==_&&"defaultValue"in b||"checked"==_&&"defaultChecked"in b)continue;M(e,_,null,m,i)}for(_ in b)m=b[_],"children"==_?f=m:"dangerouslySetInnerHTML"==_?c=m:"value"==_?g=m:"checked"==_?y=m:"key"===_||s&&"function"!=typeof m||w[_]===m||M(e,_,m,w[_],i);if(c)s||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),C(e,h(f)?f:[f],n,r,o,"foreignObject"===S?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:r.__k&&k(r,0),s,l),null!=u)for(_=u.length;_--;)null!=u[_]&&v(u[_]);s||(_="value",void 0!==g&&(g!==e[_]||"progress"===S&&!g||"option"===S&&g!==w[_])&&M(e,_,g,w[_],i),_="checked",void 0!==y&&y!==e[_]&&M(e,_,y,w[_],i))}return e}function F(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function W(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||F(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&W(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||v(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=m({},this.state),"function"==typeof e&&(e=e(m({},t),this.props)),e&&m(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},b.prototype.render=w,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},I.__r=0,l=0,_=N(!1),c=N(!0);var B=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,B(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},G=new Map;var L,V=function(e){var n=G.get(this);return n||(n=new Map,G.set(this,n)),(n=B(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g),O={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},"Request fonts":{en:"Request fonts",ru:"Запросить шрифты"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"},"Local fonts":{en:"Local fonts",ru:"Локальные шрифты"},Filter:{en:"Filter",ru:"Фильтр"},Family:{en:"Family",ru:"Семейство"},Style:{en:"Style",ru:"Стиль"},"Local Font Access API is not supported.":{en:"Local Font Access API is not supported.",ru:"Local Font Access API не поддерживается."},"Group by family":{en:"Group by family",ru:"Группировать по семейству"},"Sample rate":{en:"Sample rate",ru:"Частота дискретизации"},"Sample size":{en:"Sample size",ru:"Размер семпла"},"Channel count":{en:"Channel count",ru:"Количество каналов"},"Auto gain control":{en:"Auto gain control",ru:"Автоматическая регулировка усиления"},Latency:{en:"Latency",ru:"Задержка"},"Noise suppression":{en:"Noise suppression",ru:"Шумоподавление"},"Echo cancellation":{en:"Echo cancellation",ru:"Эхоподавление"},"Background blur":{en:"Background blur",ru:"Размытие фона"},"hr.":{en:"hr.",ru:"ч."},"min.":{en:"min.",ru:"мин."},"sec.":{en:"sec.",ru:"с."},"Discharging time":{en:"Discharging time",ru:"Время до полной разрядки"},"Charging time":{en:"Charging time",ru:"Время до полной зарядки"},Vibration:{en:"Vibration",ru:"Вибрация"},Vibrate:{en:"Vibrate",ru:"Вибрировать"},"Vibration API is not supported":{en:"Vibration API is not supported",ru:"Vibration API не поддерживается"},"Check mic":{en:"Check mic",ru:"Проверить микрофон"},"Hear yourself":{en:"Hear yourself",ru:"Слышать себя"}};function z(e){var n=O[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[L];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(L,'" in getText().')),e):t}function q(e){return e[L]}function j(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=K(r,t)),r):(n&&(r=K(r,n)),r)}}function K(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var $,Y=j("row");function J(e){return V($||($=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Y(),Y("category"),e.name,Y("body"),e.children)}var Q,X,Z,ee=j("list");function ne(e){var t=e.items.filter((function(e){if(!e)return!1;if(1===e.length)return!0;e[0];var n=e[1];return void 0!==n&&""!==n})).map((function(e){var n=e[0],t=e[1];return 1===e.length?[n]:[n,"boolean"==typeof t?String(t):t]})),r=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}(e.class,ee());return t.length?V(Z||(Z=n(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),J,e.title,r,t.map((function(e){var t=e[0],r=e[1];return 1===e.length?V(Q||(Q=n(["<li>","</li>"],["<li>","</li>"])),t):V(X||(X=n(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}function te(e){return e?"✓":z("No")}var re,oe,ie,ue,ae=0,se=[],le=r,_e=le.__b,ce=le.__r,de=le.diffed,pe=le.__c,fe=le.unmount,he=le.__;function me(e,n){le.__h&&le.__h(oe,e,ae||n),ae=0;var t=oe.__H||(oe.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function ve(e){return ae=1,function(e,n,t){var r=me(re++,2);if(r.t=e,!r.__c&&(r.__=[Se(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=oe,!oe.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var u=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};oe.u=!0;var i=oe.shouldComponentUpdate,u=oe.componentWillUpdate;oe.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}u&&u.call(this,e,n,t)},oe.shouldComponentUpdate=o}return r.__N||r.__}(Se,e)}function ge(){for(var e;e=se.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(be),e.__H.__h.forEach(ke),e.__H.__h=[]}catch(n){e.__H.__h=[],le.__e(n,e.__v)}}le.__b=function(e){oe=null,_e&&_e(e)},le.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),he&&he(e,n)},le.__r=function(e){ce&&ce(e),re=0;var n=(oe=e.__c).__H;n&&(ie===oe?(n.__h=[],oe.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach(be),n.__h.forEach(ke),n.__h=[],re=0)),ie=oe},le.diffed=function(e){de&&de(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==se.push(n)&&ue===le.requestAnimationFrame||((ue=le.requestAnimationFrame)||we)(ge)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),ie=oe=null},le.__c=function(e,n){n.some((function(e){try{e.__h.forEach(be),e.__h=e.__h.filter((function(e){return!e.__||ke(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],le.__e(t,e.__v)}})),pe&&pe(e,n)},le.unmount=function(e){fe&&fe(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{be(e)}catch(e){n=e}})),t.__H=void 0,n&&le.__e(n,t.__v))};var ye="function"==typeof requestAnimationFrame;function we(e){var n,t=function(){clearTimeout(r),ye&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ye&&(n=requestAnimationFrame(t))}function be(e){var n=oe,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),oe=n}function ke(e){var n=oe;e.__c=e.__(),oe=n}function Se(e,n){return"function"==typeof n?n(e):n}var Pe,Ie,Ce,Ae,He,De=j("link");function Te(e){return V(Pe||(Pe=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),De({theme:e.theme}),e.href,e.children)}function Me(e){return V(Ie||(Ie=n(["\n        <",' theme="','" href="','" target="_blank">',"<//>\n    "],["\n        <",' theme="','" href="','" target="_blank">',"<//>\n    "])),Te,e.theme,e.href,e.children)}function Ne(){var e,t,r=ve(void 0),o=r[0],i=r[1];if("function"!=typeof(null===(e=navigator.storage)||void 0===e?void 0:e.estimate))return"";!function(e,n){var t=me(re++,3);!le.__s&&function(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)&&(t.__=e,t.i=n,oe.__H.__h.push(t))}((function(){navigator.storage.estimate().then((function(e){void 0!==e.quota&&i(e.quota)}))}),[]);var u,a,s=[[V(Ce||(Ce=n(["<",' theme="white" href="https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist">',"<//>"],["<",' theme="white" href="https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist">',"<//>"])),Me,z("Support of persistent storage")),te(Boolean("function"==typeof(null===(t=navigator.storage)||void 0===t?void 0:t.persist)))]];return"number"==typeof o&&s.push([V(Ae||(Ae=n(["<",' theme="white" href="https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate">',"<//>"],["<",' theme="white" href="https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate">',"<//>"])),Me,z("Storage quota for origin")),(u=o,a=Math.floor(u/1024/1024/1024*100)/100,"".concat(a," ").concat(z("GB")))]),V(He||(He=n(["<",' title="','" items="','"><//>'],["<",' title="','" items="','"><//>'])),ne,z("Features"),s)}var Re,xe,Ue,Fe,We,Ee,Be={cookies:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled",sessionStorage:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",localStorage:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",indexeddb:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",opfs:"https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system"},Ge=j("storages");function Le(){var e,t="function"==typeof(null===(e=navigator.storage)||void 0===e?void 0:e.getDirectory),r=[[V(Re||(Re=n(["<",' theme="white" href="','">Cookies<//>'],["<",' theme="white" href="','">Cookies<//>'])),Me,Be.cookies),te(navigator.cookieEnabled)],[V(xe||(xe=n(["<",' theme="white" href="','">Local storage<//>'],["<",' theme="white" href="','">Local storage<//>'])),Me,Be.localStorage),te(Boolean(window.localStorage))],[V(Ue||(Ue=n(["<",' theme="white" href="','">Session storage<//>'],["<",' theme="white" href="','">Session storage<//>'])),Me,Be.sessionStorage),te(Boolean(window.sessionStorage))],[V(Fe||(Fe=n(["<",' theme="white" href="','">IndexedDB<//>'],["<",' theme="white" href="','">IndexedDB<//>'])),Me,Be.indexeddb),te(Boolean(window.indexedDB))],[V(We||(We=n(["<",' theme="white" href="','">Origin private file system<//>'],["<",' theme="white" href="','">Origin private file system<//>'])),Me,Be.opfs),te(t)]];return V(Ee||(Ee=n(['\n        <div class="','">\n            <',' items="','" />\n\n            <div class="','">\n                <',"><//>\n            </div>\n        </div>\n    "],['\n        <div class="','">\n            <',' items="','" />\n\n            <div class="','">\n                <',"><//>\n            </div>\n        </div>\n    "])),Ge(),ne,r,Ge("features"),Ne)}var Ve="undefined"!=typeof document,Oe="undefined"!=typeof window,ze="undefined"!=typeof navigator,qe="undefined"!=typeof screen;var je=1;function Ke(e,n){return(e||"").slice(0,n)}function $e(){return Math.floor(Math.random()*(1<<30))}var Ye=512;function Je(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function Qe(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return Je(t,n,e[n])})),Je(t,"rn",$e()),Je(t,"c",!!ze&&navigator.cookieEnabled),Je(t,"s",qe?[screen.width,screen.height,screen.colorDepth].join("x"):""),Je(t,"sk",Oe&&window.devicePixelRatio||je),Je(t,"w",Oe?[window.innerWidth,window.innerHeight].join("x"):""),Je(t,"en",Ve&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Je(t,"et",r),Je(t,"st",r),Je(t,"t",Ke(n,Ye)),t.join(":")}var Xe=1024;function Ze(e){return Ke(e,Xe)}function en(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var nn,tn=window.location.host;!function(e,n,t){!function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":Qe(n,r.title),rn:$e(),ut:r.ut};r.url&&(o["page-url"]=Ze(r.url)),r.referrer&&(o["page-ref"]=Ze(r.referrer)),en(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:e,pageParams:{referrer:Ve?document.referrer:"",title:Ve?document.title:"",url:Oe&&window.location?window.location.href:""},params:t})}("caniwatchvideo.online"===tn||"checkdevice.online"===tn?"95998062":"97747983"),function(e){L=e}((nn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==nn&&"ru"!==nn&&(nn="en"),nn)),window.addEventListener("beforeinstallprompt",(function(e){}));var rn,on=j("footer");function un(){return V(rn||(rn=n(['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </footer>"],['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </footer>"])),on(),on("item"),on("l1"),on("l2"),on("l3"),on("l4"),on("l5"),on("l6"),on("item",{g:!0}),Te,z("Report a bug"))}var an,sn,ln=j("main-menu");function _n(e){return V(sn||(sn=n(['\n        <nav class="','">\n            ',"\n        </nav>\n    "],['\n        <nav class="','">\n            ',"\n        </nav>\n    "])),ln(),e.items.filter((function(e){return!e.hidden})).map((function(e){return V(an||(an=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),ln("item",{selected:e.selected}),e.url,e.title)})))}var cn,dn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"Mic",ru:"Микрофон"},id:"mic",url:"./mic.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},id:"keycodes",url:"./keycodes.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"Fonts",ru:"Шрифты"},id:"fonts",url:"./fonts.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function pn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=dn.map((function(n){var r=n.id===t;return r&&(document.title=q(n.header||n.menuTitle)),e(e({},n),{title:q(n.menuTitle),selected:r})}));return V(cn||(cn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),_n,r)}var fn,hn,mn=j("header");function vn(){return V(fn||(fn=n(['\n        <header class="','">\n            <',' theme="white" href="/"><span class="','"></span>',"<//>\n        </header>\n    "],['\n        <header class="','">\n            <',' theme="white" href="/"><span class="','"></span>',"<//>\n        </header>\n    "])),mn(),Te,mn("logo"),z("Check device online"))}function gn(e){return V(hn||(hn=n(["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),vn,pn,e.children,un)}var yn,wn,bn,kn=j("page-title");function Sn(e){return V(yn||(yn=n(['\n        <h1 class="','">\n            ',"\n        </h1>\n    "],['\n        <h1 class="','">\n            ',"\n        </h1>\n    "])),kn(),e.children)}!function(e,n,o){var i,u,a,s;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,a=[],s=[],R(n,e=(!i&&o||n).__k=g(w,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,a,!i&&o?o:u?u.__e:n.firstChild,i,s),x(a,e,s)}(V(bn||(bn=n(["<"," //>"],["<"," //>"])),(function(){return V(wn||(wn=n(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"])),gn,Sn,z("Storages"),Le)})),document.querySelector(".page"))}));
