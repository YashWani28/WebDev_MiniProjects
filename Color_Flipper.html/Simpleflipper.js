var colors=["Red","Green","Blue","Yellow"];
function flip()
{
    var random_num=Math.floor(Math.random()*colors.length);
    document.getElementById("color_name").innerHTML=colors[random_num];
    document.body.style.backgroundColor=colors[random_num];
}