// Play sound via click
var n = document.querySelectorAll("img").length;

for (var i=0; i<n; i++)
{
  document.querySelectorAll("img")[i].addEventListener("click", function ()
  {
    var imgNo = event.srcElement.className;
    makeSound(imgNo);

  });

}

function makeSound(key) {
  switch (key) {
    case "tom-1":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "tom-2":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "tom-3":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "bass":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "cra3":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "cra1":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "cra2":
      var kick = new Audio("sounds/crash.mp3");
      kick.play();
    break;

    default:
      console.log("Oops! no such sound to play.")

  }
}
