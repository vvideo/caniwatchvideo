!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";function e(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var n,t,r,o,i,a,u,s,l,_,c={},p=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=Array.isArray;function h(e,n){for(var t in n)e[t]=n[t];return e}function v(e){var n=e.parentNode;n&&n.removeChild(e)}function m(e,t,r){var o,i,a,u={};for(a in t)"key"==a?o=t[a]:"ref"==a?i=t[a]:u[a]=t[a];if(arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===u[a]&&(u[a]=e.defaultProps[a]);return y(e,u,o,i,null)}function y(e,n,o,i,a){var u={type:e,props:n,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++r:a,__i:-1,__u:0};return null==a&&null!=t.vnode&&t.vnode(u),u}function g(e){return e.children}function w(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function b(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return b(e)}}function I(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!P.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||a)(P)}function P(){var e,n,r,i,a,s,l,_;for(o.sort(u);e=o.shift();)e.__d&&(n=o.length,i=void 0,s=(a=(r=e).__v).__e,l=[],_=[],r.__P&&((i=h({},a)).__v=a.__v+1,t.vnode&&t.vnode(i),x(r.__P,i,a,r.__n,r.__P.namespaceURI,32&a.__u?[s]:null,l,null==s?k(a):s,!!(32&a.__u),_),i.__v=a.__v,i.__.__k[i.__i]=i,U(l,i,_),i.__e!=s&&b(i)),o.length>n&&o.sort(u));P.__r=0}function S(e,n,t,r,o,i,a,u,s,l,_){var d,f,h,v,m,y=r&&r.__k||p,g=n.length;for(t.__d=s,C(t,n,y),s=t.__d,d=0;d<g;d++)null!=(h=t.__k[d])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?c:y[h.__i]||c,h.__i=d,x(e,h,f,o,i,a,u,s,l,_),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&W(f.ref,null,h),_.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=k(f)),s=D(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function C(e,n,t){var r,o,i,a,u,s=n.length,l=t.length,_=l,c=0;for(e.__k=[],r=0;r<s;r++)a=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):f(o)?y(g,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,u=N(o,t,a,_),o.__i=u,i=null,-1!==u&&(_--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u===a+1?c++:u>a?_>s-a?c+=u-a:c--:u<a?u==a-1&&(c=u-a):c=0,u!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),T(i,i,!1),t[a]=null,_--);if(_)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),T(i,i))}function D(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=D(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function N(e,n,t,r){var o=e.key,i=e.type,a=t-1,u=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;a>=0||u<n.length;){if(a>=0){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a--}if(u<n.length){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function A(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||d.test(n)?t:t+"px"}function M(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||A(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||A(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=s,e.addEventListener(n,i?_:l,i)):e.removeEventListener(n,i?_:l,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function H(e){return function(n){if(this.l){var r=this.l[n.type+e];if(null==n.t)n.t=s++;else if(n.t<r.u)return;return r(t.event?t.event(n):n)}}}function x(e,n,r,o,i,a,u,s,l,_){var c,p,d,v,m,y,k,b,I,P,C,D,N,A,M,H=n.type;if(void 0!==n.constructor)return null;128&r.__u&&(l=!!(32&r.__u),a=[s=n.__e=r.__e]),(c=t.__b)&&c(n);e:if("function"==typeof H)try{if(b=n.props,I=(c=H.contextType)&&o[c.__c],P=c?I?I.props.value:c.__:o,r.__c?k=(p=n.__c=r.__c).__=p.__E:("prototype"in H&&H.prototype.render?n.__c=p=new H(b,P):(n.__c=p=new w(b,P),p.constructor=H,p.render=E),I&&I.sub(p),p.props=b,p.state||(p.state={}),p.context=P,p.__n=o,d=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=H.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=h({},p.__s)),h(p.__s,H.getDerivedStateFromProps(b,p.__s))),v=p.props,m=p.state,p.__v=n,d)null==H.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==H.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,P),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,P)||n.__v===r.__v)){for(n.__v!==r.__v&&(p.props=b,p.state=p.__s,p.__d=!1),n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,P),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}if(p.context=P,p.props=b,p.__P=e,p.__e=!1,D=t.__r,N=0,"prototype"in H&&H.prototype.render){for(p.state=p.__s,p.__d=!1,D&&D(n),c=p.render(p.props,p.state,p.context),A=0;A<p._sb.length;A++)p.__h.push(p._sb[A]);p._sb=[]}else do{p.__d=!1,D&&D(n),c=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++N<25);p.state=p.__s,null!=p.getChildContext&&(o=h(h({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),S(e,f(M=null!=c&&c.type===g&&null==c.key?c.props.children:c)?M:[M],n,r,o,i,a,u,s,l,_),p.base=n.__e,n.__u&=-161,p.__h.length&&u.push(p),k&&(p.__E=p.__=null)}catch(e){n.__v=null,l||null!=a?(n.__e=s,n.__u|=l?160:32,a[a.indexOf(s)]=null):(n.__e=r.__e,n.__k=r.__k),t.__e(e,n,r)}else null==a&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=R(r.__e,n,r,o,i,a,u,l,_);(c=t.diffed)&&c(n)}function U(e,n,r){n.__d=void 0;for(var o=0;o<r.length;o++)W(r[o],r[++o],r[++o]);t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function R(e,t,r,o,i,a,u,s,l){var _,p,d,h,m,y,g,w=r.props,b=t.props,I=t.type;if("svg"===I?i="http://www.w3.org/2000/svg":"math"===I?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(_=0;_<a.length;_++)if((m=a[_])&&"setAttribute"in m==!!I&&(I?m.localName===I:3===m.nodeType)){e=m,a[_]=null;break}if(null==e){if(null===I)return document.createTextNode(b);e=document.createElementNS(i,I,b.is&&b),a=null,s=!1}if(null===I)w===b||s&&e.data===b||(e.data=b);else{if(a=a&&n.call(e.childNodes),w=r.props||c,!s&&null!=a)for(w={},_=0;_<e.attributes.length;_++)w[(m=e.attributes[_]).name]=m.value;for(_ in w)if(m=w[_],"children"==_);else if("dangerouslySetInnerHTML"==_)d=m;else if("key"!==_&&!(_ in b)){if("value"==_&&"defaultValue"in b||"checked"==_&&"defaultChecked"in b)continue;M(e,_,null,m,i)}for(_ in b)m=b[_],"children"==_?h=m:"dangerouslySetInnerHTML"==_?p=m:"value"==_?y=m:"checked"==_?g=m:"key"===_||s&&"function"!=typeof m||w[_]===m||M(e,_,m,w[_],i);if(p)s||d&&(p.__html===d.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(d&&(e.innerHTML=""),S(e,f(h)?h:[h],t,r,o,"foreignObject"===I?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:r.__k&&k(r,0),s,l),null!=a)for(_=a.length;_--;)null!=a[_]&&v(a[_]);s||(_="value",void 0!==y&&(y!==e[_]||"progress"===I&&!y||"option"===I&&y!==w[_])&&M(e,_,y,w[_],i),_="checked",void 0!==g&&g!==e[_]&&M(e,_,g,w[_],i))}return e}function W(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function T(e,n,r){var o,i;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||W(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&T(o[i],n,r||"function"!=typeof e.type);r||null==e.__e||v(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}n=p.slice,t={__e:function(e,n,t,r){for(var o,i,a;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(n){e=n}throw e}},r=0,w.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},t),this.props)),e&&h(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),I(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),I(this))},w.prototype.render=g,o=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,s=0,l=H(!1),_=H(!0);var B=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var a=n[i++],u=n[i]?(n[0]|=a?1:2,t[n[i++]]):n[++i];3===a?r[0]=u:4===a?r[1]=Object.assign(r[1]||{},u):5===a?(r[1]=r[1]||{})[n[++i]]=u:6===a?r[1][n[++i]]+=u+"":a?(o=e.apply(u,B(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},F=new Map;var G=function(e){var n=F.get(this);return n||(n=new Map,F.set(this,n)),(n=B(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",a=[0],u=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,o):3===r&&(e||o)?(a.push(3,e,o),r=2):2===r&&"..."===o&&e?a.push(4,e,0):2===r&&o&&!e?a.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(a.push(r,0,o,t),r=6),e&&(a.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&u(),u(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(u(),a=[a],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(u(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(u(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),r=2):o+=n),3===r&&"!--"===o&&(r=4,a=a[0])}return u(),a}(e)),n),arguments,[])).length>1?n:n[0]}.bind(m),L="undefined"!=typeof document,V="undefined"!=typeof window,j="undefined"!=typeof navigator,O="undefined"!=typeof screen;var K=1;function z(e,n){return(e||"").slice(0,n)}function $(){return Math.floor(Math.random()*(1<<30))}var q=512;function Y(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function J(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return Y(t,n,e[n])})),Y(t,"rn",$()),Y(t,"c",!!j&&navigator.cookieEnabled),Y(t,"s",O?[screen.width,screen.height,screen.colorDepth].join("x"):""),Y(t,"sk",V&&window.devicePixelRatio||K),Y(t,"w",V?[window.innerWidth,window.innerHeight].join("x"):""),Y(t,"en",L&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Y(t,"et",r),Y(t,"st",r),Y(t,"t",z(n,q)),t.join(":")}var Q=1024;function X(e){return z(e,Q)}function Z(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var ee,ne,te,re={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"}};function oe(e){var n=re[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[ee];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(ee,'" in getText().')),e):t}function ie(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=ae(r,t)),r):(n&&(r=ae(r,n)),r)}}function ae(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":J(n,r.title),rn:$(),ut:r.ut};r.url&&(o["page-url"]=X(r.url)),r.referrer&&(o["page-ref"]=X(r.referrer)),Z(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:L?document.referrer:"",title:L?document.title:"",url:V&&window.location?window.location.href:""},params:ne}),function(e){ee=e}((te=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==te&&"ru"!==te&&(te="en"),te));var ue,se=ie("header");function le(n){return G(ue||(ue=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),se(),n.children)}var _e,ce=ie("footer");function pe(){return G(_e||(_e=e(['<div class="','">\n        <div class="','">© Vvideo</div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo">GitHub</a></div>\n    </div>'],['<div class="','">\n        <div class="','">© Vvideo</div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo">GitHub</a></div>\n    </div>'])),ce(),ce("item"),ce("item"))}var de,fe=ie("info-link");function he(n){return G(de||(de=e(['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'],['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'])),fe(),fe("link"),n.href,n.title)}var ve,me,ye=[{title:oe("Video & audio"),id:"index",url:"./"},{title:"GPU",id:"gpu",url:"./gpu.html"},{title:oe("Network"),id:"network",url:"./network.html"},{title:oe("Battery"),id:"battery",url:"./battery.html"}],ge=ie("main-menu");function we(){var n=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}();return G(me||(me=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ge(),ye.filter((function(e){return!e.hidden})).map((function(t){return G(ve||(ve=e(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),ge("item",{active:t.id===n}),t.url,t.title)})))}var ke,be=ie("row");function Ie(n){return G(ke||(ke=e(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),be(),be("category"),n.name,be("body"),n.children)}var Pe,Se,Ce,De=ie("internet-speed");function Ne(){return G(Se||(Se=e(['<ul class="','">\n        <li><a href="https://speedtest.net" target="_blank">Speedtest</a></li>\n        <li><a href="https://fast.com" target="_blank">Fast</a></li>\n        ',"\n    </ul>"],['<ul class="','">\n        <li><a href="https://speedtest.net" target="_blank">Speedtest</a></li>\n        <li><a href="https://fast.com" target="_blank">Fast</a></li>\n        ',"\n    </ul>"])),De(),"ru"===ee?G(Pe||(Pe=e(['<li><a href="https://ya.ru/internet" target="_blank">Интернетометр</a></li>'],['<li><a href="https://ya.ru/internet" target="_blank">Интернетометр</a></li>']))):"")}function Ae(n){return G(Ce||(Ce=e(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),n.children)}var Me,He,xe,Ue,Re,We,Te,Ee,Be,Fe,Ge,Le,Ve,je=ie("tree-list");function Oe(n){return"string"==typeof n?G(Me||(Me=e(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),je("string"),n):"number"==typeof n?G(He||(He=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("number"),n):"bigint"==typeof n?G(xe||(xe=e(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),je("bigint"),n):"boolean"==typeof n?G(Ue||(Ue=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("boolean"),String(n)):"function"==typeof n?G(Re||(Re=e(['<span class="','">function</span>'],['<span class="','">function</span>'])),je("function")):"symbol"==typeof n?G(We||(We=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("symbol"),n):void 0===n?G(Te||(Te=e(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),je("undefined")):null===n?G(Ee||(Ee=e(['<span class="','">null</span>'],['<span class="','">null</span>'])),je("null")):Array.isArray(n)?G(Fe||(Fe=e(["<ul>\n            ","\n        </ul>"],["<ul>\n            ","\n        </ul>"])),n.map((function(n){return G(Be||(Be=e(["<li>","</li>"],["<li>","</li>"])),Oe(n))}))):G(Le||(Le=e(["<ul>\n        ","\n    </ul>"],["<ul>\n        ","\n    </ul>"])),Object.keys(n).map((function(t){return G(Ge||(Ge=e(['<li><span class="','">',": </span>","</div>"],['<li><span class="','">',": </span>","</div>"])),je("property"),t,Oe(n[t]))})))}function Ke(n){return G(Ve||(Ve=e(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Ie,n.title,je(),Oe(n.data))}var ze,$e,qe,Ye=ie("network-information");function Je(){if(!navigator.connection)return G(ze||(ze=e(["<",">","<//>"],["<",">","<//>"])),Ae,oe("Network Information API is not supported."));var n=navigator.connection,t={downlink:n.downlink,effectiveType:n.effectiveType,rtt:n.rtt,saveData:n.saveData};"type"in n&&(t.type=n.type),"downlinkMax"in n&&(t.downlinkMax=n.downlinkMax);var r=G($e||($e=e(["navigator.connection<",' href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>:'],["navigator.connection<",' href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>:'])),he);return G(qe||(qe=e(['\n        <div class="','">\n            <',' title="','" data="','"><//>\n        </div>'],['\n        <div class="','">\n            <',' title="','" data="','"><//>\n        </div>'])),Ye(),Ke,r,t)}var Qe,Xe,Ze=ie("network-page");!function(e,r,o){var i,a,u,s;t.__&&t.__(e,r),a=(i="function"==typeof o)?null:r.__k,u=[],s=[],x(r,e=(!i&&o||r).__k=m(g,null,[e]),a||c,c,r.namespaceURI,!i&&o?[o]:a?null:r.firstChild?n.call(r.childNodes):null,u,!i&&o?o:a?a.__e:r.firstChild,i,s),U(u,e,s)}(G(Xe||(Xe=e(["<"," //>"],["<"," //>"])),(function(){return G(Qe||(Qe=e(['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>\n            <//>\n\n            <',"><//>\n\n            <",' name="','">\n                <',"><//>\n            <//>\n\n            <","><//>\n        </div>"],['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>\n            <//>\n\n            <',"><//>\n\n            <",' name="','">\n                <',"><//>\n            <//>\n\n            <","><//>\n        </div>"])),Ze(),we,le,oe("Can I use Network Information API?"),he,Je,Ie,oe("Internet Speed"),Ne,pe)})),document.querySelector(".page"))}));