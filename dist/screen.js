!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,s,u,c,l,_,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,a,s={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:s[a]=n[a];if(arguments.length>2&&(s.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===s[a]&&(s[a]=e.defaultProps[a]);return y(e,s,o,i,null)}function y(e,n,t,i,a){var s={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(s),s}function w(e){return e.children}function S(e,n){this.props=e,this.context=n}function b(e,n){if(null==n)return e.__?b(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?b(e):null}function P(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return P(e)}}function C(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!k.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||s)(k)}function k(){var e,n,t,o,a,s,c,l;for(i.sort(u);e=i.shift();)e.__d&&(n=i.length,o=void 0,s=(a=(t=e).__v).__e,c=[],l=[],t.__P&&((o=v({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),N(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[s]:null,c,null==s?b(a):s,!!(32&a.__u),l),o.__v=a.__v,o.__.__k[o.__i]=o,T(c,o,l),o.__e!=s&&P(o)),i.length>n&&i.sort(u));k.__r=0}function H(e,n,t,r,o,i,a,s,u,c,l){var _,f,h,v,m,g=r&&r.__k||p,y=n.length;for(t.__d=u,I(t,n,g),u=t.__d,_=0;_<y;_++)null!=(h=t.__k[_])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=_,N(e,h,f,o,i,a,s,u,c,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&E(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(u&&!u.isConnected&&(u=b(f)),u=D(h,u,e)):"function"==typeof h.type&&void 0!==h.__d?u=h.__d:v&&(u=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=u,t.__e=m}function I(e,n,t){var r,o,i,a,s,u=n.length,c=t.length,l=c,_=0;for(e.__k=[],r=0;r<u;r++)a=r+_,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,s=x(o,t,a,l),o.__i=s,i=null,-1!==s&&(l--,(i=t[s])&&(i.__u|=131072)),null==i||null===i.__v?(-1==s&&_--,"function"!=typeof o.type&&(o.__u|=65536)):s!==a&&(s===a+1?_++:s>a?l>u-a?_+=s-a:_--:s<a?s==a-1&&(_=s-a):_=0,s!==r+_&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),U(i,i,!1),t[a]=null,l--);if(l)for(r=0;r<c;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),U(i,i))}function D(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=D(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function x(e,n,t,r){var o=e.key,i=e.type,a=t-1,s=t+1,u=n[t];if(null===u||u&&o==u.key&&i===u.type&&!(131072&u.__u))return t;if(r>(null==u||131072&u.__u?0:1))for(;a>=0||s<n.length;){if(a>=0){if((u=n[a])&&!(131072&u.__u)&&o==u.key&&i===u.type)return a;a--}if(s<n.length){if((u=n[s])&&!(131072&u.__u)&&o==u.key&&i===u.type)return s;s++}}return-1}function A(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function R(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||A(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||A(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=c,e.addEventListener(n,i?_:l,i)):e.removeEventListener(n,i?_:l,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function M(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=c++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function N(e,n,o,i,a,s,u,c,l,_){var p,f,g,y,P,C,k,I,D,x,A,M,N,T,E,U=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(l=!!(32&o.__u),s=[c=n.__e=o.__e]),(p=r.__b)&&p(n);e:if("function"==typeof U)try{if(I=n.props,D=(p=U.contextType)&&i[p.__c],x=p?D?D.props.value:p.__:i,o.__c?k=(f=n.__c=o.__c).__=f.__E:("prototype"in U&&U.prototype.render?n.__c=f=new U(I,x):(n.__c=f=new S(I,x),f.constructor=U,f.render=L),D&&D.sub(f),f.props=I,f.state||(f.state={}),f.context=x,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=U.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,U.getDerivedStateFromProps(I,f.__s))),y=f.props,P=f.state,f.__v=n,g)null==U.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==U.getDerivedStateFromProps&&I!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(I,x),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(I,f.__s,x)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=I,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),A=0;A<f._sb.length;A++)f.__h.push(f._sb[A]);f._sb=[],f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(I,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,P,C)}))}if(f.context=x,f.props=I,f.__P=e,f.__e=!1,M=r.__r,N=0,"prototype"in U&&U.prototype.render){for(f.state=f.__s,f.__d=!1,M&&M(n),p=f.render(f.props,f.state,f.context),T=0;T<f._sb.length;T++)f.__h.push(f._sb[T]);f._sb=[]}else do{f.__d=!1,M&&M(n),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++N<25);f.state=f.__s,null!=f.getChildContext&&(i=v(v({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(C=f.getSnapshotBeforeUpdate(y,P)),H(e,h(E=null!=p&&p.type===w&&null==p.key?p.props.children:p)?E:[E],n,o,i,a,s,u,c,l,_),f.base=n.__e,n.__u&=-161,f.__h.length&&u.push(f),k&&(f.__E=f.__=null)}catch(e){n.__v=null,l||null!=s?(n.__e=c,n.__u|=l?160:32,s[s.indexOf(c)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==s&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,i,a,s,u,c){var l,_,p,f,v,g,y,w=r.props,S=n.props,P=n.type;if("svg"===P?i="http://www.w3.org/2000/svg":"math"===P?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(l=0;l<a.length;l++)if((v=a[l])&&"setAttribute"in v==!!P&&(P?v.localName===P:3===v.nodeType)){e=v,a[l]=null;break}if(null==e){if(null===P)return document.createTextNode(S);e=document.createElementNS(i,P,S.is&&S),a=null,u=!1}if(null===P)w===S||u&&e.data===S||(e.data=S);else{if(a=a&&t.call(e.childNodes),w=r.props||d,!u&&null!=a)for(w={},l=0;l<e.attributes.length;l++)w[(v=e.attributes[l]).name]=v.value;for(l in w)if(v=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)p=v;else if("key"!==l&&!(l in S)){if("value"==l&&"defaultValue"in S||"checked"==l&&"defaultChecked"in S)continue;R(e,l,null,v,i)}for(l in S)v=S[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?_=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||u&&"function"!=typeof v||w[l]===v||R(e,l,v,w[l],i);if(_)u||p&&(_.__html===p.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),n.__k=[];else if(p&&(e.innerHTML=""),H(e,h(f)?f:[f],n,r,o,"foreignObject"===P?"http://www.w3.org/1999/xhtml":i,a,s,a?a[0]:r.__k&&b(r,0),u,c),null!=a)for(l=a.length;l--;)null!=a[l]&&m(a[l]);u||(l="value",void 0!==g&&(g!==e[l]||"progress"===P&&!g||"option"===P&&g!==w[l])&&R(e,l,g,w[l],i),l="checked",void 0!==y&&y!==e[l]&&R(e,l,y,w[l],i))}return e}(o.__e,n,o,i,a,s,u,l,_);(p=r.diffed)&&p(n)}function T(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)E(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function E(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function U(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&U(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function L(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,a;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(n){e=n}throw e}},o=0,S.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),C(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},S.prototype.render=w,i=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,n){return e.__v.__b-n.__v.__b},k.__r=0,c=0,l=M(!1),_=M(!0);var G=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var a=n[i++],s=n[i]?(n[0]|=a?1:2,t[n[i++]]):n[++i];3===a?r[0]=s:4===a?r[1]=Object.assign(r[1]||{},s):5===a?(r[1]=r[1]||{})[n[++i]]=s:6===a?r[1][n[++i]]+=s+"":a?(o=e.apply(s,G(e,s,t,["",null])),r.push(o),s[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(s)}return r},F=new Map;var B,W,O,V,j=function(e){var n=F.get(this);return n||(n=new Map,F.set(this,n)),(n=G(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",a=[0],s=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,o):3===r&&(e||o)?(a.push(3,e,o),r=2):2===r&&"..."===o&&e?a.push(4,e,0):2===r&&o&&!e?a.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(a.push(r,0,o,t),r=6),e&&(a.push(r,e,0,t),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&s(),s(u));for(var c=0;c<e[u].length;c++)n=e[u][c],1===r?"<"===n?(s(),a=[a],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(s(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[u][c+1])?(s(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(s(),r=2):o+=n),3===r&&"!--"===o&&(r=4,a=a[0])}return s(),a}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g),$=0,q=[],z=[],K=r,J=K.__b,Y=K.__r,Q=K.diffed,X=K.__c,Z=K.unmount,ee=K.__;function ne(e,n){K.__h&&K.__h(W,e,$||n),$=0;var t=W.__H||(W.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:z}),t.__[e]}function te(e){return $=1,function(e,n,t){var r=ne(B++,2);if(r.t=e,!r.__c&&(r.__=[_e(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=W,!W.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var a=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(a=!0)}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};W.u=!0;var i=W.shouldComponentUpdate,a=W.componentWillUpdate;W.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}a&&a.call(this,e,n,t)},W.shouldComponentUpdate=o}return r.__N||r.__}(_e,e)}function re(e,n){var t=ne(B++,7);return le(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function oe(e,n){return $=8,re((function(){return e}),n)}function ie(){for(var e;e=q.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ue),e.__H.__h.forEach(ce),e.__H.__h=[]}catch(n){e.__H.__h=[],K.__e(n,e.__v)}}K.__b=function(e){W=null,J&&J(e)},K.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),ee&&ee(e,n)},K.__r=function(e){Y&&Y(e),B=0;var n=(W=e.__c).__H;n&&(O===W?(n.__h=[],W.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=z,e.__N=e.i=void 0}))):(n.__h.forEach(ue),n.__h.forEach(ce),n.__h=[],B=0)),O=W},K.diffed=function(e){Q&&Q(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==q.push(n)&&V===K.requestAnimationFrame||((V=K.requestAnimationFrame)||se)(ie)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==z&&(e.__=e.__V),e.i=void 0,e.__V=z}))),O=W=null},K.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ue),e.__h=e.__h.filter((function(e){return!e.__||ce(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],K.__e(t,e.__v)}})),X&&X(e,n)},K.unmount=function(e){Z&&Z(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{ue(e)}catch(e){n=e}})),t.__H=void 0,n&&K.__e(n,t.__v))};var ae="function"==typeof requestAnimationFrame;function se(e){var n,t=function(){clearTimeout(r),ae&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ae&&(n=requestAnimationFrame(t))}function ue(e){var n=W,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),W=n}function ce(e){var n=W;e.__c=e.__(),W=n}function le(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function _e(e,n){return"function"==typeof n?n(e):n}function de(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=pe(r,t)),r):(n&&(r=pe(r,n)),r)}}function pe(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}const fe=[[1,1],[3,2],[4,1],[4,3],[5,3],[5,4],[16,9],[16,10],[21,9],[32,9],[12,5],[43,18],[64,27],[16,5],[18,5],[32,9]].map((e=>{const[n,t]=e;return{x:n,y:t,value:`${n}:${t}`,ratio:n/t}})),he=fe.map((e=>e.ratio)).sort(),ve=fe.reduce(((e,n)=>(e[n.ratio]=n,e)),{}),me=.06;function ge(e,n,t={tolerance:me}){const r=Math.max(e,n)/Math.min(e,n),o=ve[r];if(o)return{x:o.x,y:o.y,value:o.value,approximately:!1,nonStandard:!1};const i=function(e,n,t){for(let r=0;r<e.length;r++){if(Math.abs(e[r]-n)<t)return e[r]}return}(he,r,t.tolerance);if(i){const e=ve[i];return{x:e.x,y:e.y,value:`≈${e.value}`,approximately:!0,nonStandard:!1}}const a=function(e=0,n=0){for(;n;)[e,n]=[n,e%n];return e}(e,n);let s=e/a,u=n/a;return 1===a&&(s=Math.round(100*r)/100,u=1),{x:s,y:u,value:`${s}:${u}`,approximately:!1,nonStandard:!0}}var ye,we=de("row");function Se(e){return j(ye||(ye=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),we(),we("category"),e.name,we("body"),e.children)}var be,Pe,Ce,ke=de("list");function He(e){var t=e.items.filter((function(e){if(1===e.length)return!0;e[0];var n=e[1];return void 0!==n&&""!==n})).map((function(e){var n=e[0],t=e[1];return 1===e.length?[n]:[n,"boolean"==typeof t?String(t):t]}));return t.length?j(Ce||(Ce=n(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),Se,e.title,ke(),t.map((function(e){var t=e[0],r=e[1];return 1===e.length?j(be||(be=n(["<li>","</li>"],["<li>","</li>"])),t):j(Pe||(Pe=n(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}var Ie,De,xe={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"}};function Ae(e){var n=xe[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[Ie];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(Ie,'" in getText().')),e):t}function Re(e){return e[Ie]}function Me(e){return e?"✓":Ae("No")}function Ne(e){return j(De||(De=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var Te,Ee=de("hdr-label");function Ue(e){return j(Te||(Te=n(['<span class="','">HDR</span>'],['<span class="','">HDR</span>'])),Ee({enabled:e.enabled}))}var Le,Ge=de("color-space-item");function Fe(e){var t=e.name,r=e.supported,o=e.type;return j(Le||(Le=n(['<span class="','"><span class="','">','</span> <span class="','">',"</span></span>"],['<span class="','"><span class="','">','</span> <span class="','">',"</span></span>"])),Ge({type:o,supported:r}),Ge("checked"),r?"✓":"✗",Ge("color"),t)}function Be(){return window.devicePixelRatio||1}function We(e=window){var n,t,r;if(e.Hisense_GetSupportForHDR)return"not support"!==e.Hisense_GetSupportForHDR();const o=e.cast;if(o)return Boolean(null===(r=null===(t=null===(n=o.framework)||void 0===n?void 0:n.system)||void 0===t?void 0:t.DeviceCapabilities)||void 0===r?void 0:r.IS_HDR_SUPPORTED);try{const n=Oe("high",e),t=Oe("standard",e);if(!t)return;return Boolean(t&&n)}catch(e){}}function Oe(e,n=window){return n.matchMedia&&n.matchMedia(`(dynamic-range: ${e})`).matches}function Ve(e,n=window){return n.matchMedia&&n.matchMedia(`(color-gamut: ${e})`).matches}var je,$e,qe=["srgb","p3","rec2020"],ze=de("color-space-list");function Ke(e){if(!e.items)return"";var t=qe.map((function(n){return{supported:e.items.indexOf(n)>-1,name:(t=n,{srgb:"sRGB",p3:"DCI-P3",rec2020:"Rec.2020"}[t]||t),type:n};var t}));return j($e||($e=n(['\n        <span class="','">\n            ',"\n        </span>"],['\n        <span class="','">\n            ',"\n        </span>"])),ze(),t.map((function(e){return j(je||(je=n(["<"," ..."," //>"],["<"," ..."," //>"])),Fe,e)})))}var Je,Ye,Qe,Xe,Ze,en=de("screen-item");function nn(e){var t,r=e.width,o=e.height,i=e.devicePixelRatio,a=e.colorDepth,s=e.colorSpaces,u=e.isHdr,c=e.isInternal,l=e.isPrimary,_=e.label,d=e.maxTouchPoints,p=[r,o,i],f=[e.width*e.devicePixelRatio,e.height*e.devicePixelRatio],h=[[Ae("Size"),"".concat(f.join("×")," (").concat(p.join("×"),")")],[Ae("Aspect ratio"),ge(Math.max(r,o),Math.min(r,o)).value],e.orientation?[Ae("Orientation"),null===(t=e.orientation)||void 0===t?void 0:t.type]:"",[Ae("Color depth"),"".concat(a," ").concat(Ae("bit"))],[j(Je||(Je=n(["<",' enabled="','" //>'],["<",' enabled="','" //>'])),Ue,u),Me(Boolean(u))],[Ae("Color spaces"),j(Ye||(Ye=n(["<",' items="','" //>'],["<",' items="','" //>'])),Ke,s)],void 0===l?"":[Ae("Primary"),Me(Boolean(l))],void 0===c?"":[Ae("Internal"),Me(Boolean(c))],void 0===d?"":[Ae("Max touch points"),d]].filter(Boolean);return j(Ze||(Ze=n(['\n        <div class="','">\n            ',"\n            <",' items="','"><//>\n\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n            <",' items="','"><//>\n\n            ',"\n        </div>\n    "])),en(),_?j(Qe||(Qe=n(['<div class="','">',"</div>"],['<div class="','">',"</div>"])),en("label"),_):"",He,h,!0===e.isExtended?j(Xe||(Xe=n(["<",">","<//>"],["<",">","<//>"])),Ne,Ae("Additional monitor detected")):"")}var tn,rn=de("button");function on(e){var t=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}(e.class,rn({theme:e.theme,size:e.size}));return j(tn||(tn=n(['<button class="','" onClick="','">',"</button>"],['<button class="','" onClick="','">',"</button>"])),t,e.onClick,e.children)}var an,sn=de("header");function un(e){return j(an||(an=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),sn(),e.children)}var cn=function(){var e=te({})[1];return oe((function(){return e({})}),[])};function ln(){}var _n=function(){function e(){var e=this;this.listeners=[],this.devicePixelRatio=Be(),this.screens=[],this.timer=-1,this.isScreenDetails=!1,this.needUserActivity=!1,this.isDenied=!1,this.handleScreenChange=function(){e.emit()};var n=JSON.stringify(this.getScreen());this.timer=window.setInterval((function(){var t=Be();if(e.devicePixelRatio!==t&&(e.devicePixelRatio=t,e.handleScreenChange()),!window.screen.addEventListener){var r=JSON.stringify(e.getScreen());n!==r&&(n=r,e.handleScreenChange())}}),500),this.bindScreenChange(),this.getScreenDetails().catch(ln)}return e.prototype.addListener=function(e){this.listeners.push(e)},e.prototype.removeListener=function(e){this.listeners=this.listeners.filter((function(n){return n!==e}))},e.prototype.getScreenDetails=function(){var e=this;return window.getScreenDetails?window.getScreenDetails().then((function(n){return window.clearInterval(e.timer),e.isScreenDetails=!0,e.needUserActivity=!1,e.screens=n.screens,e.unbindScreenChange(),e.bindScreensChange(n.screens),n.onscreenschange=function(){e.bindScreensChange(n.screens),e.screens=n.screens,e.emit()},n})).catch((function(n){throw e.needUserActivity=!0,e.emit(),navigator.permissions.query({name:"window-management"}).then((function(n){"denied"===n.state?(e.isDenied=!0,e.needUserActivity=!1):(e.isDenied=!1,e.needUserActivity=!0),e.emit()})),n})):Promise.resolve()},e.prototype.bindScreensChange=function(e){var n=this;e.forEach((function(e){e.removeEventListener&&e.removeEventListener("change",n.handleScreenChange),e.addEventListener&&e.addEventListener("change",n.handleScreenChange)}))},e.prototype.bindScreenChange=function(){this.unbindScreenChange(),screen.addEventListener&&screen.addEventListener("change",this.handleScreenChange)},e.prototype.unbindScreenChange=function(){screen.removeEventListener&&screen.removeEventListener("change",this.handleScreenChange)},e.prototype.getAdditionalPropsForScreen=function(e){var n={isHdr:!1,colorSpaces:[]};try{var t=window.open("about:blank","caniwatchvideo","popup=yes,left=".concat(e.availLeft,",top=").concat(e.availTop,",width=100,height=100"));t&&(n.isHdrSupported=We(t),n.colorSpaces=this.getColorSpaces(t),t.close())}catch(e){console.error(e)}return n},e.prototype.getColorSpaces=function(e){void 0===e&&(e=window);var n=[];return function(e=window){return Ve("srgb",e)}(e)&&n.push("srgb"),function(e=window){return Ve("p3",e)}(e)&&n.push("p3"),function(e=window){return Ve("rec2020",e)}(e)&&n.push("rec2020"),n},e.prototype.getAdditionalProps=function(){return{isHdr:We(),colorSpaces:this.getColorSpaces()}},e.prototype.get=function(){var e=this;return{screens:this.isScreenDetails?this.screens.map((function(n){var t=n.isPrimary?e.getAdditionalProps():e.getAdditionalPropsForScreen(n);return{availLeft:n.availLeft,availTop:n.availTop,availWidth:n.availWidth,availHeight:n.availHeight,colorDepth:n.colorDepth,pixelDepth:n.pixelDepth,width:n.width,height:n.height,label:n.label,isInternal:n.isInternal,isPrimary:n.isPrimary,isHdr:t.isHdr,colorSpaces:t.colorSpaces,isExtended:n.isExtended,orientation:n.orientation,devicePixelRatio:n.devicePixelRatio}})):[this.getScreen()]}},e.prototype.emit=function(){console.log("ScreenInfo: emit"),this.listeners.forEach((function(e){return e()}))},e.prototype.getScreen=function(){var e=window.screen,n=this.getAdditionalProps();return{availLeft:e.availLeft,availTop:e.availTop,availWidth:e.availWidth,availHeight:e.availHeight,colorDepth:e.colorDepth,pixelDepth:e.pixelDepth,width:e.width,height:e.height,label:"",isInternal:void 0,isPrimary:void 0,isExtended:Boolean(e.isExtended),orientation:e.orientation,devicePixelRatio:Be(),isHdr:n.isHdr,colorSpaces:n.colorSpaces}},e}(),dn=new _n;var pn,fn,hn,vn=de("screen-list");function mn(){var e=cn(),t=oe((function(){e()}),[]),r=oe((function(){dn.getScreenDetails().then(t).catch(t)}),[]);!function(e,n){var t=ne(B++,3);!K.__s&&le(t.__H,n)&&(t.__=e,t.i=n,W.__H.__h.push(t))}((function(){return dn.addListener(t),!dn.isDenied&&dn.getScreenDetails().then(t).catch(t),function(){dn.removeListener(t)}}),[]);var o=[[Ae("Has touch screen"),Me(Boolean("ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0||navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>0))],[Ae("Max touch points"),navigator.maxTouchPoints||navigator.msMaxTouchPoints||0]],i=dn.get();return j(hn||(hn=n(['<div class="','">\n        <',">\n            ","\n        <//>\n\n        ","\n\n        ","\n\n        <",' title="','" items="','" //>\n    </div>'],['<div class="','">\n        <',">\n            ","\n        <//>\n\n        ","\n\n        ","\n\n        <",' title="','" items="','" //>\n    </div>'])),vn(),un,1===i.screens.length?Ae("Screen"):Ae("Screens"),!dn.isDenied&&dn.needUserActivity?j(pn||(pn=n(['<div class="','"><',' theme="red" size="s" onClick="','">',"</button></div>"],['<div class="','"><',' theme="red" size="s" onClick="','">',"</button></div>"])),vn("specify"),on,r,Ae("Specify")):"",i.screens.map((function(e){return j(fn||(fn=n(["<"," ...","><//>"],["<"," ...","><//>"])),nn,e)})),He,Ae("Additionally"),o)}var gn="undefined"!=typeof document,yn="undefined"!=typeof window,wn="undefined"!=typeof navigator,Sn="undefined"!=typeof screen;var bn=1;function Pn(e,n){return(e||"").slice(0,n)}function Cn(){return Math.floor(Math.random()*(1<<30))}var kn=512;function Hn(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function In(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return Hn(t,n,e[n])})),Hn(t,"rn",Cn()),Hn(t,"c",!!wn&&navigator.cookieEnabled),Hn(t,"s",Sn?[screen.width,screen.height,screen.colorDepth].join("x"):""),Hn(t,"sk",yn&&window.devicePixelRatio||bn),Hn(t,"w",yn?[window.innerWidth,window.innerHeight].join("x"):""),Hn(t,"en",gn&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Hn(t,"et",r),Hn(t,"st",r),Hn(t,"t",Pn(n,kn)),t.join(":")}var Dn,xn,An=1024;function Rn(e){return Pn(e,An)}function Mn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":In(n,r.title),rn:Cn(),ut:r.ut};r.url&&(o["page-url"]=Rn(r.url)),r.referrer&&(o["page-ref"]=Rn(r.referrer)),Mn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:gn?document.referrer:"",title:gn?document.title:"",url:yn&&window.location?window.location.href:""},params:Dn}),function(e){Ie=e}((xn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==xn&&"ru"!==xn&&(xn="en"),xn)),window.addEventListener("beforeinstallprompt",(function(e){}));var Nn,Tn=de("footer");function En(){return j(Nn||(Nn=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),Tn(),Tn("item"),Tn("l1"),Tn("l2"),Tn("l3"),Tn("l4"),Tn("l5"),Tn("l6"),Tn("item",{g:!0}),Tn("G"),Tn("i"),Tn("t"),Tn("H"),Tn("u"),Tn("b"))}var Un,Ln,Gn=de("main-menu");function Fn(e){return j(Ln||(Ln=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Gn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return j(Un||(Un=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Gn("item",{selected:e.selected}),e.url,e.title)})))}var Bn,Wn,On,Vn,jn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0}];function $n(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=jn.map((function(n){var r=n.id===t;return r&&(document.title=Re(n.header||n.menuTitle)),e(e({},n),{title:Re(n.menuTitle),selected:r})}));return j(Bn||(Bn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),Fn,r)}function qn(e){return j(Wn||(Wn=n(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),$n,e.children,En)}!function(e,n,o){var i,a,s,u;r.__&&r.__(e,n),a=(i="function"==typeof o)?null:n.__k,s=[],u=[],N(n,e=(!i&&o||n).__k=g(w,null,[e]),a||d,d,n.namespaceURI,!i&&o?[o]:a?null:n.firstChild?t.call(n.childNodes):null,s,!i&&o?o:a?a.__e:n.firstChild,i,u),T(s,e,u)}(j(Vn||(Vn=n(["<"," //>"],["<"," //>"])),(function(){return j(On||(On=n(["\n        <",">\n            <","><//>\n        <//>"],["\n        <",">\n            <","><//>\n        <//>"])),qn,mn)})),document.querySelector(".page"))}));
