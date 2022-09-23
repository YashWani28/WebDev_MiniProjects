const details=[
    {
        img: "image.jpg",
        name: "Susan Smith",
        role: "Web Developer",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid soluta quod expedita velit, temporibus consequatur debitis adipisci aliquam voluptas, error architecto, voluptatum autem iure nostrum doloremque iste aperiam enim porro possimus veniam? Vitae, velit atque magni porro eaque ullam dicta consequatur veniam voluptas distinctio quas rem delectus, mollitia aut error.",
    },
    {
        img: "Steve1.jpg",
        name: "Steve Jobs",
        role: "Android Developer",
        description: "ligendi pariatur velit vitae architecto autem neque fugiat! Eos, nesciunt quod aliquid incidunt assumenda voluptatum veritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae similique laboriosam soluta cum aliquid, fugiat ducimus nam doloribus odit cupiditate unde ullam sequi ipsa deleniti iusto totam, vero laborum inventore voluptatem. Saepe cumque magni, e",
    },
    {
        img: "Bill-Gate.jpg",
        name: "Bill Gates",
        role: "Blockchain Developer",
        description: " voluptatum veritatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae similique iusto totam, vero laborum inventore voluptatem. Saepe cumque magni, e ligendi pariatur velit vitae architecto autem neque fugiat! Eos, nesciunt quod aliquid incidunt assumenda laboriosam soluta cum aliquid, fugiat ducimus nam doloribus odit cupiditate unde ullam sequi ipsa deleniti",
    },
]
var index = 0;
/*getting all the elements */
var left=document.getElementById("left");
var right=document.getElementById("right");
var surprise=document.getElementById("surprisebutton");
var nme=document.querySelector(".name");
var role=document.querySelector(".role");
var desc=document.querySelector(".desc");
var img=document.getElementById("picture");


left.addEventListener("click",function(){
    let index_tofind=setindex("left");
    // console.log(index_tofind);..working
    setcontent(index_tofind);
})
right.addEventListener("click",function(){
    let index_tofind=setindex("right");
    // console.log(index_tofind);..working
    setcontent(index_tofind);

})
surprise.addEventListener("click",function(){
    let index_tofind=setindex("random");
    setcontent(index_tofind);
})

/*functions*/
function setindex(buttonclicked)
{
    if(buttonclicked=="left" && index>0)
    {
        index--;
        return index;
    }
    else if(buttonclicked=="right" && index<2)
    {
        index++;
        return index;    
    } 
    else if(buttonclicked=="random")
    {
        index=getrandomindex();
        return index;
    }
}
function setcontent(indx)
{
   if(indx==0)
   {
    left.style.color="rgb(23 38 43 / 38%)";
   }
   else if(indx==2)
   {
    right.style.color="rgb(23 38 43 / 38%)";
   }
   else
   {
    left.style.color="rgb(22, 175, 225)";
    right.style.color="rgb(22, 175, 225)";
    
   }
    nme.textContent=details[indx].name;
    role.textContent=details[indx].role;
    desc.textContent=details[indx].description;
    img.src=details[indx].img;

}
function getrandomindex()
{
    return Math.floor(Math.random()*details.length);
}


