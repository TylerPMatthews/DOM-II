//grab all of the nav links
const navLink1 = document.querySelector("nav a");
const navLink2 = document.querySelector("nav a:nth-of-type(2)");
const navLink3 = document.querySelector("nav a:nth-of-type(3)");
const navLink4 = document.querySelector("nav a:nth-of-type(4)");
const navLinks = document.querySelector(".nav");

//Add event listeners to the Nav links

navLink1.addEventListener("click", function (event) {
  navLink1.style.color = "blue";
  navLink1.style.fontSize = "2rem";
});
navLink1.addEventListener("dblclick", function (event) {
  navLink1.style.color = "black";
  navLink1.style.fontSize = "1.5rem";
});
navLink2.addEventListener("click", function (event) {
  navLink2.style.color = "blue";
  navLink2.style.fontSize = "2rem";
});
navLink2.addEventListener("dblclick", function (event) {
  navLink2.style.color = "black";
  navLink2.style.fontSize = "1.5rem";
});
navLink3.addEventListener("click", function (event) {
  navLink3.style.color = "blue";
  navLink3.style.fontSize = "2rem";
});
navLink3.addEventListener("dblclick", function (event) {
  navLink3.style.color = "black";
  navLink3.style.fontSize = "1.5rem";
});
navLink4.addEventListener("click", function (event) {
  navLink4.style.color = "blue";
  navLink4.style.fontSize = "2rem";
});
navLink4.addEventListener("dblclick", function (event) {
  navLink4.style.color = "black";
  navLink4.style.fontSize = "1.5rem";
});

//grab the bus image
const busImage = document.querySelector("img");

//Add event listener to make image dark or light based on mouse event
busImage.addEventListener("mouseenter", function (event) {
  busImage.style.filter = "brightness(75%)";
});
busImage.addEventListener("mouseleave", function (event) {
  busImage.style.filter = "brightness(100%)";
});

//grab the nav
const myHeader = document.querySelector("header");
//header chnages to red on click
myHeader.addEventListener("click", function (event) {
  myHeader.style.backgroundColor = "red";
});
//dbl click reset
myHeader.addEventListener("dblclick", function (event) {
  myHeader.style.backgroundColor = "white";
});

//Add a button to the Nav that helps with the website changing clicks
const helpNav = document.createElement("a");
helpNav.textContent = "Help";
helpNav.setAttribute("href", "#");
navLinks.appendChild(helpNav);

//Set help nav click functions
helpNav.addEventListener("click", function (event) {
  helpNav.style.color = "blue";
  helpNav.style.fontSize = "2rem";
});
helpNav.addEventListener("dblclick", function (event) {
  helpNav.style.color = "black";
  helpNav.style.fontSize = "1.5rem";
});
//Help nav popup mouse hover click
helpNav.addEventListener("mouseenter", function (event) {
  window.alert("One click = chnage  Double Click = reverse");
});

//Grab welcome to fun bus title
const wFunBus = document.querySelector("header h2");
//on click change font size with trnasition
wFunBus.addEventListener("click", function (event) {
  wFunBus.style.fontSize = "5rem";
  wFunBus.style.transition = "3s";
  wFunBus.style.color = "red";
  wFunBus.style.textAlign = "center";
});
//Reverse
wFunBus.addEventListener("dblclick", function (event) {
  wFunBus.style.fontSize = "3.2rem";
  wFunBus.style.transition = "3s";
  wFunBus.style.color = "black";
  wFunBus.style.textAlign = "left";
});

