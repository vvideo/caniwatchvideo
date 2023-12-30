(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

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
        var browserInfo = hitExtParams.browserInfo, counterId = hitExtParams.counterId, pageParams = hitExtParams.pageParams, params = hitExtParams.params;
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
        if (params) {
            data['site-info'] = JSON.stringify(params);
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
        var referrer = hitParams && hitParams.referrer !== undefined ?
            hitParams.referrer :
            getReferrer();
        var title = hitParams && hitParams.title !== undefined ?
            hitParams.title :
            getTitle();
        var url = hitParams && hitParams.url !== undefined ?
            hitParams.url :
            getPageUrl();
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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var n$1,l$1,u$1,i$1,o$1,r$1,f$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$1(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n);}function y(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function g$1(n){return n.children}function b$m(n,l){this.props=n,this.context=l;}function m$2(n,l){if(null==l)return n.__?m$2(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?m$2(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function w$1(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!x.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(x);}function x(){var n,u,t,o,r,e,c,s,a;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,s=[],a=[],(c=t.__P)&&((o=v$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),L(c,o,r,t.__n,void 0!==c.ownerSVGElement,32&r.__u?[e]:null,s,null==e?m$2(r):e,!!(32&r.__u),a),o.__.__k[o.__i]=o,M(s,o,a),o.__e!=e&&k$1(o)),i$1.length>u&&i$1.sort(f$1));x.__r=0;}function C(n,l,u,t,i,o,r,f,e,a,h){var v,p,y,d,_,g=t&&t.__k||s$1,b=l.length;for(u.__d=e,P(u,l,g),e=u.__d,v=0;v<b;v++)null!=(y=u.__k[v])&&"boolean"!=typeof y&&"function"!=typeof y&&(p=-1===y.__i?c$1:g[y.__i]||c$1,y.__i=v,L(n,y,p,i,o,r,f,e,a,h),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&z$1(p.ref,null,y),h.push(y.ref,y.__c||d,y)),null==_&&null!=d&&(_=d),65536&y.__u||p.__k===y.__k?e=S(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=_;}function P(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?d$1(null,i,null,null,i):h$1(i)?d$1(g$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?d$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=H(i,u,r=t+a,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:a=f<r&&f==r-1?f-r:0,f!==t+a&&(i.__u|=65536))):(o=u[t])&&null==o.key&&o.__e&&(o.__e==n.__d&&(n.__d=m$2(o)),N(o,o,!1),u[t]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=m$2(o)),N(o,o));}function S(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=S(t[i],l,u));return l}return n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e),l&&l.nextSibling}function H(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function T$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||I(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||I(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=Date.now(),n.addEventListener(l,o?D:A,o)):n.removeEventListener(l,o?D:A,o);else {if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&"role"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function A(n){var u=this.l[n.type+!1];if(n.t){if(n.t<=u.u)return}else n.t=Date.now();return u(l$1.event?l$1.event(n):n)}function D(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,m,k,w,x,P,S,$,H,I,T,A=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof A)try{if(w=u.props,x=(a=A.contextType)&&i[a.__c],P=a?x?x.props.value:a.__:i,t.__c?k=(p=u.__c=t.__c).__=p.__E:("prototype"in A&&A.prototype.render?u.__c=p=new A(w,P):(u.__c=p=new b$m(w,P),p.constructor=A,p.render=O),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=P,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$1({},p.__s)),v$1(p.__s,A.getDerivedStateFromProps(w,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==A.getDerivedStateFromProps&&w!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,P),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,P)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=w,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,P),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,m);});}if(p.context=P,p.props=w,p.__P=n,p.__e=!1,$=l$1.__r,H=0,"prototype"in A&&A.prototype.render){for(p.state=p.__s,p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),I=0;I<p._sb.length;I++)p.__h.push(p._sb[I]);p._sb=[];}else do{p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(i=v$1(v$1({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,_)),C(n,h$1(T=null!=a&&a.type===g$1&&null==a.key?a.props.children:a)?T:[T],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__u&=-161,p.__h.length&&f.push(p),k&&(p.__E=p.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=j$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function M(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)z$1(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function j$1(l,u,t,i,o,r,f,e,s){var a,v,y,d,_,g,b,k=t.props,w=u.props,x=u.type;if("svg"===x&&(o=!0),null!=r)for(a=0;a<r.length;a++)if((_=r[a])&&"setAttribute"in _==!!x&&(x?_.localName===x:3===_.nodeType)){l=_,r[a]=null;break}if(null==l){if(null===x)return document.createTextNode(w);l=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,w.is&&w),r=null,e=!1;}if(null===x)k===w||e&&l.data===w||(l.data=w);else {if(r=r&&n$1.call(l.childNodes),k=t.props||c$1,!e&&null!=r)for(k={},a=0;a<l.attributes.length;a++)k[(_=l.attributes[a]).name]=_.value;for(a in k)_=k[a],"children"==a||("dangerouslySetInnerHTML"==a?y=_:"key"===a||a in w||T$1(l,a,null,_,o));for(a in w)_=w[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?b=_:"key"===a||e&&"function"!=typeof _||k[a]===_||T$1(l,a,_,k[a],o);if(v)e||y&&(v.__html===y.__html||v.__html===l.innerHTML)||(l.innerHTML=v.__html),u.__k=[];else if(y&&(l.innerHTML=""),C(l,h$1(d)?d:[d],u,t,i,o&&"foreignObject"!==x,r,f,r?r[0]:t.__k&&m$2(t,0),e,s),null!=r)for(a=r.length;a--;)null!=r[a]&&p(r[a]);e||(a="value",void 0!==g&&(g!==l[a]||"progress"===x&&!g||"option"===x&&g!==k[a])&&T$1(l,a,g,k[a],!1),a="checked",void 0!==b&&b!==l[a]&&T$1(l,a,b,k[a],!1));}return l}function z$1(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function N(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||z$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&N(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function q(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],L(t,u=(!o&&i||t).__k=y(g$1,null,[u]),r||c$1,c$1,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n$1.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),M(f,u,e);}n$1=s$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$m.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$1({},this.state),"function"==typeof n&&(n=n(v$1({},u),this.props)),n&&v$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$1(this));},b$m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$1(this));},b$m.prototype.render=g$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0;

    var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$1=new Map;function e$1(s){var r=t$1.get(this);return r||(r=new Map,t$1.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

    var m$1=e$1.bind(y);

    function block(name) {
        return function (mods) {
            var className = name;
            if (typeof mods === 'string') {
                return "".concat(name, "__").concat(mods);
            }
            if (mods) {
                Object.keys(mods).forEach(function (modName) {
                    var modValue = mods[modName];
                    if (modValue === false || modValue === null || modValue === undefined || modValue === '') {
                        return;
                    }
                    className += ' ' + name + '_';
                    if (mods[modName] === true) {
                        className += modName;
                    }
                    else {
                        className += modName + '_' + modValue;
                    }
                });
            }
            return className;
        };
    }

    var b$l = block('badge');
    function Badge(props) {
        var _a, _b;
        return m$1(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "])), b$l({
            type: props.type,
            background: props.background,
            disabled: props.disabled,
            hidden: props.hidden,
            size: props.size,
            click: props.click,
        }), ((_a = props.top) === null || _a === void 0 ? void 0 : _a.text) ? m$1(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["<div class=\"", "\" title=\"", "\">", "</div>"], ["<div class=\"", "\" title=\"", "\">", "</div>"])), b$l('top-text'), props.top.title, props.top.text) : '', b$l('body'), props.text, ((_b = props.bottom) === null || _b === void 0 ? void 0 : _b.text) ? m$1(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["<div class=\"", "\" title=\"", "\">", "</div>"], ["<div class=\"", "\" title=\"", "\">", "</div>"])), b$l('bottom-text'), props.bottom.title, props.bottom.text) : '');
    }
    var templateObject_1$r, templateObject_2$c, templateObject_3$2;

    const AAC_CONTENT_TYPE = 'audio/mp4; codecs="mp4a.40.2"';
    const DOLBY_AC3_CONTENT_TYPE = 'audio/mp4; codecs="ac-3"';
    const DOLBY_EC3_CONTENT_TYPE = 'audio/mp4; codecs="ec-3"';
    const DOLBY_ATMOS_CONTENT_TYPE = 'audio/mp4; codecs="ec-3"; spatialRendering=true';
    const VORBIS_CONTENT_TYPE = 'audio/mp4; codecs="vorbis"';
    const OPUS_CONTENT_TYPE = 'audio/mp4; codecs="opus"';
    const FLAC_CONTENT_TYPE = 'audio/mp4; codecs="flac"';
    const MP3_CONTENT_TYPE = 'audio/mpeg';
    const MP4_AUDIO_CONTENT_TYPE = 'audio/mp4';
    const MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE = 'audio/mp4; codecs="mhm1.0x0D"';
    const DTS_CORE_CONTENT_TYPE = 'audio/mp4; codecs="dtsc"';
    const DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE = 'audio/mp4; codecs="dtsh"';
    const DTS_UHD_PROFILE_2_CONTENT_TYPE = 'audio/mp4; codecs="dtsx"';

    let defaultVideoElement;
    function canPlayType(type) {
        if (!defaultVideoElement) {
            defaultVideoElement = document.createElement('video');
        }
        return defaultVideoElement.canPlayType ?
            defaultVideoElement.canPlayType(type) :
            '';
    }

    function isTypeSupported(value) {
        if (!window.MediaSource) {
            return false;
        }
        let result = false;
        try {
            result = MediaSource.isTypeSupported(value);
        }
        catch (e) { }
        return result;
    }

    function isContentTypeSupported(contentType) {
        const canPlayTypeResult = canPlayType(contentType);
        const isTypeSupportedResult = isTypeSupported(contentType);
        return {
            file: canPlayTypeResult,
            mediaSource: isTypeSupportedResult,
            any: canPlayTypeResult || isTypeSupportedResult,
            both: canPlayTypeResult && isTypeSupportedResult,
        };
    }

    function isMp3Supported() {
        return isContentTypeSupported(MP3_CONTENT_TYPE);
    }
    function isMp4AudioSupported() {
        return isContentTypeSupported(MP4_AUDIO_CONTENT_TYPE);
    }
    function isAacSupported() {
        return isContentTypeSupported(AAC_CONTENT_TYPE);
    }
    function isDolbyDigitalSupported() {
        return isContentTypeSupported(DOLBY_AC3_CONTENT_TYPE);
    }
    function isDolbyDigitalPlusSupported() {
        return isContentTypeSupported(DOLBY_EC3_CONTENT_TYPE);
    }
    function isDolbyAtmosSupported() {
        return isContentTypeSupported(DOLBY_ATMOS_CONTENT_TYPE);
    }
    function isMpegHAudioSupported() {
        return isContentTypeSupported(MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE);
    }
    function isVorbisSupported() {
        return isContentTypeSupported(VORBIS_CONTENT_TYPE);
    }
    function isFlacSupported() {
        return isContentTypeSupported(FLAC_CONTENT_TYPE);
    }
    function isOpusSupported() {
        return isContentTypeSupported(OPUS_CONTENT_TYPE);
    }
    function isDtsSupported() {
        return isContentTypeSupported(DTS_CORE_CONTENT_TYPE);
    }
    function isDtsHdSupported() {
        return isContentTypeSupported(DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE);
    }
    function isDtsXSupported() {
        return isContentTypeSupported(DTS_UHD_PROFILE_2_CONTENT_TYPE);
    }

    const H264_BASELINE_CONTENT_TYPE = 'video/mp4; codecs="avc1.42E01E"';
    const H264_MAIN_CONTENT_TYPE = 'video/mp4; codecs="avc1.4D401E"';
    const H264_HIGH_CONTENT_TYPE = 'video/mp4; codecs="avc1.64001E"';
    const VP8_CONTENT_TYPE = 'video/webm; codecs="vp8"';
    const VP9_CONTENT_TYPE = 'video/webm; codecs="vp9"';
    const AV1_CONTENT_TYPE = 'video/mp4; codecs="av01.0.01M.08"';
    const HEVC_MAIN_CONTENT_TYPE = 'video/mp4; codecs="hev1.1.6.L123.B0"';
    const HEVC_MAIN10_CONTENT_TYPE = 'video/mp4; codecs="hev1.2.4.L153.B0"';
    const DOLBY_VISION_CONTENT_TYPE = 'video/mp4; codecs="dvhe.08.09"';
    const MPEG2T_CONTENT_TYPE = 'video/mp2t';

    function isVp8Supported() {
        return isContentTypeSupported(VP8_CONTENT_TYPE);
    }
    function isVp9Supported() {
        return isContentTypeSupported(VP9_CONTENT_TYPE);
    }
    function isH264BaselineSupported() {
        return isContentTypeSupported(H264_BASELINE_CONTENT_TYPE);
    }
    function isH264MainSupported() {
        return isContentTypeSupported(H264_MAIN_CONTENT_TYPE);
    }
    function isH264HighSupported() {
        return isContentTypeSupported(H264_HIGH_CONTENT_TYPE);
    }
    function isAV1Supported() {
        return isContentTypeSupported(AV1_CONTENT_TYPE);
    }
    function isHevcMainSupported() {
        return isContentTypeSupported(HEVC_MAIN_CONTENT_TYPE);
    }
    function isHevcMain10Supported() {
        return isContentTypeSupported(HEVC_MAIN10_CONTENT_TYPE);
    }
    function isDolbyVisionSupported() {
        return isContentTypeSupported(DOLBY_VISION_CONTENT_TYPE);
    }
    function isMpeg2TSupported() {
        return isContentTypeSupported(MPEG2T_CONTENT_TYPE);
    }

    const MPD_CONTENT_TYPE = 'application/dash+xml';
    const HLS_CONTENT_TYPE = 'application/vnd.apple.mpegurl';
    const MSS_CONTENT_TYPE = 'application/vnd.ms-sstr+xml';

    function isNativeHlsSupported() {
        return canPlayType(HLS_CONTENT_TYPE) !== '';
    }
    function isNativeMpdSupported() {
        return canPlayType(MPD_CONTENT_TYPE) !== '';
    }
    function isNativeMssSupported() {
        return canPlayType(MSS_CONTENT_TYPE) !== '';
    }

    function isMseSupported() {
        return Boolean(window.MediaSource && window.MediaSource.isTypeSupported);
    }
    function isEmeSupported() {
        var _a, _b;
        return Boolean(window.MediaKeys) &&
            Boolean((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.requestMediaKeySystemAccess) &&
            Boolean((_b = window.MediaKeySystemAccess) === null || _b === void 0 ? void 0 : _b.prototype.getConfiguration);
    }
    function isMmsSupported() {
        return Boolean(window.ManagedMediaSource &&
            window.ManagedMediaSource.isTypeSupported);
    }

    function getDevicePixelRatio() {
        return window.devicePixelRatio || 1;
    }
    function getScreenWidth() {
        return screen.width * getDevicePixelRatio();
    }
    function getScreenDepth() {
        return screen.colorDepth;
    }
    function isHdrScreenSupported() {
        try {
            const isHighSupported = checkDynamicRange('high');
            const isStandardSupported = checkDynamicRange('standard');
            if (!isStandardSupported) {
                return undefined;
            }
            return Boolean(isStandardSupported && isHighSupported);
        }
        catch (e) { }
        return undefined;
    }
    function checkDynamicRange(type) {
        return window.matchMedia(`(dynamic-range: ${type})`).matches ||
            // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range
            // For Firefox users on macOS 11+ (with HDR-compatible screens)
            window.matchMedia(`(video-dynamic-range: ${type})`).matches;
    }
    // 15360×8640
    const SCREEN_WIDTH_16K = 15360;
    // 7680×4320, 8192×4320, 10000×3600, 10240×4320, 10240×5760
    const SCREEN_WIDTH_10K = 10000;
    // 7680×2160, 7680×4320, 8192×1024, 8192×1638, 8192×4320, 8192×5120
    // 8192×5464, 8192×6144, 8192×8192, 8400×3600
    const SCREEN_WIDTH_8K = 7680;
    // 5760 × 3240, 6016×3200, 6016×3384, 6144×3240, 6144×3456, 6400×4096
    const SCREEN_WIDTH_6K = 5760;
    // 5120×1440, 5120×2160, 5120×2700, 5120×2880, 5120×3840, 5280×2160
    const SCREEN_WIDTH_5K = 5120;
    // 3656×2664, 3840×2160, 3996×2160, 4096×1716, 4096×2160, 4096×3072
    const SCREEN_WIDTH_4K = 3656;
    // 2560×1440
    const SCREEN_WIDTH_2d5K = 2560;
    // 2048×1080, 1998×1080, 2048×858
    const SCREEN_WIDTH_2K = 1998;
    // 1920×1080
    const SCREEN_WIDTH_FULLHD = 1920;
    // 1280×720
    const SCREEN_WIDTH_HD = 1280;
    function getResolutionBadge(width = getScreenWidth()) {
        const sizes = [
            {
                badge: 'SD',
                width: 0,
            },
            {
                width: SCREEN_WIDTH_HD,
                title: 'HD'
            },
            {
                width: SCREEN_WIDTH_FULLHD,
                title: 'FullHD'
            },
            {
                width: SCREEN_WIDTH_2K,
                title: '2K'
            },
            {
                width: SCREEN_WIDTH_2d5K,
                title: '2.5K'
            },
            {
                width: SCREEN_WIDTH_4K,
                title: '4K'
            },
            {
                width: SCREEN_WIDTH_5K,
                title: '5K'
            },
            {
                width: SCREEN_WIDTH_6K,
                title: '6K'
            },
            {
                width: SCREEN_WIDTH_8K,
                title: '8K'
            },
            {
                width: SCREEN_WIDTH_10K,
                title: '10K'
            },
            {
                width: SCREEN_WIDTH_16K,
                title: '16K'
            },
        ];
        let supportedSize = sizes[0].title;
        for (const item of sizes) {
            if (item.width === width) {
                supportedSize = item.title;
                break;
            }
            if (item.width > width) {
                break;
            }
            else {
                supportedSize = `>${item.title}`;
            }
        }
        return supportedSize;
    }

    const FAIRPLAY_KEY_SYSTEM = 'com.apple.fps';
    const FAIRPLAY_V1_KEY_SYSTEM = 'com.apple.fps.1_0';
    const FAIRPLAY_V2_KEY_SYSTEM = 'com.apple.fps.2_0';
    const FAIRPLAY_V3_KEY_SYSTEM = 'com.apple.fps.3_0';
    const WIDEWINE_KEY_SYSTEM = 'com.widevine.alpha';
    const PLAYREADY_KEY_SYSTEM = 'com.microsoft.playready';
    const PRIMETIME_KEY_SYSTEM = 'com.adobe.primetime';
    const CLEAR_KEY_SYSTEM = 'org.w3.clearkey';

    function requestMediaKeySystemAccess(keySystem, supportedConfigurations) {
        if (!navigator.requestMediaKeySystemAccess) {
            return Promise.resolve(false);
        }
        return navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations).then(() => true).catch(() => false);
    }

    function isFairPlaySupported() {
        return requestMediaKeySystemAccess(FAIRPLAY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }
    function isFairPlayV1Supported() {
        return requestMediaKeySystemAccess(FAIRPLAY_V1_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }
    function isFairPlayV2Supported() {
        return requestMediaKeySystemAccess(FAIRPLAY_V2_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }
    function isFairPlayV3Supported() {
        return requestMediaKeySystemAccess(FAIRPLAY_V3_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }

    function isWidevineSupported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
        return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
            {
                initDataTypes,
                videoCapabilities: [
                    {
                        contentType,
                    },
                ],
            },
        ]);
    }
    function isWidevineL1Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
        return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
            {
                initDataTypes,
                videoCapabilities: [
                    {
                        contentType,
                        robustness: 'HW_SECURE_DECODE',
                    },
                ],
            },
        ]);
    }
    function isWidevineL3Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
        return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
            {
                initDataTypes,
                videoCapabilities: [
                    {
                        contentType,
                        robustness: 'SW_SECURE_DECODE',
                    },
                ],
            },
        ]);
    }

    function isPlayReadySupported() {
        return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }
    function isPlayReadySL150Supported() {
        return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                        robustness: '150',
                    },
                ],
            },
        ]);
    }
    function isPlayReadySL2000Supported() {
        return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                        robustness: '2000',
                    },
                ],
            },
        ]);
    }
    function isPlayReadySL3000Supported() {
        return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                        robustness: '3000',
                    },
                ],
            },
        ]);
    }

    function isPrimetimeSupported() {
        return requestMediaKeySystemAccess(PRIMETIME_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }

    function isClearKeySupported() {
        return requestMediaKeySystemAccess(CLEAR_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }

    var b$k = block('audio-badges');
    function AudioBadges() {
        var audioCodecs20 = [];
        var audioCodecs51 = [];
        if (isAacSupported().any) {
            audioCodecs20.push('AAC');
        }
        if (isDolbyDigitalSupported().any) {
            audioCodecs51.push('AC-3');
        }
        if (isDolbyDigitalPlusSupported().any) {
            audioCodecs51.push('EC-3');
        }
        var has51 = audioCodecs51.length;
        return m$1(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n\n            ", "\n        </div>\n    "])), b$k(), Badge({
            text: has51 ? '5.1' : '2.0',
            background: has51 ? 'gold' : 'transparent',
            bottom: {
                text: (has51 ? audioCodecs51 : audioCodecs20).join(', '),
            },
        }), isDolbyAtmosSupported().any && Badge({
            text: m$1(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["<b>Dolby</b> Atmos"], ["<b>Dolby</b> Atmos"]))),
            background: 'transparent',
        }));
    }
    var templateObject_1$q, templateObject_2$b;

    const standardAspectRatio = [
        [1, 1],
        [3, 2],
        [4, 1],
        [4, 3],
        [5, 3],
        [5, 4],
        [16, 9],
        [16, 10],
        [21, 9],
        [32, 9],
        // Ultra Wide
        [12, 5],
        [43, 18],
        [64, 27],
        // Super Wide
        [16, 5],
        [18, 5],
        [32, 9],
    ].map(item => {
        const [x, y] = item;
        return ({
            x,
            y,
            value: `${x}:${y}`,
            ratio: x / y,
        });
    });
    const ratios = standardAspectRatio.map(item => item.ratio).sort();
    const hashStandardRatios = standardAspectRatio.reduce((previous, currentValue) => {
        previous[currentValue.ratio] = currentValue;
        return previous;
    }, {});
    const DEFAULT_TOLERANCE = 0.06;
    function calcAspectRatio(width, height, options = { tolerance: DEFAULT_TOLERANCE }) {
        const ratio = Math.max(width, height) / Math.min(width, height);
        const standardRatio = hashStandardRatios[ratio];
        if (standardRatio) {
            return {
                x: standardRatio.x,
                y: standardRatio.y,
                value: standardRatio.value,
                approximately: false,
                nonStandard: false,
            };
        }
        const element = findElement(ratios, ratio, options.tolerance);
        if (element) {
            const result = hashStandardRatios[element];
            return {
                x: result.x,
                y: result.y,
                value: `≈${result.value}`,
                approximately: true,
                nonStandard: false,
            };
        }
        const x = Math.round(ratio * 100) / 100;
        const y = 1;
        return {
            x,
            y,
            value: `${x}:${y}`,
            approximately: false,
            nonStandard: true,
        };
    }
    function findElement(elems, value, tolerance) {
        for (let i = 0; i < elems.length; i++) {
            const diff = Math.abs(elems[i] - value);
            if (diff < tolerance) {
                return elems[i];
            }
        }
        return undefined;
    }

    var t,r,u,i,o=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function b$j(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[],t=0)),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b$j)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

    function hasZoom() {
        var devicePixelRatio = getDevicePixelRatio();
        var floorDevicePixelRatio = Math.floor(devicePixelRatio);
        if (devicePixelRatio === 1.5) {
            return false;
        }
        if (devicePixelRatio !== floorDevicePixelRatio) {
            return true;
        }
        if (devicePixelRatio > 4) {
            return true;
        }
        return false;
    }

    var b$i = block('screen-badge');
    function ScreenBadge(props) {
        var _a = h(true), withDevicePixelRatio = _a[0], setWithDevicePixelRatio = _a[1];
        var handleClick = T(function () {
            setWithDevicePixelRatio(!withDevicePixelRatio);
        }, [withDevicePixelRatio]);
        var screenSize = withDevicePixelRatio ?
            [props.width, props.height, props.devicePixelRatio].join('×') :
            [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×');
        var screenText = m$1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        <div>Size: ", "</div>\n        ", "\n        <div>Color depth: ", " bit</div>\n        <div>Aspect ratio: ", "</div>\n        ", "\n        ", "\n    "], ["\n        <div>Size: ", "</div>\n        ", "\n        <div>Color depth: ", " bit</div>\n        <div>Aspect ratio: ", "</div>\n        ", "\n        ", "\n    "])), screenSize, hasZoom() ? m$1(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["<div>\u26A0 Please reset zoom in the page</div>"], ["<div>\u26A0 Please reset zoom in the page</div>"]))) : '', props.colorDepth, calcAspectRatio(props.width, props.height).value, props.isPrimary ? m$1(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["<div>Primary: Yes</div>"], ["<div>Primary: Yes</div>"]))) : '', props.isInternal ? m$1(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["<div>Internal: Yes</div>"], ["<div>Internal: Yes</div>"]))) : '');
        return m$1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["        \n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "], ["        \n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "])), b$i(), handleClick, b$i('label'), props.label, Badge({
            text: getResolutionBadge(Math.max(props.width, props.height) * props.devicePixelRatio) || '',
            type: '4k',
            click: true,
            background: 'gold',
            top: {
                text: props.isHDR ? m$1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<b>HDR</b>"], ["<b>HDR</b>"]))) : '',
            },
            bottom: {
                text: screenText,
                title: [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×'),
            },
        }));
    }
    var templateObject_1$p, templateObject_2$a, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6;

    var b$h = block('row');
    function Row(props) {
        return m$1(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$h(), b$h('category'), props.name, b$h('body'), props.children);
    }
    var templateObject_1$o;

    var ScreenBadges = /** @class */ (function (_super) {
        __extends(ScreenBadges, _super);
        function ScreenBadges() {
            var _this = _super.call(this) || this;
            _this.timer = -1;
            _this.state = _this.updateScreen();
            if (window.getScreenDetails) {
                window.getScreenDetails().then(function (result) {
                    console.log(result);
                    result.onscreenschange = function () {
                        _this.updateScreenDetails(result);
                    };
                    _this.updateScreenDetails(result);
                }).catch(function () { });
            }
            var screenJson = JSON.stringify(_this.state);
            _this.timer = window.setInterval(function () {
                if (_this.state.isScreenDetails) {
                    return;
                }
                var currentScreenJson = JSON.stringify(_this.updateScreen());
                if (screenJson !== currentScreenJson) {
                    screenJson = currentScreenJson;
                    _this.setState(_this.updateScreen());
                }
            }, 1000);
            return _this;
        }
        ScreenBadges.prototype.updateScreen = function () {
            return {
                isScreenDetails: false,
                screens: [{
                        label: '',
                        availWidth: screen.availWidth,
                        availHeight: screen.availHeight,
                        width: screen.width,
                        height: screen.height,
                        colorDepth: getScreenDepth(),
                        pixelDepth: getScreenDepth(),
                        devicePixelRatio: getDevicePixelRatio(),
                        isHDR: Boolean(isHdrScreenSupported()),
                        orientation: screen.orientation,
                    }],
            };
        };
        ScreenBadges.prototype.updateScreenDetails = function (result) {
            this.setState({
                isScreenDetails: true,
                screens: result.screens.map(function (item) {
                    return {
                        label: item.label,
                        width: item.width,
                        height: item.height,
                        colorDepth: item.colorDepth,
                        pixelDepth: item.colorDepth,
                        isHDR: item.colorDepth > 24,
                        isExtended: item.isExtended,
                        isPrimary: item.isPrimary,
                        isInternal: item.isInternal,
                        availHeight: item.availHeight,
                        availWidth: item.availWidth,
                        orientation: item.orientation,
                        devicePixelRatio: item.devicePixelRatio,
                    };
                }),
            });
        };
        ScreenBadges.prototype.render = function () {
            var screens = this.state.screens;
            var content = screens.map(function (item) {
                return m$1(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["<", " ...", "><//>"], ["<", " ...", "><//>"])), ScreenBadge, item);
            });
            var name = screens.length > 1 ? 'Screens' : 'Screen';
            return m$1(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["<", " name=\"", "\">", "<//>"], ["<", " name=\"", "\">", "<//>"])), Row, name, content);
        };
        ScreenBadges.prototype.componentWillUnmount = function () {
            window.clearInterval(this.timer);
        };
        return ScreenBadges;
    }(b$m));
    var templateObject_1$n, templateObject_2$9;

    var b$g = block('codec');
    function Codec(props) {
        var color = props.disabled ? 'black' : (props.color || 'black');
        var tooltip = props.tooltip ? m$1(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$g('tooltip'), props.tooltip) : '';
        return m$1(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n        </div>\n    "])), b$g({
            color: color,
            disabled: props.disabled,
        }), tooltip, b$g('name'), props.name);
    }
    var templateObject_1$m, templateObject_2$8;

    var b$f = block('column');
    function Column(props) {
        return m$1(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$f(), b$f('category'), props.name, b$f('body'), props.children);
    }
    var templateObject_1$l;

    var b$e = block('columns');
    function Columns(props) {
        return m$1(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$e(), props.children);
    }
    var templateObject_1$k;

    function getTooltip(result, contentType) {
        return m$1(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n        video.canPlayType(): ", "<br />\n        MediaSource.isTypeSupported(): ", "<br />\n        <hr />\n        ", "\n    "], ["\n        video.canPlayType(): ", "<br />\n        MediaSource.isTypeSupported(): ", "<br />\n        <hr />\n        ", "\n    "])), result.file ? 'Yes' : 'No', result.mediaSource ? 'Yes' : 'No', contentType);
    }
    var templateObject_1$j;

    var b$d = block('audio-codecs');
    function AudioCodecs() {
        var supported = [];
        var unsupported = [];
        [
            { supported: isMp3Supported(), name: 'MP3', color: 'orange', contentType: MP3_CONTENT_TYPE },
            { supported: isMp4AudioSupported(), name: 'MP4', color: 'orange', contentType: MP4_AUDIO_CONTENT_TYPE },
            { supported: isAacSupported(), name: 'AAC', color: 'orange', contentType: AAC_CONTENT_TYPE },
            { supported: isFlacSupported(), name: 'FLAC', color: 'blue', contentType: FLAC_CONTENT_TYPE },
            { supported: isVorbisSupported(), name: 'Vorbis', color: 'orange', contentType: VORBIS_CONTENT_TYPE },
            { supported: isOpusSupported(), name: 'Opus', color: 'green', contentType: OPUS_CONTENT_TYPE },
            { supported: isDolbyDigitalSupported(), name: 'Dolby Digital', color: 'black', contentType: DOLBY_AC3_CONTENT_TYPE },
            { supported: isDolbyDigitalPlusSupported(), name: 'Dolby Digital Plus', color: 'black', contentType: DOLBY_EC3_CONTENT_TYPE },
            { supported: isDolbyAtmosSupported(), name: 'Dolby Atmos', color: 'black', contentType: DOLBY_ATMOS_CONTENT_TYPE },
            { supported: isDtsSupported(), name: 'DTS', color: 'black', contentType: DTS_CORE_CONTENT_TYPE },
            { supported: isDtsHdSupported(), name: 'DTS:HD', color: 'black', contentType: DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE },
            { supported: isDtsXSupported(), name: 'DTS:X', color: 'black', contentType: DTS_UHD_PROFILE_2_CONTENT_TYPE },
            { supported: isMpegHAudioSupported(), name: 'MPEG-H Audio', color: 'blue', contentType: MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE },
        ].map(function (item) {
            var tooltip = getTooltip(item.supported, item.contentType);
            if (item.supported.any) {
                supported.push(Codec({
                    name: item.name,
                    color: item.color,
                    tooltip: tooltip,
                }));
            }
            else {
                unsupported.push(Codec({
                    name: item.name,
                    color: 'black',
                    disabled: true,
                    tooltip: tooltip,
                }));
            }
        });
        return m$1(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n        <", " name=\"Audio Codecs\">\n            <", ">\n                <", " name=\"Supported\">\n                    <div class=\"", "\">\n                        ", "\n                    </div>\n                <//>\n                <", " name=\"Unsupported\">\n                    <div class=\"", "\">\n                        ", "\n                    </div>\n                <//>\n            <//>\n        <//>\n    "], ["\n        <", " name=\"Audio Codecs\">\n            <", ">\n                <", " name=\"Supported\">\n                    <div class=\"", "\">\n                        ", "\n                    </div>\n                <//>\n                <", " name=\"Unsupported\">\n                    <div class=\"", "\">\n                        ", "\n                    </div>\n                <//>\n            <//>\n        <//>\n    "])), Row, Columns, Column, b$d(), supported, Column, b$d(), unsupported);
    }
    var templateObject_1$i;

    function VideoCodecs() {
        var supported = [];
        var unsupported = [];
        [
            { supported: isH264BaselineSupported(), name: 'H.264 Baseline', color: 'blue', contentType: H264_BASELINE_CONTENT_TYPE },
            { supported: isH264MainSupported(), name: 'H.264 Main', color: 'blue', contentType: H264_MAIN_CONTENT_TYPE },
            { supported: isH264HighSupported(), name: 'H.264 High', color: 'blue', contentType: H264_HIGH_CONTENT_TYPE },
            { supported: isHevcMainSupported(), name: 'H.265 Main', color: 'orange', contentType: HEVC_MAIN_CONTENT_TYPE },
            { supported: isHevcMain10Supported(), name: 'H.265 Main10', color: 'orange', contentType: HEVC_MAIN10_CONTENT_TYPE },
            { supported: isVp8Supported(), name: 'VP8', color: 'green', contentType: VP8_CONTENT_TYPE },
            { supported: isVp9Supported(), name: 'VP9', color: 'green', contentType: VP9_CONTENT_TYPE },
            { supported: isDolbyVisionSupported(), name: 'Dolby Vision', color: 'black', contentType: DOLBY_VISION_CONTENT_TYPE },
            { supported: isAV1Supported(), name: 'AV1', color: 'yellow', contentType: AV1_CONTENT_TYPE },
            { supported: isMpeg2TSupported(), name: 'MPEG2-TS', color: 'yellow', contentType: MPEG2T_CONTENT_TYPE },
        ].map(function (item) {
            var tooltip = getTooltip(item.supported, item.contentType);
            if (item.supported.any) {
                supported.push(Codec({
                    name: item.name,
                    color: item.color,
                    tooltip: tooltip,
                }));
            }
            else {
                unsupported.push(Codec({
                    name: item.name,
                    disabled: true,
                    tooltip: tooltip,
                }));
            }
        });
        return m$1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        <", " name=\"Video Codecs\">\n            ", "\n            ", "\n        <//>\n"], ["\n        <", " name=\"Video Codecs\">\n            ", "\n            ", "\n        <//>\n"])), Columns, supported.length ? m$1(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["<", " name=\"Supported\">\n                ", "\n            <//>"], ["<", " name=\"Supported\">\n                ", "\n            <//>"])), Column, supported) : '', unsupported.length ? m$1(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["<", " name=\"Unsupported\">\n                ", "\n            <//>"], ["<", " name=\"Unsupported\">\n                ", "\n            <//>"])), Column, unsupported) : '');
    }
    var templateObject_1$h, templateObject_2$7, templateObject_3;

    var b$c = block('header');
    function Header() {
        return m$1(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n        <div class=\"", "\">\n            Can I Watch Video<span class=\"", "\"><span class=\"", "\">beta</span></span>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            Can I Watch Video<span class=\"", "\"><span class=\"", "\">beta</span></span>\n        </div>\n    "])), b$c(), b$c('beta-container'), b$c('beta'));
    }
    var templateObject_1$g;

    function getKeySystemsText(keySystems) {
        if (keySystems.length === 0) {
            return '';
        }
        if (keySystems.length === 1) {
            return "KeySystem: ".concat(keySystems[0]);
        }
        return "KeySystems: \n" + keySystems.map(function (item) { return "\u2022 ".concat(item); }).join('\n');
    }

    function getSecurityLevelsText(levels) {
        if (levels.length === 0) {
            return '';
        }
        if (levels.length === 1) {
            return "Security level: ".concat(levels[0]);
        }
        return "Security levels: ".concat(levels.join(', '));
    }

    var b$b = block('widevine-badge');
    function WidevineBadge() {
        var _a = h(false), hasWidevine = _a[0], setWidevine = _a[1];
        var _b = h(false), hasL1 = _b[0], setL1 = _b[1];
        var _c = h(false), hasL3 = _c[0], setL3 = _c[1];
        isWidevineSupported().then(function (result) {
            setWidevine(result);
        });
        isWidevineL1Supported().then(function (result) {
            setL1(result);
        });
        isWidevineL3Supported().then(function (result) {
            setL3(result);
        });
        var levels = [];
        if (hasL1) {
            levels.push('L1');
        }
        if (hasL3) {
            levels.push('L3');
        }
        var text = [
            getSecurityLevelsText(levels),
            getKeySystemsText([WIDEWINE_KEY_SYSTEM]),
        ].join('\n');
        return m$1(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$b(), hasWidevine && Badge({
            text: 'Widevine',
            background: 'white',
            top: {
                text: 'Google',
            },
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$f;

    var b$a = block('clearkey-badge');
    function ClearkeyBadge() {
        var _a = h(false), hasClearkey = _a[0], setClearkey = _a[1];
        isClearKeySupported().then(function (result) {
            setClearkey(result);
        });
        var text = [
            getKeySystemsText([CLEAR_KEY_SYSTEM]),
        ].join('\n');
        return m$1(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$a(), hasClearkey && Badge({
            text: 'ClearKey',
            size: 'small',
            background: 'white',
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$e;

    var b$9 = block('fairplay-badge');
    function FairplayBadge() {
        var _a = h(false), hasFairplay = _a[0], setFairplay = _a[1];
        var _b = h(false), hasFairplay1 = _b[0], setFairplay1 = _b[1];
        var _c = h(false), hasFairplay2 = _c[0], setFairplay2 = _c[1];
        var _d = h(false), hasFairplay3 = _d[0], setFairplay3 = _d[1];
        isFairPlaySupported().then(function (result) {
            setFairplay(result);
        });
        isFairPlayV1Supported().then(function (result) {
            setFairplay1(result);
        });
        isFairPlayV2Supported().then(function (result) {
            setFairplay2(result);
        });
        isFairPlayV3Supported().then(function (result) {
            setFairplay3(result);
        });
        var keySystems = [];
        if (hasFairplay) {
            keySystems.push(FAIRPLAY_KEY_SYSTEM);
        }
        if (hasFairplay1) {
            keySystems.push(FAIRPLAY_V1_KEY_SYSTEM);
        }
        if (hasFairplay2) {
            keySystems.push(FAIRPLAY_V2_KEY_SYSTEM);
        }
        if (hasFairplay3) {
            keySystems.push(FAIRPLAY_V3_KEY_SYSTEM);
        }
        var text = [
            getKeySystemsText(keySystems),
        ].join('\n');
        return m$1(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$9(), hasFairplay && Badge({
            text: 'FairPlay',
            background: 'white',
            top: {
                text: 'Apple',
            },
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$d;

    var b$8 = block('playready-badge');
    function PlayreadyBadge() {
        var _a = h(false), hasPlayready = _a[0], setPlayready = _a[1];
        var _b = h(false), hasSL150 = _b[0], setSL150 = _b[1];
        var _c = h(false), hasSL2000 = _c[0], setSL2000 = _c[1];
        var _d = h(false), hasSL3000 = _d[0], setSL3000 = _d[1];
        isPlayReadySupported().then(function (result) {
            setPlayready(result);
        });
        isPlayReadySL150Supported().then(function (result) {
            setSL150(result);
        });
        isPlayReadySL2000Supported().then(function (result) {
            setSL2000(result);
        });
        isPlayReadySL3000Supported().then(function (result) {
            setSL3000(result);
        });
        var levels = [];
        if (hasSL150) {
            levels.push('SL150');
        }
        if (hasSL2000) {
            levels.push('SL2000');
        }
        if (hasSL3000) {
            levels.push('SL3000');
        }
        var text = [
            getSecurityLevelsText(levels),
            getKeySystemsText([PLAYREADY_KEY_SYSTEM]),
        ].join('\n');
        return m$1(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$8(), hasPlayready && Badge({
            text: 'PlayReady',
            background: 'white',
            top: {
                text: 'MicroSoft',
            },
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$c;

    var b$7 = block('primetime-badge');
    function PrimetimeBadge() {
        var _a = h(false), hasPrimetime = _a[0], setPrimetime = _a[1];
        isPrimetimeSupported().then(function (result) {
            setPrimetime(result);
        });
        var text = [
            getKeySystemsText([
                PRIMETIME_KEY_SYSTEM,
            ]),
        ].join('\n');
        return m$1(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$7(), hasPrimetime && Badge({
            text: 'Primetime',
            background: 'white',
            top: {
                text: 'Adobe',
            },
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$b;

    var b$6 = block('drm-badges');
    function DrmBadges() {
        return m$1(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        </div>\n    "])), b$6(), WidevineBadge, PlayreadyBadge, FairplayBadge, PrimetimeBadge, ClearkeyBadge);
    }
    var templateObject_1$a;

    var b$5 = block('native-streaming');
    function NativeStreaming() {
        var items = [
            {
                label: 'MPEG-DASH',
                supported: isNativeMpdSupported(),
            },
            {
                label: 'HTTP Live Streaming',
                supported: isNativeHlsSupported(),
            },
            {
                label: 'Smooth Streaming',
                supported: isNativeMssSupported(),
            },
        ];
        items.sort(function (a, b) {
            if (a.supported === b.supported) {
                return 0;
            }
            if (a.supported) {
                return -1;
            }
            return 1;
        });
        var result = items.map(function (item) {
            return m$1(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["", ": ", "<br/>"], ["", ": ", "<br/>"])), item.label, item.supported ? '✓' : 'No');
        });
        return m$1(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n        <div class=", ">\n            ", "\n        </div>\n    "], ["\n        <div class=", ">\n            ", "\n        </div>\n    "])), b$5(), result);
    }
    var templateObject_1$9, templateObject_2$6;

    var b$4 = block('result');
    function Result(props) {
        var text = props.text;
        var type = '';
        if (!props.text) {
            if (props.value === true) {
                text = 'Yes';
                type = 'yes';
            }
            if (props.value === false) {
                text = 'No';
                type = 'no';
            }
            if (props.value === undefined) {
                text = 'Warning';
                type = 'warning';
            }
        }
        return m$1(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["<span class=\"", "\">\n        ", "\n        ", "\n    </span>"], ["<span class=\"", "\">\n        ", "\n        ", "\n    </span>"])), b$4({
            type: type,
        }), text, props.details ? m$1(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$4('details'), props.details) : '');
    }
    var templateObject_1$8, templateObject_2$5;

    var b$3 = block('active-question');
    function ActiveQuestion(props) {
        var _a = h(false), opened = _a[0], setOpened = _a[1];
        var callback = T(function () {
            setOpened(!opened);
        }, [opened]);
        return m$1(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">", "</div>\n        </div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">", "</div>\n        </div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$3({ opened: opened }), b$3('head'), callback, b$3('plus'), opened ? '-' : '+', b$3('question'), props.head, b$3('body'), props.children);
    }
    var templateObject_1$7;

    function Question4K() {
        var isScreen4k = true;
        var isVp9 = isVp9Supported().any;
        var isHevc = isHevcMainSupported().any;
        var isAv1 = isAV1Supported().any;
        var mainAnswer = Boolean(isVp9 || isHevc || isAv1);
        var head = m$1(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["Can I watch 4K video? <", " value=\"", "\"><//>"], ["Can I watch 4K video? <", " value=\"", "\"><//>"])), Result, mainAnswer);
        return m$1(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["  \n        <", " head=\"", "\">\n            <ul>\n                <li>Is the screen larger than 2K? <", " value=\"", "\"><//></li>\n                <li>\n                    Support one of the video codecs? <", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"HEVC\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["  \n        <", " head=\"", "\">\n            <ul>\n                <li>Is the screen larger than 2K? <", " value=\"", "\"><//></li>\n                <li>\n                    Support one of the video codecs? <", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"HEVC\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, Result, isScreen4k, Result, true, Codec, !isVp9, Result, isVp9, Codec, !isHevc, Result, isHevc, Codec, !isAv1, Result, isAv1);
    }
    var templateObject_1$6, templateObject_2$4;

    function QuestionHdr() {
        var isVp9 = isVp9Supported().any;
        var isHevc = isHevcMainSupported().any;
        var isAv1 = isAV1Supported().any;
        var isHdr = isHdrScreenSupported();
        var mainAnswer = isHdr && Boolean(isVp9 || isHevc || isAv1);
        var head = m$1(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["Can I watch HDR video? <", " value=\"", "\"><//>"], ["Can I watch HDR video? <", " value=\"", "\"><//>"])), Result, mainAnswer);
        return m$1(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["  \n        <", " head=\"", "\">\n            <ul>\n                <li>Is this an HDR screen? <", " value=\"", "\"><//></li>\n                <li>Support one of the video codecs? <", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"HEVC\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["  \n        <", " head=\"", "\">\n            <ul>\n                <li>Is this an HDR screen? <", " value=\"", "\"><//></li>\n                <li>Support one of the video codecs? <", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"HEVC\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, Result, isHdr, Result, Boolean(isVp9 || isHevc || isAv1), Codec, !isVp9, Result, isVp9, Codec, !isHevc, Result, isHevc, Codec, !isAv1, Result, isAv1);
    }
    var templateObject_1$5, templateObject_2$3;

    function QuestionSurroundSound() {
        var isDolbyDigital = isDolbyDigitalSupported().any;
        var isDolbyDigitalPlus = isDolbyDigitalPlusSupported().any;
        var isDolbyAtmos = isDolbyAtmosSupported().any;
        var mainAnswer = isDolbyDigital || isDolbyDigitalPlus || isDolbyAtmos;
        var head = m$1(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["Can I listen surround sound? <", " value=\"", "\"><//>"], ["Can I listen surround sound? <", " value=\"", "\"><//>"])), Result, mainAnswer);
        return m$1(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["  \n        <", " head=\"", "\">\n            <ul>\n                <li>Support one of the audio codecs? <", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"Dolby Digital\"\n                                color=\"black\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"Dolby Digital Plus\"\n                                color=\"black\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"Dolby Atmos\"\n                                color=\"black\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["  \n        <", " head=\"", "\">\n            <ul>\n                <li>Support one of the audio codecs? <", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"Dolby Digital\"\n                                color=\"black\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"Dolby Digital Plus\"\n                                color=\"black\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"Dolby Atmos\"\n                                color=\"black\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, Result, mainAnswer, Codec, !isDolbyDigital, Result, isDolbyDigital, Codec, !isDolbyDigitalPlus, Result, isDolbyDigitalPlus, Codec, !isDolbyAtmos, Result, isDolbyAtmos);
    }
    var templateObject_1$4, templateObject_2$2;

    function QuestionDrm4K() {
        var _a = h(false), isVp9 = _a[0], setIsVp9 = _a[1];
        var _b = h(false), isHevc = _b[0], setIsHevc = _b[1];
        var _c = h(false), isAv1 = _c[0], setIsAv1 = _c[1];
        isWidevineSupported(VP9_CONTENT_TYPE).then(function (result) {
            setIsVp9(result);
        });
        isWidevineSupported(HEVC_MAIN_CONTENT_TYPE).then(function (result) {
            setIsHevc(result);
        });
        isWidevineSupported(AV1_CONTENT_TYPE).then(function (result) {
            setIsAv1(result);
        });
        var anyCodec = Boolean(isVp9 || isHevc || isAv1);
        var head = m$1(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["Can I watch 4K video on online services? <", " value=\"", "\"><//>"], ["Can I watch 4K video on online services? <", " value=\"", "\"><//>"])), Result, anyCodec);
        return m$1(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["  \n        <", " head=\"", "\">\n            Online services protect content using <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Digital_rights_management\">DRM</a>.\n            <ul>\n                <li>\n                Support one of the video codecs? <", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"HEVC\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["  \n        <", " head=\"", "\">\n            Online services protect content using <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Digital_rights_management\">DRM</a>.\n            <ul>\n                <li>\n                Support one of the video codecs? <", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"HEVC\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, Result, anyCodec, Codec, !isVp9, Result, isVp9, Codec, !isHevc, Result, isHevc, Codec, !isAv1, Result, isAv1);
    }
    var templateObject_1$3, templateObject_2$1;

    var b$2 = block('questions');
    function Questions( /*props: Question4KProps*/) {
        return m$1(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["    \n        <div class=", ">    \n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        <//>\n    "], ["    \n        <div class=", ">    \n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        <//>\n    "])), b$2(), Question4K, QuestionHdr, QuestionSurroundSound, QuestionDrm4K);
    }
    var templateObject_1$2;

    var b$1 = block('html-video-element-features');
    function HtmlVideoElementFeatures() {
        var items = [
            {
                label: 'Media Source Extensions',
                title: 'MSE',
                supported: isMseSupported(),
            },
            {
                label: 'Managed Media Source',
                title: 'MMS',
                supported: isMmsSupported(),
            },
            {
                label: 'Encrypted Media Extensions',
                title: 'EME',
                supported: isEmeSupported(),
            },
        ];
        items.sort(function (a, b) {
            if (a.supported === b.supported) {
                return 0;
            }
            if (a.supported) {
                return -1;
            }
            return 1;
        });
        var result = items.map(function (item) {
            return m$1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["<div title=\"", "\">", ": ", "</div>"], ["<div title=\"", "\">", ": ", "</div>"])), item.title, item.label, item.supported ? '✓' : 'No');
        });
        return m$1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div class=", ">\n            ", "\n        </div>\n    "], ["\n        <div class=", ">\n            ", "\n        </div>\n    "])), b$1(), result);
    }
    var templateObject_1$1, templateObject_2;

    var b = block('main-page');
    function MainPage() {
        return m$1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", "><//>\n\n            <", "><//>\n            <", "><//>\n\n            <", " name=\"Audio\">\n                <", "><//>\n            <//>\n\n            <", "><//>\n\n            <", " name=\"Video Codecs\">\n                <", "><//>\n            <//>\n\n            <", " name=\"DRM\">\n                <", "><//>\n            <//>\n\n            <", " name=\"Native Streaming Support\">\n                <", "><//>\n            <//>\n\n            <", " name=\"HTMLVideoElement Features\">\n                <", "><//>\n            <//>\n        </div>"], ["\n        <div class=\"", "\">\n            <", "><//>\n\n            <", "><//>\n            <", "><//>\n\n            <", " name=\"Audio\">\n                <", "><//>\n            <//>\n\n            <", "><//>\n\n            <", " name=\"Video Codecs\">\n                <", "><//>\n            <//>\n\n            <", " name=\"DRM\">\n                <", "><//>\n            <//>\n\n            <", " name=\"Native Streaming Support\">\n                <", "><//>\n            <//>\n\n            <", " name=\"HTMLVideoElement Features\">\n                <", "><//>\n            <//>\n        </div>"])), b(), Header, Questions, ScreenBadges, Row, AudioBadges, AudioCodecs, Row, VideoCodecs, Row, DrmBadges, Row, NativeStreaming, Row, HtmlVideoElementFeatures);
    }
    var templateObject_1;

    hit('95998062');
    q(MainPage(), document.querySelector('.page'));

}));
