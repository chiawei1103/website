window.onscroll = function (){scrollControl()};

//var progressBar = document.getElementById("progressBar");
//var sticky = progressBar.offsetTop;
//console.log("sticky: "+ sticky);
let mybutton = document.getElementById("myBtn");
function scrollControl() {

    //shrinkTitle
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("nav").style.fontSize = ".5em";
    }
    else{
        document.getElementById("nav").style.fontSize = "1em";
    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    //stickProgressBar
    // if (window.pageYOffset > sticky) {
    //     progressBar.classList.add("sticky");
    // }else {
    //     progressBar.classList.remove("sticky");
    // }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}