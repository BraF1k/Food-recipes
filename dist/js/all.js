!function(e){var n={};function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(r,c,function(n){return e[n]}.bind(null,c));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(){document.querySelector(".full-recipe-block").classList.add("hidden"),document.querySelector(".overlay").classList.remove("overlay-show")}var c,o,i,l;t.r(n),document.querySelector(".wraper-right").addEventListener("click",function(e){var n,t,r;n=e.target,t=document.querySelector(".full-recipe-block"),r=document.querySelector(".overlay"),"BUTTON"==n.tagName&&"right-recipes-block__btn"==n.className.split(" ")[1]&&(t.classList.remove("hidden"),r.classList.add("overlay-show"))}),document.querySelector(".full-recipe-block_close-btn").addEventListener("click",function(){r()}),document.querySelector(".overlay").addEventListener("click",function(){r()}),c=document.querySelector(".blog-form_post"),o=document.querySelector(".blog-form__food-name"),i=document.querySelector(".blog-form__food-method"),l="",c.addEventListener("click",function(){l=i.value.length>122?i.value.slice(0,122):i.value,document.querySelector(".right-recipes-block").insertAdjacentHTML("beforebegin",'\n        \n        \n        <div class="right-recipes-block right-recipes-block_m-b">\n\n                            <div class="row">\n                                <div class="col-md-6">\n                                    <img src="src/img/blinchiki.jpg" alt="" class="right-recipes-block__img">\n\n                                </div>\n                                <div class="col-md-6">\n\n                                    <div class="right-recipes-block__text">\n                                        <header class="section-header section-header_m-b">\n                                            <h3 class="section-header__title">'.concat(o.value,'</h3>\n                                        </header>\n                                        <p class="right-recipes-block__discribe">\n                                            ').concat(l,' <button type="button"\n                                                class="btn right-recipes-block__btn">Читать рецепт...</button></p>\n\n\n\n                                        <div class="right-recipes-block__method right-recipes-block_display-n">\n                                            <p class="right-recipes-block__discribe">\n                                                ').concat(i.value,'\n                                            </p>\n                                        </div>\n\n                                        <div class="right-recipes-block__ingredients right-recipes-block_display-n">\n                                                ').concat(function(){var e="",n=document.getElementsByClassName("ingredients-block"),t=!0,r=!1,c=void 0;try{for(var o,i=n[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;e+='<li class="ingredients-all-block__item">'.concat(l.querySelector(".ingradient").value," - ").concat(l.querySelector(".ingradient-count").value," ").concat(l.querySelector(".ingredients-block__measure").value,"</li> \n")}}catch(e){r=!0,c=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw c}}return e}(),"\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n        \n        "))}),function(){var e=document.querySelectorAll(".ingredients-block__sandwich-btn"),n=!0,t=!1,r=void 0;try{for(var c,o=function(){var e=c.value;e.addEventListener("click",function(){document.querySelectorAll(".ingredients-block").length>1&&e.parentNode.parentNode.remove()})},i=e[Symbol.iterator]();!(n=(c=i.next()).done);n=!0)o()}catch(e){t=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}}()}]);