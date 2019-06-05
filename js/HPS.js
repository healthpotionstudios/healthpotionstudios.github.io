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

function specialCode()
{
	var d = new Date();
	var n = d.getMonth();
	n = n+1;
	if (n==7){
		document.write('<br><p class="h3fontSize">Since it is July use code: <b>fireworks</b> for some more free powerups!</p>');
    }
    if (n==10){
		document.write('<br><p class="h3fontSize">Since it is October use code: <b>2spooky</b> to unlock a spooky character!</p>');
    }
    if (n==12){
		document.write('<br><p class="h3fontSize">Since it is December use code: <b>itsChristmas</b> for some free coins!</p>');
	}
}


function setAge(name)
{
    var birth_month = 0;
    var birth_day = 0;
    var birth_year = 0;
    if (name == "alex")
    {
        birth_month = 4;
        birth_day = 6;
        birth_year = 1997;
    }
    if (name == "pan")
    {
        birth_month = 2;
        birth_day = 22;
        birth_year = 1996;
    }
    if (name == "holden")
    {
        birth_month = 10;
        birth_day = 8;
        birth_year = 1997;
    }
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    var result = age.toString();
    if (((birth_month - 1) == today_month) && (today_day == birth_day))
    {
        result += "   <span class='birthday'>Happy Birthday!</span>"
    }

    document.write(result);
}
