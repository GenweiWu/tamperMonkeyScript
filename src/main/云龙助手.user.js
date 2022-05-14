// ==UserScript==
// @name         云龙助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://xxx.aaa.com/*
// @require      http://libs.baidu.com/jquery/1.9.1/jquery.min.js
// @grant        unsafeWindow
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
position:fixed;
top: 33%;
right: 40px;
font-weight: bold;
color: mediumblue;
font-size: 16px;
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
box-shadow: 5px 5px 5px orange;
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
}

`)


    window.onload = function () {

        detectYunlong();

    };


    var yunlongList = [
        {
            name:"aaa",
            url:"https://aaa"
        },
        {
            name:"bbb",
            url:"https://bbb"
        },
        {
            name:"ccc",
            url:"https://ccc"
        },
        {
            name:"ddd",
            url:"https://ddd"
        }
    ];

    function detectYunlong(){
        var _currentUrl = window.location.href;

        var liArray="";

        for(let y of yunlongList){
            let _name = y.name;
            let _url = y.url;
            var current=`<li><a href='${_url}'>${_name}</a></li>`;
            if(_currentUrl == _url){
                current=`<li class='selected'><a href='${_url}'>${_name}</a></li>`;
            }
            liArray+=current
        }

        var fix = $(`<div id='dave' class='fixed_area'>
<ul>
${liArray}
</ul>
</div>`);
        $("body").append(fix);


    };

})();
