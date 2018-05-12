// JavaScript Document

function boat3DOverlayOn(){
	document.getElementById("boat3DFrame").style.display = "block";
}

function boat3DOverlayOff(){
	document.getElementById("boat3DFrame").style.display = "none";
}

function tRex3DOverlayOn(){
	document.getElementById("tRex3DFrame").style.display = "block";
}

function tRex3DOverlayOff(){
	document.getElementById("tRex3DFrame").style.display = "none";
}

function adHero3DOverlayOn(){
	document.getElementById("adHero3DFrame").style.display = "block";
}

function adHero3DOverlayOff(){
	document.getElementById("adHero3DFrame").style.display = "none";
}

function adEngineer3DOverlayOn(){
	document.getElementById("adEngineer3DFrame").style.display = "block";
}

function adEngineer3DOverlayOff(){
	document.getElementById("adEngineer3DFrame").style.display = "none";
}

function adZombie3DOverlayOn(){
	document.getElementById("adZombie3DFrame").style.display = "block";
}

function adZombie3DOverlayOff(){
	document.getElementById("adZombie3DFrame").style.display = "none";
}

function mpmpOverlayOn(){
	document.getElementById("mpmpFrame").style.display = "block";
}

function mpmpOverlayOff(){
	document.getElementById("mpmpFrame").style.display = "none";
}

function fashionWebsiteOverlayOn(){
	document.getElementById("fashionWebsiteFrame").style.display = "block";
}

function fashionWebsiteOverlayOff(){
	document.getElementById("fashionWebsiteFrame").style.display = "none";
}

function deceptaconOverlayOn(){
	document.getElementById("deceptaconFrame").style.display = "block";
	$(function(){
		$('#deceptaconFrame').find('iframe').attr('src', 'https://www.youtube.com/embed/UuxN4Xx-y0U');
	});
}

function deceptaconOverlayOff(){
	document.getElementById("deceptaconFrame").style.display = "none";
}

function cellMetroOverlayOn(){
	document.getElementById("cellMetroFrame").style.display = "block";
}

function cellMetroOverlayOff(){
	document.getElementById("cellMetroFrame").style.display = "none";
}

function alienConceptOverlayOn(){
	document.getElementById("alienConceptFrame").style.display = "block";
}

function alienConceptOverlayOff(){
	document.getElementById("alienConceptFrame").style.display = "none";
}

function redaOverlayOn(){
	document.getElementById("redaFrame").style.display = "block";
}

function redaOverlayOff(){
	document.getElementById("redaFrame").style.display = "none";
}

function theHutongHunterOverlayOn(){
	document.getElementById("theHutongHunterFrame").style.display = "block";
}

function theHutongHunterOverlayOff(){
	document.getElementById("theHutongHunterFrame").style.display = "none";
}

$(function(){
	$('.crossButton').click(function(){
		$('#deceptaconFrame').find('iframe').attr('src', '');
	});
});