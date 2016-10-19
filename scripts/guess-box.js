$(document).ready(function() {

  function getRandom(num) {
    return Math.floor(Math.random() * num);
  }

  var hideCode = function() {
    var lucky_box = getRandom(4);

    $(".guess_box").each(function(index, value) {
      if (lucky_box == index) {
        $(this).append("<span id='has_discount'></span");
        return false;
      }
    });
  }
  hideCode();

  $(".guess_box").click(checkForCode);

  function checkForCode() {
    var discount;

    if ($.contains(this, document.getElementById('has_discount'))) {
      discount = "<h2>Your discount code: CODE" + getRandom(100) + "</h2>";
      }
    else {
      discount = "<h2>Sorry, no discount this time!</h2>";

      $(".guess_box").each(function() {
        if ($.contains(this, document.getElementById('has_discount'))) {
          $(this).addClass("discount");
          }
        else{
          $(this).addClass("no_discount");
        }
      });
    }

    $("#result").append(discount);

    $(".guess_box").each(function() {
      $(this).unbind("click");
    });
  }

  $(".guess_box").hover(
    function() {
      $(this).addClass("my_hover");
    },
    function() {
      $(this).removeClass("my_hover");
    }
  );


  });
