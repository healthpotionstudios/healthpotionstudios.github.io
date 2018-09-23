/* Health Potion Studios 2018 by Alex Wagner */


function isMobile() {
	var result = false;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
	{
		result = true;
	}
	console.log("function ran. value is " + result);
    return result;
}