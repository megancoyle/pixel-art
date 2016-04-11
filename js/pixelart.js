// Set variables for jQuery for pixel arting
var $button = $("#set-color");
var $brush = $(".brush");
var $input = $("#color-field");
var $form = $("#form");
var $body = $("body");
var $art = $("#art");

// Set color to use
$button.on("click", function (e) {
    e.preventDefault();
    var color = $input.val();
    $brush.css("background", color);
})

// Creates pixel art canvas
for (var i = 0; i < 5000; i++) {
$art.append("<div class='square'></div>");
}

// Gives user ability to draw on canvas
$(".square").on("mouseover", function (event){
  var $square = $(event.target);
  $square.css("background", $input.val())
})

// JavaScript for Taking Screenshot of the Page
    $("#btnSave").click(function() {
      html2canvas(document.getElementById('art')).then(function(canvas) {
          document.getElementById('image-output').appendChild(canvas);
      });
});
