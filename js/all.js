
function bar_open() {
	document.getElementById("mySidebar1").style.display = "block";
  }
  
  function bar_close() {
	document.getElementById("mySidebar1").style.display = "none";
  }

  
var slide_I1 = 1;
show_slide1(slide_I1);
	
function slide_index_change1(n) {
	show_slide1(slide_I1 += n);
	}

function show_slide1(n) {
	var i;
	
	var x1 = document.getElementsByClassName("story-img1");
	if (n > x1.length) {slide_I1 = 1}
	if (n < 1) {slide_I1 = x1.length}
	for (i = 0; i < x1.length; i++) {
		x1[i].style.display = "none";  
	}
	x1[slide_I1-1].style.display = "block";   
	
	}

var slide_I2 = 1;
show_slide2(slide_I2);
	
function slide_index_change2(n) {
	show_slide2(slide_I2 += n);
	}

function show_slide2(n) {
	var i;
	
	var x1 = document.getElementsByClassName("story-img2");
	if (n > x1.length) {slide_I2 = 1}
	if (n < 1) {slide_I2 = x1.length}
	for (i = 0; i < x1.length; i++) {
		x1[i].style.display = "none";  
	}
	x1[slide_I2-1].style.display = "block";   
	
	}
var slide_I3 = 1;
show_slide3(slide_I3);
	
function slide_index_change3(n) {
	show_slide3(slide_I3 += n);
	}

function show_slide3(n) {
	var i;
	
	var x1 = document.getElementsByClassName("story-img3");
	if (n > x1.length) {slide_I3 = 1}
	if (n < 1) {slide_I3 = x1.length}
	for (i = 0; i < x1.length; i++) {
		x1[i].style.display = "none";  
	}
	x1[slide_I3-1].style.display = "block";   
	
	}
flip_card1();
	
function flip_card1(n){
	var x1 = document.getElementsByClassName("flip-card-front");
	x1[n].style.display = "none";
	var x2 = document.getElementsByClassName("flip-card-back");
	x2[n].style.display = "block";
}
function flip_card2(n){
	var x1 = document.getElementsByClassName("flip-card-front");
	x1[n].style.display = "block";
	var x1 = document.getElementsByClassName("flip-card-back");
	x1[n].style.display = "none";
}