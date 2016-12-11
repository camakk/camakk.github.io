// projects.js
// this document has all the JavaScript for my page

var projectsExpanded = true;
var filters = {all:true, ee:false, pr:false, me:false, cm:false}
var page = 1;


function toggleProjects() {
  if(projectsExpanded == false) {
    projectsExpanded = true;
    document.getElementById("projectshtml").innerHTML = projectshtml;
  } else {
    projectsExpanded = false;
    document.getElementById("projectshtml").innerHTML = "";
  }
}

function updatefilter(filter) {
  filters.all = false;
  filters.ee = false;
  filters.pr = false;
  filters.me = false;
  filters.cm = false;
  $("#filter-all").addClass("w3-white");
  $("#filter-ee").addClass("w3-white");
  $("#filter-pr").addClass("w3-white");
  $("#filter-me").addClass("w3-white");
  $("#filter-cm").addClass("w3-white");
  switch(filter) {
    case "all":
      filters.all = true;
      $("#filter-all").removeClass("w3-white");
      break;
    case "ee":
      filters.ee = true;
      $("#filter-ee").removeClass("w3-white");
      break;
    case "pr":
      filters.pr = true;
      $("#filter-pr").removeClass("w3-white");
      break;
    case "me":
      filters.me = true;
      $("#filter-me").removeClass("w3-white");
      break;
    case "cm":
      filters.cm = true;
      $("#filter-cm").removeClass("w3-white");
      break;
    default:
      break;


  }
}
function updatePage(pagenum) {
  page = pagenum;
  $("#page1class").removeClass("w3-black");
  $("#page1class").addClass("w3-hover-black");
  $("#page2class").removeClass("w3-black");
  $("#page2class").addClass("w3-hover-black");
  $("#page3class").removeClass("w3-black");
  $("#page3class").addClass("w3-hover-black");
  $("#page4class").removeClass("w3-black");
  $("#page4class").addClass("w3-hover-black");
  switch(pagenum) {
    case 1:
      $("#page1class").addClass("w3-black");
      $("#page1class").removeClass("w3-hover-black");
      break;
    case 2:
      $("#page2class").addClass("w3-black");
      $("#page2class").removeClass("w3-hover-black");
      break;
    case 3:
      $("#page3class").addClass("w3-black");
      $("#page3class").removeClass("w3-hover-black");
      break;
    case 4:
      $("#page4class").addClass("w3-black");
      $("#page4class").removeClass("w3-hover-black");
      break;
    default:
      break;
  }
}

function load_hackharvard2016(slot) {
      $("#box" + slot).attr("href", "about.html");
      $("#img" + slot).attr("src","home/hackharvard2016.jpg");
      $("#img" + slot).attr("alt","hackharvard2016");
      $("#title" + slot).html("<b> Director of HackHarvard 2016</b>");
      $("#description" + slot).html("Directing a 550-person hackathon, the largest at Harvard University and second ever HackHarvard event, held from Oct 21-23, 2016");
}
function load_custompcb(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/pcb.jpg");
    $("#img" + slot).attr("alt","PCB");
    $("#title" + slot).html("<b>Embedded programming with Attiny44</b>");
    $("#description" + slot).html("Designing board in Eagle, milling copper laminate PCB with ShopBot, soldering on all components, programming with avrdude");
}
function load_hrexi(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/fpga.jpg");
    $("#img" + slot).attr("alt","FPGA");
    $("#title" + slot).html("<b>FPGA Programming on Virtex-II for HREXI</b>");
    $("#description" + slot).html("Programming in Verilog/VHDL to implement data buffering hardware as part of lab at the Harvard-Smithsonian Center for Astrophysics");
}
function load_hackharvard2015(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/hackharvard2015.jpg");
    $("#title" + slot).html("<b>Organizer of HackHarvard 2015</b>");
    $("#description" + slot).html("Organizing a 500-person hackathon, the largest at Harvard University and first ever HackHarvard event, held from Nov 13-15, 2015");
}
function load_tf(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/tf.jpg");
    $("#img" + slot).attr("alt","teaching");
    $("#title" + slot).html("<b>Teaching Fellow at Harvard University</b>");
    $("#description" + slot).html("Assisted in teaching over 100 students in introductory (ENG-SCI 50) and second-year (ENG-SCI 153) electrical engineering courses");
}
function load_electriccar(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/electriccar.jpg");
    $("#img" + slot).attr("alt","electric_car");
    $("#title" + slot).html("<b>Custom Designed Personal Electric Vehicle</b>");
    $("#description" + slot).html("Worked alongside students at the Hong Kong University of Science and Technology (HKUST) to design and build an personal electric vehicle");
}
function load_foodspeak(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/foodspeak.jpg");
    $("#img" + slot).attr("alt","foodspeak");
    $("#title" + slot).html("<b>Developing a Custom Personal Electric Vehicle</b>");
    $("#description" + slot).html("lol");
}
function load_tourguide(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/tourguide.jpg");
    $("#img" + slot).attr("alt","tour guide");
    $("#title" + slot).html("<b>Tour guide at Harvard University</b>");
    $("#description" + slot).html("Lead walking tours through Harvard University during the summer of 2015 as a tour guide employed by Trademark Tours");
}
function load_resistorboxes(slot) {
    $("#box" + slot).attr("href", "resistorboxes.html");
    $("#img" + slot).attr("src","home/resistorboxes.jpg");
    $("#img" + slot).attr("alt","resistor box");
    $("#title" + slot).html("<b>Custom Resistor Storage Boxes</b>");
    $("#description" + slot).html("Designed in Autodesk Inventor and CorelDRAW, these resistor boxes are for stocking resistors on an electronics toolbench");
}

function load_all(pagenum) {
  switch(pagenum) {
    case 1:
      updatePage(1);
      load_hackharvard2016(1);
      load_custompcb(2);
      load_tf(3);
      load_hrexi(4);
      load_electriccar(5);
      load_tourguide(6);
      break;
    case 2:
      updatePage(2);
      load_hackharvard2016(6);
      load_custompcb(5);
      load_tf(4);
      load_hrexi(3);
      load_electriccar(2);
      load_resistorboxes(1);
      break;
    case 3:
      updatePage(3);
      load_hackharvard2016(1);
      load_custompcb(2);
      load_tf(3);
      load_hrexi(4);
      load_electriccar(5);
      load_tourguide(6);
      break;
    case 4:
      updatePage(4);
      load_hackharvard2016(6);
      load_custompcb(5);
      load_tf(4);
      load_hrexi(3);
      load_electriccar(2);
      load_tourguide(1);
      break;
  }
}

var personaldescription = 'An engineer by education, a hacker by nature, an inventor by aspiration. Harvard College Class of 2018.';


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
projectshtml += '<li><a href="resistorboxes.html" id="resistorboxes_projectshtml">MDF Laser-Cut Resistor Boxes</a></li>';
projectshtml += '<li><a href="knight.html" id="knight_projectshtml">Cast-Bismuth Knight Chess Piece</a></li>';
projectshtml += '<li><a href="toolbench.html" id="toolbench_projectshtml">Wooden Workbench</a></li>';
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
