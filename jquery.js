// navigacija
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});
$("#resize ul li a").click(function() {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});
$(".close-btn").click(function() {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

$(function() {
  $(document).scroll(function() {
    var $nav = $(".nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

new WOW().init();

// Selekcija svih linkova
$('a[href*="#"]')
  // Otkloni linkove koji ne linkuju na nesto
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page linkovi
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Scroll krece ovde
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Da li scroll direkcija postoji
      if (target.length) {
        // Trigger ako samo postoji animacija
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          700,
          function() {
            // Callback posle animacije
            // Must change focus!!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Cekiraj ako je target bio u fokusu
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });
