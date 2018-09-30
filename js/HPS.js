/* Health Potion Studios 2018 by Alex Wagner */


function isNotMobile(linkForDesktop, linkForMobile) {
    var result = linkForDesktop;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
	{
		result = linkForMobile;
	}
    return result;
}


function mouseOverZoomOn(x) {
    x.style.width = "88%";
}

function mouseOverZoomOff(x) {
    x.style.width = "85%";
}


