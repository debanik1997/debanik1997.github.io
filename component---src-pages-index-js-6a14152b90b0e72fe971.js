(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IbBL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=n("q1tI"),i=n("gDTn"),s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var r=!0;r;){var a=e,o=t,i=n;r=!1,null===a&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(i)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=o,n=i,r=!0,s=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);var n=this.props,r=n.items,a=n.random;this.state={index:a?Math.floor(Math.random()*Math.floor(r.length)):0,output:"",substrLength:0},this.timeouts=[]}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map((function(e){return clearTimeout(e)}))}},{key:"_loop",value:function(e,t){var n=setTimeout(e,t);this.timeouts.push(n);this.timeouts.length>100&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(e,t){var n=this.state.output,r=this.props.typingInterval,a=this._type.bind(this,e,t),o=i(e);this.setState({output:o.slice(0,i(n).length+1).join("")}),n.length<o.length?this._loop(a,r):("function"==typeof this.props.onTypingEnd&&this.props.onTypingEnd(),t())}},{key:"_erase",value:function(e){var t=this.state.output,n=this.props.deletingInterval,r=this._erase.bind(this,e),a=i(t);"function"==typeof this.props.onDeletingStart&&this.props.onDeletingStart(),this.setState({output:a.slice(0,a.length-1).join("")}),0!==a.length?this._loop(r,n):("function"==typeof this.props.onDeletingEnd&&this.props.onDeletingEnd(),e())}},{key:"_overwrite",value:function(e,t){var n=this.state,r=n.output,a=n.substrLength,o=this.props.deletingInterval,s=this._overwrite.bind(this,e,t),u=i(e),c=i(r);this.setState({output:u.slice(0,a).concat(c.slice(a)),substrLength:a+1}),u.length!==a?this._loop(s,o):(this.setState({output:e,substrLength:0}),t())}},{key:"_animate",value:function(){var e=this,t=this.state.index,n=this.props,r=n.items,a=n.pause,o=n.emptyPause,i=n.eraseMode,s=n.random,u=this._type,c=this._erase,l=this._overwrite,f=this._animate.bind(this),p=void 0;p=s?Math.floor(Math.random()*Math.floor(r.length)):t===r.length-1?0:t+1;var m=function(){e.setState({index:p}),e._loop(f,o)};"function"==typeof this.props.onTypingStart&&this.props.onTypingStart(),u.bind(this)(r[t],(function(){"overwrite"===i?e._loop(l.bind(e,r[p],m),a):e._loop(c.bind(e,m),a)}))}},{key:"render",value:function(){var e=this.props,t=e.color,n=e.cursor,a=(e.deletingInterval,e.emptyPause,e.items,e.pause,e.eraseMode,e.typingInterval,e.random,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]));return o.createElement("span",r({style:{color:t}},a),this.state.output,n?o.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),t}(o.Component);s.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},t.default=s,e.exports=t.default},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("q4sD"),n("VxdY"),n("u36K")),i=n.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var c=n("TSYQ"),l=n.n(c),f=n("17x9"),p=n.n(f),m=a.a.createContext({});m.Consumer,m.Provider;function d(e,t){var n=Object(r.useContext)(m);return e||n[t]||t}p.a.string,p.a.bool,p.a.bool,p.a.bool,p.a.bool;var g=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.fluid,i=e.rounded,c=e.roundedCircle,f=e.thumbnail,p=u(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=d(n,"img");var m=l()(o&&n+"-fluid",i&&"rounded",c&&"rounded-circle",f&&n+"-thumbnail");return a.a.createElement("img",s({ref:t},p,{className:l()(r,m)}))}));g.displayName="Image",g.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var h=g,y=["xl","lg","md","sm","xs"],v=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.noGutters,i=e.as,c=void 0===i?"div":i,f=u(e,["bsPrefix","className","noGutters","as"]),p=d(n,"row"),m=p+"-cols",g=[];return y.forEach((function(e){var t,n=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&g.push(""+m+r+"-"+t)})),a.a.createElement(c,s({ref:t},f,{className:l.a.apply(void 0,[r,p,o&&"no-gutters"].concat(g))}))}));v.displayName="Row",v.defaultProps={noGutters:!1};var b=v,M=["xl","lg","md","sm","xs"],w=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,i=void 0===o?"div":o,c=u(e,["bsPrefix","className","as"]),f=d(n,"col"),p=[],m=[];return M.forEach((function(e){var t,n,r,a=c[e];if(delete c[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+f+i:""+f+i+"-"+t),null!=r&&m.push("order"+i+"-"+r),null!=n&&m.push("offset"+i+"-"+n)})),p.length||p.push(f),a.a.createElement(i,s({},c,{ref:t,className:l.a.apply(void 0,[r].concat(p,m))}))}));w.displayName="Col";var j=w,A=n("Bl7J"),N=(n("smkH"),function(){var e;return a.a.createElement("div",null,a.a.createElement(b,null,a.a.createElement(j,{xs:3},a.a.createElement("h3",{className:"secondary emphasis",style:{marginTop:60}},"about")),a.a.createElement(j,null,a.a.createElement("h3",{className:"secondary",style:(e={fontWeight:"normal",marginTop:60,fontSize:24},e.fontWeight="bold",e)},"I like making"," ",a.a.createElement("span",{style:{backgroundColor:"#fe9260",color:"white",paddingRight:3,paddingLeft:3,paddingBottom:2}},"things")),a.a.createElement("h3",{className:"secondary emphasis",style:{marginTop:6,fontSize:18,fontWeight:"lighter",lineHeight:1.6}},"I'm intrigued by design, technology, photography, traveling, armchair philosophy, artisan coffee, fabulous foods, and even better conversations. A software engineer by trade, I've built iOS apps, a COVID-19 community web platform, localization tools at"," ",a.a.createElement("span",{style:{color:"#0085CA",fontSize:20}},a.a.createElement("strong",null,"Medtronic")),", and integrity infrastrucutre at"," ",a.a.createElement("span",{className:"instagram"},a.a.createElement("strong",null,"Instagram")),". Drop me a note if you'd like to connect!"))),a.a.createElement(b,null,a.a.createElement(j,{xs:3},a.a.createElement("h3",{className:"secondary emphasis",style:{marginTop:40}},"contact")),a.a.createElement(j,null,a.a.createElement("h3",{className:"secondary",style:{marginTop:40}},"debanik1997@gmail.com 📬"),a.a.createElement("h3",{className:"secondary"},"4846249881 📲"))),a.a.createElement(b,null,a.a.createElement(j,{xs:3},a.a.createElement("h3",{className:"secondary emphasis",style:{marginTop:40}},"resume")),a.a.createElement(j,null,a.a.createElement("h3",{className:"secondary",style:{marginTop:40}},a.a.createElement("a",{href:"https://drive.google.com/file/d/1wot3C2eAWQXjkwbh7tou0wx3oAcWqnst/view?usp=sharing",target:"_blank",rel:"noreferrer"},"dpurkayastha.pdf")))))}),E=n("IbBL");t.default=function(){return a.a.createElement(A.a,null,a.a.createElement(b,{className:"intro"},a.a.createElement(j,{sm:4,className:"avatar"},a.a.createElement(h,{style:{maxWidth:"100%",top:"25%",position:"absolute"},src:i.a})),a.a.createElement(j,{className:"content"},a.a.createElement("h1",{className:"title"},a.a.createElement("span",{className:"wave",role:"img","aria-label":"wave"},"👋"),a.a.createElement("span",{className:"line"},", Debanik here.")),a.a.createElement("h3",{className:"location"},"Baltimore, MD",a.a.createElement("img",{alt:"location",style:{height:20,width:20,marginLeft:3,marginTop:-1},src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZEMDAzQTsiIGQ9Ik0yNTYsMEMxNTYuNjk4LDAsNzYsODAuNyw3NiwxODBjMCwzMy42LDkuMzAyLDY2LjMwMSwyNy4wMDEsOTQuNTAxbDE0MC43OTcsMjMwLjQxNA0KCWMyLjQwMiwzLjksNi4wMDIsNi4zMDEsMTAuMjAzLDYuOTAxYzUuNjk4LDAuODk5LDEyLjAwMS0xLjUsMTUuMy03LjJsMTQxLjItMjMyLjUxNkM0MjcuMjk5LDI0NC41MDEsNDM2LDIxMi40MDEsNDM2LDE4MA0KCUM0MzYsODAuNywzNTUuMzAyLDAsMjU2LDB6IE0yNTYsMjcwYy01MC4zOTgsMC05MC00MC44LTkwLTkwYzAtNDkuNTAxLDQwLjQ5OS05MCw5MC05MHM5MCw0MC40OTksOTAsOTANCglDMzQ2LDIyOC45LDMwNi45OTksMjcwLDI1NiwyNzB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTUwMDI3OyIgZD0iTTI1NiwwdjkwYzQ5LjUwMSwwLDkwLDQwLjQ5OSw5MCw5MGMwLDQ4LjktMzkuMDAxLDkwLTkwLDkwdjI0MS45OTENCgljNS4xMTksMC4xMTksMTAuMzgzLTIuMzM1LDEzLjMtNy4zNzVMNDEwLjUsMjcyLjFjMTYuNzk5LTI3LjU5OSwyNS41LTU5LjY5OSwyNS41LTkyLjFDNDM2LDgwLjcsMzU1LjMwMiwwLDI1NiwweiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="})),a.a.createElement("h2",{className:"subtitle"},"I'm  ",a.a.createElement(E,{className:"typing",style:{marginLeft:-4},items:["a software engineer.","an entrepreneur.","a student.","a dream chaser."]})),a.a.createElement(N,null))),a.a.createElement(b,{id:"#projects"}),a.a.createElement(b,{id:"#food"}),a.a.createElement(b,{id:"#food"}))}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},gDTn:function(e,t,n){(function(t){var n="[object Map]",r="[object Set]",a=/^\[object .+?Constructor\]$/,o=/^(?:0|[1-9]\d*)$/,i="[\\ud800-\\udfff]",s="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",u="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="(?:"+s+"|"+u+")"+"?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+[c,l,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),d="(?:"+[c+s+"?",s,l,f,i].join("|")+")",g=RegExp(u+"(?="+u+")|"+d+m,"g"),h=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),y="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,b=y||v||Function("return this")();function M(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}(t,(function(t){return e[t]}))}function w(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function j(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function A(e){return function(e){return h.test(e)}(e)?function(e){return e.match(g)||[]}(e):function(e){return e.split("")}(e)}var N,E,D,I=Function.prototype,L=Object.prototype,P=b["__core-js_shared__"],x=(N=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",O=I.toString,T=L.hasOwnProperty,C=L.toString,k=RegExp("^"+O.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=b.Symbol,S=z?z.iterator:void 0,Q=L.propertyIsEnumerable,G=(E=Object.keys,D=Object,function(e){return E(D(e))}),B=q(b,"DataView"),Y=q(b,"Map"),U=q(b,"Promise"),_=q(b,"Set"),F=q(b,"WeakMap"),R=te(B),H=te(Y),Z=te(U),V=te(_),W=te(F);function K(e,t){var n=ne(e)||function(e){return function(e){return ie(e)&&re(e)}(e)&&T.call(e,"callee")&&(!Q.call(e,"callee")||"[object Arguments]"==C.call(e))}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,a=!!r;for(var o in e)!t&&!T.call(e,o)||a&&("length"==o||ee(o,r))||n.push(o);return n}function J(e){return!(!oe(e)||function(e){return!!x&&x in e}(e))&&(ae(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?k:a).test(te(e))}function X(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||L,t!==r)return G(e);var t,n,r,a=[];for(var o in Object(e))T.call(e,o)&&"constructor"!=o&&a.push(o);return a}function q(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return J(n)?n:void 0}var $=function(e){return C.call(e)};function ee(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}function te(e){if(null!=e){try{return O.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(B&&"[object DataView]"!=$(new B(new ArrayBuffer(1)))||Y&&$(new Y)!=n||U&&"[object Promise]"!=$(U.resolve())||_&&$(new _)!=r||F&&"[object WeakMap]"!=$(new F))&&($=function(e){var t=C.call(e),a="[object Object]"==t?e.constructor:void 0,o=a?te(a):void 0;if(o)switch(o){case R:return"[object DataView]";case H:return n;case Z:return"[object Promise]";case V:return r;case W:return"[object WeakMap]"}return t});var ne=Array.isArray;function re(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!ae(e)}function ae(e){var t=oe(e)?C.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function oe(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ie(e){return!!e&&"object"==typeof e}function se(e){return e?M(e,function(e){return re(e)?K(e):X(e)}(e)):[]}e.exports=function(e){if(!e)return[];if(re(e))return function(e){return"string"==typeof e||!ne(e)&&ie(e)&&"[object String]"==C.call(e)}(e)?A(e):function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(e);if(S&&e[S])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[S]());var t=$(e);return(t==n?w:t==r?j:se)(e)}}).call(this,n("yLpj"))},smkH:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFqSURBVEiJ7VM9S8NQFD3vJcEYacUvEMTBIgrVTVxcBHUQwa2rWFAUf4GIOPgXRCdROjs41F0cVcSp6FIofuFHsaWxkpomeQ6Fp7FW89FMerbDPe8e7rn3kfGFgx1G2CwAAfWFyYAEDag5AAgEiNOAmnMT0c9rRRYx2NuKkCKhbFgoagbS1wWorzrXeDaITUQQn+5HY4O9xfLGMc4usv4MJke6sRQbcKSlXgxmpvoca11P0NYso7Nd4Tyb17CyeYqr+xdYFvNvEG6SbPwk9YTMnVpT7zoiQoiN62XrR72nHbgBGVtMVgf3BcPRDqzODwEABEqgyB/Jlg0LJd3kfG79CM+FEueOdiAIFCFF+rYmiRSSWAnCMCzk1Ddbva4RPeY0MGYPxNEEalHH+WXld8qyiGhPC69l8xpuHooAgPRt9TU52sFnRLrC2F4b5Xz/MIOtvVRNfeBX9G/wRwzMX1XeYVIGJAIyMQG2+w4MP2k6Am4aDQAAAABJRU5ErkJggg=="},u36K:function(e,t,n){e.exports=n.p+"static/avatar_1-7cdef03cbcdb801d826992a6fa8e61ce.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-6a14152b90b0e72fe971.js.map