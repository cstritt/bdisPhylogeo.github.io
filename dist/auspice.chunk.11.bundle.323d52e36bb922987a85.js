(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0b+E":function(e,t,n){"use strict";n.r(t),n.d(t,"initialize",(function(){return re})),n.d(t,"ga",(function(){return oe})),n.d(t,"set",(function(){return ie})),n.d(t,"send",(function(){return ae})),n.d(t,"pageview",(function(){return ce})),n.d(t,"modalview",(function(){return ue})),n.d(t,"timing",(function(){return le})),n.d(t,"event",(function(){return fe})),n.d(t,"exception",(function(){return se})),n.d(t,"plugin",(function(){return pe})),n.d(t,"outboundLink",(function(){return ge})),n.d(t,"testModeAPI",(function(){return be})),n.d(t,"OutboundLink",(function(){return ye}));var r={};n.r(r),n.d(r,"initialize",(function(){return F})),n.d(r,"ga",(function(){return K})),n.d(r,"set",(function(){return V})),n.d(r,"send",(function(){return B})),n.d(r,"pageview",(function(){return Z})),n.d(r,"modalview",(function(){return $})),n.d(r,"timing",(function(){return U})),n.d(r,"event",(function(){return H})),n.d(r,"exception",(function(){return Q})),n.d(r,"plugin",(function(){return W})),n.d(r,"outboundLink",(function(){return X})),n.d(r,"testModeAPI",(function(){return Y})),n.d(r,"default",(function(){return ee}));var o=n("q1tI"),i=n.n(o),a=n("17x9"),c=n.n(a);function u(e){console.warn("[react-ga]",e)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return(f="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?m(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(){var e,n;g(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return h(m(n=y(this,(e=d(t)).call.apply(e,[this].concat(o)))),"handleClick",(function(e){var r=n.props,o=r.target,i=r.eventLabel,a=r.to,c=r.onClick,u=r.trackerNames,l={label:i},f="_blank"!==o,s=!(e.ctrlKey||e.shiftKey||e.metaKey||1===e.button);f&&s?(e.preventDefault(),t.trackLink(l,(function(){window.location.href=a}),u)):t.trackLink(l,(function(){}),u),c&&c(e)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p(e,["to"]),{href:t,onClick:this.handleClick});return"_blank"===this.props.target&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,i.a.createElement("a",n)}}])&&b(n.prototype,r),o&&b(n,o),t}(o.Component);function w(e){return e.replace(/^\s+|\s+$/g,"")}h(O,"trackLink",(function(){u("ga tracking not enabled")})),h(O,"propTypes",{eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)}),h(O,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var j=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function k(e,t){return function(e){return"string"==typeof e&&-1!==e.indexOf("@")}(e)?(u("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):t?w(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(j)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}function S(e){console.info("[react-ga]",e)}var P=[],A={calls:P,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];P.push([].concat(t))},resetCalls:function(){P.length=0}};function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){return(N="function"==typeof Symbol&&"symbol"===E(Symbol.iterator)?function(e){return E(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":E(e)})(e)}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C="undefined"==typeof window||"undefined"==typeof document,L=!1,I=!0,_=!1,J=!0,z=function(){var e;return _?A.ga.apply(A,arguments):!C&&(window.ga?(e=window).ga.apply(e,arguments):u("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function G(e){return k(e,I)}function M(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"==typeof o?(!J&&Array.isArray(e)||z.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){z.apply(void 0,T(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):u("ga command must be a string")}function R(e,t){e?t&&(t.debug&&!0===t.debug&&(L=!0),!1===t.titleCase&&(I=!1),t.useExistingGa)||(t&&t.gaOptions?z("create",e,t.gaOptions):z("create",e,"auto")):u("gaTrackingID is required in initialize()")}function F(e,t){if(t&&!0===t.testMode)_=!0;else{if(C)return!1;t&&!0===t.standardImplementation||function(e){var t,n,r,o,i,a,c,u="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?u=e.gaAddress:e&&e.debug&&(u="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=u,i="ga",t.GoogleAnalyticsObject=i,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,a=n.createElement(r),c=n.getElementsByTagName(r)[0],a.async=1,a.src=o,c.parentNode.insertBefore(a,c)}(t)}return J=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===N(e)?R(e.trackingId,e):u("All configs must be an object")})):R(e,t),!0}function K(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(z.apply(void 0,t),L&&(S("called ga('arguments');"),S("with arguments: ".concat(JSON.stringify(t))))),window.ga}function V(e,t){e?"object"===N(e)?(0===Object.keys(e).length&&u("empty `fieldsObject` given to .set()"),M(t,"set",e),L&&(S("called ga('set', fieldsObject);"),S("with fieldsObject: ".concat(JSON.stringify(e))))):u("Expected `fieldsObject` arg to be an Object"):u("`fieldsObject` is required in .set()")}function B(e,t){M(t,"send",e),L&&(S("called ga('send', fieldObject);"),S("with fieldObject: ".concat(JSON.stringify(e))),S("with trackers: ".concat(JSON.stringify(t))))}function Z(e,t,n){if(e){var r=w(e);if(""!==r){var o={};if(n&&(o.title=n),M(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),L){S("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),S("with path: ".concat(r).concat(i))}}else u("path cannot be an empty string in .pageview()")}else u("path is required in .pageview()")}function $(e,t){if(e){var n,r="/"===(n=w(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);M(t,"send","pageview",o),L&&(S("called ga('send', 'pageview', path);"),S("with path: ".concat(o)))}else u("modalName cannot be an empty string or a single / in .modalview()")}else u("modalName is required in .modalview(modalName)")}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"==typeof r){var a={hitType:"timing",timingCategory:G(t),timingVar:G(n),timingValue:r};o&&(a.timingLabel=G(o)),B(a,i)}else u("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=x(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var f={hitType:"event",eventCategory:G(t),eventAction:G(n)};r&&(f.eventLabel=G(r)),void 0!==o&&("number"!=typeof o?u("Expected `args.value` arg to be a Number."):f.eventValue=o),void 0!==i&&("boolean"!=typeof i?u("`args.nonInteraction` must be a boolean."):f.nonInteraction=i),void 0!==a&&("string"!=typeof a?u("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&u("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=a)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){f[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){f[e]=c[e]})),B(f,l)}else u("args.category AND args.action are required in event()")}function Q(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=G(n)),void 0!==r&&("boolean"!=typeof r?u("`args.fatal` must be a boolean."):o.exFatal=r),B(o,t)}var W={require:function(e,t,n){if(e){var r=w(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==N(t))return void u("Expected `options` arg to be an Object");0===Object.keys(t).length&&u("Empty `options` given to .require()"),K(o,r,t),L&&S("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else K(o,r),L&&S("called ga('require', '".concat(r,"');"))}else u("`name` cannot be an empty string in .require()")}else u("`name` is required in .require()")},execute:function(e,t){var n,r;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)u("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)u("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(K(o,r,n),L&&(S("called ga('".concat(o,"');")),S('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(K(o,n),L&&(S("called ga('".concat(o,"');")),S("with payload: ".concat(JSON.stringify(n))))):(K(o),L&&S("called ga('".concat(o,"');")))}}};function X(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:G(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},B(r,n)}else u("args.label is required in outboundLink()");else u("hitCallback function is required")}var Y=A,ee={initialize:F,ga:K,set:V,send:B,pageview:Z,modalview:$,timing:U,event:H,exception:Q,plugin:W,outboundLink:X,testModeAPI:A};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=F,oe=K,ie=V,ae=B,ce=Z,ue=$,le=U,fe=H,se=Q,pe=W,ge=X,be=Y;O.origTrackLink=O.trackLink,O.trackLink=X;var ye=O;t.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:ye})}}]);