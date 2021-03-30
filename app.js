const drawer=document.querySelector(".drawer");
const navbar=document.querySelector(".nav-bar");
const menuList=document.querySelectorAll(".title");


drawer.addEventListener('click',()=>{
    drawer.classList.toggle("active");
    navbar.classList.toggle("nav-active");
    menuList.forEach((item,index)=>{
       item.classList.toggle("title-active")
    });
})


const pitchLine=document.querySelector(".pitch-line2");
var string="Programming, Web Development and UI Design";
var tempString="";
var i=0;
for(i=0;i<string.length;i++)
{
   doprint(i);
}
function doprint(i)
{
    setTimeout(function() 
    { tempString+=string[i];
        pitchLine.innerText=tempString;
    },100*i)
}


