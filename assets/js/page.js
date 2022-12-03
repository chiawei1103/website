window.onscroll = function (){scrollControl()};

//var progressBar = document.getElementById("progressBar");
//var sticky = progressBar.offsetTop;
//console.log("sticky: "+ sticky);

function scrollControl() {

    //shrinkTitle
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("nav").style.fontSize = ".5em";
    }
    else{
        document.getElementById("nav").style.fontSize = "1em";
    }

    //stickProgressBar
    // if (window.pageYOffset > sticky) {
    //     progressBar.classList.add("sticky");
    // }else {
    //     progressBar.classList.remove("sticky");
    // }
}