// sidebar.js
// this document has all the JavaScript for my page

var projectsExpanded = true;

var personaldescriptionhtml = '<img src="home/profile.jpg" style="width:100%;" class="w3-round"><br><br>';
personaldescriptionhtml += '<h4 class="w3-padding-0"><b>Cameron Akker</b></h4>';
personaldescriptionhtml += '';
// <p class="w3-text-grey">An engineer by education, a hacker by nature, an inventor by aspiration. Harvard College Class of 2018.</p>

function toggleProjects() {
  if(projectsExpanded == false) {
    projectsExpanded = true;
    document.getElementById("projectshtml").innerHTML = projectshtml;
  } else {
    projectsExpanded = false;
    document.getElementById("projectshtml").innerHTML = "";
  }
}
var projectshtml = '<div style="font-size:10pt; list-style-type:none; margin-left:10px;">';
// electrical engineering projects
projectshtml += '<b style="margin-left:0px;" class="w3-light-grey2"> Electrical Engineering Projects </b>';
projectshtml += '<li><a href="about.html">Electric Car</a></li>';
//projectshtml += '<li><a href="contact.html">MIPS Processor</a></li>';
projectshtml += '<li><a href="contact.html">Stepper Motor Driver</a></li>';
//projectshtml += '<li><a href="contact.html">Arithmatic Logic Unit</a></li>';
projectshtml += '<li><a href="contact.html">8051 Computer</a></li>';
projectshtml += '<li><a href="contact.html">Stoplight</a></li>';
projectshtml += '<li><a href="contact.html">Vortex</a></li>';
// programming projects
projectshtml += '<b style="margin-left:0px;"  class="w3-light-grey2"> Programming Projects </b>';
projectshtml += '<li><a href="resistorboxes.html">FoodSpeak</a></li>';
//projectshtml += '<li><a href="about.html">LightRunner</a></li>';
//projectshtml += '<li><a href="contact.html">Jukebox</a></li>';
// mechanical engineering projects
projectshtml += '<b style="margin-left:0px;" class="w3-light-grey2"> Mechanical Design Projects </b>';
projectshtml += '<li><a href="resistorboxes.html" id="resistorboxes_button">MDF Laser-Cut Resistor Boxes</a></li>';
projectshtml += '<li><a href="knight.html" id="knight_button">Cast-Bismuth Knight Chess Piece</a></li>';
projectshtml += '<li><a href="toolbench.html" id="toolbench_button">Wooden Workbench</a></li>';
projectshtml += '<li><a href="shield.html">Composite Captain America Shield</a></li>';
//projectshtml += '<li><a href="bust.html">3D Scanned Upper Body Bust</a></li>';
//projectshtml += '<li><a href="robotics.html">Robotics</a></li>';
// community projects
projectshtml += '<b style="margin-left:0px;" class="w3-light-grey2"> Community Projects </b>';
projectshtml += '<li><a href="about.html">HackHarvard 2016</a></li>';
//projectshtml += '<li><a href="about.html">Illuminate Global 2016</a></li>';
//projectshtml += '<li><a href="about.html">i-lab Community Nights</a></li>';
//projectshtml += '<li><a href="about.html">HackHarvard 2015</a></li>';
//projectshtml += '<li><a href="contact.html">Trademark Tour Guide</a></li>';
//projectshtml += '<li><a href="about.html">MIT Design for America</a></li>';
projectshtml += '</div>';
