var origin = window.location.origin;
var pathName = window.location.pathname;
var proName = pathName.split("/");

var t_url = origin+"/"+proName[1];
var js_url = origin+"/"+proName[1]+"/js";
var css_url = origin+"/"+proName[1]+"/css";

/*
 * css公共引入
 *
 * */


/*
 * js公共引入
 *
 * */
document.write('<script src="'+js_url+'/jquery-2.1.1.js"></script>');
document.write('<script src="'+js_url+'/index.js"></script>');