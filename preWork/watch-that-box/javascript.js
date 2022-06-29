document.getElementById("growBox").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("blueBox").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("fadeBox").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("resetBox").addEventListener("click", function(){

    document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px";

});
