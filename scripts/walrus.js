jQuery(function ($) {
	var wh = $(window).height() + 35;
	bh = 0;
	qh = 0;
    $(document).ready(function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            $divPosition = function (div) {
                $(div).css({"top": "40px","bottom": "auto"});
            };
            $divPosition('#listen');
            $divPosition("#ajaxInfo");
            $divPosition("#terminal");
            $divPosition("#ex");
        }
        $.fn.scrollBy = function (x, y) {
            return this.animate({
                scrollLeft: "+=" + x,
                scrollTop: "+=" + y
                });
        };
        $("body").scrollBy(0, 5);
		$.getJSON('ajax/read.json', function(data) {
		var jsonData = data;
		//console.log(jsonData);
		$( "#monaData" ).tmpl(jsonData)
		.appendTo( "#monaList" );
		$("li.term:odd").css("color", "#00da37");
		$( ".time" ).each( function(){
			$this = $(this);
			if($this.text().length == 0){$this.parents("li.date").remove();}
		});
		$( ".term:contains('    ')" ).remove();
		});
        if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('.hoverTip').tipsy({fade: false, gravity: 'se'});
        }
        var $infoBox = $("#infobox"),
            $ajaxMain = $("#ajaxMain"),
            $ajaxInfo = $("#ajaxInfo");
        $infoBox.hide();
        $("a.ajax").bind("click", function (event) {
            event.preventDefault();
            $.get(this.href, {}, function (data) {
                response=$(data).find("#ajaxMain");
                $infoBox.html(response);
                $ajaxInfo.hide();
                $infoBox.fadeIn(400);
                $("#ex").css("visibility", "visible");
                $("#social").css("visibility", "visible");
            });
        });
        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                $infoBox.fadeOut(400);
                $ajaxInfo.fadeIn(400);
                $ajaxMain.remove();
            }
        });
        $("#infobox, #ex").on("click", "#ajaxMain, #ex, p", function () {
            var $info = $("#infobox");
            $info.fadeOut(400);
            $("#ajaxInfo").fadeIn(400);
            $info.children().remove();
        });
	    
    });
});		