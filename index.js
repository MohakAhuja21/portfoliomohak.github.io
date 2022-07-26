// script to toggle sidebar 
document.querySelector('.cross').style.display="none";
function toggleSidebar(){
    document.querySelector(".sidebar").classList.toggle("sidebarGo"); 
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")){
        // used for removing/replacing a element
        document.querySelector(".ham").style.display='inline'
        document.querySelector(".cross").style.display='none'
    }
    else{
        document.querySelector(".ham").style.display='none'
        document.querySelector(".cross").style.display='inline'
    }
}
// script for animating download CV button
let button = document.querySelector(".button");
button.addEventListener("click",()=>{
    button.classList.add("active");

    setTimeout(()=>{
        button.classList.remove("active");
        document.querySelector("i").classList.replace('bx-cloud-download','bx-check-double');
        document.querySelector(".btn-text").innerHTML="completed";
    },6000)//it will remove active button class after 6s.
})

// changing colors by pressing button
// function changeColor(e){
//     document.body.style.background=e;
// }

// function to bring to the top of website
const toTop=document.querySelector('.to-top');
window.addEventListener('scroll',()=>{
    if (window.pageYOffset>100) {
        toTop.classList.add('active');        
    }
    else{
        toTop.classList.remove('active');
    }
})

// 
