var a = document.querySelectorAll(".drum").length;
for(i=0; i<a; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
function handleclick(){
   var buttonInnerHtml = this.innerHTML;
     makeSound(buttonInnerHtml);
      }}
   
   document.addEventListener("keypress",sound);
      function sound(adarsh){
          makeSound(adarsh.key);
      }
   function makeSound (key){
      switch(key){
         case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
         case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
            case"s":
            var tom3 = new Audio ("tom-3.mp3");
            tom3.play();
            break;
            case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
            case "j":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
            case "k":
            var kickbass = new Audio("kick-bass.mp3");
            kickbass.play();
            break;
            case "l":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
    default:
      }
   }
