_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"7Cbv":function(e,t,r){"use strict";var n,o=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&i.test(e)},s=[],u=0;u<256;++u)s.push((u+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!c(r))throw TypeError("Stringified UUID is invalid");return r};t.a=function(e,t,r){var n=(e=e||{}).random||(e.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return l(n)}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return o}))},QCli:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return r("fdRS")}])},cDf5:function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},eWwy:function(e,t,r){!function(e,t){"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return c(e)||s(e,t)||u(e,t)||f()}function c(e){if(Array.isArray(e))return e}function s(e,t){var r=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}function u(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function m(){}function h(){}h.resetWarningCache=m;var y=function(){function e(e,t,r,n,o,a){if(a!==d){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:h,resetWarningCache:m};return r.PropTypes=r,r},b=p((function(e){e.exports=y()})),v=function(e){var r=t.useRef(e);return t.useEffect((function(){r.current=e}),[e]),r.current},g=function(e){return null!==e&&"object"===o(e)},j=function(e){return g(e)&&"function"===typeof e.then},x=function(e){return g(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},w="[object Object]",O=function e(t,r){if(!g(t)||!g(r))return t===r;var n=Array.isArray(t);if(n!==Array.isArray(r))return!1;var o=Object.prototype.toString.call(t)===w;if(o!==(Object.prototype.toString.call(r)===w))return!1;if(!o&&!n)return t===r;var a=Object.keys(t),i=Object.keys(r);if(a.length!==i.length)return!1;for(var c={},s=0;s<a.length;s+=1)c[a[s]]=!0;for(var u=0;u<i.length;u+=1)c[i[u]]=!0;var l=Object.keys(c);if(l.length!==a.length)return!1;var f=t,p=r,d=function(t){return e(f[t],p[t])};return l.every(d)},E=function(e,t,r){return g(e)?Object.keys(e).reduce((function(o,i){var c=!g(t)||!O(e[i],t[i]);return r.includes(i)?(c&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):c?n(n({},o||{}),{},a({},i,e[i])):o}),null):null},C="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",S=function(e){if(null===e||x(e))return e;throw new Error(C)},_=function(e){if(j(e))return{tag:"async",stripePromise:Promise.resolve(e).then(S)};var t=S(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},N=t.createContext(null);N.displayName="ElementsContext";var k=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},P=t.createContext(null);P.displayName="CartElementContext";var L=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},A=function(e){var r=e.stripe,n=e.options,o=e.children,a=t.useMemo((function(){return _(r)}),[r]),c=i(t.useState(null),2),s=c[0],u=c[1],l=i(t.useState(null),2),f=l[0],p=l[1],d=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(n):null}})),2),m=d[0],h=d[1];t.useEffect((function(){var e=!0,t=function(e){h((function(t){return t.stripe?t:{stripe:e,elements:e.elements(n)}}))};return"async"!==a.tag||m.stripe?"sync"!==a.tag||m.stripe||t(a.stripe):a.stripePromise.then((function(r){r&&e&&t(r)})),function(){e=!1}}),[a,m,n]);var y=v(r);t.useEffect((function(){null!==y&&y!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,r]);var b=v(n);return t.useEffect((function(){if(m.elements){var e=E(n,b,["clientSecret","fonts"]);e&&m.elements.update(e)}}),[n,b,m.elements]),t.useEffect((function(){var e=m.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.4"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.4",url:"https://stripe.com/docs/stripe-js/react"}))}),[m.stripe]),t.createElement(N.Provider,{value:m},t.createElement(P.Provider,{value:{cart:s,setCart:u,cartState:f,setCartState:p}},o))};A.propTypes={stripe:b.any,options:b.object};var T=function(e){var r=t.useContext(N);return k(r,e)},R=function(e){var r=t.useContext(P);return L(r,e)},I=function(){return T("calls useElements()").elements},B=function(){return T("calls useStripe()").stripe},F=function(){return R("calls useCartElement()").cart},M=function(){return R("calls useCartElementState()").cartState},D=function(e){return(0,e.children)(T("mounts <ElementsConsumer>"))};D.propTypes={children:b.func.isRequired};var q=function(e,r,n){var o=!!n,a=t.useRef(n);t.useEffect((function(){a.current=n}),[n]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(r,t),function(){e.off(r,t)}}),[o,r,e,a])},U=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},W=function(e,r){var n="".concat(U(e),"Element"),o=r?function(e){T("mounts <".concat(n,">")),R("mounts <".concat(n,">"));var r=e.id,o=e.className;return t.createElement("div",{id:r,className:o})}:function(r){var o,a=r.id,c=r.className,s=r.options,u=void 0===s?{}:s,l=r.onBlur,f=r.onFocus,p=r.onReady,d=r.onChange,m=r.onEscape,h=r.onClick,y=r.onLoadError,b=r.onLoaderStart,g=r.onNetworksChange,j=r.onCheckout,x=r.onLineItemClick,w=r.onConfirm,O=r.onCancel,C=r.onShippingAddressChange,S=r.onShippingRateChange,_=T("mounts <".concat(n,">")).elements,N=i(t.useState(null),2),k=N[0],P=N[1],L=t.useRef(null),A=t.useRef(null),I=R("mounts <".concat(n,">")),B=I.setCart,F=I.setCartState;q(k,"blur",l),q(k,"focus",f),q(k,"escape",m),q(k,"click",h),q(k,"loaderror",y),q(k,"loaderstart",b),q(k,"networkschange",g),q(k,"lineitemclick",x),q(k,"confirm",w),q(k,"cancel",O),q(k,"shippingaddresschange",C),q(k,"shippingratechange",S),"cart"===e?o=function(e){F(e),p&&p(e)}:p&&(o="payButton"===e?p:function(){p(k)}),q(k,"ready",o),q(k,"change","cart"===e?function(e){F(e),d&&d(e)}:d),q(k,"checkout","cart"===e?function(e){F(e),j&&j(e)}:j),t.useLayoutEffect((function(){if(null===L.current&&_&&null!==A.current){var t=_.create(e,u);"cart"===e&&B&&B(t),L.current=t,P(t),t.mount(A.current)}}),[_,u,B]);var M=v(u);return t.useEffect((function(){if(L.current){var e=E(u,M,["paymentRequest"]);e&&L.current.update(e)}}),[u,M]),t.useLayoutEffect((function(){return function(){L.current&&(L.current.destroy(),L.current=null)}}),[]),t.createElement("div",{id:a,className:c,ref:A})};return o.propTypes={id:b.string,className:b.string,onChange:b.func,onBlur:b.func,onFocus:b.func,onReady:b.func,onEscape:b.func,onClick:b.func,onLoadError:b.func,onLoaderStart:b.func,onNetworksChange:b.func,onCheckout:b.func,onLineItemClick:b.func,onConfirm:b.func,onCancel:b.func,onShippingAddressChange:b.func,onShippingRateChange:b.func,options:b.object},o.displayName=n,o.__elementType=e,o},G="undefined"===typeof window,Y=W("auBankAccount",G),V=W("card",G),H=W("cardNumber",G),$=W("cardExpiry",G),J=W("cardCvc",G),Q=W("fpxBank",G),X=W("iban",G),K=W("idealBank",G),z=W("p24Bank",G),Z=W("epsBank",G),ee=W("payment",G),te=W("payButton",G),re=W("paymentRequestButton",G),ne=W("linkAuthentication",G),oe=W("address",G),ae=W("shippingAddress",G),ie=W("cart",G),ce=W("paymentMethodMessaging",G),se=W("affirmMessage",G),ue=W("afterpayClearpayMessage",G);e.AddressElement=oe,e.AffirmMessageElement=se,e.AfterpayClearpayMessageElement=ue,e.AuBankAccountElement=Y,e.CardCvcElement=J,e.CardElement=V,e.CardExpiryElement=$,e.CardNumberElement=H,e.CartElement=ie,e.Elements=A,e.ElementsConsumer=D,e.EpsBankElement=Z,e.FpxBankElement=Q,e.IbanElement=X,e.IdealBankElement=K,e.LinkAuthenticationElement=ne,e.P24BankElement=z,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=ce,e.PaymentRequestButtonElement=re,e.ShippingAddressElement=ae,e.useCartElement=F,e.useCartElementState=M,e.useElements=I,e.useStripe=B,Object.defineProperty(e,"__esModule",{value:!0})}(t,r("q1tI"))},fL5F:function(e,t,r){"use strict";t.a="R$"},fdRS:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),a=r("HaE+"),i=r("rePB"),c=r("nKUr"),s=r("q1tI"),u=r("g4pe"),l=r.n(u),f=r("VnCb"),p=r("fL5F"),d=r("ma3e"),m=r("YFqc"),h=r.n(m),y=r("xY5u"),b=r("7Cbv"),v=r("eWwy"),g="https://js.stripe.com/v3",j=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,x="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",w=null,O=function(e){return null!==w?w:w=new Promise((function(t,r){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(x),window.Stripe)t(window.Stripe);else try{var n=function(){for(var e=document.querySelectorAll('script[src^="'.concat(g,'"]')),t=0;t<e.length;t++){var r=e[t];if(j.test(r.src))return r}return null}();n&&e?console.warn(x):n||(n=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(g).concat(t);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(e)),n.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(o){return void r(o)}else t(null)}))},E=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.46.0",startTime:t})}(n,r),n},C=Promise.resolve().then((function(){return O(null)})),S=!1;C.catch((function(e){S||console.warn(e)}));function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];S=!0;var n=Date.now();return C.then((function(e){return E(e,t,n)}))}("xxx-xxx-xxx");var P=function(e){var t=e.onChange,r=e.value,n=e.name,o=e.placeholder;return Object(c.jsx)("input",{onChange:t,value:r,className:"mt-2 text-sm shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:o,name:n})},L=function(e){var t,r,n=e.context,u=Object(s.useState)(null),f=u[0],m=u[1],g=Object(s.useState)(!1),j=g[0],x=g[1],w=Object(s.useState)({name:"",email:"",street:"",city:"",postal_code:"",state:""}),O=w[0],E=w[1],C=Object(v.useStripe)(),S=Object(v.useElements)(),_=function(e){m(null),E(N(N({},O),{},Object(i.a)({},e.target.name,e.target.value)))},k=function(){var e=Object(a.a)(o.a.mark((function e(t){var r,a,i,c,s,u,l,f,p,d,h,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=O.name,a=O.email,i=O.street,c=O.city,s=O.postal_code,u=O.state,l=n.total,f=n.clearCart,C&&S){e.next=5;break}return e.abrupt("return");case 5:if(i&&c&&s&&u){e.next=8;break}return m("Please fill in the form!"),e.abrupt("return");case 8:return p=S.getElement(v.CardElement),e.next=11,C.createPaymentMethod({type:"card",card:p,billing_details:{name:r}});case 11:if(d=e.sent,h=d.error,y=d.paymentMethod,!h){e.next=17;break}return m(h.message),e.abrupt("return");case 17:({email:a,amount:l,address:u,payment_method_id:y.id,receipt_email:"customer@example.com",id:Object(b.a)()}),x(!0),f();case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=n.numberOfItemsInCart,A=n.cart,T=n.total,R=L===Number(0);return j?Object(c.jsx)("div",{children:Object(c.jsx)("h3",{children:"Thanks! Your order has been successfully processed."})}):Object(c.jsxs)("div",{className:"flex flex-col items-center pb-10",children:[Object(c.jsxs)(l.a,{children:[Object(c.jsx)("title",{children:"Fortunato Tape\xe7aria - Checkout"}),Object(c.jsx)("meta",{name:"description",content:"Check out"}),Object(c.jsx)("meta",{property:"og:title",content:"Fortunato Tape\xe7aria - Checkpit"},"title")]}),Object(c.jsxs)("div",{className:" flex flex-col w-full c_large:w-c_large ",children:[Object(c.jsxs)("div",{className:"pt-10 pb-8",children:[Object(c.jsx)("h1",{className:"text-5xl font-light mb-6",children:"Checkout"}),Object(c.jsx)(h.a,{href:"/cart",children:Object(c.jsx)("a",{"aria-label":"Cart",children:Object(c.jsxs)("div",{className:"cursor-pointer flex  items-center",children:[Object(c.jsx)(d.b,{className:"mr-2 text-red-600"}),Object(c.jsx)("p",{className:"text-red-600 text-sm",children:"Edit Cart"})]})})})]}),R?Object(c.jsx)("h3",{children:"No items in cart."}):Object(c.jsxs)("div",{className:"flex flex-col",children:[Object(c.jsx)("div",{className:"",children:A.map((function(e,t){return Object(c.jsx)("div",{className:"border-b py-10",children:Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)(y.a,{className:"w-32 m-0",src:e.image,alt:e.name}),Object(c.jsx)("p",{className:"m-0 pl-10 text-red-600",children:e.name}),Object(c.jsx)("div",{className:"flex flex-1 justify-end",children:Object(c.jsx)("p",{className:"m-0 pl-10 text-red-900 font-semibold",children:p.a+e.price})})]})},t)}))}),Object(c.jsxs)("div",{className:"flex flex-1 flex-col md:flex-row",children:[Object(c.jsx)("div",{className:"flex flex-1 pt-8 flex-col",children:Object(c.jsx)("div",{className:"mt-4 border-t pt-10",children:Object(c.jsxs)("form",{onSubmit:k,children:[f?Object(c.jsx)("span",{children:f}):"",Object(c.jsx)(P,{onChange:_,value:O.name,name:"name",placeholder:"Cardholder name"}),Object(c.jsx)(v.CardElement,{className:"mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline"}),Object(c.jsx)(P,{onChange:_,value:O.email,name:"email",placeholder:"Email"}),Object(c.jsx)(P,{onChange:_,value:O.street,name:"street",placeholder:"Street"}),Object(c.jsx)(P,{onChange:_,value:O.city,name:"city",placeholder:"City"}),Object(c.jsx)(P,{onChange:_,value:O.state,name:"state",placeholder:"State"}),Object(c.jsx)(P,{onChange:_,value:O.postal_code,name:"postal_code",placeholder:"Postal Code"}),Object(c.jsx)("button",(t={type:"submit",disabled:!C,onClick:k,className:"hidden md:block bg-primary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"},Object(i.a)(t,"type","button"),Object(i.a)(t,"children","Confirm order"),t))]})})}),Object(c.jsxs)("div",{className:"md:pt-20",children:[Object(c.jsxs)("div",{className:"pl-4 flex flex-1 pt-2 md:pt-8 mt-2 sm:mt-0",children:[Object(c.jsx)("p",{className:"text-sm pr-10 text-left",children:"Subtotal"}),Object(c.jsx)("p",{className:"w-38 flex text-right justify-end",children:p.a+T})]}),Object(c.jsxs)("div",{className:"pl-4 flex flex-1 my-2",children:[Object(c.jsx)("p",{className:"text-sm pr-10",children:"Shipping"}),Object(c.jsx)("p",{className:"w-38 flex justify-end",children:"FREE SHIPPING"})]}),Object(c.jsxs)("div",{className:"md:ml-4 pl-2 flex flex-1 bg-red-200 pr-4 pb-1 pt-2 mt-2",children:[Object(c.jsx)("p",{className:"text-sm pr-10",children:"Total"}),Object(c.jsx)("p",{className:"font-semibold w-38 flex justify-end",children:p.a+(T+0)})]}),Object(c.jsx)("button",(r={type:"submit",disabled:!C,onClick:k,className:"md:hidden bg-primary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"},Object(i.a)(r,"type","button"),Object(i.a)(r,"children","Confirm order"),r))]})]})]})]})]})};t.default=function(e){return Object(c.jsx)(f.a,{children:Object(c.jsx)(f.b.Consumer,{children:function(t){return Object(c.jsx)(v.Elements,{stripe:k,children:Object(c.jsx)(L,N(N({},e),{},{context:t}))})}})})}},fsL8:function(e,t,r){var n=r("cDf5").default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(L){f=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:E(e,r,c)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=p;var m={};function h(){}function y(){}function b(){}var v={};f(v,s,(function(){return this}));var g=Object.getPrototypeOf,j=g&&g(g(k([])));j&&j!==r&&a.call(j,s)&&(v=j);var x=b.prototype=h.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,c,s){var u=d(e[o],e,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function E(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function C(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=d(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function k(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=b,i(x,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:y,configurable:!0}),y.displayName=f(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},w(O.prototype),f(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(p(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(x),f(x,l,"Generator"),f(x,s,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},o0o1:function(e,t,r){var n=r("fsL8")();e.exports=n;try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},[["QCli",0,2,3,1,4,5]]]);