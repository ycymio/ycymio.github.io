/**
 * Created by ycy on 16/2/8.
 */
window.onload = function(){
    imgLocation("container", "box");
    var imgData = {"data":[{"src":"20160208_18.gif"}]}
    window.onscroll = function(){
        // 重复了, 需要改 =。=
        if(checkFlag("container", "box")){
            var cParent = document.getElementById("container");
            for(var i = 0; i < imgData.data.length; i++){
                var cContent = document.createElement("div");
                cContent.className = "box";
                cParent.appendChild(cContent);
                var boximg = document.createElement("div");
                boximg.className = "box_img";
                cContent.appendChild(boximg);
                var img = document.createElement("img");
                img.src = "img/G-ZIVEN/"+ imgData.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container", "box");
        }
    }
}

function imgLocation(parent, content){
    // parent 父级空间 content 子级空间 将parent下多有的content取出
    var cParent = document.getElementById(parent);
    var cContent = getChildElement(cParent, content);
    var imgWidth = cContent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    cParent.style.cssText = "width:" + imgWidth*cols +"px; margin:0 auto";

    var boxHeightArr = [];
    for(var i = 0; i < cContent.length; i++){
        if( i < cols ) {
            boxHeightArr[i] = cContent[i].offsetHeight;
        }
        else{
            var minHeight = Math.min.apply(null, boxHeightArr);
            var minIndex = getminHeightLocation(boxHeightArr, minHeight);
            cContent[i].style.position = "absolute";
            cContent[i].style.top = minHeight + "px";
            cContent[i].style.left = cContent[minIndex].offsetLeft + "px";
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + cContent[i].offsetHeight;
        }
    }
}

function getminHeightLocation(boxHeightArry, minHeight){
    for(var i in boxHeightArry){
        if( boxHeightArry[i] == minHeight){
            return i;
        }
    }
}

function getChildElement(parent, content){
    var contentArry = [];
    var allContent = parent.getElementsByTagName("*");
    for(var i = 0; i < allContent.length; i++){
        if(allContent[i].className == content){
            contentArry.push(allContent[i]);
        }
    }
    return contentArry;
}

function checkFlag(parent, content){
    var cParent = document.getElementById(parent);
    var cContent = getChildElement(cParent, content);
    var lastContentHeight = cContent[cContent.length-1].offsetTop;
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
    return (lastContentHeight < scrollTop + pageHeight);
}