//grab header P
const headerP = document.querySelector("header p");
//header P chnages color on click w transition
headerP.addEventListener("click", function (event) {
  headerP.style.color = "blue";
  headerP.style.transition = "5s";
  headerP.style.textAlign = "center";
});
//reverse
headerP.addEventListener("dblclick", function (event) {
  headerP.style.color = "black";
  headerP.style.transition = "5s";
  headerP.style.textAlign = "left";
});
//Grab the lets go title
const letsGo = document.querySelector(".content-section h2");
//on click change font size with trnasition
letsGo.addEventListener("click", function (event) {
  letsGo.style.fontSize = "5rem";
  letsGo.style.transition = "3s";
  letsGo.style.color = "red";
  letsGo.style.textAlign = "center";
});
//Reverse
letsGo.addEventListener("dblclick", function (event) {
  letsGo.style.fontSize = "3.2rem";
  letsGo.style.transition = "3s";
  letsGo.style.color = "black";
  letsGo.style.textAlign = "left";
});
//grab Lets go P
const letsGoP = document.querySelector(".content-section p");
//change color on click
letsGoP.addEventListener("click", function (event) {
  letsGoP.style.color = "blue";
  letsGoP.style.transition = "5s";
  letsGoP.style.textAlign = "center";
});
//reverse
letsGoP.addEventListener("dblclick", function (event) {
  letsGoP.style.color = "black";
  letsGoP.style.transition = "5s";
  letsGoP.style.textAlign = "left";
});
//grab next letsGo P
const letsGoP2 = document.querySelector(".text-content p:nth-of-type(2)");
//change color on click
letsGoP2.addEventListener("click", function (event) {
  letsGoP2.style.color = "blue";
  letsGoP2.style.textAlign = "center";
  letsGoP2.style.transition = "5s";
});
//reverse
letsGoP2.addEventListener("dblclick", function (event) {
  letsGoP2.style.color = "black";
  letsGoP2.style.transition = "5s";
  letsGoP2.style.textAlign = "left";
});
//Grab map looking image
const mapImg = document.querySelector(".img-content img");
mapImg.addEventListener("mouseenter", function (event) {
  mapImg.style.filter = "brightness(75%)";
});
//reverse
mapImg.addEventListener("mouseleave", function (event) {
  mapImg.style.filter = "brightness(100%)";
});
//grab Adventure awaits title
const adventureAwaitsTitle = document.querySelector(
  ".text-content:nth-of-type(2) h2"
);
adventureAwaitsTitle.addEventListener("click", function (event) {
  adventureAwaitsTitle.style.fontSize = "5rem";
  adventureAwaitsTitle.style.transition = "3s";
  adventureAwaitsTitle.style.color = "red";
  adventureAwaitsTitle.style.textAlign = "center";
});
//reverse
adventureAwaitsTitle.addEventListener("dblclick", function (event) {
  adventureAwaitsTitle.style.color = "black";
  adventureAwaitsTitle.style.transition = "5s";
  adventureAwaitsTitle.style.textAlign = "left";
  adventureAwaitsTitle.style.fontSize = "3.2rem";
});
//grab the adventure awaits P
const adventureP = document.querySelector(".text-content:nth-of-type(2) p");
adventureP.addEventListener("click", function (event) {
  adventureP.style.color = "blue";
  adventureP.style.transition = "5s";
  adventureP.style.textAlign = "center";
});
//reverse
adventureP.addEventListener("dblclick", function (event) {
  adventureP.style.color = "black";
  adventureP.style.transition = "5s";
  adventureP.style.textAlign = "left";
});

//grab the adventure awaits P2
const adventureP2 = document.querySelector(
  ".text-content:nth-of-type(2) p:nth-of-type(2)"
);
adventureP2.addEventListener("click", function (event) {
  adventureP2.style.color = "blue";
  adventureP2.style.transition = "5s";
  adventureP2.style.textAlign = "center";
});
//reverse
adventureP2.addEventListener("dblclick", function (event) {
  adventureP2.style.color = "black";
  adventureP2.style.transition = "5s";
  adventureP2.style.textAlign = "left";
});

const boatImg = document.querySelector(".img-fluid");
boatImg.addEventListener("mouseenter", function (event) {
  boatImg.style.filter = "brightness(75%)";
});
//reverse
boatImg.addEventListener("mouseleave", function (event) {
  boatImg.style.filter = "brightness(100%)";
});

//grab the pick your destination title
const destinationTitle = document.querySelector(".content-destination h2");

destinationTitle.addEventListener("click", function (event) {
  destinationTitle.style.fontSize = "5rem";
  destinationTitle.style.transition = "3s";
  destinationTitle.style.color = "red";
  destinationTitle.style.textAlign = "center";
});
//Reverse
destinationTitle.addEventListener("dblclick", function (event) {
  destinationTitle.style.fontSize = "3.2rem";
  destinationTitle.style.transition = "3s";
  destinationTitle.style.color = "black";
  destinationTitle.style.textAlign = "left";
});

