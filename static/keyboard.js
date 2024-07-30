(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var n$1,l$1,u$1,i$1,o$1,r$1,f$1,e$2,c$1,s$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$h(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y$1(i)?g(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a=f-r:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&a++,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$2,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$2++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b$h(m,M),h.constructor=T,h.render=q$1),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l$1.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(L=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e;}else u.__e=t.__e,u.__k=t.__k;l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n$1.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A(l,s,g,m[s],o));}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function V(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n$1.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n$1=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$h.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b$h.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b$h.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$2=0,c$1=F(!1),s$1=F(!0);

    var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$1=new Map;function e$1(s){var r=t$1.get(this);return r||(r=new Map,t$1.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

    var m$1=e$1.bind(_);

    var keysets = {
        'Can I watch video in this browser?': {
            'en': 'Can I\u00a0watch video in\u00a0this browser?',
            'ru': 'Могу ли я\u00a0смотреть видео в\u00a0этом браузере?'
        },
        'Audio Codecs': {
            'en': 'Audio Codecs',
            'ru': 'Аудиокодеки'
        },
        'Video Codecs': {
            'en': 'Video Codecs',
            'ru': 'Видеокодеки'
        },
        'Supported': {
            'en': 'Supported',
            'ru': 'Поддерживаемые'
        },
        'No supported audio codecs.': {
            'en': 'No supported audio codecs.',
            'ru': 'Нет поддерживаемых аудиокодеков.'
        },
        'No supported video codecs.': {
            'en': 'No supported video codecs.',
            'ru': 'Нет поддерживаемых видеокодеков.'
        },
        'Unsupported': {
            'en': 'Unsupported',
            'ru': 'Не поддерживаемые'
        },
        'Size': {
            'en': 'Size',
            'ru': 'Размер'
        },
        'Color depth': {
            'en': 'Color depth',
            'ru': 'Глубина цвета'
        },
        'Audio': {
            'en': 'Audio',
            'ru': 'Аудио'
        },
        'Video': {
            'en': 'Video',
            'ru': 'Видео'
        },
        'Image Formats': {
            'en': 'Image Formats',
            'ru': 'Форматы картинок'
        },
        'Native Streaming Support': {
            'en': 'Native Streaming Support',
            'ru': 'Поддержка нативного стримминга'
        },
        'Yes': {
            'en': 'Yes',
            'ru': 'Да'
        },
        'No': {
            'en': 'No',
            'ru': 'Нет'
        },
        'Warning': {
            'en': 'Warning',
            'ru': 'Предупреждение'
        },
        'Screens': {
            'en': 'Screens',
            'ru': 'Экраны'
        },
        'Screen': {
            'en': 'Screen',
            'ru': 'Экран'
        },
        'No supported image formats.': {
            'en': 'No supported image formats.',
            'ru': 'Нет поддерживаемых форматов картинок.'
        },
        'Can I listen to surround sound on online services?': {
            'en': 'Can I listen to surround sound on online services?',
            'ru': 'Могу ли я услышать многоканальный звук в онлайн-сервисах?'
        },
        'HTMLVideoElement Features': {
            'en': 'HTMLVideoElement Features',
            'ru': 'Возможности HTMLVideoElement'
        },
        'Aspect ratio': {
            'en': 'Aspect ratio',
            'ru': 'Соотношение сторон'
        },
        'Primary': {
            'en': 'Primary',
            'ru': 'Основной'
        },
        'Internal': {
            'en': 'Internal',
            'ru': 'Внутренний'
        },
        'Please reset zoom in the page': {
            'en': 'Please reset zoom in the page',
            'ru': 'Необходимо сбросить зум на странице'
        },
        'Can I watch HDR video?': {
            'en': 'Can I watch HDR video?',
            'ru': 'Могу ли я смотреть HDR видео?'
        },
        'Supports one of the audio codecs?': {
            'en': 'Supports one of the audio codecs?',
            'ru': 'Есть поддержка одного из аудиокодеков?'
        },
        'Is this an HDR-compatible screen?': {
            'en': 'Is this an HDR-compatible screen?',
            'ru': 'Это HDR-совместимый экран?'
        },
        'Supports one of the video codecs?': {
            'en': 'Supports one of the video codecs?',
            'ru': 'Есть поддержка одного из видеокодеков?'
        },
        'Supports one of the video codecs and DRM with high security level?': {
            'en': 'Supports one of the video codecs and DRM with high security level?',
            'ru': 'Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?'
        },
        'Can I watch 4K video on online services?': {
            'en': 'Can I watch 4K video on online services?',
            'ru': 'Могу ли я смотреть 4К видео в онлайн-сервисах?'
        },
        'Online services protect content using': {
            'en': 'Online services protect content using',
            'ru': 'Онлайн-сервисы защищают контент с помощью'
        },
        'Has DRM support?': {
            'en': 'Has DRM support?',
            'ru': 'Есть поддержка DRM?'
        },
        'Can I watch 4K video?': {
            'en': 'Can I watch 4K video?',
            'ru': 'Могу ли я смотреть 4К видео?'
        },
        'Is the screen larger than 2K?': {
            'en': 'Is the screen larger than 2K?',
            'ru': 'Экран больше чем 2К?'
        },
        'link:wiki:drm': {
            'en': 'https://en.wikipedia.org/wiki/Digital_rights_management',
            'ru': 'https://ru.wikipedia.org/wiki/Digital_rights_management'
        },
        'bit': {
            'en': 'bit',
            'ru': 'бит'
        },
        'Not detected': {
            'en': 'Not detected',
            'ru': 'Не обнаружено'
        },
        'HDCP not detected': {
            'en': 'Could not be determined',
            'ru': 'Не удалось определить'
        },
        'Security level': {
            'en': 'Security level',
            'ru': 'Уровень безопасности'
        },
        'Security levels': {
            'en': 'Security levels',
            'ru': 'Уровни безопасности'
        },
        'Key system': {
            'en': 'Key system',
            'ru': 'Система ключей'
        },
        'Key systems': {
            'en': 'Key systems',
            'ru': 'Системы ключей'
        },
        'Request': {
            'en': 'Request',
            'ru': 'Запрос'
        },
        'Request fonts': {
            'en': 'Request fonts',
            'ru': 'Запросить шрифты'
        },
        'Details': {
            'en': 'Details',
            'ru': 'Подробности'
        },
        'Battery': {
            'en': 'Battery',
            'ru': 'Батарея'
        },
        'Platform': {
            'en': 'Platform',
            'ru': 'Платформа'
        },
        'Connection': {
            'en': 'Connection',
            'ru': 'Связь'
        },
        'Has HDR support for video?': {
            'en': 'Has HDR support for video?',
            'ru': 'Есть поддержка HDR для видео?'
        },
        'Additional monitor detected': {
            'en': 'Additional monitor detected',
            'ru': 'Обнаружен дополнительный монитор'
        },
        'link:apple:t2': {
            'en': 'https://support.apple.com/en-us/103265',
            'ru': 'https://support.apple.com/ru-ru/103265'
        },
        'Select 2018 or later Mac computer with an': {
            'en': 'Select 2018 or later Mac computer with an',
            'ru': 'Компьютер Мак (начиная с 2018 или новее) с',
        },
        'Internet Speed': {
            'en': 'Internet Speed',
            'ru': 'Скорость интернета'
        },
        'HDCP 2.2 or later': {
            'en': 'HDCP 2.2 or later',
            'ru': 'HDCP 2.2 или выше'
        },
        'Make sure that monitors, video cards, and cables support HDCP 2.2 or later.': {
            'en': 'Make sure that monitors, video cards, and cables support HDCP 2.2 or later.',
            'ru': 'Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше'
        },
        'GB': {
            'en': 'GB',
            'ru': 'ГБ'
        },
        'Hardware acceleration': {
            'en': 'Hardware acceleration',
            'ru': 'Аппаратное ускорение'
        },
        'Model': {
            'en': 'Model',
            'ru': 'Модель'
        },
        'Architecture': {
            'en': 'Architecture',
            'ru': 'Архитектура'
        },
        'Form factor': {
            'en': 'Form factor',
            'ru': 'Форм-фактор'
        },
        'unsupported': {
            'en': 'unsupported',
            'ru': 'не поддерживается'
        },
        'Name': {
            'en': 'Name',
            'ru': 'Название'
        },
        'Can I use WebGPU?': {
            'en': 'Can I use WebGPU?',
            'ru': 'Могу ли я использовать WebGPU?'
        },
        'WebGPU is not supported.': {
            'en': 'WebGPU is not supported.',
            'ru': 'WebGPU не поддерживается.'
        },
        'GPU Adapter is not found.': {
            'en': 'GPU Adapter is not found.',
            'ru': 'GPU адаптер не найден.'
        },
        'Video & audio': {
            'en': 'Video & audio',
            'ru': 'Видео и аудио'
        },
        'Can I use Battery Status API?': {
            'en': 'Can I use Battery Status API?',
            'ru': 'Могу ли я использовать Battery Status API?'
        },
        'Battery Status API is not supported.': {
            'en': 'Battery Status API is not supported.',
            'ru': 'Battery Status API не поддерживается.'
        },
        'Can I use Network Information API?': {
            'en': 'Can I use Network Information API?',
            'ru': 'Могу ли я использовать Network Information API?'
        },
        'Network Information API is not supported.': {
            'en': 'Network Information API is not supported.',
            'ru': 'Network Information API не поддерживается.'
        },
        'Network': {
            'en': 'Network',
            'ru': 'Сеть'
        },
        'Geo': {
            'en': 'Geo',
            'ru': 'Гео'
        },
        'Request geo location': {
            'en': 'Request geo location',
            'ru': 'Запросить местоположение'
        },
        'Can I use 🎮 Gamepad API?': {
            'en': 'Can I use 🎮 Gamepad API?',
            'ru': 'Могу ли я использовать 🎮 Gamepad API?'
        },
        '🎮 Gamepad API is not supported.': {
            'en': '🎮 Gamepad API is not supported.',
            'ru': '🎮 Gamepad API не поддерживается.'
        },
        'Connect and press any button on the gamepad.': {
            'en': 'Connect and press any button on the gamepad.',
            'ru': 'Подключите и нажмите любую кнопку на джойстике.'
        },
        'Gamepad': {
            'en': 'Gamepad',
            'ru': 'Джойстик'
        },
        'Storage': {
            'en': 'Storage',
            'ru': 'Хранилище'
        },
        'Storages': {
            'en': 'Storages',
            'ru': 'Хранилища'
        },
        'Features': {
            'en': 'Features',
            'ru': 'Возможности'
        },
        'Can I use web storages?': {
            'en': 'Can I use web storages?',
            'ru': 'Могу ли я использовать веб-хранилища?'
        },
        'Support of persistent storage': {
            'en': 'Support of persistent storage',
            'ru': 'Поддержка постоянного хранилища'
        },
        'Storage quota for origin': {
            'en': 'Storage quota for origin',
            'ru': 'Квота хранилища на домен'
        },
        'Color spaces': {
            'en': 'Color spaces',
            'ru': 'Цветовые пространства'
        },
        'HDR support': {
            'en': 'HDR support',
            'ru': 'Поддержка HDR'
        },
        'Current screen': {
            'en': 'Current screen',
            'ru': 'Текущий экран'
        },
        'Orientation': {
            'en': 'Orientation',
            'ru': 'Ориентация'
        },
        'Camera': {
            'en': 'Camera',
            'ru': 'Камера'
        },
        'Webcamera': {
            'en': 'Webcamera',
            'ru': 'Веб-камера'
        },
        'Check camera': {
            'en': 'Check camera',
            'ru': 'Проверить камеру'
        },
        'Stop': {
            'en': 'Stop',
            'ru': 'Стоп'
        },
        'Resolution': {
            'en': 'Resolution',
            'ru': 'Разрешение'
        },
        'Low resolution': {
            'en': 'Low resolution',
            'ru': 'Низкое разрешение'
        },
        'High resolution': {
            'en': 'High resolution',
            'ru': 'Высокое разрешение'
        },
        'High frame rate': {
            'en': 'High frame rate',
            'ru': 'Высокая частота кадров'
        },
        'Frame rate': {
            'en': 'Frame rate',
            'ru': 'Частота кадров'
        },
        'Specify': {
            'en': 'Specify',
            'ru': 'Уточнить'
        },
        'Camera not found.': {
            'en': 'Camera not found.',
            'ru': 'Камера не найдена.'
        },
        'Camera is blocked.': {
            'en': 'Camera is blocked.',
            'ru': 'Камера заблокирована.'
        },
        'Has touch screen': {
            'en': 'Has touch screen',
            'ru': 'Сенсорный экран'
        },
        'Additionally': {
            'en': 'Additionally',
            'ru': 'Дополнительно'
        },
        'Standalone application': {
            'en': 'Standalone application',
            'ru': 'Автономное приложение'
        },
        'Page not found.': {
            'en': 'Page not found.',
            'ru': 'Страница не найдена.'
        },
        'Go to main page': {
            'en': 'Go to main page',
            'ru': 'Перейти на главную'
        },
        'Permissions': {
            'en': 'Permissions',
            'ru': 'Разрешения'
        },
        'Start test': {
            'en': 'Start test',
            'ru': 'Начать тест'
        },
        'Test dead pixels': {
            'en': 'Test dead pixels',
            'ru': 'Тест битых пикселей'
        },
        'Tests': {
            'en': 'Tests',
            'ru': 'Тесты'
        },
        'RAM': {
            'en': 'RAM',
            'ru': 'ОЗУ'
        },
        'Hz': {
            'en': 'Hz',
            'ru': 'Гц'
        },
        'Refresh rate': {
            'en': 'Refresh rate',
            'ru': 'Частота обновления'
        },
        'Input': {
            'en': 'Input',
            'ru': 'Ввод'
        },
        'Mouse': {
            'en': 'Mouse',
            'ru': 'Мышь'
        },
        'Reset': {
            'en': 'Reset',
            'ru': 'Сброс'
        },
        'Mouse and keyboard': {
            'en': 'Mouse and keyboard',
            'ru': 'Мышь и клавиатура'
        },
        'Keyboard': {
            'en': 'Keyboard',
            'ru': 'Клавиатура'
        },
        'Testing keyboard': {
            'en': 'Testing keyboard',
            'ru': 'Тестирование клавиатуры'
        },
        'Testing mouse': {
            'en': 'Testing mouse',
            'ru': 'Тестирование мышки'
        },
        'Check device online': {
            'en': 'Check device online',
            'ru': 'Проверь устройство онлайн'
        },
        'Report a bug': {
            'en': 'Report a bug',
            'ru': 'Сообщить об ошибке'
        },
        'Press a key to display its code.': {
            'en': 'Press a key to display its code.',
            'ru': 'Нажмите клавишу, чтобы увидеть её код.'
        },
        'Displaying key codes': {
            'en': 'Displaying key codes',
            'ru': 'Отображение кодов клавиш'
        },
        'Mic': {
            'en': 'Mic',
            'ru': 'Микрофон'
        },
        'Fonts': {
            'en': 'Fonts',
            'ru': 'Шрифты'
        },
        'Local fonts': {
            'en': 'Local fonts',
            'ru': 'Локальные шрифты'
        },
        'Filter': {
            'en': 'Filter',
            'ru': 'Фильтр'
        },
        'Family': {
            'en': 'Family',
            'ru': 'Семейство'
        },
        'Style': {
            'en': 'Style',
            'ru': 'Стиль'
        },
        'Local Font Access API is not supported.': {
            'en': 'Local Font Access API is not supported.',
            'ru': 'Local Font Access API не поддерживается.'
        },
        'Group by family': {
            'en': 'Group by family',
            'ru': 'Группировать по семейству'
        },
        'Sample rate': {
            'en': 'Sample rate',
            'ru': 'Частота дискретизации'
        },
        'Sample size': {
            'en': 'Sample size',
            'ru': 'Размер семпла'
        },
        'Channel count': {
            'en': 'Channel count',
            'ru': 'Количество каналов'
        },
        'Auto gain control': {
            'en': 'Auto gain control',
            'ru': 'Автоматическая регулировка усиления'
        },
        'Latency': {
            'en': 'Latency',
            'ru': 'Задержка'
        },
        'Noise suppression': {
            'en': 'Noise suppression',
            'ru': 'Шумоподавление'
        },
        'Echo cancellation': {
            'en': 'Echo cancellation',
            'ru': 'Эхоподавление'
        },
        'Background blur': {
            'en': 'Background blur',
            'ru': 'Размытие фона'
        },
        'hr.': {
            'en': 'hr.',
            'ru': 'ч.'
        },
        'min.': {
            'en': 'min.',
            'ru': 'мин.'
        },
        'sec.': {
            'en': 'sec.',
            'ru': 'с.'
        },
        'Discharging time': {
            'en': 'Discharging time',
            'ru': 'Время до полной разрядки'
        },
        'Charging time': {
            'en': 'Charging time',
            'ru': 'Время до полной зарядки'
        },
        'Check vibration': {
            'en': 'Check vibration',
            'ru': 'Проверить вибрацию'
        },
        'Support is mainly on mobile devices.': {
            'en': 'Support is mainly on mobile devices.',
            'ru': 'Поддержка в основном на мобильных устройствах.'
        },
        'Vibrate': {
            'en': 'Vibrate',
            'ru': 'Вибрировать'
        },
        'Vibration API is not supported.': {
            'en': 'Vibration API is not supported.',
            'ru': 'Vibration API не поддерживается.'
        },
        'Check mic': {
            'en': 'Check mic',
            'ru': 'Проверить микрофон'
        },
        'Hear yourself': {
            'en': 'Hear yourself',
            'ru': 'Слышать себя'
        },
        'Max touch points': {
            'en': 'Max touch points',
            'ru': 'Max touch points'
        },
        'Media Devices API is not supported.': {
            'en': 'Media Devices API is not supported.',
            'ru': 'Media Devices API не поддерживается.'
        },
        'Check HDCP version': {
            'en': 'Check HDCP version',
            'ru': 'Проверить HDCP версию'
        },
        'Bluetooth': {
            'en': 'Bluetooth',
            'ru': 'Bluetooth'
        },
        'USB': {
            'en': 'USB',
            'ru': 'USB'
        },
        'Sensor': {
            'en': 'Sensor',
            'ru': 'Сенсор'
        },
        'Sensors': {
            'en': 'Sensors',
            'ru': 'Сенсоры'
        },
        'MIDI': {
            'en': 'MIDI',
            'ru': 'MIDI'
        },
        'Encryption schemes': {
            'en': 'Encryption schemes',
            'ru': 'Схемы шифрования'
        }
    };

    var langs = [
        {
            name: 'EN',
            value: 'en',
            emoji: '🇺🇸'
        },
        {
            name: 'RU',
            value: 'ru',
            emoji: '🇷🇺',
        },
    ];

    var i18nKeysets = keysets;
    var i18nLang;
    function getI18nLangs() {
        return __spreadArray([], langs, true);
    }
    function i18n(id) {
        var key = i18nKeysets[id];
        if (!key) {
            console.error("Not found key \"".concat(id, "\" in getText()."));
            return id;
        }
        var value = key[i18nLang];
        if (typeof value === 'undefined') {
            console.error("Not found key \"".concat(id, "\", lang \"").concat(i18nLang, "\" in getText()."));
            return id;
        }
        return value;
    }
    function i18nWithKeyset(keyset) {
        return keyset[i18nLang];
    }
    function setI18nLang(lang) {
        i18nLang = lang;
    }
    function getI18nLang() {
        return i18nLang;
    }

    var hasDocument = typeof document !== 'undefined';
    var hasWindow = typeof window !== 'undefined';
    var hasNavigator = typeof navigator != 'undefined';
    var hasScreen = typeof screen != 'undefined';
    function getCharset() {
        return hasDocument && typeof document.charset === 'string' ?
            document.charset.toLowerCase() :
            '';
    }
    function getPageUrl() {
        return hasWindow && window.location ? window.location.href : '';
    }
    function getReferrer() {
        return hasDocument ? document.referrer : '';
    }
    function getTitle() {
        return hasDocument ? document.title : '';
    }
    function cookieEnabled() {
        return hasNavigator ? navigator.cookieEnabled : false;
    }
    function getScreenSize() {
        return hasScreen ? [
            screen.width,
            screen.height,
            screen.colorDepth
        ].join('x') : '';
    }
    var DEFAULT_DEVICE_PIXEL_RATIO = 1;
    function getDevicePixelRatio() {
        return hasWindow ?
            (window.devicePixelRatio || DEFAULT_DEVICE_PIXEL_RATIO) :
            DEFAULT_DEVICE_PIXEL_RATIO;
    }
    function getClientSize() {
        return hasWindow ? [
            window.innerWidth,
            window.innerHeight
        ].join('x') : '';
    }

    function truncate(str, len) {
        return (str || '').slice(0, len);
    }

    function getRandom() {
        return Math.floor(Math.random() * (1 << 31 - 1));
    }

    function getSeconds() {
        return Math.round(Date.now() / 1000);
    }

    var MAX_TITLE_LEN = 512;
    function addParam(result, name, value) {
        if (value || value === 0) {
            result.push(name + ':' + (value === true ? '1' : value));
        }
    }
    function getBrowserInfo(params, title) {
        var result = [];
        if (params) {
            Object.keys(params).forEach(function (key) { return addParam(result, key, params[key]); });
        }
        addParam(result, 'rn', getRandom());
        addParam(result, 'c', cookieEnabled());
        addParam(result, 's', getScreenSize());
        addParam(result, 'sk', getDevicePixelRatio());
        addParam(result, 'w', getClientSize());
        addParam(result, 'en', getCharset());
        var time = getSeconds();
        addParam(result, 'et', time);
        addParam(result, 'st', time);
        addParam(result, 't', truncate(title, MAX_TITLE_LEN));
        return result.join(':');
    }

    function queryStringify(params) {
        return Object.keys(params)
            .filter(function (key) { return params[key] || params[key] === 0; })
            .map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]); })
            .join('&');
    }
    var MAX_URL_LEN = 1024;
    function prepareUrl(url) {
        return truncate(url, MAX_URL_LEN);
    }

    function sendData(counterId, queryParams) {
        var url = 'https://mc.yandex.ru/watch/' + counterId + '?' + queryStringify(queryParams);
        var hasBeacon = typeof navigator !== 'undefined' && navigator.sendBeacon;
        if (!hasBeacon || !navigator.sendBeacon(url, ' ')) {
            if (typeof fetch !== 'undefined') {
                fetch(url, { credentials: 'include' }).catch(function () { });
            }
            else if (typeof Image !== 'undefined') {
                new Image().src = url;
            }
        }
    }

    function hitExt(hitExtParams) {
        var browserInfo = hitExtParams.browserInfo, counterId = hitExtParams.counterId, pageParams = hitExtParams.pageParams;
        var data = {
            'browser-info': getBrowserInfo(browserInfo, pageParams.title),
            rn: getRandom(),
            ut: pageParams.ut
        };
        if (pageParams.url) {
            data['page-url'] = prepareUrl(pageParams.url);
        }
        if (pageParams.referrer) {
            data['page-ref'] = prepareUrl(pageParams.referrer);
        }
        sendData(counterId, data);
    }
    /**
     * Отправка хита.
     *
     * @param counterId - Номер счётчика.
     * @param hitParams -  Параметры страницы.
     * @param userVars - Параметры визитов.
     *
     * @example
     * hit('123456');
     *
     * hit('123456', {
     *     referer: document.referer,
     *     title: document.title,
     *     url: window.location.href
     * }, {
     *     myParam: 'value'
     * });
     */
    function hit(counterId, hitParams, params) {
        var referrer = getReferrer();
        var title = getTitle();
        var url = getPageUrl();
        hitExt({
            browserInfo: { pv: true, ar: true },
            counterId: counterId,
            pageParams: {
                referrer: referrer,
                title: title,
                url: url
            },
            params: params
        });
    }

    function getLang() {
        var _a;
        var lang = ((_a = window.appData) === null || _a === void 0 ? void 0 : _a.lang) || getLangFromUrl() || getLangFromNavigator();
        if (lang !== 'en' && lang !== 'ru') {
            lang = 'en';
        }
        return lang;
    }
    function getLangFromNavigator() {
        return ((navigator.language || '').split('-')[0] || 'en');
    }
    function getLangFromUrl() {
        var params = window.location.search.slice(1).split('&');
        for (var i = 0; i < params.length; i++) {
            var _a = params[i].split('='), name_1 = _a[0], value = _a[1];
            if (name_1 === 'lang') {
                return value;
            }
        }
        return '';
    }

    function withInstallApp() {
        window.addEventListener('beforeinstallprompt', function (e) {
        });
    }

    function addClassName(elem, className) {
        if (elem.classList) {
            elem.classList.add(className);
        }
        else {
            elem.className += (elem.className ? ' ' : '') + className;
        }
    }

    function handleHover() {
        document.removeEventListener('mousemove', handleHover);
        addClassName(document.body, 'hover_yes');
    }
    function addHoverOnBody() {
        document.addEventListener('mousemove', handleHover);
    }

    var isSsr = typeof window === 'undefined';

    var _a;
    if (!isSsr) {
        hit('95998062'); // 97747983
        var lang = getLang();
        setI18nLang(lang);
        withInstallApp();
        addHoverOnBody();
        // ally
        (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.setAttribute('lang', lang);
    }

    function block(name) {
        return function (elem, mods) {
            if (!elem) {
                return name;
            }
            var className = name;
            if (typeof elem === 'string') {
                className = name + '__' + elem;
                if (mods) {
                    className = buildMods(className, mods);
                }
                return className;
            }
            if (elem) {
                className = buildMods(className, elem);
            }
            return className;
        };
    }
    function buildMods(className, mods) {
        var result = className;
        Object.keys(mods).forEach(function (modName) {
            var modValue = mods[modName];
            if (modValue === false || modValue === null || modValue === undefined || modValue === '') {
                return;
            }
            result += ' ' + className + '_';
            if (mods[modName] === true) {
                result += modName;
            }
            else {
                result += modName + '_' + modValue;
            }
        });
        return result;
    }

    function classname() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values.filter(function (item) {
            return item !== null && item !== undefined;
        }).join(' ');
    }

    var b$g = block('link');
    function Link(props) {
        var className = classname(props.class, b$g({ theme: props.theme }));
        return m$1(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["<a target=\"", "\" class=\"", "\" href=\"", "\">", "</a>"], ["<a target=\"", "\" class=\"", "\" href=\"", "\">", "</a>"])), props.target, className, props.href, props.children);
    }
    var templateObject_1$l;

    var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

    var b$f = block('lang-switcher-item');
    function LangSwitcherItem(props) {
        var emoji = props.emoji, onClick = props.onClick, name = props.name, value = props.value, selected = props.selected;
        var handleClick = q(function () {
            onClick(value);
        }, []);
        return m$1(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["<div class=\"", "\" onClick=\"", "\">", " ", " ", "</div>"], ["<div class=\"", "\" onClick=\"", "\">", " ", " ", "</div>"])), b$f(), handleClick, emoji, name, selected ? ' ✓' : '');
    }
    var templateObject_1$k;

    function getPagePath(id, lang) {
        var idPath = id === 'index' ? '' : (id + '/');
        return "/".concat(lang || getI18nLang(), "/").concat(idPath);
    }

    var b$e = block('lang-switcher');
    function LangSwitcher() {
        var _a = h(false), visible = _a[0], setVisible = _a[1];
        var currentLang = getI18nLang();
        var langs = getI18nLangs();
        var handleClickItem = q(function (value) {
            setVisible(false);
            window.location.href = getPagePath(window.appData.pageId, value);
        }, [setVisible]);
        var handleClick = q(function () {
            setVisible(true);
        }, [setVisible]);
        var currentLangItem = langs.filter(function (item) { return currentLang === item.value; })[0];
        return m$1(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\" onClick=\"", "\"><span class=\"", "\">", "</span> ", "</div>\n        <div class=\"", "\">\n            ", "\n        </div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\" onClick=\"", "\"><span class=\"", "\">", "</span> ", "</div>\n        <div class=\"", "\">\n            ", "\n        </div>\n    </div>"])), b$e(), b$e('current'), handleClick, b$e('emoji'), currentLangItem.emoji, currentLangItem.name, b$e('popup', { visible: visible }), langs.map(function (item) { return m$1(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["<", " selected=\"", "\" key=\"", "\" onClick=\"", "\" ...\"", "\" //>"], ["<", " selected=\"", "\" key=\"", "\" onClick=\"", "\" ...\"", "\" //>"])), LangSwitcherItem, currentLang === item.value, item.value, handleClickItem, item); }));
    }
    var templateObject_1$j, templateObject_2$8;

    var b$d = block('footer');
    function Footer() {
        return m$1(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["<footer class=\"", "\">\n        <div class=\"", "\"><", " theme=\"white\" target=\"_blank\" href=\"https://github.com/vvideo/caniwatchvideo/issues/new\">", "<//></div>\n        <div class=\"", "\"><", " //></div>\n        <div class=\"", "\">\u00A9 Vvideo</div>\n    </footer>"], ["<footer class=\"", "\">\n        <div class=\"", "\"><", " theme=\"white\" target=\"_blank\" href=\"https://github.com/vvideo/caniwatchvideo/issues/new\">", "<//></div>\n        <div class=\"", "\"><", " //></div>\n        <div class=\"", "\">\u00A9 Vvideo</div>\n    </footer>"])), b$d(), b$d('item', { report: true }), Link, i18n('Report a bug'), b$d('item'), LangSwitcher, b$d('item'));
    }
    var templateObject_1$i;

    var b$c = block('main-menu');
    function MainMenu(props) {
        return m$1(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n        <nav class=\"", "\">\n            <ul class=\"", "\">\n            ", "\n            </ul>\n        </nav>\n    "], ["\n        <nav class=\"", "\">\n            <ul class=\"", "\">\n            ", "\n            </ul>\n        </nav>\n    "])), b$c(), b$c('list'), props.items.filter(function (item) { return !item.hidden; }).map(function (item) {
            return m$1(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["<li class=\"", "\" key=\"", "\"><a class=\"", "\" href=\"", "\">", "</a></li>"], ["<li class=\"", "\" key=\"", "\"><a class=\"", "\" href=\"", "\">", "</a></li>"])), b$c('item', { selected: item.selected }), item.id, b$c('link'), getPagePath(item.id), item.title);
        }));
    }
    var templateObject_1$h, templateObject_2$7;

    var pages = [
        {
            "header": {
                "en": "Check device online",
                "ru": "Проверь устройство онлайн"
            },
            "emoji": "",
            "menuTitle": {
                "en": "",
                "ru": ""
            },
            "id": "index",
            "hidden": true
        },
        {
            "header": {
                "en": "Video",
                "ru": "Видео"
            },
            "emoji": "⏯",
            "menuTitle": {
                "en": "Video",
                "ru": "Видео"
            },
            "id": "video"
        },
        {
            "menuTitle": {
                "en": "Audio",
                "ru": "Аудио"
            },
            "emoji": "🔊",
            "id": "audio"
        },
        {
            "menuTitle": {
                "en": "Screen",
                "ru": "Экран"
            },
            "emoji": "🖥️",
            "id": "screen"
        },
        {
            "menuTitle": {
                "en": "Webcamera",
                "ru": "Веб-камера"
            },
            "emoji": "📸",
            "id": "camera"
        },
        {
            "menuTitle": {
                "en": "Mic",
                "ru": "Микрофон"
            },
            "emoji": "🎙️",
            "id": "mic"
        },
        {
            "menuTitle": {
                "en": "GPU",
                "ru": "GPU"
            },
            "emoji": "⚙️",
            "id": "gpu"
        },
        {
            "menuTitle": {
                "en": "Mouse",
                "ru": "Мышь"
            },
            "emoji": "🖱",
            "id": "mouse"
        },
        {
            "menuTitle": {
                "en": "Keyboard",
                "ru": "Клавиатура"
            },
            "emoji": "⌨️",
            "id": "keyboard"
        },
        {
            "menuTitle": {
                "en": "Key codes",
                "ru": "Коды клавиш"
            },
            "emoji": "",
            "id": "keycodes",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Gamepad",
                "ru": "Джойстик"
            },
            "emoji": "🕹️",
            "id": "gamepad"
        },
        {
            "menuTitle": {
                "en": "Storage",
                "ru": "Хранилище"
            },
            "emoji": "💽",
            "id": "storage"
        },
        {
            "menuTitle": {
                "en": "Network",
                "ru": "Сеть"
            },
            "emoji": "🌐",
            "id": "network"
        },
        {
            "menuTitle": {
                "en": "Geo",
                "ru": "Гео"
            },
            "emoji": "📍",
            "id": "geo"
        },
        {
            "menuTitle": {
                "en": "MIDI",
                "ru": "MIDI"
            },
            "emoji": "🎹",
            "id": "midi",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "USB",
                "ru": "USB"
            },
            "emoji": "🔌",
            "id": "usb",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Bluetooth",
                "ru": "Bluetooth"
            },
            "emoji": "ᛒ",
            "id": "bluetooth",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Sensor",
                "ru": "Сенсор"
            },
            "emoji": "🧲",
            "id": "sensor",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Platform",
                "ru": "Платформа"
            },
            "emoji": "💻",
            "id": "platform"
        },
        {
            "menuTitle": {
                "en": "Battery",
                "ru": "Батарея"
            },
            "emoji": "🔋",
            "id": "battery"
        },
        {
            "menuTitle": {
                "en": "Fonts",
                "ru": "Шрифты"
            },
            "emoji": "❝",
            "id": "fonts"
        },
        {
            "menuTitle": {
                "en": "404",
                "ru": "404"
            },
            "emoji": "",
            "id": "error404",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Test dead pixels",
                "ru": "Тестирование битых пикселей"
            },
            "emoji": "",
            "id": "test-dead-pixels",
            "hidden": true
        }
    ];

    function getIdFromLocation() {
        var id = window.location.pathname.split(/[?./]/)[2];
        return id;
    }
    function Menu() {
        var id = isSsr ? '' : getIdFromLocation();
        var items = pages.map(function (item) {
            var selected = item.id === id;
            return __assign(__assign({}, item), { url: getPagePath(item.id), title: i18nWithKeyset(item.menuTitle), selected: selected });
        });
        return m$1(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["<", " items=\"", "\"><//>"], ["<", " items=\"", "\"><//>"])), MainMenu, items);
    }
    var templateObject_1$g;

    var b$b = block('header');
    function Header() {
        return m$1(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n        <header class=\"", "\">\n            <", " theme=\"white\" href=\"", "\"><span class=\"", "\"></span>", "<//>\n        </header>\n    "], ["\n        <header class=\"", "\">\n            <", " theme=\"white\" href=\"", "\"><span class=\"", "\"></span>", "<//>\n        </header>\n    "])), b$b(), Link, getPagePath('index'), b$b('logo'), i18n('Check device online'));
    }
    var templateObject_1$f;

    function Page(props) {
        return m$1(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n        <div>\n            <", " //>\n            ", "\n\n            ", "\n\n            <", "><//>\n        </div>"], ["\n        <div>\n            <", " //>\n            ", "\n\n            ", "\n\n            <", "><//>\n        </div>"])), Header, props.withoutMenu ? '' : m$1(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["<", "><//>"], ["<", "><//>"])), Menu), props.children, Footer);
    }
    var templateObject_1$e, templateObject_2$6;

    var b$a = block('button');
    function Button(props) {
        var disabled = props.disabled, size = props.size, theme = props.theme, onClick = props.onClick;
        var className = classname(props.class, b$a({ theme: theme, size: size, disabled: disabled }));
        var handleClick = q(function () {
            if (disabled) {
                return;
            }
            onClick && onClick();
        }, [disabled, onClick]);
        return m$1(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["<button class=\"", "\" disabled=\"", "\" onClick=\"", "\">", "</button>"], ["<button class=\"", "\" disabled=\"", "\" onClick=\"", "\">", "</button>"])), className, disabled, handleClick, props.children);
    }
    var templateObject_1$d;

    function isFirefox() {
        return /firefox/.test(window.navigator.userAgent.toLowerCase());
    }

    var Signal = /** @class */ (function () {
        function Signal() {
            this.listeners = [];
        }
        Signal.prototype.addListener = function (callback) {
            if (callback) {
                this.listeners.push(callback);
            }
        };
        Signal.prototype.removeListener = function (callback) {
            this.listeners = this.listeners.filter(function (item) { return callback !== item; });
        };
        Signal.prototype.trigger = function (name) {
            this.listeners.forEach(function (item) { return item(name); });
        };
        Signal.prototype.clearListeners = function () {
            this.listeners.length = 0;
        };
        return Signal;
    }());

    var KeyboardLedController = /** @class */ (function () {
        function KeyboardLedController() {
            var _this = this;
            this.signal = new Signal();
            this.isFirefox = !isSsr && isFirefox();
            this.capsLock = false;
            this.scrollLock = false;
            this.numLock = false;
            this.handleMouse = function (event) {
                _this.update(event);
            };
            this.handleKey = function (event) {
                if (_this.isFirefox && event.code && event.code.indexOf('Arrow') !== -1) {
                    return;
                }
                _this.update(event);
            };
        }
        KeyboardLedController.prototype.on = function () {
            this.bindMouseEvents();
            this.bindKeyboardEvents();
        };
        KeyboardLedController.prototype.off = function () {
            this.unbindMouseEvents();
            this.unbindKeyboardEvents();
        };
        KeyboardLedController.prototype.bindMouseEvents = function () {
            document.addEventListener('mousemove', this.handleMouse);
            document.addEventListener('mousedown', this.handleMouse);
            document.addEventListener('mouseup', this.handleMouse);
        };
        KeyboardLedController.prototype.bindKeyboardEvents = function () {
            document.addEventListener('keydown', this.handleKey, true);
            document.addEventListener('keyup', this.handleKey, true);
        };
        KeyboardLedController.prototype.unbindMouseEvents = function () {
            document.removeEventListener('mousemove', this.handleMouse);
            document.removeEventListener('mousedown', this.handleMouse);
            document.removeEventListener('mouseup', this.handleMouse);
        };
        KeyboardLedController.prototype.unbindKeyboardEvents = function () {
            document.removeEventListener('keydown', this.handleKey, true);
            document.removeEventListener('keyup', this.handleKey, true);
        };
        KeyboardLedController.prototype.update = function (event) {
            if (event.getModifierState) {
                var statusCapsLock = event.getModifierState('CapsLock');
                if (this.capsLock !== statusCapsLock) {
                    this.capsLock = statusCapsLock;
                    this.signal.trigger('CapsLock');
                }
                var statusScrollLock = event.getModifierState('ScrollLock');
                if (this.scrollLock !== statusScrollLock) {
                    this.scrollLock = statusScrollLock;
                    this.signal.trigger('ScrollLock');
                }
                var statusNumLock = event.getModifierState('NumLock');
                if (this.numLock !== statusNumLock) {
                    this.numLock = statusNumLock;
                    this.signal.trigger('NumLock');
                }
            }
        };
        KeyboardLedController.prototype.addListener = function (callback) {
            this.signal.addListener(callback);
        };
        KeyboardLedController.prototype.removeListener = function (callback) {
            this.signal.removeListener(callback);
        };
        return KeyboardLedController;
    }());
    var keyboardLedController = new KeyboardLedController();

    var KeyboardStateController = /** @class */ (function () {
        function KeyboardStateController() {
            var _this = this;
            this.state = {};
            this.signal = new Signal();
            this.handleLed = function () {
                _this.setLed('CapsLock', keyboardLedController.capsLock);
                _this.setLed('ScrollLock', keyboardLedController.scrollLock);
                _this.setLed('NumLock', keyboardLedController.numLock);
            };
            this.handleKeydown = function (event) {
                event.preventDefault();
                var code = _this.prepareKeyboardCode(event.code, event.key);
                if (event.code !== 'CapsLock') {
                    _this.setPressed(code, true);
                }
                _this.setWasPressed(code, true);
            };
            this.handleBlur = function () {
                _this.clearPressed();
            };
            this.handleKeyup = function (event) {
                event.preventDefault();
                var code = _this.prepareKeyboardCode(event.code, event.key);
                _this.setPressed(code, false);
                _this.setWasPressed(code, true);
                if (code === 'MetaLeft' || code === 'MetaRight') {
                    _this.clearPressed();
                }
            };
        }
        KeyboardStateController.prototype.destroy = function () {
            this.unbindEvents();
            this.signal.clearListeners();
            this.state = {};
        };
        KeyboardStateController.prototype.on = function () {
            this.bindEvents();
        };
        KeyboardStateController.prototype.off = function () {
            this.unbindEvents();
        };
        KeyboardStateController.prototype.addListener = function (callback) {
            this.signal.addListener(callback);
        };
        KeyboardStateController.prototype.removeListener = function (callback) {
            this.signal.removeListener(callback);
        };
        KeyboardStateController.prototype.setPressed = function (code, value) {
            this.state[code] = this.state[code] || {};
            this.state[code].pressed = value;
            this.signal.trigger(code);
        };
        KeyboardStateController.prototype.setWasPressed = function (code, value) {
            this.state[code] = this.state[code] || {};
            this.state[code].wasPressed = value;
            this.signal.trigger(code);
        };
        KeyboardStateController.prototype.setLed = function (code, value) {
            this.state[code] = this.state[code] || {};
            this.state[code].led = value;
            this.signal.trigger(code);
        };
        KeyboardStateController.prototype.clearPressed = function () {
            var _this = this;
            Object.keys(this.state).forEach(function (code) {
                _this.setPressed(code, false);
            });
        };
        KeyboardStateController.prototype.clearState = function () {
            var _this = this;
            Object.keys(this.state).forEach(function (code) {
                _this.setPressed(code, false);
                _this.setWasPressed(code, false);
            });
        };
        KeyboardStateController.prototype.getKeyState = function (code) {
            return this.state[code] || { pressed: false, wasPressed: false, led: false };
        };
        KeyboardStateController.prototype.bindEvents = function () {
            document.addEventListener('keydown', this.handleKeydown);
            document.addEventListener('keyup', this.handleKeyup);
            document.addEventListener('blur', this.handleBlur);
            keyboardLedController.addListener(this.handleLed);
        };
        KeyboardStateController.prototype.unbindEvents = function () {
            document.removeEventListener('keydown', this.handleKeydown);
            document.removeEventListener('keyup', this.handleKeyup);
            document.removeEventListener('blur', this.handleBlur);
            keyboardLedController.removeListener(this.handleLed);
        };
        KeyboardStateController.prototype.prepareKeyboardCode = function (code, key) {
            if (code === 'IntlBackslash' && (key === '`' || key === '~')) {
                return 'Backquote';
            }
            else if (code === 'Backquote' && (key === '§' || key === '±')) {
                return 'IntlBackslash';
            }
            // Fix for media keys on Windows.
            return code || key;
        };
        return KeyboardStateController;
    }());
    var keyboardStateController = new KeyboardStateController();

    var useForceUpdate = function () {
        var _a = h({}), updateState = _a[1];
        return q(function () { return updateState({}); }, []);
    };

    var b$9 = block('keyboard-key');
    function KeyboardKey(props) {
        var keyData = props.keyData;
        var forceUpdate = useForceUpdate();
        y(function () {
            var handler = function (code) {
                if (keyData.code === code) {
                    forceUpdate();
                }
            };
            keyboardStateController.addListener(handler);
            return function () {
                keyboardStateController.removeListener(handler);
            };
        }, [keyData.code]);
        var state = keyboardStateController.getKeyState(keyData.code);
        var title = keyData.code;
        return m$1(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        <div title=\"", "\" class=\"", "\">\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </div>"], ["\n        <div title=\"", "\" class=\"", "\">\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </div>"])), title, b$9({ align: keyData.align, code: keyData.code, pressed: state.pressed, wasPressed: state.wasPressed, view: keyData.view, fontSize: keyData.fontSize }), keyData.text || '', keyData.topSymbol ? m$1(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$9('top-symbol'), keyData.topSymbol) : '', keyData.topLeftSymbol ? m$1(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$9('top-left-symbol'), keyData.topLeftSymbol) : '', keyData.topRightSymbol ? m$1(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$9('top-right-symbol'), keyData.topRightSymbol) : '', keyData.bottomLeftSymbol ? m$1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$9('bottom-left-symbol'), keyData.bottomLeftSymbol) : '', keyData.bottomRightSymbol ? m$1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$9('bottom-right-symbol'), keyData.bottomRightSymbol) : '', keyData.bottomSymbol ? m$1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$9('bottom-symbol'), keyData.bottomSymbol) : '', keyData.bottomText ? m$1(templateObject_7 || (templateObject_7 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$9('bottom-text'), keyData.bottomText) : '', typeof keyData.led === 'boolean' ? m$1(templateObject_8 || (templateObject_8 = __makeTemplateObject(["<div class=\"", "\"></div>"], ["<div class=\"", "\"></div>"])), b$9('led', { on: state.led })) : '');
    }
    var templateObject_1$c, templateObject_2$5, templateObject_3$3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

    var b$8 = block('keyboard-led');
    function KeyboardLed(props) {
        var forceUpdate = useForceUpdate();
        y(function () {
            var handler = function (code) {
                if (props.code === code) {
                    forceUpdate();
                }
            };
            keyboardStateController.addListener(handler);
            return function () {
                keyboardStateController.removeListener(handler);
            };
        }, [props.code]);
        var state = keyboardStateController.getKeyState(props.code);
        return m$1(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["<div title=\"", "\" class=\"", "\"></div>"], ["<div title=\"", "\" class=\"", "\"></div>"])), props.code, b$8({ on: state.led, code: props.code }));
    }
    var templateObject_1$b;

    var b$7 = block('keyboard-spacer');
    function KeyboardSpacer(props) {
        return m$1(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["<div class=\"", "\"></div>"], ["<div class=\"", "\"></div>"])), b$7({ name: props.name }));
    }
    var templateObject_1$a;

    function KeyboardRow(props) {
        var rowData = props.rowData;
        return rowData.map(function (item, i) {
            if (item.type === 'spacer') {
                return m$1(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["<", " key=\"", "\" name=\"", "\" //>"], ["<", " key=\"", "\" name=\"", "\" //>"])), KeyboardSpacer, i, item.name);
            }
            if (item.type === 'led') {
                return m$1(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["<", " key=\"", "\" code=\"", "\" //>"], ["<", " key=\"", "\" code=\"", "\" //>"])), KeyboardLed, i, item.code);
            }
            return m$1(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["<", " key=\"", "\" keyData=\"", "\" //>"], ["<", " key=\"", "\" keyData=\"", "\" //>"])), KeyboardKey, i, item);
        });
    }
    var templateObject_1$9, templateObject_2$4, templateObject_3$2;

    var row0$3 = [
        {
            code: 'Backquote',
            topSymbol: '~',
            bottomSymbol: '`'
        },
        {
            code: 'Digit1',
            topSymbol: '!',
            bottomSymbol: '1'
        },
        {
            code: 'Digit2',
            topSymbol: '@',
            bottomSymbol: '2'
        },
        {
            code: 'Digit3',
            topSymbol: '#',
            bottomSymbol: '3'
        },
        {
            code: 'Digit4',
            topSymbol: '$',
            bottomSymbol: '4'
        },
        {
            code: 'Digit5',
            topSymbol: '%',
            bottomSymbol: '5'
        },
        {
            code: 'Digit6',
            topSymbol: '^',
            bottomSymbol: '6'
        },
        {
            code: 'Digit7',
            topSymbol: '&',
            bottomSymbol: '7'
        },
        {
            code: 'Digit8',
            topSymbol: '*',
            bottomSymbol: '8'
        },
        {
            code: 'Digit9',
            topSymbol: '(',
            bottomSymbol: '9'
        },
        {
            code: 'Digit0',
            topSymbol: ')',
            bottomSymbol: '0'
        },
        {
            code: 'Minus',
            topSymbol: '_',
            bottomSymbol: '-'
        },
        {
            code: 'Equal',
            topSymbol: '+',
            bottomSymbol: '='
        },
        {
            code: 'Backspace',
            bottomText: 'delete',
            align: 'right'
        },
    ];
    var row1$3 = [
        {
            code: 'Tab',
            bottomText: 'tab',
            align: 'left'
        },
        {
            code: 'KeyQ',
            text: 'Q'
        },
        {
            code: 'KeyW',
            text: 'W'
        },
        {
            code: 'KeyE',
            text: 'E'
        },
        {
            code: 'KeyR',
            text: 'R'
        },
        {
            code: 'KeyT',
            text: 'T'
        },
        {
            code: 'KeyY',
            text: 'Y'
        },
        {
            code: 'KeyU',
            text: 'U'
        },
        {
            code: 'KeyI',
            text: 'I'
        },
        {
            code: 'KeyO',
            text: 'O'
        },
        {
            code: 'KeyP',
            text: 'P'
        },
        {
            code: 'BracketLeft',
            topSymbol: '{',
            bottomSymbol: '['
        },
        {
            code: 'BracketRight',
            topSymbol: '}',
            bottomSymbol: ']'
        },
        {
            code: 'Backslash',
            topSymbol: '|',
            bottomSymbol: '\\'
        }
    ];
    var row2$3 = [
        {
            code: 'CapsLock',
            bottomText: 'caps lock',
            led: true,
            align: 'left'
        },
        {
            code: 'KeyA',
            text: 'A'
        },
        {
            code: 'KeyS',
            text: 'S'
        },
        {
            code: 'KeyD',
            text: 'D'
        },
        {
            code: 'KeyF',
            text: 'F'
        },
        {
            code: 'KeyG',
            text: 'G'
        },
        {
            code: 'KeyH',
            text: 'H'
        },
        {
            code: 'KeyJ',
            text: 'J'
        },
        {
            code: 'KeyK',
            text: 'K'
        },
        {
            code: 'KeyL',
            text: 'L'
        },
        {
            code: 'Semicolon',
            topSymbol: ':',
            bottomSymbol: ';'
        },
        {
            code: 'Quote',
            topSymbol: '"',
            bottomSymbol: '\''
        },
        {
            code: 'Enter',
            bottomText: 'return',
            align: 'right'
        }
    ];
    var row3$3 = [
        {
            code: 'ShiftLeft',
            bottomText: 'shift',
            align: 'left'
        },
        {
            code: 'KeyZ',
            text: 'Z'
        },
        {
            code: 'KeyX',
            text: 'X'
        },
        {
            code: 'KeyC',
            text: 'C'
        },
        {
            code: 'KeyV',
            text: 'V'
        },
        {
            code: 'KeyB',
            text: 'B'
        },
        {
            code: 'KeyN',
            text: 'N'
        },
        {
            code: 'KeyM',
            text: 'M'
        },
        {
            code: 'Comma',
            topSymbol: '<',
            bottomSymbol: ','
        },
        {
            code: 'Period',
            topSymbol: '>',
            bottomSymbol: '.'
        },
        {
            code: 'Slash',
            topSymbol: '?',
            bottomSymbol: '/'
        },
        {
            code: 'ShiftRight',
            bottomText: 'shift',
            align: 'right'
        },
    ];
    var row4$3 = [
        {
            code: 'Fn',
            bottomLeftSymbol: '🌐'
        },
        {
            code: 'ControlLeft',
            topRightSymbol: '^',
            bottomText: 'control'
        },
        {
            code: 'AltLeft',
            topRightSymbol: '⌥',
            bottomText: 'option'
        },
        {
            code: 'MetaLeft',
            topRightSymbol: '⌘',
            bottomText: 'command'
        },
        {
            code: 'Space'
        },
        {
            code: 'MetaRight',
            topLeftSymbol: '⌘',
            bottomText: 'command'
        },
        {
            code: 'AltRight',
            topLeftSymbol: '⌥',
            bottomText: 'option'
        },
        {
            code: 'ArrowLeft'
        },
        {
            code: 'ArrowDown'
        },
        {
            code: 'ArrowUp'
        },
        {
            code: 'ArrowRight'
        },
    ];
    var ipadKeyboardLayout = {
        type: 'ipad',
        rows: [
            row0$3,
            row1$3,
            row2$3,
            row3$3,
            row4$3,
        ]
    };

    var row0$2 = [
        {
            code: 'Escape',
            bottomText: 'esc',
            align: 'left'
        },
        {
            code: 'F1',
            text: 'F1'
        },
        {
            code: 'F2',
            text: 'F2'
        },
        {
            code: 'F3',
            text: 'F3'
        },
        {
            code: 'F4',
            text: 'F4'
        },
        {
            code: 'F5',
            text: 'F5'
        },
        {
            code: 'F6',
            text: 'F6'
        },
        {
            code: 'F7',
            text: 'F7'
        },
        {
            code: 'F8',
            text: 'F8'
        },
        {
            code: 'F9',
            text: 'F9'
        },
        {
            code: 'F10',
            text: 'F10'
        },
        {
            code: 'F11',
            text: 'F11'
        },
        {
            code: 'F12',
            text: 'F12'
        },
        {
            code: 'PowerOff',
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'F13',
            text: 'F13'
        },
        {
            code: 'F14',
            text: 'F14'
        },
        {
            code: 'F15',
            text: 'F15'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'F16',
            text: 'F16'
        },
        {
            code: 'F17',
            text: 'F17'
        },
        {
            code: 'F18',
            text: 'F18'
        },
        {
            code: 'F19',
            text: 'F19'
        }
    ];
    var row1$2 = [
        {
            code: 'Backquote',
            topSymbol: '~',
            bottomSymbol: '`'
        },
        {
            code: 'Digit1',
            topSymbol: '!',
            bottomSymbol: '1'
        },
        {
            code: 'Digit2',
            topSymbol: '@',
            bottomSymbol: '2'
        },
        {
            code: 'Digit3',
            topSymbol: '#',
            bottomSymbol: '3'
        },
        {
            code: 'Digit4',
            topSymbol: '$',
            bottomSymbol: '4'
        },
        {
            code: 'Digit5',
            topSymbol: '%',
            bottomSymbol: '5'
        },
        {
            code: 'Digit6',
            topSymbol: '^',
            bottomSymbol: '6'
        },
        {
            code: 'Digit7',
            topSymbol: '&',
            bottomSymbol: '7'
        },
        {
            code: 'Digit8',
            topSymbol: '*',
            bottomSymbol: '8'
        },
        {
            code: 'Digit9',
            topSymbol: '(',
            bottomSymbol: '9'
        },
        {
            code: 'Digit0',
            topSymbol: ')',
            bottomSymbol: '0'
        },
        {
            code: 'Minus',
            topSymbol: '_',
            bottomSymbol: '-'
        },
        {
            code: 'Equal',
            topSymbol: '+',
            bottomSymbol: '='
        },
        {
            code: 'Backspace',
            bottomText: 'delete',
            align: 'right'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'Fn',
            bottomRightSymbol: 'fn',
            text: '🌐'
        },
        {
            code: 'Home',
            text: 'home',
            fontSize: 'small'
        },
        {
            code: 'PageUp',
            text: 'page up',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'Clear',
            text: 'clear',
            fontSize: 'small'
        },
        {
            code: 'NumpadEqual',
            text: '='
        },
        {
            code: 'NumpadDivide',
            text: '/'
        },
        {
            code: 'NumpadMultiply',
            text: '*'
        }
    ];
    var row2$2 = [
        {
            code: 'Tab',
            bottomText: 'tab',
            align: 'left'
        },
        {
            code: 'KeyQ',
            text: 'Q'
        },
        {
            code: 'KeyW',
            text: 'W'
        },
        {
            code: 'KeyE',
            text: 'E'
        },
        {
            code: 'KeyR',
            text: 'R'
        },
        {
            code: 'KeyT',
            text: 'T'
        },
        {
            code: 'KeyY',
            text: 'Y'
        },
        {
            code: 'KeyU',
            text: 'U'
        },
        {
            code: 'KeyI',
            text: 'I'
        },
        {
            code: 'KeyO',
            text: 'O'
        },
        {
            code: 'KeyP',
            text: 'P'
        },
        {
            code: 'BracketLeft',
            topSymbol: '{',
            bottomSymbol: '['
        },
        {
            code: 'BracketRight',
            topSymbol: '}',
            bottomSymbol: ']'
        },
        {
            code: 'Backslash',
            topSymbol: '|',
            bottomSymbol: '\\'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'Delete',
            text: '⌫',
            fontSize: 'small'
        },
        {
            code: 'End',
            text: 'end',
            fontSize: 'small'
        },
        {
            code: 'PageDown',
            text: 'page down',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'Numpad7',
            text: '7'
        },
        {
            code: 'Numpad8',
            text: '8'
        },
        {
            code: 'Numpad9',
            text: '9'
        },
        {
            code: 'NumpadSubtract',
            text: '-'
        }
    ];
    var row3$2 = [
        {
            code: 'CapsLock',
            bottomText: 'caps lock',
            align: 'left',
            led: true
        },
        {
            code: 'KeyA',
            text: 'A'
        },
        {
            code: 'KeyS',
            text: 'S'
        },
        {
            code: 'KeyD',
            text: 'D'
        },
        {
            code: 'KeyF',
            text: 'F'
        },
        {
            code: 'KeyG',
            text: 'G'
        },
        {
            code: 'KeyH',
            text: 'H'
        },
        {
            code: 'KeyJ',
            text: 'J'
        },
        {
            code: 'KeyK',
            text: 'K'
        },
        {
            code: 'KeyL',
            text: 'L'
        },
        {
            code: 'Semicolon',
            topSymbol: ':',
            bottomSymbol: ';'
        },
        {
            code: 'Quote',
            topSymbol: '"',
            bottomSymbol: '\''
        },
        {
            code: 'Enter',
            bottomText: 'return',
            align: 'right'
        },
        {
            type: 'spacer',
            name: 'before-numpad-long'
        },
        {
            code: 'Numpad4',
            text: '4'
        },
        {
            code: 'Numpad5',
            text: '5'
        },
        {
            code: 'Numpad6',
            text: '6'
        },
        {
            code: 'NumpadAdd',
            text: '+'
        }
    ];
    var row4$2 = [
        {
            code: 'ShiftLeft',
            bottomText: 'shift',
            align: 'left'
        },
        {
            code: 'KeyZ',
            text: 'Z'
        },
        {
            code: 'KeyX',
            text: 'X'
        },
        {
            code: 'KeyC',
            text: 'C'
        },
        {
            code: 'KeyV',
            text: 'V'
        },
        {
            code: 'KeyB',
            text: 'B'
        },
        {
            code: 'KeyN',
            text: 'N'
        },
        {
            code: 'KeyM',
            text: 'M'
        },
        {
            code: 'Comma',
            topSymbol: '<',
            bottomSymbol: ','
        },
        {
            code: 'Period',
            topSymbol: '>',
            bottomSymbol: '.'
        },
        {
            code: 'Slash',
            topSymbol: '?',
            bottomSymbol: '/'
        },
        {
            code: 'ShiftRight',
            bottomText: 'shift',
            align: 'right'
        },
        {
            type: 'spacer',
            name: 'before-arrow-up'
        },
        {
            code: 'ArrowUp'
        },
        {
            type: 'spacer',
            name: 'after-arrow-up'
        },
        {
            code: 'Numpad1',
            text: '1'
        },
        {
            code: 'Numpad2',
            text: '2'
        },
        {
            code: 'Numpad3',
            text: '3'
        },
        {
            code: 'NumpadEnter',
            bottomText: 'enter',
            fontSize: 'small'
        }
    ];
    var row5$2 = [
        {
            code: 'ControlLeft',
            topRightSymbol: '^',
            bottomText: 'control',
            align: 'right'
        },
        {
            code: 'AltLeft',
            topRightSymbol: '⌥',
            bottomText: 'option',
            align: 'right'
        },
        {
            code: 'MetaLeft',
            topRightSymbol: '⌘',
            bottomText: 'command',
            align: 'right'
        },
        {
            code: 'Space'
        },
        {
            code: 'MetaRight',
            topLeftSymbol: '⌘',
            bottomText: 'command',
            align: 'left'
        },
        {
            code: 'AltRight',
            topLeftSymbol: '⌥',
            bottomText: 'option',
            align: 'left'
        },
        {
            code: 'ControlRight',
            topLeftSymbol: '^',
            bottomText: 'control',
            align: 'left'
        },
        {
            type: 'spacer',
            name: 'before-arrows'
        },
        {
            code: 'ArrowLeft'
        },
        {
            code: 'ArrowDown'
        },
        {
            code: 'ArrowRight'
        },
        {
            type: 'spacer',
            name: 'after-arrows'
        },
        {
            code: 'Numpad0',
            text: '0'
        },
        {
            code: 'NumpadDecimal',
            text: '.'
        }
    ];
    var macKeyboardLayout = {
        type: 'mac',
        rows: [
            row0$2,
            row1$2,
            row2$2,
            row3$2,
            row4$2,
            row5$2,
        ]
    };

    var row0$1 = [
        {
            code: 'Escape',
            text: 'esc',
            align: 'left'
        },
        {
            code: 'F1',
            text: 'F1'
        },
        {
            code: 'F2',
            text: 'F2'
        },
        {
            code: 'F3',
            text: 'F3'
        },
        {
            code: 'F4',
            text: 'F4'
        },
        {
            code: 'F5',
            text: 'F5'
        },
        {
            code: 'F6',
            text: 'F6'
        },
        {
            code: 'F7',
            text: 'F7'
        },
        {
            code: 'F8',
            text: 'F8'
        },
        {
            code: 'F9',
            text: 'F9'
        },
        {
            code: 'F10',
            text: 'F10'
        },
        {
            code: 'F11',
            text: 'F11'
        },
        {
            code: 'F12',
            text: 'F12'
        },
        {
            code: 'PowerOff',
        }
    ];
    var row1$1 = [
        {
            code: 'IntlBackslash',
            topLeftSymbol: '±',
            topRightSymbol: '<',
            bottomLeftSymbol: '§',
            bottomRightSymbol: '>',
        },
        {
            code: 'Digit1',
            topSymbol: '!',
            bottomSymbol: '1'
        },
        {
            code: 'Digit2',
            topSymbol: '@',
            bottomSymbol: '2'
        },
        {
            code: 'Digit3',
            topSymbol: '#',
            bottomSymbol: '3'
        },
        {
            code: 'Digit4',
            topSymbol: '$',
            bottomSymbol: '4'
        },
        {
            code: 'Digit5',
            topSymbol: '%',
            bottomSymbol: '5'
        },
        {
            code: 'Digit6',
            topSymbol: '^',
            bottomSymbol: '6'
        },
        {
            code: 'Digit7',
            topSymbol: '&',
            bottomSymbol: '7'
        },
        {
            code: 'Digit8',
            topSymbol: '*',
            bottomSymbol: '8'
        },
        {
            code: 'Digit9',
            topSymbol: '(',
            bottomSymbol: '9'
        },
        {
            code: 'Digit0',
            topSymbol: ')',
            bottomSymbol: '0'
        },
        {
            code: 'Minus',
            topSymbol: '_',
            bottomSymbol: '-'
        },
        {
            code: 'Equal',
            topSymbol: '+',
            bottomSymbol: '='
        },
        {
            code: 'Backspace',
            bottomRightSymbol: '⌫'
        },
    ];
    var row2$1 = [
        {
            code: 'Tab',
            bottomLeftSymbol: '⇥'
        },
        {
            code: 'KeyQ',
            text: 'Q'
        },
        {
            code: 'KeyW',
            text: 'W'
        },
        {
            code: 'KeyE',
            text: 'E'
        },
        {
            code: 'KeyR',
            text: 'R'
        },
        {
            code: 'KeyT',
            text: 'T'
        },
        {
            code: 'KeyY',
            text: 'Y'
        },
        {
            code: 'KeyU',
            text: 'U'
        },
        {
            code: 'KeyI',
            text: 'I'
        },
        {
            code: 'KeyO',
            text: 'O'
        },
        {
            code: 'KeyP',
            text: 'P'
        },
        {
            code: 'BracketLeft',
            topSymbol: '{',
            bottomSymbol: '['
        },
        {
            code: 'BracketRight',
            topSymbol: '}',
            bottomSymbol: ']'
        },
        {
            code: 'Enter',
            text: '⏎'
        },
    ];
    var row3$1 = [
        {
            code: 'CapsLock',
            bottomLeftSymbol: '⇪',
            led: true
        },
        {
            code: 'KeyA',
            text: 'A'
        },
        {
            code: 'KeyS',
            text: 'S'
        },
        {
            code: 'KeyD',
            text: 'D'
        },
        {
            code: 'KeyF',
            text: 'F'
        },
        {
            code: 'KeyG',
            text: 'G'
        },
        {
            code: 'KeyH',
            text: 'H'
        },
        {
            code: 'KeyJ',
            text: 'J'
        },
        {
            code: 'KeyK',
            text: 'K'
        },
        {
            code: 'KeyL',
            text: 'L'
        },
        {
            code: 'Semicolon',
            topSymbol: ':',
            bottomSymbol: ';'
        },
        {
            code: 'Quote',
            topSymbol: '"',
            bottomSymbol: '\''
        },
        {
            code: 'Backslash',
            topSymbol: '|',
            bottomSymbol: '\\'
        },
    ];
    var row4$1 = [
        {
            code: 'ShiftLeft',
            bottomText: 'shift',
            align: 'left'
        },
        {
            code: 'Backquote',
            topSymbol: '~',
            bottomSymbol: '`'
        },
        {
            code: 'KeyZ',
            text: 'Z'
        },
        {
            code: 'KeyX',
            text: 'X'
        },
        {
            code: 'KeyC',
            text: 'C'
        },
        {
            code: 'KeyV',
            text: 'V'
        },
        {
            code: 'KeyB',
            text: 'B'
        },
        {
            code: 'KeyN',
            text: 'N'
        },
        {
            code: 'KeyM',
            text: 'M'
        },
        {
            code: 'Comma',
            topSymbol: '<',
            bottomSymbol: ','
        },
        {
            code: 'Period',
            topSymbol: '>',
            bottomSymbol: '.'
        },
        {
            code: 'Slash',
            topSymbol: '?',
            bottomSymbol: '/'
        },
        {
            code: 'ShiftRight',
            bottomText: 'shift',
            align: 'right'
        },
    ];
    var row5$1 = [
        {
            code: 'Fn',
            fontSize: 'small',
            topRightSymbol: 'fn',
            bottomLeftSymbol: '🌐'
        },
        {
            code: 'ControlLeft',
            topRightSymbol: '^',
            bottomText: 'control'
        },
        {
            code: 'AltLeft',
            topRightSymbol: '⌥',
            bottomText: 'option'
        },
        {
            code: 'MetaLeft',
            topRightSymbol: '⌘',
            bottomText: 'command'
        },
        {
            code: 'Space'
        },
        {
            code: 'MetaRight',
            topLeftSymbol: '⌘',
            bottomText: 'command'
        },
        {
            code: 'AltRight',
            topLeftSymbol: '⌥',
            bottomText: 'option'
        },
        {
            code: 'ArrowLeft'
        },
        {
            code: 'ArrowDown'
        },
        {
            code: 'ArrowUp'
        },
        {
            code: 'ArrowRight'
        },
    ];
    var macbookKeyboardLayout = {
        type: 'macbook',
        rows: [
            row0$1,
            row1$1,
            row2$1,
            row3$1,
            row4$1,
            row5$1,
        ]
    };

    var row0 = [
        {
            code: 'Escape',
            text: 'ESC'
        },
        {
            type: 'spacer',
            name: 'between-func'
        },
        {
            code: 'F1',
            text: 'F1'
        },
        {
            code: 'F2',
            text: 'F2'
        },
        {
            code: 'F3',
            text: 'F3'
        },
        {
            code: 'F4',
            text: 'F4'
        },
        {
            type: 'spacer',
            name: 'between-func'
        },
        {
            code: 'F5',
            text: 'F5'
        },
        {
            code: 'F6',
            text: 'F6'
        },
        {
            code: 'F7',
            text: 'F7'
        },
        {
            code: 'F8',
            text: 'F8'
        },
        {
            type: 'spacer',
            name: 'between-func'
        },
        {
            code: 'F9',
            text: 'F9'
        },
        {
            code: 'F10',
            text: 'F10'
        },
        {
            code: 'F11',
            text: 'F11'
        },
        {
            code: 'F12',
            text: 'F12'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'PrintScreen',
            text: 'PRINT SCRN',
            fontSize: 'small'
        },
        {
            code: 'ScrollLock',
            text: 'SCROLL LOCK',
            fontSize: 'small'
        },
        {
            code: 'Pause',
            text: 'PAUSE BREAK',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'MediaPlayPause',
            text: '⏯',
            view: 'circle'
        },
        {
            code: 'MediaStop',
            text: '⏹',
            view: 'circle'
        },
        {
            code: 'MediaTrackPrevious',
            text: '⏮',
            view: 'circle'
        },
        {
            code: 'MediaTrackNext',
            text: '⏭',
            view: 'circle'
        }
    ];
    var row1 = [
        {
            code: 'Backquote',
            topSymbol: '~',
            bottomSymbol: '`'
        },
        {
            code: 'Digit1',
            topSymbol: '!',
            bottomSymbol: '1'
        },
        {
            code: 'Digit2',
            topSymbol: '@',
            bottomSymbol: '2'
        },
        {
            code: 'Digit3',
            topSymbol: '#',
            bottomSymbol: '3'
        },
        {
            code: 'Digit4',
            topSymbol: '$',
            bottomSymbol: '4'
        },
        {
            code: 'Digit5',
            topSymbol: '%',
            bottomSymbol: '5'
        },
        {
            code: 'Digit6',
            topSymbol: '^',
            bottomSymbol: '6'
        },
        {
            code: 'Digit7',
            topSymbol: '&',
            bottomSymbol: '7'
        },
        {
            code: 'Digit8',
            topSymbol: '*',
            bottomSymbol: '8'
        },
        {
            code: 'Digit9',
            topSymbol: '(',
            bottomSymbol: '9'
        },
        {
            code: 'Digit0',
            topSymbol: ')',
            bottomSymbol: '0'
        },
        {
            code: 'Minus',
            topSymbol: '_',
            bottomSymbol: '-'
        },
        {
            code: 'Equal',
            topSymbol: '+',
            bottomSymbol: '='
        },
        {
            code: 'Backspace',
            text: '←'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'Insert',
            text: 'INSERT',
            fontSize: 'small'
        },
        {
            code: 'Home',
            text: 'HOME',
            fontSize: 'small'
        },
        {
            code: 'PageUp',
            text: 'PAGE UP',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'NumLock',
            text: 'NUM LOCK',
            fontSize: 'small'
        },
        {
            code: 'NumpadDivide',
            text: '/'
        },
        {
            code: 'NumpadMultiply',
            text: '*'
        },
        {
            code: 'NumpadSubtract',
            text: '-'
        }
    ];
    var row2 = [
        {
            code: 'Tab',
            text: 'TAB ⇥',
            fontSize: 'small'
        },
        {
            code: 'KeyQ',
            text: 'Q'
        },
        {
            code: 'KeyW',
            text: 'W'
        },
        {
            code: 'KeyE',
            text: 'E'
        },
        {
            code: 'KeyR',
            text: 'R'
        },
        {
            code: 'KeyT',
            text: 'T'
        },
        {
            code: 'KeyY',
            text: 'Y'
        },
        {
            code: 'KeyU',
            text: 'U'
        },
        {
            code: 'KeyI',
            text: 'I'
        },
        {
            code: 'KeyO',
            text: 'O'
        },
        {
            code: 'KeyP',
            text: 'P'
        },
        {
            code: 'BracketLeft',
            topSymbol: '{',
            bottomSymbol: '['
        },
        {
            code: 'BracketRight',
            topSymbol: '}',
            bottomSymbol: ']'
        },
        {
            code: 'Enter',
            text: '⏎'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'Delete',
            text: 'DELETE',
            fontSize: 'small'
        },
        {
            code: 'End',
            text: 'END',
            fontSize: 'small'
        },
        {
            code: 'PageDown',
            text: 'PAGE DOWN',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'Numpad7',
            text: '7'
        },
        {
            code: 'Numpad8',
            text: '8'
        },
        {
            code: 'Numpad9',
            text: '9'
        },
        {
            code: 'NumpadAdd',
            text: '+'
        }
    ];
    var row3 = [
        {
            code: 'CapsLock',
            text: 'CAPS LOCK',
            fontSize: 'small'
        },
        {
            code: 'KeyA',
            text: 'A'
        },
        {
            code: 'KeyS',
            text: 'S'
        },
        {
            code: 'KeyD',
            text: 'D'
        },
        {
            code: 'KeyF',
            text: 'F'
        },
        {
            code: 'KeyG',
            text: 'G'
        },
        {
            code: 'KeyH',
            text: 'H'
        },
        {
            code: 'KeyJ',
            text: 'J'
        },
        {
            code: 'KeyK',
            text: 'K'
        },
        {
            code: 'KeyL',
            text: 'L'
        },
        {
            code: 'Semicolon',
            topSymbol: ':',
            bottomSymbol: ';'
        },
        {
            code: 'Quote',
            topSymbol: '"',
            bottomSymbol: '\''
        },
        {
            code: 'Backslash',
            topSymbol: '|',
            bottomSymbol: '\\'
        },
        {
            type: 'spacer',
            name: 'before-numpad-long'
        },
        {
            code: 'Numpad4',
            text: '4'
        },
        {
            code: 'Numpad5',
            text: '5'
        },
        {
            code: 'Numpad6',
            text: '6'
        }
    ];
    var row4 = [
        {
            code: 'ShiftLeft',
            text: 'SHIFT',
            fontSize: 'small'
        },
        {
            code: 'KeyZ',
            text: 'Z'
        },
        {
            code: 'KeyX',
            text: 'X'
        },
        {
            code: 'KeyC',
            text: 'C'
        },
        {
            code: 'KeyV',
            text: 'V'
        },
        {
            code: 'KeyB',
            text: 'B'
        },
        {
            code: 'KeyN',
            text: 'N'
        },
        {
            code: 'KeyM',
            text: 'M'
        },
        {
            code: 'Comma',
            topSymbol: '<',
            bottomSymbol: ','
        },
        {
            code: 'Period',
            topSymbol: '>',
            bottomSymbol: '.'
        },
        {
            code: 'Slash',
            topSymbol: '?',
            bottomSymbol: '/'
        },
        {
            code: 'ShiftRight',
            text: 'SHIFT',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-arrow-up'
        },
        {
            code: 'ArrowUp',
            text: '↑'
        },
        {
            type: 'spacer',
            name: 'after-arrow-up'
        },
        {
            code: 'Numpad1',
            text: '1'
        },
        {
            code: 'Numpad2',
            text: '2'
        },
        {
            code: 'Numpad3',
            text: '3'
        },
        {
            code: 'NumpadEnter',
            text: 'ENTER',
            fontSize: 'small'
        },
    ];
    var row5 = [
        {
            code: 'ControlLeft',
            text: 'CTRL',
            fontSize: 'small'
        },
        {
            code: 'MetaLeft',
            topLeftSymbol: ' ',
            topRightSymbol: ' ',
            bottomLeftSymbol: ' ',
            bottomRightSymbol: ' '
        },
        {
            code: 'AltLeft',
            text: 'ALT',
            fontSize: 'small'
        },
        {
            code: 'Space'
        },
        {
            code: 'AltRight',
            text: 'ALT',
            fontSize: 'small'
        },
        {
            code: 'MetaRight',
            topLeftSymbol: ' ',
            topRightSymbol: ' ',
            bottomLeftSymbol: ' ',
            bottomRightSymbol: ' '
        },
        {
            code: 'ContextMenu',
            topLeftSymbol: ' ',
            topRightSymbol: ' ',
            bottomLeftSymbol: ' ',
            bottomRightSymbol: ' '
        },
        {
            code: 'ControlRight',
            text: 'CTRL',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-arrows'
        },
        {
            code: 'ArrowLeft',
            text: '←'
        },
        {
            code: 'ArrowDown',
            text: '↓'
        },
        {
            code: 'ArrowRight',
            text: '→'
        },
        {
            type: 'spacer',
            name: 'after-arrows'
        },
        {
            code: 'Numpad0',
            text: '0'
        },
        {
            code: 'NumpadDecimal',
            text: '.'
        }
    ];
    var row6 = [
        {
            type: 'led',
            code: 'NumLock'
        },
        {
            type: 'led',
            code: 'CapsLock'
        },
        {
            type: 'led',
            code: 'ScrollLock'
        }
    ];
    var winKeyboardLayout = {
        type: 'win',
        rows: [
            row0,
            row1,
            row2,
            row3,
            row4,
            row5,
            row6,
        ]
    };

    var b$6 = block('keyboard-layout');
    function KeyboardLayout(props) {
        var layout = props.layout;
        var items = layout.rows.map(function (rowData, num) {
            return m$1(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n            <div key=\"", "\" class=\"", "\">\n                <", " rowData=\"", "\" //>\n            </div>\n        "], ["\n            <div key=\"", "\" class=\"", "\">\n                <", " rowData=\"", "\" //>\n            </div>\n        "])), num, b$6('row', { num: num }), KeyboardRow, rowData);
        });
        return m$1(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$6({ type: layout.type }), items);
    }
    function getLayoutData(layout) {
        switch (layout) {
            case 'ipad':
                return ipadKeyboardLayout;
            case 'mac':
                return macKeyboardLayout;
            case 'macbook':
                return macbookKeyboardLayout;
            default:
                return winKeyboardLayout;
        }
    }
    var templateObject_1$8, templateObject_2$3;

    var b$5 = block('radio-button');
    function RadioButton(props) {
        var handleClick = q(function () {
            var _a;
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, props.value);
        }, [props.onClick]);
        var className = classname(b$5({ selected: props.selected }), props.class);
        return m$1(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n        <li\n            class=\"", "\"\n            onClick=\"", "\"\n            key=\"", "\"\n        >", "</li>\n    "], ["\n        <li\n            class=\"", "\"\n            onClick=\"", "\"\n            key=\"", "\"\n        >", "</li>\n    "])), className, handleClick, props.value, props.text);
    }
    var templateObject_1$7;

    var b$4 = block('radio-buttons');
    function getSelectedButton(buttons) {
        var selectedButtons = buttons.filter(function (item) { return item.selected; });
        return selectedButtons[0];
    }
    function RadioButtons(props) {
        var className = props.className, buttons = props.buttons, label = props.label, onSelect = props.onSelect;
        var selectedButton = getSelectedButton(buttons);
        var _a = h(selectedButton ? selectedButton.value : undefined), selectedValue = _a[0], setSelectedValue = _a[1];
        var handleSelect = q(function (value) {
            setSelectedValue(value);
            onSelect(value);
        }, [onSelect]);
        return m$1(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n        <fieldset class=\"", "\">\n            ", "\n            <ul class=\"", "\">\n                ", "\n            </ul>\n        </fieldset>\n    "], ["\n        <fieldset class=\"", "\">\n            ", "\n            <ul class=\"", "\">\n                ", "\n            </ul>\n        </fieldset>\n    "])), classname(b$4(), className), props.hideLabel || !label ? m$1(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["<legend class=\"", "\">", "</legend>"], ["<legend class=\"", "\">", "</legend>"])), b$4('label'), label) : '', b$4('items'), buttons.map(function (item) {
            return m$1(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["<", "\n                            key=\"", "\"\n                            class=\"", "\"\n                            selected=\"", "\"\n                            text=\"", "\"\n                            value=\"", "\"\n                            onClick=\"", "\"\n                        ><//>"], ["<", "\n                            key=\"", "\"\n                            class=\"", "\"\n                            selected=\"", "\"\n                            text=\"", "\"\n                            value=\"", "\"\n                            onClick=\"", "\"\n                        ><//>"])), RadioButton, item.value, b$4('item'), item.value === selectedValue, item.text, item.value, handleSelect);
        }));
    }
    var templateObject_1$6, templateObject_2$2, templateObject_3$1;

    function isMacintosh() {
        return navigator.userAgent.indexOf('Mac') > -1;
    }
    function isIpad() {
        if (/iPad/.test(navigator.platform)) {
            return true;
        }
        else {
            return Boolean(navigator.maxTouchPoints &&
                navigator.maxTouchPoints > 2 &&
                /MacIntel/.test(navigator.platform));
        }
    }

    function getIsMacBook() {
        var _a = window.screen, width = _a.width, height = _a.height;
        var aspectRatio = width / height;
        return aspectRatio > 1.5 && aspectRatio < 1.7;
    }
    function getPlatform() {
        if (isIpad()) {
            return 'ipad';
        }
        if (isMacintosh()) {
            return getIsMacBook() ? 'macbook' : 'mac';
        }
        return 'win';
    }

    var b$3 = block('keyboard');
    var platform = isSsr ? 'win' : getPlatform();
    var buttons = [
        {
            text: 'Win',
            value: 'win',
            selected: platform === 'win'
        },
        {
            text: 'Mac',
            value: 'mac',
            selected: platform === 'mac'
        },
        {
            text: 'MacBook',
            value: 'macbook',
            selected: platform === 'macbook'
        },
        {
            text: 'iPad',
            value: 'ipad',
            selected: platform === 'ipad'
        }
    ];
    function Keyboard() {
        var selectedButton = getSelectedButton(buttons);
        var _a = h(selectedButton && selectedButton.value), layout = _a[0], setLayout = _a[1];
        var handleReset = q(function () {
            keyboardStateController.clearState();
        }, []);
        var handleSelect = q(function (value) {
            setLayout(value);
        }, [layout]);
        return m$1(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\">\n                <", " onSelect=\"", "\" buttons=\"", "\"><//>\n            </div>\n\n            <", " layout=\"", "\" //>\n\n            <div class=\"", "\">\n                <", " size=\"m\" onClick=\"", "\">", "<//>\n            </div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\">\n                <", " onSelect=\"", "\" buttons=\"", "\"><//>\n            </div>\n\n            <", " layout=\"", "\" //>\n\n            <div class=\"", "\">\n                <", " size=\"m\" onClick=\"", "\">", "<//>\n            </div>\n        </div>\n    "])), b$3(), b$3('top-controls'), RadioButtons, handleSelect, buttons, KeyboardLayout, getLayoutData(layout), b$3('bottom-controls'), Button, handleReset, i18n('Reset'));
    }
    var templateObject_1$5;

    var b$2 = block('row');
    function Row(props) {
        return m$1(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$2(), b$2('category'), props.name, b$2('body'), props.children);
    }
    var templateObject_1$4;

    var b$1 = block('list');
    function List(props) {
        var filteredItems = props.items
            .filter(function (item) {
            if (!item) {
                return false;
            }
            if (item.length === 1) {
                return true;
            }
            item[0]; var value = item[1];
            return typeof value !== 'undefined' && value !== '';
        })
            .map(function (item) {
            var name = item[0], value = item[1];
            return item.length === 1 ?
                [name] :
                [name, typeof value === 'boolean' ? String(value) : value];
        });
        var className = classname(props.class, b$1());
        return filteredItems.length ? m$1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<", " name=\"", "\">\n        <ul class=\"", "\">\n        ", "\n        </ul>\n    <//>"], ["<", " name=\"", "\">\n        <ul class=\"", "\">\n        ", "\n        </ul>\n    <//>"])), Row, props.title, className, filteredItems.map(function (item) {
            var name = item[0], value = item[1];
            if (item.length === 1) {
                return m$1(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["<li>", "</li>"], ["<li>", "</li>"])), name);
            }
            return m$1(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["<li>", ": ", "</li>"], ["<li>", ": ", "</li>"])), name, value);
        })) : '';
    }
    var templateObject_1$3, templateObject_2$1, templateObject_3;

    var b = block('page-title');
    function PageTitle(props) {
        return m$1(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n        <h1 class=\"", "\">\n            ", "\n        </h1>\n    "], ["\n        <h1 class=\"", "\">\n            ", "\n        </h1>\n    "])), b(), props.children);
    }
    var templateObject_1$2;

    function KeyboardPage() {
        var items = [
            [m$1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["<", " href=\"", "\">", "<//>"], ["<", " href=\"", "\">", "<//>"])), Link, getPagePath('keycodes'), i18n('Displaying key codes'))]
        ];
        return m$1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", " //>\n\n            <", " items=\"", "\" title=\"", "\" //>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", " //>\n\n            <", " items=\"", "\" title=\"", "\" //>\n        <//>"])), Page, PageTitle, i18n('Testing keyboard'), Keyboard, List, items, i18n('Additionally'));
    }
    var templateObject_1$1, templateObject_2;

    keyboardStateController.on();
    keyboardLedController.on();
    B$1(m$1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<", " //>"], ["<", " //>"])), KeyboardPage), document.querySelector('.page'));
    var templateObject_1;

}));
