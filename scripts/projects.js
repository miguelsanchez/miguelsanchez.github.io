$(document).ready(function(){
	$('.centerColumn').css({
        position:'absolute',
        left: ($(window).width() - $('.centerColumn').outerWidth())/2
    });		

	  var p1 = false;
	  var p2 = false;
	  var p3 = false;
	  var p4 = false;

	BrowserDetect.init();


	  $('#midito').animate({
	    opacity: 0.25,
	    height: 'toggle'
	  }, 0, function() {
	    // Animation complete.
	  });
	
	  $('#absolute').animate({
	    opacity: 0.25,
	    height: 'toggle'
	  }, 0, function() {
	    // Animation complete.
	  });
	
	  $('#sketchyplane').animate({
	    opacity: 0.25,
	    height: 'toggle'
	  }, 0, function() {
	    // Animation complete.
	  });
	
	  $('#strangesituation').animate({
	    opacity: 0.25,
	    height: 'toggle'
	  }, 0, function() {
	    // Animation complete.
	  });
	
	  $('#3points').animate({
	    opacity: 0.25,
	    height: 'toggle'
	  }, 0, function() {
	    // Animation complete.
	  });
	
				
	$('#miditoBt').click(function(){
		
		if (!p1)
		{
			if(p2) {projectONandOFF($('#midito'),$('#absolute'),100);p2=false;}
			else if(p3) {projectONandOFF($('#midito'),$('#sketchyplane'),100);p3=false;}
			else if(p4) {projectONandOFF($('#midito'),$('#strangesituation'),100);p4=false;}
			else projectON($('#midito'),100);
		}
		else
		{
			projectOFF($('#midito'));
		}
		
		p1=!p1;
	});		
	
	$('#absoluteBt').click(function(){
		
		if (!p2)
		{
			if(p1) {projectONandOFF($('#absolute'),$('#midito'),350);p1=false;}
			else if(p3) {projectONandOFF($('#absolute'),$('#sketchyplane'),350);p3=false;}
			else if(p4) {projectONandOFF($('#absolute'),$('#strangesituation'),350);p4=false;}
			else projectON($('#absolute'),350);
		}
		else
		{
			projectOFF($('#absolute'));
		}
		
		p2=!p2;
	});	
	
	$('#sketchyplaneBt').click(function(){
		
		if (!p3)
		{
			if(p1) {projectONandOFF($('#sketchyplane'),$('#midito'),600);p1=false;}
			else if(p2) {projectONandOFF($('#sketchyplane'),$('#absolute'),600);p2=false;}
			else if(p4) {projectONandOFF($('#sketchyplane'),$('#strangesituation'),600);p4=false;}
			else projectON($('#sketchyplane'),600);
		}
		else
		{
			projectOFF($('#sketchyplane'));
		}
		
		p3=!p3;
	});
	
	
	$('#strangesituationBt').click(function(){

		if (!p4)
		{
			if(p1) {projectONandOFF($('#strangesituation'),$('#midito'),850);p1=false;}
			else if(p2) {projectONandOFF($('#strangesituation'),$('#absolute'),850);p2=false;}
			else if(p3) {projectONandOFF($('#strangesituation'),$('#sketchyplane'),850);p3=false;}
			else projectON($('#strangesituation'),850);
		}
		else
		{
			projectOFF($('#strangesituation'));
		}

		p4=!p4;
	});
	
	/*// Call pause when pause button clicked
    addEvent($("#miditoBt"), 'click', function() {
        froogaloop.api('pause');
    }, false);*/
				 
});

// In fact is in the other order...
function projectONandOFF(project2,project1,points)
{
	addHTML(project2);
	project1.animate({
	    opacity: 0.25,
	    height: 'toggle'
	  }, 750, function() {
	    // Animation complete.
		  deleteHTML(project1);
		  $('#3points').animate({
		    opacity: 0.25,
		    height: 'toggle'
		  }, 750, function() {
		    // Animation complete.
		
			$('#3points').css({left:points});

			$('#3points').animate({
			    opacity: 1,
			    height: 'toggle'
			  }, 2000, function() {
			    // Animation complete.
				  project2.animate({
				    opacity: 1,
				    height: 'toggle'
				  }, 2000, function() {
				    // Animation complete.
				  });
			  });
		
		  });
	  });
	
}

