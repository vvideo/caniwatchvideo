!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";function e(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var n,t,r,o,i,u,_,l,s,c,a={},d=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=Array.isArray;function h(e,n){for(var t in n)e[t]=n[t];return e}function v(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,t,r){var o,i,u,_={};for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:_[u]=t[u];if(arguments.length>2&&(_.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===_[u]&&(_[u]=e.defaultProps[u]);return m(e,_,o,i,null)}function m(e,n,o,i,u){var _={type:e,props:n,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++r:u,__i:-1,__u:0};return null==u&&null!=t.vnode&&t.vnode(_),_}function y(e){return e.children}function w(e,n){this.props=e,this.context=n}function b(e,n){if(null==n)return e.__?b(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?b(e):null}function k(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return k(e)}}function C(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!S.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||u)(S)}function S(){var e,n,r,i,u,l,s,c;for(o.sort(_);e=o.shift();)e.__d&&(n=o.length,i=void 0,l=(u=(r=e).__v).__e,s=[],c=[],r.__P&&((i=h({},u)).__v=u.__v+1,t.vnode&&t.vnode(i),R(r.__P,i,u,r.__n,r.__P.namespaceURI,32&u.__u?[l]:null,s,null==l?b(u):l,!!(32&u.__u),c),i.__v=u.__v,i.__.__k[i.__i]=i,N(s,i,c),i.__e!=l&&k(i)),o.length>n&&o.sort(_));S.__r=0}function D(e,n,t,r,o,i,u,_,l,s,c){var p,f,h,v,g,m=r&&r.__k||d,y=n.length;for(t.__d=l,P(t,n,m),l=t.__d,p=0;p<y;p++)null!=(h=t.__k[p])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?a:m[h.__i]||a,h.__i=p,R(e,h,f,o,i,u,_,l,s,c),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&L(f.ref,null,h),c.push(h.ref,h.__c||v,h)),null==g&&null!=v&&(g=v),65536&h.__u||f.__k===h.__k?(l&&!l.isConnected&&(l=b(f)),l=x(h,l,e)):"function"==typeof h.type&&void 0!==h.__d?l=h.__d:v&&(l=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=l,t.__e=g}function P(e,n,t){var r,o,i,u,_,l=n.length,s=t.length,c=s,a=0;for(e.__k=[],r=0;r<l;r++)u=r+a,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m(null,o,null,null,null):f(o)?m(y,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,_=I(o,t,u,c),o.__i=_,i=null,-1!==_&&(c--,(i=t[_])&&(i.__u|=131072)),null==i||null===i.__v?(-1==_&&a--,"function"!=typeof o.type&&(o.__u|=65536)):_!==u&&(_===u+1?a++:_>u?c>l-u?a+=_-u:a--:_<u?_==u-1&&(a=_-u):a=0,_!==r+a&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),A(i,i,!1),t[u]=null,c--);if(c)for(r=0;r<s;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),A(i,i))}function x(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=x(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function I(e,n,t,r){var o=e.key,i=e.type,u=t-1,_=t+1,l=n[t];if(null===l||l&&o==l.key&&i===l.type&&!(131072&l.__u))return t;if(r>(null==l||131072&l.__u?0:1))for(;u>=0||_<n.length;){if(u>=0){if((l=n[u])&&!(131072&l.__u)&&o==l.key&&i===l.type)return u;u--}if(_<n.length){if((l=n[_])&&!(131072&l.__u)&&o==l.key&&i===l.type)return _;_++}}return-1}function H(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||p.test(n)?t:t+"px"}function M(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||H(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||H(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?c:s,i)):e.removeEventListener(n,i?c:s,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function E(e){return function(n){if(this.l){var r=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<r.u)return;return r(t.event?t.event(n):n)}}}function R(e,n,r,o,i,u,_,l,s,c){var a,d,p,v,g,m,b,k,C,S,P,x,I,H,M,E=n.type;if(void 0!==n.constructor)return null;128&r.__u&&(s=!!(32&r.__u),u=[l=n.__e=r.__e]),(a=t.__b)&&a(n);e:if("function"==typeof E)try{if(k=n.props,C=(a=E.contextType)&&o[a.__c],S=a?C?C.props.value:a.__:o,r.__c?b=(d=n.__c=r.__c).__=d.__E:("prototype"in E&&E.prototype.render?n.__c=d=new E(k,S):(n.__c=d=new w(k,S),d.constructor=E,d.render=T),C&&C.sub(d),d.props=k,d.state||(d.state={}),d.context=S,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=E.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=h({},d.__s)),h(d.__s,E.getDerivedStateFromProps(k,d.__s))),v=d.props,g=d.state,d.__v=n,p)null==E.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,S),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,S)||n.__v===r.__v)){for(n.__v!==r.__v&&(d.props=k,d.state=d.__s,d.__d=!1),n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),P=0;P<d._sb.length;P++)d.__h.push(d._sb[P]);d._sb=[],d.__h.length&&_.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,S),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,g,m)}))}if(d.context=S,d.props=k,d.__P=e,d.__e=!1,x=t.__r,I=0,"prototype"in E&&E.prototype.render){for(d.state=d.__s,d.__d=!1,x&&x(n),a=d.render(d.props,d.state,d.context),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[]}else do{d.__d=!1,x&&x(n),a=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++I<25);d.state=d.__s,null!=d.getChildContext&&(o=h(h({},o),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(v,g)),D(e,f(M=null!=a&&a.type===y&&null==a.key?a.props.children:a)?M:[M],n,r,o,i,u,_,l,s,c),d.base=n.__e,n.__u&=-161,d.__h.length&&_.push(d),b&&(d.__E=d.__=null)}catch(e){n.__v=null,s||null!=u?(n.__e=l,n.__u|=s?160:32,u[u.indexOf(l)]=null):(n.__e=r.__e,n.__k=r.__k),t.__e(e,n,r)}else null==u&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=U(r.__e,n,r,o,i,u,_,s,c);(a=t.diffed)&&a(n)}function N(e,n,r){n.__d=void 0;for(var o=0;o<r.length;o++)L(r[o],r[++o],r[++o]);t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function U(e,t,r,o,i,u,_,l,s){var c,d,p,h,g,m,y,w=r.props,k=t.props,C=t.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((g=u[c])&&"setAttribute"in g==!!C&&(C?g.localName===C:3===g.nodeType)){e=g,u[c]=null;break}if(null==e){if(null===C)return document.createTextNode(k);e=document.createElementNS(i,C,k.is&&k),u=null,l=!1}if(null===C)w===k||l&&e.data===k||(e.data=k);else{if(u=u&&n.call(e.childNodes),w=r.props||a,!l&&null!=u)for(w={},c=0;c<e.attributes.length;c++)w[(g=e.attributes[c]).name]=g.value;for(c in w)if(g=w[c],"children"==c);else if("dangerouslySetInnerHTML"==c)p=g;else if("key"!==c&&!(c in k)){if("value"==c&&"defaultValue"in k||"checked"==c&&"defaultChecked"in k)continue;M(e,c,null,g,i)}for(c in k)g=k[c],"children"==c?h=g:"dangerouslySetInnerHTML"==c?d=g:"value"==c?m=g:"checked"==c?y=g:"key"===c||l&&"function"!=typeof g||w[c]===g||M(e,c,g,w[c],i);if(d)l||p&&(d.__html===p.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(p&&(e.innerHTML=""),D(e,f(h)?h:[h],t,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,_,u?u[0]:r.__k&&b(r,0),l,s),null!=u)for(c=u.length;c--;)null!=u[c]&&v(u[c]);l||(c="value",void 0!==m&&(m!==e[c]||"progress"===C&&!m||"option"===C&&m!==w[c])&&M(e,c,m,w[c],i),c="checked",void 0!==y&&y!==e[c]&&M(e,c,y,w[c],i))}return e}function L(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function A(e,n,r){var o,i;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||L(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&A(o[i],n,r||"function"!=typeof e.type);r||null==e.__e||v(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function T(e,n,t){return this.constructor(e,t)}n=d.slice,t={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},r=0,w.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},t),this.props)),e&&h(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),C(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},w.prototype.render=y,o=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=function(e,n){return e.__v.__b-n.__v.__b},S.__r=0,l=0,s=E(!1),c=E(!0);var W=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],_=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=_:4===u?r[1]=Object.assign(r[1]||{},_):5===u?(r[1]=r[1]||{})[n[++i]]=_:6===u?r[1][n[++i]]+=_+"":u?(o=e.apply(_,W(e,_,t,["",null])),r.push(o),_[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(_)}return r},B=new Map;var F=function(e){var n=B.get(this);return n||(n=new Map,B.set(this,n)),(n=W(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],_=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},l=0;l<e.length;l++){l&&(1===r&&_(),_(l));for(var s=0;s<e[l].length;s++)n=e[l][s],1===r?"<"===n?(_(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(_(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[l][s+1])?(_(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(_(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return _(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g),K="undefined"!=typeof document,O="undefined"!=typeof window,V="undefined"!=typeof navigator,j="undefined"!=typeof screen;var G=1;function $(e,n){return(e||"").slice(0,n)}function z(){return Math.floor(Math.random()*(1<<30))}var q=512;function Y(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function J(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return Y(t,n,e[n])})),Y(t,"rn",z()),Y(t,"c",!!V&&navigator.cookieEnabled),Y(t,"s",j?[screen.width,screen.height,screen.colorDepth].join("x"):""),Y(t,"sk",O&&window.devicePixelRatio||G),Y(t,"w",O?[window.innerWidth,window.innerHeight].join("x"):""),Y(t,"en",K&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Y(t,"et",r),Y(t,"st",r),Y(t,"t",$(n,q)),t.join(":")}var Q=1024;function X(e){return $(e,Q)}function Z(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var ee,ne,te,re={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"}};function oe(e){return function(n){var t=e;return"string"==typeof n?"".concat(e,"__").concat(n):(n&&Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t)}}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":J(n,r.title),rn:z(),ut:r.ut};r.url&&(o["page-url"]=X(r.url)),r.referrer&&(o["page-ref"]=X(r.referrer)),Z(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:K?document.referrer:"",title:K?document.title:"",url:O&&window.location?window.location.href:""},params:ne}),function(e){ee=e}((te=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==te&&"ru"!==te&&(te="en"),te));var ie,ue=oe("header");function _e(n){return F(ie||(ie=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ue(),n.text)}function le(){const e=document.createElement("canvas");try{const n=e.getContext("webgl")||e.getContext("experimental-webgl");if(n){const e=n.getExtension("WEBGL_debug_renderer_info");return n.getParameter(e.UNMASKED_VENDOR_WEBGL)}}catch(e){}return""}function se(){const e=document.createElement("canvas");try{const n=e.getContext("webgl")||e.getContext("experimental-webgl");if(n){const e=n.getExtension("WEBGL_debug_renderer_info");return n.getParameter(e.UNMASKED_RENDERER_WEBGL)}}catch(e){}return""}var ce,ae=oe("row");function de(n){return F(ce||(ce=e(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),ae(),ae("category"),n.name,ae("body"),n.children)}var pe,fe,he,ve=oe("list");function ge(n){var t=n.items.filter((function(e){return void 0!==e[1]&&""!==e[1]})).map((function(e){return[e[0],"boolean"==typeof e[1]?String(e[1]):e[1]]}));return t.length?F(fe||(fe=e(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),de,n.title,ve(),t.map((function(n){var t=n[0],r=n[1];return F(pe||(pe=e(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}function me(){var n=[["Vendor",le()],["Renderer",se()]].filter((function(e){return Boolean(e[1])}));return F(he||(he=e(["<",' title="GPU" items="','" //>'],["<",' title="GPU" items="','" //>'])),ge,n)}var ye,we=oe("footer");function be(){return F(ye||(ye=e(['<div class="','">\n        <div class="','">© Vvideo</div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo">GitHub</a></div>\n    </div>'],['<div class="','">\n        <div class="','">© Vvideo</div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo">GitHub</a></div>\n    </div>'])),we(),we("item"),we("item"))}var ke,Ce,Se=oe("gpu-page");!function(e,r,o){var i,u,_,l;t.__&&t.__(e,r),u=(i="function"==typeof o)?null:r.__k,_=[],l=[],R(r,e=(!i&&o||r).__k=g(y,null,[e]),u||a,a,r.namespaceURI,!i&&o?[o]:u?null:r.firstChild?n.call(r.childNodes):null,_,!i&&o?o:u?u.__e:r.firstChild,i,l),N(_,e,l)}(F(Ce||(Ce=e(["<"," //>"],["<"," //>"])),(function(){return F(ke||(ke=e(['\n        <div class="','">\n            <',' text="','"><//>\n\n            <',"><//>\n\n            <","><//>\n        </div>"],['\n        <div class="','">\n            <',' text="','"><//>\n\n            <',"><//>\n\n            <","><//>\n        </div>"])),Se(),_e,function(e){var n=re[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[ee];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(ee,'" in getText().')),e):t}("Can I use GPU?"),me,be)})),document.querySelector(".page"))}));
