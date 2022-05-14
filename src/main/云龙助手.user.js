// ==UserScript==
// @name         环境助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      http://libs.baidu.com/jquery/1.9.1/jquery.min.js

// @match https://*/abc/*

// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
};

(function() {
    'use strict';

    addGlobalStyle(`
.fixed_area{
    position: fixed;
    top: 2%;
    right: 240px;
    font-weight: bold;
    color: mediumblue;
    font-size: 16px;
    z-index: 1050;
}
.fixed_area span{
   background-color: yellow;
    cursor: pointer;
}
.fixed_area ul{
line-height: 30px;
}
.fixed_area li{
padding: 5px 15px;
list-style:none;
background-color: gold;
margin-top:6px;
opacity:0.5;
transition:all .5s;
box-shadow: 3px 3px 3px orange;
position: relative;
}
.fixed_area li:hover{
opacity:1;
text-decoration: underline;
transform:translateX(-15px);
}
.fixed_area li.selected{
opacity:1;
border: 2px solid red;
border-radius:5px;
}
`)

    //alert(0)



    var yunlongList = [
        {
            name:"aaa",
            url:"https://aaa"
        },
        {
            name:"bbb",
            url:"https://bbb"
        }
    ];

    setTimeout(function(){
        detectYunlong();
    },0)


    function detectYunlong(){
        var _currentUrl = window.location.href;

        var liArray="";

        yunlongList.forEach(function(y){
            let _name = y.name;
            let _url = y.url;
            var current=`<li><a href='${_url}'>${_name}</a></li>`;

            if(_currentUrl == _url || _currentUrl.startsWith(_url)){
                current=`<li class='selected'><a href='${_url}'>${_name}</a></li>`;
            }
            liArray+=current
        })

        var fix = $(`<div id='dave' class='fixed_area'>
<div>
<span id="daveFast">助手<span>
</div>
<ul id="daveUl" style="display:none">
${liArray}
</ul>
</div>`);
        $("body").append(fix);

        $("#daveFast").click(function(){
            $("#daveUl").toggle();
        })
    };

})();
