!function(e){var r={};function n(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)n.d(t,c,function(r){return e[r]}.bind(null,c));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";function t(){document.querySelector(".full-recipe-block").classList.add("hidden"),document.querySelector(".overlay").classList.remove("overlay-show")}var c,o,i,l,s;n.r(r),document.querySelector(".wraper-right").addEventListener("click",function(e){var r,n,t;r=e.target,n=document.querySelector(".full-recipe-block"),t=document.querySelector(".overlay"),"A"==r.tagName&&"right-recipes-block__link"==r.className.split(" ")[1]&&(n.classList.remove("hidden"),t.classList.add("overlay-show"))}),document.querySelector(".full-recipe-block_close-btn").addEventListener("click",function(){t()}),document.querySelector(".overlay").addEventListener("click",function(){t()}),c=document.querySelector(".blog-form_post"),o=document.querySelector(".blog-form__food-name"),i=document.querySelector(".blog-form__food-method"),l=document.querySelector(".blog-form__food-ingredients"),s="",c.addEventListener("click",function(){s=i.value.length>122?i.value.slice(0,122):i.value,document.querySelector(".right-recipes-block").insertAdjacentHTML("beforebegin",'\n        \n        <div class="right-recipes-block right-recipes-block_m-b">\n\n                        <div class="row">\n                            <div class="col-md-6">\n                                <img src="src/img/blinchiki.jpg" alt="" class="right-recipes-block__img">\n\n                            </div>\n                            <div class="col-md-6">\n\n                                <div class="right-recipes-block__text">\n                                    <header class="section-header section-header_m-b">\n                                        <h3 class="section-header__title">'.concat(o.value,'</h3>\n                                    </header>\n                                    <p class="right-recipes-block__discribe">\n                                    ').concat(s,'\n                                    <a href="#" class="link right-recipes-block__link">Читать рецепт...</a></p>\n\n\n\n                                    <div class="right-recipes-block__method right-recipes-block_display-n">\n                                        <p class="right-recipes-block__discribe">\n                                            ').concat(l.value,'\n                                        </p>\n                                    </div>\n\n                                    <div class="right-recipes-block__ingredients right-recipes-block_display-n"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n        '))}),function(){var e=document.querySelectorAll(".ingredients-block__sandwich-btn"),r=!0,n=!1,t=void 0;try{for(var c,o=function(){var e=c.value;e.addEventListener("click",function(){document.querySelectorAll(".ingredients-block").length>1&&e.parentNode.parentNode.remove()})},i=e[Symbol.iterator]();!(r=(c=i.next()).done);r=!0)o()}catch(e){n=!0,t=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw t}}}()}]);