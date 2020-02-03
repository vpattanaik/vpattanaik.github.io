document.onload =   $(".navbar-toggler").click();

$(".nav-item").on("click", function() {
  $(".nav-item").removeClass("active");
  $(this).addClass("active");
});