function projectOFF(project1)
{

	project1.animate({
	    opacity: 0.25,
	    height: 'toggle'
	  }, 2000, function() {
	    // Animation complete.
		  $('#3points').animate({
		    opacity: 0.25,
		    height: 'toggle'
		  }, 2000, function() {
		    // Animation complete.
			deleteHTML(project1);
		  });
	  });
}

function projectON(project1,points)
{
	addHTML(project1);
	$('#3points').css({left:points});
						
	$('#3points').animate({
	    opacity: 1,
	    height: 'toggle'
	  }, 2000, function() {
	    // Animation complete.
		  project1.animate({
		    opacity: 1,
		    height: 'toggle'
		  }, 2000, function() {
		    // Animation complete.
		  });
	  });
}

function addHTML(project)
{
	switch (project.data())
	{
		case $('#midito').data():
		{	
			var video = '<iframe id="miditoVideo" src="https://player.vimeo.com/video/19605113?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="533" height="300" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe>';
			$('#midito').html('<h2>MiDi-to</h2><div style="float:right">'+video+'</div><p style="width:400px;padding-top:10px">	MiDi-to is a wireless iPad midi controller for Serato Scratch Live being the first app that does not need any additional software to work thanks to the Core Midi framework.</br></br>	The purpose of the app is to minimize interaction with the computer. In this demo the DJ does not touch the computer at any moment. All control is done through the turntables, mixer and iPad.</br></br>	<font style="color:#F55">Technologies:</font> Objective-C, iOS SDK, CoreMidi. </br></br>	<font style="color:#F55">Collaborators:</font> Jason Rados, Pablo López </br></br>	Web:	<a href="http://www.midi-to.com">MiDi-to</a>	<br><br>	Decemeber 2010 - Still Alive</p>')
			break;
		}
		case $('#absolute').data():
		{
			video = '<iframe id="absoluteVideo" src="https://player.vimeo.com/video/29280682" width="533" height="300" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			$('#absolute').html('<h2>Absolute Lab</h2><div style="float:right">'+video+'</div><p style="width:400px;padding-top:10px">	This project was developed with openFrameworks and Kinect using a very early version of openKinect to create some generative animations according to the movement of the user. It was concieved as an interactive installation for the Absolute Lab showcase in Madrid. <br><br>	The users could see experiment how their faces and extremities had an unexpected reflection through the glass of the showcase. <br><br>	It was exposed during Christmas in 2010.<br><br>	<font style="color:#F55">Technologies:</font> openFrameworks, Kinect. </br></br>	<font style="color:#F55">Collaborator:</font> Orgio @ <a href="www.voronoi.es">www.voronoi.es</a></br></br>	December 2010</p>');
			break;
		}
		
		case $('#sketchyplane').data():
		{
			var video = '<iframe src="https://player.vimeo.com/video/12589878?title=0&amp;byline=0&amp;portrait=0" width="533" height="300" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe>';
			$('#sketchyplane').html('<h2>Sketchy Plane</h2><div style="float:right">'+video+'</div><p style="width:400px;padding-top:10px">	In this game the player actions are transformed into wind that pushes the paper plane. This one has to avoid the collision with the birds.</br></br>	Playing is easy and fun. You just need to blow over the windmill and depending on the speed of its rotation the wind of the game will go from a light breeze to a hurricane.</br></br>	<font style="color:#F55">Technologies:</font> openFrameworks, Arduino, Pure Data. </br></br>	<font style="color:#F55">Collaborator:</font> Victor Díaz Barrales </br></br>	March 2010</p>')
			break;
		}
		case $('#strangesituation').data():
		{
			var video = '<iframe src="https://player.vimeo.com/video/29211191?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="533" height="300" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe>';
			$('#strangesituation').html('<h2>Strange Situation</h2><div style="float:right">'+video+'</div><p style="width:400px;padding-top:10px">This work is inspired by the video “The Strange Situation” by Mary Ainsworth who work in the development of the "Attachment Theory". </br></br> The situation reveals the behavior of a child attached to his mother. When the mother is present in the room the child is relaxed, and even feels comfortable enough to explore the room around. When suddenly his mother goes away the child starts crying. When she comes back again he chills.</br></br><font style="color:#F55">Technologies:</font> e-puck, Iqr. </br></br><font style="color:#F55">Collaborator:</font> Tamar Regev, Pedro Gouveia, Jens Nirme </br></br>March 2010</p>')
			break;
		}		
	}

}

function deleteHTML(project)
{
	project.html('');
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};


