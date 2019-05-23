
## @match
用于设置哪些网站生效

## @require
用于引入外部资源，比如jquery等

## window.onload
加载完成后

##  添加css样式

```ts
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
};

    addGlobalStyle(`
.fixed_area{
position:fixed;
top: 33%;
}

h1{
  font-size: 16px;
{

`)
```