//grab the destination P
const destinationP = document.querySelector(".content-destination p");
destinationP.addEventListener("click", function (event) {
  destinationP.style.color = "blue";
  destinationP.style.transition = "5s";
  destinationP.style.textAlign = "center";
});
//reverse
destinationP.addEventListener("dblclick", function (event) {
  destinationP.style.color = "black";
  destinationP.style.transition = "5s";
  destinationP.style.textAlign = "left";
});
//grab the distination image
const destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener("mouseenter", function (event) {
  destinationImg.style.filter = "brightness(75%)";
});
//reverse
destinationImg.addEventListener("mouseleave", function (event) {
  destinationImg.style.filter = "brightness(100%)";
});

//grab fun in the sun title
const funInTheSun = document.querySelector(".destination h4");
funInTheSun.addEventListener("click", function (event) {
  funInTheSun.style.fontSize = "3.5rem";
  funInTheSun.style.transition = "3s";
  funInTheSun.style.color = "red";
  funInTheSun.style.textAlign = "center";
});
//Reverse
funInTheSun.addEventListener("dblclick", function (event) {
  funInTheSun.style.fontSize = "2.5rem";
  funInTheSun.style.transition = "3s";
  funInTheSun.style.color = "black";
  funInTheSun.style.textAlign = "left";
});
//grab fun in the sun P
const funInTheSunP = document.querySelector(".destination p");
funInTheSunP.addEventListener("click", function (event) {
  funInTheSunP.style.color = "blue";
  funInTheSunP.style.transition = "5s";
  funInTheSunP.style.textAlign = "center";
});
//reverse
funInTheSunP.addEventListener("dblclick", function (event) {
  funInTheSunP.style.color = "black";
  funInTheSunP.style.transition = "5s";
  funInTheSunP.style.textAlign = "left";
});

//grab Mountain Excursion title
const mountainEx = document.querySelector(".destination:nth-of-type(2) h4");
mountainEx.addEventListener("click", function (event) {
  mountainEx.style.fontSize = "3.5rem";
  mountainEx.style.transition = "3s";
  mountainEx.style.color = "red";
  mountainEx.style.textAlign = "center";
});
//Reverse
mountainEx.addEventListener("dblclick", function (event) {
  mountainEx.style.fontSize = "2.5rem";
  mountainEx.style.transition = "3s";
  mountainEx.style.color = "black";
  mountainEx.style.textAlign = "left";
});
//grab fun in the sun P
const mountainExP = document.querySelector(".destination:nth-of-type(2) p");
mountainExP.addEventListener("click", function (event) {
  mountainExP.style.color = "blue";
  mountainExP.style.transition = "5s";
  mountainExP.style.textAlign = "center";
});
//reverse
mountainExP.addEventListener("dblclick", function (event) {
  mountainExP.style.color = "black";
  mountainExP.style.transition = "5s";
  mountainExP.style.textAlign = "left";
});

//grab Island Getaway title
const islandGetaway = document.querySelector(".destination:nth-of-type(3) h4");
islandGetaway.addEventListener("click", function (event) {
  islandGetaway.style.fontSize = "3.5rem";
  islandGetaway.style.transition = "3s";
  islandGetaway.style.color = "red";
  islandGetaway.style.textAlign = "center";
});
//Reverse
islandGetaway.addEventListener("dblclick", function (event) {
  islandGetaway.style.fontSize = "2.5rem";
  islandGetaway.style.transition = "3s";
  islandGetaway.style.color = "black";
  islandGetaway.style.textAlign = "left";
});
//grab Island getaway P
const islandGetawayP = document.querySelector(".destination:nth-of-type(3) p");
islandGetawayP.addEventListener("click", function (event) {
  islandGetawayP.style.color = "blue";
  islandGetawayP.style.transition = "5s";
  islandGetawayP.style.textAlign = "center";
});
//reverse
islandGetawayP.addEventListener("dblclick", function (event) {
  islandGetawayP.style.color = "black";
  islandGetawayP.style.transition = "5s";
  islandGetawayP.style.textAlign = "left";
});
//grab the footer
const myFooter = document.querySelector("footer");
myFooter.addEventListener("click", function (event) {
  myFooter.style.backgroundColor = "red";
});
//grab footer text
const myFooterP = document.querySelector("footer p");
myFooterP.addEventListener("click", function (event) {
  myFooterP.style.color = "blue";
});
//reverse
myFooter.addEventListener("dblclick", function (event) {
  myFooter.style.backgroundColor = "white";
});

myFooterP.addEventListener("dblclick", function (event) {
  myFooterP.style.color = "black";
});
