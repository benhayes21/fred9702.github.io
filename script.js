$.stellar();


(function(){
    
    //Checking user agent device
    var ua = navigator.userAgent,
        isMobileWebKit = /WebKit/.test(ua) && /Mobile/.test(ua);
    
    if (isMobileWebKit) {
        $(html).addClass('mobile');
    }
        
    $(function(){
        var iScrollInstance;
        
        if (isMobileWebKit) {
            iScrollInstance = new iScroll('wrapper');
            
            $('#scroller').stellar({
                scrollProperty: 'transform',
                positionProperty: 'transform',
                horizontalScrolling: false,
                verticalOffset: 150
            });
        } else {
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 150
            });
        }
        
    });
    
})();