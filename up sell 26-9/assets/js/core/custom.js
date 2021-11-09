$(function() {
    var url = window.location.pathname;  
    var test = url.split("pages/")[1].split(".")[0];
    var ele = $("#"+test);
    var childnode = ele.children();
    ele.addClass("active");
    let text_clr = ele.find("span").css( "color", "#5794FA" );  
    let child_svg =childnode.first();
    let svg_tag = child_svg.find("svg").children().css( "fill", "#5794FA" );
        if (ele.hasClass("active")) {
          let last_child=childnode.last().removeClass("d-none");
        }
});

// preview button js
$(".preview_wraper button").click(function(){
    $("button").removeClass("active_p");
    $(".preview_body").removeClass("mob_view");
    $(".preview_body").removeClass("tab_view");
    $(".preview_body").removeClass("tab_view_post");
    var id = $(this).attr('id');
    var id_post = $(this).attr('id-post');

    if(id === "mob_p"){
      $('.preview_body').addClass("mob_view"); 

    }
    else if(id === "tab_p"){
      $('.preview_body').addClass("tab_view");
    }
    if(id_post === "mob_post"){
      $(".preview_body").removeClass("mob_view");
       $(".preview_body").removeClass("tab_view");
      $('.preview_body').addClass("tab_view_post");
    }

    $(this).addClass("active_p");
});
// image size button

$(".image_size_btn button").click(function(){
  $("button").removeClass("active-img-btn");
  $(this).addClass("active-img-btn");
});


$(window).scroll(function(){
	var scrollPosition =  $(window).scrollTop();
 
  if ( scrollPosition === 0) {
    $(".app_top_bar ").removeClass('position-fixed');
  } else {
   
    $(".app_top_bar ").addClass('position-fixed');
  }
  
});



// $(document).on('scroll', function() {
//   var v = $('#scroll-to').position().top;
//   var b = $(this).scrollTop();
//   var sum = v-b;
//   if(sum <= 0){
//     $(".preview_wraper").addClass('scroll_top');
//   }
//   else{
//     $(".preview_wraper").removeClass('scroll_top');
//   }
// });