// document.addEventListener('DOMContentLoaded',function(){

//USUALLY USED TO FIX TYPE ERRORS SO I USED IT TO START MY JS PAGE 
// document.addEventListener('DOMContentLoaded',function(){

// })

//CODES WITH EVENTS IN JS SHOULD BE PLACED IN THE ABOVE EVENT LISTENER,, DON'T IF  EVENT IS  EMBEDDED  IN YOUR HTML


function hello(){
    alert("this is the onclick");
}

// A COUNTER 
let counter = 0;

function count(){
    counter++;
    alert(counter);
} 




// QUERY SELECTORS
function selectors(){
    document.querySelector("h1").innerHTML = "We've manipulated the h1 with a query selector"
}


let counter1 = 0; 

function count1(){
    counter1++;
    document.querySelector("h3").innerHTML = counter1;

    if(counter1 % 10 === 0 ){
        alert(`Count is ${counter1}`);   //Display the value of a variable in a string with a backtick `${variable}`
    }
} 


// CONDITIONS 
function selectors2(){
    if (document.querySelector("h2").innerHTML === "Conditions with QS example"){
        document.querySelector("h2").innerHTML = "We've manipulated the h2 with a new query selector"
    }
    else {
        document.querySelector("h2").innerHTML = "Conditions with QS example"
    }
}   

// Making the above code  simpler with variables
function selectors2(){
    let heading = document.querySelector("h2");
    if (heading.innerHTML === "Conditions with QS example"){
        heading.innerHTML = "We've manipulated the h2 with a new query selector";
    }
    else {
        heading.innerHTML = "Conditions with QS example";
    }
}   




// -------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded',function(){



// EVENT LISTENERS / HANDLERS
// document.querySelector("button").onclick = count1;
// or document.querySelector("button").addEventListener("click",count1);






function name10(){
    let name = document.querySelector('#name').value;
    alert(`hello, ${name}!`);
    };
    
    document.querySelector("form").onsubmit = name10;
    
    
    // if you're not going to call the function again you can nest it in the event
    document.querySelector("#r").onclick = function(){
    document.querySelector('#high').style.color = 'red';
    };
    
    document.querySelector("#g").onclick = function(){
        document.querySelector("#high").style.color = "green";
    }
    document.querySelector("#b").onclick = function(){
        document.querySelector("#high").style.color = "blue";
    }
    
    
    
    //DATA ATTRIBUTES & QUERY SELECTOR ALL
    document.querySelectorAll("button").forEach(function(button){
        button.onclick = function(){
            document.querySelector("#high1").style.color = button.dataset.color;
        }
    
    });
    
    
    //EVENT LISTENERS ---  ONCHANGE 
    // onchange is similalr to onclick but this is used for selectors or dropdowns
    // this.value  is used to display the explicit value for the tag in the html
    document.querySelector("select").onchange = function(){
        document.querySelector("#high2").style.color = this.value ;
    }
    
        

// A FORM WITH INPUT , VALIDATING
document.querySelector("#submit").disabled  = true;         // This  disables the submit button

document.querySelector("#task").onkeyup = function(){       //After hitting  a  key and releasing, a function is passed     where  the submit button  is  enabled
    if  (document.querySelector("#task").value.length >  0){   //on a condition  where if the length of the input is > 0 
        document.querySelector("#submit").disabled = false;     // it returns false 
    }
    else{
        document.querySelector("#submit").disabled = true;      //and if not returns true
    }
   
}

document.querySelector("form").onsubmit = function(){       //select a form, when it it submitted create a function
    const task = document.querySelector("#task").value;      // that takes value of the input with id #task and assigns it to a constant
    const li = document.createElement("li");                 // create a new element (li) and assigns it to a constant
    li.innerHTML = task;                                     // the innerHtml of the new element should be equal to the value of the input 
    document.querySelector("#tasks").append(li);              //Now append the new element (li) into the ul with id #tasks
    document.querySelector("#task").value = ""               //this clears out the input field so it shows only the placeholder   

    document.querySelector("#submit").disabled  = true;         // This  disables the submit button again


  
    return false;                                             // Don't submit the form 
    
 }
 


 //COUNTING WITH INTERVALS
 counter = 1;

    function count(){
    counter = counter + 1;
    document.querySelector("#Intervals").innerHTML = counter;
    }

    document.addEventListener('DOMContentLoaded',function(){

    document.querySelector("#intbutton").onclick = count;

    setInterval(count, 1000);                   //This sets the count function to run every 1 sec + it is in miliseconds 
    

    });



// LOCAL STORAGE
// Used to store values in the web browswer
// localStorage.getItem(key) this extracts values from the local storage based on its key
// localStorage.setItem(key,value) this adds a new value to local storage or replaces the value there 
// document.addEventListener('DOMContentLoaded',function(){


if (!localStorage.getItem("counter")){     //if the function can't get an item in the local storage of counter...
    localStorage.setItem("counter",0);      //then set the counter to 0 
} 


function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector("#Intervals").innerHTML = counter;
    localStorage.setItem("counter",counter);
    }

document.addEventListener('DOMContentLoaded',function(){   
    document.querySelector("#Intervals").innerHTML = localStorage.getItem("counter");       //  this remembers the current value of the counter in local storage and prints it out to the page
    document.querySelector("#intbutton").onclick = count;    

});


// OBJECTS gives you the key : value pairs.
let person = {
    first: "Harry",
    last: "Potter"
}
console.log(person.first)  //or
console.log(person["first"]);







 })
// })

   