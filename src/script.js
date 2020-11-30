$(function() {  
$(window).scroll(function(e){
  if($(window).scrollTop()<=0){
      $("p").addClass("at_top");
    }
  else{
     $("p").removeClass("at_top");
  }
});
$('.aboutcontent').smoove({moveY:'30%',offset:"10%"});
$('.container').smoove({moveY:'10%',offset:"10%"});
$('.workcolumn').smoove({moveY:'50%',offset:"10%"});
$('.worktext').smoove({moveY:'50%',offset:"-10%"});
  
$("#btn").click(function(){
  $(".more").slideToggle("slow");    
  var $this = $(this);
  $this.toggleClass("open");
  if ($this.hasClass("open")) {
  $this.html("Read Less");
  $(".dots").css("display", "none");
        } else {
           $(".dots").css("display", "inline-block");
            $this.html("Read more");
        }
});
  
});
// 導覽列操作
// var nav = document.querySelector("#main");
// var topOfNav  = nav.offsetTop;
// function stickyNav() {
//    if (window.scrollY >= topOfNav ) {
//     nav.classList.add("fixed-nav");
//   } else {
//     nav.classList.remove("fixed-nav");
//   }
// }
// window.addEventListener('scroll', stickyNav);