// projects.js
// this document has all the JavaScript for the projects page


var filters = {all:true, ee:false, pr:false, me:false, cm:false}
var page = 1;

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
  $(".page1class").removeClass("w3-black");
  $(".page1class").addClass("w3-hover-black");
  $(".page2class").removeClass("w3-black");
  $(".page2class").addClass("w3-hover-black");
  $(".page3class").removeClass("w3-black");
  $(".page3class").addClass("w3-hover-black");
  $(".page4class").removeClass("w3-black");
  $(".page4class").addClass("w3-hover-black");
  switch(pagenum) {
    case 1:
      $(".page1class").addClass("w3-black");
      $(".page1class").removeClass("w3-hover-black");
      break;
    case 2:
      $(".page2class").addClass("w3-black");
      $(".page2class").removeClass("w3-hover-black");
      break;
    case 3:
      $(".page3class").addClass("w3-black");
      $(".page3class").removeClass("w3-hover-black");
      break;
    case 4:
      $(".page4class").addClass("w3-black");
      $(".page4class").removeClass("w3-hover-black");
      break;
    default:
      break;
  }
}


function load_tourguide(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/tourguide.jpg");
    $("#img" + slot).attr("alt","tour guide");
    $("#title" + slot).html("<b>Tour guide at Harvard University</b>");
    $("#description" + slot).html("Lead walking tours through Harvard University during the summer of 2015 as a tour guide employed by Trademark Tours");
}
function load_custompcb(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/pcb.jpg");
    $("#img" + slot).attr("alt","PCB");
    $("#title" + slot).html("<b>Embedded programming with Attiny44</b>");
    $("#description" + slot).html("Designing board in Eagle, milling copper laminate PCB with ShopBot, soldering on all components, programming with avrdude");
}
function load_tf(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/tf.jpg");
    $("#img" + slot).attr("alt","teaching");
    $("#title" + slot).html("<b>Teaching Fellow at Harvard University</b>");
    $("#description" + slot).html("Assisted in teaching over 100 students in introductory (ENG-SCI 50) and second-year (ENG-SCI 153) electrical engineering courses");
}
function load_hackharvard2015(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/hackharvard2015.jpg");
    $("#title" + slot).html("<b>Organizer of HackHarvard 2015</b>");
    $("#description" + slot).html("Organizing a 500-person hackathon, the largest at Harvard University and first ever HackHarvard event, held from Nov 13-15, 2015");
}
function load_foodspeak(slot) {
    $("#box" + slot).attr("href", "about.html");
    $("#img" + slot).attr("src","home/foodspeak.jpg");
    $("#img" + slot).attr("alt","foodspeak");
    $("#title" + slot).html("<b>Developing a Custom Personal Electric Vehicle</b>");
    $("#description" + slot).html("lol");
}

function load_none(slot) {
      $("#box" + slot).attr("href", "");
      $("#img" + slot).attr("src","");
      $("#img" + slot).attr("alt","");
      $("#title" + slot).html("<b></b>");
      $("#description" + slot).html("");
}

