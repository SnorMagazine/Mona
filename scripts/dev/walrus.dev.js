jQuery(function ($) {
	var wh = $(window).height() + 35;
	bh = 0;
	qh = 0;
    $(document).ready(function () {
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
		$('.hoverTip').tipsy({fade: true, gravity: 'se'});
	    $(document).keyup(function (e) {
	        if (e.keyCode == 27) {
	            $(".infobox").fadeOut(400);
	            $("#ajaxInfo").fadeIn(400);
	            $("#ajaxMain").remove();
	        }
	    });
        $(".infobox").hide();
        $("a.ajax").bind("click", function (event) {
            event.preventDefault();
            $.get(this.href, {}, function (response) {
                $(".infobox").html(response);
                $("#ajaxInfo").hide();
                $(".infobox").fadeIn(400);
            });
        });
	    $(".infobox, #ex").on("click", "#ajaxMain, #ex, p", function () {
	        $(".infobox").fadeOut(400);
	        $("#ajaxInfo").fadeIn(400);
	        $("#ajaxMain").remove();
	    });
    });
});		