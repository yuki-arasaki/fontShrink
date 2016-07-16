# fontShrink
jQuery plugin for text size adjustment.  
文字サイズ調整のためのjQueryプラグインです。

# What is this?
It's a jQuery plugin.  
jQueryのプラグインです。

If text doesn't fit into parent element, it will shrink until the element fit into the element by changing css font-size property.  
テキストが親の要素に治らない場合、収まるようにfont-sizeを調整します。

It's probably useful in dynamic text output cases.  
動的にテキストが出力される場面で、役に立つと思います。

# How to use
Set the fontShrink() to parent element.  
親エレメントに対してfontShrink()を行ってください。

# Notes
Minimum font-size is 1px. It doesn't go less than that.  
最低font-sizeは1pxです。それより小さくはなりません。

font-size decrease Every 1px by default. You can change the degree by argument.  
デフォルトでfont-sizeは親エレメントに収まるまで1pxごとに小さくなっていきます。単位は引数で設定できます。
