/**
 * Created by ycy on 16/2/11.
 */

$(document).ready(function(){
    //alert("文档加载完毕");
    $(".hidden").click(function(){
       $(this).hide();
    });

    $("#bclickupdate").click(function(){
        $("#pclickupdate").text("id为pclickupdate的元素被修改");
    });

    $("#clickhide").click(function(){
        $(this).hide();
    });

    $("#dblclickhide").dblclick(function(){
        $(this).hide();
    });

    $("#mouseenterhide").mouseenter(function(){
        $(this).hide();
    });

    $("#mouseleavehide").mouseleave(function(){
        $(this).hide();
    });

    $("#initialbutton").click(function(){
        $("#bindtest").text(".bind()/.on() && .unbind()/.off(): initial content - click me");
    });

    $("#bindbutton").click(function(){
        $("#bindtest").on("click",bindTest);
    });

    $("#unbindbutton").click(function(){
        $("#bindtest").off("click",bindTest);
    });

    $("#targetdiv").on("click", targetTest);

    $("#propagation1").on("click", propagationTest);

    $("#propagation2").on("click", propagationTest);

    $("#propagation3").on("click", propagationTest);

    $("#stoppropagation").on("click", stopPropagationTest);

    $("#stopimmediatepropagation").on("click", stopImmediatePropagationTest);

    $("#normalpropagation").on("click", modifiedTest);

    $("#stoppropagation").on("click", modifiedTest);

    $("#stopimmediatepropagation").on("click", modifiedTest);

    $("#initialpropagation").click(function(e){
        $("#propagationtest").text("none");
        $("#propagationmodified").text("Here may be modified. ");
        e.stopPropagation();
    });

    $("#customizevent").on("click", customizeTest);

    $("#hidebutton").click(function(){
        $("#hidetest").hide(1000);
    });

    $("#showbutton").click(function(){
        $("#hidetest").show(1000);
    });

    $("#hideandshow").click(function(){
        $("#hidetest").toggle(1000);
    });

    $("#fadein").on("click", fadeinTest);

    $("#fadeout").on("click", fadeoutTest);

    $("#fadetoggle").on("click", fadetoggleTest);

    $("#fadeto").on("click", fadetoTest);

    $("#slidedown").click(function(){
        $("#slidetest").slideDown(500);
    });

    $("#slideup").click(function(){
        $("#slidetest").slideUp(500);
    });

    $("#slidetoggle").click(function(){
        $("#slidetest").slideToggle(500);
    });

    $("#callbackbutton").on("click", callbackTest);

    $("#btn-textest").click(function(){
        $("#textresult").text($("#textest").text());
    });

    $("#btn-htmltest").click(function(){
        $("#textresult").text($("#textest").html());
    });

    $("#btn-inputget").click(function(){
        $("#textresult").text($("#textinput").val());
    });

    $("#btn-textattrtest").click(function(){
        $("#textresult").text($("#textattr").attr("href"));
    });

    settingFunc();

    appendFunc();

    removeFunc();

    cssFunc();

    boxFunc();

    traversaldownFunc();

    traversalupFunc();

    traversalsibingsFunc();

    filterFunc();
});

function bindTest(){
    $(this).text(".bind: the event is binded already.");
}

function targetTest(e){
    $("#targetest").text(e.target.tagName);
    $("#currentargetest").text(e.currentTarget.tagName);
}

function propagationTest(e){
    //var text = document.getElementById("propagationtest");
    $("#propagationtest").append("--"+e.currentTarget.id);
}

function stopPropagationTest(e){
    e.stopPropagation();
}

function stopImmediatePropagationTest(e){
    e.stopImmediatePropagation();
    conlog(e);
}

function modifiedTest(){
    $("#propagationmodified").text("该事情发生在按钮点击以后");
}

function customizeTest(){
    var text = document.getElementById("customizetest");
    var e = jQuery.Event("你好");
    var m = text.textContent.toString().match(e.type);
    if( m == null ){
        $(this).trigger(e);
        $("#customizetest").append(" type: " + e.type);
    }
}

function fadeinTest(){
    $("#fadetest1").fadeIn(1000);
    $("#fadetest2").fadeIn(1000);
    $("#fadetest3").fadeIn(1000);
}

function fadeoutTest(){
    $("#fadetest1").fadeOut(1000);
    $("#fadetest2").fadeOut(1000);
    $("#fadetest3").fadeOut(1000);
}

function fadetoggleTest(){
    $("#fadetest1").fadeToggle(1000);
    $("#fadetest2").fadeToggle(1000);
    $("#fadetest3").fadeToggle(1000);
}

function fadetoTest(){
    $("#fadetest1").fadeTo(1000, 0.3);
    $("#fadetest2").fadeTo(1000, 0.5);
    $("#fadetest3").fadeTo(1000, 0.7);
}

function callbackTest(){
    $("#callbacktest").slideUp(1000).slideDown(1000);
}

