
let index=0;
const totalWorkItem = $(".work-item").length;

$(document).ready(function(){

    ///preloader bird
    //  $(window).on("load",function(){
    //      $(".wrapper").addClass("loaded");
    // })
    //preloaderdefault
    $(window).on("load",function(){
        $(".preloader").addClass("loaded");
   })
    // nav toggle

    $(".nav-toggle").click(function(){
        $("header .nav").slideToggle();
    })

    /// auto close when click into "a"
    $(".header .nav a").click(function(){
        if($(window).width() < 760){
            $("header .nav").slideToggle();
        }
        
    })
    // fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");  
        }
    })
    //set lightbox img max heigth
    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height",wHeight+"px");


    //lightbox
    $(".work-item-inner").click(function(){
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass("open");
        ligthboxSlideShow();
    })
    $(".lightbox .prev").click(function(){
        if(index==0){
            index = totalWorkItem -1;
        }
        else{
            index--;
        }
        ligthboxSlideShow();
    })
    $(".lightbox .next").click(function(){
        if(index==totalWorkItem - 1){
            index = 0;
        }
        else{
            index++;
        }
        ligthboxSlideShow();
    })
    // close lightbox
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })
    /// close ligthbox when click outside of img-box
    $(".lightbox").click(function(event){
        if($(event.target).hasClass("lightbox")){
            $(this).removeClass("open");
        }
    })

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

function ligthboxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src",imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totalWorkItem + "/" +(index + 1));
}