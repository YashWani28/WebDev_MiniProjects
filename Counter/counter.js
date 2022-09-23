// var count=document.getElementById("counter").textContent;
var counter=document.querySelector("#counter");
var count=0; 

function todo(btn)/*this funcion is called for each button*/
{
    btn.addEventListener("click",function(e){
        console.log("hi");
        let determine=e.currentTarget.classList;/*e is an event object....current target returns the element which has currently been reported by events listener...then we access the class list of that element which gives the list of classes it has...*/
        console.log(determine);
        if(determine.contains("dec"))//if the element has dec class, it means that the dec button has been clicked...so we decrease the value accordingly
        {
            count--;
            counter.textContent=count;
        }
        else if(determine.contains("rst"))
        {
            count=0;
            counter.textContent=count;
        }
        else{
            count++;
            counter.textContent=count;
        }
        if(count==0)
        {
            counter.style.color="black";//if the count's value is 0, we access its style object and change its color property to black
        }
        else if(count>0)
        {
            counter.style.color="green";
        }
        else{
            counter.style.color="red";
        }
    })
}
var buttons = document.querySelectorAll(".btn");/*will form a list of node elements which are buttons in this case */
buttons.forEach(btn => todo(btn))/*will iterate over every button*/


