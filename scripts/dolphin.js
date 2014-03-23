jQuery(function ($) {
    var wh = $(window).height() + 35,
        qh = 0,
        ph = 146,
        bh = wh,
        i = 0,
        conf = {
            x: 0,
            y: 0,
            id: 1,
            termDiv: "mona",
            frameColor: "#fff",
            ps: "  ",
            historyUnique: true,
            initHandler: initHandler,
            exitHandler: termExit,
            cols: 140,
            rows: 100,
            handler: termHandler,
            bgColor: "#fff",
            closeOnESC: false,
            blinkDelay: 500,
            fontClass: "term",
            crsrBlinkMode: true,
            crsrBlockMode: true
        },
        term = new Terminal(conf),
        eliza = new ElizaBot();
        $(document).ajaxComplete(function(){
            try{
                FB.XFBML.parse(); 
            }catch(ex){}
        });
        $.fn.scrollBy = function (x, y) {
            return this.animate({
                scrollLeft: "+=" + x,
                scrollTop: "+=" + y
            });
        };
    $(document).ready(function () {
        $('#mobileInput').hide();
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            $divPosition = function (div) {
                $(div).css({"top": "40px","bottom": "auto"});
            };
            $divPosition('#listen');
            $divPosition("#ajaxInfo");
            $divPosition("#terminal");
            $divPosition("#ex");
            $('#mobileInput').show();
        $('#container').click(function(e){
            $('#mobileInput').blur();
        });
        }
        $("body").stop().scrollBy(0, 10);
        $("li.term:odd").css("color", "#00da37");
        $(".show").hide();
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
        $(".height").append(wh);
        $(window).resize(function () {
            wh = $(window).height();
            $("body").css("height", bh);
            $("#height").empty().append(wh);
            bh = wh + qh;
            $("#bheight").empty().append(bh);
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
    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.hoverTip').tipsy({fade: false, gravity: 'se'});
    }
    window.termOpen = function () {
        TermGlobals.keylock = false;
        if (term.closed) {
            eliza.reset();
        }
        term.open();
        setTermLink(true);
        $("li.term:odd").css("color", "#00da37");
    };
    function setTermLink(v) {
        var linkobj;
        if (document.getElementById) {
            linkobj = document.getElementById("termOpenLink");
        } else {
            if (document.all) {
                linkobj = document.all.termOpenLink;
            } else {
                linkobj = document.links.termOpenLink;
            }
        }
        if (linkobj) {
            linkobj.className = (v) ? "termopen" : "termopenhidden";
        }
    }
    function addp() {
        $(".term").each(function () {
            var $this = $(this);
            $this.html($this.html().replace(/&nbsp;/g, " "));
            ph = $this.outerHeight(true);
        });
    }
    var addh = function (n) {
        var v = qh,
            qh = v + n,
            bh = wh + qh;
        $("#qheight").empty().append(qh);
        $("body").height(bh);
        $("section").height(bh);
        $("#bheight").empty().append(bh);
        $("body").stop().scrollBy(0, n);
    },
        n = new Date(),
        day = n.getDate(),
        month = n.getMonth() + 1,
        year = n.getFullYear(),
        date = day + "/" + month + "/" + year;
    function $jsonSend(n) {
        if (i === n) {
            var jsonObj = [];
            jsonObj.push({"date" : date});
            $('.content ul').find('li').slice(0, 10).each(function(index) {
                jsonObj.push({'comment': $(this).text()});
            });
            jsonEncoded = JSON.stringify(jsonObj);
            console.log(jsonEncoded);
            $.ajax({
                type: "POST",
                url: "server.php",
                dataType: "json",
                data: {
                    json: jsonEncoded
                }
            });
            i++;
        } else {
            if (i > n) {} else {
                i++;
            }
        }
    }
    function initHandler() {
        this.write([""]);
        this.type(" " + elizaInitials[Math.floor(Math.random() * elizaInitials.length)]);
        addp();
        this.prompt();
    }
    function termHandler() {
        var line = this.lineBuffer;
        if (line.search(/^\s*$/) == 0) {
            this.prompt();
            return;
        }
        this.write("%n" + eliza.transform(line));
        if (eliza.quit) {
            setTimeout("term.close()", 2500);
            return;
        }
        this.prompt();
        $jsonSend(6);
        addp();
        addh(ph * 2);
    }
    function termExit() {
        TermGlobals.keylock = true;
        setTermLink(true);
    }
    term.open();

});
