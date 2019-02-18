/* Health Potion Studios 2018 by Alex Wagner */


function isNotMobile(linkForDesktop, linkForMobile) {
    var result = linkForDesktop;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
	{
		result = linkForMobile;
	}
    return result;
}

function isNotMobileBool() {
    var result = true;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
	{
		result = false;
	}
    return result;
}


function mouseOverZoomOn(x) {
    x.style.width = "88%";
}

function mouseOverZoomOff(x) {
    x.style.width = "85%";
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction(ID) {
    var x = document.getElementById(ID);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function copyrightCheck(){
	var d = new Date();
	var n = d.getFullYear();
	var str = "";
	if (n<=2018){
		str = "&copy; Health Potion Studios, LLC 2018";
	}
	else{
		str = "&copy; Health Potion Studios, LLC 2018-" + n.toString();
	}
	document.getElementById("copyright").innerHTML = str;
}

function fillAppNameDelay (name){
    var x = setTimeout(function() { fillAppName(name) }, 1000);
}

function fillAppName (name){
    document.getElementById("appname1").innerHTML = name;
    document.getElementById("appname2").innerHTML = name;
}

fuction specialCode()
{
	var d = new Date();
	var n = d.getMonth();
	n = n+1;
	if (n==2){
		document.write('<br><p class="h3fontSize">"Since it is Feb use code: <b>CODE</b> for stuff"</p>');
	}
}
