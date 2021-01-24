window.onload = function () {
    var numsquares = 6
    var colors = generatedColors (numsquares)
    var pickedColor = pickColors ()
    var colorDisplay = document.getElementById ("colorDisplay")
    colorDisplay.textContent = pickedColor
    var squares = document.querySelectorAll(".square");
    var messageDisplay = document.querySelector("#message")
    var h1 = document.querySelector ("h1")
    var resetButton = document.querySelector("#reset")
    var easyButton = document.querySelector ("#easyBtn")
    var hardButton = document.querySelector ("#hardBtn")

    easyButton.addEventListener("click", function(){
        hardBtn.classList.remove("selected")
        easyBtn.classList.add("selected")
        numsquares = 3
        colors = generatedColors(numsquares)
        pickedColor = pickColors()
        colorDisplay.textContent = pickedColor
        for (var i =0; i < squares.length; i++){
            if (colors[i]){
                squares[i].style.background = colors[i]
            } else{
                squares[i].style.display ="none"
            }
        }
    })
    hardButton.addEventListener("click", function(){
       hardBtn.classList.add("selected")
       easyBtn.classList.remove("selected")
       numsquares = 6
       colors = generatedColors(numsquares)
       pickedColor = pickColors()
        colorDisplay.textContent = pickedColor
        for (var i =0; i < squares.length; i++){
            squares[i].style.background = colors[i]
            squares[i].style.display ="block"
        }
   })
    resetButton.addEventListener("click", function (){
       //  generate all new colors
       colors = generatedColors (numsquares)
       // pick a random color from the array
       pickedColor = pickColors ()
       // change color display to match picked color
       colorDisplay.textContent = pickedColor
       this.textContent = "New Colors"
       messageDisplay.textContent = ""
       // change colors of squares
       for (var i = 0; i < squares.length; i++ ){
           squares[i].style.background = colors[i]
       }
       h1.style.background = "steelblue"

    })
    for( var i = 0; i < squares.length; i++){
       //  add initial colors to squares
        squares[i].style.background = colors[i];
       //  add click listeners to squares
       squares[i].addEventListener("click", function(){
           // grab color of clicked sqaure
           var clickedColor =  this.style.background
           // compare color grabbed to pickedColor
           if (clickedColor === pickedColor){
               messageDisplay.textContent = "Correct!"
               resetButton.textContent = "Play Again!"
               changeColors(clickedColor)
               h1.style.background = clickedColor
           } else {
               this.style.background = "black"
               messageDisplay.textContent = "Try Again!"
           }
       })
    }
   //  this function changes colors 
    function changeColors(color){
       //  loop through all squares
       for (var i = 0; i < squares.length; i++){
       // change each color to match given color
       squares[i].style.background = color
       } 
    }
   //  this function picks colors from the already created colors
    function pickColors(){
      var random = Math.floor(Math.random() * colors.length)
      return colors[random]
    }
    function generatedColors(num){
        var arr = []
       //  request num times
       for (var i = 0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor())
       }
       // return that array
       return arr;
    }
    function randomColor(){
       //  pick a "red" from 0-255
       var r = Math.floor(Math.random() * 256)
       // pick a "green" from 0-255
       var g = Math.floor(Math.random() * 256)
       // pick a "blue" from 0-255
       var b = Math.floor(Math.random() * 256)
       return "rgb(" + r + ", " + g + ", " + b + ")"
    }
}
