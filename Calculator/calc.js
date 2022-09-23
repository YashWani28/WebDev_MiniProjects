var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var zero=document.getElementById("zero");
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var equal=document.getElementById("equal");
var mul=document.getElementById("mul");
var div=document.getElementById("div");
var clear=document.getElementById("clear");
var display=document.querySelector(".display")

var container1="0";
var container2="0";
var operator_container="nothing";
var operator_full=false;
var display_len=1;//it will be one when it only has a zero
one.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="1";
    }
    else{
        container2+="1";
    }
    display.textContent+="1";
})
two.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="2";
    }
    else{
        container2+="2";
    }
    display.textContent+="2";
})
three.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="3";
    }
    else{
        container2+="3";
    }
    display.textContent+="3";
})
four.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="4";
    }
    else{
        container2+="4";
    }
    display.textContent+="4";
})
five.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="5";
    }
    else{
        container2+="5";
    }
    display.textContent+="5";
})
six.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="6";
    }
    else{
        container2+="6";
    }
    display.textContent+="6";
})
seven.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="7";
    }
    else{
        container2+="7";
    }
    display.textContent+="7";
})
eight.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="8";
    }
    else{
        container2+="8";
    }
    display.textContent+="8";
})
nine.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="9";
    }
    else{
        container2+="9";
    }
    display.textContent+="9";
})
zero.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        container1+="0";
    }
    else{
        container2+="0";
    }
    display.textContent+="0";
})
plus.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        operator_container="+";
        operator_full=true;
        display.textContent+="+";
    }
    else{
        // container1=toString(container1);
        container1=evaluate();
        container2=0;
        operator_container="+";
        operator_full=true;
        display.textcontent=null;
        display.textContent=container1;
        display.textContent+="+";
         
    }
    /*just to avoid people putting 2 operators together
    else if(operator_full==true && container2!=null)
    {
        
    }
    */

})
minus.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        operator_container="-";
        operator_full=true;
        display.textContent+="-";
    }
    else{
        // container1=toString(container1);
        container1=evaluate();
        container2=0;
        operator_container="-";
        operator_full=true;
        display.textcontent=null;
        display.textContent=container1;
        display.textContent+="-";
         
    }

})
mul.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        operator_container="*";
        operator_full=true;
        display.textContent+="*";
    }
    else{
        // container1=toString(container1);
        container1=evaluate();
        container2=0;
        operator_container="*";
        operator_full=true;
        display.textcontent=null;
        display.textContent=container1;
        display.textContent+="*";
         
    }

})
div.addEventListener("click",function(){
    if(display_len==1){
        display.textContent=null;
        display_len++;
    }
    if(operator_full==false)
    {
        operator_container="/";
        operator_full=true;
        display.textContent+="/";
    }
    else{
        // container1=toString(container1);
        container1=evaluate();
        container2=0;
        operator_container="/";
        operator_full=true;
        display.textcontent=null;
        display.textContent=container1;
        display.textContent+="/";
         
    }

})
clear.addEventListener("click",function(){
    display_len=1;
    display.textContent=0;
    container1="0";
    container2="0";
    operator_container="nothing";
    operator_full=false;
})
equal.addEventListener("click",function(){
    display.textContent=evaluate();// the answer written will be displayed
    display_len=1;
    container1="0";
    container2="0";
    operator_full=false;
    operator_container="nothing";
})



//functions

function evaluate()
{
    if(operator_container=="+")
    {
        return parseInt(container1) + parseInt(container2);
    }
    else if(operator_container=="-")
    {
        return parseInt(container1) - parseInt(container2);

    }
    else if(operator_container=="*")
    {
        return parseInt(container1) * parseInt(container2);

    }else if(operator_container=="/")
    {
        return parseInt(container1) / parseInt(container2);

    }
}