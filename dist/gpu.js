!function(n){"function"==typeof define&&define.amd?define(n):n()}((function(){"use strict";var n=function(){return n=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},n.apply(this,arguments)};function e(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,u,s,l,c,_,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function h(n,e){for(var t in e)n[t]=e[t];return n}function m(n){var e=n.parentNode;e&&e.removeChild(n)}function g(n,e,r){var o,i,a,u={};for(a in e)"key"==a?o=e[a]:"ref"==a?i=e[a]:u[a]=e[a];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(a in n.defaultProps)void 0===u[a]&&(u[a]=n.defaultProps[a]);return y(n,u,o,i,null)}function y(n,e,t,i,a){var u={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(u),u}function b(n){return n.children}function w(n,e){this.props=n,this.context=e}function k(n,e){if(null==e)return n.__?k(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?k(n):null}function C(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return C(n)}}function P(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!S.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||u)(S)}function S(){var n,e,t,o,a,u,l,c;for(i.sort(s);n=i.shift();)n.__d&&(e=i.length,o=void 0,u=(a=(t=n).__v).__e,l=[],c=[],t.__P&&((o=h({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),R(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[u]:null,l,null==u?k(a):u,!!(32&a.__u),c),o.__v=a.__v,o.__.__k[o.__i]=o,T(l,o,c),o.__e!=u&&C(o)),i.length>e&&i.sort(s));S.__r=0}function I(n,e,t,r,o,i,a,u,s,l,c){var _,f,v,h,m,g=r&&r.__k||p,y=e.length;for(t.__d=s,H(t,e,g),s=t.__d,_=0;_<y;_++)null!=(v=t.__k[_])&&"boolean"!=typeof v&&"function"!=typeof v&&(f=-1===v.__i?d:g[v.__i]||d,v.__i=_,R(n,v,f,o,i,a,u,s,l,c),h=v.__e,v.ref&&f.ref!=v.ref&&(f.ref&&U(f.ref,null,v),c.push(v.ref,v.__c||h,v)),null==m&&null!=h&&(m=h),65536&v.__u||f.__k===v.__k?(s&&!s.isConnected&&(s=k(f)),s=A(v,s,n)):"function"==typeof v.type&&void 0!==v.__d?s=v.__d:h&&(s=h.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=s,t.__e=m}function H(n,e,t){var r,o,i,a,u,s=e.length,l=t.length,c=l,_=0;for(n.__k=[],r=0;r<s;r++)a=r+_,null!=(o=n.__k[r]=null==(o=e[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):v(o)?y(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=n,o.__b=n.__b+1,u=x(o,t,a,c),o.__i=u,i=null,-1!==u&&(c--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&_--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u===a+1?_++:u>a?c>s-a?_+=u-a:_--:u<a?u==a-1&&(_=u-a):_=0,u!==r+_&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=k(i)),G(i,i,!1),t[a]=null,c--);if(c)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=k(i)),G(i,i))}function A(n,e,t){var r,o;if("function"==typeof n.type){for(r=n.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=n,e=A(r[o],e,t));return e}n.__e!=e&&(t.insertBefore(n.__e,e||null),e=n.__e);do{e=e&&e.nextSibling}while(null!=e&&8===e.nodeType);return e}function x(n,e,t,r){var o=n.key,i=n.type,a=t-1,u=t+1,s=e[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;a>=0||u<e.length;){if(a>=0){if((s=e[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a--}if(u<e.length){if((s=e[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function D(n,e,t){"-"===e[0]?n.setProperty(e,null==t?"":t):n[e]=null==t?"":"number"!=typeof t||f.test(e)?t:t+"px"}function N(n,e,t,r,o){var i;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||D(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||D(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||"onFocusOut"===e||"onFocusIn"===e?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t.u=r.u:(t.u=l,n.addEventListener(e,i?_:c,i)):n.removeEventListener(e,i?_:c,i);else{if("http://www.w3.org/2000/svg"==o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=e&&"height"!=e&&"href"!=e&&"list"!=e&&"form"!=e&&"tabIndex"!=e&&"download"!=e&&"rowSpan"!=e&&"colSpan"!=e&&"role"!=e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==e[4]?n.removeAttribute(e):n.setAttribute(e,t))}}function E(n){return function(e){if(this.l){var t=this.l[e.type+n];if(null==e.t)e.t=l++;else if(e.t<t.u)return;return t(r.event?r.event(e):e)}}}function R(n,e,o,i,a,u,s,l,c,_){var p,f,g,y,C,P,S,H,A,x,D,E,R,T,U,G=e.type;if(void 0!==e.constructor)return null;128&o.__u&&(c=!!(32&o.__u),u=[l=e.__e=o.__e]),(p=r.__b)&&p(e);n:if("function"==typeof G)try{if(H=e.props,A=(p=G.contextType)&&i[p.__c],x=p?A?A.props.value:p.__:i,o.__c?S=(f=e.__c=o.__c).__=f.__E:("prototype"in G&&G.prototype.render?e.__c=f=new G(H,x):(e.__c=f=new w(H,x),f.constructor=G,f.render=M),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=x,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=G.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=h({},f.__s)),h(f.__s,G.getDerivedStateFromProps(H,f.__s))),y=f.props,C=f.state,f.__v=e,g)null==G.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==G.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,x),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,x)||e.__v===o.__v)){for(e.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.forEach((function(n){n&&(n.__=e)})),D=0;D<f._sb.length;D++)f.__h.push(f._sb[D]);f._sb=[],f.__h.length&&s.push(f);break n}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,C,P)}))}if(f.context=x,f.props=H,f.__P=n,f.__e=!1,E=r.__r,R=0,"prototype"in G&&G.prototype.render){for(f.state=f.__s,f.__d=!1,E&&E(e),p=f.render(f.props,f.state,f.context),T=0;T<f._sb.length;T++)f.__h.push(f._sb[T]);f._sb=[]}else do{f.__d=!1,E&&E(e),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++R<25);f.state=f.__s,null!=f.getChildContext&&(i=h(h({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(P=f.getSnapshotBeforeUpdate(y,C)),I(n,v(U=null!=p&&p.type===b&&null==p.key?p.props.children:p)?U:[U],e,o,i,a,u,s,l,c,_),f.base=e.__e,e.__u&=-161,f.__h.length&&s.push(f),S&&(f.__E=f.__=null)}catch(n){e.__v=null,c||null!=u?(e.__e=l,e.__u|=c?160:32,u[u.indexOf(l)]=null):(e.__e=o.__e,e.__k=o.__k),r.__e(n,e,o)}else null==u&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=function(n,e,r,o,i,a,u,s,l){var c,_,p,f,h,g,y,b=r.props,w=e.props,C=e.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(c=0;c<a.length;c++)if((h=a[c])&&"setAttribute"in h==!!C&&(C?h.localName===C:3===h.nodeType)){n=h,a[c]=null;break}if(null==n){if(null===C)return document.createTextNode(w);n=document.createElementNS(i,C,w.is&&w),a=null,s=!1}if(null===C)b===w||s&&n.data===w||(n.data=w);else{if(a=a&&t.call(n.childNodes),b=r.props||d,!s&&null!=a)for(b={},c=0;c<n.attributes.length;c++)b[(h=n.attributes[c]).name]=h.value;for(c in b)if(h=b[c],"children"==c);else if("dangerouslySetInnerHTML"==c)p=h;else if("key"!==c&&!(c in w)){if("value"==c&&"defaultValue"in w||"checked"==c&&"defaultChecked"in w)continue;N(n,c,null,h,i)}for(c in w)h=w[c],"children"==c?f=h:"dangerouslySetInnerHTML"==c?_=h:"value"==c?g=h:"checked"==c?y=h:"key"===c||s&&"function"!=typeof h||b[c]===h||N(n,c,h,b[c],i);if(_)s||p&&(_.__html===p.__html||_.__html===n.innerHTML)||(n.innerHTML=_.__html),e.__k=[];else if(p&&(n.innerHTML=""),I(n,v(f)?f:[f],e,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:r.__k&&k(r,0),s,l),null!=a)for(c=a.length;c--;)null!=a[c]&&m(a[c]);s||(c="value",void 0!==g&&(g!==n[c]||"progress"===C&&!g||"option"===C&&g!==b[c])&&N(n,c,g,b[c],i),c="checked",void 0!==y&&y!==n[c]&&N(n,c,y,b[c],i))}return n}(o.__e,e,o,i,a,u,s,c,_);(p=r.diffed)&&p(e)}function T(n,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){r.__e(n,e.__v)}}))}function U(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){r.__e(n,t)}}function G(n,e,t){var o,i;if(r.unmount&&r.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||U(o,null,e)),null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){r.__e(n,e)}o.base=o.__P=null}if(o=n.__k)for(i=0;i<o.length;i++)o[i]&&G(o[i],e,t||"function"!=typeof n.type);t||null==n.__e||m(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function M(n,e,t){return this.constructor(n,t)}t=p.slice,r={__e:function(n,e,t,r){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(n)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(n,r||{}),a=o.__d),a)return o.__E=o}catch(e){n=e}throw n}},o=0,w.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},t),this.props)),n&&h(t,n),null!=n&&this.__v&&(e&&this._sb.push(e),P(this))},w.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this))},w.prototype.render=b,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(n,e){return n.__v.__b-e.__v.__b},S.__r=0,l=0,c=E(!1),_=E(!0);var W=function(n,e,t,r){var o;e[0]=0;for(var i=1;i<e.length;i++){var a=e[i++],u=e[i]?(e[0]|=a?1:2,t[e[i++]]):e[++i];3===a?r[0]=u:4===a?r[1]=Object.assign(r[1]||{},u):5===a?(r[1]=r[1]||{})[e[++i]]=u:6===a?r[1][e[++i]]+=u+"":a?(o=n.apply(u,W(n,u,t,["",null])),r.push(o),u[0]?e[0]|=2:(e[i-2]=0,e[i]=o)):r.push(u)}return r},F=new Map;var L=function(n){var e=F.get(this);return e||(e=new Map,F.set(this,e)),(e=W(this,e.get(n)||(e.set(n,e=function(n){for(var e,t,r=1,o="",i="",a=[0],u=function(n){1===r&&(n||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,n,o):3===r&&(n||o)?(a.push(3,n,o),r=2):2===r&&"..."===o&&n?a.push(4,n,0):2===r&&o&&!n?a.push(5,0,!0,o):r>=5&&((o||!n&&5===r)&&(a.push(r,0,o,t),r=6),n&&(a.push(r,n,0,t),r=6)),o=""},s=0;s<n.length;s++){s&&(1===r&&u(),u(s));for(var l=0;l<n[s].length;l++)e=n[s][l],1===r?"<"===e?(u(),a=[a],r=3):o+=e:4===r?"--"===o&&">"===e?(r=1,o=""):o=e+o[0]:i?e===i?i="":o+=e:'"'===e||"'"===e?i=e:">"===e?(u(),r=1):r&&("="===e?(r=5,t=o,o=""):"/"===e&&(r<5||">"===n[s][l+1])?(u(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(u(),r=2):o+=e),3===r&&"!--"===o&&(r=4,a=a[0])}return u(),a}(n)),e),arguments,[])).length>1?e:e[0]}.bind(g);function B(n){return function(e,t){if(!e)return n;var r=n;return"string"==typeof e?(r=n+"__"+e,t&&(r=V(r,t)),r):(e&&(r=V(r,e)),r)}}function V(n,e){var t=n;return Object.keys(e).forEach((function(r){var o=e[r];!1!==o&&null!=o&&""!==o&&(t+=" "+n+"_",!0===e[r]?t+=r:t+=r+"_"+o)})),t}var O,j=B("header");function q(n){return L(O||(O=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),j(),n.children)}var K,$,z,Y,J=0,Q=[],X=[],Z=r,nn=Z.__b,en=Z.__r,tn=Z.diffed,rn=Z.__c,on=Z.unmount,an=Z.__;function un(n,e){Z.__h&&Z.__h($,n,J||e),J=0;var t=$.__H||($.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:X}),t.__[n]}function sn(n){return J=1,function(n,e,t){var r=un(K++,2);if(r.t=n,!r.__c&&(r.__=[gn(void 0,e),function(n){var e=r.__N?r.__N[0]:r.__[0],t=r.t(e,n);e!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=$,!$.u)){var o=function(n,e,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(n){return!!n.__c}));if(o.every((function(n){return!n.__N})))return!i||i.call(this,n,e,t);var a=!1;return o.forEach((function(n){if(n.__N){var e=n.__[0];n.__=n.__N,n.__N=void 0,e!==n.__[0]&&(a=!0)}})),!(!a&&r.__c.props===n)&&(!i||i.call(this,n,e,t))};$.u=!0;var i=$.shouldComponentUpdate,a=$.componentWillUpdate;$.componentWillUpdate=function(n,e,t){if(this.__e){var r=i;i=void 0,o(n,e,t),i=r}a&&a.call(this,n,e,t)},$.shouldComponentUpdate=o}return r.__N||r.__}(gn,n)}function ln(n){return J=5,cn((function(){return{current:n}}),[])}function cn(n,e){var t=un(K++,7);return mn(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function _n(n,e){return J=8,cn((function(){return n}),e)}function dn(){for(var n;n=Q.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(vn),n.__H.__h.forEach(hn),n.__H.__h=[]}catch(e){n.__H.__h=[],Z.__e(e,n.__v)}}Z.__b=function(n){$=null,nn&&nn(n)},Z.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),an&&an(n,e)},Z.__r=function(n){en&&en(n),K=0;var e=($=n.__c).__H;e&&(z===$?(e.__h=[],$.__h=[],e.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=X,n.__N=n.i=void 0}))):(e.__h.forEach(vn),e.__h.forEach(hn),e.__h=[],K=0)),z=$},Z.diffed=function(n){tn&&tn(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(1!==Q.push(e)&&Y===Z.requestAnimationFrame||((Y=Z.requestAnimationFrame)||fn)(dn)),e.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==X&&(n.__=n.__V),n.i=void 0,n.__V=X}))),z=$=null},Z.__c=function(n,e){e.some((function(n){try{n.__h.forEach(vn),n.__h=n.__h.filter((function(n){return!n.__||hn(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],Z.__e(t,n.__v)}})),rn&&rn(n,e)},Z.unmount=function(n){on&&on(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{vn(n)}catch(n){e=n}})),t.__H=void 0,e&&Z.__e(e,t.__v))};var pn="function"==typeof requestAnimationFrame;function fn(n){var e,t=function(){clearTimeout(r),pn&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);pn&&(e=requestAnimationFrame(t))}function vn(n){var e=$,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),$=e}function hn(n){var e=$;n.__c=n.__(),$=e}function mn(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function gn(n,e){return"function"==typeof e?e(n):e}var yn,bn=B("radio-button");function wn(n){var t=_n((function(){var e;null===(e=n.onClick)||void 0===e||e.call(n,n.value)}),[n.onClick]),r=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return n.filter((function(n){return null!=n})).join(" ")}(bn({selected:n.selected}),n.class);return L(yn||(yn=e(['\n        <span\n            class="','"\n            onClick="','"\n            key="','"\n        >',"</span>\n    "],['\n        <span\n            class="','"\n            onClick="','"\n            key="','"\n        >',"</span>\n    "])),r,t,n.value,n.text)}var kn,Cn,Pn,Sn=B("radio-buttons");function In(n){var t=n.buttons,r=n.label,o=n.onSelect,i=function(n){var e=n.find((function(n){return n.selected}));return null!=e?e:n[0]}(t),a=sn(i?i.value:void 0),u=a[0],s=a[1],l=_n((function(n){s(n),o(n)}),[o]);return L(Cn||(Cn=e(['\n        <div class="','">\n            <div class="','">','</div>\n            <div class="','">\n                ',"\n            </div>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','">','</div>\n            <div class="','">\n                ',"\n            </div>\n        </div>\n    "])),Sn(),Sn("label"),r,Sn("items"),t.map((function(n){return L(kn||(kn=e(["<",'\n                            key="','"\n                            class="','"\n                            selected="','"\n                            text="','"\n                            value="','"\n                            onClick="','"\n                        ><//>'],["<",'\n                            key="','"\n                            class="','"\n                            selected="','"\n                            text="','"\n                            value="','"\n                            onClick="','"\n                        ><//>'])),wn,n.value,Sn("item"),n.value===u,n.text,n.value,l)})))}function Hn(n){if(!n)return{};var e={};for(var t in n)e[t]=n[t];return e}function An(n){if(!n)return[];var e=[];return n.forEach((function(n){e.push(n)})),e.sort()}function xn(n){return L(Pn||(Pn=e(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),n.children)}var Dn,Nn=B("row");function En(n){return L(Dn||(Dn=e(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Nn(),Nn("category"),n.name,Nn("body"),n.children)}var Rn,Tn,Un,Gn,Mn,Wn,Fn,Ln,Bn,Vn,On,jn,qn,Kn,$n,zn,Yn,Jn,Qn=B("tree-list"),Xn={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function Zn(n,t,r){if(void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof n)return L(Rn||(Rn=e(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),Qn("string"),n);if("number"==typeof n)return L(Tn||(Tn=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Qn("number"),n);if("bigint"==typeof n)return L(Un||(Un=e(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),Qn("bigint"),n);if("boolean"==typeof n)return L(Gn||(Gn=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Qn("boolean"),String(n));if("function"==typeof n)return L(Mn||(Mn=e(['<span class="','">function</span>'],['<span class="','">function</span>'])),Qn("function"));if("symbol"==typeof n)return L(Wn||(Wn=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Qn("symbol"),n);if(void 0===n)return L(Fn||(Fn=e(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),Qn("undefined"));if(null===n)return L(Ln||(Ln=e(['<span class="','">null</span>'],['<span class="','">null</span>'])),Qn("null"));if(Array.isArray(n))return t.compactArrayWithSimpleTypes&&n.every((function(n){return null===n||Xn[typeof n]}))?L(Vn||(Vn=e(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",n.map((function(n,o){return L(Bn||(Bn=e(["","",""],["","",""])),o?", ":"",Zn(n,t,r+1))}))," "):L(qn||(qn=e(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),n.map((function(o,i){var a=t.showArrayIndex?L(On||(On=e([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),Qn("index"),i):"";return L(jn||(jn=e(["<li>","","","</li>"],["<li>","","","</li>"])),a,Zn(o,t,r+1),i===n.length-1?"":",")})));if(t.compactObject&&r>0)return L($n||($n=e(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(n).map((function(o,i,a){return L(Kn||(Kn=e(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),Qn("property"),o,Zn(n[o],t,r+1),i===a.length-1?"":", ")}))," ");var o=Boolean(t.showCurlyBracesAtRootLevel||r);return L(Yn||(Yn=e(["",'<ul class="','">\n        ',"\n    </ul>",""],["",'<ul class="','">\n        ',"\n    </ul>",""])),o?"{":"",Qn("ul",{padding:o?"yes":"no"}),Object.keys(n).map((function(o,i,a){return L(zn||(zn=e(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),Qn("property"),o,Zn(n[o],t,r+1),i===a.length-1?"":",")})),o?"}":"")}function ne(n){return L(Jn||(Jn=e(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),En,n.title,Qn(),Zn(n.data,n.options))}var ee,te={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"}};function re(n){var e=te[n];if(!e)return console.error('Not found key "'.concat(n,'" in getText().')),n;var t=e[ee];return void 0===t?(console.error('Not found key "'.concat(n,'", lang "').concat(ee,'" in getText().')),n):t}function oe(n){return n[ee]}var ie,ae,ue,se=[{text:"Low power",value:"low-power"},{text:"High performance",value:"high-performance",selected:!0}],le=B("gpu-navigator");function ce(){var n=sn(!1),t=n[0],r=n[1],o=sn(!1);o[0];var i=o[1],a=sn("high-performance"),u=a[0],s=a[1],l=ln(),c=ln(),_=_n((function(n){s(n)}),[]);!function(n,e){var t=un(K++,3);!Z.__s&&mn(t.__H,e)&&(t.__=n,t.i=e,$.__H.__h.push(t))}((function(){navigator.gpu&&navigator.gpu.requestAdapter({powerPreference:u}).then((function(n){if(l.current=n,r(!0),n)return n.info?(c.current=n.info,void i(!0)):void n.requestAdapterInfo().then((function(n){c.current=n,i(!0)})).catch((function(n){console.error(n)}))})).catch((function(n){console.error(n)}))}),[u]);var d,p={info:(d=c.current,d?{vendor:d.vendor,architecture:d.architecture,description:d.description,device:d.device}:{}),isFallbackAdapter:l.current&&l.current.isFallbackAdapter,limits:Hn(l.current&&l.current.limits),features:An(l.current&&l.current.features)};return navigator.gpu?null===t?L(ae||(ae=e(["<",">","<//>"],["<",">","<//>"])),xn,re("GPU Adapter is not found.")):t?L(ue||(ue=e(['\n        <div class="','">\n            <div class="','">\n                <','\n                    label="Power preference:"\n                    buttons="','"\n                    onSelect="','"\n                ><//>\n            </div>\n\n            <',' title="Adapter" data=',"><//>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','">\n                <','\n                    label="Power preference:"\n                    buttons="','"\n                    onSelect="','"\n                ><//>\n            </div>\n\n            <',' title="Adapter" data=',"><//>\n        </div>\n    "])),le(),le("controls"),In,se,_,ne,p):"...":L(ie||(ie=e(["<",">","<//>"],["<",">","<//>"])),xn,re("WebGPU is not supported."))}function _e(){const n=document.createElement("canvas");try{const e=n.getContext("webgl")||n.getContext("experimental-webgl");if(e){const n=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(n.UNMASKED_VENDOR_WEBGL)}}catch(n){}return""}function de(){const n=document.createElement("canvas");try{const e=n.getContext("webgl")||n.getContext("experimental-webgl");if(e){const n=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(n.UNMASKED_RENDERER_WEBGL)}}catch(n){}return""}var pe,fe,ve,he,me=B("list");function ge(n){var t=n.items.filter((function(n){if(1===n.length)return!0;n[0];var e=n[1];return void 0!==e&&""!==e})).map((function(n){var e=n[0],t=n[1];return 1===n.length?[e]:[e,"boolean"==typeof t?String(t):t]}));return t.length?L(ve||(ve=e(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),En,n.title,me(),t.map((function(n){var t=n[0],r=n[1];return 1===n.length?L(pe||(pe=e(["<li>","</li>"],["<li>","</li>"])),t):L(fe||(fe=e(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}function ye(){var n=[["Vendor",_e()],["Renderer",de()]].filter((function(n){return Boolean(n[1])}));return L(he||(he=e(["<",' title="WebGL context" items="','" //>'],["<",' title="WebGL context" items="','" //>'])),ge,n)}var be="undefined"!=typeof document,we="undefined"!=typeof window,ke="undefined"!=typeof navigator,Ce="undefined"!=typeof screen;var Pe=1;function Se(n,e){return(n||"").slice(0,e)}function Ie(){return Math.floor(Math.random()*(1<<30))}var He=512;function Ae(n,e,t){(t||0===t)&&n.push(e+":"+(!0===t?"1":t))}function xe(n,e){var t=[];n&&Object.keys(n).forEach((function(e){return Ae(t,e,n[e])})),Ae(t,"rn",Ie()),Ae(t,"c",!!ke&&navigator.cookieEnabled),Ae(t,"s",Ce?[screen.width,screen.height,screen.colorDepth].join("x"):""),Ae(t,"sk",we&&window.devicePixelRatio||Pe),Ae(t,"w",we?[window.innerWidth,window.innerHeight].join("x"):""),Ae(t,"en",be&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Ae(t,"et",r),Ae(t,"st",r),Ae(t,"t",Se(e,He)),t.join(":")}var De,Ne,Ee=1024;function Re(n){return Se(n,Ee)}function Te(n,e){var t,r="https://mc.yandex.ru/watch/"+n+"?"+(t=e,Object.keys(t).filter((function(n){return t[n]||0===t[n]})).map((function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(n){var e=n.browserInfo,t=n.counterId,r=n.pageParams,o={"browser-info":xe(e,r.title),rn:Ie(),ut:r.ut};r.url&&(o["page-url"]=Re(r.url)),r.referrer&&(o["page-ref"]=Re(r.referrer)),Te(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:be?document.referrer:"",title:be?document.title:"",url:we&&window.location?window.location.href:""},params:De}),function(n){ee=n}((Ne=function(){for(var n=window.location.search.slice(1).split("&"),e=0;e<n.length;e++){var t=n[e].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==Ne&&"ru"!==Ne&&(Ne="en"),Ne)),window.addEventListener("beforeinstallprompt",(function(n){}));var Ue,Ge=B("footer");function Me(){return L(Ue||(Ue=e(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),Ge(),Ge("item"),Ge("l1"),Ge("l2"),Ge("l3"),Ge("l4"),Ge("l5"),Ge("l6"),Ge("item",{g:!0}),Ge("G"),Ge("i"),Ge("t"),Ge("H"),Ge("u"),Ge("b"))}var We,Fe,Le=B("main-menu");function Be(n){return L(Fe||(Fe=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Le(),n.items.filter((function(n){return!n.hidden})).map((function(n){return L(We||(We=e(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Le("item",{selected:n.selected}),n.url,n.title)})))}var Ve,Oe,je=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function qe(){var t=function(){var n=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return n||"index"}(),r=je.map((function(e){var r=e.id===t;return r&&(document.title=oe(e.header||e.menuTitle)),n(n({},e),{title:oe(e.menuTitle),selected:r})}));return L(Ve||(Ve=e(["<",' items="','"><//>'],["<",' items="','"><//>'])),Be,r)}function Ke(n){return L(Oe||(Oe=e(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),qe,n.children,Me)}var $e,ze,Ye,Je=B("cube-3d");function Qe(){return L($e||($e=e(['\n    <div class="','">\n        <div class="','">\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n        </div>\n    </div>'],['\n    <div class="','">\n        <div class="','">\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n        </div>\n    </div>'])),Je(),Je("container"),Je("side",{back:!0}),Je("side",{left:!0}),Je("side",{right:!0}),Je("side",{top:!0}),Je("side",{bottom:!0}),Je("side",{front:!0}))}!function(n,e,o){var i,a,u,s;r.__&&r.__(n,e),a=(i="function"==typeof o)?null:e.__k,u=[],s=[],R(e,n=(!i&&o||e).__k=g(b,null,[n]),a||d,d,e.namespaceURI,!i&&o?[o]:a?null:e.firstChild?t.call(e.childNodes):null,u,!i&&o?o:a?a.__e:e.firstChild,i,s),T(u,n,s)}(L(Ye||(Ye=e(["<"," //>"],["<"," //>"])),(function(){return L(ze||(ze=e(["\n        <",">\n            <",">GPU<//>\n\n            <"," //>\n\n            <","><//>\n\n            <","><//>\n        <//>"],["\n        <",">\n            <",">GPU<//>\n\n            <"," //>\n\n            <","><//>\n\n            <","><//>\n        <//>"])),Ke,q,Qe,ye,ce)})),document.querySelector(".page"))}));
