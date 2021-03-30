const navbar=document.querySelector(".nav-bar");
const menuList=document.querySelectorAll(".menu-icon");
const pitchLine=document.querySelector(".pitch-line2");
var string="Programming, Web Development and UI Design";
var tempString="";
var i=0;
setTimeout(()=>{
    for(i=0;i<string.length;i++)
    {
     doprint(i);
    }   
},1500)

function doprint(i)
{
    setTimeout(function() 
    { tempString+=string[i];
        pitchLine.innerText=tempString;
    },100*i)
}

const hamberger=document.querySelector(".hamberger");
hamberger.addEventListener('click',()=>{
    hamberger.classList.toggle("open");
    navbar.classList.toggle("nav-active");
    menuList.forEach((item,index)=>{
        item.classList.toggle("menu-icon-active")
     });
})


