"use strict";
$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    })

    
}), $(document).ready(function() {
    $("a[href*=#]").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length && e || $("[name=" + this.hash.slice(1) + "]"), e.length) {
                var n = e.offset().top;
                return $("html,body").animate({
                    scrollTop: n
                }, 1e3), !1
            }
        }
    })
});