function load_coaching(slot) {
      $("#box" + slot).attr("href", "pj_coaching.html");
      $("#img" + slot).attr("src","home/coaching.jpg");
      $("#img" + slot).attr("alt","coaching");
      $("#title" + slot).html("<b> Coaching a Flag Football Team</b>");
      $("#description" + slot).html("Volunteering as head coach of a 12-13 year old youth flag football team in the Cal Youth Flag Football league during the Spring of 2017");
}
function load_hackharvard2016(slot) {
      $("#box" + slot).attr("href", "pj_hackharvard2016.html");
      $("#img" + slot).attr("src","home/hackharvard2016.jpg");
      $("#img" + slot).attr("alt","hackharvard2016");
      $("#title" + slot).html("<b> Director of HackHarvard 2016</b>");
      $("#description" + slot).html("Directing a 550-person hackathon, the largest at Harvard University and second ever HackHarvard event, held from Oct 21-23, 2016");
}
function load_hrexi(slot) {
    $("#box" + slot).attr("href", "pj_misc_electronics.html");
    $("#img" + slot).attr("src","home/fpga.jpg");
    $("#img" + slot).attr("alt","FPGA");
    $("#title" + slot).html("<b>FPGA Programming on Virtex-II</b>");
    $("#description" + slot).html("Programming in Verilog/VHDL to implement data buffering hardware as part of lab at the Harvard-Smithsonian Center for Astrophysics");
}
function load_electriccar(slot) {
    $("#box" + slot).attr("href", "pj_electriccar.html");
    $("#img" + slot).attr("src","home/electriccar.jpg");
    $("#img" + slot).attr("alt","electric_car");
    $("#title" + slot).html("<b>Custom Personal Electric Vehicle</b>");
    $("#description" + slot).html("Worked alongside students at the Hong Kong University of Science and Technology (HKUST) to design and build an personal electric vehicle");
}
function load_resistorboxes(slot) {
    $("#box" + slot).attr("href", "pj_resistorboxes.html");
    $("#img" + slot).attr("src","home/resistorboxes.jpg");
    $("#img" + slot).attr("alt","resistor box");
    $("#title" + slot).html("<b>Custom Resistor Storage Boxes</b>");
    $("#description" + slot).html("Designed in Autodesk Inventor and CorelDRAW, these resistor boxes are for stocking resistors on an electronics toolbench");
}
function load_millingmachine(slot) {
    $("#box" + slot).attr("href", "pj_millingmachine.html");
    $("#img" + slot).attr("src","home/millingmachine.jpg");
    $("#img" + slot).attr("alt","milling machine");
    $("#title" + slot).html("<b>DIY 3-Axis Milling Machine</b>");
    $("#description" + slot).html("With a laser-cut MDF construction and three stepper motors, this milling machine is primarily used for cutting PCBs");
}
function load_knight(slot) {
    $("#box" + slot).attr("href", "pj_knight.html");
    $("#img" + slot).attr("src","home/knight.jpg");
    $("#img" + slot).attr("alt","casted knight");
    $("#title" + slot).html("<b>Casted Knight Chess Piece</b>");
    $("#description" + slot).html("Designed in Autodesk Inventor, a mold milled using Partworks 3D and a Shopbot, a cast-bismuth piece poured into an Oomoo mold");
}
function load_shield(slot) {
    $("#box" + slot).attr("href", "pj_shield.html");
    $("#img" + slot).attr("src","home/shield.jpg");
    $("#img" + slot).attr("alt","shield");
    $("#title" + slot).html("<b>Composite Captain America Shield</b>");
    $("#description" + slot).html("Designed in Solidworks, this shield was milled from foam then fabricated by applying burlap and epoxy to the surface to create a composite");
}
function load_stoplight(slot) {
    $("#box" + slot).attr("href", "pj_misc_electronics.html#stoplight");
    $("#img" + slot).attr("src","./home/stoplight.jpg");
    $("#img" + slot).attr("alt","stoplight");
    $("#title" + slot).html("<b>Discrete Programmable Stoplight</b>");
    $("#description" + slot).html("Built solely using discrete electronic components (no microcontroller) this stoplight allows the user to program light times");
}
function load_steppermotordriver(slot) {
    $("#box" + slot).attr("href", "pj_steppermotordriver.html");
    $("#img" + slot).attr("src","./home/steppermotordriver.jpg");
    $("#img" + slot).attr("alt","stepper motor driver");
    $("#title" + slot).html("<b>Stepper Motor Driver</b>");
    $("#description" + slot).html("Bipolar stepper motor driver circuit board designed using H-bridges and fabricated by milling copper laminate board on a Shopbot");
}
function load_vortex(slot) {
    $("#box" + slot).attr("href", "pj_vortex.html");
    $("#img" + slot).attr("src","./home/vortex.jpg");
    $("#img" + slot).attr("alt","vortex arcade game");
    $("#title" + slot).html("<b>Vortex Arcade Game</b>");
    $("#description" + slot).html("Fully digital remake of the classic arcade game Vortex using LEDs and custom designed and laser-cut acrylic frame");
}
function load_toolbench(slot) {
    $("#box" + slot).attr("href", "pj_toolbench.html");
    $("#img" + slot).attr("src","./home/toolbench.jpg");
    $("#img" + slot).attr("alt","toolbench");
    $("#title" + slot).html("<b>Custom Light-Duty Electronics Workbench</b>");
    $("#description" + slot).html("Light-Duty electronics workbench with custom milled component storage area, intended for soldering and other light electronics use");
}

function load_all(pagenum) {
  switch(pagenum) {
    case 1:
      updatePage(1);
      load_hackharvard2016(1);
      load_millingmachine(2);
      load_electriccar(3);
      load_resistorboxes(4);
      load_hrexi(5);
      load_coaching(6);
      //load_tourguide(6);
      break;
    case 2:
      updatePage(2);
      load_stoplight(1);
      load_steppermotordriver(2);
      load_shield(3);
      load_knight(4);
      load_toolbench(5);
      load_vortex(6);
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
