$(document).ready(function () {
  $(".first-chat-bulb").css("display", "block");

  $(".menu-icon").click(function () {
    $(".menu-close").toggleClass("popIn");
    $(".menu-close").css("display", "block");
  });

  $(".first-chat-btn").click(function (e) {
    e.preventDefault();
    if ($('#Name').val() != '') {
      $(".first-chat-bulb").addClass("popOutTop");
      $(".second-chat-bulb").css("display", "block");
      $(".first-chat-bulb").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function () {
          $(this).css("visibility", "hidden");
        });
    }
    else {
      $("#Name").addClass("shake");
    }
  });

  $(".second-chat-btn").click(function (e) {
    e.preventDefault();
    if ($('#Message').val() != '') {
      $(".second-chat-bulb").addClass("popOutTop");
      $(".third-chat-bulb").css("display", "block");
    }
    else {
      $("#Message").addClass("shake");
    }
  });

  $(".third-chat-btn").click(function () {
    if ($('#Email').val() != '' && $('#Email').is(':valid')) {
      $(".third-chat-bulb").addClass("popOutTop");
      $(".success-msg").css("display", "block");
    }
    else {
      $("#Email").addClass("shake");
    }
  });

});