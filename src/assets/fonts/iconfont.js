(function(window){var svgSprite='<svg><symbol id="icon-ast" viewBox="0 0 1024 1024"><path d="M130.093 351.89h766c17.673 0 32-14.327 32-32v-128c0-17.673-14.327-32-32-32h-766c-17.673 0-32 14.327-32 32v128c0 17.673 14.327 32 32 32z m32-128h702v64h-702v-64zM128.025 527.448H480.1v33.598c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32v-33.598h346.399c17.673 0 32-14.327 32-32s-14.327-32-32-32H544.1v-30.24c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32v30.24H128.025c-17.673 0-32 14.327-32 32s14.327 32 32 32zM287.55 639.802h-158c-17.673 0-32 14.327-32 32v160c0 17.673 14.327 32 32 32h158c17.673 0 32-14.327 32-32v-160c0-17.673-14.327-32-32-32z m-32 160h-94v-96h94v96zM592.093 639.802h-158c-17.673 0-32 14.327-32 32v160c0 17.673 14.327 32 32 32h158c17.673 0 32-14.327 32-32v-160c0-17.673-14.327-32-32-32z m-32 160h-94v-96h94v96zM896.637 639.802h-158c-17.673 0-32 14.327-32 32v160c0 17.673 14.327 32 32 32h158c17.673 0 32-14.327 32-32v-160c0-17.673-14.327-32-32-32z m-32 160h-94v-96h94v96z" fill="" ></path></symbol><symbol id="icon-render" viewBox="0 0 1024 1024"><path d="M880 816H304c-16 0-32 12.8-32 32s12.8 32 32 32h576c16 0 32-12.8 32-32s-12.8-32-32-32z m0-128H304c-16 0-32 12.8-32 32s12.8 32 32 32h576c16 0 32-12.8 32-32s-12.8-32-32-32z m0-544H144c-16 0-32 12.8-32 32v160c0 19.2 12.8 32 32 32h736c16 0 32-12.8 32-32V176c0-19.2-12.8-32-32-32z m-32 160H176v-96h672v96z m32 256H304c-16 0-32 12.8-32 32s12.8 32 32 32h576c16 0 32-12.8 32-32s-12.8-32-32-32z m0-128H304c-16 0-32 12.8-32 32s12.8 32 32 32h576c16 0 32-12.8 32-32s-12.8-32-32-32z" fill="#333333" ></path></symbol><symbol id="icon-template" viewBox="0 0 1024 1024"><path d="M137.6 512l204.8-204.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L70.4 489.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4l227.2 227.2c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8L137.6 512z m464-339.2c-16-3.2-35.2 6.4-38.4 22.4L396.8 812.8c-3.2 16 6.4 35.2 22.4 38.4 16 3.2 35.2-6.4 38.4-22.4L624 211.2c6.4-16-3.2-35.2-22.4-38.4z m352 316.8L726.4 262.4c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L886.4 512 681.6 716.8c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l227.2-227.2c6.4-6.4 9.6-16 9.6-22.4 0-9.6-3.2-16-9.6-22.4z" fill="#333333" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)