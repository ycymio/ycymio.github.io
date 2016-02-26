$.extendjq = function(){
    alert("Hello, this is the extend part.");
}

$.fn.extendjq= function () {
    $(this).append("<p>--> Hello</p>");
}