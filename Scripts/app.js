"use strict";

// IIFE - immediatly invoked function expression
// means -> anonymous self-executing function
(function(){
    //IIFE scope
    let h2;


    function MouseOver()
    {
        //Mouse Over scope
        h2.style.color = "blue";
        h2.style.fontWeight = "bold";
        h2.textContent = "Mouse Over";
    }

    function MouseOut()
    {
        h2.style.color = "black";
        h2.style.fontWeight = "normal";
        h2.textContent = "Yo Bro Come Back";
    }


    function Start()
    {
        //Start Scope
        console.log("%cApp started", "color: blue; font-size: 50px");
        let mainContent = document.getElementById("mainContent");

        //create a new h2 tag with a class of display-2 and some text
        h2 = document.createElement("h2");
        h2.setAttribute("class","Display-2");
        h2.textContent = "My text content";
        mainContent.appendChild(h2);

        //event listeners
        h2.addEventListener("mouseover", MouseOver);

        h2.addEventListener("mouseout", MouseOut);


        let brand = document.getElementsByClassName("navbar-brand")[0];
        brand.textContent ="Client Side Scripting";
    }


    window.addEventListener("load", Start);
})();