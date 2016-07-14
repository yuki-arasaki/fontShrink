(function($){
    $.fn.fontShrink = function(options) {
        return this.each(function(){
            // SET init
            var init = {
                'text' : $(this).text(),
                'width' : $(this).width(),
                'font_size' : parseInt($(this).css('font-size'), 10)
            }
            // CHECK text length
            var $temp = $('<span>');
            $temp.text(init.text).css('display', 'none');
            $(this).append($temp);
            var text_width = $temp.width();
            if (text_width < init.width) {
                return true;
            }

            var opts = $.extend({}, $.fn.fontShrink.defaults, options);

            var font_size_new = init.font_size;

            do {
                font_size_new -= opts.value;
                $temp.css('font-size', font_size_new);
                text_width = $temp.width();
                if (font_size_new <= 1) {
                    break;
                }
                if (font_size_new <= opts.value) {
                    break;
                }
            } while (text_width > init.width);

            // SET new font-size
            $(this).css('font-size', font_size_new);

            // remove temp
            $temp.remove();
        });
    }
    // SET font-shrink size
    $.fn.fontShrink.defaults = {
        value: 1
    }
})(jQuery);
