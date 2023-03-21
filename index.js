

for (var i = 0; i <document.getElementsByClassName("drum").length; i++) {
  var butt=document.getElementsByClassName("drum")[i];
  butt.addEventListener("click",function(){
    var trigButt=this.innerHTML;
    makeSound(trigButt);
    buttonFlash(trigButt);


  });


}
document.addEventListener("keydown",function(event){
  var keybut=event.key;
makeSound(keybut);
buttonFlash(keybut);
});


function makeSound(key){
  switch (key) {
    case "w":
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
      break;
      case "a":
  var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
        break;
        case "s":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
          break;
          case "d":
          var tom4=new Audio("sounds/tom-4.mp3");
          tom4.play();
            break;
            case "j":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
              break;
              case "k":
              var tom2=new Audio("sounds/tom-2.mp3");
              tom2.play();
                break;
                case "l":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                  break;
    default:console.log(key);
}
}



function buttonFlash(key){
  var butflas=document.querySelector('.'+key);
  butflas.classList.add("pressed");

  setTimeout(function(){
    butflas.classList.remove("pressed");
  }, 100);
}
