var canvas;
var appstate=1;
var childName;
var dob;
var vaccines;

function preload() {

  backgroundImg = loadImage("bgimg.jpg");
}

function setup() {

  canvas = createCanvas(1200,800);
  database = firebase.database();


signin=new Signin();
vaccineDetails = new VaccineDetails();
vaccineDetails.getVaccines();



/*const dob=document.getElementById('field2').value;
const date1 = new Date(dob);
var present_date = new Date(); 
const diffTime = Math.abs(present_date - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)-1); 

document.write(diffDays + " days");

  
var dd = String(present_date.getDate()).padStart(2, '0');
var mm = String(present_date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = present_date.getFullYear();

present_date = mm + '/' + dd + '/' + yyyy;*/


}

function draw() {

  background(backgroundImg);

  if(appstate == 1){
    signin.display();
  }

  if(appstate == 2){
    appstate = 3;
    signin.computeDue();
  }
0}
