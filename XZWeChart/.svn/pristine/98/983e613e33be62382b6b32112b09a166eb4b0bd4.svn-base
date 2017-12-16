;(function(win, doc)
{
    var resize = 'orientationchange' in window ? 'orientationchange' : 'resize';

    function change()
    {
        var html = doc.documentElement;
        html.style.fontSize = doc.documentElement.clientWidth / 18.75 + 'px';	
    }

    change();
    
    win.addEventListener(resize, change, false);
    win.addEventListener('load', change, false);
    doc.addEventListener('DOMContentLoaded', false);
})(window, document);