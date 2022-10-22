//document.querySelector("h1").style.color = "red";
//  $("h1").css("color", "red");
// $("h1").css("color", "green");

// console.log($("h1").css("color"));
// console.log($("h1").css("font-size", "5rem"));
// console.log($("h1").css("font-family"));

// $("h1").addClass("big-title margin - 50");
// we can add two classes in same function by justing putting one space and then add class
// $("h1").text("Bye");
//to change the text
// $("button").html("<p>Bye</p>");
// by using this we can apply html properties
// $("h1").removeClass("big-title");

// console.log($("img").attr("src", "google.png"));

// console.log($("a").attr("href", "https://www.yahoo.com"));

// $("h1").click(function () {
//   $("h1").css("color", "purple");
// }); //after click on the content the h1 content is changed into purple color.

// $("button").click(function () {
//   $("h1").css("color", "purple");
// }); //after click on the content the button the content is changed into purple color.

// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// }); //after clicking any button on the keyboard the content is changed as your key is pressed.

// $("h1").before("<button>New One!</button>"); //before the h1 tag
// $("h1").after("<button>New One!</button>"); //after the h1 tag
// $("h1").append("<button>New One!</button>"); //inside h1 tag i.e <h1><button>New One!</button>Bye   </h1>
// $("h1").prepend("<button>New One!</button>"); //inside h1 tag i.e <h1>Bye<button>New One!</button></h1>

$("button").one("click", function () {
  //   $("h1").hide(); //hides the bye content
  //$("h1").toggle();  // on first button click the content is hidden and on second button click the content is shown.
  //   $("h1").fadeOut(); //disapperes the content in animation.
  //     $("h1").fadeIn(); //appear the content in animation.
  //$("h1").fadeToggle(); //on first button click the content is disappears in animated and on second button click the content is shown.

  //   $("h1").slideUp();
  //   $("h1").slideDown();
  //   $("h1").slideToggle();

  $("h1").slideUp().slideDown().animate({
    opacity: "0.8",
    margin: "20",
    padding: "50px",
  });
});

// $("button").one("click", function () {
//   $("h1").show();
//show the bye content before the hide button is used
// });
