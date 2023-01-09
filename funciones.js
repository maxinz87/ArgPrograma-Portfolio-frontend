let navBg = document.querySelector('.navBg');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100){
        navBg.classList.remove('animate__animated','animate__fadeOutUp');
        navBg.classList.add('bg-dark', 'shadow', 'animate__animated','animate__fadeIn');
    }

    else{
        navBg.classList.remove('shadow', 'animate__animated', 'animate__fadeIn');
        navBg.classList.add('animate__animated','animate__fadeOutUp');

    }

});