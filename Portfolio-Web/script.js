let menu = document.querySelector("#menu-bars");
let header =  document.querySelector(".header");

menu.onclick = () =>{
    menu.classList.toggle("fa-window-close");
    header.classList.toggle("active");
    document.body.classList.toggle("active");
}

window.onscroll = () =>{
    if(window.innerWidth < 991){
       menu.classList.remove('fa-times');
       header.classList.remove('active');
       document.body.classList.remove('active');
    }
} 
