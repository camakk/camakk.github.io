// header.js
// this document has all the JavaScript for my page


var header_projects = '<div class="row" style="padding-top:10px; padding-bottom:5px; padding-left:5px; padding-right:20px">'
    header_projects += '<div class="twelve columns">'
    header_projects += '<a href="../../../index.html" style="text-decoration:none"><h5 style="padding-left:12px; padding-right:15px; padding-top:20px; color:black; display:inline; line-height:38px; text-decoration:none"> <b>Cameron Akker</b></h5></a>'
    header_projects += '<!-- <button class="button-primary" style="float:right; padding-left:5px; padding-right:5px;"> Blog</button> -->'
    header_projects += '<!-- <a href="../../../about.html"><button class="button-primary" style="float:right; padding-left:5px; padding-right:5px;"> About</button></a>-->'
    header_projects += '<a href="../../../index.html"><button class="button-primary" style="float:right; padding-left:8px;  padding-right:8px;"> Back to Projects </button></a>'
    header_projects += '</div></div>'

var header_index = '<div class="row" style="padding-top:10px; padding-bottom:5px; padding-left:5px; padding-right:20px">'
    header_index += '<div class="twelve columns">'
    header_index += '<a href="index.html" style="text-decoration:none"><h5 style="padding-left:12px; padding-right:15px; padding-top:20px; color:black; display:inline; line-height:38px; text-decoration:none"> <b>Cameron Akker</b></h5></a>'
    header_index += '<!-- <button class="button-primary" style="float:right; padding-left:5px; padding-right:5px;"> Blog</button> -->'
    header_index += '<a href="about.html"><button class="button-primary" style="float:right; padding-left:5px; padding-right:5px;"> About</button></a>'
    header_index += '<a href="index.html"><button class="button-primary" style="float:right; padding-left:8px; background-color:#245998; padding-right:8px;"> Projects </button></a>'
    header_index += '</div></div>'

var header_about = '<div class="row" style="padding-top:10px; padding-bottom:5px; padding-left:5px; padding-right:20px">'
    header_about += '<div class="twelve columns">'
    header_about += '<h5 style="padding-left:12px; padding-right:15px; padding-top:15px; color:black; display:inline; line-height:38px"> <b>Cameron Akker</b></h5>'
    header_about += '<!-- <button class="button-primary" style="float:right; padding-left:5px; padding-right:5px;"> Blog</button> -->'
    header_about += '<a href="about.html"><button class="button-primary" style="float:right; padding-left:5px; padding-right:5px; background-color:#245998;"> About</button></a>'
    header_about += '<a href="index.html"><button id="projectsbutton" class="button-primary" style="float:right; padding-left:8px; padding-right:8px;"> Projects </button></a>'
    header_about += '</div></div>'


var footerhtml = '<div class="row">'
    footerhtml += '<div class="six columns">'
    footerhtml += '<p style="color:black; margin:0px; text-align:left; padding-left:15px">© 2013-2017</p></div>'
    footerhtml += '<div class="six columns">'
    footerhtml += '<a href="about.html" style="text-decoration:none; font-size:13pt; padding-right:25px; color:black">About</a>'
    footerhtml += '<a href="https://www.linkedin.com/in/cameronakker"><i class="fa fa-linkedin" style="color:black; padding-right:20px"></i></a>'
    footerhtml += '<a href="https://github.com/camakk"><i class="fa fa-github" style="color:black; padding-right:10px"></i></a></div></div><br>'

var navigationbar = '<div style="font-size:10pt; overflow-x:auto">'
    navigationbar += '<table style="padding:0px; margin:auto; width:90%">'
    navigationbar += '<tr> <td colspan="2" style="text-align:center; background-color:#245998; color:white; margin:0px; padding:0px;">All Projects</td> </tr>'
    navigationbar += '<tr> <td class="navtablesection">Engineering</td> <td class="navtablecontent">'
    navigationbar += '<a href="../../projects/2017-12-wearable-motherboard/2017-12-wearable-motherboard.html" class="navbartext">Wearable Motherboard (2017)</a> • '
    navigationbar += '<a href="../../projects/2017-11-better-blender/2017-11-better-blender.html" class="navbartext">Better Blender (2017)</a> • '
    navigationbar += '<a href="../../projects/2016-12-pcb-milling-machine/2016-12-pcb-milling-machine.html" class="navbartext">PCB Milling Machine (2016)</a> • '
    navigationbar += '<a href="../../projects/2016-07-electric-vehicle/2016-07-electric-vehicle.html" class="navbartext">Electric Vehicle (2016)</a> • '
    navigationbar += '<a href="../../projects/2016-11-stepper-motor-driver/2016-11-stepper-motor-driver.html" class="navbartext">Stepper Motor Driver (2016)</a> • '
    navigationbar += '<a href="../../projects/2016-11-knight-chess-piece/2016-11-knight-chess-piece.html" class="navbartext">Knight Chess Piece (2016)</a> • '

    navigationbar += '<a href="../../projects/2016-10-electronics-workbench/2016-10-electronics-workbench.html" class="navbartext">Electronics Workbench (2016)</a> • '
    navigationbar += '<a href="../../projects/2016-10-captain-america-shield/2016-10-captain-america-shield.html" class="navbartext">Captain America Shield (2016)</a> • '
    navigationbar += '<a href="../../projects/2016-09-stacking-boxes/2016-09-stacking-boxes.html" class="navbartext">Stacking Boxes (2016)</a> • '
    navigationbar += '<a href="../../projects/2015-05-stoplight/2015-05-stoplight.html" class="navbartext">Stoplight (2015)</a> • '

    navigationbar += '<a href="../../projects/2014-12-vortex/2014-12-vortex.html" class="navbartext">Vortex (2014)</a></td> </tr>'

    navigationbar += '<tr> <td class="navtablesection">Events</td> <td class="navtablecontent">'
    navigationbar += '<a href="../../events/2017-10-hackharvard-2017/2017-10-hackharvard-2017.html" class="navbartext">HackHarvard III (2017)</a> • '
    navigationbar += '<a href="../../events/2017-03-coaching-flag-football/2017-03-coaching-flag-football.html" class="navbartext">Coaching Flag Football (2017)</a> • '
    navigationbar += '<a href="../../events/2016-10-hackharvard-2016/2016-10-hackharvard-2016.html" class="navbartext">HackHarvard II (2016)</a> • '
    navigationbar += '<a href="../../events/2015-11-hackharvard-2015/2015-11-hackharvard-2015.html" class="navbartext">HackHarvard I (2015)</a>'
    navigationbar += '</td> </tr>'

    navigationbar += '<tr> <td class="navtablesection">Websites</td> <td class="navtablecontent">'
    navigationbar += '<a href="http://makeharvard.io" class="navbartext">MakeHarvard (http://makeharvard.io)</a> • '
    navigationbar += '<a href="http://hviet.org" class="navbartext">HVIET (http://hviet.org)</a> '
    navigationbar += '</td> </tr></table></div>'
