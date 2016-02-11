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
});

function bindTest(e){
    $(this).text(".bind: the event is binded already.");
}

function targetTest(e){
    $("#targetest").text(e.target.tagName);
    $("#currentargetest").text(e.currentTarget.tagName);
}

function propagationTest(e){
    var text = document.getElementById("propagationtest");
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

function conlog(x){
    console.log(x);
}

function customizeTest(event){
    var text = document.getElementById("customizetest");
    var e = jQuery.Event("你好");
    var m = text.textContent.toString().match(e.type);
    if( m == null ){
        $(this).trigger(e);
        $("#customizetest").append(" type: " + e.type);
    }
}


