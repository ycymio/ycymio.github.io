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

function conlog(x){
    console.log(x);
}

