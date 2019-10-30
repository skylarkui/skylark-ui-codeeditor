/**
 * skylark-widgets-coder - The skylark codeeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-codeeditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-query","./coder"],function(n,r,t){var e={debounce:function(n,r,t){var e;return function(){var u=this,i=arguments,o=t&&!e;clearTimeout(e),e=setTimeout(function(){e=null,t||n.apply(u,i)},r),o&&n.apply(u,i)}},options:function(r){if("string"!=n.type(r))return r;-1!=r.indexOf(":")&&"}"!=r.trim().substr(-1)&&(r="{"+r+"}");var t=r?r.indexOf("{"):-1,u={};if(-1!=t)try{u=e.str2json(r.substr(t))}catch(n){}return u},str2json:function(n,r){try{return r?JSON.parse(n.replace(/([\$\w]+)\s*:/g,function(n,r){return'"'+r+'":'}).replace(/'([^']+)'/g,function(n,r){return'"'+r+'"'})):new Function("","var json = "+n+"; return JSON.parse(JSON.stringify(json));")()}catch(n){return!1}}};return t.helper=e});
//# sourceMappingURL=sourcemaps/helper.js.map