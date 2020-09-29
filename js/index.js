// Your code goes here

//All Nav Links
//Nav Link 1
const navLink = document.querySelector('.navLink')
//Nav Link 2
const navLink2 = document.querySelector('.navLink:nth-of-type(2)')
//Nav Link 3
const navLink3 = document.querySelector('.navLink:nth-of-type(3)')
//Nav Link 4
const navLink4 = document.querySelector('.navLink:nth-of-type(4)')

//When clicked, nav links will turn Blue

navLink.addEventListener('click',function(event){
    navLink.style.color = 'blue'
})
navLink2.addEventListener('click',function(event){
    navLink2.style.color = 'blue'
})
navLink3.addEventListener('click',function(event){
    navLink3.style.color = 'blue'
})
navLink4.addEventListener('click',function(event){
    navLink4.style.color = 'blue'
})



//When hover, 
navLink.addEventListener('mouseover', function(event){
    navLink.style.fontSize = '20px'
    setTimeout(function(){
        navLink.style.fontSize = '15px';
    },500);
    
   0 })
navLink2.addEventListener('mouseover', function(event){
    navLink2.style.fontSize = '20px'
    setTimeout(function(){
        navLink2.style.fontSize = '15px';
    },500);
    
   0 })

navLink3.addEventListener('mouseover', function(event){
    navLink3.style.fontSize = '20px'
    setTimeout(function(){
        navLink3.style.fontSize = '15px';
    },500);
    
   0 })

navLink4.addEventListener('mouseover', function(event){
    navLink4.style.fontSize = '20px'
    setTimeout(function(){
        navLink4.style.fontSize = '15px';
    },300);
    
   0 })

   //Welcome to Fun Bus section
   const welcomeBus = document.querySelector('.intro h2:nth-of-type(2)')
   //When double clicked, title grows with animation
   welcomeBus.addEventListener('dblclick', function(event){
       welcomeBus.style.fontSize = '60px'
       welcomeBus.style.transition = 'font-size 2s'
   })

   //Welcome Bus Paragrapgh
   const welcomeP = document.querySelector('.intro p')
   //Double clicked, P grows with animation
   welcomeP.addEventListener('dblclick', function(event){
    welcomeP.style.fontSize = '20px'
    welcomeP.style.transition = 'font-size 2s'
})

   //Double click me section
   const welcomeP1 = document.querySelector('.intro h2')
   //Double clicked, h2(dbl click) grows with animation
   welcomeP1.addEventListener('dblclick', function(event){
    welcomeP1.style.fontSize = '40px'
    welcomeP1.style.transition = 'font-size 2s'
    welcomeP1.style.color = 'red'
})
//Lets Go Hover title
const letsGoSection = document.querySelector('#content1 h2')
//Hover color to red
letsGoSection.addEventListener('mouseover', function(event){
    letsGoSection.style.color = 'red'
    setTimeout(function(){
        letsGoSection.style.color = 'black';
    },300);
    
   0})

   //Lets Go  title
const letsGoSectionH2 = document.querySelector('#content1 h2:nth-of-type(2)')
//Hover color to red
letsGoSectionH2.addEventListener('mouseover', function(event){
    letsGoSectionH2.style.color = 'red'
    setTimeout(function(){
        letsGoSectionH2.style.color = 'black';
    },300);
    
   0})

   //Lets go section P
const letsGoSectionP = document.querySelector('#content1 p')
//Hover color to red
letsGoSectionP.addEventListener('mouseover', function(event){
    letsGoSectionP.style.color = 'red'
    setTimeout(function(){
        letsGoSectionP.style.color = 'black';
    },300);
    
   0})

      //Lets go section P
const letsGoSectionP2 = document.querySelector('#content1 p:nth-of-type(2)')
//Hover color to red
letsGoSectionP2.addEventListener('mouseover', function(event){
    letsGoSectionP2.style.color = 'red'
    setTimeout(function(){
        letsGoSectionP2.style.color = 'black';
    },300);
    
   0})


   //Adventure awaits section

    //Adventure Title
    const adventureH2 = document.querySelector('#adventureContent h2')
    //Hover to red
    adventureH2.addEventListener('mouseover', function(event){
        adventureH2.style.color = 'red'
        setTimeout(function(){
            adventureH2.style.color = 'black';
        },300);
        
       0})

        //Adventure P
    const adventureP1 = document.querySelector('#adventureContent p')
    //Hover to red
    adventureP1.addEventListener('mouseover', function(event){
        adventureP1.style.color = 'red'
        setTimeout(function(){
            adventureP1.style.color = 'black';
        },300);
        
       0})

               //Adventure P2
    const adventureP2 = document.querySelector('#adventureContent p:nth-of-type(2)')
    //Hover to red
    adventureP2.addEventListener('mouseover', function(event){
        adventureP2.style.color = 'red'
        setTimeout(function(){
            adventureP2.style.color = 'black';
        },300);
        
       0})


       //Pick your destination section
       const pickH2 = document.querySelector('.content-destination h2')
       // Text change on hover
       pickH2.addEventListener('mouseover', function(event){
           pickH2.textContent = 'Pick The Best Destination For You'
           pickH2.style.fontSize = '35px'
           setTimeout(function(){
           
        },300);
        
       0})


           //Destination Paragraph
            const pickP1 = document.querySelector('.content-destination p')
            // Text change on hover
            pickP1.addEventListener('mouseover', function(event){
                pickP1.style.fontSize = '18px'
                pickP1.style.color = 'red'
                setTimeout(function(){
                    pickP1.style.color = 'black';
             },300);
             
            0})

          // init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    duration: 100, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#main-navigation') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
    
  
  


