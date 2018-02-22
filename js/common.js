/**
 * Created by ycy on 18/2/17.
 */




$(function(){
    console.log("hello world");
    if ( document.getElementById("navibar_index") ) {
        document.getElementById("navibar_index").innerHTML = ' \
         <div class="container"> \
            <div class="navbar-header">\
                <a class="navbar-brand" href="/index.html">\
                <img alt="Brand" src="/image/icon-green.png" height="48px" width="249px">\
                </a>\
            </div>\
            <div class="collapse navbar-collapse">\
                <ul class="nav navbar-nav" id="mytab">\
                    <li><a href="/blog">Blog</a></li>\
                    <li class="dropdown">\
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Hobbies\
                            <span class="caret"></span> \
                        </a>\
                        <ul class="dropdown-menu" role="menu">\
                            <li><a href="#">Main Page</a></li>\
                            <li><a href="#">Wish List</a></li>\
                            <li><a href="/book/bookcase_2017.html">BookCase</a></li>\
                        </ul>\
                    </li>\
                    <li class="disabled"><a href="#">Reserve</a></li>\
                    <li class="dropdown">\
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Others\
                            <span class="caret"></span>\
                        <!-- caret 小三角 -->\
                        </a>\
                        <ul class="dropdown-menu" role="menu">\
                            <li><a href="/logpage.html">About website</a></li>\
                            <li><a href="#">About me</a></li>\
                            <li><a href="#">Calendar(P)</a></li>\
                            <li><a href="/link.html">Link</a></li>\
                            <!--<li><a href="#">关于网站</a></li>-->\
                            <!--<li><a href="#">私人日历</a></li>-->\
                            <!--<li><a href="#">关于我的</a></li>-->\
                            <!--<li><a href="#">留言模块</a></li>-->\
                        </ul>\
                    </li>\
                </ul>\
            </div>\
        </div>';
    }

    if ( document.getElementById("navibar_mio") ) {
        document.getElementById("navibar_mio").innerHTML = ' \
        <div class="container"> \
            <div class="navbar-header"> \
                <a class="navbar-brand" href="/index.html"> \
                    <img alt="Brand" src="/image/icon-pure.png" height="48px" width="249px"> \
                </a> \
            </div> \
            <div class="dropdown-wrap boxed-velvet"> \
                <ul class="dropdown inner clearfix" id="mytab"> \
                    <li><a href="/blog"><span>Blog</span></a></li> \
                    <li> \
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Hobbies \
                            <span class="caret"></span> \
                        </a> \
                        <ul class="submenu-1" role="menu"> \
                            <li><a href="#">Main Page</a></li> \
                            <li><a href="#">Wish List</a></li> \
                            <li><a href="/book/bookcase_2017.html">BookCase</a></li> \
                        </ul> \
                    </li> \
                    <li class="disabled"><a href="#">Reserve</a></li> \
                    <li class="active"> \
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Others \
                            <span class="caret"></span> \
                        </a> \
                        <ul class="submenu-1" role="menu"> \
                            <li><a href="/logpage.html">About website</a></li> \
                            <li><a href="#">About me</a></li> \
                            <li><a href="#">Calendar(P)</a></li> \
                            <li><a href="/link.html">Link</a></li> \
                            <li><a href="#">留言模块</a></li> \
                        </ul> \
                    </li> \
                </ul> \
            </div> \
        </div> '
    }

    if ( document.getElementById("navibar_white") ) {
        document.getElementById("navibar_white").innerHTML = ' \
            <div class="container"> \
            <div class="navbar-header">\
                <a class="navbar-brand" href="/index.html">\
                <img alt="Brand" src="/image/icon-oldlace.png" height="48px" width="249px">\
                </a>\
            </div>\
            <div class="collapse navbar-collapse">\
                <ul class="nav navbar-nav" id="mytab">\
                    <li><a href="/blog">Blog</a></li>\
                    <li class="dropdown">\
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Hobbies\
                            <span class="caret"></span> \
                        </a>\
                        <ul class="dropdown-menu" role="menu">\
                            <li><a href="#">Main Page</a></li>\
                            <li><a href="#">Wish List</a></li>\
                            <li><a href="/book/bookcase_2017.html">BookCase</a></li>\
                        </ul>\
                    </li>\
                    <li class="disabled"><a href="#">Reserve</a></li>\
                    <li class="dropdown">\
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Others\
                            <span class="caret"></span>\
                        <!-- caret 小三角 -->\
                        </a>\
                        <ul class="dropdown-menu" role="menu">\
                            <li><a href="/logpage.html">About website</a></li>\
                            <li><a href="#">About me</a></li>\
                            <li><a href="#">Calendar(P)</a></li>\
                            <li><a href="/link.html">Link</a></li>\
                            <!--<li><a href="#">关于网站</a></li>-->\
                            <!--<li><a href="#">私人日历</a></li>-->\
                            <!--<li><a href="#">关于我的</a></li>-->\
                            <!--<li><a href="#">留言模块</a></li>-->\
                        </ul>\
                    </li>\
                </ul>\
            </div>\
        </div>';
    }

});
