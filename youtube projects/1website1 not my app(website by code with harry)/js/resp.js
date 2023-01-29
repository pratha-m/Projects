burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
rightnav=document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
 rightnav.classList.toggle('visibility-class-resp');
 navlist.classList.toggle('visibility-class-resp');
 navbar.classList.toggle('height-nav-resp');
})