function settingFunc(){
    $("#btn-setting-html").click(function(){
        $("#settingtest").html("<a href='#'>.html: 设置HTML内容</a>");
    });
    $("#btn-setting-input").click(function(){
        $("#ip-setting").val(".val(): 修改input元素内容");
    });
    $("#btn-setting-attr").click(function(){
        $("#a-setting").attr({
            "href": "http://www.github.com"
        });
    });
}

function appendFunc(){
    $("#btn-append").click(function(){
        $("#appendtest").append(" .append(): 在被选中元素标签内的结尾插入内容 ");
    });
    $("#btn-prepend").click(function(){
        $("#appendtest").prepend(" .prepend(): 在被选中元素内的之前插入内容 ");
    });
    $("#btn-before").click(function(){
        $("#appendtest").before("<p>.before(): 在被选中元素标签外的之前插入内容, 有换行</p>");
    });
    $("#btn-after").click(function(){
        $("#appendtest").after("<p>.prepend(): 在被选中元素标签外的之后插入内容, 有换行</p>");
    });

    $("#btn-multiappend").on("click", appendText);

    function appendText(){
        var text1 = "<p>直接写html: html方法</p>";
        var text2 = $("<p></p>").text(".text(): jQuery方法 ");
        var text3 = document.createElement("p");
        text3.innerHTML=".createElement(): DOM 方法";
        $("#appendtest").after(text1, text2, text3);
    }
}

function removeFunc(){
    $("#btn-remove").click(function(){
        $("#div-remove").remove();
    });
    $("#btn-empty").click(function(){
        $("#div-remove").empty();
    })
}

function cssFunc(){
    $("#div-css").css({
        width: "400px",
        height: "auto",
        margin: "10px 20px 5px 20px",
        padding: "10px"
    });
    $("#div-css").css("background-color", "pink");

    $("#btn-addclass").click(function(){
        $("#div-addclass").addClass("css-test");
    });

    $("#btn-removeclass").click(function(){
        $("#div-addclass").removeClass("css-test");
    });

    $("#btn-removeclass").click(function(){
        $("#div-addclass").removeClass("css-test");
    });

    $("#btn-toggleclass").click(function(){
        $("#div-addclass").toggleClass("css-test2");
    });
}

function boxFunc(){
    $("#div-box").click(function(){
        $("#span-box-height").text($("#div-box").height());
        $("#span-box-width").text($("#div-box").width());
        $("#span-box-innerheight").text($("#div-box").innerHeight());
        $("#span-box-innerwidth").text($("#div-box").innerWidth());
        $("#span-box-outerheight").text($("#div-box").outerHeight());
        $("#span-box-outerwidth").text($("#div-box").outerWidth());
        $("#span-box-outerheightrue").text($("#div-box").outerHeight(true));
        $("#span-box-outerwidthtrue").text($("#div-box").outerWidth(true));
    });
}

function traversaldownFunc(){
    $("#btn-children").click(function(){
        $("#div-traversaldown1").children().css({border: "3px solid black"});
        //conlog($("#div-traversaldown1").children());
    });
    $("#btn-find").click(function(){
        $("#div-traversaldown1").find("#div-traversaldown2").css({border: "3px solid blue"});
        //conlog($("#div-traversaldown1").children());
    });
}

function traversalupFunc(){
    $("#btn-parent").click(function(){
        $("#sp-parent").parent().css({"background-color": "pink"});
    });
    $("#btn-parents").click(function(){
        $("#sp-parents").parents().css({"background-color": "white"});
    });
    $("#btn-parentsuntil").click(function(){
        //conlog($("#sp-parentsuntil").parentsUntil());
        $("#sp-parentsuntil").parentsUntil("#div-traversalup1").css({"background-color": "paleturquoise"});
    })
}

function traversalsibingsFunc(){
    $("#p-sibings").click(function(){
        $("#p-sibings").siblings().css({color: "purple"});
    });
    $("#p-next").click(function(){
        $("#p-next").next().css({color: "red"});
    });
    $("#p-nextAll").click(function(){
        $("#p-nextAll").nextAll().css({color: "orange"});
    });
    $("#p-nextUntil").click(function(){
        $("#p-nextUntil").nextUntil("#p-prevUntil").css({color: "yellow"});
    });
    $("#p-prev").click(function(){
        $("#p-prev").prev().css({color: "green"});
    });
    $("#p-prevAll").click(function(){
        $("#p-prevAll").prevAll().css({color: "cyan"});
    });
    $("#p-prevUntil").click(function(){
        $("#p-prevUntil").prevUntil().css({color: "blue"});
    });
}

function filterFunc(){
    $("#p-first").click(function(){
        $("#filtertest div p").first().css({color: "red"});
    });
    $("#p-last").click(function(){
        $("#filtertest div p").last().css({color: "orange"});
    });
    $("#p-eq").click(function(){
        $("#filtertest div p").eq(3).css({color: "yellow"});
    });
    $("#p-filter").click(function(){
        $("#filtertest div p").filter("#filtertest div .cfilter").css({color: "green"});
    });
    $("#p-not").click(function(){
        $("#filtertest div p").not("#filtertest div .cfilter").css({color: "cyan"});
    });
}

function conlog(x){
    console.log(x);
}

