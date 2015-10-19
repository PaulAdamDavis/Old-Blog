(function($) {
    $(function(){

        // Responsive videos
        $(".post-content").fitVids();

        // Make images the ability to be wider than the content bleed out further
        if ($(".post-content img").length > 0) {
            var content_width = parseInt($(".post-content").css("width"));
            $(".post-content").find("img").each(function(){
                if ($(this)[0].naturalWidth > content_width) {
                    $(this).addClass("big");
                }
            });
        }

        // If a post has footnotes, start Bigfoot.js
        if ($('.footnotes').length) {
            $.bigfoot(
                {
                    actionOriginalFN: "ignore",
                    deleteOnUnhover: false,
                    preventPageScroll: false,
                    hoverDelay: 250
                }
            );
        }

    });
})(jQuery);