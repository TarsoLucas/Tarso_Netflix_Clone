$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//const changeIcons = document.getElementsByClassName("desktop-icon")
//const mobileIcons = document.getElementById("N")
//const mobileBars = document.getElementById("bars")
//const width = document.body.clientWidth;
//
//
//function toggleDesktopIcons(){
//    if(width < 670){
//        changeIcons.style.visibility = "hidden";
//        mobileIcons.style.visibility = "visible";
//        mobileBars.style.visibility = "visible";
//    }
//    else{
//        mobileIcons.style.visibility = "hidden";
//        mobileBars.style.visibility = "hidden";
//    }
//}
//
//toggleDesktopIcons();